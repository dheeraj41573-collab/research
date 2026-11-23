const express = require("express");

const Controller = require("../../controllers/smdb/FoeniculumVulgareController.js")
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addFoeniculumVulgare);
router.get("/:foeniculumVulgareId", Controller.getOneFoeniculumVulgare);
router.get("/", Controller.getAllFoeniculumVulgare);
router.delete("/:foeniculumVulgareId",checkAuth, Controller.deleteFoeniculumVulgare);
router.put("/:foeniculumVulgareId",checkAuth, Controller.updateFoeniculumVulgare);

module.exports = router;


