const express = require("express");

const PharmacologyPlantSmdbController = require("../../controllers/smdb/PharmacologyPlantSmdbController.js")
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", PharmacologyPlantSmdbController.addPharmacologySmdb);
router.get("/:pharmacologyPlantId", PharmacologyPlantSmdbController.getOnePharmacologySmdb);
router.get("/", PharmacologyPlantSmdbController.getAllPharmacologysSmdb);
router.delete("/:pharmacologyPlantId",checkAuth, PharmacologyPlantSmdbController.deletePharmacologySmdb);
router.put("/:pharmacologyPlantId",checkAuth, PharmacologyPlantSmdbController.updatePharmacologySmdb);

module.exports = router;