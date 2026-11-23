const express = require("express");

const PharmacologyCerealGMDBController = require("../../controllers/gmdb/PharmacologyCerealGMDBController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", PharmacologyCerealGMDBController.addPharmacologyGmdb);
router.get("/:pharmacologyId", PharmacologyCerealGMDBController.getOnePharmacologyGmdb);
router.get("/", PharmacologyCerealGMDBController.getAllPharmacologyGmdbs);
router.delete("/:pharmacologyId", checkAuth, PharmacologyCerealGMDBController.deletePharmacologyGmdb);
router.put("/:pharmacologyId", checkAuth, PharmacologyCerealGMDBController.updatePharmacologyGmdb);
router.post("/seed", PharmacologyCerealGMDBController.seedPharmacologyCerealGmdb);

module.exports = router;
