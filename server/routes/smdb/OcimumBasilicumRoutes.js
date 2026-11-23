const express = require("express");

const Controller = require("../../controllers/smdb/OcimumBasilicumController.js")
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addOcimumBasilicum);
router.get("/:ocimumBasilicumId", Controller.getOneOcimumBasilicum);
router.get("/", Controller.getAllOcimumBasilicum);
router.delete("/:ocimumBasilicumId",checkAuth, Controller.deleteOcimumBasilicum);
router.put("/:ocimumBasilicumId",checkAuth, Controller.updateOcimumBasilicum);

module.exports = router;


