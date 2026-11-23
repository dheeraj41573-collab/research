const mongoose = require("mongoose");
const fmdbSpeciesSchema = require("./fmdbSpeciesSchema");

const speciesList = [
  "ActinidiaDeliciosa",
  "AnanasComosus",
  "AnnonaSquamosa",
  "ArtocarpusHeterophyllus",
  "CaricaPapaya",
  "CitrusSinensis",
  "CucumisMelo",
  "FragariaAnanassa",
  "MalusDomestica",
  "MangiferaIndica",
  "ManilkaraZapota",
  "MorusAlba",
  "MusaSpp",
  "PhoenixDactylifera",
  "PrunusAvium",
  "PrunusDomestica",
  "PrunusPersica",
  "PsidiumGuajava",
  "PunicaGranatum",
  "PyrusCommunis",
  "RubusIdaeus",
  "SelenicereusUndatus",
  "SyzygiumCumini",
  "VitisVinifera",
  "ZiziphusMauritiana",
];

const models = {};

speciesList.forEach((species) => {
  if (mongoose.models[species]) {
    models[species] = mongoose.models[species];
  } else {
    models[species] = mongoose.model(species, fmdbSpeciesSchema, species.toLowerCase());
  }
});

module.exports = models;
