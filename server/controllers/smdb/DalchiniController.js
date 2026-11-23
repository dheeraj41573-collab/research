const Dalchini = require("../../models/smdb/DalchiniModel")
const mongoose = require("mongoose");




const getOneDalchini = async (req, res, next) => {
  const id = req.params.dalchiniId;
  try {
    const dalchini = await Dalchini.findById(id);
    res.status(200).json(dalchini);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllDalchini = async (req, res, next) => {
  try {
    const dalchinis = await Dalchini.find({});
    res.status(200).json(dalchinis);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};



const addDalchini = async (req, res, next) => {
  const dalchini = new Dalchini({
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
    await dalchini.save();
    res.status(201).json(dalchini);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateDalchini = async (req, res, next) => {
  const id = req.params.dalchiniId;
  mongoose.set("useFindAndModify", false);
  Dalchini.findByIdAndUpdate(
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
    function (err, dalchini) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Dalchini updated successfully",
          dalchini: dalchini,
        });
      }
    }
  );
};

const deleteDalchini = async (req, res, next) => {
  const id = req.params.dalchiniId;
  try {
    await Dalchini.deleteOne({ _id: id });
    res.status(200).json({ message: "Dalchini deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneDalchini,
  getAllDalchini,
  addDalchini,
  deleteDalchini,
  updateDalchini,
};
