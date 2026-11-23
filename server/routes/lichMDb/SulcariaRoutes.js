const express = require("express");

const SulcariaController = require("../../controllers/lichMDb/SulcariaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", SulcariaController.addSulcaria);
router.get("/:sulcariaId", SulcariaController.getOneSulcaria);
router.get("/", SulcariaController.getAllSulcarias);
router.delete("/:sulcariaId", checkAuth, SulcariaController.deleteSulcaria);
router.put("/:sulcariaId", checkAuth, SulcariaController.updateSulcaria);

module.exports = router;
