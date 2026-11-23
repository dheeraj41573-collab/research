const express = require("express");

const PharmacologyPlantLichMDbController = require("../../controllers/lichMDb/PharmacologyPlantLichMDbController.js")
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", PharmacologyPlantLichMDbController.addPharmacologyLichMDb);
router.get("/:pharmacologyPlantId", PharmacologyPlantLichMDbController.getOnePharmacologyLichMDb);
router.get("/", PharmacologyPlantLichMDbController.getAllPharmacologyLichMDbs);
router.delete("/:pharmacologyPlantId",checkAuth, PharmacologyPlantLichMDbController.deletePharmacologyLichMDb);
router.put("/:pharmacologyPlantId",checkAuth, PharmacologyPlantLichMDbController.updatePharmacologyLichMDb);

module.exports = router;