const express = require("express");

const ParmotremaTinctorumController = require("../../controllers/lichMDb/ParmotremaTinctorumController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", ParmotremaTinctorumController.addParmotremaTinctorum);
router.get("/:parmotremaTinctorumId", ParmotremaTinctorumController.getOneParmotremaTinctorum);
router.get("/", ParmotremaTinctorumController.getAllParmotremaTinctorums);
router.delete("/:parmotremaTinctorumId", checkAuth, ParmotremaTinctorumController.deleteParmotremaTinctorum);
router.put("/:parmotremaTinctorumId", checkAuth, ParmotremaTinctorumController.updateParmotremaTinctorum);

module.exports = router;
