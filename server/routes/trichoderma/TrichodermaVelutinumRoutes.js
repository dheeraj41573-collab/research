const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaVelutinumController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaVelutinum);
router.get("/:trichodermavelutinumId", Controller.getOneTrichodermaVelutinum);
router.get("/", Controller.getAllTrichodermaVelutinums);
router.delete("/:trichodermavelutinumId", checkAuth, Controller.deleteTrichodermaVelutinum);
router.put("/:trichodermavelutinumId", checkAuth, Controller.updateTrichodermaVelutinum);

module.exports = router;
