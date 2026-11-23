const express = require("express");

const HingController = require("../../controllers/smdb/HingController.js")
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", HingController.addHing);
router.get("/:hingId", HingController.getOneHing);
router.get("/", HingController.getAllHing);
router.delete("/:hingId",checkAuth, HingController.deleteHing);
router.put("/:hingId",checkAuth, HingController.updateHing);

module.exports = router;