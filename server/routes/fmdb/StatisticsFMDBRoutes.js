const express = require("express");
const router = express.Router();
const StatisticsFMDBController = require("../../controllers/fmdb/StatisticsFMDBController.js");
const checkAuth = require("../../../server/middlewares/check-auth.js");

router.post("/", StatisticsFMDBController.addStatisticsFmdb);
router.get("/", StatisticsFMDBController.getAllStatisticsFmdbs);
router.delete("/:statisticsId", checkAuth, StatisticsFMDBController.deleteStatisticsFmdb);
router.put("/:statisticsId", checkAuth, StatisticsFMDBController.updateStatisticsFmdb);
router.post("/seed", StatisticsFMDBController.seedStatisticsFmdb);

module.exports = router;
