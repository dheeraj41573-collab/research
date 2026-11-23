const express = require("express");
const router = express.Router();
const StatisticsDMDBController = require("../../controllers/dmdb/StatisticsDMDBController.js");
const checkAuth = require("../../../server/middlewares/check-auth.js");

router.post("/", StatisticsDMDBController.addStatisticsDmdb);
router.get("/", StatisticsDMDBController.getAllStatisticsDmdbs);
router.delete("/:statisticsId", checkAuth, StatisticsDMDBController.deleteStatisticsDmdb);
router.put("/:statisticsId", checkAuth, StatisticsDMDBController.updateStatisticsDmdb);

module.exports = router;
