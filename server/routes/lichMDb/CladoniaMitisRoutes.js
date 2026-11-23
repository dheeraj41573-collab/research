const express = require("express");

const CladoniaMitisController = require("../../controllers/lichMDb/CladoniaMitisController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", CladoniaMitisController.addCladoniaMitis);
router.get("/:cladoniaMitisId", CladoniaMitisController.getOneCladoniaMitis);
router.get("/", CladoniaMitisController.getAllCladoniaMitiss);
router.delete("/:cladoniaMitisId", checkAuth, CladoniaMitisController.deleteCladoniaMitis);
router.put("/:cladoniaMitisId", checkAuth, CladoniaMitisController.updateCladoniaMitis);

module.exports = router;
