const Hing = require("../../models/smdb/HingModel")
const mongoose = require("mongoose");




const getOneHing = async (req, res, next) => {
  const id = req.params.hingId;
  try {
    const hing = await Hing.findById(id);
    res.status(200).json(hing);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllHing = async (req, res, next) => {
  try {
    const hings = await Hing.find({});
    res.status(200).json(hings);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};



const addHing = async (req, res, next) => {
  const hing = new Hing({
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
    await hing.save();
    res.status(201).json(hing);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateHing = async (req, res, next) => {
  const id = req.params.hingId;
  mongoose.set("useFindAndModify", false);
  Hing.findByIdAndUpdate(
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
    function (err, hing) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Hing updated successfully",
          hing: hing,
        });
      }
    }
  );
};

const deleteHing = async (req, res, next) => {
  const id = req.params.hingId;
  try {
    await Hing.deleteOne({ _id: id });
    res.status(200).json({ message: "Hing deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneHing,
  getAllHing,
  addHing,
  deleteHing,
  updateHing,
};
