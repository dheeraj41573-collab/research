const express = require("express");

const ADMEpassTrichodermaController = require("../../controllers/trichoderma/ADMEpassTrichodermaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", ADMEpassTrichodermaController.addADMEpassTrichoderma);
router.get("/:ADMEpassTrichodermaId", ADMEpassTrichodermaController.getOneADMEpassTrichoderma);
router.get("/", ADMEpassTrichodermaController.getAllADMEpassTrichoderma);
router.delete("/:ADMEpassTrichodermaId", checkAuth, ADMEpassTrichodermaController.deleteADMEpassTrichoderma);
router.put("/:ADMEpassTrichodermaId", checkAuth, ADMEpassTrichodermaController.updateADMEpassTrichoderma);

module.exports = router;
