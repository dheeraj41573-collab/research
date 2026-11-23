const express = require("express");

const FeedbackController = require("../controllers/FeedbackController.js");
const checkAdmin = require("../middlewares/check-admin.js");

const router = express.Router();

router.post("/", FeedbackController.submitFeedback);
router.get("/approved", FeedbackController.getApprovedFeedback);
router.get("/stats", FeedbackController.getFeedbackStats);
router.get("/", checkAdmin, FeedbackController.getAllFeedback);
router.patch("/:id/status", checkAdmin, FeedbackController.updateFeedbackStatus);

module.exports = router;
