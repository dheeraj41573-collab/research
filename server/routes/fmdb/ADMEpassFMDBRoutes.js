const express = require("express");
const router = express.Router();
const ADMEpassFMDBController = require("../../controllers/fmdb/ADMEpassFMDBController.js");
const checkAuth = require("../../middlewares/check-auth");

const validateBody = (req, res, next) => {
  const b = req.body || {};
  const cid = b.cid ?? b.CID ?? b.PubChemCID;
  const name = b.CompoundName ?? b.modecule;
  const formula = b.formula ?? b.Formula;
  const mw = b.mW ?? b.MW;
  if (cid === undefined || name === undefined || formula === undefined || mw === undefined) {
    return res.status(400).json({ message: "Missing required fields: cid, CompoundName, formula, mW" });
  }
  next();
};

router.post("/", validateBody, ADMEpassFMDBController.addADMEpassFmdb);
router.get("/:ADMEpassId", ADMEpassFMDBController.getOneADMEpassFmdb);
router.get("/", ADMEpassFMDBController.getAllADMEpassFmdbs);
router.delete("/:ADMEpassId", checkAuth, ADMEpassFMDBController.deleteADMEpassFmdb);
router.put("/:ADMEpassId", checkAuth, validateBody, ADMEpassFMDBController.updateADMEpassFmdb);
router.post("/seed", ADMEpassFMDBController.seedADMEpassFmdb);

module.exports = router;
