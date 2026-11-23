const express = require("express");

const ParmotremaSanctiAngeliiController = require("../../controllers/lichMDb/ParmotremaSanctiAngeliiController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", ParmotremaSanctiAngeliiController.addParmotremaSanctiAngelii);
router.get("/:parmotremaSanctiAngeliiId", ParmotremaSanctiAngeliiController.getOneParmotremaSanctiAngelii);
router.get("/", ParmotremaSanctiAngeliiController.getAllParmotremaSanctiAngeliis);
router.delete("/:parmotremaSanctiAngeliiId", checkAuth, ParmotremaSanctiAngeliiController.deleteParmotremaSanctiAngelii);
router.put("/:parmotremaSanctiAngeliiId", checkAuth, ParmotremaSanctiAngeliiController.updateParmotremaSanctiAngelii);

module.exports = router;
