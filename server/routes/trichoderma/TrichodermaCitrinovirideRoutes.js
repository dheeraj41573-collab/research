const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaCitrinovirideController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaCitrinoviride);
router.get("/:trichodermacitrinovirideId", Controller.getOneTrichodermaCitrinoviride);
router.get("/", Controller.getAllTrichodermaCitrinovirides);
router.delete("/:trichodermacitrinovirideId", checkAuth, Controller.deleteTrichodermaCitrinoviride);
router.put("/:trichodermacitrinovirideId", checkAuth, Controller.updateTrichodermaCitrinoviride);

module.exports = router;
