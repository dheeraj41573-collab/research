const UsneaArticulata = require("../../models/lichMDb/UsneaArticulataModel.js");
const mongoose = require("mongoose");

const addUsneaArticulata = async (req, res, next) => {
  const usneaArticulata = new UsneaArticulata({
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
    await usneaArticulata.save();
    res.status(201).json(usneaArticulata);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneUsneaArticulata = async (req, res, next) => {
  const id = req.params.usneaArticulataId;
  try {
    const usneaArticulata = await UsneaArticulata.findById(id);
    res.status(200).json(usneaArticulata);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllUsneaArticulatas = async (req, res, next) => {
  try {
    const usneaArticulatas = await UsneaArticulata.find({});
    res.status(200).json(usneaArticulatas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateUsneaArticulata = async (req, res, next) => {
  const id = req.params.usneaArticulataId;
  mongoose.set("useFindAndModify", false);
  UsneaArticulata.findByIdAndUpdate(
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
    function (err, usneaArticulata) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "UsneaArticulata updated successfully",
          usneaArticulata: usneaArticulata,
        });
      }
    }
  );
};

const deleteUsneaArticulata = async (req, res, next) => {
  const id = req.params.usneaArticulataId;
  try {
    await UsneaArticulata.deleteOne({ _id: id });
    res.status(200).json({ message: "UsneaArticulata deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneUsneaArticulata,
  getAllUsneaArticulatas,
  addUsneaArticulata,
  deleteUsneaArticulata,
  updateUsneaArticulata,
};