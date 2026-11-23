const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaReeseiController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaReesei);
router.get("/:trichodermareeseiId", Controller.getOneTrichodermaReesei);
router.get("/", Controller.getAllTrichodermaReeseis);
router.delete("/:trichodermareeseiId", checkAuth, Controller.deleteTrichodermaReesei);
router.put("/:trichodermareeseiId", checkAuth, Controller.updateTrichodermaReesei);

module.exports = router;
