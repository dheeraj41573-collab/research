const Ajwain = require("../../models/smdb/AjwainModel")
const mongoose = require("mongoose");




const getOneAjwain = async (req, res, next) => {
  const id = req.params.ajwainId;
  try {
    const ajwain = await Ajwain.findById(id);
    res.status(200).json(ajwain);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllAjwain = async (req, res, next) => {
  try {
    const ajwains = await Ajwain.find({});
    res.status(200).json(ajwains);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};



const addAjwain = async (req, res, next) => {
  const ajwain = new Ajwain({
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
    await ajwain.save();
    res.status(201).json(ajwain);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateAjwain = async (req, res, next) => {
  const id = req.params.ajwainId;
  mongoose.set("useFindAndModify", false);
  Ajwain.findByIdAndUpdate(
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
    function (err, ajwain) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Ajwain updated successfully",
          ajwain: ajwain,
        });
      }
    }
  );
};

const deleteAjwain = async (req, res, next) => {
  const id = req.params.ajwainId;
  try {
    await Ajwain.deleteOne({ _id: id });
    res.status(200).json({ message: "Ajwain deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneAjwain,
  getAllAjwain,
  addAjwain,
  deleteAjwain,
  updateAjwain,
};
