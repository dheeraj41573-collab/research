const express = require("express");

const RamalinaStenosporaController = require("../../controllers/lichMDb/RamalinaStenosporaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", RamalinaStenosporaController.addRamalinaStenospora);
router.get("/:ramalinaStenosporaId", RamalinaStenosporaController.getOneRamalinaStenospora);
router.get("/", RamalinaStenosporaController.getAllRamalinaStenosporas);
router.delete("/:ramalinaStenosporaId", checkAuth, RamalinaStenosporaController.deleteRamalinaStenospora);
router.put("/:ramalinaStenosporaId", checkAuth, RamalinaStenosporaController.updateRamalinaStenospora);

module.exports = router;
