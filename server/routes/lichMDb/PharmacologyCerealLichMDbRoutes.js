const express = require("express");

const PharmacologyCerealLichMDbController = require("../../controllers/lichMDb/PharmacologyCerealLichMDbController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", PharmacologyCerealLichMDbController.addPharmacologyLichMDb);
router.get("/:pharmacologyCerealId", PharmacologyCerealLichMDbController.getOnePharmacologyLichMDb);
router.get("/", PharmacologyCerealLichMDbController.getAllPharmacologyLichMDbs);
router.delete("/:pharmacologyCerealId",checkAuth, PharmacologyCerealLichMDbController.deletePharmacologyLichMDb);
router.put("/:pharmacologyCerealId",checkAuth, PharmacologyCerealLichMDbController.updatePharmacologyLichMDb);

module.exports = router;