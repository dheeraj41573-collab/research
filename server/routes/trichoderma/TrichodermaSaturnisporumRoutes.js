const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaSaturnisporumController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaSaturnisporum);
router.get("/:trichodermasaturnisporumId", Controller.getOneTrichodermaSaturnisporum);
router.get("/", Controller.getAllTrichodermaSaturnisporums);
router.delete("/:trichodermasaturnisporumId", checkAuth, Controller.deleteTrichodermaSaturnisporum);
router.put("/:trichodermasaturnisporumId", checkAuth, Controller.updateTrichodermaSaturnisporum);

module.exports = router;
