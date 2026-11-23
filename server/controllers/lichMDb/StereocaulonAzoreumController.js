const StereocaulonAzoreum = require("../../models/lichMDb/StereocaulonAzoreumModel.js");
const mongoose = require("mongoose");

const addStereocaulonAzoreum = async (req, res, next) => {
  const stereocaulonAzoreum = new StereocaulonAzoreum({
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
    await stereocaulonAzoreum.save();
    res.status(201).json(stereocaulonAzoreum);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneStereocaulonAzoreum = async (req, res, next) => {
  const id = req.params.stereocaulonAzoreumId;
  try {
    const stereocaulonAzoreum = await StereocaulonAzoreum.findById(id);
    res.status(200).json(stereocaulonAzoreum);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllStereocaulonAzoreums = async (req, res, next) => {
  try {
    const stereocaulonAzoreums = await StereocaulonAzoreum.find({});
    res.status(200).json(stereocaulonAzoreums);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateStereocaulonAzoreum = async (req, res, next) => {
  const id = req.params.stereocaulonAzoreumId;
  mongoose.set("useFindAndModify", false);
  StereocaulonAzoreum.findByIdAndUpdate(
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
    function (err, stereocaulonAzoreum) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "StereocaulonAzoreum updated successfully",
          stereocaulonAzoreum: stereocaulonAzoreum,
        });
      }
    }
  );
};

const deleteStereocaulonAzoreum = async (req, res, next) => {
  const id = req.params.stereocaulonAzoreumId;
  try {
    await StereocaulonAzoreum.deleteOne({ _id: id });
    res.status(200).json({ message: "StereocaulonAzoreum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneStereocaulonAzoreum,
  getAllStereocaulonAzoreums,
  addStereocaulonAzoreum,
  deleteStereocaulonAzoreum,
  updateStereocaulonAzoreum,
};