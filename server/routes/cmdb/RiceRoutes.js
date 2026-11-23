const express = require("express");

const RiceController = require("../../controllers/cmdb/RiceController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", RiceController.addRice);
router.get("/:riceId", RiceController.getOneRice);
router.get("/", RiceController.getAllRices);
router.delete("/:riceId",checkAuth, RiceController.deleteRice);
router.put("/:riceId",checkAuth, RiceController.updateRice);

module.exports = router;
