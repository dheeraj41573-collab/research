const express = require("express");

const ADMEpassDMDBController = require("../../controllers/dmdb/ADMEpassDMDBController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", ADMEpassDMDBController.addADMEpassDmdb);
router.get("/:ADMEpassId", ADMEpassDMDBController.getOneADMEpassDmdb);
router.get("/", ADMEpassDMDBController.getAllADMEpassDmdbs);
router.delete("/:ADMEpassId", checkAuth, ADMEpassDMDBController.deleteADMEpassDmdb);
router.put("/:ADMEpassId", checkAuth, ADMEpassDMDBController.updateADMEpassDmdb);
router.post("/seed", ADMEpassDMDBController.seedADMEpassDmdb);

module.exports = router;
