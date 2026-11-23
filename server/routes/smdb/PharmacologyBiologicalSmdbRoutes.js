const express = require("express");

const PharmacologyBiologicalSmdbController = require("../../controllers/smdb/PharmacologyBiologicalSmdbController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", PharmacologyBiologicalSmdbController.addPharmacologySmdb);
router.get("/:pharmacologyBiologicalId", PharmacologyBiologicalSmdbController.getOnePharmacologySmdb);
router.get("/", PharmacologyBiologicalSmdbController.getAllPharmacologysSmdb);
router.delete("/:pharmacologyBiologicalId",checkAuth, PharmacologyBiologicalSmdbController.deletePharmacologySmdb);
router.put("/:pharmacologyBiologicalId",checkAuth, PharmacologyBiologicalSmdbController.updatePharmacologySmdb);

module.exports = router;