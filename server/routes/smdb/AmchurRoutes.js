const express = require("express");

const Controller = require("../../controllers/smdb/AmchurController.js")
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addAmchur);
router.get("/:amchurId", Controller.getOneAmchur);
router.get("/", Controller.getAllAmchur);
router.delete("/:amchurId",checkAuth, Controller.deleteAmchur);
router.put("/:amchurId",checkAuth, Controller.updateAmchur);

module.exports = router;


