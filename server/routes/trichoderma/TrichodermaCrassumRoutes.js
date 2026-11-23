const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaCrassumController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaCrassum);
router.get("/:trichodermaCrassumId", Controller.getOneTrichodermaCrassum);
router.get("/", Controller.getAllTrichodermaCrassums);
router.delete("/:trichodermaCrassumId", checkAuth, Controller.deleteTrichodermaCrassum);
router.put("/:trichodermaCrassumId", checkAuth, Controller.updateTrichodermaCrassum);

module.exports = router;
