const express = require("express");

const ParmeliaSaxatilisController = require("../../controllers/lichMDb/ParmeliaSaxatilisController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", ParmeliaSaxatilisController.addParmeliaSaxatilis);
router.get("/:parmeliaSaxatilisId", ParmeliaSaxatilisController.getOneParmeliaSaxatilis);
router.get("/", ParmeliaSaxatilisController.getAllParmeliaSaxatiliss);
router.delete("/:parmeliaSaxatilisId", checkAuth, ParmeliaSaxatilisController.deleteParmeliaSaxatilis);
router.put("/:parmeliaSaxatilisId", checkAuth, ParmeliaSaxatilisController.updateParmeliaSaxatilis);

module.exports = router;
