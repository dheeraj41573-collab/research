const express = require("express");

const Controller = require("../../controllers/smdb/SaturejaHortensisController.js")
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addSaturejaHortensis);
router.get("/:saturejaHortensisId", Controller.getOneSaturejaHortensis);
router.get("/", Controller.getAllSaturejaHortensis);
router.delete("/:saturejaHortensisId",checkAuth, Controller.deleteSaturejaHortensis);
router.put("/:saturejaHortensisId",checkAuth, Controller.updateSaturejaHortensis);

module.exports = router;


