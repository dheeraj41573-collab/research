const express = require("express");

const StereocaulonCorticatulumController = require("../../controllers/lichMDb/StereocaulonCorticatulumController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", StereocaulonCorticatulumController.addStereocaulonCorticatulum);
router.get("/:stereocaulonCorticatulumId", StereocaulonCorticatulumController.getOneStereocaulonCorticatulum);
router.get("/", StereocaulonCorticatulumController.getAllStereocaulonCorticatulums);
router.delete("/:stereocaulonCorticatulumId", checkAuth, StereocaulonCorticatulumController.deleteStereocaulonCorticatulum);
router.put("/:stereocaulonCorticatulumId", checkAuth, StereocaulonCorticatulumController.updateStereocaulonCorticatulum);

module.exports = router;
