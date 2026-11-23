const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaLongibrachiatumController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaLongibrachiatum);
router.get("/:trichodermalongibrachiatumId", Controller.getOneTrichodermaLongibrachiatum);
router.get("/", Controller.getAllTrichodermaLongibrachiatums);
router.delete("/:trichodermalongibrachiatumId", checkAuth, Controller.deleteTrichodermaLongibrachiatum);
router.put("/:trichodermalongibrachiatumId", checkAuth, Controller.updateTrichodermaLongibrachiatum);

module.exports = router;
