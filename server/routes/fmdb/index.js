const express = require("express");
const router = express.Router();
const fmdbController = require("../../controllers/fmdb/fmdbController");

router.get("/species", fmdbController.getAllSpeciesNames);
router.post("/:species", fmdbController.addSpeciesData);
router.get("/:species", fmdbController.getSpeciesData);

module.exports = router;
