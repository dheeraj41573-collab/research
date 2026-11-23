const express = require("express");
const KalonjiController = require("../../controllers/smdb/KalonjiController.js")
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", KalonjiController.addKalonji);
router.get("/:kalonjiId", KalonjiController.getOneKalonji);
router.get("/", KalonjiController.getAllKalonji);
router.delete("/:kalonjiId",checkAuth, KalonjiController.deleteKalonji);
router.put("/:kalonjiId",checkAuth, KalonjiController.updateKalonji);

module.exports = router;