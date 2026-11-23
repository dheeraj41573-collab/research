const Pudina = require("../../models/smdb/PudinaModel")
const mongoose = require("mongoose");




const getOnePudina = async (req, res, next) => {
  const id = req.params.pudinaId;
  try {
    const pudina = await Pudina.findById(id);
    res.status(200).json(pudina);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllPudina = async (req, res, next) => {
  try {
    const pudinas = await Pudina.find({});
    res.status(200).json(pudinas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};



const addPudina = async (req, res, next) => {
  const pudina = new Pudina({
    _id: new mongoose.Types.ObjectId(),
    scientificName: req.body.scientificName,
    commonName: req.body.commonName,
    cid: req.body.cid,
    compoundName: req.body.compoundName,
    IUPACName: req.body.IUPACName,
    molecularWeight: req.body.molecularWeight,
    molecularFormula: req.body.molecularFormula,
    canonicalSmiles: req.body.canonicalSmiles,
    superClass: req.body.superClass,
    class: req.body.class,
  });
  try {
    await pudina.save();
    res.status(201).json(pudina);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updatePudina = async (req, res, next) => {
  const id = req.params.pudinaId;
  mongoose.set("useFindAndModify", false);
  Pudina.findByIdAndUpdate(
    id,
    {
      scientificName: req.body.scientificName,
      commonName: req.body.commonName,
      cid: req.body.cid,
      compoundName: req.body.compoundName,
      IUPACName: req.body.IUPACName,
      molecularWeight: req.body.molecularWeight,
      molecularFormula: req.body.molecularFormula,
      canonicalSmiles: req.body.canonicalSmiles,
      superClass: req.body.superClass,
      class: req.body.class,
    },
    function (err, pudina) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Pudina updated successfully",
          pudina: pudina,
        });
      }
    }
  );
};

const deletePudina = async (req, res, next) => {
  const id = req.params.pudinaId;
  try {
    await Pudina.deleteOne({ _id: id });
    res.status(200).json({ message: "Pudina deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOnePudina,
  getAllPudina,
  addPudina,
  deletePudina,
  updatePudina,
};
