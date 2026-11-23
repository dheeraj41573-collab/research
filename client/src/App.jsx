// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import FooterCom from "./components/Footer";


// Main Page
import AuthorPage from "./pages/AuthorPage";
import HelpPost from "./pages/HelpPage";
import Acknowledgements from "./pages/Acknowledgements";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";
import AdminLogin from "./pages/AdminLogin";
import AdminFeedback from "./pages/AdminFeedback";
import AdminDownloads from "./pages/AdminDownloads";



// CMDB Page

import StatisticsPost from "./pages/cmdb/StatisticsPost";
import ADMEpassPost from "./pages/cmdb/ADMEpassPost";
import PharmcologicalPost from "./pages/cmdb/PharmacologicalPost";
import AboutCmdb from "./pages/cmdb/About";
import CiteThisAsCmdb from "./pages/cmdb/citethisasCmdb";

import BajraPost from "./pages/cmdb/BajraPost";
import WheatPost from "./pages/cmdb/WheatPost";
import ScrollToTop from "./components/ScrollToTop";
import MaizePost from "./pages/cmdb/MaizePost";
import RicePost from "./pages/cmdb/RicePost";
import SorghumPost from "./pages/cmdb/SorghumPost";
import RagiPost from "./pages/cmdb/RagiPost";
import BarleyPost from "./pages/cmdb/BarleyPage";




// SMDB Page

import AboutSmdb from "./pages/smdb/About";
import StatisticsPostSMDB from "./pages/smdb/StatisticsPostSMDB";
import ADMEpassPostSMDB from "./pages/smdb/ADMEpassPostSMDB";
import PharmacologicalPostSMDB from "./pages/smdb/PharmacologicalPostSMDB";
import CiteThisAsSmdb from "./pages/smdb/citethisasSmdb";

import AjwainPost from "./pages/smdb/AjwainPost";
import LoungPost from "./pages/smdb/LoungPost";
import ElayachiPost from "./pages/smdb/ElayachiPost";
import KalimirchPost from "./pages/smdb/KalimirchPost";
import JeeraPost from "./pages/smdb/JeeraPost";
import HingPost from "./pages/smdb/HingPost";
import AdrakPost from "./pages/smdb/AdrakPost";
import LahsunPost from "./pages/smdb/LahsunPost";
import PyajPost from "./pages/smdb/PyajPost";
import DalchiniPost from "./pages/smdb/DalchiniPost";
import HaldiPost from "./pages/smdb/HaldiPost";
import DhaniyaPost from "./pages/smdb/DhaniyaPost";
import JavitriPost from "./pages/smdb/JavitriPost";
import KesarPost from "./pages/smdb/KesarPost";
import RatanjotPost from "./pages/smdb/RatanjotPost";
import PudinaPost from "./pages/smdb/PudinaPost";
import CurrypattaPost from "./pages/smdb/CurrypattaPost";
import KalonjiPost from "./pages/smdb/KalonjiPost"
import TezpattaPost from "./pages/smdb/TezpattaPost";
import AnthriscusCerefoliumPost from "./pages/smdb/AnthriscusCerefoliumPost";
import ApiumGraveolensPost from "./pages/smdb/ApiumGraveolensPost";
import ArmoraciaRusticanaPost from "./pages/smdb/ArmoraciaRusticanaPost";
import BrassicaJunceaPost from "./pages/smdb/BrassicaJunceaPost";
import CapparisSpinosaPost from "./pages/smdb/CapparisSpinosaPost";
import CapsicumAnnuumPost from "./pages/smdb/CapsicumAnnuumPost";
import DracocephalumOfficinalePost from "./pages/smdb/DracocephalumOfficinalePost";
import FoeniculumVulgarePost from "./pages/smdb/FoeniculumVulgarePost";
import IlliciumVerumPost from "./pages/smdb/IlliciumVerumPost";
import LaurusNobilisPost from "./pages/smdb/LaurusNobilisPost";
import LevisticumOfficinalePost from "./pages/smdb/LevisticumOfficinalePost";
import MangiferaIndicaPost from "./pages/smdb/MangiferaIndicaPost";
import OcimumBasilicumPost from "./pages/smdb/OcimumBasilicumPost";
import PapaverSomniferumPost from "./pages/smdb/PapaverSomniferumPost";
import PimpinellaAnisumPost from "./pages/smdb/PimpinellaAnisumPost";
import PunicaGranatumPost from "./pages/smdb/PunicaGranatumPost";
import SalviaRosmarinusPost from "./pages/smdb/SalviaRosmarinusPost";
import SaturejaHortensisPost from "./pages/smdb/SaturejaHortensisPost";
import SesamumIndicumPost from "./pages/smdb/SesamumIndicumPost";
import TamarindusIndicaPost from "./pages/smdb/TamarindusIndicaPost";
import ThymusVulgarisPost from "./pages/smdb/ThymusVulgarisPost";

// LMDb (Lichens) imports

import AboutLichMDb from "./pages/lichMDb/About";


import AlectoriaSarmentosaPost from "./pages/lichMDb/AlectoriaSarmentosaPost";
import AlectoriaOchroleucaPost from "./pages/lichMDb/AlectoriaOchroleucaPost";
import AnziaHypoleucoidesPost from "./pages/lichMDb/AnziaHypoleucoidesPost";
import CandelariaConcolorPost from "./pages/lichMDb/CandelariaConcolorPost";
import CetrariaIslandicaPost from "./pages/lichMDb/CetrariaIslandicaPost";
import CladoniaConvolutaPost from "./pages/lichMDb/CladoniaConvolutaPost";
import CladoniaCristatellaPost from "./pages/lichMDb/CladoniaCristatellaPost";
import CladoniaCryptochlorophaeaPost from "./pages/lichMDb/CladoniaCryptochlorophaeaPost";
import CladoniaFurcataPost from "./pages/lichMDb/CladoniaFurcataPost";
import CladoniaMacilentaPost from "./pages/lichMDb/CladoniaMacilentaPost";
import CladoniaMitisPost from "./pages/lichMDb/CladoniaMitisPost";
import CladoniaRangiferinaPost from "./pages/lichMDb/CladoniaRangiferinaPost";
import CladoniaStellarisPost from "./pages/lichMDb/CladoniaStellarisPost";
import CladoniaVerticillataPost from "./pages/lichMDb/CladoniaVerticillataPost";
import ConiocarponCinnabarinumPost from "./pages/lichMDb/ConiocarponCinnabarinumPost";
import DimelaenaOreinaPost from "./pages/lichMDb/DimelaenaOreinaPost";
import DolichousneaLongissimaPost from "./pages/lichMDb/DolichousneaLongissimaPost";
import EverniaPrunastriPost from "./pages/lichMDb/EverniaPrunastriPost";
import FlavoparmeliaCaperataPost from "./pages/lichMDb/FlavoparmeliaCaperataPost";
import FlavoparmeliaHaysomiiPost from "./pages/lichMDb/FlavoparmeliaHaysomiiPost";
import HeterodermiaDissectaPost from "./pages/lichMDb/HeterodermiaDissectaPost";
import HypogymniaEnteromorphaPost from "./pages/lichMDb/HypogymniaEnteromorphaPost";
import HypotrachynaCirrhataPost from "./pages/lichMDb/HypotrachynaCirrhataPost";
import HypotrachynaLeiophyllaPost from "./pages/lichMDb/HypotrachynaLeiophyllaPost";
import LecanoraFrustulosaPost from "./pages/lichMDb/LecanoraFrustulosaPost";
import LecanoraHybocarpaPost from "./pages/lichMDb/LecanoraHybocarpaPost";
import LecanoraLividocinereaPost from "./pages/lichMDb/LecanoraLividocinereaPost";
import LeptogiumSaturninumPost from "./pages/lichMDb/LeptogiumSaturninumPost";
import LethariellaCladonioidesPost from "./pages/lichMDb/LethariellaCladonioidesPost";
import LethariellaSernanderiPost from "./pages/lichMDb/LethariellaSernanderiPost";
import LobariaPulmonariaPost from "./pages/lichMDb/LobariaPulmonariaPost";
import LobariaScrobiculataPost from "./pages/lichMDb/LobariaScrobiculataPost";
import MenegazziaTerebrataPost from "./pages/lichMDb/MenegazziaTerebrataPost";
import OchrolechiaParellaPost from "./pages/lichMDb/OchrolechiaParellaPost";
import OphioparmaVentosaPost from "./pages/lichMDb/OphioparmaVentosaPost";
import OxneriaFallaxPost from "./pages/lichMDb/OxneriaFallaxPost";
import ParmeliaOmphalodesPost from "./pages/lichMDb/ParmeliaOmphalodesPost";
import ParmeliaSaxatilisPost from "./pages/lichMDb/ParmeliaSaxatilisPost";
import ParmotremaNilgherrensePost from "./pages/lichMDb/ParmotremaNilgherrensePost";
import ParmotremaPraesorediosumPost from "./pages/lichMDb/ParmotremaPraesorediosumPost";
import ParmotremaSanctiAngeliiPost from "./pages/lichMDb/ParmotremaSanctiAngeliiPost";
import ParmotremaTinctorumPost from "./pages/lichMDb/ParmotremaTinctorumPost";
import PeltigeraCaninaPost from "./pages/lichMDb/PeltigeraCaninaPost";
import PeltigeraMalaceaPost from "./pages/lichMDb/PeltigeraMalaceaPost";
import PeltigeraVenosaPost from "./pages/lichMDb/PeltigeraVenosaPost";
import PlatismatiaGlaucaPost from "./pages/lichMDb/PlatismatiaGlaucaPost";
import PseudocyphellariaFaveolataPost from "./pages/lichMDb/PseudocyphellariaFaveolataPost";
import PseudocyphellariaNorvegicaPost from "./pages/lichMDb/PseudocyphellariaNorvegicaPost";
import PyrenulaPseudobufoniaPost from "./pages/lichMDb/PyrenulaPseudobufoniaPost";
import RamalinaCalicarisPost from "./pages/lichMDb/RamalinaCalicarisPost";
import RamalinaDilacerataPost from "./pages/lichMDb/RamalinaDilacerataPost";
import RamalinaFarinaceaPost from "./pages/lichMDb/RamalinaFarinaceaPost";
import RamalinaHierrensisPost from "./pages/lichMDb/RamalinaHierrensisPost";
import RamalinaPollinariaPost from "./pages/lichMDb/RamalinaPollinariaPost";
import RamalinaSiliquosaPost from "./pages/lichMDb/RamalinaSiliquosaPost";
import RamalinaStenosporaPost from "./pages/lichMDb/RamalinaStenosporaPost";
import RicasoliaAmplissimaPost from "./pages/lichMDb/RicasoliaAmplissimaPost";
import RoccellaFuciformisPost from "./pages/lichMDb/RoccellaFuciformisPost";
import RoccellaMontagneiPost from "./pages/lichMDb/RoccellaMontagneiPost";
import SphaerophorusFragilisPost from "./pages/lichMDb/SphaerophorusFragilisPost";
import StereocaulonAzoreumPost from "./pages/lichMDb/StereocaulonAzoreumPost";
import StereocaulonCorticatulumPost from "./pages/lichMDb/StereocaulonCorticatulumPost";
import StereocaulonJaponicumPost from "./pages/lichMDb/StereocaulonJaponicumPost";
import StereocaulonPaschalePost from "./pages/lichMDb/StereocaulonPaschalePost";
import StereocaulonRamulosumPost from "./pages/lichMDb/StereocaulonRamulosumPost";
import StereocaulonSasakiiPost from "./pages/lichMDb/StereocaulonSasakiiPost";
import StereocaulonVesuvianumPost from "./pages/lichMDb/StereocaulonVesuvianumPost";
import SulcariaSulcataPost from "./pages/lichMDb/SulcariaSulcataPost";
import TeloschistesChrysophthalmusPost from "./pages/lichMDb/TeloschistesChrysophthalmusPost";
import TeloschistesFlavicansPost from "./pages/lichMDb/TeloschistesFlavicansPost";
import UmbilicariaCinereorufescensPost from "./pages/lichMDb/UmbilicariaCinereorufescensPost";
import UmbilicariaCrustulosaPost from "./pages/lichMDb/UmbilicariaCrustulosaPost";
import UmbilicariaEsculentaPost from "./pages/lichMDb/UmbilicariaEsculentaPost";
import UmbilicariaHypococcineaPost from "./pages/lichMDb/UmbilicariaHypococcineaPost";
import UmbilicariaPolyphyllaPost from "./pages/lichMDb/UmbilicariaPolyphyllaPost";
import UmbilicariaPolyphylla1Post from "./pages/lichMDb/UmbilicariaPolyphylla1Post";
import UmbilicariaProboscideaPost from "./pages/lichMDb/UmbilicariaProboscideaPost";
import UmbilicariaSpodochroaPost from "./pages/lichMDb/UmbilicariaSpodochroaPost";
import UmbilicariaSpodochroa1Post from "./pages/lichMDb/UmbilicariaSpodochroa1Post";
import UsneaArticulataPost from "./pages/lichMDb/UsneaArticulataPost";
import UsneaFloridaPost from "./pages/lichMDb/UsneaFloridaPost";
import UsneaUndulataPost from "./pages/lichMDb/UsneaUndulataPost";
import XanthoparmeliaCompetitaPost from "./pages/lichMDb/XanthoparmeliaCompetitaPost";
import XalocoaOcellataPost from "./pages/lichMDb/XalocoaOcellataPost";
import XanthoparmeliaCamtschadalisPost from "./pages/lichMDb/XanthoparmeliaCamtschadalisPost";
import XanthoparmeliaTinctinaPost from "./pages/lichMDb/XanthoparmeliaTinctinaPost";
import ADMEpassPostLichMDb from "./pages/lichMDb/ADMEpassPostLichMDb";
import StatisticsPostLichMDb from "./pages/lichMDb/StatisticsPostLichMDb";
import PharmacologicalPostLichMDb from "./pages/lichMDb/PharmacologicalPostLichMDb";
import CiteThisAsLmdb from "./pages/lichMDb/citethisasLmdb";




import TrichodermaAlbumPost from "./pages/trichoderma/TrichodermaAlbumPost";
import TrichodermaApplanatumPost from "./pages/trichoderma/TrichodermaApplanatumPost";
import TrichodermaAsperellumPost from "./pages/trichoderma/TrichodermaAsperellumPost";
import TrichodermaAtroviridePost from "./pages/trichoderma/TrichodermaAtroviridePost";
import TrichodermaAureoviridePost from "./pages/trichoderma/TrichodermaAureoviridePost";
import TrichodermaAvellaneumPost from "./pages/trichoderma/TrichodermaAvellaneumPost";
import TrichodermaBrevicompactumPost from "./pages/trichoderma/TrichodermaBrevicompactumPost";
import TrichodermaCerinumPost from "./pages/trichoderma/TrichodermaCerinumPost";
import TrichodermaCitrinoviridePost from "./pages/trichoderma/TrichodermaCitrinoviridePost";
import TrichodermaCitrinumPost from "./pages/trichoderma/TrichodermaCitrinumPost";
import TrichodermaCornuDamaePost from "./pages/trichoderma/TrichodermaCornuDamaePost";
import TrichodermaCremeumPost from "./pages/trichoderma/TrichodermaCremeumPost";
import TrichodermaCrassumPost from "./pages/trichoderma/TrichodermaCrassumPost";
import TrichodermaDeliquescensPost from "./pages/trichoderma/TrichodermaDeliquescensPost";
import TrichodermaGamsiiPost from "./pages/trichoderma/TrichodermaGamsiiPost";
import TrichodermaHamatumPost from "./pages/trichoderma/TrichodermaHamatumPost";
import TrichodermaHarzianumPost from "./pages/trichoderma/TrichodermaHarzianumPost";
import TrichodermaHypocreaMuroianaPost from "./pages/trichoderma/TrichodermaHypocreaMuroianaPost";
import TrichodermaHypoxylonPost from "./pages/trichoderma/TrichodermaHypoxylonPost";
import TrichodermaKoningiiPost from "./pages/trichoderma/TrichodermaKoningiiPost";
import TrichodermaKoningiopsisPost from "./pages/trichoderma/TrichodermaKoningiopsisPost";
import TrichodermaLongibrachiatumPost from "./pages/trichoderma/TrichodermaLongibrachiatumPost";
import TrichodermaPolysporumPost from "./pages/trichoderma/TrichodermaPolysporumPost";
import TrichodermaReeseiPost from "./pages/trichoderma/TrichodermaReeseiPost";
import TrichodermaSaturnisporumPost from "./pages/trichoderma/TrichodermaSaturnisporumPost";
import TrichodermaSpiralePost from "./pages/trichoderma/TrichodermaSpiralePost";
import TrichodermaVelutinumPost from "./pages/trichoderma/TrichodermaVelutinumPost";
import TrichodermaVirensPost from "./pages/trichoderma/TrichodermaVirensPost";
import TrichodermaViridePost from "./pages/trichoderma/TrichodermaViridePost";
import TrichodermaVinosumPost from "./pages/trichoderma/TrichodermaVinosumPost";
import StatisticsPostTrichoderma from "./pages/trichoderma/StatisticsPostTrichoderma";
import ADMEpassPostTrichoderma from "./pages/trichoderma/ADMEpassPostTrichoderma";
import PharmacologicalPostTrichoderma from "./pages/trichoderma/PharmacologicalPostTrichoderma";
import AboutTrichoderma from "./pages/trichoderma/About";
import CiteThisAsTmdb from "./pages/trichoderma/citethisasTmdb";

// FMDB imports
import AboutFMDB from "./pages/fmdb/About";
import StatisticsPostFMDB from "./pages/fmdb/StatisticsPostFMDB";
import ADMEpassPostFMDB from "./pages/fmdb/ADMEpassPostFMDB";
import PharmacologicalPostFMDB from "./pages/fmdb/PharmacologicalPostFMDB";
import FMDBPost from "./pages/fmdb/FMDBPost";
import AboutGMDB from "./pages/gmdb/About";
import StatisticsPostGMDB from "./pages/gmdb/StatisticsPostGMDB";
import ADMEpassPostGMDB from "./pages/gmdb/ADMEpassPostGMDB";
import PharmacologicalPostGMDB from "./pages/gmdb/PharmacologicalPostGMDB";
import ToxicityPredictionPostGMDB from "./pages/gmdb/ToxicityPredictionPostGMDB";
import GMDBPost from "./pages/gmdb/GMDBPost";

import AboutDMDB from "./pages/LeSeMeDa/About";
import StatisticsPostDMDB from "./pages/LeSeMeDa/StatisticsPostDMDB";
import ADMEpassPostDMDB from "./pages/LeSeMeDa/ADMEpassPostDMDB";
import PharmacologicalPostDMDB from "./pages/LeSeMeDa/PharmacologicalPostDMDB";
import PharmacologyBiologicalDMDB from "./pages/LeSeMeDa/PharmacologyBiologicalDMDB";
import PharmacologyCerealDMDB from "./pages/LeSeMeDa/PharmacologyCerealDMDB";
import PharmacologyPlantDMDB from "./pages/LeSeMeDa/PharmacologyPlantDMDB";
import DMDBPost from "./pages/LeSeMeDa/DMDBPost";



export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      {/* <Navbar/> */}
      <Routes>


{/* ************Main Page Post************ */}

      <Route path="/author" element={<AuthorPage />} />
        <Route path="/acknowledgements" element={<Acknowledgements />} />
        <Route path="/help" element={<HelpPost/>}/>
        <Route path="/analytics" element={<AnalyticsDashboard />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/feedback" element={<AdminFeedback />} />
        <Route path="/admin/downloads" element={<AdminDownloads />} />

{/* ************Cmdb Post************ */}

        <Route path="/" element={<Home />} />
        <Route path="/Cereals/bajra" element={<BajraPost />} />
        <Route path="/Cereals/maize" element={<MaizePost />} />
        <Route path="/Cereals/rice" element={<RicePost />} />
        <Route path="/Cereals/barley" element={<BarleyPost />} />
        <Route path="/Cereals/ragi" element={<RagiPost />} />
        <Route path="/Cereals/sorghum" element={<SorghumPost />} />
        <Route path="/Cereals/wheat" element={<WheatPost />} />
        <Route path="/Cereals/pharmacological" element={<PharmcologicalPost />} />
        <Route path="/Cereals/adme" element={<ADMEpassPost />} />
        <Route path="/Cereals/statistics" element={<StatisticsPost/>}/>
        <Route path="/Cereals/about" element={<AboutCmdb />} />
        <Route path="/Cereals/citethisasCmdb" element={<CiteThisAsCmdb />} />

        


        {/* ************Smdb Post************ */}

        <Route path="/smdb/ajwain" element={<AjwainPost />}/>
        <Route path="/smdb/tezpatta" element={<TezpattaPost />}/>
        <Route path="/smdb/loung" element={<LoungPost />}/>
        <Route path="/smdb/elayachi" element={<ElayachiPost />}/>
        <Route path="/smdb/kalimirch" element={<KalimirchPost />}/>
        <Route path="/smdb/jeera" element={<JeeraPost/>}/>
        <Route path="/smdb/hing" element={<HingPost />}/>
        <Route path="/smdb/adrak" element={<AdrakPost />}/>
        <Route path="/smdb/lahsun" element={<LahsunPost />}/>
        <Route path="/smdb/pyaj" element={<PyajPost />}/>
        <Route path="/smdb/dalchini" element={<DalchiniPost />}/>
        <Route path="/smdb/haldi" element={<HaldiPost />}/>
        <Route path="/smdb/dhaniya" element={<DhaniyaPost />}/>
        <Route path="/smdb/javitri" element={<JavitriPost />}/>
        <Route path="/smdb/kesar" element={<KesarPost />}/>
        <Route path="/smdb/ratanjot" element={<RatanjotPost />}/>
        <Route path="/smdb/pudina" element={<PudinaPost />}/>
        <Route path="/smdb/currypatta" element={<CurrypattaPost />}/>
        <Route path="/smdb/kalonji" element={<KalonjiPost />}/>

        <Route path="/smdb/about" element={<AboutSmdb />} />
        <Route path="/smdb/adme" element={<ADMEpassPostSMDB />}/>
        <Route path="/smdb/statistics" element={<StatisticsPostSMDB />}/>
        <Route path="/smdb/pharmacological" element={<PharmacologicalPostSMDB />} />
        <Route path="/smdb/citethisasSmdb" element={<CiteThisAsSmdb />} />

        {/* New SMDB spices */}
        <Route path="/smdb/anthriscus-cerefolium" element={<AnthriscusCerefoliumPost />} />
        <Route path="/smdb/apium-graveolens" element={<ApiumGraveolensPost />} />
        <Route path="/smdb/armoracia-rusticana" element={<ArmoraciaRusticanaPost />} />
        <Route path="/smdb/brassica-juncea" element={<BrassicaJunceaPost />} />
        <Route path="/smdb/capparis-spinosa" element={<CapparisSpinosaPost />} />
        <Route path="/smdb/capsicum-annuum" element={<CapsicumAnnuumPost />} />
        <Route path="/smdb/dracocephalum-officinale" element={<DracocephalumOfficinalePost />} />
        <Route path="/smdb/foeniculum-vulgare" element={<FoeniculumVulgarePost />} />
        <Route path="/smdb/illicium-verum" element={<IlliciumVerumPost />} />
        <Route path="/smdb/laurus-nobilis" element={<LaurusNobilisPost />} />
        <Route path="/smdb/levisticum-officinale" element={<LevisticumOfficinalePost />} />
        <Route path="/smdb/mangifera-indica" element={<MangiferaIndicaPost />} />
        <Route path="/smdb/ocimum-basilicum" element={<OcimumBasilicumPost />} />
        <Route path="/smdb/papaver-somniferum" element={<PapaverSomniferumPost />} />
        <Route path="/smdb/pimpinella-anisum" element={<PimpinellaAnisumPost />} />
        <Route path="/smdb/punica-granatum" element={<PunicaGranatumPost />} />
        <Route path="/smdb/salvia-rosmarinus" element={<SalviaRosmarinusPost />} />
        <Route path="/smdb/satureja-hortensis" element={<SaturejaHortensisPost />} />
        <Route path="/smdb/sesamum-indicum" element={<SesamumIndicumPost />} />
        <Route path="/smdb/tamarindus-indica" element={<TamarindusIndicaPost />} />
        <Route path="/smdb/thymus-vulgaris" element={<ThymusVulgarisPost />} />

        {/* LMDb Lichens */}
        <Route path="/lichmdb/adme" element={<ADMEpassPostLichMDb />} />
        <Route path="/lichmdb/about" element={<AboutLichMDb />} />
        <Route path="/lichmdb/statistics" element={<StatisticsPostLichMDb />} />
        <Route path="/lichmdb/pharmacological" element={<PharmacologicalPostLichMDb />} />
        <Route path="/lichmdb/citethisasLmdb" element={<CiteThisAsLmdb />} />

        <Route path="/lichmdb/alectoria-sarmentosa" element={<AlectoriaSarmentosaPost />} />
        <Route path="/lichmdb/alectoria-ochroleuca" element={<AlectoriaOchroleucaPost />} />
        <Route path="/lichmdb/anzia-hypoleucoides" element={<AnziaHypoleucoidesPost />} />
        <Route path="/lichmdb/candelaria-concolor" element={<CandelariaConcolorPost />} />
        <Route path="/lichmdb/cetraria-islandica" element={<CetrariaIslandicaPost />} />
        <Route path="/lichmdb/cladonia-convoluta" element={<CladoniaConvolutaPost />} />
        <Route path="/lichmdb/cladonia-cristatella" element={<CladoniaCristatellaPost />} />
        <Route path="/lichmdb/cladonia-cryptochlorophaea" element={<CladoniaCryptochlorophaeaPost />} />
        <Route path="/lichmdb/cladonia-furcata" element={<CladoniaFurcataPost />} />
        <Route path="/lichmdb/cladonia-macilenta" element={<CladoniaMacilentaPost />} />
        <Route path="/lichmdb/cladonia-mitis" element={<CladoniaMitisPost />} />
        <Route path="/lichmdb/cladonia-rangiferina" element={<CladoniaRangiferinaPost />} />
        <Route path="/lichmdb/cladonia-stellaris" element={<CladoniaStellarisPost />} />
        <Route path="/lichmdb/cladonia-verticillata" element={<CladoniaVerticillataPost />} />
        <Route path="/lichmdb/coniocarpon-cinnabarinum" element={<ConiocarponCinnabarinumPost />} />
        <Route path="/lichmdb/dimelaena-oreina" element={<DimelaenaOreinaPost />} />
        <Route path="/lichmdb/dolichousnea-longissima" element={<DolichousneaLongissimaPost />} />
        <Route path="/lichmdb/evernia-prunastri" element={<EverniaPrunastriPost />} />
        <Route path="/lichmdb/flavoparmelia-caperata" element={<FlavoparmeliaCaperataPost />} />
        <Route path="/lichmdb/flavoparmelia-haysomii" element={<FlavoparmeliaHaysomiiPost />} />
        <Route path="/lichmdb/heterodermia-dissecta" element={<HeterodermiaDissectaPost />} />
        <Route path="/lichmdb/hypogymnia-enteromorpha" element={<HypogymniaEnteromorphaPost />} />
        <Route path="/lichmdb/hypotrachyna-cirrhata" element={<HypotrachynaCirrhataPost />} />
        <Route path="/lichmdb/hypotrachyna-leiophylla" element={<HypotrachynaLeiophyllaPost />} />
        <Route path="/lichmdb/lecanora-frustulosa" element={<LecanoraFrustulosaPost />} />
        <Route path="/lichmdb/lecanora-hybocarpa" element={<LecanoraHybocarpaPost />} />
        <Route path="/lichmdb/lecanora-lividocinerea" element={<LecanoraLividocinereaPost />} />
        <Route path="/lichmdb/leptogium-saturninum" element={<LeptogiumSaturninumPost />} />
        <Route path="/lichmdb/lethariella-cladonioides" element={<LethariellaCladonioidesPost />} />
        <Route path="/lichmdb/lethariella-sernanderi" element={<LethariellaSernanderiPost />} />
        <Route path="/lichmdb/lobaria-pulmonaria" element={<LobariaPulmonariaPost />} />
        <Route path="/lichmdb/lobaria-scrobiculata" element={<LobariaScrobiculataPost />} />
        <Route path="/lichmdb/menegazzia-terebrata" element={<MenegazziaTerebrataPost />} />
        <Route path="/lichmdb/ochrolechia-parella" element={<OchrolechiaParellaPost />} />
        <Route path="/lichmdb/ophioparma-ventosa" element={<OphioparmaVentosaPost />} />
        <Route path="/lichmdb/oxneria-fallax" element={<OxneriaFallaxPost />} />
        <Route path="/lichmdb/parmelia-omphalodes" element={<ParmeliaOmphalodesPost />} />
        <Route path="/lichmdb/parmelia-saxatilis" element={<ParmeliaSaxatilisPost />} />
        <Route path="/lichmdb/parmotrema-nilgherrense" element={<ParmotremaNilgherrensePost />} />
        <Route path="/lichmdb/parmotrema-praesorediosum" element={<ParmotremaPraesorediosumPost />} />
        <Route path="/lichmdb/parmotrema-sancti-angelii" element={<ParmotremaSanctiAngeliiPost />} />
        <Route path="/lichmdb/parmotrema-tinctorum" element={<ParmotremaTinctorumPost />} />
        <Route path="/lichmdb/peltigera-canina" element={<PeltigeraCaninaPost />} />
        <Route path="/lichmdb/peltigera-malacea" element={<PeltigeraMalaceaPost />} />
        <Route path="/lichmdb/peltigera-venosa" element={<PeltigeraVenosaPost />} />
        <Route path="/lichmdb/platismatia-glauca" element={<PlatismatiaGlaucaPost />} />
        <Route path="/lichmdb/pseudocyphellaria-faveolata" element={<PseudocyphellariaFaveolataPost />} />
        <Route path="/lichmdb/pseudocyphellaria-norvegica" element={<PseudocyphellariaNorvegicaPost />} />
        <Route path="/lichmdb/pyrenula-pseudobufonia" element={<PyrenulaPseudobufoniaPost />} />
        <Route path="/lichmdb/ramalina-calicaris" element={<RamalinaCalicarisPost />} />
        <Route path="/lichmdb/ramalina-dilacerata" element={<RamalinaDilacerataPost />} />
        <Route path="/lichmdb/ramalina-farinacea" element={<RamalinaFarinaceaPost />} />
        <Route path="/lichmdb/ramalina-hierrensis" element={<RamalinaHierrensisPost />} />
        <Route path="/lichmdb/ramalina-pollinaria" element={<RamalinaPollinariaPost />} />
        <Route path="/lichmdb/ramalina-siliquosa" element={<RamalinaSiliquosaPost />} />
        <Route path="/lichmdb/ramalina-stenospora" element={<RamalinaStenosporaPost />} />
        <Route path="/lichmdb/ricasolia-amplissima" element={<RicasoliaAmplissimaPost />} />
        <Route path="/lichmdb/roccella-fuciformis" element={<RoccellaFuciformisPost />} />
        <Route path="/lichmdb/roccella-montagnei" element={<RoccellaMontagneiPost />} />
        <Route path="/lichmdb/sphaerophorus-fragilis" element={<SphaerophorusFragilisPost />} />
        <Route path="/lichmdb/stereocaulon-azoreum" element={<StereocaulonAzoreumPost />} />
        <Route path="/lichmdb/stereocaulon-corticatulum" element={<StereocaulonCorticatulumPost />} />
        <Route path="/lichmdb/stereocaulon-japonicum" element={<StereocaulonJaponicumPost />} />
        <Route path="/lichmdb/stereocaulon-paschale" element={<StereocaulonPaschalePost />} />
        <Route path="/lichmdb/stereocaulon-ramulosum" element={<StereocaulonRamulosumPost />} />
        <Route path="/lichmdb/stereocaulon-sasakii" element={<StereocaulonSasakiiPost />} />
        <Route path="/lichmdb/stereocaulon-vesuvianum" element={<StereocaulonVesuvianumPost />} />
        <Route path="/lichmdb/sulcaria-sulcata" element={<SulcariaSulcataPost />} />
        <Route path="/lichmdb/teloschistes-chrysophthalmus" element={<TeloschistesChrysophthalmusPost />} />
        <Route path="/lichmdb/teloschistes-flavicans" element={<TeloschistesFlavicansPost />} />
        <Route path="/lichmdb/umbilicaria-cinereorufescens" element={<UmbilicariaCinereorufescensPost />} />
        <Route path="/lichmdb/umbilicaria-crustulosa" element={<UmbilicariaCrustulosaPost />} />
        <Route path="/lichmdb/umbilicaria-esculenta" element={<UmbilicariaEsculentaPost />} />
        <Route path="/lichmdb/umbilicaria-hypococcinea" element={<UmbilicariaHypococcineaPost />} />
        <Route path="/lichmdb/umbilicaria-polyphylla" element={<UmbilicariaPolyphyllaPost />} />
        <Route path="/lichmdb/umbilicaria-polyphylla1" element={<UmbilicariaPolyphylla1Post />} />
        <Route path="/lichmdb/umbilicaria-proboscidea" element={<UmbilicariaProboscideaPost />} />
        <Route path="/lichmdb/umbilicaria-spodochroa1" element={<UmbilicariaSpodochroa1Post />} />
        <Route path="/lichmdb/umbilicaria-spodochroa" element={<UmbilicariaSpodochroaPost />} />
        <Route path="/lichmdb/usnea-articulata" element={<UsneaArticulataPost />} />
        <Route path="/lichmdb/usnea-florida" element={<UsneaFloridaPost />} />
        <Route path="/lichmdb/usnea-undulata" element={<UsneaUndulataPost />} />
        <Route path="/lichmdb/xanthoparmelia-competita" element={<XanthoparmeliaCompetitaPost />} />
        <Route path="/lichmdb/xalocoa-ocellata" element={<XalocoaOcellataPost />} />
        <Route path="/lichmdb/xanthoparmelia-camtschadalis" element={<XanthoparmeliaCamtschadalisPost />} />
        <Route path="/lichmdb/xanthoparmelia-tinctina" element={<XanthoparmeliaTinctinaPost />} />


        {/* Trichoderma */}
        <Route path="/trichoderma/about" element={<AboutTrichoderma />} />
        <Route path="/trichoderma/adme" element={<ADMEpassPostTrichoderma />} />
        <Route path="/trichoderma/statistics" element={<StatisticsPostTrichoderma />} />
        <Route path="/trichoderma/pharmacological" element={<PharmacologicalPostTrichoderma />} />
        <Route path="/trichoderma/citethisasTmdb" element={<CiteThisAsTmdb />} />
        <Route path="/trichoderma/album" element={<TrichodermaAlbumPost />} />
        <Route path="/trichoderma/applanatum" element={<TrichodermaApplanatumPost />} />
        <Route path="/trichoderma/asperellum" element={<TrichodermaAsperellumPost />} />
        <Route path="/trichoderma/atroviride" element={<TrichodermaAtroviridePost />} />
        <Route path="/trichoderma/aureoviride" element={<TrichodermaAureoviridePost />} />
        <Route path="/trichoderma/avellaneum" element={<TrichodermaAvellaneumPost />} />
        <Route path="/trichoderma/brevicompactum" element={<TrichodermaBrevicompactumPost />} />
        <Route path="/trichoderma/cerinum" element={<TrichodermaCerinumPost />} />
        <Route path="/trichoderma/citrinoviride" element={<TrichodermaCitrinoviridePost />} />
        <Route path="/trichoderma/citrinum" element={<TrichodermaCitrinumPost />} />
        <Route path="/trichoderma/cornudamae" element={<TrichodermaCornuDamaePost />} />
        <Route path="/trichoderma/cremeum" element={<TrichodermaCremeumPost />} />
        <Route path="/trichoderma/crassum" element={<TrichodermaCrassumPost />} />
        <Route path="/trichoderma/deliquescens" element={<TrichodermaDeliquescensPost />} />
        <Route path="/trichoderma/gamsii" element={<TrichodermaGamsiiPost />} />
        <Route path="/trichoderma/hamatum" element={<TrichodermaHamatumPost />} />
        <Route path="/trichoderma/harzianum" element={<TrichodermaHarzianumPost />} />
        <Route path="/trichoderma/hypocreamuroiana" element={<TrichodermaHypocreaMuroianaPost />} />
        <Route path="/trichoderma/hypoxylon" element={<TrichodermaHypoxylonPost />} />
        <Route path="/trichoderma/koningii" element={<TrichodermaKoningiiPost />} />
        <Route path="/trichoderma/koningiopsis" element={<TrichodermaKoningiopsisPost />} />
        <Route path="/trichoderma/longibrachiatum" element={<TrichodermaLongibrachiatumPost />} />
        <Route path="/trichoderma/polysporum" element={<TrichodermaPolysporumPost />} />
        <Route path="/trichoderma/reesei" element={<TrichodermaReeseiPost />} />
        <Route path="/trichoderma/saturnisporum" element={<TrichodermaSaturnisporumPost />} />
        <Route path="/trichoderma/spirale" element={<TrichodermaSpiralePost />} />
        <Route path="/trichoderma/velutinum" element={<TrichodermaVelutinumPost />} />
        <Route path="/trichoderma/virens" element={<TrichodermaVirensPost />} />
        <Route path="/trichoderma/viride" element={<TrichodermaViridePost />} />
        <Route path="/trichoderma/vinosum" element={<TrichodermaVinosumPost />} />        

        {/* FMDB */}
        <Route path="/fmdb/about" element={<AboutFMDB />} />
        <Route path="/fmdb/adme" element={<ADMEpassPostFMDB />} />
        <Route path="/fmdb/statistics" element={<StatisticsPostFMDB />} />
        <Route path="/fmdb/pharmacological" element={<PharmacologicalPostFMDB />} />
        <Route path="/fmdb/actinidia-deliciosa" element={<FMDBPost speciesId="actinidia-deliciosa" />} />
        <Route path="/fmdb/ananas-comosus" element={<FMDBPost speciesId="ananas-comosus" />} />
        <Route path="/fmdb/annona-squamosa" element={<FMDBPost speciesId="annona-squamosa" />} />
        <Route path="/fmdb/artocarpus-heterophyllus" element={<FMDBPost speciesId="artocarpus-heterophyllus" />} />
        <Route path="/fmdb/carica-papaya" element={<FMDBPost speciesId="carica-papaya" />} />
        <Route path="/fmdb/citrus-sinensis" element={<FMDBPost speciesId="citrus-sinensis" />} />
        <Route path="/fmdb/cucumis-melo" element={<FMDBPost speciesId="cucumis-melo" />} />
        <Route path="/fmdb/fragaria-ananassa" element={<FMDBPost speciesId="fragaria-ananassa" />} />
        <Route path="/fmdb/malus-domestica" element={<FMDBPost speciesId="malus-domestica" />} />
        <Route path="/fmdb/mangifera-indica" element={<FMDBPost speciesId="mangifera-indica" />} />
        <Route path="/fmdb/manilkara-zapota" element={<FMDBPost speciesId="manilkara-zapota" />} />
        <Route path="/fmdb/morus-alba" element={<FMDBPost speciesId="morus-alba" />} />
        <Route path="/fmdb/musa-spp" element={<FMDBPost speciesId="musa-spp" />} />
        <Route path="/fmdb/phoenix-dactylifera" element={<FMDBPost speciesId="phoenix-dactylifera" />} />
        <Route path="/fmdb/prunus-avium" element={<FMDBPost speciesId="prunus-avium" />} />
        <Route path="/fmdb/prunus-domestica" element={<FMDBPost speciesId="prunus-domestica" />} />
        <Route path="/fmdb/prunus-persica" element={<FMDBPost speciesId="prunus-persica" />} />
        <Route path="/fmdb/psidium-guajava" element={<FMDBPost speciesId="psidium-guajava" />} />
        <Route path="/fmdb/punica-granatum" element={<FMDBPost speciesId="punica-granatum" />} />
        <Route path="/fmdb/pyrus-communis" element={<FMDBPost speciesId="pyrus-communis" />} />
        <Route path="/fmdb/rubus-idaeus" element={<FMDBPost speciesId="rubus-idaeus" />} />
        <Route path="/fmdb/selenicereus-undatus" element={<FMDBPost speciesId="selenicereus-undatus" />} />
        <Route path="/fmdb/syzygium-cumini" element={<FMDBPost speciesId="syzygium-cumini" />} />
        <Route path="/fmdb/vitis-vinifera" element={<FMDBPost speciesId="vitis-vinifera" />} />
        <Route path="/fmdb/ziziphus-mauritiana" element={<FMDBPost speciesId="ziziphus-mauritiana" />} />

        {/* GMDB */}
        <Route path="/gmdb/about" element={<AboutGMDB />} />
        <Route path="/gmdb/adme" element={<ADMEpassPostGMDB />} />
        <Route path="/gmdb/statistics" element={<StatisticsPostGMDB />} />
        <Route path="/gmdb/pharmacological" element={<PharmacologicalPostGMDB />} />
        <Route path="/gmdb/toxicityPrediction" element={<ToxicityPredictionPostGMDB />} />
        <Route path="/gmdb/abies-pindrow" element={<GMDBPost speciesId="abies-pindrow" />} />
        <Route path="/gmdb/abies-sachalinensis" element={<GMDBPost speciesId="abies-sachalinensis" />} />
        <Route path="/gmdb/agathis-alba" element={<GMDBPost speciesId="agathis-alba" />} />
        <Route path="/gmdb/agathis-dammara" element={<GMDBPost speciesId="agathis-dammara" />} />
        <Route path="/gmdb/agathis-palmerstonii" element={<GMDBPost speciesId="agathis-palmerstonii" />} />
        <Route path="/gmdb/araucaria-columnaris" element={<GMDBPost speciesId="araucaria-columnaris" />} />
        <Route path="/gmdb/calocedrus-macrolepis" element={<GMDBPost speciesId="calocedrus-macrolepis" />} />
        <Route path="/gmdb/cedrus-deodara" element={<GMDBPost speciesId="cedrus-deodara" />} />
        <Route path="/gmdb/chamaecyparis-lawsoniana" element={<GMDBPost speciesId="chamaecyparis-lawsoniana" />} />
        <Route path="/gmdb/cycas-beddomei" element={<GMDBPost speciesId="cycas-beddomei" />} />
        <Route path="/gmdb/cycas-circinalis" element={<GMDBPost speciesId="cycas-circinalis" />} />
        <Route path="/gmdb/cycas-revoluta" element={<GMDBPost speciesId="cycas-revoluta" />} />
        <Route path="/gmdb/ephedra-distachya" element={<GMDBPost speciesId="ephedra-distachya" />} />
        <Route path="/gmdb/ephedra-equisetina" element={<GMDBPost speciesId="ephedra-equisetina" />} />
        <Route path="/gmdb/ephedra-gerardiana" element={<GMDBPost speciesId="ephedra-gerardiana" />} />
        <Route path="/gmdb/ephedra-intermedia" element={<GMDBPost speciesId="ephedra-intermedia" />} />
        <Route path="/gmdb/ephedra-likiangensis" element={<GMDBPost speciesId="ephedra-likiangensis" />} />
        <Route path="/gmdb/ephedra-lomatolepis" element={<GMDBPost speciesId="ephedra-lomatolepis" />} />
        <Route path="/gmdb/ephedra-minuta" element={<GMDBPost speciesId="ephedra-minuta" />} />
        <Route path="/gmdb/ephedra-monosperma" element={<GMDBPost speciesId="ephedra-monosperma" />} />
        <Route path="/gmdb/ephedra-sinica" element={<GMDBPost speciesId="ephedra-sinica" />} />
        <Route path="/gmdb/ephedra-regeliana" element={<GMDBPost speciesId="ephedra-regeliana" />} />
        <Route path="/gmdb/ginkgo-biloba" element={<GMDBPost speciesId="ginkgo-biloba" />} />
        <Route path="/gmdb/juniperus-communis" element={<GMDBPost speciesId="juniperus-communis" />} />
        <Route path="/gmdb/picea-smithiana" element={<GMDBPost speciesId="picea-smithiana" />} />
        <Route path="/gmdb/pinus-armandii" element={<GMDBPost speciesId="pinus-armandii" />} />
        <Route path="/gmdb/pinus-densiflora" element={<GMDBPost speciesId="pinus-densiflora" />} />
        <Route path="/gmdb/pinus-edulis" element={<GMDBPost speciesId="pinus-edulis" />} />
        <Route path="/gmdb/pinus-elliottii" element={<GMDBPost speciesId="pinus-elliottii" />} />
        <Route path="/gmdb/pinus-flexilis" element={<GMDBPost speciesId="pinus-flexilis" />} />
        <Route path="/gmdb/pinus-heldreichii" element={<GMDBPost speciesId="pinus-heldreichii" />} />
        <Route path="/gmdb/pinus-luchuensis" element={<GMDBPost speciesId="pinus-luchuensis" />} />
        <Route path="/gmdb/pinus-monophylla" element={<GMDBPost speciesId="pinus-monophylla" />} />
        <Route path="/gmdb/pinus-montezumae" element={<GMDBPost speciesId="pinus-montezumae" />} />
        <Route path="/gmdb/pinus-monticola" element={<GMDBPost speciesId="pinus-monticola" />} />
        <Route path="/gmdb/pinus-nigra" element={<GMDBPost speciesId="pinus-nigra" />} />
        <Route path="/gmdb/pinus-palustris" element={<GMDBPost speciesId="pinus-palustris" />} />
        <Route path="/gmdb/pinus-pinea" element={<GMDBPost speciesId="pinus-pinea" />} />
        <Route path="/gmdb/pinus-ponderosa" element={<GMDBPost speciesId="pinus-ponderosa" />} />
        <Route path="/gmdb/pinus-pumila" element={<GMDBPost speciesId="pinus-pumila" />} />
        <Route path="/gmdb/pinus-radiata" element={<GMDBPost speciesId="pinus-radiata" />} />
        <Route path="/gmdb/pinus-resinosa" element={<GMDBPost speciesId="pinus-resinosa" />} />
        <Route path="/gmdb/pinus-sibirica" element={<GMDBPost speciesId="pinus-sibirica" />} />
        <Route path="/gmdb/pinus-strobus" element={<GMDBPost speciesId="pinus-strobus" />} />
        <Route path="/gmdb/pinus-sylvestris" element={<GMDBPost speciesId="pinus-sylvestris" />} />
        <Route path="/gmdb/pinus-taeda" element={<GMDBPost speciesId="pinus-taeda" />} />
        <Route path="/gmdb/pinus-yunnanensis" element={<GMDBPost speciesId="pinus-yunnanensis" />} />
        <Route path="/gmdb/platycladus-orientalis" element={<GMDBPost speciesId="platycladus-orientalis" />} />
        <Route path="/gmdb/sequoia-sempervirens" element={<GMDBPost speciesId="sequoia-sempervirens" />} />
        <Route path="/gmdb/taiwania-cryptomerioides" element={<GMDBPost speciesId="taiwania-cryptomerioides" />} />
        <Route path="/gmdb/taxus-baccata" element={<GMDBPost speciesId="taxus-baccata" />} />
        <Route path="/gmdb/taxus-brevifolia" element={<GMDBPost speciesId="taxus-brevifolia" />} />
        <Route path="/gmdb/taxus-canadensis" element={<GMDBPost speciesId="taxus-canadensis" />} />
        <Route path="/gmdb/taxus-cuspidata" element={<GMDBPost speciesId="taxus-cuspidata" />} />
        <Route path="/gmdb/taxus-mairei" element={<GMDBPost speciesId="taxus-mairei" />} />
        <Route path="/gmdb/taxus-sumatrana" element={<GMDBPost speciesId="taxus-sumatrana" />} />
        <Route path="/gmdb/taxus-wallichiana" element={<GMDBPost speciesId="taxus-wallichiana" />} />
        <Route path="/gmdb/tetraclinis-articulata" element={<GMDBPost speciesId="tetraclinis-articulata" />} />
        <Route path="/gmdb/thuja-occidentalis" element={<GMDBPost speciesId="thuja-occidentalis" />} />
        <Route path="/gmdb/thuja-standishii" element={<GMDBPost speciesId="thuja-standishii" />} />
        <Route path="/gmdb/thuja-plicata" element={<GMDBPost speciesId="thuja-plicata" />} />

        {/* DMDB */}
        <Route path="/LeSeMeDa/about" element={<AboutDMDB />} />
        <Route path="/LeSeMeDa/adme" element={<ADMEpassPostDMDB />} />
        <Route path="/LeSeMeDa/statistics" element={<StatisticsPostDMDB />} />
        <Route path="/LeSeMeDa/pharmacological" element={<PharmacologicalPostDMDB />} />
        <Route path="/LeSeMeDa/pharmacologyBiological" element={<PharmacologyBiologicalDMDB />} />
        <Route path="/LeSeMeDa/pharmacologyCereal" element={<PharmacologyCerealDMDB />} />
        <Route path="/LeSeMeDa/pharmacologyPlant" element={<PharmacologyPlantDMDB />} />
        <Route path="/LeSeMeDa/phaseolus-vulgaris" element={<DMDBPost speciesId="phaseolus-vulgaris" />} />
        <Route path="/LeSeMeDa/cassia-fistula" element={<DMDBPost speciesId="cassia-fistula" />} />
        <Route path="/LeSeMeDa/vigna-radiata" element={<DMDBPost speciesId="vigna-radiata" />} />
        <Route path="/LeSeMeDa/cicer-arietinum" element={<DMDBPost speciesId="cicer-arietinum" />} />
        <Route path="/LeSeMeDa/vigna-aconitifolia" element={<DMDBPost speciesId="vigna-aconitifolia" />} />
        <Route path="/LeSeMeDa/vigna-mungo" element={<DMDBPost speciesId="vigna-mungo" />} />
        <Route path="/LeSeMeDa/vigna-angularis" element={<DMDBPost speciesId="vigna-angularis" />} />
        <Route path="/LeSeMeDa/lens-culinaris" element={<DMDBPost speciesId="lens-culinaris" />} />
        <Route path="/LeSeMeDa/vicia-faba" element={<DMDBPost speciesId="vicia-faba" />} />
        <Route path="/LeSeMeDa/phaseolus-lunatus" element={<DMDBPost speciesId="phaseolus-lunatus" />} />
        <Route path="/LeSeMeDa/vigna-unguiculata" element={<DMDBPost speciesId="vigna-unguiculata" />} />
        <Route path="/LeSeMeDa/pisum-sativum" element={<DMDBPost speciesId="pisum-sativum" />} />
        <Route path="/LeSeMeDa/cajanus-cajan" element={<DMDBPost speciesId="cajanus-cajan" />} />
        <Route path="/LeSeMeDa/lablab-purpureus" element={<DMDBPost speciesId="lablab-purpureus" />} />
        <Route path="/LeSeMeDa/macrotyloma-uniflorum" element={<DMDBPost speciesId="macrotyloma-uniflorum" />} />
        <Route path="/LeSeMeDa/mucuna-pruriens" element={<DMDBPost speciesId="mucuna-pruriens" />} />
        <Route path="/LeSeMeDa/leucaena-leucocephala" element={<DMDBPost speciesId="leucaena-leucocephala" />} />
        <Route path="/LeSeMeDa/psophocarpus-tetragonolobus" element={<DMDBPost speciesId="psophocarpus-tetragonolobus" />} />
        <Route path="/LeSeMeDa/vicia-sativa-subsp-nigra" element={<DMDBPost speciesId="vicia-sativa-subsp-nigra" />} />
        <Route path="/LeSeMeDa/lathyrus-sativus" element={<DMDBPost speciesId="lathyrus-sativus" />} />
        <Route path="/LeSeMeDa/melilotus-albus" element={<DMDBPost speciesId="melilotus-albus" />} />
        <Route path="/LeSeMeDa/melilotus-indicus" element={<DMDBPost speciesId="melilotus-indicus" />} />
        <Route path="/LeSeMeDa/melilotus-officinalis" element={<DMDBPost speciesId="melilotus-officinalis" />} />
        <Route path="/LeSeMeDa/clitoria-ternatea" element={<DMDBPost speciesId="clitoria-ternatea" />} />
        <Route path="/LeSeMeDa/indigofera-tinctoria" element={<DMDBPost speciesId="indigofera-tinctoria" />} />
        <Route path="/LeSeMeDa/vachellia-nilotica" element={<DMDBPost speciesId="vachellia-nilotica" />} />
        <Route path="/LeSeMeDa/butea-monosperma" element={<DMDBPost speciesId="butea-monosperma" />} />
        <Route path="/LeSeMeDa/trifolium-alexandrinum" element={<DMDBPost speciesId="trifolium-alexandrinum" />} />
        <Route path="/LeSeMeDa/glycyrrhiza-glabra" element={<DMDBPost speciesId="glycyrrhiza-glabra" />} />
        <Route path="/LeSeMeDa/trifolium-repens" element={<DMDBPost speciesId="trifolium-repens" />} />
        <Route path="/LeSeMeDa/dalbergia-sissoo" element={<DMDBPost speciesId="dalbergia-sissoo" />} />
        <Route path="/LeSeMeDa/pterocarpus-santalinus" element={<DMDBPost speciesId="pterocarpus-santalinus" />} />
        <Route path="/LeSeMeDa/cullen-corylifolium" element={<DMDBPost speciesId="cullen-corylifolium" />} />
        <Route path="/LeSeMeDa/medicago-sativa" element={<DMDBPost speciesId="medicago-sativa" />} />
      </Routes>
      <FooterCom />
    </BrowserRouter>
  );
}

