const express = require("express");

const RamalinaFarinaceaController = require("../../controllers/lichMDb/RamalinaFarinaceaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", RamalinaFarinaceaController.addRamalinaFarinacea);
router.get("/:ramalinaFarinaceaId", RamalinaFarinaceaController.getOneRamalinaFarinacea);
router.get("/", RamalinaFarinaceaController.getAllRamalinaFarinaceas);
router.delete("/:ramalinaFarinaceaId", checkAuth, RamalinaFarinaceaController.deleteRamalinaFarinacea);
router.put("/:ramalinaFarinaceaId", checkAuth, RamalinaFarinaceaController.updateRamalinaFarinacea);

module.exports = router;
