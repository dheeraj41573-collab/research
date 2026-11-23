const LeptogiumSaturninum = require("../../models/lichMDb/LeptogiumSaturninumModel.js");
const mongoose = require("mongoose");

const addLeptogiumSaturninum = async (req, res, next) => {
  const leptogiumSaturninum = new LeptogiumSaturninum({
    _id: new mongoose.Types.ObjectId(),
    sn: req.body.sn,
    lichen: req.body.lichen,
    cid: req.body.cid,
    commonName: req.body.commonName,
    IUPACName: req.body.IUPACName,
    molecularWeight: req.body.molecularWeight,
    molecularFormula: req.body.molecularFormula,
    canonicalSmiles: req.body.canonicalSmiles,
    references: req.body.references,
    superClass: req.body.superClass,
    class: req.body.class,
  });
  try {
    await leptogiumSaturninum.save();
    res.status(201).json(leptogiumSaturninum);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneLeptogiumSaturninum = async (req, res, next) => {
  const id = req.params.leptogiumSaturninumId;
  try {
    const leptogiumSaturninum = await LeptogiumSaturninum.findById(id);
    res.status(200).json(leptogiumSaturninum);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllLeptogiumSaturninums = async (req, res, next) => {
  try {
    const leptogiumSaturninums = await LeptogiumSaturninum.find({});
    res.status(200).json(leptogiumSaturninums);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateLeptogiumSaturninum = async (req, res, next) => {
  const id = req.params.leptogiumSaturninumId;
  mongoose.set("useFindAndModify", false);
  LeptogiumSaturninum.findByIdAndUpdate(
    id,
    {
      sn: req.body.sn,
      lichen: req.body.lichen,
      cid: req.body.cid,
      commonName: req.body.commonName,
      IUPACName: req.body.IUPACName,
      molecularWeight: req.body.molecularWeight,
      molecularFormula: req.body.molecularFormula,
      canonicalSmiles: req.body.canonicalSmiles,
      references: req.body.references,
      superClass: req.body.superClass,
      class: req.body.class,
    },
    function (err, leptogiumSaturninum) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "LeptogiumSaturninum updated successfully",
          leptogiumSaturninum: leptogiumSaturninum,
        });
      }
    }
  );
};

const deleteLeptogiumSaturninum = async (req, res, next) => {
  const id = req.params.leptogiumSaturninumId;
  try {
    await LeptogiumSaturninum.deleteOne({ _id: id });
    res.status(200).json({ message: "LeptogiumSaturninum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneLeptogiumSaturninum,
  getAllLeptogiumSaturninums,
  addLeptogiumSaturninum,
  deleteLeptogiumSaturninum,
  updateLeptogiumSaturninum,
};