const express = require("express");

const OxneriaController = require("../../controllers/lichMDb/OxneriaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", OxneriaController.addOxneria);
router.get("/:oxneriaId", OxneriaController.getOneOxneria);
router.get("/", OxneriaController.getAllOxnerias);
router.delete("/:oxneriaId", checkAuth, OxneriaController.deleteOxneria);
router.put("/:oxneriaId", checkAuth, OxneriaController.updateOxneria);

module.exports = router;
