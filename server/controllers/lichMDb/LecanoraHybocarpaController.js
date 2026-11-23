const LecanoraHybocarpa = require("../../models/lichMDb/LecanoraHybocarpaModel.js");
const mongoose = require("mongoose");

const addLecanoraHybocarpa = async (req, res, next) => {
  const lecanoraHybocarpa = new LecanoraHybocarpa({
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
    await lecanoraHybocarpa.save();
    res.status(201).json(lecanoraHybocarpa);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneLecanoraHybocarpa = async (req, res, next) => {
  const id = req.params.lecanoraHybocarpaId;
  try {
    const lecanoraHybocarpa = await LecanoraHybocarpa.findById(id);
    res.status(200).json(lecanoraHybocarpa);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllLecanoraHybocarpas = async (req, res, next) => {
  try {
    const lecanoraHybocarpas = await LecanoraHybocarpa.find({});
    res.status(200).json(lecanoraHybocarpas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateLecanoraHybocarpa = async (req, res, next) => {
  const id = req.params.lecanoraHybocarpaId;
  mongoose.set("useFindAndModify", false);
  LecanoraHybocarpa.findByIdAndUpdate(
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
    function (err, lecanoraHybocarpa) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "LecanoraHybocarpa updated successfully",
          lecanoraHybocarpa: lecanoraHybocarpa,
        });
      }
    }
  );
};

const deleteLecanoraHybocarpa = async (req, res, next) => {
  const id = req.params.lecanoraHybocarpaId;
  try {
    await LecanoraHybocarpa.deleteOne({ _id: id });
    res.status(200).json({ message: "LecanoraHybocarpa deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneLecanoraHybocarpa,
  getAllLecanoraHybocarpas,
  addLecanoraHybocarpa,
  deleteLecanoraHybocarpa,
  updateLecanoraHybocarpa,
};