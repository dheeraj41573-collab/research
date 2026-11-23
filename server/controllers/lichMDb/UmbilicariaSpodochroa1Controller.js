const UmbilicariaSpodochroa1 = require("../../models/lichMDb/UmbilicariaSpodochroa1Model.js");
const mongoose = require("mongoose");

const addUmbilicariaSpodochroa1 = async (req, res, next) => {
  const umbilicariaSpodochroa1 = new UmbilicariaSpodochroa1({
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
    await umbilicariaSpodochroa1.save();
    res.status(201).json(umbilicariaSpodochroa1);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneUmbilicariaSpodochroa1 = async (req, res, next) => {
  const id = req.params.umbilicariaSpodochroa1Id;
  try {
    const umbilicariaSpodochroa1 = await UmbilicariaSpodochroa1.findById(id);
    res.status(200).json(umbilicariaSpodochroa1);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllUmbilicariaSpodochroas1 = async (req, res, next) => {
  try {
    const umbilicariaSpodochroas1 = await UmbilicariaSpodochroa1.find({});
    res.status(200).json(umbilicariaSpodochroas1);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateUmbilicariaSpodochroa1 = async (req, res, next) => {
  const id = req.params.umbilicariaSpodochroa1Id;
  mongoose.set("useFindAndModify", false);
  UmbilicariaSpodochroa1.findByIdAndUpdate(
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
    function (err, umbilicariaSpodochroa1) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "UmbilicariaSpodochroa1 updated successfully",
          umbilicariaSpodochroa1: umbilicariaSpodochroa1,
        });
      }
    }
  );
};

const deleteUmbilicariaSpodochroa1 = async (req, res, next) => {
  const id = req.params.umbilicariaSpodochroaId;
  try {
    await UmbilicariaSpodochroa1.deleteOne({ _id: id });
    res.status(200).json({ message: "UmbilicariaSpodochroa1 deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneUmbilicariaSpodochroa1,
  getAllUmbilicariaSpodochroas1,
  addUmbilicariaSpodochroa1,
  deleteUmbilicariaSpodochroa1,
  updateUmbilicariaSpodochroa1,
};