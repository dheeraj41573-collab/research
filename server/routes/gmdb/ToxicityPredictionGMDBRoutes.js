const express = require("express");
const ToxicityPredictionGMDBController = require("../../controllers/gmdb/ToxicityPredictionGMDBController");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", ToxicityPredictionGMDBController.addToxicityPrediction);
router.get("/:toxicityId", ToxicityPredictionGMDBController.getOneToxicityPrediction);
router.get("/", ToxicityPredictionGMDBController.getAllToxicityPredictions);
router.delete("/:toxicityId", checkAuth, ToxicityPredictionGMDBController.deleteToxicityPrediction);
router.put("/:toxicityId", checkAuth, ToxicityPredictionGMDBController.updateToxicityPrediction);
router.post("/seed", ToxicityPredictionGMDBController.seedToxicityPrediction);

module.exports = router;
