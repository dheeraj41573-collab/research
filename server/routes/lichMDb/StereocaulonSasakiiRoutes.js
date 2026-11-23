const express = require("express");

const StereocaulonSasakiiController = require("../../controllers/lichMDb/StereocaulonSasakiiController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", StereocaulonSasakiiController.addStereocaulonSasakii);
router.get("/:stereocaulonSasakiiId", StereocaulonSasakiiController.getOneStereocaulonSasakii);
router.get("/", StereocaulonSasakiiController.getAllStereocaulonSasakiis);
router.delete("/:stereocaulonSasakiiId", checkAuth, StereocaulonSasakiiController.deleteStereocaulonSasakii);
router.put("/:stereocaulonSasakiiId", checkAuth, StereocaulonSasakiiController.updateStereocaulonSasakii);

module.exports = router;
