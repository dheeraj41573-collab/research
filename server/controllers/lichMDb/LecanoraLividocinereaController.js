const LecanoraLividocinerea = require("../../models/lichMDb/LecanoraLividocinereaModel.js");
const mongoose = require("mongoose");

const addLecanoraLividocinerea = async (req, res, next) => {
  const lecanoraLividocinerea = new LecanoraLividocinerea({
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
    await lecanoraLividocinerea.save();
    res.status(201).json(lecanoraLividocinerea);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneLecanoraLividocinerea = async (req, res, next) => {
  const id = req.params.lecanoraLividocinereaId;
  try {
    const lecanoraLividocinerea = await LecanoraLividocinerea.findById(id);
    res.status(200).json(lecanoraLividocinerea);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllLecanoraLividocinereas = async (req, res, next) => {
  try {
    const lecanoraLividocinereas = await LecanoraLividocinerea.find({});
    res.status(200).json(lecanoraLividocinereas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateLecanoraLividocinerea = async (req, res, next) => {
  const id = req.params.lecanoraLividocinereaId;
  mongoose.set("useFindAndModify", false);
  LecanoraLividocinerea.findByIdAndUpdate(
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
    function (err, lecanoraLividocinerea) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "LecanoraLividocinerea updated successfully",
          lecanoraLividocinerea: lecanoraLividocinerea,
        });
      }
    }
  );
};

const deleteLecanoraLividocinerea = async (req, res, next) => {
  const id = req.params.lecanoraLividocinereaId;
  try {
    await LecanoraLividocinerea.deleteOne({ _id: id });
    res.status(200).json({ message: "LecanoraLividocinerea deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneLecanoraLividocinerea,
  getAllLecanoraLividocinereas,
  addLecanoraLividocinerea,
  deleteLecanoraLividocinerea,
  updateLecanoraLividocinerea,
};