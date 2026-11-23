const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaCornuDamaeController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaCornuDamae);
router.get("/:trichodermacornudamaeId", Controller.getOneTrichodermaCornuDamae);
router.get("/", Controller.getAllTrichodermaCornuDamaes);
router.delete("/:trichodermacornudamaeId", checkAuth, Controller.deleteTrichodermaCornuDamae);
router.put("/:trichodermacornudamaeId", checkAuth, Controller.updateTrichodermaCornuDamae);

module.exports = router;
