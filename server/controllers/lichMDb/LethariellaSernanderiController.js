const LethariellaSernanderi = require("../../models/lichMDb/LethariellaSernanderiModel.js");
const mongoose = require("mongoose");

const addLethariellaSernanderi = async (req, res, next) => {
  const lethariellaSernanderi = new LethariellaSernanderi({
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
    await lethariellaSernanderi.save();
    res.status(201).json(lethariellaSernanderi);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneLethariellaSernanderi = async (req, res, next) => {
  const id = req.params.lethariellaSernanderiId;
  try {
    const lethariellaSernanderi = await LethariellaSernanderi.findById(id);
    res.status(200).json(lethariellaSernanderi);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllLethariellaSernanderis = async (req, res, next) => {
  try {
    const lethariellaSernanderis = await LethariellaSernanderi.find({});
    res.status(200).json(lethariellaSernanderis);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateLethariellaSernanderi = async (req, res, next) => {
  const id = req.params.lethariellaSernanderiId;
  mongoose.set("useFindAndModify", false);
  LethariellaSernanderi.findByIdAndUpdate(
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
    function (err, lethariellaSernanderi) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "LethariellaSernanderi updated successfully",
          lethariellaSernanderi: lethariellaSernanderi,
        });
      }
    }
  );
};

const deleteLethariellaSernanderi = async (req, res, next) => {
  const id = req.params.lethariellaSernanderiId;
  try {
    await LethariellaSernanderi.deleteOne({ _id: id });
    res.status(200).json({ message: "LethariellaSernanderi deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneLethariellaSernanderi,
  getAllLethariellaSernanderis,
  addLethariellaSernanderi,
  deleteLethariellaSernanderi,
  updateLethariellaSernanderi,
};