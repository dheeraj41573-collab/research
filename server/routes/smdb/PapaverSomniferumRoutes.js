const express = require("express");

const Controller = require("../../controllers/smdb/PapaverSomniferumController.js")
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addPapaverSomniferum);
router.get("/:papaverSomniferumId", Controller.getOnePapaverSomniferum);
router.get("/", Controller.getAllPapaverSomniferum);
router.delete("/:papaverSomniferumId",checkAuth, Controller.deletePapaverSomniferum);
router.put("/:papaverSomniferumId",checkAuth, Controller.updatePapaverSomniferum);

module.exports = router;


