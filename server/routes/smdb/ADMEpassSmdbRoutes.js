const express = require("express");

const ADMEpassSmdbController = require("../../controllers/smdb/ADMEpassSmdbController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", ADMEpassSmdbController.addADMEpassSmdb);
router.get("/:ADMEpassSmdbId", ADMEpassSmdbController.getOneADMEpassSmdb);
router.get("/", ADMEpassSmdbController.getAllADMEpassSmdb);
router.delete("/:ADMEpassSmdbId",checkAuth, ADMEpassSmdbController.deleteADMEpassSmdb);
router.put("/:ADMEpassSmdbId",checkAuth, ADMEpassSmdbController.updateADMEpassSmdb);

module.exports = router;
