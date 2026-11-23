const express = require("express");

const SphaerophorusController = require("../../controllers/lichMDb/SphaerophorusController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", SphaerophorusController.addSphaerophorus);
router.get("/:sphaerophorusId", SphaerophorusController.getOneSphaerophorus);
router.get("/", SphaerophorusController.getAllSphaerophoruss);
router.delete("/:sphaerophorusId", checkAuth, SphaerophorusController.deleteSphaerophorus);
router.put("/:sphaerophorusId", checkAuth, SphaerophorusController.updateSphaerophorus);

module.exports = router;
