const express = require("express");

const CladoniaRangiferinaController = require("../../controllers/lichMDb/CladoniaRangiferinaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", CladoniaRangiferinaController.addCladoniaRangiferina);
router.get("/:cladoniaRangiferinaId", CladoniaRangiferinaController.getOneCladoniaRangiferina);
router.get("/", CladoniaRangiferinaController.getAllCladoniaRangiferinas);
router.delete("/:cladoniaRangiferinaId", checkAuth, CladoniaRangiferinaController.deleteCladoniaRangiferina);
router.put("/:cladoniaRangiferinaId", checkAuth, CladoniaRangiferinaController.updateCladoniaRangiferina);

module.exports = router;
