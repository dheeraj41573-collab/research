const PunicaGranatum = require("../../models/smdb/PunicaGranatumModel")
const mongoose = require("mongoose");

const getOnePunicaGranatum = async (req, res, next) => {
  const id = req.params.punicaGranatumId;
  try {
    const doc = await PunicaGranatum.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllPunicaGranatum = async (req, res, next) => {
  try {
    const docs = await PunicaGranatum.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addPunicaGranatum = async (req, res, next) => {
  const doc = new PunicaGranatum({
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

const updatePunicaGranatum = async (req, res, next) => {
  const id = req.params.punicaGranatumId;
  mongoose.set("useFindAndModify", false);
  PunicaGranatum.findByIdAndUpdate(
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
          message: "PunicaGranatum updated successfully",
          punicaGranatum: doc,
        });
      }
    }
  );
};

const deletePunicaGranatum = async (req, res, next) => {
  const id = req.params.punicaGranatumId;
  try {
    await PunicaGranatum.deleteOne({ _id: id });
    res.status(200).json({ message: "PunicaGranatum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOnePunicaGranatum,
  getAllPunicaGranatum,
  addPunicaGranatum,
  deletePunicaGranatum,
  updatePunicaGranatum,
};


