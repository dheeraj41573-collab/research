const express = require("express");

const LecanoraFrustulosaController = require("../../controllers/lichMDb/LecanoraFrustulosaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", LecanoraFrustulosaController.addLecanoraFrustulosa);
router.get("/:lecanoraFrustulosaId", LecanoraFrustulosaController.getOneLecanoraFrustulosa);
router.get("/", LecanoraFrustulosaController.getAllLecanoraFrustulosas);
router.delete("/:lecanoraFrustulosaId", checkAuth, LecanoraFrustulosaController.deleteLecanoraFrustulosa);
router.put("/:lecanoraFrustulosaId", checkAuth, LecanoraFrustulosaController.updateLecanoraFrustulosa);

module.exports = router;
