const express = require("express");

const XanthoparmeliaController = require("../../controllers/lichMDb/XanthoparmeliaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", XanthoparmeliaController.addXanthoparmelia);
router.get("/:xanthoparmeliaId", XanthoparmeliaController.getOneXanthoparmelia);
router.get("/", XanthoparmeliaController.getAllXanthoparmelias);
router.delete("/:xanthoparmeliaId", checkAuth, XanthoparmeliaController.deleteXanthoparmelia);
router.put("/:xanthoparmeliaId", checkAuth, XanthoparmeliaController.updateXanthoparmelia);

module.exports = router;
