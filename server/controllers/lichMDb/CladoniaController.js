const Cladonia = require("../../models/lichMDb/CladoniaModel.js");
const mongoose = require("mongoose");

const addCladonia = async (req, res, next) => {
  const cladonia = new Cladonia({
    _id: new mongoose.Types.ObjectId(),
    sn: req.body.sn,
    lichen: req.body.lichen,
    cid: req.body.cid,
    commonName: req.body.commonName,
    IUPACName: req.body.IUPACName,
    molecularWeight: req.body.molecularWeight,
    molecularFormula: req.body.molecularFormula,
    canonicalSmiles: req.body.canonicalSmiles,
    references: req.body.references,
    superClass: req.body.superClass,
    class: req.body.class,
  });
  try {
    await cladonia.save();
    res.status(201).json(cladonia);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneCladonia = async (req, res, next) => {
  const id = req.params.cladoniaId;
  try {
    const cladonia = await Cladonia.findById(id);
    res.status(200).json(cladonia);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllCladonias = async (req, res, next) => {
  try {
    const cladonias = await Cladonia.find({});
    res.status(200).json(cladonias);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateCladonia = async (req, res, next) => {
  const id = req.params.cladoniaId;
  mongoose.set("useFindAndModify", false);
  Cladonia.findByIdAndUpdate(
    id,
    {
      sn: req.body.sn,
      lichen: req.body.lichen,
      cid: req.body.cid,
      commonName: req.body.commonName,
      IUPACName: req.body.IUPACName,
      molecularWeight: req.body.molecularWeight,
      molecularFormula: req.body.molecularFormula,
      canonicalSmiles: req.body.canonicalSmiles,
      references: req.body.references,
      superClass: req.body.superClass,
      class: req.body.class,
    },
    function (err, cladonia) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Cladonia updated successfully",
          cladonia: cladonia,
        });
      }
    }
  );
};

const deleteCladonia = async (req, res, next) => {
  const id = req.params.cladoniaId;
  try {
    await Cladonia.deleteOne({ _id: id });
    res.status(200).json({ message: "Cladonia deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneCladonia,
  getAllCladonias,
  addCladonia,
  deleteCladonia,
  updateCladonia,
};