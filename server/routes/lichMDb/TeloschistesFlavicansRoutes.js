const express = require("express");

const TeloschistesFlavicansController = require("../../controllers/lichMDb/TeloschistesFlavicansController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", TeloschistesFlavicansController.addTeloschistesFlavicans);
router.get("/:teloschistesFlavicansId", TeloschistesFlavicansController.getOneTeloschistesFlavicans);
router.get("/", TeloschistesFlavicansController.getAllTeloschistesFlavicanss);
router.delete("/:teloschistesFlavicansId", checkAuth, TeloschistesFlavicansController.deleteTeloschistesFlavicans);
router.put("/:teloschistesFlavicansId", checkAuth, TeloschistesFlavicansController.updateTeloschistesFlavicans);

module.exports = router;
