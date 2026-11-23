const CladoniaMitis = require("../../models/lichMDb/CladoniaMitisModel.js");
const mongoose = require("mongoose");

const addCladoniaMitis = async (req, res, next) => {
  const cladoniaMitis = new CladoniaMitis({
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
    await cladoniaMitis.save();
    res.status(201).json(cladoniaMitis);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneCladoniaMitis = async (req, res, next) => {
  const id = req.params.cladoniaMitisId;
  try {
    const cladoniaMitis = await CladoniaMitis.findById(id);
    res.status(200).json(cladoniaMitis);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllCladoniaMitiss = async (req, res, next) => {
  try {
    const cladoniaMitiss = await CladoniaMitis.find({});
    res.status(200).json(cladoniaMitiss);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateCladoniaMitis = async (req, res, next) => {
  const id = req.params.cladoniaMitisId;
  mongoose.set("useFindAndModify", false);
  CladoniaMitis.findByIdAndUpdate(
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
    function (err, cladoniaMitis) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "CladoniaMitis updated successfully",
          cladoniaMitis: cladoniaMitis,
        });
      }
    }
  );
};

const deleteCladoniaMitis = async (req, res, next) => {
  const id = req.params.cladoniaMitisId;
  try {
    await CladoniaMitis.deleteOne({ _id: id });
    res.status(200).json({ message: "CladoniaMitis deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneCladoniaMitis,
  getAllCladoniaMitiss,
  addCladoniaMitis,
  deleteCladoniaMitis,
  updateCladoniaMitis,
};