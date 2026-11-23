const express = require("express");

const RicasoliaController = require("../../controllers/lichMDb/RicasoliaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", RicasoliaController.addRicasolia);
router.get("/:ricasoliaId", RicasoliaController.getOneRicasolia);
router.get("/", RicasoliaController.getAllRicasolias);
router.delete("/:ricasoliaId", checkAuth, RicasoliaController.deleteRicasolia);
router.put("/:ricasoliaId", checkAuth, RicasoliaController.updateRicasolia);

module.exports = router;
