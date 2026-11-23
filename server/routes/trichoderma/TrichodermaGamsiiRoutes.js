const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaGamsiiController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaGamsii);
router.get("/:trichodermagamsiiId", Controller.getOneTrichodermaGamsii);
router.get("/", Controller.getAllTrichodermaGamsiis);
router.delete("/:trichodermagamsiiId", checkAuth, Controller.deleteTrichodermaGamsii);
router.put("/:trichodermagamsiiId", checkAuth, Controller.updateTrichodermaGamsii);

module.exports = router;
