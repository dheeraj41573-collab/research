const express = require("express");

const LecanoraLividocinereaController = require("../../controllers/lichMDb/LecanoraLividocinereaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", LecanoraLividocinereaController.addLecanoraLividocinerea);
router.get("/:lecanoraLividocinereaId", LecanoraLividocinereaController.getOneLecanoraLividocinerea);
router.get("/", LecanoraLividocinereaController.getAllLecanoraLividocinereas);
router.delete("/:lecanoraLividocinereaId", checkAuth, LecanoraLividocinereaController.deleteLecanoraLividocinerea);
router.put("/:lecanoraLividocinereaId", checkAuth, LecanoraLividocinereaController.updateLecanoraLividocinerea);

module.exports = router;
