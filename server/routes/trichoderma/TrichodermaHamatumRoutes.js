const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaHamatumController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaHamatum);
router.get("/:trichodermahamatumId", Controller.getOneTrichodermaHamatum);
router.get("/", Controller.getAllTrichodermaHamatums);
router.delete("/:trichodermahamatumId", checkAuth, Controller.deleteTrichodermaHamatum);
router.put("/:trichodermahamatumId", checkAuth, Controller.updateTrichodermaHamatum);

module.exports = router;
