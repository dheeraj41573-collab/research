const express = require("express");

const RamalinaController = require("../../controllers/lichMDb/RamalinaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", RamalinaController.addRamalina);
router.get("/:ramalinaId", RamalinaController.getOneRamalina);
router.get("/", RamalinaController.getAllRamalinas);
router.delete("/:ramalinaId", checkAuth, RamalinaController.deleteRamalina);
router.put("/:ramalinaId", checkAuth, RamalinaController.updateRamalina);

module.exports = router;
