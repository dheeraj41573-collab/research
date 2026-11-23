const express = require("express");

const Controller = require("../../controllers/smdb/DracocephalumOfficinaleController.js")
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addDracocephalumOfficinale);
router.get("/:dracocephalumOfficinaleId", Controller.getOneDracocephalumOfficinale);
router.get("/", Controller.getAllDracocephalumOfficinale);
router.delete("/:dracocephalumOfficinaleId",checkAuth, Controller.deleteDracocephalumOfficinale);
router.put("/:dracocephalumOfficinaleId",checkAuth, Controller.updateDracocephalumOfficinale);

module.exports = router;


