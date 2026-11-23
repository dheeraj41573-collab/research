const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaAtrovirideController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaAtroviride);
router.get("/:trichodermaAtrovirideId", Controller.getOneTrichodermaAtroviride);
router.get("/", Controller.getAllTrichodermaAtrovirides);
router.delete("/:trichodermaAtrovirideId", checkAuth, Controller.deleteTrichodermaAtroviride);
router.put("/:trichodermaAtrovirideId", checkAuth, Controller.updateTrichodermaAtroviride);

module.exports = router;
