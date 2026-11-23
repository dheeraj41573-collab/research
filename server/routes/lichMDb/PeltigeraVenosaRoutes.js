const express = require("express");

const PeltigeraVenosaController = require("../../controllers/lichMDb/PeltigeraVenosaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", PeltigeraVenosaController.addPeltigeraVenosa);
router.get("/:peltigeraVenosaId", PeltigeraVenosaController.getOnePeltigeraVenosa);
router.get("/", PeltigeraVenosaController.getAllPeltigeraVenosas);
router.delete("/:peltigeraVenosaId", checkAuth, PeltigeraVenosaController.deletePeltigeraVenosa);
router.put("/:peltigeraVenosaId", checkAuth, PeltigeraVenosaController.updatePeltigeraVenosa);

module.exports = router;
