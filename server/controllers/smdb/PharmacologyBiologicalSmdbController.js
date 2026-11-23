const PharmacologyBiologicalSmdb = require("../../models/smdb/PharmacologyBiologicalSMDBModel.js");
const mongoose = require("mongoose");

const getOnePharmacologySmdb = async (req, res, next) => {
  const id = req.params.pharmacologyId;
  try {
    const pharmacology = await PharmacologyBiologicalSmdb.findById(id);
    res.status(200).json(pharmacology);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllPharmacologysSmdb = async (req, res, next) => {
  try {
    const pharmacologys = await PharmacologyBiologicalSmdb.find({});
    res.status(200).json(pharmacologys);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const addPharmacologySmdb = async (req, res, next) => {
  const pharmacology = new PharmacologyBiologicalSmdb({
    _id: new mongoose.Types.ObjectId(),
    sn: req.body.sn,
    compoundName: req.body.compoundName,
    cid: req.body.cid,
    pharmacologyActivity:req.body.pharmacologyActivity
  });

  try {
    await pharmacology.save();
    res.status(201).json(pharmacology);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deletePharmacologySmdb = async (req, res, next) => {
  const id = req.params.pharmacologyId;
  try {
    await PharmacologyBiologicalSmdb.deleteOne({ _id: id });
    res.status(200).json({ message: "Pharmacology Biological deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updatePharmacologySmdb = async (req, res, next) => {
  const id = req.params.pharmacologyId;
  mongoose.set('useFindAndModify', false);
  PharmacologyBiologicalSmdb.findByIdAndUpdate(
    id,
    {
      sn: req.body.sn,
      compoundName: req.body.compoundName,
      cid: req.body.cid,
      pharmacologyActivity:req.body.pharmacologyActivity
    },
    function (err, pharmacology) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res
          .status(200)
          .json({ message: "Pharmacology Biological updated successfully", pharmacology });
      }
    }
  );
};

module.exports = {
  getOnePharmacologySmdb,
  getAllPharmacologysSmdb,
  addPharmacologySmdb,
  deletePharmacologySmdb,
  updatePharmacologySmdb,
};
