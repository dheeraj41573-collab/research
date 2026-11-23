const express = require("express");

const StatisticsTrichodermaController = require("../../controllers/trichoderma/StatisticsTrichodermaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", StatisticsTrichodermaController.addStatisticsTrichoderma);
router.get("/:StatisticsTrichodermaId", StatisticsTrichodermaController.getOneStatisticsTrichoderma);
router.get("/", StatisticsTrichodermaController.getAllStatisticsTrichoderma);
router.delete("/:StatisticsTrichodermaId", checkAuth, StatisticsTrichodermaController.deleteStatisticsTrichoderma);
router.put("/:StatisticsTrichodermaId", checkAuth, StatisticsTrichodermaController.updateStatisticsTrichoderma);

module.exports = router;
