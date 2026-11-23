const PseudocyphellariaFaveolata = require("../../models/lichMDb/PseudocyphellariaFaveolataModel.js");
const mongoose = require("mongoose");

const addPseudocyphellariaFaveolata = async (req, res, next) => {
  const pseudocyphellariaFaveolata = new PseudocyphellariaFaveolata({
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
    await pseudocyphellariaFaveolata.save();
    res.status(201).json(pseudocyphellariaFaveolata);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOnePseudocyphellariaFaveolata = async (req, res, next) => {
  const id = req.params.pseudocyphellariaFaveolataId;
  try {
    const pseudocyphellariaFaveolata = await PseudocyphellariaFaveolata.findById(id);
    res.status(200).json(pseudocyphellariaFaveolata);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllPseudocyphellariaFaveolatas = async (req, res, next) => {
  try {
    const pseudocyphellariaFaveolatas = await PseudocyphellariaFaveolata.find({});
    res.status(200).json(pseudocyphellariaFaveolatas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updatePseudocyphellariaFaveolata = async (req, res, next) => {
  const id = req.params.pseudocyphellariaFaveolataId;
  mongoose.set("useFindAndModify", false);
  PseudocyphellariaFaveolata.findByIdAndUpdate(
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
    function (err, pseudocyphellariaFaveolata) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "PseudocyphellariaFaveolata updated successfully",
          pseudocyphellariaFaveolata: pseudocyphellariaFaveolata,
        });
      }
    }
  );
};

const deletePseudocyphellariaFaveolata = async (req, res, next) => {
  const id = req.params.pseudocyphellariaFaveolataId;
  try {
    await PseudocyphellariaFaveolata.deleteOne({ _id: id });
    res.status(200).json({ message: "PseudocyphellariaFaveolata deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOnePseudocyphellariaFaveolata,
  getAllPseudocyphellariaFaveolatas,
  addPseudocyphellariaFaveolata,
  deletePseudocyphellariaFaveolata,
  updatePseudocyphellariaFaveolata,
};