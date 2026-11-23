const HypogymniaEnteromorpha = require("../../models/lichMDb/HypogymniaEnteromorphaModel.js");
const mongoose = require("mongoose");

const addHypogymniaEnteromorpha = async (req, res, next) => {
  const hypogymniaEnteromorpha = new HypogymniaEnteromorpha({
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
    await hypogymniaEnteromorpha.save();
    res.status(201).json(hypogymniaEnteromorpha);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneHypogymniaEnteromorpha = async (req, res, next) => {
  const id = req.params.hypogymniaEnteromorphaId;
  try {
    const hypogymniaEnteromorpha = await HypogymniaEnteromorpha.findById(id);
    res.status(200).json(hypogymniaEnteromorpha);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllHypogymniaEnteromorphas = async (req, res, next) => {
  try {
    const hypogymniaEnteromorphas = await HypogymniaEnteromorpha.find({});
    res.status(200).json(hypogymniaEnteromorphas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateHypogymniaEnteromorpha = async (req, res, next) => {
  const id = req.params.hypogymniaEnteromorphaId;
  mongoose.set("useFindAndModify", false);
  HypogymniaEnteromorpha.findByIdAndUpdate(
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
    function (err, hypogymniaEnteromorpha) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "HypogymniaEnteromorpha updated successfully",
          hypogymniaEnteromorpha: hypogymniaEnteromorpha,
        });
      }
    }
  );
};

const deleteHypogymniaEnteromorpha = async (req, res, next) => {
  const id = req.params.hypogymniaEnteromorphaId;
  try {
    await HypogymniaEnteromorpha.deleteOne({ _id: id });
    res.status(200).json({ message: "HypogymniaEnteromorpha deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneHypogymniaEnteromorpha,
  getAllHypogymniaEnteromorphas,
  addHypogymniaEnteromorpha,
  deleteHypogymniaEnteromorpha,
  updateHypogymniaEnteromorpha,
};