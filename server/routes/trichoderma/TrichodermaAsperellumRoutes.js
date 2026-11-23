const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaAsperellumController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaAsperellum);
router.get("/:trichodermaAsperellumId", Controller.getOneTrichodermaAsperellum);
router.get("/", Controller.getAllTrichodermaAsperellums);
router.delete("/:trichodermaAsperellumId", checkAuth, Controller.deleteTrichodermaAsperellum);
router.put("/:trichodermaAsperellumId", checkAuth, Controller.updateTrichodermaAsperellum);

module.exports = router;
