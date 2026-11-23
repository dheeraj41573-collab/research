const UsneaFlorida = require("../../models/lichMDb/UsneaFloridaModel.js");
const mongoose = require("mongoose");

const addUsneaFlorida = async (req, res, next) => {
  const usneaFlorida = new UsneaFlorida({
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
    await usneaFlorida.save();
    res.status(201).json(usneaFlorida);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneUsneaFlorida = async (req, res, next) => {
  const id = req.params.usneaFloridaId;
  try {
    const usneaFlorida = await UsneaFlorida.findById(id);
    res.status(200).json(usneaFlorida);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllUsneaFloridas = async (req, res, next) => {
  try {
    const usneaFloridas = await UsneaFlorida.find({});
    res.status(200).json(usneaFloridas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateUsneaFlorida = async (req, res, next) => {
  const id = req.params.usneaFloridaId;
  mongoose.set("useFindAndModify", false);
  UsneaFlorida.findByIdAndUpdate(
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
    function (err, usneaFlorida) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "UsneaFlorida updated successfully",
          usneaFlorida: usneaFlorida,
        });
      }
    }
  );
};

const deleteUsneaFlorida = async (req, res, next) => {
  const id = req.params.usneaFloridaId;
  try {
    await UsneaFlorida.deleteOne({ _id: id });
    res.status(200).json({ message: "UsneaFlorida deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneUsneaFlorida,
  getAllUsneaFloridas,
  addUsneaFlorida,
  deleteUsneaFlorida,
  updateUsneaFlorida,
};