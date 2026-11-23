const ParmotremaPraesorediosum = require("../../models/lichMDb/ParmotremaPraesorediosumModel.js");
const mongoose = require("mongoose");

const addParmotremaPraesorediosum = async (req, res, next) => {
  const parmotremaPraesorediosum = new ParmotremaPraesorediosum({
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
    await parmotremaPraesorediosum.save();
    res.status(201).json(parmotremaPraesorediosum);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneParmotremaPraesorediosum = async (req, res, next) => {
  const id = req.params.parmotremaPraesorediosumId;
  try {
    const parmotremaPraesorediosum = await ParmotremaPraesorediosum.findById(id);
    res.status(200).json(parmotremaPraesorediosum);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllParmotremaPraesorediosums = async (req, res, next) => {
  try {
    const parmotremaPraesorediosums = await ParmotremaPraesorediosum.find({});
    res.status(200).json(parmotremaPraesorediosums);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateParmotremaPraesorediosum = async (req, res, next) => {
  const id = req.params.parmotremaPraesorediosumId;
  mongoose.set("useFindAndModify", false);
  ParmotremaPraesorediosum.findByIdAndUpdate(
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
    function (err, parmotremaPraesorediosum) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "ParmotremaPraesorediosum updated successfully",
          parmotremaPraesorediosum: parmotremaPraesorediosum,
        });
      }
    }
  );
};

const deleteParmotremaPraesorediosum = async (req, res, next) => {
  const id = req.params.parmotremaPraesorediosumId;
  try {
    await ParmotremaPraesorediosum.deleteOne({ _id: id });
    res.status(200).json({ message: "ParmotremaPraesorediosum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneParmotremaPraesorediosum,
  getAllParmotremaPraesorediosums,
  addParmotremaPraesorediosum,
  deleteParmotremaPraesorediosum,
  updateParmotremaPraesorediosum,
};