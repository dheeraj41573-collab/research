const Jaifal = require("../../models/smdb/JaifalModel")
const mongoose = require("mongoose");




const getOneJaifal = async (req, res, next) => {
  const id = req.params.jaifalId;
  try {
    const jaifal = await Jaifal.findById(id);
    res.status(200).json(jaifal);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllJaifal = async (req, res, next) => {
  try {
    const jaifals = await Jaifal.find({});
    res.status(200).json(jaifals);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};



const addJaifal = async (req, res, next) => {
  const jaifal = new Jaifal({
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
    await jaifal.save();
    res.status(201).json(jaifal);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateJaifal = async (req, res, next) => {
  const id = req.params.jaifalId;
  mongoose.set("useFindAndModify", false);
  Jaifal.findByIdAndUpdate(
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
    function (err, jaifal) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Jaifal updated successfully",
          jaifal: jaifal,
        });
      }
    }
  );
};

const deleteJaifal = async (req, res, next) => {
  const id = req.params.jaifalId;
  try {
    await Jaifal.deleteOne({ _id: id });
    res.status(200).json({ message: "Jaifal deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneJaifal,
  getAllJaifal,
  addJaifal,
  deleteJaifal,
  updateJaifal,
};
