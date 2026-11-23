const ParmotremaTinctorum = require("../../models/lichMDb/ParmotremaTinctorumModel.js");
const mongoose = require("mongoose");

const addParmotremaTinctorum = async (req, res, next) => {
  const parmotremaTinctorum = new ParmotremaTinctorum({
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
    await parmotremaTinctorum.save();
    res.status(201).json(parmotremaTinctorum);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneParmotremaTinctorum = async (req, res, next) => {
  const id = req.params.parmotremaTinctorumId;
  try {
    const parmotremaTinctorum = await ParmotremaTinctorum.findById(id);
    res.status(200).json(parmotremaTinctorum);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllParmotremaTinctorums = async (req, res, next) => {
  try {
    const parmotremaTinctorums = await ParmotremaTinctorum.find({});
    res.status(200).json(parmotremaTinctorums);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateParmotremaTinctorum = async (req, res, next) => {
  const id = req.params.parmotremaTinctorumId;
  mongoose.set("useFindAndModify", false);
  ParmotremaTinctorum.findByIdAndUpdate(
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
    function (err, parmotremaTinctorum) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "ParmotremaTinctorum updated successfully",
          parmotremaTinctorum: parmotremaTinctorum,
        });
      }
    }
  );
};

const deleteParmotremaTinctorum = async (req, res, next) => {
  const id = req.params.parmotremaTinctorumId;
  try {
    await ParmotremaTinctorum.deleteOne({ _id: id });
    res.status(200).json({ message: "ParmotremaTinctorum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneParmotremaTinctorum,
  getAllParmotremaTinctorums,
  addParmotremaTinctorum,
  deleteParmotremaTinctorum,
  updateParmotremaTinctorum,
};