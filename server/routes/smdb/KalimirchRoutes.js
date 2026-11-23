const express = require("express");
const KalimirchController = require("../../controllers/smdb/KalimirchController.js")
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", KalimirchController.addKalimirch);
router.get("/:kalimirchId", KalimirchController.getOneKalimirch);
router.get("/", KalimirchController.getAllKalimirch);
router.delete("/:kalimirchId",checkAuth, KalimirchController.deleteKalimirch);
router.put("/:kalimirchId",checkAuth, KalimirchController.updateKalimirch);

module.exports = router;