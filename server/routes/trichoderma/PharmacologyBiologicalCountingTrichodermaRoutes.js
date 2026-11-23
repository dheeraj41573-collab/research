const express = require("express");

const Controller = require("../../controllers/trichoderma/PharmacologyBiologicalCountingTrichodermaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", Controller.addPharmacologyBiologicalCountingTrichoderma);
router.get("/:PharmacologyBiologicalCountingTrichodermaId", Controller.getOnePharmacologyBiologicalCountingTrichoderma);
router.get("/", Controller.getAllPharmacologyBiologicalCountingTrichoderma);
router.delete("/:PharmacologyBiologicalCountingTrichodermaId", checkAuth, Controller.deletePharmacologyBiologicalCountingTrichoderma);
router.put("/:PharmacologyBiologicalCountingTrichodermaId", checkAuth, Controller.updatePharmacologyBiologicalCountingTrichoderma);

module.exports = router;
