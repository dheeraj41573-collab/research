const express = require("express");
const HaldiController = require("../../controllers/smdb/HaldiController.js")
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", HaldiController.addHaldi);
router.get("/:haldiId", HaldiController.getOneHaldi);
router.get("/", HaldiController.getAllHaldi);
router.delete("/:haldiId",checkAuth, HaldiController.deleteHaldi);
router.put("/:haldiId",checkAuth, HaldiController.updateHaldi);

module.exports = router;