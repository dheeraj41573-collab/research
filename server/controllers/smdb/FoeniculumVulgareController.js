const FoeniculumVulgare = require("../../models/smdb/FoeniculumVulgareModel")
const mongoose = require("mongoose");

const getOneFoeniculumVulgare = async (req, res, next) => {
  const id = req.params.foeniculumVulgareId;
  try {
    const doc = await FoeniculumVulgare.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllFoeniculumVulgare = async (req, res, next) => {
  try {
    const docs = await FoeniculumVulgare.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addFoeniculumVulgare = async (req, res, next) => {
  const doc = new FoeniculumVulgare({
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

const updateFoeniculumVulgare = async (req, res, next) => {
  const id = req.params.foeniculumVulgareId;
  mongoose.set("useFindAndModify", false);
  FoeniculumVulgare.findByIdAndUpdate(
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
          message: "FoeniculumVulgare updated successfully",
          foeniculumVulgare: doc,
        });
      }
    }
  );
};

const deleteFoeniculumVulgare = async (req, res, next) => {
  const id = req.params.foeniculumVulgareId;
  try {
    await FoeniculumVulgare.deleteOne({ _id: id });
    res.status(200).json({ message: "FoeniculumVulgare deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneFoeniculumVulgare,
  getAllFoeniculumVulgare,
  addFoeniculumVulgare,
  deleteFoeniculumVulgare,
  updateFoeniculumVulgare,
};


