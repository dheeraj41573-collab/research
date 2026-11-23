const express = require("express");

const Controller = require("../../controllers/smdb/TamarindusIndicaController.js")
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTamarindusIndica);
router.get("/:tamarindusIndicaId", Controller.getOneTamarindusIndica);
router.get("/", Controller.getAllTamarindusIndica);
router.delete("/:tamarindusIndicaId",checkAuth, Controller.deleteTamarindusIndica);
router.put("/:tamarindusIndicaId",checkAuth, Controller.updateTamarindusIndica);

module.exports = router;


