const express = require("express");

const PharmacologyPlantDMDBController = require("../../controllers/dmdb/PharmacologyPlantDMDBController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", PharmacologyPlantDMDBController.addPharmacologyDmdb);
router.get("/:pharmacologyId", PharmacologyPlantDMDBController.getOnePharmacologyDmdb);
router.get("/", PharmacologyPlantDMDBController.getAllPharmacologyDmdbs);
router.delete("/:pharmacologyId", checkAuth, PharmacologyPlantDMDBController.deletePharmacologyDmdb);
router.put("/:pharmacologyId", checkAuth, PharmacologyPlantDMDBController.updatePharmacologyDmdb);
router.post("/seed", PharmacologyPlantDMDBController.seedPharmacologyPlantDmdb);

module.exports = router;
