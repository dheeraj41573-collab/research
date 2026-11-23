const fmdbImages = import.meta.glob("./Image/fmdb/*", { eager: true, query: "?url", import: "default" });

function normalizeForMatch(value) {
  if (!value) return "";
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function getImageUrl(scientificName) {
  const normalizedName = normalizeForMatch(scientificName);
  for (const [path, url] of Object.entries(fmdbImages)) {
    const filename = path.split("/").pop().split(".").shift();
    if (normalizeForMatch(filename) === normalizedName) {
      return url;
    }
  }
  return "/Image/gmdb/sergei.jpg";
}

const taxonomy = {
  ActinidiaDeliciosa: {
    scientificName: "Actinidia deliciosa",
    image: getImageUrl("kiwi"),
    classification: [
      ["Kingdom", "Plantae"],
      ["Clade(s)", "Tracheophytes; Angiosperms; Eudicots; Asterids"],
      ["Order", "Ericales"],
      ["Family", "Actinidiaceae"],
      ["Genus", "Actinidia"],
      ["Species", "Actinidia deliciosa"],
    ],
  },
  AnanasComosus: {
    scientificName: "Ananas comosus",
    image: getImageUrl("pineapple"),
    classification: [
      ["Kingdom", "Plantae"],
      ["Clade(s)", "Tracheophytes; Angiosperms; Monocots; Commelinids"],
      ["Order", "Poales"],
      ["Family", "Bromeliaceae"],
      ["Genus", "Ananas"],
      ["Species", "Ananas comosus"],
    ],
  },
  AnnonaSquamosa: {
    scientificName: "Annona squamosa",
    image: getImageUrl("annona"),
    classification: [
      ["Kingdom", "Plantae"],
      ["Clade(s)", "Tracheophytes; Angiosperms; Magnoliids"],
      ["Order", "Magnoliales"],
      ["Family", "Annonaceae"],
      ["Genus", "Annona"],
      ["Species", "Annona squamosa"],
    ],
  },
  ArtocarpusHeterophyllus: {
    scientificName: "Artocarpus heterophyllus",
    image: getImageUrl("jackfruit"),
    classification: [
      ["Kingdom", "Plantae"],
      ["Clade(s)", "Tracheophytes; Angiosperms; Eudicots; Rosids"],
      ["Order", "Rosales"],
      ["Family", "Moraceae"],
      ["Genus", "Artocarpus"],
      ["Species", "Artocarpus heterophyllus"],
    ],
  },
  CaricaPapaya: {
    scientificName: "Carica papaya",
    image: getImageUrl("papaya"),
    classification: [
      ["Kingdom", "Plantae"],
      ["Clade(s)", "Tracheophytes; Angiosperms; Eudicots; Rosids"],
      ["Order", "Brassicales"],
      ["Family", "Caricaceae"],
      ["Genus", "Carica"],
      ["Species", "Carica papaya"],
    ],
  },
  CitrusSinensis: {
    scientificName: "Citrus sinensis",
    image: getImageUrl("orange"),
    classification: [
      ["Kingdom", "Plantae"],
      ["Clade(s)", "Tracheophytes; Angiosperms; Eudicots; Rosids"],
      ["Order", "Sapindales"],
      ["Family", "Rutaceae"],
      ["Genus", "Citrus"],
      ["Species", "Citrus sinensis"],
    ],
  },
  CucumisMelo: {
    scientificName: "Cucumis melo",
    image: getImageUrl("muskmelon"),
    classification: [
      ["Kingdom", "Plantae"],
      ["Clade(s)", "Tracheophytes; Angiosperms; Eudicots; Rosids"],
      ["Order", "Cucurbitales"],
      ["Family", "Cucurbitaceae"],
      ["Genus", "Cucumis"],
      ["Species", "Cucumis melo"],
    ],
  },
  FragariaAnanassa: {
    scientificName: "Fragaria × ananassa",
    image: getImageUrl("strawberry"),
    classification: [
      ["Kingdom", "Plantae"],
      ["Clade(s)", "Tracheophytes; Angiosperms; Eudicots; Rosids"],
      ["Order", "Rosales"],
      ["Family", "Rosaceae"],
      ["Genus", "Fragaria"],
      ["Species", "Fragaria × ananassa"],
    ],
  },
  MalusDomestica: {
    scientificName: "Malus domestica",
    image: getImageUrl("apple"),
    classification: [
      ["Kingdom", "Plantae"],
      ["Clade(s)", "Tracheophytes; Angiosperms; Eudicots; Rosids"],
      ["Order", "Rosales"],
      ["Family", "Rosaceae"],
      ["Genus", "Malus"],
      ["Species", "Malus domestica"],
    ],
  },
  MangiferaIndica: {
    scientificName: "Mangifera indica",
    image: getImageUrl("mango"),
    classification: [
      ["Kingdom", "Plantae"],
      ["Clade(s)", "Tracheophytes; Angiosperms; Eudicots; Rosids"],
      ["Order", "Sapindales"],
      ["Family", "Anacardiaceae"],
      ["Genus", "Mangifera"],
      ["Species", "Mangifera indica"],
    ],
  },
  ManilkaraZapota: {
    scientificName: "Manilkara zapota",
    image: getImageUrl("sapota"),
    classification: [
      ["Kingdom", "Plantae"],
      ["Clade(s)", "Tracheophytes; Angiosperms; Eudicots; Asterids"],
      ["Order", "Ericales"],
      ["Family", "Sapotaceae"],
      ["Genus", "Manilkara"],
      ["Species", "Manilkara zapota"],
    ],
  },
  MorusAlba: {
    scientificName: "Morus alba",
    image: getImageUrl("morus"),
    classification: [
      ["Kingdom", "Plantae"],
      ["Clade(s)", "Tracheophytes; Angiosperms; Eudicots; Rosids"],
      ["Order", "Rosales"],
      ["Family", "Moraceae"],
      ["Genus", "Morus"],
      ["Species", "Morus alba"],
    ],
  },
  MusaSpp: {
    scientificName: "Musa spp",
    image: getImageUrl("banana"),
    classification: [
      ["Kingdom", "Plantae"],
      ["Clade(s)", "Tracheophytes; Angiosperms; Monocots; Commelinids"],
      ["Order", "Zingiberales"],
      ["Family", "Musaceae"],
      ["Genus", "Musa"],
      ["Species", "Musa spp"],
    ],
  },
  PhoenixDactylifera: {
    scientificName: "Phoenix dactylifera",
    image: getImageUrl("date palm"),
    classification: [
      ["Kingdom", "Plantae"],
      ["Clade(s)", "Tracheophytes; Angiosperms; Monocots; Commelinids"],
      ["Order", "Arecales"],
      ["Family", "Arecaceae"],
      ["Genus", "Phoenix"],
      ["Species", "Phoenix dactylifera"],
    ],
  },
  PrunusAvium: {
    scientificName: "Prunus avium",
    image: getImageUrl("cherry"),
    classification: [
      ["Kingdom", "Plantae"],
      ["Clade(s)", "Tracheophytes; Angiosperms; Eudicots; Rosids"],
      ["Order", "Rosales"],
      ["Family", "Rosaceae"],
      ["Genus", "Prunus"],
      ["Species", "Prunus avium"],
    ],
  },
  PrunusDomestica: {
    scientificName: "Prunus domestica",
    image: getImageUrl("plum"),
    classification: [
      ["Kingdom", "Plantae"],
      ["Clade(s)", "Tracheophytes; Angiosperms; Eudicots; Rosids"],
      ["Order", "Rosales"],
      ["Family", "Rosaceae"],
      ["Genus", "Prunus"],
      ["Species", "Prunus domestica"],
    ],
  },
  PrunusPersica: {
    scientificName: "Prunus persica",
    image: getImageUrl("peach"),
    classification: [
      ["Kingdom", "Plantae"],
      ["Clade(s)", "Tracheophytes; Angiosperms; Eudicots; Rosids"],
      ["Order", "Rosales"],
      ["Family", "Rosaceae"],
      ["Genus", "Prunus"],
      ["Species", "Prunus persica"],
    ],
  },
  PsidiumGuajava: {
    scientificName: "Psidium guajava",
    image: getImageUrl("guava"),
    classification: [
      ["Kingdom", "Plantae"],
      ["Clade(s)", "Tracheophytes; Angiosperms; Eudicots; Rosids"],
      ["Order", "Myrtales"],
      ["Family", "Myrtaceae"],
      ["Genus", "Psidium"],
      ["Species", "Psidium guajava"],
    ],
  },
  PunicaGranatum: {
    scientificName: "Punica granatum",
    image: getImageUrl("pomengranate"),
    classification: [
      ["Kingdom", "Plantae"],
      ["Clade(s)", "Tracheophytes; Angiosperms; Eudicots; Rosids"],
      ["Order", "Myrtales"],
      ["Family", "Lythraceae"],
      ["Genus", "Punica"],
      ["Species", "Punica granatum"],
    ],
  },
  PyrusCommunis: {
    scientificName: "Pyrus communis",
    image: getImageUrl("pear"),
    classification: [
      ["Kingdom", "Plantae"],
      ["Clade(s)", "Tracheophytes; Angiosperms; Eudicots; Rosids"],
      ["Order", "Rosales"],
      ["Family", "Rosaceae"],
      ["Genus", "Pyrus"],
      ["Species", "Pyrus communis"],
    ],
  },
  RubusIdaeus: {
    scientificName: "Rubus idaeus",
    image: getImageUrl("respberry"),
    classification: [
      ["Kingdom", "Plantae"],
      ["Clade(s)", "Tracheophytes; Angiosperms; Eudicots; Rosids"],
      ["Order", "Rosales"],
      ["Family", "Rosaceae"],
      ["Genus", "Rubus"],
      ["Species", "Rubus idaeus"],
    ],
  },
  SelenicereusUndatus: {
    scientificName: "Selenicereus undatus",
    image: getImageUrl("dragon fruit"),
    classification: [
      ["Kingdom", "Plantae"],
      ["Clade(s)", "Tracheophytes; Angiosperms; Eudicots"],
      ["Order", "Caryophyllales"],
      ["Family", "Cactaceae"],
      ["Genus", "Selenicereus"],
      ["Species", "Selenicereus undatus"],
    ],
  },
  SyzygiumCumini: {
    scientificName: "Syzygium cumini",
    image: getImageUrl("jamun"),
    classification: [
      ["Kingdom", "Plantae"],
      ["Clade(s)", "Tracheophytes; Angiosperms; Eudicots; Rosids"],
      ["Order", "Myrtales"],
      ["Family", "Myrtaceae"],
      ["Genus", "Syzygium"],
      ["Species", "Syzygium cumini"],
    ],
  },
  VitisVinifera: {
    scientificName: "Vitis vinifera",
    image: getImageUrl("grapes"),
    classification: [
      ["Kingdom", "Plantae"],
      ["Clade(s)", "Tracheophytes; Angiosperms; Eudicots; Rosids"],
      ["Order", "Vitales"],
      ["Family", "Vitaceae"],
      ["Genus", "Vitis"],
      ["Species", "Vitis vinifera"],
    ],
  },
  ZiziphusMauritiana: {
    scientificName: "Ziziphus mauritiana",
    image: getImageUrl("ziziphus"),
    classification: [
      ["Kingdom", "Plantae"],
      ["Clade(s)", "Tracheophytes; Angiosperms; Eudicots; Rosids"],
      ["Order", "Rosales"],
      ["Family", "Rhamnaceae"],
      ["Genus", "Ziziphus"],
      ["Species", "Ziziphus mauritiana"],
    ],
  },
};

function expandClassification(list) {
  const out = [];
  for (const item of list) {
    const key = item[0];
    const val = item[1];
    if (String(key).toLowerCase().startsWith("clade")) {
      const parts = String(val).split(";").map((s) => s.trim()).filter(Boolean);
      for (const p of parts) {
        out.push(["Clade", p]);
      }
    } else {
      out.push([key, val]);
    }
  }
  return out;
}

const taxonomyExpanded = Object.fromEntries(
  Object.entries(taxonomy).map(([k, v]) => [
    k,
    { ...v, classification: expandClassification(v.classification || []) },
  ])
);

export default taxonomyExpanded;
