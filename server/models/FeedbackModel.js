const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true, trim: true, maxlength: 100 },
  email: { type: String, required: true, trim: true, maxlength: 150 },
  rating: { type: Number, required: true, min: 1, max: 5 },
  message: { type: String, required: true, trim: true, maxlength: 2000 },
  status: {
    type: String,
    required: true,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
    index: true,
  },
  createdAt: { type: Date, default: Date.now, index: true },
  reviewedAt: { type: Date, default: null },
  reviewedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  adminNote: { type: String, default: null, trim: true, maxlength: 1000 },
});

module.exports = mongoose.model("Feedback", feedbackSchema);
