// Aggregator to register all Trichoderma species routes
module.exports = function registerTrichodermaRoutes(app) {
  const TrichodermaVirideRoutes = require('./TrichodermaVirideRoutes');
  const TrichodermaHarzianumRoutes = require('./TrichodermaHarzianumRoutes');
  const TrichodermaVirensRoutes = require('./TrichodermaVirensRoutes');
  const TrichodermaPolysporumRoutes = require('./TrichodermaPolysporumRoutes');
  const TrichodermaReeseiRoutes = require('./TrichodermaReeseiRoutes');
  const TrichodermaSaturnisporumRoutes = require('./TrichodermaSaturnisporumRoutes');
  const TrichodermaSpiraleRoutes = require('./TrichodermaSpiraleRoutes');
  const TrichodermaVelutinumRoutes = require('./TrichodermaVelutinumRoutes');
  const TrichodermaVinosumRoutes = require('./TrichodermaVinosumRoutes');
  const TrichodermaKoningiiRoutes = require('./TrichodermaKoningiiRoutes');
  const TrichodermaKoningiopsisRoutes = require('./TrichodermaKoningiopsisRoutes');
  const TrichodermaLongibrachiatumRoutes = require('./TrichodermaLongibrachiatumRoutes');
  const TrichodermaGamsiiRoutes = require('./TrichodermaGamsiiRoutes');
  const TrichodermaHamatumRoutes = require('./TrichodermaHamatumRoutes');
  const TrichodermaBrevicompactumRoutes = require('./TrichodermaBrevicompactumRoutes');
  const TrichodermaCerinumRoutes = require('./TrichodermaCerinumRoutes');
  const TrichodermaCitrinovirideRoutes = require('./TrichodermaCitrinovirideRoutes');
  const TrichodermaCitrinumRoutes = require('./TrichodermaCitrinumRoutes');
  const TrichodermaCornuDamaeRoutes = require('./TrichodermaCornuDamaeRoutes');
  const TrichodermaCremeumRoutes = require('./TrichodermaCremeumRoutes');
  const TrichodermaDeliquescensRoutes = require('./TrichodermaDeliquescensRoutes');
  const TrichodermaAvellaneumRoutes = require('./TrichodermaAvellaneumRoutes');
  const TrichodermaAsperellumRoutes = require('./TrichodermaAsperellumRoutes');
  const TrichodermaAtrovirideRoutes = require('./TrichodermaAtrovirideRoutes');
  const TrichodermaAureovirideRoutes = require('./TrichodermaAureovirideRoutes');
  const TrichodermaAlbumRoutes = require('./TrichodermaAlbumRoutes');
  const TrichodermaApplanatumRoutes = require('./TrichodermaApplanatumRoutes');
  const TrichodermaHypoxylonRoutes = require('./TrichodermaHypoxylonRoutes');
  const TrichodermaCrassumRoutes = require('./TrichodermaCrassumRoutes');
  const TrichodermaHypocreaMuroianaRoutes = require('./TrichodermaHypocreaMuroianaRoutes');

  // General Trichoderma routes (MongoDB-backed)
  const ADMEpassTrichodermaRoutes = require('./../trichoderma/ADMEpassTrichodermaRoutes');
  const PharmacologyBiologicalTrichodermaRoutes = require('./../trichoderma/PharmacologyBiologicalTrichodermaRoutes');
  const PharmacologyPlantTrichodermaRoutes = require('./../trichoderma/PharmacologyPlantTrichodermaRoutes');
  const StatisticsTrichodermaRoutes = require('./../trichoderma/StatisticsTrichodermaRoutes');
  const PharmacologyBiologicalCountingTrichodermaRoutes = require('./../trichoderma/PharmacologyBiologicalCountingTrichodermaRoutes');

  // Mount species routes
  app.use('/api/trichoderma/viride', TrichodermaVirideRoutes);
  app.use('/api/trichoderma/harzianum', TrichodermaHarzianumRoutes);
  app.use('/api/trichoderma/virens', TrichodermaVirensRoutes);
  app.use('/api/trichoderma/polysporum', TrichodermaPolysporumRoutes);
  app.use('/api/trichoderma/reesei', TrichodermaReeseiRoutes);
  app.use('/api/trichoderma/saturnisporum', TrichodermaSaturnisporumRoutes);
  app.use('/api/trichoderma/spirale', TrichodermaSpiraleRoutes);
  app.use('/api/trichoderma/velutinum', TrichodermaVelutinumRoutes);
  app.use('/api/trichoderma/vinosum', TrichodermaVinosumRoutes);
  app.use('/api/trichoderma/koningii', TrichodermaKoningiiRoutes);
  app.use('/api/trichoderma/koningiopsis', TrichodermaKoningiopsisRoutes);
  app.use('/api/trichoderma/longibrachiatum', TrichodermaLongibrachiatumRoutes);
  app.use('/api/trichoderma/gamsii', TrichodermaGamsiiRoutes);
  app.use('/api/trichoderma/hamatum', TrichodermaHamatumRoutes);
  app.use('/api/trichoderma/brevicompactum', TrichodermaBrevicompactumRoutes);
  app.use('/api/trichoderma/cerinum', TrichodermaCerinumRoutes);
  app.use('/api/trichoderma/citrinoviride', TrichodermaCitrinovirideRoutes);
  app.use('/api/trichoderma/citrinum', TrichodermaCitrinumRoutes);
  app.use('/api/trichoderma/cornuDamae', TrichodermaCornuDamaeRoutes);
  app.use('/api/trichoderma/cremeum', TrichodermaCremeumRoutes);
  app.use('/api/trichoderma/deliquescens', TrichodermaDeliquescensRoutes);
  app.use('/api/trichoderma/avellaneum', TrichodermaAvellaneumRoutes);
  app.use('/api/trichoderma/asperellum', TrichodermaAsperellumRoutes);
  app.use('/api/trichoderma/atroviride', TrichodermaAtrovirideRoutes);
  app.use('/api/trichoderma/aureoviride', TrichodermaAureovirideRoutes);
  app.use('/api/trichoderma/album', TrichodermaAlbumRoutes);
  app.use('/api/trichoderma/applanatum', TrichodermaApplanatumRoutes);
  app.use('/api/trichoderma/hypoxylon', TrichodermaHypoxylonRoutes);
  app.use('/api/trichoderma/crassum', TrichodermaCrassumRoutes);
  app.use('/api/trichoderma/hypocrea-muroiana', TrichodermaHypocreaMuroianaRoutes);

  // Mount general routes
  app.use('/api/trichoderma/ADMEpass', ADMEpassTrichodermaRoutes);
  app.use('/api/trichoderma/pharmacologyBiological', PharmacologyBiologicalTrichodermaRoutes);
  app.use('/api/trichoderma/pharmacologyPlant', PharmacologyPlantTrichodermaRoutes);
  app.use('/api/trichoderma/statistics', StatisticsTrichodermaRoutes);
  app.use('/api/trichoderma/pharmacologyBiologicalCounting', PharmacologyBiologicalCountingTrichodermaRoutes);

  console.log('All Trichoderma routes registered (species + general) - using MongoDB backend');
};


