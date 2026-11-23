const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaVinosumController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaVinosum);
router.get("/:trichodermavinosumId", Controller.getOneTrichodermaVinosum);
router.get("/", Controller.getAllTrichodermaVinosums);
router.delete("/:trichodermavinosumId", checkAuth, Controller.deleteTrichodermaVinosum);
router.put("/:trichodermavinosumId", checkAuth, Controller.updateTrichodermaVinosum);

module.exports = router;
