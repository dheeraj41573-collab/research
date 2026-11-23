const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaVirideController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaViride);
router.get("/:trichodermaVirideId", Controller.getOneTrichodermaViride);
router.get("/", Controller.getAllTrichodermaVirides);
router.delete("/:trichodermaVirideId", checkAuth, Controller.deleteTrichodermaViride);
router.put("/:trichodermaVirideId", checkAuth, Controller.updateTrichodermaViride);

module.exports = router;
