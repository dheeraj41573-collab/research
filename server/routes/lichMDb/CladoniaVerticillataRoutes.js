const express = require("express");

const CladoniaVerticillataController = require("../../controllers/lichMDb/CladoniaVerticillataController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", CladoniaVerticillataController.addCladoniaVerticillata);
router.get("/:cladoniaVerticillataId", CladoniaVerticillataController.getOneCladoniaVerticillata);
router.get("/", CladoniaVerticillataController.getAllCladoniaVerticillatas);
router.delete("/:cladoniaVerticillataId", checkAuth, CladoniaVerticillataController.deleteCladoniaVerticillata);
router.put("/:cladoniaVerticillataId", checkAuth, CladoniaVerticillataController.updateCladoniaVerticillata);

module.exports = router;
