const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaKoningiiController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaKoningii);
router.get("/:trichodermakoningiiId", Controller.getOneTrichodermaKoningii);
router.get("/", Controller.getAllTrichodermaKoningiis);
router.delete("/:trichodermakoningiiId", checkAuth, Controller.deleteTrichodermaKoningii);
router.put("/:trichodermakoningiiId", checkAuth, Controller.updateTrichodermaKoningii);

module.exports = router;
