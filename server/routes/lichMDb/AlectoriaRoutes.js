const express = require("express");

const AlectoriaController = require("../../controllers/lichMDb/AlectoriaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", AlectoriaController.addAlectoria);
router.get("/:alectoriaId", AlectoriaController.getOneAlectoria);
router.get("/", AlectoriaController.getAllAlectorias);
router.delete("/:alectoriaId", checkAuth, AlectoriaController.deleteAlectoria);
router.put("/:alectoriaId", checkAuth, AlectoriaController.updateAlectoria);

module.exports = router;
