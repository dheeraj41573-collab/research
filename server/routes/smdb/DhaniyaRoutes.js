const express = require("express");
const DhaniyaController = require("../../controllers/smdb/DhaniyaController")
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", DhaniyaController.addDhaniya);
router.get("/:dhaniyaId", DhaniyaController.getOneDhaniya);
router.get("/", DhaniyaController.getAllDhaniya);
router.delete("/:dhaniyaId",checkAuth, DhaniyaController.deleteDhaniya);
router.put("/:dhaniyaId",checkAuth, DhaniyaController.updateDhaniya);

module.exports = router;