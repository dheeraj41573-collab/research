const express = require("express");

const StatisticsLichMDbController = require("../../controllers/lichMDb/StatisticsLichMDbController");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", StatisticsLichMDbController.addStatisticsLichMDb);
router.get("/:statisticsId", StatisticsLichMDbController.getOneStatisticsLichMDb);
router.get("/", StatisticsLichMDbController.getAllStatisticsLichMDb);
router.delete("/:statisticsId",checkAuth, StatisticsLichMDbController.deleteStatisticsLichMDb);
router.put("/:statisticsId",checkAuth, StatisticsLichMDbController.updateStatisticsLichMDb);

module.exports = router;