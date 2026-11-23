const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaCremeumController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaCremeum);
router.get("/:trichodermacremeumId", Controller.getOneTrichodermaCremeum);
router.get("/", Controller.getAllTrichodermaCremeums);
router.delete("/:trichodermacremeumId", checkAuth, Controller.deleteTrichodermaCremeum);
router.put("/:trichodermacremeumId", checkAuth, Controller.updateTrichodermaCremeum);

module.exports = router;
