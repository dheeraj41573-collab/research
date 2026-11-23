const express = require("express");

const OchrolechiaController = require("../../controllers/lichMDb/OchrolechiaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", OchrolechiaController.addOchrolechia);
router.get("/:ochrolechiaId", OchrolechiaController.getOneOchrolechia);
router.get("/", OchrolechiaController.getAllOchrolechias);
router.delete("/:ochrolechiaId", checkAuth, OchrolechiaController.deleteOchrolechia);
router.put("/:ochrolechiaId", checkAuth, OchrolechiaController.updateOchrolechia);

module.exports = router;
