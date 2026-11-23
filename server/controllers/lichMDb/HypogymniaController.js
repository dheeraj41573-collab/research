const Hypogymnia = require("../../models/lichMDb/HypogymniaModel.js");
const mongoose = require("mongoose");

const addHypogymnia = async (req, res, next) => {
  const hypogymnia = new Hypogymnia({
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
    await hypogymnia.save();
    res.status(201).json(hypogymnia);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneHypogymnia = async (req, res, next) => {
  const id = req.params.hypogymniaId;
  try {
    const hypogymnia = await Hypogymnia.findById(id);
    res.status(200).json(hypogymnia);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllHypogymnias = async (req, res, next) => {
  try {
    const hypogymnias = await Hypogymnia.find({});
    res.status(200).json(hypogymnias);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateHypogymnia = async (req, res, next) => {
  const id = req.params.hypogymniaId;
  mongoose.set("useFindAndModify", false);
  Hypogymnia.findByIdAndUpdate(
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
    function (err, hypogymnia) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Hypogymnia updated successfully",
          hypogymnia: hypogymnia,
        });
      }
    }
  );
};

const deleteHypogymnia = async (req, res, next) => {
  const id = req.params.hypogymniaId;
  try {
    await Hypogymnia.deleteOne({ _id: id });
    res.status(200).json({ message: "Hypogymnia deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneHypogymnia,
  getAllHypogymnias,
  addHypogymnia,
  deleteHypogymnia,
  updateHypogymnia,
};