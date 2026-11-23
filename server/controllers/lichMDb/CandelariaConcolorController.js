const CandelariaConcolor = require("../../models/lichMDb/CandelariaConcolorModel.js");
const mongoose = require("mongoose");

const addCandelariaConcolor = async (req, res, next) => {
  const candelariaConcolor = new CandelariaConcolor({
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
    await candelariaConcolor.save();
    res.status(201).json(candelariaConcolor);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneCandelariaConcolor = async (req, res, next) => {
  const id = req.params.candelariaConcolorId;
  try {
    const candelariaConcolor = await CandelariaConcolor.findById(id);
    res.status(200).json(candelariaConcolor);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllCandelariaConcolors = async (req, res, next) => {
  try {
    const candelariaConcolors = await CandelariaConcolor.find({});
    res.status(200).json(candelariaConcolors);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateCandelariaConcolor = async (req, res, next) => {
  const id = req.params.candelariaConcolorId;
  mongoose.set("useFindAndModify", false);
  CandelariaConcolor.findByIdAndUpdate(
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
    function (err, candelariaConcolor) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "CandelariaConcolor updated successfully",
          candelariaConcolor: candelariaConcolor,
        });
      }
    }
  );
};

const deleteCandelariaConcolor = async (req, res, next) => {
  const id = req.params.candelariaConcolorId;
  try {
    await CandelariaConcolor.deleteOne({ _id: id });
    res.status(200).json({ message: "CandelariaConcolor deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneCandelariaConcolor,
  getAllCandelariaConcolors,
  addCandelariaConcolor,
  deleteCandelariaConcolor,
  updateCandelariaConcolor,
};