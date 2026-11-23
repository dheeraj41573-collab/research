const fs = require('fs');
const path = require('path');

const modelNames = [
  'Alectoria',
  'AlectoriaSarmentosa',
  'Anzia',
  'AnziaHypoleucoides',
  'Candelaria',
  'CandelariaConcolor',
  'Cetraria',
  'Cladonia',
  'CladoniaConvoluta',
  'CladoniaCristatella',
  'CladoniaCryptochlorophaea',
  'CladoniaFurcata',
  'CladoniaMacilenta',
  'CladoniaMitis',
  'CladoniaRangiferina',
  'CladoniaVerticillata',
  'Coniocarpon',
  'ConiocarponCinnabarinum',
  'Dimelaena',
  'Dolichousnea',
  'DolichousneaLongissima',
  'Evernia',
  'Flavoparmelia',
  'Heterodermia',
  'Hypogymnia',
  'HypogymniaEnteromorpha',
  'Hypotrachyna',
  'HypotrachynaCirrhata',
  'Lecanora',
  'LecanoraFrustulosa',
  'LecanoraHybocarpa',
  'LecanoraLividocinerea',
  'Lethariella',
  'LethariellaCladonioides',
  'LethariellaSernanderi',
  'Lobaria',
  'LobariaPulmonaria',
  'LobariaScrobiculata',
  'Menegazzia',
  'Ochrolechia',
  'Oxneria',
  'Parmelia',
  'ParmeliaOmphalodes',
  'ParmeliaSaxatilis',
  'Parmotrema',
  'ParmotremaNilgherrense',
  'ParmotremaPraesorediosum',
  'ParmotremaSanctiAngelii',
  'ParmotremaTinctorum',
  'Peltigera',
  'PeltigeraCanina',
  'PeltigeraMalacea',
  'PeltigeraVenosa',
  'Platismatia',
  'Pseudocyphellaria',
  'PseudocyphellariaFaveolata',
  'PseudocyphellariaNorvegica',
  'Pyrenula',
  'PyrenulaPseudobufonia',
  'Ramalina',
  'RamalinaDila',
  'RamalinaFarinacea',
  'RamalinaHierrensis',
  'RamalinaPollinaria',
  'RamalinaSiliquosa',
  'RamalinaStenospora',
  'Ricasolia',
  'Roccella',
  'Roccellafuciformis',
  'Sphaerophorus',
  'Stereocaulon',
  'StereocaulonAzoreum',
  'StereocaulonCorticatulum',
  'StereocaulonJaponicum',
  'StereocaulonPaschale',
  'StereocaulonRamulosum',
  'StereocaulonSasakii',
  'Sulcaria',
  'Teloschistes',
  'TeloschistesFlavicans',
  'Umbilicaria',
  'UmbilicariaCinereorufescens',
  'UmbilicariaCrustulosa',
  'UmbilicariaEsculenta',
  'UmbilicariaHypococcinea',
  'UmbilicariaPolyphylla',
  'UmbilicariaPolyphylla1',
  'UmbilicariaProboscidea',
  'UmbilicariaSpodochroa',
  'UmbilicariaSpodochroa1',
  'Usnea',
  'UsneaArticulata',
  'UsneaUndulata',
  'Xalocoa',
  'Xanthoparmelia',
  'XanthoparmeliaCamtschadalis'
];

function toLowerCamelCase(name) {
  return name.charAt(0).toLowerCase() + name.slice(1);
}

function createRouteContent(modelName) {
  const lower = toLowerCamelCase(modelName);
  const plural = `${modelName}s`;
  return `const express = require("express");

const ${modelName}Controller = require("../../controllers/lichMDb/${modelName}Controller.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", ${modelName}Controller.add${modelName});
router.get("/:${lower}Id", ${modelName}Controller.getOne${modelName});
router.get("/", ${modelName}Controller.getAll${plural});
router.delete("/:${lower}Id", checkAuth, ${modelName}Controller.delete${modelName});
router.put("/:${lower}Id", checkAuth, ${modelName}Controller.update${modelName});

module.exports = router;
`;
}

const routesDir = __dirname;

console.log('Creating lichMDb route files...');
modelNames.forEach(name => {
  const file = path.join(routesDir, `${name}Routes.js`);
  fs.writeFileSync(file, createRouteContent(name));
  console.log(`Created: ${path.basename(file)}`);
});

// Create aggregator index.js
const aggregator = `// Auto-generated aggregator for lichMDb routes
module.exports = function registerLichMDbRoutes(app) {
${modelNames.map(name => {
  const lower = toLowerCamelCase(name);
  const requireLine = `  const ${name}Routes = require('./${name}Routes.js');`;
  const useLine = `  app.use('/api/lichmdb/${lower}', ${name}Routes);`;
  return `${requireLine}\n${useLine}`;
}).join('\n')}
};
`;

fs.writeFileSync(path.join(routesDir, 'index.js'), aggregator);
console.log('Created: index.js (aggregator)');
console.log(`\nSuccessfully created ${modelNames.length} route files and aggregator.`);
