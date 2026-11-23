const express = require("express");
const router = express.Router();
const PharmacologyBiologicalFMDBController = require("../../controllers/fmdb/PharmacologyBiologicalFMDBController.js");
const checkAuth = require("../../middlewares/check-auth");

router.post("/", PharmacologyBiologicalFMDBController.addPharmacologyFmdb);
router.get("/:pharmacologyId", PharmacologyBiologicalFMDBController.getOnePharmacologyFmdb);
router.get("/", PharmacologyBiologicalFMDBController.getAllPharmacologyFmdbs);
router.delete("/:pharmacologyId", checkAuth, PharmacologyBiologicalFMDBController.deletePharmacologyFmdb);
router.put("/:pharmacologyId", checkAuth, PharmacologyBiologicalFMDBController.updatePharmacologyFmdb);
router.post("/seed", PharmacologyBiologicalFMDBController.seedPharmacologyBiologicalFmdb);

module.exports = router;
