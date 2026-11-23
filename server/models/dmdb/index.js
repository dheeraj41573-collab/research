const mongoose = require('mongoose');
const dmdbSpeciesSchema = require('./dmdbSpeciesSchema');

// Define and export models for each DMDB species
const speciesList = [
  'AdzukiBean',
  'AparajitaButterflyPeaAsianPigeonWings',
  'Amaltash',
  'Babchi',
  'BroadBean',
  'Barseem',
  'BlackGramUradBean',
  'Chickpea',
  'Cowpea',
  'GreenGramMungBean',
  'GardenPea',
  'HyacinthBean',
  'HorseGramMadrasGram',
  'Indigo',
  'IndianRosewood',
  'KidneyBean',
  'Lentil',
  'LimaBean',
  'Lucerne',
  'LathyrusGrassPeaWhitePea',
  'LeucaenaWhitePopinac',
  'Melilotus',
  'MothBean',
  'Mulethi',
  'NarrowLeafVetch',
  'Palas',
  'PricklyAcacia',
  'PigeonPea',
  'RedSandalwood',
  'Sourclover',
  'VelvetBean',
  'WhiteClover',
  'WingedBean',
  'YellowSweetClover',
];

const models = {};

speciesList.forEach((species) => {
  models[species] = mongoose.model(
    species,
    dmdbSpeciesSchema,
    species.toLowerCase(),
  );
});

module.exports = models;
