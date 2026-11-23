const Kesar = require("../../models/smdb/KesarModel")
const mongoose = require("mongoose");




const getOneKesar = async (req, res, next) => {
  const id = req.params.kesarId;
  try {
    const kesar = await Kesar.findById(id);
    res.status(200).json(kesar);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllKesar = async (req, res, next) => {
  try {
    const kesars = await Kesar.find({});
    res.status(200).json(kesars);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};



const addKesar = async (req, res, next) => {
  const kesar = new Kesar({
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
    await kesar.save();
    res.status(201).json(kesar);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateKesar = async (req, res, next) => {
  const id = req.params.kesarId;
  mongoose.set("useFindAndModify", false);
  Kesar.findByIdAndUpdate(
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
    function (err, kesar) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Kesar updated successfully",
          kesar: kesar,
        });
      }
    }
  );
};

const deleteKesar = async (req, res, next) => {
  const id = req.params.kesarId;
  try {
    await Kesar.deleteOne({ _id: id });
    res.status(200).json({ message: "Kesar deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneKesar,
  getAllKesar,
  addKesar,
  deleteKesar,
  updateKesar,
};
