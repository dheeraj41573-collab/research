const express = require("express");

const ParmotremaPraesorediosumController = require("../../controllers/lichMDb/ParmotremaPraesorediosumController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", ParmotremaPraesorediosumController.addParmotremaPraesorediosum);
router.get("/:parmotremaPraesorediosumId", ParmotremaPraesorediosumController.getOneParmotremaPraesorediosum);
router.get("/", ParmotremaPraesorediosumController.getAllParmotremaPraesorediosums);
router.delete("/:parmotremaPraesorediosumId", checkAuth, ParmotremaPraesorediosumController.deleteParmotremaPraesorediosum);
router.put("/:parmotremaPraesorediosumId", checkAuth, ParmotremaPraesorediosumController.updateParmotremaPraesorediosum);

module.exports = router;
