const express = require("express");

const Controller = require("../../controllers/smdb/ApiumGraveolensController.js")
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addApiumGraveolens);
router.get("/:apiumGraveolensId", Controller.getOneApiumGraveolens);
router.get("/", Controller.getAllApiumGraveolens);
router.delete("/:apiumGraveolensId",checkAuth, Controller.deleteApiumGraveolens);
router.put("/:apiumGraveolensId",checkAuth, Controller.updateApiumGraveolens);

module.exports = router;


