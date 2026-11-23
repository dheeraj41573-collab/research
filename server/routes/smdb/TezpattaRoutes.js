const express = require("express");
const TezpattaController = require("../../controllers/smdb/TezpattaController.js")

const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", TezpattaController.addTezpatta);
router.get("/:tezpttaId", TezpattaController.getOneTezpatta);
router.get("/", TezpattaController.getAllTezpatta);
router.delete("/:tezpttaId",checkAuth, TezpattaController.deleteTezpatta);
router.put("/:tezpttaId",checkAuth, TezpattaController.updateTezpatta);

module.exports = router;




