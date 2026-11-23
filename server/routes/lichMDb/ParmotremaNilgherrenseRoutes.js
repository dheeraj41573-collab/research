const express = require("express");

const ParmotremaNilgherrenseController = require("../../controllers/lichMDb/ParmotremaNilgherrenseController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", ParmotremaNilgherrenseController.addParmotremaNilgherrense);
router.get("/:parmotremaNilgherrenseId", ParmotremaNilgherrenseController.getOneParmotremaNilgherrense);
router.get("/", ParmotremaNilgherrenseController.getAllParmotremaNilgherrenses);
router.delete("/:parmotremaNilgherrenseId", checkAuth, ParmotremaNilgherrenseController.deleteParmotremaNilgherrense);
router.put("/:parmotremaNilgherrenseId", checkAuth, ParmotremaNilgherrenseController.updateParmotremaNilgherrense);

module.exports = router;
