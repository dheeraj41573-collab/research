const express = require("express");

const StatisticsSmdbController = require("../../controllers/smdb/StatisticsSmdbController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", StatisticsSmdbController.addStatisticsSmdb);
router.get("/:statisticsId", StatisticsSmdbController.getOneStatisticsSmdb);
router.get("/", StatisticsSmdbController.getAllStatisticsSmdb);
router.delete("/:statisticsId",checkAuth, StatisticsSmdbController.deleteStatisticsSmdb);
router.put("/:statisticsId",checkAuth, StatisticsSmdbController.updateStatisticsSmdb);

module.exports = router;