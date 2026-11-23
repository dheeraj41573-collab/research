const Evernia = require("../../models/lichMDb/EverniaModel.js");
const mongoose = require("mongoose");

const addEvernia = async (req, res, next) => {
  const evernia = new Evernia({
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
    await evernia.save();
    res.status(201).json(evernia);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneEvernia = async (req, res, next) => {
  const id = req.params.everniaId;
  try {
    const evernia = await Evernia.findById(id);
    res.status(200).json(evernia);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllEvernias = async (req, res, next) => {
  try {
    const evernias = await Evernia.find({});
    res.status(200).json(evernias);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateEvernia = async (req, res, next) => {
  const id = req.params.everniaId;
  mongoose.set("useFindAndModify", false);
  Evernia.findByIdAndUpdate(
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
    function (err, evernia) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Evernia updated successfully",
          evernia: evernia,
        });
      }
    }
  );
};

const deleteEvernia = async (req, res, next) => {
  const id = req.params.everniaId;
  try {
    await Evernia.deleteOne({ _id: id });
    res.status(200).json({ message: "Evernia deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneEvernia,
  getAllEvernias,
  addEvernia,
  deleteEvernia,
  updateEvernia,
};