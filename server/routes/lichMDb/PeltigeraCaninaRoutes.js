const express = require("express");

const PeltigeraCaninaController = require("../../controllers/lichMDb/PeltigeraCaninaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", PeltigeraCaninaController.addPeltigeraCanina);
router.get("/:peltigeraCaninaId", PeltigeraCaninaController.getOnePeltigeraCanina);
router.get("/", PeltigeraCaninaController.getAllPeltigeraCaninas);
router.delete("/:peltigeraCaninaId", checkAuth, PeltigeraCaninaController.deletePeltigeraCanina);
router.put("/:peltigeraCaninaId", checkAuth, PeltigeraCaninaController.updatePeltigeraCanina);

module.exports = router;
