const express = require("express");

const LethariellaSernanderiController = require("../../controllers/lichMDb/LethariellaSernanderiController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", LethariellaSernanderiController.addLethariellaSernanderi);
router.get("/:lethariellaSernanderiId", LethariellaSernanderiController.getOneLethariellaSernanderi);
router.get("/", LethariellaSernanderiController.getAllLethariellaSernanderis);
router.delete("/:lethariellaSernanderiId", checkAuth, LethariellaSernanderiController.deleteLethariellaSernanderi);
router.put("/:lethariellaSernanderiId", checkAuth, LethariellaSernanderiController.updateLethariellaSernanderi);

module.exports = router;
