const express = require("express");

const RamalinaDilaController = require("../../controllers/lichMDb/RamalinaDilaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", RamalinaDilaController.addRamalinaDila);
router.get("/:ramalinaDilaId", RamalinaDilaController.getOneRamalinaDila);
router.get("/", RamalinaDilaController.getAllRamalinaDilas);
router.delete("/:ramalinaDilaId", checkAuth, RamalinaDilaController.deleteRamalinaDila);
router.put("/:ramalinaDilaId", checkAuth, RamalinaDilaController.updateRamalinaDila);

module.exports = router;
