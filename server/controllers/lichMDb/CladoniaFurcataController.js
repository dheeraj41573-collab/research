const CladoniaFurcata = require("../../models/lichMDb/CladoniaFurcataModel.js");
const mongoose = require("mongoose");

const addCladoniaFurcata = async (req, res, next) => {
  const cladoniaFurcata = new CladoniaFurcata({
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
    await cladoniaFurcata.save();
    res.status(201).json(cladoniaFurcata);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneCladoniaFurcata = async (req, res, next) => {
  const id = req.params.cladoniaFurcataId;
  try {
    const cladoniaFurcata = await CladoniaFurcata.findById(id);
    res.status(200).json(cladoniaFurcata);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllCladoniaFurcatas = async (req, res, next) => {
  try {
    const cladoniaFurcatas = await CladoniaFurcata.find({});
    res.status(200).json(cladoniaFurcatas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateCladoniaFurcata = async (req, res, next) => {
  const id = req.params.cladoniaFurcataId;
  mongoose.set("useFindAndModify", false);
  CladoniaFurcata.findByIdAndUpdate(
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
    function (err, cladoniaFurcata) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "CladoniaFurcata updated successfully",
          cladoniaFurcata: cladoniaFurcata,
        });
      }
    }
  );
};

const deleteCladoniaFurcata = async (req, res, next) => {
  const id = req.params.cladoniaFurcataId;
  try {
    await CladoniaFurcata.deleteOne({ _id: id });
    res.status(200).json({ message: "CladoniaFurcata deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneCladoniaFurcata,
  getAllCladoniaFurcatas,
  addCladoniaFurcata,
  deleteCladoniaFurcata,
  updateCladoniaFurcata,
};