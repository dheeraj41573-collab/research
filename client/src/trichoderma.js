// Auto-import all Trichoderma images and expose their URLs
import avellaneumImg from "./Image/trichoderma/trichoderma-avellaneum.jpeg";
import crassumImg from "./Image/trichoderma/trichoderma-crassum.jpeg";

const trichodermaImages = import.meta.glob("./Image/trichoderma/*", { eager: true, query: "?url", import: "default" });

function normalizeForMatch(value) {
    if (!value) return "";
    return value
        .toLowerCase()
        .replace(/trichoderma\s+/g, "")
        .replace(/[^a-z]/g, "");
}

function getImageForScientificName(scientificName) {
    const nameFull = normalizeForMatch(scientificName);
    const nameNoGenus = normalizeForMatch(scientificName.replace(/\btrichoderma\b/i, ""));

    for (const [path, url] of Object.entries(trichodermaImages)) {
        const fileBase = path.split("/").pop() || "";
        const fileKey = normalizeForMatch(fileBase.replace(/\.[^.]+$/, ""));

        if (fileKey.includes(nameFull) || fileKey.includes(nameNoGenus)) {
            return url;
        }
    }
    return ""; // blank when missing
}

const taxonomy = {
    hypoxylon: {
        scientificName: "Trichoderma hypoxylon",
        image: getImageForScientificName("Trichoderma Hypoxylon"),
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Trichoderma"],
            ["Species", "T. hypoxylon"],
        ],
    },
    applanatum: {
        scientificName: "Trichoderma applanatum",
        image: getImageForScientificName("Trichoderma Applanatum"),
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Trichoderma"],
            ["Species", "T. applanatum"],
        ],
    },
    citrinum: {
        scientificName: "Trichoderma citrinum",
        image: getImageForScientificName("Trichoderma Citrinum"),
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Trichoderma"],
            ["Species", "T. citrinum"],
        ],
    },
    cremeum: {
        scientificName: "Trichoderma cremeum",
        image: getImageForScientificName("Trichoderma Cremeum"),
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Trichoderma"],
            ["Species", "T. cremeum"],
        ],
    },
    cornuDamae: {
        scientificName: "Trichoderma cornu-damae",
        image: getImageForScientificName("Trichoderma cornu-damae"),
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Trichoderma"],
            ["Species", "T. cornu-damae"],
        ],
    },
    vinosum: {
        scientificName: "Trichoderma vinosum",
        image: getImageForScientificName("Trichoderma Vinosum"),
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Trichoderma"],
            ["Species", "T. vinosum"],
        ],
    },
    gamsii: {
        scientificName: "Trichoderma gamsii",
        image: getImageForScientificName("Trichoderma Gamsii"),
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Trichoderma"],
            ["Species", "T. gamsii"],
        ],
    },
    koningiopsis: {
        scientificName: "Trichoderma koningiopsis",
        image: getImageForScientificName("Trichoderma Koningiopsis"),
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Trichoderma"],
            ["Species", "T. koningiopsis"],
        ],
    },
    brevicompactum: {
        scientificName: "Trichoderma brevicompactum",
        image: getImageForScientificName("Trichoderma Brevicompactum"),
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Trichoderma"],
            ["Species", "T. brevicompactum"],
        ],
    },
    avellaneum: {
        scientificName: "Trichoderma avellaneum",
        image: avellaneumImg,
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Trichoderma"],
            ["Species", "T. avellaneum"],
        ],
    },
    velutinum: {
        scientificName: "Trichoderma velutinum",
        image: getImageForScientificName("Trichoderma Velutinum"),
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Trichoderma"],
            ["Species", "T. velutinum"],
        ],
    },
    cerinum: {
        scientificName: "Trichoderma cerinum",
        image: getImageForScientificName("Trichoderma cerinum"),
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Trichoderma"],
            ["Species", "T. cerinum"],
        ],
    },
    album: {
        scientificName: "Trichoderma album",
        image: getImageForScientificName("Trichoderma Album"),
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Trichoderma"],
            ["Species", "T. album"],
        ],
    },
    asperellum: {
        scientificName: "Trichoderma asperellum",
        image: getImageForScientificName("Trichoderma Asperellum"),
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Trichoderma"],
            ["Species", "T. asperellum"],
        ],
    },
    koningii: {
        scientificName: "Trichoderma koningii",
        image: getImageForScientificName("Trichoderma Koningii"),
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Trichoderma"],
            ["Species", "T. koningii"],
        ],
    },
    aureoviride: {
        scientificName: "Trichoderma aureoviride",
        image: getImageForScientificName("Trichoderma Aureoviride"),
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Trichoderma"],
            ["Species", "T. aureoviride"],
        ],
    },
    spirale: {
        scientificName: "Trichoderma spirale",
        image: getImageForScientificName("Trichoderma Spirale"),
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Trichoderma"],
            ["Species", "T. spirale"],
        ],
    },
    crassum: {
        scientificName: "Trichoderma crassum",
        image: crassumImg,
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Trichoderma"],
            ["Species", "T. crassum"],
        ],
    },
    atroviride: {
        scientificName: "Trichoderma atroviride",
        image: getImageForScientificName("Trichoderma Atroviride"),
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Trichoderma"],
            ["Species", "T. atroviride"],
        ],
    },
    citrinoviride: {
        scientificName: "Trichoderma citrinoviride",
        image: getImageForScientificName("Trichoderma Citrinoviride"),
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Trichoderma"],
            ["Species", "T. citrinoviride"],
        ],
    },
    reesei: {
        scientificName: "Trichoderma reesei",
        image: getImageForScientificName("Trichoderma Reesei"),
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Trichoderma"],
            ["Species", "T. reesei"],
        ],
    },
    hamatum: {
        scientificName: "Trichoderma hamatum",
        image: getImageForScientificName("Trichoderma Hamatum"),
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Trichoderma"],
            ["Species", "T. hamatum"],
        ],
    },
    polysporum: {
        scientificName: "Trichoderma polysporum",
        image: getImageForScientificName("Trichoderma polysporum"),
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Trichoderma"],
            ["Species", "T. polysporum"],
        ],
    },
    virens: {
        scientificName: "Trichoderma virens",
        image: getImageForScientificName("Trichoderma Virens"),
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Trichoderma"],
            ["Species", "T. virens"],
        ],
    },
    deliquescens: {
        scientificName: "Trichoderma deliquescens",
        image: getImageForScientificName("Trichoderma Deliquescens"),
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Trichoderma"],
            ["Species", "T. deliquescens"],
        ],
    },
    saturnisporum: {
        scientificName: "Trichoderma saturnisporum",
        image: getImageForScientificName("Trichoderma Saturnisporum"),
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Trichoderma"],
            ["Species", "T. saturnisporum"],
        ],
    },
    harzianum: {
        scientificName: "Trichoderma harzianum",
        image: getImageForScientificName("Trichoderma Harzianum"),
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Trichoderma"],
            ["Species", "T. harzianum"],
        ],
    },
    viride: {
        scientificName: "Trichoderma viride",
        image: getImageForScientificName("Trichoderma Viride"),
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Trichoderma"],
            ["Species", "T. viride"],
        ],
    },
    longibrachiatum: {
        scientificName: "Trichoderma longibrachiatum",
        image: getImageForScientificName("Trichoderma Longibrachiatum"),
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Trichoderma"],
            ["Species", "T. longibrachiatum"],
        ],
    },
     muroiana: {
        scientificName: "Hypocrea muroiana",
        image: getImageForScientificName("Trichoderma Hypocrea Muroiana"),
        classification: [
            ["Kingdom", "Fungi"],
            ["Division", "Ascomycota"],
            ["Subdivision", "Pezizomycotina"],
            ["Class", "Sordariomycetes"],
            ["Order", "Hypocreales"],
            ["Family", "Hypocreaceae"],
            ["Genus", "Hypocrea"],
            ["Species", "H. muroiana"],
        ],
    },
};

export default taxonomy;


