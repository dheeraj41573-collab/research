const SaturejaHortensis = require("../../models/smdb/SaturejaHortensisModel")
const mongoose = require("mongoose");

const getOneSaturejaHortensis = async (req, res, next) => {
  const id = req.params.saturejaHortensisId;
  try {
    const doc = await SaturejaHortensis.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllSaturejaHortensis = async (req, res, next) => {
  try {
    const docs = await SaturejaHortensis.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addSaturejaHortensis = async (req, res, next) => {
  const doc = new SaturejaHortensis({
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

const updateSaturejaHortensis = async (req, res, next) => {
  const id = req.params.saturejaHortensisId;
  mongoose.set("useFindAndModify", false);
  SaturejaHortensis.findByIdAndUpdate(
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
          message: "SaturejaHortensis updated successfully",
          saturejaHortensis: doc,
        });
      }
    }
  );
};

const deleteSaturejaHortensis = async (req, res, next) => {
  const id = req.params.saturejaHortensisId;
  try {
    await SaturejaHortensis.deleteOne({ _id: id });
    res.status(200).json({ message: "SaturejaHortensis deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneSaturejaHortensis,
  getAllSaturejaHortensis,
  addSaturejaHortensis,
  deleteSaturejaHortensis,
  updateSaturejaHortensis,
};


