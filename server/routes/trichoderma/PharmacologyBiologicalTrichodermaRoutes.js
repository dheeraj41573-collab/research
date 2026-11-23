const express = require("express");

const PharmacologyBiologicalTrichodermaController = require("../../controllers/trichoderma/PharmacologyBiologicalTrichodermaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", PharmacologyBiologicalTrichodermaController.addPharmacologyBiologicalTrichoderma);
router.get("/:PharmacologyBiologicalTrichodermaId", PharmacologyBiologicalTrichodermaController.getOnePharmacologyBiologicalTrichoderma);
router.get("/", PharmacologyBiologicalTrichodermaController.getAllPharmacologyBiologicalTrichoderma);
router.delete("/:PharmacologyBiologicalTrichodermaId", checkAuth, PharmacologyBiologicalTrichodermaController.deletePharmacologyBiologicalTrichoderma);
router.put("/:PharmacologyBiologicalTrichodermaId", checkAuth, PharmacologyBiologicalTrichodermaController.updatePharmacologyBiologicalTrichoderma);

module.exports = router;
