const express = require("express");

const FlavoparmeliaController = require("../../controllers/lichMDb/FlavoparmeliaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", FlavoparmeliaController.addFlavoparmelia);
router.get("/:flavoparmeliaId", FlavoparmeliaController.getOneFlavoparmelia);
router.get("/", FlavoparmeliaController.getAllFlavoparmelias);
router.delete("/:flavoparmeliaId", checkAuth, FlavoparmeliaController.deleteFlavoparmelia);
router.put("/:flavoparmeliaId", checkAuth, FlavoparmeliaController.updateFlavoparmelia);

module.exports = router;
