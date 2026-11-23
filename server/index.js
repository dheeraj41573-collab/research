const nodeBuffer = require("node:buffer");
nodeBuffer.SlowBuffer ??= nodeBuffer.Buffer;

const express = require("express");
const cors = require("cors");

// CMDB Routes for each of the 5 cereals, we will create a separate route file and import it here. This is to keep the code organized and maintainable. Each route file will handle the CRUD operations for that specific cereal. We will also have separate route files for the pharmacology and statistics data related to the cereals.
const BajraRoutes =require("./routes/cmdb/BajraRoutes.js")
const MaizeRoutes = require("./routes/cmdb/MaizeRoutes.js");
const RagiRoutes = require("./routes/cmdb/RagiRoutes.js");
const RiceRoutes = require("./routes/cmdb/RiceRoutes.js");
const SorghumRoutes = require("./routes/cmdb/SorghumRoutes.js")
const WheatRoutes = require("./routes/cmdb/WheatRoutes.js")
const ADMEpassRoutes = require("./routes/cmdb/ADMEpassRoutes.js")
const PharmacologyBiologicalRoutes = require("./routes/cmdb/PharmacologyBiologicalRoutes.js")
const PharmacologyPlantRoutes = require("./routes/cmdb/PharmacologyPlantRoutes.js")
const PharmacologyRoutes4 = require("./routes/cmdb/PharmacologyCerealRoutes.js")
const StatisticsRouters = require("./routes/cmdb/StatisticsRouters.js")
const BarleyRouters = require('./routes/cmdb/BarleyRoutes.js')

// SMDB Routes for each of the 30 spices, we will create a separate route file and import it here. This is to keep the code organized and maintainable. Each route file will handle the CRUD operations for that specific spice. We will also have separate route files for the pharmacology and statistics data related to the spices.
const AdrakRoutes = require('./routes/smdb/AdrakRoutes.js')
const AjwainRoutes = require('./routes/smdb/AjwainRoutes.js')
const AmchurRoutes = require('./routes/smdb/AmchurRoutes.js')
const AnthriscusCerefoliumRoutes = require('./routes/smdb/AnthriscusCerefoliumRoutes.js')
const CurrypattaRoutes = require('./routes/smdb/CurrypattaRoutes.js')
const DalchiniRoutes = require('./routes/smdb/DalchiniRoutes.js')
const DhaniyaRoutes = require('./routes/smdb/DhaniyaRoutes.js')
const ElayachiRoutes = require('./routes/smdb/ElayachiRoutes.js')
const ApiumGraveolensRoutes = require('./routes/smdb/ApiumGraveolensRoutes.js')
const ArmoraciaRusticanaRoutes = require('./routes/smdb/ArmoraciaRusticanaRoutes.js')
const BrassicaJunceaRoutes = require('./routes/smdb/BrassicaJunceaRoutes.js')
const CapparisSpinosaRoutes = require('./routes/smdb/CapparisSpinosaRoutes.js')
const CapsicumAnnuumRoutes = require('./routes/smdb/CapsicumAnnuumRoutes.js')
const DracocephalumOfficinaleRoutes = require('./routes/smdb/DracocephalumOfficinaleRoutes.js')
const FoeniculumVulgareRoutes = require('./routes/smdb/FoeniculumVulgareRoutes.js')
const IlliciumVerumRoutes = require('./routes/smdb/IlliciumVerumRoutes.js')
const HaldiRoutes = require('./routes/smdb/HaldiRoutes.js')
const HingRoutes = require('./routes/smdb/HingRoutes.js')
const JaifalRoutes = require('./routes/smdb/JaifalRoutes.js')
const JeeraRoutes = require('./routes/smdb/JeeraRoutes.js')
const KalimirchRoutes = require('./routes/smdb/KalimirchRoutes.js')
const KalonjiRoutes = require('./routes/smdb/KalonjiRoutes.js')
const KesarRoutes = require('./routes/smdb/KesarRoutes.js')
const LahsunRoutes = require('./routes/smdb/LahsunRoutes.js')
const LoungRoutes = require('./routes/smdb/LoungRoutes.js')
const LaurusNobilisRoutes = require('./routes/smdb/LaurusNobilisRoutes.js')
const LevisticumOfficinaleRoutes = require('./routes/smdb/LevisticumOfficinaleRoutes.js')
const PudinaRoutes = require('./routes/smdb/PudinaRoutes.js')
const PyajRoutes = require('./routes/smdb/PyajRoutes.js')
const MangiferaIndicaRoutes = require('./routes/smdb/MangiferaIndicaRoutes.js')
const OcimumBasilicumRoutes = require('./routes/smdb/OcimumBasilicumRoutes.js')
const PapaverSomniferumRoutes = require('./routes/smdb/PapaverSomniferumRoutes.js')
const PimpinellaAnisumRoutes = require('./routes/smdb/PimpinellaAnisumRoutes.js')
const PunicaGranatumRoutes = require('./routes/smdb/PunicaGranatumRoutes.js')
const RatanjotRoutes = require('./routes/smdb/RatanjotRoutes.js')
const TezpattaRoutes = require('./routes/smdb/TezpattaRoutes.js')
const SalviaRosmarinusRoutes = require('./routes/smdb/SalviaRosmarinusRoutes.js')
const SaturejaHortensisRoutes = require('./routes/smdb/SaturejaHortensisRoutes.js')
const SesamumIndicumRoutes = require('./routes/smdb/SesamumIndicumRoutes.js')
const TamarindusIndicaRoutes = require('./routes/smdb/TamarindusIndicaRoutes.js')
const ThymusVulgarisRoutes = require('./routes/smdb/ThymusVulgarisRoutes.js')
const PharmacologyBiologicalSmdbRoutes = require('./routes/smdb/PharmacologyBiologicalSmdbRoutes.js')
const PharmacologyPlantSmdbRoutes = require('./routes/smdb/PharmacologyPlantSmdbRoutes.js')
const PharmacologySmdbRoutes4 = require('./routes/smdb/PharmacologyCerealSmdbRoutes.js')
const StatisticsSmdbRouters = require('./routes/smdb/StatisticsSmdbRouters.js')
const ADMEpassSmdbRoutes = require('./routes/smdb/ADMEpassSmdbRoutes.js')

// LichMDb Routes will be JSON backed for now, so we will register them using a function that takes the app as an argument and sets up the routes internally
const registerLichMDbRoutes = require('./routes/lichMDb')

// Trichoderma Routes will be JSON backed for now, so we will register them using a function that takes the app as an argument and sets up the routes internally
const registerTrichodermaRoutes = require('./routes/trichoderma')


// GMDB additional routes will be added as needed
const gmdbRoutes = require("./routes/gmdb");
const ADMEpassGMDBRoutes = require('./routes/gmdb/ADMEpassGMDBRoutes.js');
const StatisticsGMDBRoutes = require('./routes/gmdb/StatisticsGMDBRoutes.js');
const PharmacologyBiologicalGMDBRoutes = require('./routes/gmdb/PharmacologyBiologicalGMDBRoutes.js');
const PharmacologyPlantGMDBRoutes = require('./routes/gmdb/PharmacologyPlantGMDBRoutes.js');
const PharmacologyCerealGMDBRoutes = require('./routes/gmdb/PharmacologyCerealGMDBRoutes.js');
const PharmacologicalTableGMDBRoutes = require('./routes/gmdb/PharmacologicalTableGMDBRoutes.js');
const ToxicityPredictionGMDBRoutes = require('./routes/gmdb/ToxicityPredictionGMDBRoutes.js');


// Download Routes
const DownloadRoutes = require("./routes/DownloadRoutes.js");

// Feedback Routes
const FeedbackRoutes = require("./routes/FeedbackRoutes.js");

// FMDB Routes 
const fmdbRoutes = require("./routes/fmdb");
const ADMEpassFMDBRoutes = require('./routes/fmdb/ADMEpassFMDBRoutes.js');
const StatisticsFMDBRoutes = require('./routes/fmdb/StatisticsFMDBRoutes.js');
const PharmacologyBiologicalFMDBRoutes = require('./routes/fmdb/PharmacologyBiologicalFMDBRoutes.js');
const PharmacologyPlantFMDBRoutes = require('./routes/fmdb/PharmacologyPlantFMDBRoutes.js');
const PharmacologyCerealFMDBRoutes = require('./routes/fmdb/PharmacologyCerealFMDBRoutes.js');
const PharmacologicalTableFMDBRoutes = require('./routes/fmdb/PharmacologicalTableFMDBRoutes.js');


// DMDB Routes 
const dmdbRoutes = require("./routes/dmdb");
const ADMEpassDMDBRoutes = require('./routes/dmdb/ADMEpassDMDBRoutes.js');
const StatisticsDMDBRoutes = require('./routes/dmdb/StatisticsDMDBRoutes.js');
const PharmacologyBiologicalDMDBRoutes = require('./routes/dmdb/PharmacologyBiologicalDMDBRoutes.js');
const PharmacologyPlantDMDBRoutes = require('./routes/dmdb/PharmacologyPlantDMDBRoutes.js');
const PharmacologyCerealDMDBRoutes = require('./routes/dmdb/PharmacologyCerealDMDBRoutes.js');

// User Routes (signup/login/get user)
const UserRoutes = require("./routes/UserRoutes.js");

const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();
// app.use(cors());
app.use(cors({
  origin: true,
  credentials: true
}));

app.use(bodyParser.json());

// Health check endpoint for Render
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is running" });
});

// User Path
app.use("/api/users", UserRoutes);

app.use("/api/bajra", BajraRoutes);
app.use("/api/maize", MaizeRoutes);
app.use("/api/ragi", RagiRoutes);
app.use("/api/rice", RiceRoutes);
app.use("/api/sorghum",SorghumRoutes)
app.use("/api/wheat", WheatRoutes);
app.use("/api/ADMEpass",ADMEpassRoutes);
app.use("/api/pharmacologyBiological",PharmacologyBiologicalRoutes);
app.use("/api/pharmacologyPlant",PharmacologyPlantRoutes);
app.use("/api/pharmacologyCereals",PharmacologyRoutes4); 
app.use('/api/statistics',StatisticsRouters);
app.use('/api/barley',BarleyRouters)


// SMDB Path

app.use("/api/smdb/adrak",AdrakRoutes);
app.use("/api/smdb/ajwain",AjwainRoutes);
app.use("/api/smdb/amchur",AmchurRoutes);
app.use("/api/smdb/anthriscusCerefolium",AnthriscusCerefoliumRoutes);
app.use("/api/smdb/currypatta",CurrypattaRoutes);
app.use("/api/smdb/dalchini",DalchiniRoutes);
app.use("/api/smdb/dhaniya",DhaniyaRoutes);
app.use("/api/smdb/elayachi",ElayachiRoutes);
app.use("/api/smdb/apiumGraveolens",ApiumGraveolensRoutes);
app.use("/api/smdb/armoraciaRusticana",ArmoraciaRusticanaRoutes);
app.use("/api/smdb/brassicaJuncea",BrassicaJunceaRoutes);
app.use("/api/smdb/capparisSpinosa",CapparisSpinosaRoutes);
app.use("/api/smdb/capsicumAnnuum",CapsicumAnnuumRoutes);
app.use("/api/smdb/dracocephalumOfficinale",DracocephalumOfficinaleRoutes);
app.use("/api/smdb/haldi",HaldiRoutes);
app.use("/api/smdb/hing",HingRoutes);
app.use("/api/smdb/jaifal",JaifalRoutes);
app.use("/api/smdb/jeera",JeeraRoutes);
app.use("/api/smdb/kalimirch",KalimirchRoutes);
app.use("/api/smdb/kalonji",KalonjiRoutes)
app.use("/api/smdb/kesar",KesarRoutes)
app.use("/api/smdb/lahsun",LahsunRoutes);
app.use("/api/smdb/loung",LoungRoutes);
app.use("/api/smdb/foeniculumVulgare",FoeniculumVulgareRoutes);
app.use("/api/smdb/illiciumVerum",IlliciumVerumRoutes);
app.use("/api/smdb/laurusNobilis",LaurusNobilisRoutes);
app.use("/api/smdb/levisticumOfficinale",LevisticumOfficinaleRoutes);
app.use("/api/smdb/pudina",PudinaRoutes);
app.use("/api/smdb/pyaj",PyajRoutes);
app.use("/api/smdb/mangiferaIndica",MangiferaIndicaRoutes);
app.use("/api/smdb/ocimumBasilicum",OcimumBasilicumRoutes);
app.use("/api/smdb/papaverSomniferum",PapaverSomniferumRoutes);
app.use("/api/smdb/pimpinellaAnisum",PimpinellaAnisumRoutes);
app.use("/api/smdb/punicaGranatum",PunicaGranatumRoutes);
app.use("/api/smdb/ratanjot",RatanjotRoutes);
app.use("/api/smdb/tezpatta",TezpattaRoutes);
app.use("/api/smdb/salviaRosmarinus",SalviaRosmarinusRoutes);
app.use("/api/smdb/saturejaHortensis",SaturejaHortensisRoutes);
app.use("/api/smdb/sesamumIndicum",SesamumIndicumRoutes);
app.use("/api/smdb/tamarindusIndica",TamarindusIndicaRoutes);
app.use("/api/smdb/thymusVulgaris",ThymusVulgarisRoutes);
app.use("/api/smdb/ADMEpass",ADMEpassSmdbRoutes);
app.use("/api/smdb/pharmacologyBiological",PharmacologyBiologicalSmdbRoutes);
app.use("/api/smdb/pharmacologyPlant",PharmacologyPlantSmdbRoutes);
app.use("/api/smdb/pharmacologyCereals",PharmacologySmdbRoutes4); 
app.use('/api/smdb/statistics',StatisticsSmdbRouters);



// LichMDb Path
registerLichMDbRoutes(app)

// Trichoderma Path (JSON backed)
// app.use('/api/trichoderma/statistics', TrichodermaStatisticsRoutes)
// app.use('/api/trichoderma/admepass', TrichodermaADMEpassRoutes)
// app.use('/api/trichoderma/species', TrichodermaSpeciesRoutes)
registerTrichodermaRoutes(app)

// GMDB Path
app.use("/api/gmdb/ADMEpass", ADMEpassGMDBRoutes);
app.use("/api/gmdb/statistics", StatisticsGMDBRoutes);
app.use("/api/gmdb/pharmacologyBiological", PharmacologyBiologicalGMDBRoutes);
app.use("/api/gmdb/pharmacologyPlant", PharmacologyPlantGMDBRoutes);
app.use("/api/gmdb/pharmacologyCereal", PharmacologyCerealGMDBRoutes);
app.use("/api/gmdb/pharmacologicalTable", PharmacologicalTableGMDBRoutes);
app.use("/api/gmdb/toxicityPrediction", ToxicityPredictionGMDBRoutes);
app.use("/api/gmdb", gmdbRoutes);

// FMDB Path
app.use("/api/fmdb/ADMEpass", ADMEpassFMDBRoutes);
app.use("/api/fmdb/statistics", StatisticsFMDBRoutes);
app.use("/api/fmdb/pharmacologyBiological", PharmacologyBiologicalFMDBRoutes);
app.use("/api/fmdb/pharmacologyPlant", PharmacologyPlantFMDBRoutes);
app.use("/api/fmdb/pharmacologyCereal", PharmacologyCerealFMDBRoutes);
// app.use("/api/fmdb/pharmacologicalTable", PharmacologicalTableFMDBRoutes);
app.use("/api/fmdb", fmdbRoutes);

// DMDB Path
app.use("/api/dmdb/ADMEpass", ADMEpassDMDBRoutes);
app.use("/api/dmdb/statistics", StatisticsDMDBRoutes);
app.use("/api/dmdb/pharmacologyBiological", PharmacologyBiologicalDMDBRoutes);
app.use("/api/dmdb/pharmacologyPlant", PharmacologyPlantDMDBRoutes);
app.use("/api/dmdb/pharmacologyCereal", PharmacologyCerealDMDBRoutes);
app.use("/api/dmdb", dmdbRoutes);

// Feedback Path
app.use("/api/feedback", FeedbackRoutes);

// Download Path
app.use("/api/downloads", DownloadRoutes);
app.listen(process.env.PORT, () =>
  console.log(`server is running in port ${process.env.PORT}`)
);

mongoose.connect(process.env.DATA_BASE_CONNECTION, {
  // useNewUrlParser: true, 
    // useUnifiedTopology: true,
    
  })
  .then(() => console.log("connected to db"))
  .catch((err) => console.error(err));
