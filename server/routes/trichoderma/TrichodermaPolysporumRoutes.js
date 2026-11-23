const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaPolysporumController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaPolysporum);
router.get("/:trichodermaPolysporumId", Controller.getOneTrichodermaPolysporum);
router.get("/", Controller.getAllTrichodermaPolysporums);
router.delete("/:trichodermaPolysporumId", checkAuth, Controller.deleteTrichodermaPolysporum);
router.put("/:trichodermaPolysporumId", checkAuth, Controller.updateTrichodermaPolysporum);

module.exports = router;
