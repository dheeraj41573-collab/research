const express = require("express");
const ElayachiController = require("../../controllers/smdb/ElayachiController.js")
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", ElayachiController.addElayachi);
router.get("/:elayachiId", ElayachiController.getOneElayachi);
router.get("/", ElayachiController.getAllElayachi);
router.delete("/:elayachiId",checkAuth, ElayachiController.deleteElayachi);
router.put("/:elayachiId",checkAuth, ElayachiController.updateElayachi);

module.exports = router;