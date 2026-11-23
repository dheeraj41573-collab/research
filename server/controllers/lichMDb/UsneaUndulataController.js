const UsneaUndulata = require("../../models/lichMDb/UsneaUndulataModel.js");
const mongoose = require("mongoose");

const addUsneaUndulata = async (req, res, next) => {
  const usneaUndulata = new UsneaUndulata({
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
    await usneaUndulata.save();
    res.status(201).json(usneaUndulata);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneUsneaUndulata = async (req, res, next) => {
  const id = req.params.usneaUndulataId;
  try {
    const usneaUndulata = await UsneaUndulata.findById(id);
    res.status(200).json(usneaUndulata);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllUsneaUndulatas = async (req, res, next) => {
  try {
    const usneaUndulatas = await UsneaUndulata.find({});
    res.status(200).json(usneaUndulatas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateUsneaUndulata = async (req, res, next) => {
  const id = req.params.usneaUndulataId;
  mongoose.set("useFindAndModify", false);
  UsneaUndulata.findByIdAndUpdate(
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
    function (err, usneaUndulata) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "UsneaUndulata updated successfully",
          usneaUndulata: usneaUndulata,
        });
      }
    }
  );
};

const deleteUsneaUndulata = async (req, res, next) => {
  const id = req.params.usneaUndulataId;
  try {
    await UsneaUndulata.deleteOne({ _id: id });
    res.status(200).json({ message: "UsneaUndulata deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneUsneaUndulata,
  getAllUsneaUndulatas,
  addUsneaUndulata,
  deleteUsneaUndulata,
  updateUsneaUndulata,
};