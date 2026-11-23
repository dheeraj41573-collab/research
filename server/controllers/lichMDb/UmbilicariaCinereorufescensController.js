const UmbilicariaCinereorufescens = require("../../models/lichMDb/UmbilicariaCinereorufescensModel.js");
const mongoose = require("mongoose");

const addUmbilicariaCinereorufescens = async (req, res, next) => {
  const umbilicariaCinereorufescens = new UmbilicariaCinereorufescens({
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
    await umbilicariaCinereorufescens.save();
    res.status(201).json(umbilicariaCinereorufescens);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneUmbilicariaCinereorufescens = async (req, res, next) => {
  const id = req.params.umbilicariaCinereorufescensId;
  try {
    const umbilicariaCinereorufescens = await UmbilicariaCinereorufescens.findById(id);
    res.status(200).json(umbilicariaCinereorufescens);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllUmbilicariaCinereorufescenss = async (req, res, next) => {
  try {
    const umbilicariaCinereorufescenss = await UmbilicariaCinereorufescens.find({});
    res.status(200).json(umbilicariaCinereorufescenss);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateUmbilicariaCinereorufescens = async (req, res, next) => {
  const id = req.params.umbilicariaCinereorufescensId;
  mongoose.set("useFindAndModify", false);
  UmbilicariaCinereorufescens.findByIdAndUpdate(
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
    function (err, umbilicariaCinereorufescens) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "UmbilicariaCinereorufescens updated successfully",
          umbilicariaCinereorufescens: umbilicariaCinereorufescens,
        });
      }
    }
  );
};

const deleteUmbilicariaCinereorufescens = async (req, res, next) => {
  const id = req.params.umbilicariaCinereorufescensId;
  try {
    await UmbilicariaCinereorufescens.deleteOne({ _id: id });
    res.status(200).json({ message: "UmbilicariaCinereorufescens deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneUmbilicariaCinereorufescens,
  getAllUmbilicariaCinereorufescenss,
  addUmbilicariaCinereorufescens,
  deleteUmbilicariaCinereorufescens,
  updateUmbilicariaCinereorufescens,
};