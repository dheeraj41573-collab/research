const Adrak = require("../../models/smdb/AdrakModel")
const mongoose = require("mongoose");




const getOneAdrak = async (req, res, next) => {
  const id = req.params.adrakId;
  try {
    const adrak = await Adrak.findById(id);
    res.status(200).json(adrak);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllAdrak = async (req, res, next) => {
  try {
    const adraks = await Adrak.find({});
    res.status(200).json(adraks);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};



const addAdrak = async (req, res, next) => {
  const adrak = new Adrak({
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
    await adrak.save();
    res.status(201).json(adrak);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateAdrak = async (req, res, next) => {
  const id = req.params.adrakId;
  mongoose.set("useFindAndModify", false);
  Adrak.findByIdAndUpdate(
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
    function (err, adrak) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Adrak updated successfully",
          adrak: adrak,
        });
      }
    }
  );
};

const deleteAdrak = async (req, res, next) => {
  const id = req.params.adrakId;
  try {
    await Adrak.deleteOne({ _id: id });
    res.status(200).json({ message: "Adrak deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneAdrak,
  getAllAdrak,
  addAdrak,
  deleteAdrak,
  updateAdrak,
};
