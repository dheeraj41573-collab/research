const ParmeliaSaxatilis = require("../../models/lichMDb/ParmeliaSaxatilisModel.js");
const mongoose = require("mongoose");

const addParmeliaSaxatilis = async (req, res, next) => {
  const parmeliaSaxatilis = new ParmeliaSaxatilis({
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
    await parmeliaSaxatilis.save();
    res.status(201).json(parmeliaSaxatilis);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneParmeliaSaxatilis = async (req, res, next) => {
  const id = req.params.parmeliaSaxatilisId;
  try {
    const parmeliaSaxatilis = await ParmeliaSaxatilis.findById(id);
    res.status(200).json(parmeliaSaxatilis);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllParmeliaSaxatiliss = async (req, res, next) => {
  try {
    const parmeliaSaxatiliss = await ParmeliaSaxatilis.find({});
    res.status(200).json(parmeliaSaxatiliss);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateParmeliaSaxatilis = async (req, res, next) => {
  const id = req.params.parmeliaSaxatilisId;
  mongoose.set("useFindAndModify", false);
  ParmeliaSaxatilis.findByIdAndUpdate(
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
    function (err, parmeliaSaxatilis) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "ParmeliaSaxatilis updated successfully",
          parmeliaSaxatilis: parmeliaSaxatilis,
        });
      }
    }
  );
};

const deleteParmeliaSaxatilis = async (req, res, next) => {
  const id = req.params.parmeliaSaxatilisId;
  try {
    await ParmeliaSaxatilis.deleteOne({ _id: id });
    res.status(200).json({ message: "ParmeliaSaxatilis deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneParmeliaSaxatilis,
  getAllParmeliaSaxatiliss,
  addParmeliaSaxatilis,
  deleteParmeliaSaxatilis,
  updateParmeliaSaxatilis,
};