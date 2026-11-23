const DolichousneaLongissima = require("../../models/lichMDb/DolichousneaLongissimaModel.js");
const mongoose = require("mongoose");

const addDolichousneaLongissima = async (req, res, next) => {
  const dolichousneaLongissima = new DolichousneaLongissima({
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
    await dolichousneaLongissima.save();
    res.status(201).json(dolichousneaLongissima);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneDolichousneaLongissima = async (req, res, next) => {
  const id = req.params.dolichousneaLongissimaId;
  try {
    const dolichousneaLongissima = await DolichousneaLongissima.findById(id);
    res.status(200).json(dolichousneaLongissima);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllDolichousneaLongissimas = async (req, res, next) => {
  try {
    const dolichousneaLongissimas = await DolichousneaLongissima.find({});
    res.status(200).json(dolichousneaLongissimas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateDolichousneaLongissima = async (req, res, next) => {
  const id = req.params.dolichousneaLongissimaId;
  mongoose.set("useFindAndModify", false);
  DolichousneaLongissima.findByIdAndUpdate(
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
    function (err, dolichousneaLongissima) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "DolichousneaLongissima updated successfully",
          dolichousneaLongissima: dolichousneaLongissima,
        });
      }
    }
  );
};

const deleteDolichousneaLongissima = async (req, res, next) => {
  const id = req.params.dolichousneaLongissimaId;
  try {
    await DolichousneaLongissima.deleteOne({ _id: id });
    res.status(200).json({ message: "DolichousneaLongissima deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneDolichousneaLongissima,
  getAllDolichousneaLongissimas,
  addDolichousneaLongissima,
  deleteDolichousneaLongissima,
  updateDolichousneaLongissima,
};