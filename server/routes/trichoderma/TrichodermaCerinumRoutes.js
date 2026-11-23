const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaCerinumController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaCerinum);
router.get("/:trichodermacerinumId", Controller.getOneTrichodermaCerinum);
router.get("/", Controller.getAllTrichodermaCerinums);
router.delete("/:trichodermacerinumId", checkAuth, Controller.deleteTrichodermaCerinum);
router.put("/:trichodermacerinumId", checkAuth, Controller.updateTrichodermaCerinum);

module.exports = router;
