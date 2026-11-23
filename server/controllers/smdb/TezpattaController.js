const Tezpatta = require("../../models/smdb/TezpattaModel");

const mongoose = require("mongoose");




const getOneTezpatta = async (req, res, next) => {
  const id = req.params.tezpattaId;
  try {
    const tezpatta = await Tezpatta.findById(id);
    res.status(200).json(tezpatta);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTezpatta = async (req, res, next) => {
  try {
    const tezpatts = await Tezpatta.find({});
    res.status(200).json(tezpatts);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};



const addTezpatta = async (req, res, next) => {
  const tezpatta = new Tezpatta({
    _id: new mongoose.Types.ObjectId(),
    scientificName: req.body.scientificName,
    commonName: req.body.commonName,
    cid: req.body.cid,
    compoundName: req.body.compoundName,
    IUPACName: req.body.IUPACName,
    molecularWeight: req.body.molecularWeight,
    molecularFormula: req.body.molecularFormula,
    canonicalSmiles: req.body.canonicalSmiles,
    superClass: req.body.superClass,
    class: req.body.class,
  });
  try {
    await tezpatta.save();
    res.status(201).json(tezpatta);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateTezpatta = async (req, res, next) => {
  const id = req.params.tezpattaId;
  mongoose.set("useFindAndModify", false);
  Tezpatta.findByIdAndUpdate(
    id,
    {
      scientificName: req.body.scientificName,
      commonName: req.body.commonName,
      cid: req.body.cid,
      compoundName: req.body.compoundName,
      IUPACName: req.body.IUPACName,
      molecularWeight: req.body.molecularWeight,
      molecularFormula: req.body.molecularFormula,
      canonicalSmiles: req.body.canonicalSmiles,
      superClass: req.body.superClass,
      class: req.body.class,
    },
    function (err, tezpatta) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Tezpatta updated successfully",
          tezpatta: tezpatta,
        });
      }
    }
  );
};

const deleteTezpatta = async (req, res, next) => {
  const id = req.params.tezpattaId;
  try {
    await Tezpatta.deleteOne({ _id: id });
    res.status(200).json({ message: "Tezpatta deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTezpatta,
  getAllTezpatta,
  addTezpatta,
  deleteTezpatta,
  updateTezpatta,
};
