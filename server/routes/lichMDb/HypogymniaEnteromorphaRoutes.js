const express = require("express");

const HypogymniaEnteromorphaController = require("../../controllers/lichMDb/HypogymniaEnteromorphaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", HypogymniaEnteromorphaController.addHypogymniaEnteromorpha);
router.get("/:hypogymniaEnteromorphaId", HypogymniaEnteromorphaController.getOneHypogymniaEnteromorpha);
router.get("/", HypogymniaEnteromorphaController.getAllHypogymniaEnteromorphas);
router.delete("/:hypogymniaEnteromorphaId", checkAuth, HypogymniaEnteromorphaController.deleteHypogymniaEnteromorpha);
router.put("/:hypogymniaEnteromorphaId", checkAuth, HypogymniaEnteromorphaController.updateHypogymniaEnteromorpha);

module.exports = router;
