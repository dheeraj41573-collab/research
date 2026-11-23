const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaDeliquescensController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaDeliquescens);
router.get("/:trichodermaDeliquescensId", Controller.getOneTrichodermaDeliquescens);
router.get("/", Controller.getAllTrichodermaDeliquescens);
router.delete("/:trichodermaDeliquescensId", checkAuth, Controller.deleteTrichodermaDeliquescens);
router.put("/:trichodermaDeliquescensId", checkAuth, Controller.updateTrichodermaDeliquescens);

module.exports = router;
