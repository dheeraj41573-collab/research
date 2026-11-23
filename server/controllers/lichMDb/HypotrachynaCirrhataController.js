const HypotrachynaCirrhata = require("../../models/lichMDb/HypotrachynaCirrhataModel.js");
const mongoose = require("mongoose");

const addHypotrachynaCirrhata = async (req, res, next) => {
  const hypotrachynaCirrhata = new HypotrachynaCirrhata({
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
    await hypotrachynaCirrhata.save();
    res.status(201).json(hypotrachynaCirrhata);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneHypotrachynaCirrhata = async (req, res, next) => {
  const id = req.params.hypotrachynaCirrhataId;
  try {
    const hypotrachynaCirrhata = await HypotrachynaCirrhata.findById(id);
    res.status(200).json(hypotrachynaCirrhata);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllHypotrachynaCirrhatas = async (req, res, next) => {
  try {
    const hypotrachynaCirrhatas = await HypotrachynaCirrhata.find({});
    res.status(200).json(hypotrachynaCirrhatas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateHypotrachynaCirrhata = async (req, res, next) => {
  const id = req.params.hypotrachynaCirrhataId;
  mongoose.set("useFindAndModify", false);
  HypotrachynaCirrhata.findByIdAndUpdate(
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
    function (err, hypotrachynaCirrhata) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "HypotrachynaCirrhata updated successfully",
          hypotrachynaCirrhata: hypotrachynaCirrhata,
        });
      }
    }
  );
};

const deleteHypotrachynaCirrhata = async (req, res, next) => {
  const id = req.params.hypotrachynaCirrhataId;
  try {
    await HypotrachynaCirrhata.deleteOne({ _id: id });
    res.status(200).json({ message: "HypotrachynaCirrhata deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneHypotrachynaCirrhata,
  getAllHypotrachynaCirrhatas,
  addHypotrachynaCirrhata,
  deleteHypotrachynaCirrhata,
  updateHypotrachynaCirrhata,
};