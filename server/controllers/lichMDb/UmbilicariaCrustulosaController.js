const UmbilicariaCrustulosa = require("../../models/lichMDb/UmbilicariaCrustulosaModel.js");
const mongoose = require("mongoose");

const addUmbilicariaCrustulosa = async (req, res, next) => {
  const umbilicariaCrustulosa = new UmbilicariaCrustulosa({
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
    await umbilicariaCrustulosa.save();
    res.status(201).json(umbilicariaCrustulosa);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneUmbilicariaCrustulosa = async (req, res, next) => {
  const id = req.params.umbilicariaCrustulosaId;
  try {
    const umbilicariaCrustulosa = await UmbilicariaCrustulosa.findById(id);
    res.status(200).json(umbilicariaCrustulosa);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllUmbilicariaCrustulosas = async (req, res, next) => {
  try {
    const umbilicariaCrustulosas = await UmbilicariaCrustulosa.find({});
    res.status(200).json(umbilicariaCrustulosas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateUmbilicariaCrustulosa = async (req, res, next) => {
  const id = req.params.umbilicariaCrustulosaId;
  mongoose.set("useFindAndModify", false);
  UmbilicariaCrustulosa.findByIdAndUpdate(
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
    function (err, umbilicariaCrustulosa) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "UmbilicariaCrustulosa updated successfully",
          umbilicariaCrustulosa: umbilicariaCrustulosa,
        });
      }
    }
  );
};

const deleteUmbilicariaCrustulosa = async (req, res, next) => {
  const id = req.params.umbilicariaCrustulosaId;
  try {
    await UmbilicariaCrustulosa.deleteOne({ _id: id });
    res.status(200).json({ message: "UmbilicariaCrustulosa deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneUmbilicariaCrustulosa,
  getAllUmbilicariaCrustulosas,
  addUmbilicariaCrustulosa,
  deleteUmbilicariaCrustulosa,
  updateUmbilicariaCrustulosa,
};