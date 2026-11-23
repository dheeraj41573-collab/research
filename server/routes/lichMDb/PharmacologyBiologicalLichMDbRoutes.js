const express = require("express");

const PharmacologyBiologicalLichMDbController = require("../../controllers/lichMDb/PharmacologyBiologicalLichMDbController");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", PharmacologyBiologicalLichMDbController.addPharmacologyLichMDb);
router.get("/:pharmacologyBiologicalId", PharmacologyBiologicalLichMDbController.getOnePharmacologyLichMDb);
router.get("/", PharmacologyBiologicalLichMDbController.getAllPharmacologyLichMDbs);
router.delete("/:pharmacologyBiologicalId",checkAuth, PharmacologyBiologicalLichMDbController.deletePharmacologyLichMDb);
router.put("/:pharmacologyBiologicalId",checkAuth, PharmacologyBiologicalLichMDbController.updatePharmacologyLichMDb);

module.exports = router;