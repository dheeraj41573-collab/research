const express = require("express");

const Controller = require("../../controllers/smdb/LaurusNobilisController.js")
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addLaurusNobilis);
router.get("/:laurusNobilisId", Controller.getOneLaurusNobilis);
router.get("/", Controller.getAllLaurusNobilis);
router.delete("/:laurusNobilisId",checkAuth, Controller.deleteLaurusNobilis);
router.put("/:laurusNobilisId",checkAuth, Controller.updateLaurusNobilis);

module.exports = router;


