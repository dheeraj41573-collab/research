const Ratanjot = require("../../models/smdb/RatanjotModel")
const mongoose = require("mongoose");




const getOneRatanjot = async (req, res, next) => {
  const id = req.params.ratanjotId;
  try {
    const ratanjot = await Ratanjot.findById(id);
    res.status(200).json(ratanjot);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllRatanjot = async (req, res, next) => {
  try {
    const ratanjots = await Ratanjot.find({});
    res.status(200).json(ratanjots);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};



const addRatanjot = async (req, res, next) => {
  const ratanjot = new Ratanjot({
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
    await ratanjot.save();
    res.status(201).json(ratanjot);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateRatanjot = async (req, res, next) => {
  const id = req.params.ratanjotId;
  mongoose.set("useFindAndModify", false);
  Ratanjot.findByIdAndUpdate(
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
    function (err, ratanjot) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Ratanjot updated successfully",
          ratanjot: ratanjot,
        });
      }
    }
  );
};

const deleteRatanjot = async (req, res, next) => {
  const id = req.params.ratanjotId;
  try {
    await Ratanjot.deleteOne({ _id: id });
    res.status(200).json({ message: "Ratanjot deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneRatanjot,
  getAllRatanjot,
  addRatanjot,
  deleteRatanjot,
  updateRatanjot,
};
