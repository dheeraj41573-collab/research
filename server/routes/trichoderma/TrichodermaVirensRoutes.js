const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaVirensController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaVirens);
router.get("/:trichodermaVirensId", Controller.getOneTrichodermaVirens);
router.get("/", Controller.getAllTrichodermaVirenses);
router.delete("/:trichodermaVirensId", checkAuth, Controller.deleteTrichodermaVirens);
router.put("/:trichodermaVirensId", checkAuth, Controller.updateTrichodermaVirens);

module.exports = router;
