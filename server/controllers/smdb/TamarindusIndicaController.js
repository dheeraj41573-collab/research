const TamarindusIndica = require("../../models/smdb/TamarindusIndicaModel")
const mongoose = require("mongoose");

const getOneTamarindusIndica = async (req, res, next) => {
  const id = req.params.tamarindusIndicaId;
  try {
    const doc = await TamarindusIndica.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTamarindusIndica = async (req, res, next) => {
  try {
    const docs = await TamarindusIndica.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTamarindusIndica = async (req, res, next) => {
  const doc = new TamarindusIndica({
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
    await doc.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateTamarindusIndica = async (req, res, next) => {
  const id = req.params.tamarindusIndicaId;
  mongoose.set("useFindAndModify", false);
  TamarindusIndica.findByIdAndUpdate(
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
    function (err, doc) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "TamarindusIndica updated successfully",
          tamarindusIndica: doc,
        });
      }
    }
  );
};

const deleteTamarindusIndica = async (req, res, next) => {
  const id = req.params.tamarindusIndicaId;
  try {
    await TamarindusIndica.deleteOne({ _id: id });
    res.status(200).json({ message: "TamarindusIndica deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTamarindusIndica,
  getAllTamarindusIndica,
  addTamarindusIndica,
  deleteTamarindusIndica,
  updateTamarindusIndica,
};


