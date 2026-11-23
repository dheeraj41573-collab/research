const express = require("express");

const ADMEpassGMDBController = require("../../controllers/gmdb/ADMEpassGMDBController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", ADMEpassGMDBController.addADMEpassGmdb);
router.get("/:ADMEpassId", ADMEpassGMDBController.getOneADMEpassGmdb);
router.get("/", ADMEpassGMDBController.getAllADMEpassGmdbs);
router.delete("/:ADMEpassId", checkAuth, ADMEpassGMDBController.deleteADMEpassGmdb);
router.put("/:ADMEpassId", checkAuth, ADMEpassGMDBController.updateADMEpassGmdb);
router.post("/seed", ADMEpassGMDBController.seedADMEpassGmdb);

module.exports = router;
