const express = require("express");

const SorghumController = require("../../controllers/cmdb/SorghumController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", checkAuth, SorghumController.addSorghum);
router.get("/:sorghumId", SorghumController.getOneSorghum);
router.get("/", SorghumController.getAllSorghums);
router.delete("/:sorghumId", checkAuth, SorghumController.deleteSorghum);
router.put("/:sorghumId", checkAuth, SorghumController.updateSorghum);

module.exports = router;
