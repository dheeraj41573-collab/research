const express = require("express");
const router = express.Router();
const PharmacologyCerealFMDBController = require("../../controllers/fmdb/PharmacologyCerealFMDBController.js");
const checkAuth = require("../../middlewares/check-auth");

router.post("/", PharmacologyCerealFMDBController.addPharmacologyFmdb);
router.get("/:pharmacologyId", PharmacologyCerealFMDBController.getOnePharmacologyFmdb);
router.get("/", PharmacologyCerealFMDBController.getAllPharmacologyFmdbs);
router.delete("/:pharmacologyId", checkAuth, PharmacologyCerealFMDBController.deletePharmacologyFmdb);
router.put("/:pharmacologyId", checkAuth, PharmacologyCerealFMDBController.updatePharmacologyFmdb);
router.post("/seed", PharmacologyCerealFMDBController.seedPharmacologyCerealFmdb);

module.exports = router;
