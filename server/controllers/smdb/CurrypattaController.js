const Currypatta = require("../../models/smdb/CurrypattaModel")
const mongoose = require("mongoose");




const getOneCurrypatta = async (req, res, next) => {
  const id = req.params.ajwainId;
  try {
    const currypatta = await Currypatta.findById(id);
    res.status(200).json(currypatta);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllCurrypatta = async (req, res, next) => {
  try {
    const currypattas = await Currypatta.find({});
    res.status(200).json(currypattas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};



const addCurrypatta = async (req, res, next) => {
  const currypatta = new Currypatta({
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
    await currypatta.save();
    res.status(201).json(currypatta);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateCurrypatta = async (req, res, next) => {
  const id = req.params.ajwainId;
  mongoose.set("useFindAndModify", false);
  Currypatta.findByIdAndUpdate(
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
    function (err, currypatta) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Currypatta updated successfully",
          currypatta: currypatta,
        });
      }
    }
  );
};

const deleteCurrypatta = async (req, res, next) => {
  const id = req.params.ajwainId;
  try {
    await Currypatta.deleteOne({ _id: id });
    res.status(200).json({ message: "Currypatta deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneCurrypatta,
  getAllCurrypatta,
  addCurrypatta,
  deleteCurrypatta,
  updateCurrypatta,
};
