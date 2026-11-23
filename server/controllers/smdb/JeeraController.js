const Jeera = require("../../models/smdb/JeeraModel")
const mongoose = require("mongoose");




const getOneJeera = async (req, res, next) => {
  const id = req.params.jeeraId;
  try {
    const jeera = await Jeera.findById(id);
    res.status(200).json(jeera);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllJeera = async (req, res, next) => {
  try {
    const jeeras = await Jeera.find({});
    res.status(200).json(jeeras);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};



const addJeera = async (req, res, next) => {
  const jeera = new Jeera({
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
    await jeera.save();
    res.status(201).json(jeera);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateJeera = async (req, res, next) => {
  const id = req.params.jeeraId;
  mongoose.set("useFindAndModify", false);
  Jeera.findByIdAndUpdate(
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
    function (err, jeera) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Jeera updated successfully",
          jeera: jeera,
        });
      }
    }
  );
};

const deleteJeera = async (req, res, next) => {
  const id = req.params.jeeraId;
  try {
    await Jeera.deleteOne({ _id: id });
    res.status(200).json({ message: "Jeera deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneJeera,
  getAllJeera,
  addJeera,
  deleteJeera,
  updateJeera,
};
