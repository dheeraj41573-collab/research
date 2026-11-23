const Lahsun = require("../../models/smdb/LahsunModel")
const mongoose = require("mongoose");




const getOneLahsun = async (req, res, next) => {
  const id = req.params.lahsunId;
  try {
    const lahsun = await Lahsun.findById(id);
    res.status(200).json(lahsun);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllLahsun = async (req, res, next) => {
  try {
    const lahsuns = await Lahsun.find({});
    res.status(200).json(lahsuns);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};



const addLahsun = async (req, res, next) => {
  const lahsun = new Lahsun({
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
    await lahsun.save();
    res.status(201).json(lahsun);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateLahsun = async (req, res, next) => {
  const id = req.params.lahsunId;
  mongoose.set("useFindAndModify", false);
  Lahsun.findByIdAndUpdate(
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
    function (err, lahsun) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Lahsun updated successfully",
          lahsun: lahsun,
        });
      }
    }
  );
};

const deleteLahsun = async (req, res, next) => {
  const id = req.params.lahsunId;
  try {
    await Lahsun.deleteOne({ _id: id });
    res.status(200).json({ message: "Lahsun deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneLahsun,
  getAllLahsun,
  addLahsun,
  deleteLahsun,
  updateLahsun,
};
