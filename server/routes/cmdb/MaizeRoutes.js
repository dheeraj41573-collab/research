const express = require("express");

const MaizeController = require("../../controllers/cmdb/MaizeController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", checkAuth, MaizeController.addMaize);
router.get("/:maizeId", MaizeController.getOneMaize);
router.get("/", MaizeController.getAllMaizes);
router.delete("/:maizeId", checkAuth, MaizeController.deleteMaize);
router.put("/:maizeId", checkAuth, MaizeController.updateMaize);

module.exports = router;
