const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaHypoxylonController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaHypoxylon);
router.get("/:trichodermaHypoxylonId", Controller.getOneTrichodermaHypoxylon);
router.get("/", Controller.getAllTrichodermaHypoxylons);
router.delete("/:trichodermaHypoxylonId", checkAuth, Controller.deleteTrichodermaHypoxylon);
router.put("/:trichodermaHypoxylonId", checkAuth, Controller.updateTrichodermaHypoxylon);

module.exports = router;
