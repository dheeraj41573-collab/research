const Elayachi = require("../../models/smdb/ElayachiModel")
const mongoose = require("mongoose");




const getOneElayachi = async (req, res, next) => {
  const id = req.params.elayachiId;
  try {
    const elayachi = await Elayachi.findById(id);
    res.status(200).json(elayachi);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllElayachi = async (req, res, next) => {
  try {
    const elayachis = await Elayachi.find({});
    res.status(200).json(elayachis);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};



const addElayachi = async (req, res, next) => {
  const elayachi = new Elayachi({
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
    await elayachi.save();
    res.status(201).json(elayachi);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateElayachi = async (req, res, next) => {
  const id = req.params.elayachiId;
  mongoose.set("useFindAndModify", false);
  Elayachi.findByIdAndUpdate(
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
    function (err, elayachi) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Elayachi updated successfully",
          elayachi: elayachi,
        });
      }
    }
  );
};

const deleteElayachi = async (req, res, next) => {
  const id = req.params.elayachiId;
  try {
    await Elayachi.deleteOne({ _id: id });
    res.status(200).json({ message: "Elayachi deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneElayachi,
  getAllElayachi,
  addElayachi,
  deleteElayachi,
  updateElayachi,
};
