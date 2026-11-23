const Dhaniya = require("../../models/smdb/DhaniyaModel")
const mongoose = require("mongoose");




const getOneDhaniya = async (req, res, next) => {
  const id = req.params.dhaniyaId;
  try {
    const dhaniya = await Dhaniya.findById(id);
    res.status(200).json(dhaniya);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllDhaniya = async (req, res, next) => {
  try {
    const dhaniyas = await Dhaniya.find({});
    res.status(200).json(dhaniyas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};



const addDhaniya = async (req, res, next) => {
  const dhaniya = new Dhaniya({
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
    await dhaniya.save();
    res.status(201).json(dhaniya);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateDhaniya = async (req, res, next) => {
  const id = req.params.dhaniyaId;
  mongoose.set("useFindAndModify", false);
  Dhaniya.findByIdAndUpdate(
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
    function (err, dhaniya) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Dhaniya updated successfully",
          dhaniya: dhaniya,
        });
      }
    }
  );
};

const deleteDhaniya = async (req, res, next) => {
  const id = req.params.dhaniyaId;
  try {
    await Dhaniya.deleteOne({ _id: id });
    res.status(200).json({ message: "Dhaniya deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneDhaniya,
  getAllDhaniya,
  addDhaniya,
  deleteDhaniya,
  updateDhaniya,
};
