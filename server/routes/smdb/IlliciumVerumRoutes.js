const express = require("express");

const Controller = require("../../controllers/smdb/IlliciumVerumController.js")
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addIlliciumVerum);
router.get("/:illiciumVerumId", Controller.getOneIlliciumVerum);
router.get("/", Controller.getAllIlliciumVerum);
router.delete("/:illiciumVerumId",checkAuth, Controller.deleteIlliciumVerum);
router.put("/:illiciumVerumId",checkAuth, Controller.updateIlliciumVerum);

module.exports = router;


