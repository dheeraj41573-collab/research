const express = require("express");
const router = express.Router();
const PharmacologyPlantFMDBController = require("../../controllers/fmdb/PharmacologyPlantFMDBController.js");
const checkAuth = require("../../middlewares/check-auth");

router.post("/", PharmacologyPlantFMDBController.addPharmacologyFmdb);
router.get("/:pharmacologyId", PharmacologyPlantFMDBController.getOnePharmacologyFmdb);
router.get("/", PharmacologyPlantFMDBController.getAllPharmacologyFmdbs);
router.delete("/:pharmacologyId", checkAuth, PharmacologyPlantFMDBController.deletePharmacologyFmdb);
router.put("/:pharmacologyId", checkAuth, PharmacologyPlantFMDBController.updatePharmacologyFmdb);
router.post("/seed", PharmacologyPlantFMDBController.seedPharmacologyPlantFmdb);

module.exports = router;
