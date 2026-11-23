const express = require("express");

const PharmacologyPlantGMDBController = require("../../controllers/gmdb/PharmacologyPlantGMDBController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", PharmacologyPlantGMDBController.addPharmacologyGmdb);
router.get("/:pharmacologyId", PharmacologyPlantGMDBController.getOnePharmacologyGmdb);
router.get("/", PharmacologyPlantGMDBController.getAllPharmacologyGmdbs);
router.delete("/:pharmacologyId", checkAuth, PharmacologyPlantGMDBController.deletePharmacologyGmdb);
router.put("/:pharmacologyId", checkAuth, PharmacologyPlantGMDBController.updatePharmacologyGmdb);
router.post("/seed", PharmacologyPlantGMDBController.seedPharmacologyPlantGmdb);

module.exports = router;
