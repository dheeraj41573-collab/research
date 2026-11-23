const CladoniaConvoluta = require("../../models/lichMDb/CladoniaConvolutaModel.js");
const mongoose = require("mongoose");

const addCladoniaConvoluta = async (req, res, next) => {
  const cladoniaConvoluta = new CladoniaConvoluta({
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
    await cladoniaConvoluta.save();
    res.status(201).json(cladoniaConvoluta);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneCladoniaConvoluta = async (req, res, next) => {
  const id = req.params.cladoniaConvolutaId;
  try {
    const cladoniaConvoluta = await CladoniaConvoluta.findById(id);
    res.status(200).json(cladoniaConvoluta);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllCladoniaConvolutas = async (req, res, next) => {
  try {
    const cladoniaConvolutas = await CladoniaConvoluta.find({});
    res.status(200).json(cladoniaConvolutas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateCladoniaConvoluta = async (req, res, next) => {
  const id = req.params.cladoniaConvolutaId;
  mongoose.set("useFindAndModify", false);
  CladoniaConvoluta.findByIdAndUpdate(
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
    function (err, cladoniaConvoluta) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "CladoniaConvoluta updated successfully",
          cladoniaConvoluta: cladoniaConvoluta,
        });
      }
    }
  );
};

const deleteCladoniaConvoluta = async (req, res, next) => {
  const id = req.params.cladoniaConvolutaId;
  try {
    await CladoniaConvoluta.deleteOne({ _id: id });
    res.status(200).json({ message: "CladoniaConvoluta deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneCladoniaConvoluta,
  getAllCladoniaConvolutas,
  addCladoniaConvoluta,
  deleteCladoniaConvoluta,
  updateCladoniaConvoluta,
};