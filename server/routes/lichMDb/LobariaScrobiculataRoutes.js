const express = require("express");

const LobariaScrobiculataController = require("../../controllers/lichMDb/LobariaScrobiculataController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", LobariaScrobiculataController.addLobariaScrobiculata);
router.get("/:lobariaScrobiculataId", LobariaScrobiculataController.getOneLobariaScrobiculata);
router.get("/", LobariaScrobiculataController.getAllLobariaScrobiculatas);
router.delete("/:lobariaScrobiculataId", checkAuth, LobariaScrobiculataController.deleteLobariaScrobiculata);
router.put("/:lobariaScrobiculataId", checkAuth, LobariaScrobiculataController.updateLobariaScrobiculata);

module.exports = router;
