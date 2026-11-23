const express = require("express");

const Controller = require("../../controllers/smdb/LevisticumOfficinaleController.js")
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addLevisticumOfficinale);
router.get("/:levisticumOfficinaleId", Controller.getOneLevisticumOfficinale);
router.get("/", Controller.getAllLevisticumOfficinale);
router.delete("/:levisticumOfficinaleId",checkAuth, Controller.deleteLevisticumOfficinale);
router.put("/:levisticumOfficinaleId",checkAuth, Controller.updateLevisticumOfficinale);

module.exports = router;


