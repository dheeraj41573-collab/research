const express = require("express");

const PseudocyphellariaNorvegicaController = require("../../controllers/lichMDb/PseudocyphellariaNorvegicaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", PseudocyphellariaNorvegicaController.addPseudocyphellariaNorvegica);
router.get("/:pseudocyphellariaNorvegicaId", PseudocyphellariaNorvegicaController.getOnePseudocyphellariaNorvegica);
router.get("/", PseudocyphellariaNorvegicaController.getAllPseudocyphellariaNorvegicas);
router.delete("/:pseudocyphellariaNorvegicaId", checkAuth, PseudocyphellariaNorvegicaController.deletePseudocyphellariaNorvegica);
router.put("/:pseudocyphellariaNorvegicaId", checkAuth, PseudocyphellariaNorvegicaController.updatePseudocyphellariaNorvegica);

module.exports = router;
