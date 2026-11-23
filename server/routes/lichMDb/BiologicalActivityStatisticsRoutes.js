const express = require("express");
const router = express.Router();
const {
  getBiologicalActivityStatistics,
  getBiologicalActivityStatisticsById,
  createBiologicalActivityStatistics,
  updateBiologicalActivityStatistics,
  deleteBiologicalActivityStatistics,
  importBiologicalActivityStatistics
} = require("../../controllers/lichMDb/BiologicalActivityStatisticsController");

// GET all biological activity statistics
router.get("/", getBiologicalActivityStatistics);

// GET biological activity statistics by ID
router.get("/:id", getBiologicalActivityStatisticsById);

// POST create new biological activity statistics
router.post("/", createBiologicalActivityStatistics);

// PUT update biological activity statistics
router.put("/:id", updateBiologicalActivityStatistics);

// DELETE biological activity statistics
router.delete("/:id", deleteBiologicalActivityStatistics);

// POST import biological activity statistics from JSON file
router.post("/import", importBiologicalActivityStatistics);

module.exports = router;
