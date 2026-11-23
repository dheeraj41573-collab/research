const express = require("express");

const LethariellaCladonioidesController = require("../../controllers/lichMDb/LethariellaCladonioidesController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", LethariellaCladonioidesController.addLethariellaCladonioides);
router.get("/:lethariellaCladonioidesId", LethariellaCladonioidesController.getOneLethariellaCladonioides);
router.get("/", LethariellaCladonioidesController.getAllLethariellaCladonioidess);
router.delete("/:lethariellaCladonioidesId", checkAuth, LethariellaCladonioidesController.deleteLethariellaCladonioides);
router.put("/:lethariellaCladonioidesId", checkAuth, LethariellaCladonioidesController.updateLethariellaCladonioides);

module.exports = router;
