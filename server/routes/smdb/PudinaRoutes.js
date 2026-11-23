const express = require("express");
const PudinaController = require("../../controllers/smdb/PudinaController.js")
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", PudinaController.addPudina);
router.get("/:pudinaId", PudinaController.getOnePudina);
router.get("/", PudinaController.getAllPudina);
router.delete("/:pudinaId",checkAuth, PudinaController.deletePudina);
router.put("/:pudinaId",checkAuth, PudinaController.updatePudina);

module.exports = router;