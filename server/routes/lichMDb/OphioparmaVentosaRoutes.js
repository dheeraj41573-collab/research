 

const express = require("express");

const OphioparmaVentosaController = require("../../controllers/lichMDb/OphioparmaVentosaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", OphioparmaVentosaController.addOphioparmaVentosa);
router.get("/:ophioparmaVentosaId", OphioparmaVentosaController.getOneOphioparmaVentosa);
router.get("/", OphioparmaVentosaController.getAllOphioparmaVentosas);
router.delete("/:ophioparmaVentosaId", checkAuth, OphioparmaVentosaController.deleteOphioparmaVentosa);
router.put("/:ophioparmaVentosaId", checkAuth, OphioparmaVentosaController.updateOphioparmaVentosa);

module.exports = router;
