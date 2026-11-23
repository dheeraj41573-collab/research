const TrichodermaAlbum = require("../../models/trichoderma/TrichodermaAlbumModel.js");
const mongoose = require("mongoose");

const getOneTrichodermaAlbum = async (req, res, next) => {
  const id = req.params.trichodermaAlbumId;
  try {
    const doc = await TrichodermaAlbum.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTrichodermaAlbums = async (req, res, next) => {
  try {
    const docs = await TrichodermaAlbum.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTrichodermaAlbum = async (req, res, next) => {
  const doc = new TrichodermaAlbum({
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

const updateTrichodermaAlbum = async (req, res, next) => {
  const id = req.params.trichodermaAlbumId;
  mongoose.set("useFindAndModify", false);
  TrichodermaAlbum.findByIdAndUpdate(
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
          message: "TrichodermaAlbum updated successfully",
          trichodermaAlbum: doc,
        });
      }
    }
  );
};

const deleteTrichodermaAlbum = async (req, res, next) => {
  const id = req.params.trichodermaAlbumId;
  try {
    await TrichodermaAlbum.deleteOne({ _id: id });
    res.status(200).json({ message: "TrichodermaAlbum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTrichodermaAlbum,
  getAllTrichodermaAlbums,
  addTrichodermaAlbum,
  deleteTrichodermaAlbum,
  updateTrichodermaAlbum,
};
