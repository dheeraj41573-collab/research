const express = require("express");

const CladoniaFurcataController = require("../../controllers/lichMDb/CladoniaFurcataController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", CladoniaFurcataController.addCladoniaFurcata);
router.get("/:cladoniaFurcataId", CladoniaFurcataController.getOneCladoniaFurcata);
router.get("/", CladoniaFurcataController.getAllCladoniaFurcatas);
router.delete("/:cladoniaFurcataId", checkAuth, CladoniaFurcataController.deleteCladoniaFurcata);
router.put("/:cladoniaFurcataId", checkAuth, CladoniaFurcataController.updateCladoniaFurcata);

module.exports = router;
