const express = require("express");

const MenegazziaController = require("../../controllers/lichMDb/MenegazziaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", MenegazziaController.addMenegazzia);
router.get("/:menegazziaId", MenegazziaController.getOneMenegazzia);
router.get("/", MenegazziaController.getAllMenegazzias);
router.delete("/:menegazziaId", checkAuth, MenegazziaController.deleteMenegazzia);
router.put("/:menegazziaId", checkAuth, MenegazziaController.updateMenegazzia);

module.exports = router;
