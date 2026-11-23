const express = require("express");

const Controller = require("../../controllers/smdb/SesamumIndicumController.js")
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addSesamumIndicum);
router.get("/:sesamumIndicumId", Controller.getOneSesamumIndicum);
router.get("/", Controller.getAllSesamumIndicum);
router.delete("/:sesamumIndicumId",checkAuth, Controller.deleteSesamumIndicum);
router.put("/:sesamumIndicumId",checkAuth, Controller.updateSesamumIndicum);

module.exports = router;


