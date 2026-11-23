const express = require("express");

const Controller = require("../../controllers/smdb/MangiferaIndicaController.js")
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addMangiferaIndica);
router.get("/:mangiferaIndicaId", Controller.getOneMangiferaIndica);
router.get("/", Controller.getAllMangiferaIndica);
router.delete("/:mangiferaIndicaId",checkAuth, Controller.deleteMangiferaIndica);
router.put("/:mangiferaIndicaId",checkAuth, Controller.updateMangiferaIndica);

module.exports = router;


