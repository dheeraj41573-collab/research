const express = require("express");

const RoccellaController = require("../../controllers/lichMDb/RoccellaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", RoccellaController.addRoccella);
router.get("/:roccellaId", RoccellaController.getOneRoccella);
router.get("/", RoccellaController.getAllRoccellas);
router.delete("/:roccellaId", checkAuth, RoccellaController.deleteRoccella);
router.put("/:roccellaId", checkAuth, RoccellaController.updateRoccella);

module.exports = router;
