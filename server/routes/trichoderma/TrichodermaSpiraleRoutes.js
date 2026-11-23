const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaSpiraleController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaSpirale);
router.get("/:trichodermaspiraleId", Controller.getOneTrichodermaSpirale);
router.get("/", Controller.getAllTrichodermaSpirales);
router.delete("/:trichodermaspiraleId", checkAuth, Controller.deleteTrichodermaSpirale);
router.put("/:trichodermaspiraleId", checkAuth, Controller.updateTrichodermaSpirale);

module.exports = router;
