const express = require("express");

const HeterodermiaController = require("../../controllers/lichMDb/HeterodermiaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", HeterodermiaController.addHeterodermia);
router.get("/:heterodermiaId", HeterodermiaController.getOneHeterodermia);
router.get("/", HeterodermiaController.getAllHeterodermias);
router.delete("/:heterodermiaId", checkAuth, HeterodermiaController.deleteHeterodermia);
router.put("/:heterodermiaId", checkAuth, HeterodermiaController.updateHeterodermia);

module.exports = router;
