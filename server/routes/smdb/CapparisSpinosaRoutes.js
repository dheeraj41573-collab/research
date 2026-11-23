const express = require("express");

const Controller = require("../../controllers/smdb/CapparisSpinosaController.js")
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addCapparisSpinosa);
router.get("/:capparisSpinosaId", Controller.getOneCapparisSpinosa);
router.get("/", Controller.getAllCapparisSpinosa);
router.delete("/:capparisSpinosaId",checkAuth, Controller.deleteCapparisSpinosa);
router.put("/:capparisSpinosaId",checkAuth, Controller.updateCapparisSpinosa);

module.exports = router;


