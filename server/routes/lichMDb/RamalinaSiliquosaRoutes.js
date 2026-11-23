const express = require("express");

const RamalinaSiliquosaController = require("../../controllers/lichMDb/RamalinaSiliquosaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", RamalinaSiliquosaController.addRamalinaSiliquosa);
router.get("/:ramalinaSiliquosaId", RamalinaSiliquosaController.getOneRamalinaSiliquosa);
router.get("/", RamalinaSiliquosaController.getAllRamalinaSiliquosas);
router.delete("/:ramalinaSiliquosaId", checkAuth, RamalinaSiliquosaController.deleteRamalinaSiliquosa);
router.put("/:ramalinaSiliquosaId", checkAuth, RamalinaSiliquosaController.updateRamalinaSiliquosa);

module.exports = router;
