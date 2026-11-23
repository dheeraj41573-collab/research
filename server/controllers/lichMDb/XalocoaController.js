const Xalocoa = require("../../models/lichMDb/XalocoaModel.js");
const mongoose = require("mongoose");

const addXalocoa = async (req, res, next) => {
  const xalocoa = new Xalocoa({
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
    await xalocoa.save();
    res.status(201).json(xalocoa);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneXalocoa = async (req, res, next) => {
  const id = req.params.xalocoaId;
  try {
    const xalocoa = await Xalocoa.findById(id);
    res.status(200).json(xalocoa);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllXalocoas = async (req, res, next) => {
  try {
    const xalocoas = await Xalocoa.find({});
    res.status(200).json(xalocoas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateXalocoa = async (req, res, next) => {
  const id = req.params.xalocoaId;
  mongoose.set("useFindAndModify", false);
  Xalocoa.findByIdAndUpdate(
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
    function (err, xalocoa) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Xalocoa updated successfully",
          xalocoa: xalocoa,
        });
      }
    }
  );
};

const deleteXalocoa = async (req, res, next) => {
  const id = req.params.xalocoaId;
  try {
    await Xalocoa.deleteOne({ _id: id });
    res.status(200).json({ message: "Xalocoa deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneXalocoa,
  getAllXalocoas,
  addXalocoa,
  deleteXalocoa,
  updateXalocoa,
};