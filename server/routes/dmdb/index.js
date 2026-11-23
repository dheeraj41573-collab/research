const express = require("express");
const router = express.Router();
const dmdbController = require("../../controllers/dmdb/dmdbController");

router.get("/species", dmdbController.getAllSpeciesNames);
router.post("/:species", dmdbController.addSpeciesData);
router.get("/:species", dmdbController.getSpeciesData);

module.exports = router;
