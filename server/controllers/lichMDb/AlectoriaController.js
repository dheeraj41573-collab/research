const Alectoria = require("../../models/lichMDb/AlectoriaModel.js");
const mongoose = require("mongoose");

const addAlectoria = async (req, res, next) => {
  const alectoria = new Alectoria({
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
    await alectoria.save();
    res.status(201).json(alectoria);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneAlectoria = async (req, res, next) => {
  const id = req.params.alectoriaId;
  try {
    const alectoria = await Alectoria.findById(id);
    res.status(200).json(alectoria);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllAlectorias = async (req, res, next) => {
  try {
    const alectorias = await Alectoria.find({});
    res.status(200).json(alectorias);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateAlectoria = async (req, res, next) => {
  const id = req.params.alectoriaId;
  mongoose.set("useFindAndModify", false);
  Alectoria.findByIdAndUpdate(
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
    function (err, alectoria) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Alectoria updated successfully",
          alectoria: alectoria,
        });
      }
    }
  );
};

const deleteAlectoria = async (req, res, next) => {
  const id = req.params.alectoriaId;
  try {
    await Alectoria.deleteOne({ _id: id });
    res.status(200).json({ message: "Alectoria deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneAlectoria,
  getAllAlectorias,
  addAlectoria,
  deleteAlectoria,
  updateAlectoria,
};