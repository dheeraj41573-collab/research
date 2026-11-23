const express = require("express");

const AdrakController = require("../../controllers/smdb/AdrakController.js")
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", AdrakController.addAdrak);
router.get("/:adrakId", AdrakController.getOneAdrak);
router.get("/", AdrakController.getAllAdrak);
router.delete("/:adrakId",checkAuth, AdrakController.deleteAdrak);
router.put("/:adrakId",checkAuth, AdrakController.updateAdrak);

module.exports = router;