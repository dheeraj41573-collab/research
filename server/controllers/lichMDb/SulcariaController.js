const Sulcaria = require("../../models/lichMDb/SulcariaModel.js");
const mongoose = require("mongoose");

const addSulcaria = async (req, res, next) => {
  const sulcaria = new Sulcaria({
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
    await sulcaria.save();
    res.status(201).json(sulcaria);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneSulcaria = async (req, res, next) => {
  const id = req.params.sulcariaId;
  try {
    const sulcaria = await Sulcaria.findById(id);
    res.status(200).json(sulcaria);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllSulcarias = async (req, res, next) => {
  try {
    const sulcarias = await Sulcaria.find({});
    res.status(200).json(sulcarias);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateSulcaria = async (req, res, next) => {
  const id = req.params.sulcariaId;
  mongoose.set("useFindAndModify", false);
  Sulcaria.findByIdAndUpdate(
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
    function (err, sulcaria) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Sulcaria updated successfully",
          sulcaria: sulcaria,
        });
      }
    }
  );
};

const deleteSulcaria = async (req, res, next) => {
  const id = req.params.sulcariaId;
  try {
    await Sulcaria.deleteOne({ _id: id });
    res.status(200).json({ message: "Sulcaria deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneSulcaria,
  getAllSulcarias,
  addSulcaria,
  deleteSulcaria,
  updateSulcaria,
};