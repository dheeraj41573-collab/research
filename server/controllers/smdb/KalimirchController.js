const Kalimirch = require("../../models/smdb/KalimirchModel")
const mongoose = require("mongoose");




const getOneKalimirch = async (req, res, next) => {
  const id = req.params.kalimirchId;
  try {
    const kalimirch = await Kalimirch.findById(id);
    res.status(200).json(kalimirch);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllKalimirch = async (req, res, next) => {
  try {
    const kalimirchs = await Kalimirch.find({});
    res.status(200).json(kalimirchs);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};



const addKalimirch = async (req, res, next) => {
  const kalimirch = new Kalimirch({
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
    await kalimirch.save();
    res.status(201).json(kalimirch);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateKalimirch = async (req, res, next) => {
  const id = req.params.kalimirchId;
  mongoose.set("useFindAndModify", false);
  Kalimirch.findByIdAndUpdate(
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
    function (err, kalimirch) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Kalimirch updated successfully",
          kalimirch: kalimirch,
        });
      }
    }
  );
};

const deleteKalimirch = async (req, res, next) => {
  const id = req.params.kalimirchId;
  try {
    await Kalimirch.deleteOne({ _id: id });
    res.status(200).json({ message: "Kalimirch deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneKalimirch,
  getAllKalimirch,
  addKalimirch,
  deleteKalimirch,
  updateKalimirch,
};
