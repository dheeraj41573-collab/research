const PharmacologyBiologicalTrichoderma = require("../../models/trichoderma/PharmacologyBiologicalTrichodermaModel.js");
const mongoose = require("mongoose");

const getOnePharmacologyBiologicalTrichoderma = async (req, res, next) => {
  const id = req.params.PharmacologyBiologicalTrichodermaId;
  try {
    const pharmacologyBiologicalTrichoderma = await PharmacologyBiologicalTrichoderma.findById(id);
    res.status(200).json(pharmacologyBiologicalTrichoderma);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllPharmacologyBiologicalTrichoderma = async (req, res, next) => {
  try {
    const pharmacologyBiologicals = await PharmacologyBiologicalTrichoderma.find({});
    res.status(200).json(pharmacologyBiologicals);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const addPharmacologyBiologicalTrichoderma = async (req, res, next) => {
  const pharmacologyBiologicalTrichoderma = new PharmacologyBiologicalTrichoderma({
    _id: new mongoose.Types.ObjectId(),
    sn: req.body.sn,
    PubchemID: req.body.PubchemID,
    MetaboliteName: req.body.MetaboliteName,
    BiologicalActivity: req.body.BiologicalActivity,
  });
  try {
    await pharmacologyBiologicalTrichoderma.save();
    res.status(201).json(pharmacologyBiologicalTrichoderma);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updatePharmacologyBiologicalTrichoderma = async (req, res, next) => {
  const id = req.params.PharmacologyBiologicalTrichodermaId;
  mongoose.set("useFindAndModify", false);
  PharmacologyBiologicalTrichoderma.findByIdAndUpdate(
    id,
    {
      sn: req.body.sn,
      PubchemID: req.body.PubchemID,
      MetaboliteName: req.body.MetaboliteName,
      BiologicalActivity: req.body.BiologicalActivity,
    },
    function (err, pharmacologyBiologicalTrichoderma) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "PharmacologyBiologicalTrichoderma updated successfully",
          pharmacologyBiologicalTrichoderma: pharmacologyBiologicalTrichoderma,
        });
      }
    }
  );
};

const deletePharmacologyBiologicalTrichoderma = async (req, res, next) => {
  const id = req.params.PharmacologyBiologicalTrichodermaId;
  try {
    await PharmacologyBiologicalTrichoderma.deleteOne({ _id: id });
    res.status(200).json({ message: "PharmacologyBiologicalTrichoderma deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOnePharmacologyBiologicalTrichoderma,
  getAllPharmacologyBiologicalTrichoderma,
  addPharmacologyBiologicalTrichoderma,
  deletePharmacologyBiologicalTrichoderma,
  updatePharmacologyBiologicalTrichoderma,
};
