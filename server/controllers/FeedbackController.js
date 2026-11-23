const Feedback = require("../models/FeedbackModel.js");
const mongoose = require("mongoose");

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const submitFeedback = async (req, res) => {
  try {
    const name = typeof req.body?.name === "string" ? req.body.name.trim() : "";
    const email = typeof req.body?.email === "string" ? req.body.email.trim() : "";
    const rating = Number(req.body?.rating);
    const message = typeof req.body?.message === "string" ? req.body.message.trim() : "";

    if (!name) {
      return res.status(400).json({ success: false, message: "Name is required" });
    }
    if (name.length > 100) {
      return res.status(400).json({ success: false, message: "Name must be less than 100 characters" });
    }
    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }
    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({ success: false, message: "Invalid email format" });
    }
    if (!Number.isFinite(rating) || rating < 1 || rating > 5) {
      return res.status(400).json({ success: false, message: "Rating must be between 1 and 5" });
    }
    if (!message) {
      return res.status(400).json({ success: false, message: "Feedback message is required" });
    }
    if (message.length > 2000) {
      return res.status(400).json({ success: false, message: "Message must be less than 2000 characters" });
    }

    const feedback = new Feedback({
      _id: new mongoose.Types.ObjectId(),
      name,
      email,
      rating,
      message,
      status: "pending",
    });

    const saved = await feedback.save();

    return res.status(201).json({
      success: true,
      message: "Feedback submitted successfully. It will be published after admin approval.",
      data: {
        _id: saved._id,
        name: saved.name,
        rating: saved.rating,
        status: saved.status,
        createdAt: saved.createdAt,
      },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to submit feedback",
      error: err.message,
    });
  }
};

const getApprovedFeedback = async (req, res) => {
  try {
    const limitRaw = Number(req.query?.limit);
    const limit = Number.isFinite(limitRaw) && limitRaw > 0 ? Math.min(limitRaw, 100) : 50;

    const items = await Feedback.find({ status: "approved" })
      .select("name rating message createdAt")
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean();

    return res.status(200).json({
      success: true,
      count: items.length,
      data: items,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch approved feedback",
      error: err.message,
    });
  }
};

const getAllFeedback = async (req, res) => {
  try {
    const statusFilter = typeof req.query?.status === "string" ? req.query.status.trim().toLowerCase() : null;
    const validStatuses = ["pending", "approved", "rejected"];
    const query = {};
    if (statusFilter && validStatuses.includes(statusFilter)) {
      query.status = statusFilter;
    }

    const items = await Feedback.find(query)
      .select("name email rating message status createdAt reviewedAt adminNote")
      .sort({ createdAt: -1 })
      .lean();

    return res.status(200).json({
      success: true,
      count: items.length,
      data: items,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch feedback",
      error: err.message,
    });
  }
};

const updateFeedbackStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const status = typeof req.body?.status === "string" ? req.body.status.trim().toLowerCase() : "";
    const adminNote = typeof req.body?.adminNote === "string" ? req.body.adminNote.trim() : null;
    const reviewedBy = req.body?.userId || null;

    if (!status || !["pending", "approved", "rejected"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Status must be one of: pending, approved, rejected",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid feedback ID" });
    }

    const updated = await Feedback.findByIdAndUpdate(
      id,
      {
        status,
        reviewedAt: new Date(),
        reviewedBy: reviewedBy && mongoose.Types.ObjectId.isValid(reviewedBy) ? reviewedBy : null,
        adminNote: adminNote && adminNote.length > 0 ? adminNote : null,
      },
      { new: true, runValidators: true }
    ).select("name email rating message status createdAt reviewedAt adminNote");

    if (!updated) {
      return res.status(404).json({ success: false, message: "Feedback not found" });
    }

    return res.status(200).json({
      success: true,
      message: `Feedback status updated to ${status}`,
      data: updated,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to update feedback status",
      error: err.message,
    });
  }
};

const getFeedbackStats = async (req, res) => {
  try {
    const [pending, approved, rejected, total] = await Promise.all([
      Feedback.countDocuments({ status: "pending" }),
      Feedback.countDocuments({ status: "approved" }),
      Feedback.countDocuments({ status: "rejected" }),
      Feedback.countDocuments({}),
    ]);

    const avgRatingAgg = await Feedback.aggregate([
      { $match: { status: "approved" } },
      { $group: { _id: null, avgRating: { $avg: "$rating" } } },
    ]);

    const averageRating = avgRatingAgg.length > 0 ? Number(avgRatingAgg[0].avgRating.toFixed(1)) : 0;

    return res.status(200).json({
      success: true,
      data: {
        total,
        pending,
        approved,
        rejected,
        averageRating,
      },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch feedback stats",
      error: err.message,
    });
  }
};

module.exports = {
  submitFeedback,
  getApprovedFeedback,
  getAllFeedback,
  updateFeedbackStatus,
  getFeedbackStats,
};
