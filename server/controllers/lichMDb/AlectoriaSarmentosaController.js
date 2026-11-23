const AlectoriaSarmentosa = require("../../models/lichMDb/AlectoriaSarmentosaModel.js");
const mongoose = require("mongoose");

const addAlectoriaSarmentosa = async (req, res, next) => {
  const alectoriaSarmentosa = new AlectoriaSarmentosa({
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
    await alectoriaSarmentosa.save();
    res.status(201).json(alectoriaSarmentosa);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneAlectoriaSarmentosa = async (req, res, next) => {
  const id = req.params.alectoriaSarmentosaId;
  try {
    const alectoriaSarmentosa = await AlectoriaSarmentosa.findById(id);
    res.status(200).json(alectoriaSarmentosa);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllAlectoriaSarmentosas = async (req, res, next) => {
  try {
    const alectoriaSarmentosas = await AlectoriaSarmentosa.find({});
    res.status(200).json(alectoriaSarmentosas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateAlectoriaSarmentosa = async (req, res, next) => {
  const id = req.params.alectoriaSarmentosaId;
  mongoose.set("useFindAndModify", false);
  AlectoriaSarmentosa.findByIdAndUpdate(
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
    function (err, alectoriaSarmentosa) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "AlectoriaSarmentosa updated successfully",
          alectoriaSarmentosa: alectoriaSarmentosa,
        });
      }
    }
  );
};

const deleteAlectoriaSarmentosa = async (req, res, next) => {
  const id = req.params.alectoriaSarmentosaId;
  try {
    await AlectoriaSarmentosa.deleteOne({ _id: id });
    res.status(200).json({ message: "AlectoriaSarmentosa deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneAlectoriaSarmentosa,
  getAllAlectoriaSarmentosas,
  addAlectoriaSarmentosa,
  deleteAlectoriaSarmentosa,
  updateAlectoriaSarmentosa,
};