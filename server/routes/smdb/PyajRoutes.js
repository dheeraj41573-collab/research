const express = require("express");
const PyajController = require("../../controllers/smdb/PyajController.js")
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", PyajController.addPyaj);
router.get("/:pyajId", PyajController.getOnePyaj);
router.get("/", PyajController.getAllPyaj);
router.delete("/:pyajId",checkAuth, PyajController.deletePyaj);
router.put("/:pyajId",checkAuth, PyajController.updatePyaj);

module.exports = router;