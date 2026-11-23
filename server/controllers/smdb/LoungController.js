const Loung = require("../../models/smdb/LoungModel")
const mongoose = require("mongoose");




const getOneLoung = async (req, res, next) => {
  const id = req.params.loungId;
  try {
    const loung = await Loung.findById(id);
    res.status(200).json(loung);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllLoung = async (req, res, next) => {
  try {
    const loungs = await Loung.find({});
    res.status(200).json(loungs);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};



const addLoung = async (req, res, next) => {
  const loung = new Loung({
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
    await loung.save();
    res.status(201).json(loung);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateLoung = async (req, res, next) => {
  const id = req.params.loungId;
  mongoose.set("useFindAndModify", false);
  Loung.findByIdAndUpdate(
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
    function (err, loung) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Loung updated successfully",
          loung: loung,
        });
      }
    }
  );
};

const deleteLoung = async (req, res, next) => {
  const id = req.params.loungId;
  try {
    await Loung.deleteOne({ _id: id });
    res.status(200).json({ message: "Loung deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneLoung,
  getAllLoung,
  addLoung,
  deleteLoung,
  updateLoung,
};
