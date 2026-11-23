const express = require("express");

const CladoniaCryptochlorophaeaController = require("../../controllers/lichMDb/CladoniaCryptochlorophaeaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", CladoniaCryptochlorophaeaController.addCladoniaCryptochlorophaea);
router.get("/:cladoniaCryptochlorophaeaId", CladoniaCryptochlorophaeaController.getOneCladoniaCryptochlorophaea);
router.get("/", CladoniaCryptochlorophaeaController.getAllCladoniaCryptochlorophaeas);
router.delete("/:cladoniaCryptochlorophaeaId", checkAuth, CladoniaCryptochlorophaeaController.deleteCladoniaCryptochlorophaea);
router.put("/:cladoniaCryptochlorophaeaId", checkAuth, CladoniaCryptochlorophaeaController.updateCladoniaCryptochlorophaea);

module.exports = router;
