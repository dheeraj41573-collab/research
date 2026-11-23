const CladoniaRangiferina = require("../../models/lichMDb/CladoniaRangiferinaModel.js");
const mongoose = require("mongoose");

const addCladoniaRangiferina = async (req, res, next) => {
  const cladoniaRangiferina = new CladoniaRangiferina({
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
    await cladoniaRangiferina.save();
    res.status(201).json(cladoniaRangiferina);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneCladoniaRangiferina = async (req, res, next) => {
  const id = req.params.cladoniaRangiferinaId;
  try {
    const cladoniaRangiferina = await CladoniaRangiferina.findById(id);
    res.status(200).json(cladoniaRangiferina);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllCladoniaRangiferinas = async (req, res, next) => {
  try {
    const cladoniaRangiferinas = await CladoniaRangiferina.find({});
    res.status(200).json(cladoniaRangiferinas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateCladoniaRangiferina = async (req, res, next) => {
  const id = req.params.cladoniaRangiferinaId;
  mongoose.set("useFindAndModify", false);
  CladoniaRangiferina.findByIdAndUpdate(
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
    function (err, cladoniaRangiferina) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "CladoniaRangiferina updated successfully",
          cladoniaRangiferina: cladoniaRangiferina,
        });
      }
    }
  );
};

const deleteCladoniaRangiferina = async (req, res, next) => {
  const id = req.params.cladoniaRangiferinaId;
  try {
    await CladoniaRangiferina.deleteOne({ _id: id });
    res.status(200).json({ message: "CladoniaRangiferina deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneCladoniaRangiferina,
  getAllCladoniaRangiferinas,
  addCladoniaRangiferina,
  deleteCladoniaRangiferina,
  updateCladoniaRangiferina,
};