const ParmotremaNilgherrense = require("../../models/lichMDb/ParmotremaNilgherrenseModel.js");
const mongoose = require("mongoose");

const addParmotremaNilgherrense = async (req, res, next) => {
  const parmotremaNilgherrense = new ParmotremaNilgherrense({
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
    await parmotremaNilgherrense.save();
    res.status(201).json(parmotremaNilgherrense);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneParmotremaNilgherrense = async (req, res, next) => {
  const id = req.params.parmotremaNilgherrenseId;
  try {
    const parmotremaNilgherrense = await ParmotremaNilgherrense.findById(id);
    res.status(200).json(parmotremaNilgherrense);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllParmotremaNilgherrenses = async (req, res, next) => {
  try {
    const parmotremaNilgherrenses = await ParmotremaNilgherrense.find({});
    res.status(200).json(parmotremaNilgherrenses);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateParmotremaNilgherrense = async (req, res, next) => {
  const id = req.params.parmotremaNilgherrenseId;
  mongoose.set("useFindAndModify", false);
  ParmotremaNilgherrense.findByIdAndUpdate(
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
    function (err, parmotremaNilgherrense) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "ParmotremaNilgherrense updated successfully",
          parmotremaNilgherrense: parmotremaNilgherrense,
        });
      }
    }
  );
};

const deleteParmotremaNilgherrense = async (req, res, next) => {
  const id = req.params.parmotremaNilgherrenseId;
  try {
    await ParmotremaNilgherrense.deleteOne({ _id: id });
    res.status(200).json({ message: "ParmotremaNilgherrense deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneParmotremaNilgherrense,
  getAllParmotremaNilgherrenses,
  addParmotremaNilgherrense,
  deleteParmotremaNilgherrense,
  updateParmotremaNilgherrense,
};