const express = require("express");
const router = express.Router();
const gmdbController = require("../../controllers/gmdb/gmdbController");

router.get("/species", gmdbController.getAllSpeciesNames);
router.post("/:species", gmdbController.addSpeciesData);
router.get("/:species", gmdbController.getSpeciesData);

module.exports = router;
