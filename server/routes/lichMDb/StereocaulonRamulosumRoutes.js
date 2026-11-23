const express = require("express");

const StereocaulonRamulosumController = require("../../controllers/lichMDb/StereocaulonRamulosumController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", StereocaulonRamulosumController.addStereocaulonRamulosum);
router.get("/:stereocaulonRamulosumId", StereocaulonRamulosumController.getOneStereocaulonRamulosum);
router.get("/", StereocaulonRamulosumController.getAllStereocaulonRamulosums);
router.delete("/:stereocaulonRamulosumId", checkAuth, StereocaulonRamulosumController.deleteStereocaulonRamulosum);
router.put("/:stereocaulonRamulosumId", checkAuth, StereocaulonRamulosumController.updateStereocaulonRamulosum);

module.exports = router;
