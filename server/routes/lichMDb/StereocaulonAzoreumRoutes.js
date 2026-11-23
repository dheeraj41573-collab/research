const express = require("express");

const StereocaulonAzoreumController = require("../../controllers/lichMDb/StereocaulonAzoreumController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", StereocaulonAzoreumController.addStereocaulonAzoreum);
router.get("/:stereocaulonAzoreumId", StereocaulonAzoreumController.getOneStereocaulonAzoreum);
router.get("/", StereocaulonAzoreumController.getAllStereocaulonAzoreums);
router.delete("/:stereocaulonAzoreumId", checkAuth, StereocaulonAzoreumController.deleteStereocaulonAzoreum);
router.put("/:stereocaulonAzoreumId", checkAuth, StereocaulonAzoreumController.updateStereocaulonAzoreum);

module.exports = router;
