const express = require("express");

const Controller = require("../../controllers/smdb/CapsicumAnnuumController.js")
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addCapsicumAnnuum);
router.get("/:capsicumAnnuumId", Controller.getOneCapsicumAnnuum);
router.get("/", Controller.getAllCapsicumAnnuum);
router.delete("/:capsicumAnnuumId",checkAuth, Controller.deleteCapsicumAnnuum);
router.put("/:capsicumAnnuumId",checkAuth, Controller.updateCapsicumAnnuum);

module.exports = router;


