const express = require("express");

const CladoniaController = require("../../controllers/lichMDb/CladoniaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", CladoniaController.addCladonia);
router.get("/:cladoniaId", CladoniaController.getOneCladonia);
router.get("/", CladoniaController.getAllCladonias);
router.delete("/:cladoniaId", checkAuth, CladoniaController.deleteCladonia);
router.put("/:cladoniaId", checkAuth, CladoniaController.updateCladonia);

module.exports = router;
