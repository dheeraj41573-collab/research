const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaHypocreaMuroianaController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaHypocreaMuroiana);
router.get("/:trichodermaHypocreaMuroianaId", Controller.getOneTrichodermaHypocreaMuroiana);
router.get("/", Controller.getAllTrichodermaHypocreaMuroianas);
router.delete("/:trichodermaHypocreaMuroianaId", checkAuth, Controller.deleteTrichodermaHypocreaMuroiana);
router.put("/:trichodermaHypocreaMuroianaId", checkAuth, Controller.updateTrichodermaHypocreaMuroiana);

module.exports = router;
