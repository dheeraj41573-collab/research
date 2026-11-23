const express = require("express");

const RagiController = require("../../controllers/cmdb/RagiController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/",checkAuth, RagiController.addRagi);
router.get("/:ragiId", RagiController.getOneRagi);
router.get("/", RagiController.getAllRagis);
router.delete("/:ragiId",checkAuth, RagiController.deleteRagi);
router.put("/:ragiId",checkAuth, RagiController.updateRagi);

module.exports = router;
