const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaAureovirideController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaAureoviride);
router.get("/:trichodermaAureovirideId", Controller.getOneTrichodermaAureoviride);
router.get("/", Controller.getAllTrichodermaAureovirides);
router.delete("/:trichodermaAureovirideId", checkAuth, Controller.deleteTrichodermaAureoviride);
router.put("/:trichodermaAureovirideId", checkAuth, Controller.updateTrichodermaAureoviride);

module.exports = router;
