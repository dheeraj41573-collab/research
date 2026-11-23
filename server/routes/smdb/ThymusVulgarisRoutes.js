const express = require("express");

const Controller = require("../../controllers/smdb/ThymusVulgarisController.js")
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addThymusVulgaris);
router.get("/:thymusVulgarisId", Controller.getOneThymusVulgaris);
router.get("/", Controller.getAllThymusVulgaris);
router.delete("/:thymusVulgarisId",checkAuth, Controller.deleteThymusVulgaris);
router.put("/:thymusVulgarisId",checkAuth, Controller.updateThymusVulgaris);

module.exports = router;


