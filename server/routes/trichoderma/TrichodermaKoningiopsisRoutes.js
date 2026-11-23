const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaKoningiopsisController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaKoningiopsis);
router.get("/:trichodermakoningiopsisId", Controller.getOneTrichodermaKoningiopsis);
router.get("/", Controller.getAllTrichodermaKoningiopsiss);
router.delete("/:trichodermakoningiopsisId", checkAuth, Controller.deleteTrichodermaKoningiopsis);
router.put("/:trichodermakoningiopsisId", checkAuth, Controller.updateTrichodermaKoningiopsis);

module.exports = router;
