const express = require("express");

const XanthoparmeliaCamtschadalisController = require("../../controllers/lichMDb/XanthoparmeliaCamtschadalisController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", XanthoparmeliaCamtschadalisController.addXanthoparmeliaCamtschadalis);
router.get("/:xanthoparmeliaCamtschadalisId", XanthoparmeliaCamtschadalisController.getOneXanthoparmeliaCamtschadalis);
router.get("/", XanthoparmeliaCamtschadalisController.getAllXanthoparmeliaCamtschadaliss);
router.delete("/:xanthoparmeliaCamtschadalisId", checkAuth, XanthoparmeliaCamtschadalisController.deleteXanthoparmeliaCamtschadalis);
router.put("/:xanthoparmeliaCamtschadalisId", checkAuth, XanthoparmeliaCamtschadalisController.updateXanthoparmeliaCamtschadalis);

module.exports = router;
