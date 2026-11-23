const PharmacologyPlantTrichoderma = require("../../models/trichoderma/PharmacologyPlantTrichodermaModel.js");
const mongoose = require("mongoose");

const getOnePharmacologyPlantTrichoderma = async (req, res, next) => {
  const id = req.params.PharmacologyPlantTrichodermaId;
  try {
    const pharmacologyPlantTrichoderma = await PharmacologyPlantTrichoderma.findById(id);
    res.status(200).json(pharmacologyPlantTrichoderma);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllPharmacologyPlantTrichoderma = async (req, res, next) => {
  try {
    const pharmacologyPlants = await PharmacologyPlantTrichoderma.find({});
    res.status(200).json(pharmacologyPlants);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const addPharmacologyPlantTrichoderma = async (req, res, next) => {
  const pharmacologyPlantTrichoderma = new PharmacologyPlantTrichoderma({
    _id: new mongoose.Types.ObjectId(),
    sn: req.body.sn,
    "Antifungal ": req.body["Antifungal "],
    "AntiCancer": req.body["AntiCancer"],
    "Antioxidant": req.body["Antioxidant"],
    "Antiinflammatory": req.body["Antiinflammatory"],
    "Antiviral": req.body["Antiviral"],
    "Radical-Scavenging": req.body["Radical-Scavenging"],
    "Gastroprotective": req.body["Gastroprotective"],
    "ImmuneModulatory": req.body["ImmuneModulatory"],
    "Cytotoxic": req.body["Cytotoxic"],
    "Antimicrobial": req.body["Antimicrobial"],
    "StressProtective": req.body["StressProtective"],
    "Cardioprotective": req.body["Cardioprotective"],
    "Neuroprotective": req.body["Neuroprotective"],
    "AntiApoptotic": req.body["AntiApoptotic"],
    "Pharmacokinetics": req.body["Pharmacokinetics"],
    "Antigenotoxic": req.body["Antigenotoxic"],
    "AntiPlatelet": req.body["AntiPlatelet"],
    "AntiLarvalSettlement": req.body["AntiLarvalSettlement"],
    "Diuretic": req.body["Diuretic"],
    "Antiulcer": req.body["Antiulcer"],
    "Antinociceptive": req.body["Antinociceptive"],
    "Anticonvulsant": req.body["Anticonvulsant"],
    "Antipsychotic": req.body["Antipsychotic"],
    "Antidiabetic": req.body["Antidiabetic"],
    "Antihistaminic": req.body["Antihistaminic"],
    "Antiallergic": req.body["Antiallergic"],
    "Antihypertensive": req.body["Antihypertensive"],
    "Antiprotozoal": req.body["Antiprotozoal"],
    "Hypolipidemic": req.body["Hypolipidemic"],
    "Hepatoprotective": req.body["Hepatoprotective"],
    "AntiObesity": req.body["AntiObesity"],
    "Antiatherosclerotic": req.body["Antiatherosclerotic"],
    "Antiproliferative": req.body["Antiproliferative"],
    "AntiCarcinogenic": req.body["AntiCarcinogenic"],
    "AntiAsthmatic": req.body["AntiAsthmatic"],
    "AcneReduction": req.body["AcneReduction"],
    "Moisture-Retentive": req.body["Moisture-Retentive"],
    "AntiMigratory": req.body["AntiMigratory"],
    "AntiInvasive": req.body["AntiInvasive"],
    "AntiMelanogenesis": req.body["AntiMelanogenesis"],
    "Antileishmanial": req.body["Antileishmanial"],
    "Phytotoxic": req.body["Phytotoxic"],
    "AntiInfluenza": req.body["AntiInfluenza"],
    "Antifouling": req.body["Antifouling"],
    "Immunomodulator": req.body["Immunomodulator"],
    "Antifeedant": req.body["Antifeedant"],
    "Insecticidal": req.body["Insecticidal"],
    "Antifibrotic": req.body["Antifibrotic"],
    "AntiReverseTranscriptase": req.body["AntiReverseTranscriptase"],
    "Antibiosis": req.body["Antibiosis"],
    "ButyrylcholinesteraseInhibition": req.body["ButyrylcholinesteraseInhibition"],
    "Antispasmodic": req.body["Antispasmodic"],
    "AntiGlycating": req.body["AntiGlycating"],
    "Antineoplastic": req.body["Antineoplastic"],
    "AntiLipoxygenase": req.body["AntiLipoxygenase"],
    "EffluxPumpInhibitory": req.body["EffluxPumpInhibitory"],
    "AlphaGlucosidaseInhibitory": req.body["AlphaGlucosidaseInhibitory"],
  });
  try {
    await pharmacologyPlantTrichoderma.save();
    res.status(201).json(pharmacologyPlantTrichoderma);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updatePharmacologyPlantTrichoderma = async (req, res, next) => {
  const id = req.params.PharmacologyPlantTrichodermaId;
  mongoose.set("useFindAndModify", false);
  PharmacologyPlantTrichoderma.findByIdAndUpdate(
    id,
    {
      sn: req.body.sn,
      "Antifungal ": req.body["Antifungal "],
      "AntiCancer": req.body["AntiCancer"],
      "Antioxidant": req.body["Antioxidant"],
      "Antiinflammatory": req.body["Antiinflammatory"],
      "Antiviral": req.body["Antiviral"],
      "Radical-Scavenging": req.body["Radical-Scavenging"],
      "Gastroprotective": req.body["Gastroprotective"],
      "ImmuneModulatory": req.body["ImmuneModulatory"],
      "Cytotoxic": req.body["Cytotoxic"],
      "Antimicrobial": req.body["Antimicrobial"],
      "StressProtective": req.body["StressProtective"],
      "Cardioprotective": req.body["Cardioprotective"],
      "Neuroprotective": req.body["Neuroprotective"],
      "AntiApoptotic": req.body["AntiApoptotic"],
      "Pharmacokinetics": req.body["Pharmacokinetics"],
      "Antigenotoxic": req.body["Antigenotoxic"],
      "AntiPlatelet": req.body["AntiPlatelet"],
      "AntiLarvalSettlement": req.body["AntiLarvalSettlement"],
      "Diuretic": req.body["Diuretic"],
      "Antiulcer": req.body["Antiulcer"],
      "Antinociceptive": req.body["Antinociceptive"],
      "Anticonvulsant": req.body["Anticonvulsant"],
      "Antipsychotic": req.body["Antipsychotic"],
      "Antidiabetic": req.body["Antidiabetic"],
      "Antihistaminic": req.body["Antihistaminic"],
      "Antiallergic": req.body["Antiallergic"],
      "Antihypertensive": req.body["Antihypertensive"],
      "Antiprotozoal": req.body["Antiprotozoal"],
      "Hypolipidemic": req.body["Hypolipidemic"],
      "Hepatoprotective": req.body["Hepatoprotective"],
      "AntiObesity": req.body["AntiObesity"],
      "Antiatherosclerotic": req.body["Antiatherosclerotic"],
      "Antiproliferative": req.body["Antiproliferative"],
      "AntiCarcinogenic": req.body["AntiCarcinogenic"],
      "AntiAsthmatic": req.body["AntiAsthmatic"],
      "AcneReduction": req.body["AcneReduction"],
      "Moisture-Retentive": req.body["Moisture-Retentive"],
      "AntiMigratory": req.body["AntiMigratory"],
      "AntiInvasive": req.body["AntiInvasive"],
      "AntiMelanogenesis": req.body["AntiMelanogenesis"],
      "Antileishmanial": req.body["Antileishmanial"],
      "Phytotoxic": req.body["Phytotoxic"],
      "AntiInfluenza": req.body["AntiInfluenza"],
      "Antifouling": req.body["Antifouling"],
      "Immunomodulator": req.body["Immunomodulator"],
      "Antifeedant": req.body["Antifeedant"],
      "Insecticidal": req.body["Insecticidal"],
      "Antifibrotic": req.body["Antifibrotic"],
      "AntiReverseTranscriptase": req.body["AntiReverseTranscriptase"],
      "Antibiosis": req.body["Antibiosis"],
      "ButyrylcholinesteraseInhibition": req.body["ButyrylcholinesteraseInhibition"],
      "Antispasmodic": req.body["Antispasmodic"],
      "AntiGlycating": req.body["AntiGlycating"],
      "Antineoplastic": req.body["Antineoplastic"],
      "AntiLipoxygenase": req.body["AntiLipoxygenase"],
      "EffluxPumpInhibitory": req.body["EffluxPumpInhibitory"],
      "AlphaGlucosidaseInhibitory": req.body["AlphaGlucosidaseInhibitory"],
    },
    function (err, pharmacologyPlantTrichoderma) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "PharmacologyPlantTrichoderma updated successfully",
          pharmacologyPlantTrichoderma: pharmacologyPlantTrichoderma,
        });
      }
    }
  );
};

const deletePharmacologyPlantTrichoderma = async (req, res, next) => {
  const id = req.params.PharmacologyPlantTrichodermaId;
  try {
    await PharmacologyPlantTrichoderma.deleteOne({ _id: id });
    res.status(200).json({ message: "PharmacologyPlantTrichoderma deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOnePharmacologyPlantTrichoderma,
  getAllPharmacologyPlantTrichoderma,
  addPharmacologyPlantTrichoderma,
  deletePharmacologyPlantTrichoderma,
  updatePharmacologyPlantTrichoderma,
};
