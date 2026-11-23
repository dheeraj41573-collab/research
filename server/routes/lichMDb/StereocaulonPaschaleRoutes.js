const express = require("express");

const StereocaulonPaschaleController = require("../../controllers/lichMDb/StereocaulonPaschaleController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", StereocaulonPaschaleController.addStereocaulonPaschale);
router.get("/:stereocaulonPaschaleId", StereocaulonPaschaleController.getOneStereocaulonPaschale);
router.get("/", StereocaulonPaschaleController.getAllStereocaulonPaschales);
router.delete("/:stereocaulonPaschaleId", checkAuth, StereocaulonPaschaleController.deleteStereocaulonPaschale);
router.put("/:stereocaulonPaschaleId", checkAuth, StereocaulonPaschaleController.updateStereocaulonPaschale);

module.exports = router;
