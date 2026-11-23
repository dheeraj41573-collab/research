const express = require("express");

const XanthoparmeliaCompetitaController = require("../../controllers/lichMDb/XanthoparmeliaCompetitaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", XanthoparmeliaCompetitaController.addXanthoparmeliaCompetita);
router.get("/:xanthoparmeliaCompetitaId", XanthoparmeliaCompetitaController.getOneXanthoparmeliaCompetita);
router.get("/", XanthoparmeliaCompetitaController.getAllXanthoparmeliaCompetita);
router.delete("/:xanthoparmeliaCompetitaId", checkAuth, XanthoparmeliaCompetitaController.deleteXanthoparmeliaCompetita);
router.put("/:xanthoparmeliaCompetitaId", checkAuth, XanthoparmeliaCompetitaController.updateXanthoparmeliaCompetita);

module.exports = router;
