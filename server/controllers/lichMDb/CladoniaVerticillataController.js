const CladoniaVerticillata = require("../../models/lichMDb/CladoniaVerticillataModel.js");
const mongoose = require("mongoose");

const addCladoniaVerticillata = async (req, res, next) => {
  const cladoniaVerticillata = new CladoniaVerticillata({
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
    await cladoniaVerticillata.save();
    res.status(201).json(cladoniaVerticillata);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneCladoniaVerticillata = async (req, res, next) => {
  const id = req.params.cladoniaVerticillataId;
  try {
    const cladoniaVerticillata = await CladoniaVerticillata.findById(id);
    res.status(200).json(cladoniaVerticillata);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllCladoniaVerticillatas = async (req, res, next) => {
  try {
    const cladoniaVerticillatas = await CladoniaVerticillata.find({});
    res.status(200).json(cladoniaVerticillatas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateCladoniaVerticillata = async (req, res, next) => {
  const id = req.params.cladoniaVerticillataId;
  mongoose.set("useFindAndModify", false);
  CladoniaVerticillata.findByIdAndUpdate(
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
    function (err, cladoniaVerticillata) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "CladoniaVerticillata updated successfully",
          cladoniaVerticillata: cladoniaVerticillata,
        });
      }
    }
  );
};

const deleteCladoniaVerticillata = async (req, res, next) => {
  const id = req.params.cladoniaVerticillataId;
  try {
    await CladoniaVerticillata.deleteOne({ _id: id });
    res.status(200).json({ message: "CladoniaVerticillata deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneCladoniaVerticillata,
  getAllCladoniaVerticillatas,
  addCladoniaVerticillata,
  deleteCladoniaVerticillata,
  updateCladoniaVerticillata,
};