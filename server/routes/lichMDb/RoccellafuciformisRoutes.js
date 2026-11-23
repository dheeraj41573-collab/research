const express = require("express");

const RoccellafuciformisController = require("../../controllers/lichMDb/RoccellafuciformisController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", RoccellafuciformisController.addRoccellafuciformis);
router.get("/:roccellafuciformisId", RoccellafuciformisController.getOneRoccellafuciformis);
router.get("/", RoccellafuciformisController.getAllRoccellafuciformiss);
router.delete("/:roccellafuciformisId", checkAuth, RoccellafuciformisController.deleteRoccellafuciformis);
router.put("/:roccellafuciformisId", checkAuth, RoccellafuciformisController.updateRoccellafuciformis);

module.exports = router;
