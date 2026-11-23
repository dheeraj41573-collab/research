const express = require("express");

const TeloschistesController = require("../../controllers/lichMDb/TeloschistesController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", TeloschistesController.addTeloschistes);
router.get("/:teloschistesId", TeloschistesController.getOneTeloschistes);
router.get("/", TeloschistesController.getAllTeloschistess);
router.delete("/:teloschistesId", checkAuth, TeloschistesController.deleteTeloschistes);
router.put("/:teloschistesId", checkAuth, TeloschistesController.updateTeloschistes);

module.exports = router;
