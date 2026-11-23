const express = require("express");

const RamalinaPollinariaController = require("../../controllers/lichMDb/RamalinaPollinariaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", RamalinaPollinariaController.addRamalinaPollinaria);
router.get("/:ramalinaPollinariaId", RamalinaPollinariaController.getOneRamalinaPollinaria);
router.get("/", RamalinaPollinariaController.getAllRamalinaPollinarias);
router.delete("/:ramalinaPollinariaId", checkAuth, RamalinaPollinariaController.deleteRamalinaPollinaria);
router.put("/:ramalinaPollinariaId", checkAuth, RamalinaPollinariaController.updateRamalinaPollinaria);

module.exports = router;
