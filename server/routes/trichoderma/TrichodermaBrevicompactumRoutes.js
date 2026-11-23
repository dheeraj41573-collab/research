const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaBrevicompactumController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaBrevicompactum);
router.get("/:trichodermabrevicompactumId", Controller.getOneTrichodermaBrevicompactum);
router.get("/", Controller.getAllTrichodermaBrevicompactums);
router.delete("/:trichodermabrevicompactumId", checkAuth, Controller.deleteTrichodermaBrevicompactum);
router.put("/:trichodermabrevicompactumId", checkAuth, Controller.updateTrichodermaBrevicompactum);

module.exports = router;
