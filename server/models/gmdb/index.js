const mongoose = require("mongoose");
const gmdbSpeciesSchema = require("./gmdbSpeciesSchema");

// Define and export models for each GMDB species
const speciesList = [
  "AbiesPindrow",
  "AbiesSachalinensis",
  "AgathisAlba",
  "AgathisDammara",
  "AgathisPalmerstonii",
  "AraucariaColumnaris",
  "CalocedrusMacrolepis",
  "CedrusDeodara",
  "ChamaecyparisLawsoniana",
  "CycasBeddomei",
  "CycasCircinalis",
  "CycasRevoluta",
  "EphedraDistachya",
  "EphedraEquisetina",
  "EphedraGerardiana",
  "EphedraIntermedia",
  "EphedraLikiangensis",
  "EphedraLomatolepis",
  "EphedraMinuta",
  "EphedraMonosperma",
  "EphedraSinica",
  "EphedraRegeliana",
  "GinkgoBiloba",
  "JuniperusCommunis",
  "PiceaSmithiana",
  "PinusArmandii",
  "PinusDensiflora",
  "PinusEdulis",
  "PinusElliottii",
  "PinusFlexilis",
  "PinusHeldreichii",
  "PinusLuchuensis",
  "PinusMonophylla",
  "PinusMontezumae",
  "PinusMonticola",
  "PinusNigra",
  "PinusPalustris",
  "PinusPinea",
  "PinusPonderosa",
  "PinusPumila",
  "PinusRadiata",
  "PinusResinosa",
  "PinusSibirica",
  "PinusStrobus",
  "PinusSylvestris",
  "PinusTaeda",
  "PinusYunnanensis",
  "PlatycladusOrientalis",
  "SequoiaSempervirens",
  "TaiwaniaCryptomerioides",
  "TaxusBaccata",
  "TaxusBrevifolia",
  "TaxusCanadensis",
  "TaxusCuspidata",
  "TaxusMairei",
  "TaxusSumatrana",
  "TaxusWallichiana",
  "TetraclinisArticulata",
  "ThujaOccidentalis",
  "ThujaStandishii",
  "ThujaPlicata"
];

const models = {};

speciesList.forEach((species) => {
  models[species] = mongoose.model(species, gmdbSpeciesSchema, species.toLowerCase());
});

module.exports = models;
