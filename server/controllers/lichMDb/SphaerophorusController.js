const Sphaerophorus = require("../../models/lichMDb/SphaerophorusModel.js");
const mongoose = require("mongoose");

const addSphaerophorus = async (req, res, next) => {
  const sphaerophorus = new Sphaerophorus({
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
    await sphaerophorus.save();
    res.status(201).json(sphaerophorus);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneSphaerophorus = async (req, res, next) => {
  const id = req.params.sphaerophorusId;
  try {
    const sphaerophorus = await Sphaerophorus.findById(id);
    res.status(200).json(sphaerophorus);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllSphaerophoruss = async (req, res, next) => {
  try {
    const sphaerophoruss = await Sphaerophorus.find({});
    res.status(200).json(sphaerophoruss);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateSphaerophorus = async (req, res, next) => {
  const id = req.params.sphaerophorusId;
  mongoose.set("useFindAndModify", false);
  Sphaerophorus.findByIdAndUpdate(
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
    function (err, sphaerophorus) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Sphaerophorus updated successfully",
          sphaerophorus: sphaerophorus,
        });
      }
    }
  );
};

const deleteSphaerophorus = async (req, res, next) => {
  const id = req.params.sphaerophorusId;
  try {
    await Sphaerophorus.deleteOne({ _id: id });
    res.status(200).json({ message: "Sphaerophorus deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneSphaerophorus,
  getAllSphaerophoruss,
  addSphaerophorus,
  deleteSphaerophorus,
  updateSphaerophorus,
};