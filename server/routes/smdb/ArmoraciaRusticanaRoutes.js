const express = require("express");

const Controller = require("../../controllers/smdb/ArmoraciaRusticanaController.js")
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addArmoraciaRusticana);
router.get("/:armoraciaRusticanaId", Controller.getOneArmoraciaRusticana);
router.get("/", Controller.getAllArmoraciaRusticana);
router.delete("/:armoraciaRusticanaId",checkAuth, Controller.deleteArmoraciaRusticana);
router.put("/:armoraciaRusticanaId",checkAuth, Controller.updateArmoraciaRusticana);

module.exports = router;


