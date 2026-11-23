const express = require("express");

const CandelariaConcolorController = require("../../controllers/lichMDb/CandelariaConcolorController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", CandelariaConcolorController.addCandelariaConcolor);
router.get("/:candelariaConcolorId", CandelariaConcolorController.getOneCandelariaConcolor);
router.get("/", CandelariaConcolorController.getAllCandelariaConcolors);
router.delete("/:candelariaConcolorId", checkAuth, CandelariaConcolorController.deleteCandelariaConcolor);
router.put("/:candelariaConcolorId", checkAuth, CandelariaConcolorController.updateCandelariaConcolor);

module.exports = router;
