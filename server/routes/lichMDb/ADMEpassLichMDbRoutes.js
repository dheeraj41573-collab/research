const express = require("express");

const ADMEpassLichMDbController = require("../../controllers/lichMDb/ADMEpassLichMDbController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", ADMEpassLichMDbController.addADMEpassLichMDb);
router.get("/:ADMEpassId", ADMEpassLichMDbController.getOneADMEpassLichMDb);
router.get("/", ADMEpassLichMDbController.getAllADMEpassLichMDbs);
router.delete("/:ADMEpassId",checkAuth, ADMEpassLichMDbController.deleteADMEpassLichMDb);
router.put("/:ADMEpassId",checkAuth, ADMEpassLichMDbController.updateADMEpassLichMDb);

module.exports = router;
