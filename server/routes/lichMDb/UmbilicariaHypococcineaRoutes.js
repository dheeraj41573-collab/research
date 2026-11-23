const express = require("express");

const UmbilicariaHypococcineaController = require("../../controllers/lichMDb/UmbilicariaHypococcineaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", UmbilicariaHypococcineaController.addUmbilicariaHypococcinea);
router.get("/:umbilicariaHypococcineaId", UmbilicariaHypococcineaController.getOneUmbilicariaHypococcinea);
router.get("/", UmbilicariaHypococcineaController.getAllUmbilicariaHypococcineas);
router.delete("/:umbilicariaHypococcineaId", checkAuth, UmbilicariaHypococcineaController.deleteUmbilicariaHypococcinea);
router.put("/:umbilicariaHypococcineaId", checkAuth, UmbilicariaHypococcineaController.updateUmbilicariaHypococcinea);

module.exports = router;
