const TeloschistesFlavicans = require("../../models/lichMDb/TeloschistesFlavicansModel.js");
const mongoose = require("mongoose");

const addTeloschistesFlavicans = async (req, res, next) => {
  const teloschistesFlavicans = new TeloschistesFlavicans({
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
    await teloschistesFlavicans.save();
    res.status(201).json(teloschistesFlavicans);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneTeloschistesFlavicans = async (req, res, next) => {
  const id = req.params.teloschistesFlavicansId;
  try {
    const teloschistesFlavicans = await TeloschistesFlavicans.findById(id);
    res.status(200).json(teloschistesFlavicans);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTeloschistesFlavicanss = async (req, res, next) => {
  try {
    const teloschistesFlavicanss = await TeloschistesFlavicans.find({});
    res.status(200).json(teloschistesFlavicanss);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateTeloschistesFlavicans = async (req, res, next) => {
  const id = req.params.teloschistesFlavicansId;
  mongoose.set("useFindAndModify", false);
  TeloschistesFlavicans.findByIdAndUpdate(
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
    function (err, teloschistesFlavicans) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "TeloschistesFlavicans updated successfully",
          teloschistesFlavicans: teloschistesFlavicans,
        });
      }
    }
  );
};

const deleteTeloschistesFlavicans = async (req, res, next) => {
  const id = req.params.teloschistesFlavicansId;
  try {
    await TeloschistesFlavicans.deleteOne({ _id: id });
    res.status(200).json({ message: "TeloschistesFlavicans deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTeloschistesFlavicans,
  getAllTeloschistesFlavicanss,
  addTeloschistesFlavicans,
  deleteTeloschistesFlavicans,
  updateTeloschistesFlavicans,
};