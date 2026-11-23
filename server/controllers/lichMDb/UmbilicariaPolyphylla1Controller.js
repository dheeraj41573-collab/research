const UmbilicariaPolyphylla1 = require("../../models/lichMDb/UmbilicariaPolyphylla1Model.js");
const mongoose = require("mongoose");

const addUmbilicariaPolyphylla1 = async (req, res, next) => {
  const umbilicariaPolyphylla1 = new UmbilicariaPolyphylla1({
    _id: new mongoose.Types.ObjectId(),
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
    await umbilicariaPolyphylla1.save();
    res.status(201).json(umbilicariaPolyphylla1);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneUmbilicariaPolyphylla1 = async (req, res, next) => {
  const id = req.params.umbilicariaPolyphylla1Id;
  try {
    const umbilicariaPolyphylla1 = await UmbilicariaPolyphylla1.findById(id);
    res.status(200).json(umbilicariaPolyphylla1);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllUmbilicariaPolyphyllas1 = async (req, res, next) => {
  try {
    const umbilicariaPolyphyllas1 = await UmbilicariaPolyphylla1.find({});
    res.status(200).json(umbilicariaPolyphyllas1);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateUmbilicariaPolyphylla1 = async (req, res, next) => {
  const id = req.params.umbilicariaPolyphylla1Id;
  mongoose.set("useFindAndModify", false);
  UmbilicariaPolyphylla1.findByIdAndUpdate(
    id,
    {
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
    function (err, umbilicariaPolyphylla1) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "UmbilicariaPolyphylla1 updated successfully",
          umbilicariaPolyphylla1: umbilicariaPolyphylla1,
        });
      }
    }
  );
};

const deleteUmbilicariaPolyphylla1 = async (req, res, next) => {
  const id = req.params.umbilicariaPolyphylla1Id;
  try {
    await UmbilicariaPolyphylla1.deleteOne({ _id: id });
    res.status(200).json({ message: "UmbilicariaPolyphylla1 deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneUmbilicariaPolyphylla1,
  getAllUmbilicariaPolyphyllas1,
  addUmbilicariaPolyphylla1,
  deleteUmbilicariaPolyphylla1,
  updateUmbilicariaPolyphylla1,
};