const express = require("express");

const PharmacologyPlantTrichodermaController = require("../../controllers/trichoderma/PharmacologyPlantTrichodermaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", PharmacologyPlantTrichodermaController.addPharmacologyPlantTrichoderma);
router.get("/:PharmacologyPlantTrichodermaId", PharmacologyPlantTrichodermaController.getOnePharmacologyPlantTrichoderma);
router.get("/", PharmacologyPlantTrichodermaController.getAllPharmacologyPlantTrichoderma);
router.delete("/:PharmacologyPlantTrichodermaId", checkAuth, PharmacologyPlantTrichodermaController.deletePharmacologyPlantTrichoderma);
router.put("/:PharmacologyPlantTrichodermaId", checkAuth, PharmacologyPlantTrichodermaController.updatePharmacologyPlantTrichoderma);

module.exports = router;
