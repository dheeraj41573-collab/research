const TrichodermaReesei = require("../../models/trichoderma/TrichodermaReeseiModel.js");
const mongoose = require("mongoose");

const getOneTrichodermaReesei = async (req, res, next) => {
  const id = req.params.trichodermareeseiId;
  try {
    const doc = await TrichodermaReesei.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTrichodermaReeseis = async (req, res, next) => {
  try {
    const docs = await TrichodermaReesei.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTrichodermaReesei = async (req, res, next) => {
  const doc = new TrichodermaReesei({
    _id: new mongoose.Types.ObjectId(),
    speciesName: req.body.speciesName,
    commonName: req.body.commonName,
    pubchemID: req.body.pubchemID,
    IUPACName: req.body.IUPACName,
    molecularWeight: req.body.molecularWeight,
    molecularFormula: req.body.molecularFormula,
    canonicalSmiles: req.body.canonicalSmiles,
    superclass: req.body.superclass,
    class: req.body.class,
    reference: req.body.reference,
  });
  try {
    await doc.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateTrichodermaReesei = async (req, res, next) => {
  const id = req.params.trichodermareeseiId;
  mongoose.set("useFindAndModify", false);
  TrichodermaReesei.findByIdAndUpdate(
    id,
    {
      speciesName: req.body.speciesName,
      commonName: req.body.commonName,
      pubchemID: req.body.pubchemID,
      IUPACName: req.body.IUPACName,
      molecularWeight: req.body.molecularWeight,
      molecularFormula: req.body.molecularFormula,
      canonicalSmiles: req.body.canonicalSmiles,
      superclass: req.body.superclass,
      class: req.body.class,
      reference: req.body.reference,
    },
    function (err, doc) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "TrichodermaReesei updated successfully",
          trichodermareesei: doc,
        });
      }
    }
  );
};

const deleteTrichodermaReesei = async (req, res, next) => {
  const id = req.params.trichodermareeseiId;
  try {
    await TrichodermaReesei.deleteOne({ _id: id });
    res.status(200).json({ message: "TrichodermaReesei deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTrichodermaReesei,
  getAllTrichodermaReeseis,
  addTrichodermaReesei,
  deleteTrichodermaReesei,
  updateTrichodermaReesei,
};
