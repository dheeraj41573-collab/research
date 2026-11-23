const XanthoparmeliaCamtschadalis = require("../../models/lichMDb/XanthoparmeliaCamtschadalisModel.js");
const mongoose = require("mongoose");

const addXanthoparmeliaCamtschadalis = async (req, res, next) => {
  const xanthoparmeliaCamtschadalis = new XanthoparmeliaCamtschadalis({
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
    await xanthoparmeliaCamtschadalis.save();
    res.status(201).json(xanthoparmeliaCamtschadalis);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneXanthoparmeliaCamtschadalis = async (req, res, next) => {
  const id = req.params.xanthoparmeliaCamtschadalisId;
  try {
    const xanthoparmeliaCamtschadalis = await XanthoparmeliaCamtschadalis.findById(id);
    res.status(200).json(xanthoparmeliaCamtschadalis);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllXanthoparmeliaCamtschadaliss = async (req, res, next) => {
  try {
    const xanthoparmeliaCamtschadaliss = await XanthoparmeliaCamtschadalis.find({});
    res.status(200).json(xanthoparmeliaCamtschadaliss);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateXanthoparmeliaCamtschadalis = async (req, res, next) => {
  const id = req.params.xanthoparmeliaCamtschadalisId;
  mongoose.set("useFindAndModify", false);
  XanthoparmeliaCamtschadalis.findByIdAndUpdate(
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
    function (err, xanthoparmeliaCamtschadalis) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "XanthoparmeliaCamtschadalis updated successfully",
          xanthoparmeliaCamtschadalis: xanthoparmeliaCamtschadalis,
        });
      }
    }
  );
};

const deleteXanthoparmeliaCamtschadalis = async (req, res, next) => {
  const id = req.params.xanthoparmeliaCamtschadalisId;
  try {
    await XanthoparmeliaCamtschadalis.deleteOne({ _id: id });
    res.status(200).json({ message: "XanthoparmeliaCamtschadalis deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneXanthoparmeliaCamtschadalis,
  getAllXanthoparmeliaCamtschadaliss,
  addXanthoparmeliaCamtschadalis,
  deleteXanthoparmeliaCamtschadalis,
  updateXanthoparmeliaCamtschadalis,
};