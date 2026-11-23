const express = require("express");

const PharmacologyCerealSmdbController = require("../../controllers/smdb/PharmacologyCerealSmdbController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", PharmacologyCerealSmdbController.addPharmacologySmdb);
router.get("/:pharmacologyCerealId", PharmacologyCerealSmdbController.getOnePharmacologySmdb);
router.get("/", PharmacologyCerealSmdbController.getAllPharmacologysSmdb);
router.delete("/:pharmacologyCerealId",checkAuth, PharmacologyCerealSmdbController.deletePharmacologySmdb);
router.put("/:pharmacologyCerealId",checkAuth, PharmacologyCerealSmdbController.updatePharmacologySmdb);

module.exports = router;