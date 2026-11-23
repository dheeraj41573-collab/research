const express = require("express");
const router = express.Router();
const { saveDownload, getAllDownloads, getDownloadSummary } = require("../controllers/DownloadController.js");
const checkAdmin = require("../middlewares/check-admin.js");

router.post("/", saveDownload);
router.get("/summary", getDownloadSummary);
router.get("/", checkAdmin, getAllDownloads);

module.exports = router;
