const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaApplanatumController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaApplanatum);
router.get("/:trichodermaApplanatumId", Controller.getOneTrichodermaApplanatum);
router.get("/", Controller.getAllTrichodermaApplanatums);
router.delete("/:trichodermaApplanatumId", checkAuth, Controller.deleteTrichodermaApplanatum);
router.put("/:trichodermaApplanatumId", checkAuth, Controller.updateTrichodermaApplanatum);

module.exports = router;
