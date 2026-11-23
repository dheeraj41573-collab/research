const express = require("express");

const PeltigeraMalaceaController = require("../../controllers/lichMDb/PeltigeraMalaceaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", PeltigeraMalaceaController.addPeltigeraMalacea);
router.get("/:peltigeraMalaceaId", PeltigeraMalaceaController.getOnePeltigeraMalacea);
router.get("/", PeltigeraMalaceaController.getAllPeltigeraMalaceas);
router.delete("/:peltigeraMalaceaId", checkAuth, PeltigeraMalaceaController.deletePeltigeraMalacea);
router.put("/:peltigeraMalaceaId", checkAuth, PeltigeraMalaceaController.updatePeltigeraMalacea);

module.exports = router;
