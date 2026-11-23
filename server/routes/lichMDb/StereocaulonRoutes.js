const express = require("express");

const StereocaulonController = require("../../controllers/lichMDb/StereocaulonController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", StereocaulonController.addStereocaulon);
router.get("/:stereocaulonId", StereocaulonController.getOneStereocaulon);
router.get("/", StereocaulonController.getAllStereocaulons);
router.delete("/:stereocaulonId", checkAuth, StereocaulonController.deleteStereocaulon);
router.put("/:stereocaulonId", checkAuth, StereocaulonController.updateStereocaulon);

module.exports = router;
