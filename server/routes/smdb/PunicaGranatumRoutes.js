const express = require("express");

const Controller = require("../../controllers/smdb/PunicaGranatumController.js")
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addPunicaGranatum);
router.get("/:punicaGranatumId", Controller.getOnePunicaGranatum);
router.get("/", Controller.getAllPunicaGranatum);
router.delete("/:punicaGranatumId",checkAuth, Controller.deletePunicaGranatum);
router.put("/:punicaGranatumId",checkAuth, Controller.updatePunicaGranatum);

module.exports = router;


