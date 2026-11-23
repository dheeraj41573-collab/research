const PyrenulaPseudobufonia = require("../../models/lichMDb/PyrenulaPseudobufoniaModel.js");
const mongoose = require("mongoose");

const addPyrenulaPseudobufonia = async (req, res, next) => {
  const pyrenulaPseudobufonia = new PyrenulaPseudobufonia({
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
    await pyrenulaPseudobufonia.save();
    res.status(201).json(pyrenulaPseudobufonia);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOnePyrenulaPseudobufonia = async (req, res, next) => {
  const id = req.params.pyrenulaPseudobufoniaId;
  try {
    const pyrenulaPseudobufonia = await PyrenulaPseudobufonia.findById(id);
    res.status(200).json(pyrenulaPseudobufonia);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllPyrenulaPseudobufonias = async (req, res, next) => {
  try {
    const pyrenulaPseudobufonias = await PyrenulaPseudobufonia.find({});
    res.status(200).json(pyrenulaPseudobufonias);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updatePyrenulaPseudobufonia = async (req, res, next) => {
  const id = req.params.pyrenulaPseudobufoniaId;
  mongoose.set("useFindAndModify", false);
  PyrenulaPseudobufonia.findByIdAndUpdate(
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
    function (err, pyrenulaPseudobufonia) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "PyrenulaPseudobufonia updated successfully",
          pyrenulaPseudobufonia: pyrenulaPseudobufonia,
        });
      }
    }
  );
};

const deletePyrenulaPseudobufonia = async (req, res, next) => {
  const id = req.params.pyrenulaPseudobufoniaId;
  try {
    await PyrenulaPseudobufonia.deleteOne({ _id: id });
    res.status(200).json({ message: "PyrenulaPseudobufonia deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOnePyrenulaPseudobufonia,
  getAllPyrenulaPseudobufonias,
  addPyrenulaPseudobufonia,
  deletePyrenulaPseudobufonia,
  updatePyrenulaPseudobufonia,
};