const Haldi = require("../../models/smdb/HaldiModel");
const mongoose = require("mongoose");




const getOneHaldi = async (req, res, next) => {
  const id = req.params.haldiId;
  try {
    const haldi = await Haldi.findById(id);
    res.status(200).json(haldi);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllHaldi = async (req, res, next) => {
  try {
    const haldis = await Haldi.find({});
    res.status(200).json(haldis);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};



const addHaldi = async (req, res, next) => {
  const haldi = new Haldi({
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
    await haldi.save();
    res.status(201).json(haldi);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateHaldi = async (req, res, next) => {
  const id = req.params.haldiId;
  mongoose.set("useFindAndModify", false);
  Haldi.findByIdAndUpdate(
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
    function (err, haldi) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Haldi updated successfully",
          haldi: haldi,
        });
      }
    }
  );
};

const deleteHaldi = async (req, res, next) => {
  const id = req.params.haldiId;
  try {
    await Haldi.deleteOne({ _id: id });
    res.status(200).json({ message: "Haldi deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneHaldi,
  getAllHaldi,
  addHaldi,
  deleteHaldi,
  updateHaldi,
};
