const express = require("express");

const DimelaenaController = require("../../controllers/lichMDb/DimelaenaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", DimelaenaController.addDimelaena);
router.get("/:dimelaenaId", DimelaenaController.getOneDimelaena);
router.get("/", DimelaenaController.getAllDimelaenas);
router.delete("/:dimelaenaId", checkAuth, DimelaenaController.deleteDimelaena);
router.put("/:dimelaenaId", checkAuth, DimelaenaController.updateDimelaena);

module.exports = router;
