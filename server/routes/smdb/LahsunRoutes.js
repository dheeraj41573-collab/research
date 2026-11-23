const express = require("express");

const LahsunController = require("../../controllers/smdb/LahsunController.js")
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", LahsunController.addLahsun);
router.get("/:lahsunId", LahsunController.getOneLahsun);
router.get("/", LahsunController.getAllLahsun);
router.delete("/:lahsunId",checkAuth, LahsunController.deleteLahsun);
router.put("/:lahsunId",checkAuth, LahsunController.updateLahsun);

module.exports = router;