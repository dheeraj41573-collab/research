const express = require("express");

const PharmacologyBiologicalDMDBController = require("../../controllers/dmdb/PharmacologyBiologicalDMDBController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", PharmacologyBiologicalDMDBController.addPharmacologyDmdb);
router.get("/:pharmacologyId", PharmacologyBiologicalDMDBController.getOnePharmacologyDmdb);
router.get("/", PharmacologyBiologicalDMDBController.getAllPharmacologyDmdbs);
router.delete("/:pharmacologyId", checkAuth, PharmacologyBiologicalDMDBController.deletePharmacologyDmdb);
router.put("/:pharmacologyId", checkAuth, PharmacologyBiologicalDMDBController.updatePharmacologyDmdb);
router.post("/seed", PharmacologyBiologicalDMDBController.seedPharmacologyBiologicalDmdb);

module.exports = router;
