const PseudocyphellariaNorvegica = require("../../models/lichMDb/PseudocyphellariaNorvegicaModel.js");
const mongoose = require("mongoose");

const addPseudocyphellariaNorvegica = async (req, res, next) => {
  const pseudocyphellariaNorvegica = new PseudocyphellariaNorvegica({
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
    await pseudocyphellariaNorvegica.save();
    res.status(201).json(pseudocyphellariaNorvegica);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOnePseudocyphellariaNorvegica = async (req, res, next) => {
  const id = req.params.pseudocyphellariaNorvegicaId;
  try {
    const pseudocyphellariaNorvegica = await PseudocyphellariaNorvegica.findById(id);
    res.status(200).json(pseudocyphellariaNorvegica);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllPseudocyphellariaNorvegicas = async (req, res, next) => {
  try {
    const pseudocyphellariaNorvegicas = await PseudocyphellariaNorvegica.find({});
    res.status(200).json(pseudocyphellariaNorvegicas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updatePseudocyphellariaNorvegica = async (req, res, next) => {
  const id = req.params.pseudocyphellariaNorvegicaId;
  mongoose.set("useFindAndModify", false);
  PseudocyphellariaNorvegica.findByIdAndUpdate(
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
    function (err, pseudocyphellariaNorvegica) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "PseudocyphellariaNorvegica updated successfully",
          pseudocyphellariaNorvegica: pseudocyphellariaNorvegica,
        });
      }
    }
  );
};

const deletePseudocyphellariaNorvegica = async (req, res, next) => {
  const id = req.params.pseudocyphellariaNorvegicaId;
  try {
    await PseudocyphellariaNorvegica.deleteOne({ _id: id });
    res.status(200).json({ message: "PseudocyphellariaNorvegica deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOnePseudocyphellariaNorvegica,
  getAllPseudocyphellariaNorvegicas,
  addPseudocyphellariaNorvegica,
  deletePseudocyphellariaNorvegica,
  updatePseudocyphellariaNorvegica,
};