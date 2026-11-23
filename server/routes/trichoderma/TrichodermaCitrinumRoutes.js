const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaCitrinumController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaCitrinum);
router.get("/:trichodermacitrinumId", Controller.getOneTrichodermaCitrinum);
router.get("/", Controller.getAllTrichodermaCitrinums);
router.delete("/:trichodermacitrinumId", checkAuth, Controller.deleteTrichodermaCitrinum);
router.put("/:trichodermacitrinumId", checkAuth, Controller.updateTrichodermaCitrinum);

module.exports = router;
