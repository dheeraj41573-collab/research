const express = require("express");

const RamalinaHierrensisController = require("../../controllers/lichMDb/RamalinaHierrensisController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", RamalinaHierrensisController.addRamalinaHierrensis);
router.get("/:ramalinaHierrensisId", RamalinaHierrensisController.getOneRamalinaHierrensis);
router.get("/", RamalinaHierrensisController.getAllRamalinaHierrensiss);
router.delete("/:ramalinaHierrensisId", checkAuth, RamalinaHierrensisController.deleteRamalinaHierrensis);
router.put("/:ramalinaHierrensisId", checkAuth, RamalinaHierrensisController.updateRamalinaHierrensis);

module.exports = router;
