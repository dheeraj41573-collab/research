const express = require("express");

const CetrariaController = require("../../controllers/lichMDb/CetrariaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", CetrariaController.addCetraria);
router.get("/:cetrariaId", CetrariaController.getOneCetraria);
router.get("/", CetrariaController.getAllCetrarias);
router.delete("/:cetrariaId", checkAuth, CetrariaController.deleteCetraria);
router.put("/:cetrariaId", checkAuth, CetrariaController.updateCetraria);

module.exports = router;
