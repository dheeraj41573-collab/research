const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaAvellaneumController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaAvellaneum);
router.get("/:trichodermaAvellaneumId", Controller.getOneTrichodermaAvellaneum);
router.get("/", Controller.getAllTrichodermaAvellaneums);
router.delete("/:trichodermaAvellaneumId", checkAuth, Controller.deleteTrichodermaAvellaneum);
router.put("/:trichodermaAvellaneumId", checkAuth, Controller.updateTrichodermaAvellaneum);

module.exports = router;
