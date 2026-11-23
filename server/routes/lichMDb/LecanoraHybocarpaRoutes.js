const express = require("express");

const LecanoraHybocarpaController = require("../../controllers/lichMDb/LecanoraHybocarpaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", LecanoraHybocarpaController.addLecanoraHybocarpa);
router.get("/:lecanoraHybocarpaId", LecanoraHybocarpaController.getOneLecanoraHybocarpa);
router.get("/", LecanoraHybocarpaController.getAllLecanoraHybocarpas);
router.delete("/:lecanoraHybocarpaId", checkAuth, LecanoraHybocarpaController.deleteLecanoraHybocarpa);
router.put("/:lecanoraHybocarpaId", checkAuth, LecanoraHybocarpaController.updateLecanoraHybocarpa);

module.exports = router;
