const ADMEpassTrichoderma = require("../../models/trichoderma/ADMEpassTrichodermaModel.js");
const mongoose = require("mongoose");

const getOneADMEpassTrichoderma = async (req, res, next) => {
  const id = req.params.ADMEpassTrichodermaId;
  try {
    const admepassTrichoderma = await ADMEpassTrichoderma.findById(id);
    res.status(200).json(admepassTrichoderma);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllADMEpassTrichoderma = async (req, res, next) => {
  try {
    const admepasss = await ADMEpassTrichoderma.find({});
    res.status(200).json(admepasss);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const addADMEpassTrichoderma = async (req, res, next) => {
  const admepassTrichoderma = new ADMEpassTrichoderma({
    _id: new mongoose.Types.ObjectId(),
    sn: req.body.sn,
    pubchemID: req.body.pubchemID,
    commonName: req.body.commonName,
    canonical: req.body.canonical,
    formula: req.body.formula,
    mW: req.body.mW,
    heavyaton: req.body.heavyaton,
    aromaticHeavyAtoms: req.body.aromaticHeavyAtoms,
    fractionCsp3: req.body.fractionCsp3,
    rotatablebonds: req.body.rotatablebonds,
    hbondacceptors: req.body.hbondacceptors,
    hbonddonors: req.body.hbonddonors,
    mR: req.body.mR,
    tPSA: req.body.tPSA,
    iLOGP: req.body.iLOGP,
    xLOGP3: req.body.xLOGP3,
    wLOGP: req.body.wLOGP,
    mLOGP: req.body.mLOGP,
    SilicosITLogP: req.body.SilicosITLogP,
    ConsensusLogP: req.body.ConsensusLogP,
    ESOLLogS: req.body.ESOLLogS,
    ESOLSolubilityMG: req.body.ESOLSolubilityMG,
    ESOLSolubilityMOL: req.body.ESOLSolubilityMOL,
    ESOLClass: req.body.ESOLClass,
    AliLogS: req.body.AliLogS,
    AliSolubilityMG: req.body.AliSolubilityMG,
    AliSolubilitydMOL: req.body.AliSolubilitydMOL,
    AliClass: req.body.AliClass,
    SilicosITLogSw: req.body.SilicosITLogSw,
    SilicosITSolubilityMG: req.body.SilicosITSolubilityMG,
    SilicosITSolubilityMOL: req.body.SilicosITSolubilityMOL,
    SilicosITClass: req.body.SilicosITClass,
    GIabsorption: req.body.GIabsorption,
    BBBpermeant: req.body.BBBpermeant,
    Pgpsubstrate: req.body.Pgpsubstrate,
    CYP1A2inhibitor: req.body.CYP1A2inhibitor,
    CYP2C19inhibitor: req.body.CYP2C19inhibitor,
    CYP2C9inhibitor: req.body.CYP2C9inhibitor,
    CYP2D6inhibitorl: req.body.CYP2D6inhibitorl,
    CYP3A4inhibitor: req.body.CYP3A4inhibitor,
    logKp: req.body.logKp,
    Lipinskiviolations: req.body.Lipinskiviolations,
    Ghoseviolations: req.body.Ghoseviolations,
    Veberviolations: req.body.Veberviolations,
    Eganviolations: req.body.Eganviolations,
    Mueggeviolations: req.body.Mueggeviolations,
    BioavailabilityScore: req.body.BioavailabilityScore,
    PAINSalerts: req.body.PAINSalerts,
    Brenkalerts: req.body.Brenkalerts,
    Leadlikenessviolations: req.body.Leadlikenessviolations,
    SyntheticAccessibility: req.body.SyntheticAccessibility,
  });
  try {
    await admepassTrichoderma.save();
    res.status(201).json(admepassTrichoderma);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateADMEpassTrichoderma = async (req, res, next) => {
  const id = req.params.ADMEpassTrichodermaId;
  mongoose.set("useFindAndModify", false);
  ADMEpassTrichoderma.findByIdAndUpdate(
    id,
    {
      sn: req.body.sn,
      pubchemID: req.body.pubchemID,
      commonName: req.body.commonName,
      canonical: req.body.canonical,
      formula: req.body.formula,
      mW: req.body.mW,
      heavyaton: req.body.heavyaton,
      aromaticHeavyAtoms: req.body.aromaticHeavyAtoms,
      fractionCsp3: req.body.fractionCsp3,
      rotatablebonds: req.body.rotatablebonds,
      hbondacceptors: req.body.hbondacceptors,
      hbonddonors: req.body.hbonddonors,
      mR: req.body.mR,
      tPSA: req.body.tPSA,
      iLOGP: req.body.iLOGP,
      xLOGP3: req.body.xLOGP3,
      wLOGP: req.body.wLOGP,
      mLOGP: req.body.mLOGP,
      SilicosITLogP: req.body.SilicosITLogP,
      ConsensusLogP: req.body.ConsensusLogP,
      ESOLLogS: req.body.ESOLLogS,
      ESOLSolubilityMG: req.body.ESOLSolubilityMG,
      ESOLSolubilityMOL: req.body.ESOLSolubilityMOL,
      ESOLClass: req.body.ESOLClass,
      AliLogS: req.body.AliLogS,
      AliSolubilityMG: req.body.AliSolubilityMG,
      AliSolubilitydMOL: req.body.AliSolubilitydMOL,
      AliClass: req.body.AliClass,
      SilicosITLogSw: req.body.SilicosITLogSw,
      SilicosITSolubilityMG: req.body.SilicosITSolubilityMG,
      SilicosITSolubilityMOL: req.body.SilicosITSolubilityMOL,
      SilicosITClass: req.body.SilicosITClass,
      GIabsorption: req.body.GIabsorption,
      BBBpermeant: req.body.BBBpermeant,
      Pgpsubstrate: req.body.Pgpsubstrate,
      CYP1A2inhibitor: req.body.CYP1A2inhibitor,
      CYP2C19inhibitor: req.body.CYP2C19inhibitor,
      CYP2C9inhibitor: req.body.CYP2C9inhibitor,
      CYP2D6inhibitorl: req.body.CYP2D6inhibitorl,
      CYP3A4inhibitor: req.body.CYP3A4inhibitor,
      logKp: req.body.logKp,
      Lipinskiviolations: req.body.Lipinskiviolations,
      Ghoseviolations: req.body.Ghoseviolations,
      Veberviolations: req.body.Veberviolations,
      Eganviolations: req.body.Eganviolations,
      Mueggeviolations: req.body.Mueggeviolations,
      BioavailabilityScore: req.body.BioavailabilityScore,
      PAINSalerts: req.body.PAINSalerts,
      Brenkalerts: req.body.Brenkalerts,
      Leadlikenessviolations: req.body.Leadlikenessviolations,
      SyntheticAccessibility: req.body.SyntheticAccessibility,
    },
    function (err, admepassTrichoderma) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "ADMEpassTrichoderma updated successfully",
          admepassTrichoderma: admepassTrichoderma,
        });
      }
    }
  );
};

const deleteADMEpassTrichoderma = async (req, res, next) => {
  const id = req.params.ADMEpassTrichodermaId;
  try {
    await ADMEpassTrichoderma.deleteOne({ _id: id });
    res.status(200).json({ message: "ADMEpassTrichoderma deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneADMEpassTrichoderma,
  getAllADMEpassTrichoderma,
  addADMEpassTrichoderma,
  deleteADMEpassTrichoderma,
  updateADMEpassTrichoderma,
};
