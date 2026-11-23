const express = require("express");

const StatisticsController = require("../../controllers/cmdb/StatisticsController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", StatisticsController.addStatistics);
router.get("/:statisticsId", StatisticsController.getOneStatistics);
router.get("/", StatisticsController.getAllStatistics);
router.delete("/:statisticsId",checkAuth, StatisticsController.deleteStatistics);
router.put("/:statisticsId",checkAuth, StatisticsController.updateStatistics);

module.exports = router;