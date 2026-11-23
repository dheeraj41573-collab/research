const Pyaj = require("../../models/smdb/PyajModel")
const mongoose = require("mongoose");




const getOnePyaj = async (req, res, next) => {
  const id = req.params.pyajId;
  try {
    const pyaj = await Pyaj.findById(id);
    res.status(200).json(pyaj);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllPyaj = async (req, res, next) => {
  try {
    const ajwains = await Pyaj.find({});
    res.status(200).json(ajwains);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};



const addPyaj = async (req, res, next) => {
  const pyaj = new Pyaj({
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
    await pyaj.save();
    res.status(201).json(pyaj);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updatePyaj = async (req, res, next) => {
  const id = req.params.pyajId;
  mongoose.set("useFindAndModify", false);
  Pyaj.findByIdAndUpdate(
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
    function (err, pyaj) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Pyaj updated successfully",
          pyaj: pyaj,
        });
      }
    }
  );
};

const deletePyaj = async (req, res, next) => {
  const id = req.params.pyajId;
  try {
    await Pyaj.deleteOne({ _id: id });
    res.status(200).json({ message: "Pyaj deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOnePyaj,
  getAllPyaj,
  addPyaj,
  deletePyaj,
  updatePyaj,
};
