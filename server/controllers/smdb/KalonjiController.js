const Kalonji = require("../../models/smdb/KalonjiModel")
const mongoose = require("mongoose");




const getOneKalonji = async (req, res, next) => {
  const id = req.params.kalonjiId;
  try {
    const kalonji = await Kalonji.findById(id);
    res.status(200).json(kalonji);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllKalonji = async (req, res, next) => {
  try {
    const kalonjis = await Kalonji.find({});
    res.status(200).json(kalonjis);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};



const addKalonji = async (req, res, next) => {
  const kalonji = new Kalonji({
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
    await kalonji.save();
    res.status(201).json(kalonji);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateKalonji = async (req, res, next) => {
  const id = req.params.kalonjiId;
  mongoose.set("useFindAndModify", false);
  Kalonji.findByIdAndUpdate(
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
    function (err, kalonji) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Kalonji updated successfully",
          kalonji: kalonji,
        });
      }
    }
  );
};

const deleteKalonji = async (req, res, next) => {
  const id = req.params.kalonjiId;
  try {
    await Kalonji.deleteOne({ _id: id });
    res.status(200).json({ message: "Kalonji deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneKalonji,
  getAllKalonji,
  addKalonji,
  deleteKalonji,
  updateKalonji,
};
