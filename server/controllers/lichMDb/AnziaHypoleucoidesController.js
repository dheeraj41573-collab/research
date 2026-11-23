const AnziaHypoleucoides = require("../../models/lichMDb/AnziaHypoleucoidesModel.js");
const mongoose = require("mongoose");

const addAnziaHypoleucoides = async (req, res, next) => {
  const anziaHypoleucoides = new AnziaHypoleucoides({
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
    await anziaHypoleucoides.save();
    res.status(201).json(anziaHypoleucoides);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneAnziaHypoleucoides = async (req, res, next) => {
  const id = req.params.anziaHypoleucoidesId;
  try {
    const anziaHypoleucoides = await AnziaHypoleucoides.findById(id);
    res.status(200).json(anziaHypoleucoides);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllAnziaHypoleucoidess = async (req, res, next) => {
  try {
    const anziaHypoleucoidess = await AnziaHypoleucoides.find({});
    res.status(200).json(anziaHypoleucoidess);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateAnziaHypoleucoides = async (req, res, next) => {
  const id = req.params.anziaHypoleucoidesId;
  mongoose.set("useFindAndModify", false);
  AnziaHypoleucoides.findByIdAndUpdate(
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
    function (err, anziaHypoleucoides) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "AnziaHypoleucoides updated successfully",
          anziaHypoleucoides: anziaHypoleucoides,
        });
      }
    }
  );
};

const deleteAnziaHypoleucoides = async (req, res, next) => {
  const id = req.params.anziaHypoleucoidesId;
  try {
    await AnziaHypoleucoides.deleteOne({ _id: id });
    res.status(200).json({ message: "AnziaHypoleucoides deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneAnziaHypoleucoides,
  getAllAnziaHypoleucoidess,
  addAnziaHypoleucoides,
  deleteAnziaHypoleucoides,
  updateAnziaHypoleucoides,
};