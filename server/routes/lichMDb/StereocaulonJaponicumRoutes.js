const express = require("express");

const StereocaulonJaponicumController = require("../../controllers/lichMDb/StereocaulonJaponicumController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", StereocaulonJaponicumController.addStereocaulonJaponicum);
router.get("/:stereocaulonJaponicumId", StereocaulonJaponicumController.getOneStereocaulonJaponicum);
router.get("/", StereocaulonJaponicumController.getAllStereocaulonJaponicums);
router.delete("/:stereocaulonJaponicumId", checkAuth, StereocaulonJaponicumController.deleteStereocaulonJaponicum);
router.put("/:stereocaulonJaponicumId", checkAuth, StereocaulonJaponicumController.updateStereocaulonJaponicum);

module.exports = router;
