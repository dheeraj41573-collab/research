const express = require("express");

const XalocoaController = require("../../controllers/lichMDb/XalocoaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", XalocoaController.addXalocoa);
router.get("/:xalocoaId", XalocoaController.getOneXalocoa);
router.get("/", XalocoaController.getAllXalocoas);
router.delete("/:xalocoaId", checkAuth, XalocoaController.deleteXalocoa);
router.put("/:xalocoaId", checkAuth, XalocoaController.updateXalocoa);

module.exports = router;
