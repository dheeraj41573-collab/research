const express = require("express");

const PharmacologyBiologicalGMDBController = require("../../controllers/gmdb/PharmacologyBiologicalGMDBController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", PharmacologyBiologicalGMDBController.addPharmacologyGmdb);
router.get("/:pharmacologyId", PharmacologyBiologicalGMDBController.getOnePharmacologyGmdb);
router.get("/", PharmacologyBiologicalGMDBController.getAllPharmacologyGmdbs);
router.delete("/:pharmacologyId", checkAuth, PharmacologyBiologicalGMDBController.deletePharmacologyGmdb);
router.put("/:pharmacologyId", checkAuth, PharmacologyBiologicalGMDBController.updatePharmacologyGmdb);
router.post("/seed", PharmacologyBiologicalGMDBController.seedPharmacologyBiologicalGmdb);

module.exports = router;
