const express = require("express");

const HypotrachynaCirrhataController = require("../../controllers/lichMDb/HypotrachynaCirrhataController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", HypotrachynaCirrhataController.addHypotrachynaCirrhata);
router.get("/:hypotrachynaCirrhataId", HypotrachynaCirrhataController.getOneHypotrachynaCirrhata);
router.get("/", HypotrachynaCirrhataController.getAllHypotrachynaCirrhatas);
router.delete("/:hypotrachynaCirrhataId", checkAuth, HypotrachynaCirrhataController.deleteHypotrachynaCirrhata);
router.put("/:hypotrachynaCirrhataId", checkAuth, HypotrachynaCirrhataController.updateHypotrachynaCirrhata);

module.exports = router;
