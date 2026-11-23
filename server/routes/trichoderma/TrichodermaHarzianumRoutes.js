const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaHarzianumController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaHarzianum);
router.get("/:trichodermaHarzianumId", Controller.getOneTrichodermaHarzianum);
router.get("/", Controller.getAllTrichodermaHarzianums);
router.delete("/:trichodermaHarzianumId", checkAuth, Controller.deleteTrichodermaHarzianum);
router.put("/:trichodermaHarzianumId", checkAuth, Controller.updateTrichodermaHarzianum);

module.exports = router;
