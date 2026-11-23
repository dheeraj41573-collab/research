const express = require("express");

const FlavoparmeliaHaysomiiController = require("../../controllers/lichMDb/FlavoparmeliaHaysomiiController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", FlavoparmeliaHaysomiiController.addFlavoparmeliaHaysomii);
router.get("/:flavoparmeliaHaysomiiId", FlavoparmeliaHaysomiiController.getOneFlavoparmeliaHaysomii);
router.get("/", FlavoparmeliaHaysomiiController.getAllFlavoparmeliaHaysomii);
router.delete("/:flavoparmeliaHaysomiiId", checkAuth, FlavoparmeliaHaysomiiController.deleteFlavoparmeliaHaysomii);
router.put("/:flavoparmeliaHaysomiiId", checkAuth, FlavoparmeliaHaysomiiController.updateFlavoparmeliaHaysomii);

module.exports = router;
