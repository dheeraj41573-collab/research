const express = require("express");

const AjwainController = require("../../controllers/smdb/AjwainController.js")
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", AjwainController.addAjwain);
router.get("/:ajwainId", AjwainController.getOneAjwain);
router.get("/", AjwainController.getAllAjwain);
router.delete("/:ajwainId",checkAuth, AjwainController.deleteAjwain);
router.put("/:ajwainId",checkAuth, AjwainController.updateAjwain);

module.exports = router;