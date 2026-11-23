const express = require("express");

const AlectoriaSarmentosaController = require("../../controllers/lichMDb/AlectoriaSarmentosaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", AlectoriaSarmentosaController.addAlectoriaSarmentosa);
router.get("/:alectoriaSarmentosaId", AlectoriaSarmentosaController.getOneAlectoriaSarmentosa);
router.get("/", AlectoriaSarmentosaController.getAllAlectoriaSarmentosas);
router.delete("/:alectoriaSarmentosaId", checkAuth, AlectoriaSarmentosaController.deleteAlectoriaSarmentosa);
router.put("/:alectoriaSarmentosaId", checkAuth, AlectoriaSarmentosaController.updateAlectoriaSarmentosa);

module.exports = router;
