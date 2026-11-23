const express = require("express");

const PharmacologyCerealDMDBController = require("../../controllers/dmdb/PharmacologyCerealDMDBController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", PharmacologyCerealDMDBController.addPharmacologyDmdb);
router.get("/:pharmacologyId", PharmacologyCerealDMDBController.getOnePharmacologyDmdb);
router.get("/", PharmacologyCerealDMDBController.getAllPharmacologyDmdbs);
router.delete("/:pharmacologyId", checkAuth, PharmacologyCerealDMDBController.deletePharmacologyDmdb);
router.put("/:pharmacologyId", checkAuth, PharmacologyCerealDMDBController.updatePharmacologyDmdb);
router.post("/seed", PharmacologyCerealDMDBController.seedPharmacologyCerealDmdb);

module.exports = router;
