const express = require("express");

const PlatismatiaController = require("../../controllers/lichMDb/PlatismatiaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", PlatismatiaController.addPlatismatia);
router.get("/:platismatiaId", PlatismatiaController.getOnePlatismatia);
router.get("/", PlatismatiaController.getAllPlatismatias);
router.delete("/:platismatiaId", checkAuth, PlatismatiaController.deletePlatismatia);
router.put("/:platismatiaId", checkAuth, PlatismatiaController.updatePlatismatia);

module.exports = router;
