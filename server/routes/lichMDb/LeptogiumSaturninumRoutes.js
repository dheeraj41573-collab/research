const express = require("express");

const LeptogiumSaturninumController = require("../../controllers/lichMDb/LeptogiumSaturninumController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", LeptogiumSaturninumController.addLeptogiumSaturninum);
router.get("/:leptogiumSaturninumId", LeptogiumSaturninumController.getOneLeptogiumSaturninum);
router.get("/", LeptogiumSaturninumController.getAllLeptogiumSaturninums);
router.delete("/:leptogiumSaturninumId", checkAuth, LeptogiumSaturninumController.deleteLeptogiumSaturninum);
router.put("/:leptogiumSaturninumId", checkAuth, LeptogiumSaturninumController.updateLeptogiumSaturninum);

module.exports = router;
