const express = require("express");

const ConiocarponCinnabarinumController = require("../../controllers/lichMDb/ConiocarponCinnabarinumController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", ConiocarponCinnabarinumController.addConiocarponCinnabarinum);
router.get("/:coniocarponCinnabarinumId", ConiocarponCinnabarinumController.getOneConiocarponCinnabarinum);
router.get("/", ConiocarponCinnabarinumController.getAllConiocarponCinnabarinums);
router.delete("/:coniocarponCinnabarinumId", checkAuth, ConiocarponCinnabarinumController.deleteConiocarponCinnabarinum);
router.put("/:coniocarponCinnabarinumId", checkAuth, ConiocarponCinnabarinumController.updateConiocarponCinnabarinum);

module.exports = router;
