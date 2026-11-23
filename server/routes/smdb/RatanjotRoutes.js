const express = require("express");
const RatanjotController = require("../../controllers/smdb/RatanjotController.js")
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", RatanjotController.addRatanjot);
router.get("/:ratanjotId", RatanjotController.getOneRatanjot);
router.get("/", RatanjotController.getAllRatanjot);
router.delete("/:ratanjotId",checkAuth, RatanjotController.deleteRatanjot);
router.put("/:ratanjotId",checkAuth, RatanjotController.updateRatanjot);

module.exports = router;