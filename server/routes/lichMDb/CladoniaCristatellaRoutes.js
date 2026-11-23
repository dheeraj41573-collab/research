const express = require("express");

const CladoniaCristatellaController = require("../../controllers/lichMDb/CladoniaCristatellaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", CladoniaCristatellaController.addCladoniaCristatella);
router.get("/:cladoniaCristatellaId", CladoniaCristatellaController.getOneCladoniaCristatella);
router.get("/", CladoniaCristatellaController.getAllCladoniaCristatellas);
router.delete("/:cladoniaCristatellaId", checkAuth, CladoniaCristatellaController.deleteCladoniaCristatella);
router.put("/:cladoniaCristatellaId", checkAuth, CladoniaCristatellaController.updateCladoniaCristatella);

module.exports = router;
