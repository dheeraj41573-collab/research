const express = require("express");

const PseudocyphellariaFaveolataController = require("../../controllers/lichMDb/PseudocyphellariaFaveolataController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", PseudocyphellariaFaveolataController.addPseudocyphellariaFaveolata);
router.get("/:pseudocyphellariaFaveolataId", PseudocyphellariaFaveolataController.getOnePseudocyphellariaFaveolata);
router.get("/", PseudocyphellariaFaveolataController.getAllPseudocyphellariaFaveolatas);
router.delete("/:pseudocyphellariaFaveolataId", checkAuth, PseudocyphellariaFaveolataController.deletePseudocyphellariaFaveolata);
router.put("/:pseudocyphellariaFaveolataId", checkAuth, PseudocyphellariaFaveolataController.updatePseudocyphellariaFaveolata);

module.exports = router;
