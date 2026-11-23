const express = require("express");
const LoungController = require("../../controllers/smdb/LoungController.js")

const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", LoungController.addLoung);
router.get("/:loungId", LoungController.getOneLoung);
router.get("/", LoungController.getAllLoung);
router.delete("/:loungId",checkAuth, LoungController.deleteLoung);
router.put("/:loungId",checkAuth, LoungController.updateLoung);

module.exports = router;