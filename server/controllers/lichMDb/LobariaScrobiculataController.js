const LobariaScrobiculata = require("../../models/lichMDb/LobariaScrobiculataModel.js");
const mongoose = require("mongoose");

const addLobariaScrobiculata = async (req, res, next) => {
  const lobariaScrobiculata = new LobariaScrobiculata({
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
    await lobariaScrobiculata.save();
    res.status(201).json(lobariaScrobiculata);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneLobariaScrobiculata = async (req, res, next) => {
  const id = req.params.lobariaScrobiculataId;
  try {
    const lobariaScrobiculata = await LobariaScrobiculata.findById(id);
    res.status(200).json(lobariaScrobiculata);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllLobariaScrobiculatas = async (req, res, next) => {
  try {
    const lobariaScrobiculatas = await LobariaScrobiculata.find({});
    res.status(200).json(lobariaScrobiculatas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateLobariaScrobiculata = async (req, res, next) => {
  const id = req.params.lobariaScrobiculataId;
  mongoose.set("useFindAndModify", false);
  LobariaScrobiculata.findByIdAndUpdate(
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
    function (err, lobariaScrobiculata) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "LobariaScrobiculata updated successfully",
          lobariaScrobiculata: lobariaScrobiculata,
        });
      }
    }
  );
};

const deleteLobariaScrobiculata = async (req, res, next) => {
  const id = req.params.lobariaScrobiculataId;
  try {
    await LobariaScrobiculata.deleteOne({ _id: id });
    res.status(200).json({ message: "LobariaScrobiculata deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneLobariaScrobiculata,
  getAllLobariaScrobiculatas,
  addLobariaScrobiculata,
  deleteLobariaScrobiculata,
  updateLobariaScrobiculata,
};