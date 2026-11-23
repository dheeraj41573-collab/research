const express = require("express");

const StatisticsGMDBController = require("../../controllers/gmdb/StatisticsGMDBController.js");
const checkAuth = require("../../../server/middlewares/check-auth.js");

const router = express.Router();

router.post("/", StatisticsGMDBController.addStatisticsGmdb);
router.get("/sheet-one/all", StatisticsGMDBController.getStatisticsGmdb);
// router.get("/sheet-two/all", StatisticsGMDBController.getStatisticsSheetTwo);
router.get("/", StatisticsGMDBController.getAllStatisticsGmdbs);
// router.get("/:statisticsId", StatisticsGMDBController.getOneStatisticsGmdb);
router.delete("/:statisticsId", checkAuth, StatisticsGMDBController.deleteStatisticsGmdb);
router.put("/:statisticsId", checkAuth, StatisticsGMDBController.updateStatisticsGmdb);
// router.post("/seed", StatisticsGMDBController.seedStatisticsGmdb);

module.exports = router;
