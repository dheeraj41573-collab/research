const express = require("express");

const HypotrachynaController = require("../../controllers/lichMDb/HypotrachynaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", HypotrachynaController.addHypotrachyna);
router.get("/:hypotrachynaId", HypotrachynaController.getOneHypotrachyna);
router.get("/", HypotrachynaController.getAllHypotrachynas);
router.delete("/:hypotrachynaId", checkAuth, HypotrachynaController.deleteHypotrachyna);
router.put("/:hypotrachynaId", checkAuth, HypotrachynaController.updateHypotrachyna);

module.exports = router;
