import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import taxonomy from '../fmdb.js'
// import logo from '../Image/logo.png'

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSmdbMobileOpen, setIsSmdbMobileOpen] = useState(false);
  const [isSpicesMobileOpen, setIsSpicesMobileOpen] = useState(false);
  const [isSpices1MobileOpen, setIsSpices1MobileOpen] = useState(false);
  const [isSpices2MobileOpen, setIsSpices2MobileOpen] = useState(false);
  const [isCmdbMobileOpen, setIsCmdbMobileOpen] = useState(false);
  const [isCerealsMobileOpen, setIsCerealsMobileOpen] = useState(false);
  const [isLmdbMobileOpen, setIsLmdbMobileOpen] = useState(false);
  const [isLichensMobileOpen, setIsLichensMobileOpen] = useState(false);
  const [isLichens1MobileOpen, setIsLichens1MobileOpen] = useState(false);
  const [isLichens2MobileOpen, setIsLichens2MobileOpen] = useState(false);
  const [isLichens3MobileOpen, setIsLichens3MobileOpen] = useState(false);
  const [isLichens4MobileOpen, setIsLichens4MobileOpen] = useState(false);
  const [isLichens5MobileOpen, setIsLichens5MobileOpen] = useState(false);
  const [isTrichodermaMobileOpen, setIsTrichodermaMobileOpen] = useState(false);
  const [isTrichoderma1MobileOpen, setIsTrichoderma1MobileOpen] = useState(false);
  const [isTrichoderma2MobileOpen, setIsTrichoderma2MobileOpen] = useState(false);
  const [isInfoMobileOpen, setIsInfoMobileOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  function slugify(value) {
    return String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }
  const fmdbFruitFiles = Object.entries(taxonomy).map(([key, v]) => ({
    name: v.scientificName,
    category: 'FMDB',
    path: `/fmdb/${slugify(v.scientificName)}`
  }));

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  // Function to close all mobile menus when a link is clicked
  const closeAllMenus = () => {
    setIsMobileOpen(false);
    setIsSmdbMobileOpen(false);
    setIsSpicesMobileOpen(false);
    setIsSpices1MobileOpen(false);
    setIsSpices2MobileOpen(false);
    setIsCmdbMobileOpen(false);
    setIsCerealsMobileOpen(false);
    setIsLmdbMobileOpen(false);
    setIsLichensMobileOpen(false);
    setIsLichens1MobileOpen(false);
    setIsLichens2MobileOpen(false);
    setIsLichens3MobileOpen(false);
    setIsLichens4MobileOpen(false);
    setIsLichens5MobileOpen(false);
    setIsTrichodermaMobileOpen(false);
    setIsTrichoderma1MobileOpen(false);
    setIsTrichoderma2MobileOpen(false);
    setIsInfoMobileOpen(false);
  };

  const handleSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const allFiles = [
      // Spices1 files
      { name: 'Alkanna tinktoria', category: 'Spices1', path: '/smdb/ratanjot' },
      { name: 'Cinnamomum tamala', category: 'Spices1', path: '/smdb/tezpatta' },
      { name: 'Cinnamomum verum', category: 'Spices1', path: '/smdb/dalchini' },
      { name: 'Coriandrum sativum', category: 'Spices1', path: '/smdb/dhaniya' },
      { name: 'Crocus sativus', category: 'Spices1', path: '/smdb/kesar' },
      { name: 'Cuminum cyminum', category: 'Spices1', path: '/smdb/jeera' },
      { name: 'Curcuma longa', category: 'Spices1', path: '/smdb/haldi' },
      { name: 'Elettaria cardamomum', category: 'Spices1', path: '/smdb/elayachi' },
      { name: 'Ferula assafoetida', category: 'Spices1', path: '/smdb/hing' },
      { name: 'Mentha spicata', category: 'Spices1', path: '/smdb/pudina' },
      { name: 'Murraya koengii', category: 'Spices1', path: '/smdb/currypatta' },
      { name: 'Myristica fragrans', category: 'Spices1', path: '/smdb/javitri' },
      { name: 'Nigella sativa', category: 'Spices1', path: '/smdb/kalonji' },
      { name: 'Piper nigrum', category: 'Spices1', path: '/smdb/kalimirch' },
      { name: 'Syzygium aromaticum', category: 'Spices1', path: '/smdb/loung' },
      { name: 'Trachyspermum ammi', category: 'Spices1', path: '/smdb/ajwain' },
      { name: 'Zingiber officinale', category: 'Spices1', path: '/smdb/adrak' },
      // Spices2 files
      { name: 'Anthriscus cerefolium', category: 'Spices2', path: '/smdb/anthriscus-cerefolium' },
      { name: 'Apium graveolens', category: 'Spices2', path: '/smdb/apium-graveolens' },
      { name: 'Armoracia rusticana', category: 'Spices2', path: '/smdb/armoracia-rusticana' },
      { name: 'Brassica juncea', category: 'Spices2', path: '/smdb/brassica-juncea' },
      { name: 'Capparis spinosa', category: 'Spices2', path: '/smdb/capparis-spinosa' },
      { name: 'Capsicum annuum', category: 'Spices2', path: '/smdb/capsicum-annuum' },
      { name: 'Dracocephalum officinale', category: 'Spices2', path: '/smdb/dracocephalum-officinale' },
      { name: 'Foeniculum vulgare', category: 'Spices2', path: '/smdb/foeniculum-vulgare' },
      { name: 'Illicium verum', category: 'Spices2', path: '/smdb/illicium-verum' },
      { name: 'Laurus nobilis', category: 'Spices2', path: '/smdb/laurus-nobilis' },
      { name: 'Levisticum officinale', category: 'Spices2', path: '/smdb/levisticum-officinale' },
      { name: 'Mangifera indica', category: 'Spices2', path: '/smdb/mangifera-indica' },
      { name: 'Ocimum basilicum', category: 'Spices2', path: '/smdb/ocimum-basilicum' },
      { name: 'Papaver somniferum', category: 'Spices2', path: '/smdb/papaver-somniferum' },
      { name: 'Pimpinella anisum', category: 'Spices2', path: '/smdb/pimpinella-anisum' },
      { name: 'Punica granatum', category: 'Spices2', path: '/smdb/punica-granatum' },
      { name: 'Salvia rosmarinus', category: 'Spices2', path: '/smdb/salvia-rosmarinus' },
      { name: 'Satureja hortensis', category: 'Spices2', path: '/smdb/satureja-hortensis' },
      { name: 'Sesamum indicum', category: 'Spices2', path: '/smdb/sesamum-indicum' },
      { name: 'Tamarindus indica', category: 'Spices2', path: '/smdb/tamarindus-indica' },
      { name: 'Thymus vulgaris', category: 'Spices2', path: '/smdb/thymus-vulgaris' },
      // Trichoderma files
      { name: 'Trichoderma album', category: 'Trichoderma', path: '/trichoderma/album' },
      { name: 'Trichoderma applanatum', category: 'Trichoderma', path: '/trichoderma/applanatum' },
      { name: 'Trichoderma asperellum', category: 'Trichoderma', path: '/trichoderma/asperellum' },
      { name: 'Trichoderma atroviride', category: 'Trichoderma', path: '/trichoderma/atroviride' },
      { name: 'Trichoderma aureoviride', category: 'Trichoderma', path: '/trichoderma/aureoviride' },
      { name: 'Trichoderma avellaneum', category: 'Trichoderma', path: '/trichoderma/avellaneum' },
      { name: 'Trichoderma brevicompactum', category: 'Trichoderma', path: '/trichoderma/brevicompactum' },
      { name: 'Trichoderma cerinum', category: 'Trichoderma', path: '/trichoderma/cerinum' },
      { name: 'Trichoderma citrinoviride', category: 'Trichoderma', path: '/trichoderma/citrinoviride' },
      { name: 'Trichoderma citrinum', category: 'Trichoderma', path: '/trichoderma/citrinum' },
      { name: 'Trichoderma cornudamae', category: 'Trichoderma', path: '/trichoderma/cornudamae' },
      { name: 'Trichoderma crassum', category: 'Trichoderma', path: '/trichoderma/crassum' },
      { name: 'Trichoderma cremeum', category: 'Trichoderma', path: '/trichoderma/cremeum' },
      { name: 'Trichoderma deliquescens', category: 'Trichoderma', path: '/trichoderma/deliquescens' },
      { name: 'Trichoderma gamsii', category: 'Trichoderma', path: '/trichoderma/gamsii' },
      { name: 'Trichoderma hamatum', category: 'Trichoderma', path: '/trichoderma/hamatum' },
      { name: 'Trichoderma harzianum', category: 'Trichoderma', path: '/trichoderma/harzianum' },
      { name: 'Trichoderma hypocreamuroiana', category: 'Trichoderma', path: '/trichoderma/hypocreamuroiana' },
      { name: 'Trichoderma hypoxylon', category: 'Trichoderma', path: '/trichoderma/hypoxylon' },
      { name: 'Trichoderma koningii', category: 'Trichoderma', path: '/trichoderma/koningii' },
      { name: 'Trichoderma koningiopsis', category: 'Trichoderma', path: '/trichoderma/koningiopsis' },
      { name: 'Trichoderma longibrachiatum', category: 'Trichoderma', path: '/trichoderma/longibrachiatum' },
      { name: 'Trichoderma polysporum', category: 'Trichoderma', path: '/trichoderma/polysporum' },
      { name: 'Trichoderma reesei', category: 'Trichoderma', path: '/trichoderma/reesei' },
      { name: 'Trichoderma saturnisporum', category: 'Trichoderma', path: '/trichoderma/saturnisporum' },
      { name: 'Trichoderma spirale', category: 'Trichoderma', path: '/trichoderma/spirale' },
      { name: 'Trichoderma velutinum', category: 'Trichoderma', path: '/trichoderma/velutinum' },
      { name: 'Trichoderma virens', category: 'Trichoderma', path: '/trichoderma/virens' },
      { name: 'Trichoderma viride', category: 'Trichoderma', path: '/trichoderma/viride' },
      { name: 'Trichoderma vinosum', category: 'Trichoderma', path: '/trichoderma/vinosum' },
      // Cereals files
      { name: 'Wheat', category: 'Cereals', path: '/Cereals/wheat' },
      { name: 'Rice', category: 'Cereals', path: '/Cereals/rice' },
      { name: 'Sorghum', category: 'Cereals', path: '/Cereals/sorghum' },
      { name: 'Ragi', category: 'Cereals', path: '/Cereals/ragi' },
      { name: 'Barley', category: 'Cereals', path: '/Cereals/barley' },
      { name: 'Maize', category: 'Cereals', path: '/Cereals/maize' },
      { name: 'Bajra', category: 'Cereals', path: '/Cereals/bajra' },
      // LMDb files
      { name: 'Alectoria ochroleuca', category: 'LMDb', path: '/lichmdb/alectoria-ochroleuca' },
      { name: 'Alectoria sarmentosa', category: 'LMDb', path: '/lichmdb/alectoria-sarmentosa' },
      { name: 'Anzia hypoleucoides', category: 'LMDb', path: '/lichmdb/anzia-hypoleucoides' },
      { name: 'Candelaria concolor', category: 'LMDb', path: '/lichmdb/candelaria-concolor' },
      { name: 'Cetraria islandica', category: 'LMDb', path: '/lichmdb/cetraria-islandica' },
      { name: 'Cladonia convoluta', category: 'LMDb', path: '/lichmdb/cladonia-convoluta' },
      { name: 'Cladonia cristatella', category: 'LMDb', path: '/lichmdb/cladonia-cristatella' },
      { name: 'Cladonia cryptochlorophaea', category: 'LMDb', path: '/lichmdb/cladonia-cryptochlorophaea' },
      { name: 'Cladonia furcata', category: 'LMDb', path: '/lichmdb/cladonia-furcata' },
      { name: 'Cladonia macilenta', category: 'LMDb', path: '/lichmdb/cladonia-macilenta' },
      { name: 'Cladonia mitis', category: 'LMDb', path: '/lichmdb/cladonia-mitis' },
      { name: 'Cladonia rangiferina', category: 'LMDb', path: '/lichmdb/cladonia-rangiferina' },
      { name: 'Cladonia stellaris', category: 'LMDb', path: '/lichmdb/cladonia-stellaris' },
      { name: 'Cladonia verticillata', category: 'LMDb', path: '/lichmdb/cladonia-verticillata' },
      { name: 'Coniocarpon cinnabarinum', category: 'LMDb', path: '/lichmdb/coniocarpon-cinnabarinum' },
      { name: 'Dimelaena oreina', category: 'LMDb', path: '/lichmdb/dimelaena-oreina' },
      { name: 'Dolichousnea longissima', category: 'LMDb', path: '/lichmdb/dolichousnea-longissima' },
      { name: 'Evernia prunastri', category: 'LMDb', path: '/lichmdb/evernia-prunastri' },
      { name: 'Flavoparmelia caperata', category: 'LMDb', path: '/lichmdb/flavoparmelia-caperata' },
      { name: 'Flavoparmelia haysomii', category: 'LMDb', path: '/lichmdb/flavoparmelia-haysomii' },
      { name: 'Heterodermia dissecta', category: 'LMDb', path: '/lichmdb/heterodermia-dissecta' },
      { name: 'Hypogymnia enteromorpha', category: 'LMDb', path: '/lichmdb/hypogymnia-enteromorpha' },
      { name: 'Hypotrachyna cirrhata', category: 'LMDb', path: '/lichmdb/hypotrachyna-cirrhata' },
      { name: 'Hypotrachyna leiophylla', category: 'LMDb', path: '/lichmdb/hypotrachyna-leiophylla' },
      { name: 'Lecanora frustulosa', category: 'LMDb', path: '/lichmdb/lecanora-frustulosa' },
      { name: 'Lecanora hybocarpa', category: 'LMDb', path: '/lichmdb/lecanora-hybocarpa' },
      { name: 'Lecanora lividocinerea', category: 'LMDb', path: '/lichmdb/lecanora-lividocinerea' },
      { name: 'Leptogium saturninum', category: 'LMDb', path: '/lichmdb/leptogium-saturninum' },
      { name: 'Lethariella cladonioides', category: 'LMDb', path: '/lichmdb/lethariella-cladonioides' },
      { name: 'Lethariella sernanderi', category: 'LMDb', path: '/lichmdb/lethariella-sernanderi' },
      { name: 'Lobaria pulmonaria', category: 'LMDb', path: '/lichmdb/lobaria-pulmonaria' },
      { name: 'Lobaria scrobiculata', category: 'LMDb', path: '/lichmdb/lobaria-scrobiculata' },
      { name: 'Menegazzia terebrata', category: 'LMDb', path: '/lichmdb/menegazzia-terebrata' },
      { name: 'Ochrolechia parella', category: 'LMDb', path: '/lichmdb/ochrolechia-parella' },
      { name: 'Ophioparma ventosa', category: 'LMDb', path: '/lichmdb/ophioparma-ventosa' },
      { name: 'Oxneria fallax', category: 'LMDb', path: '/lichmdb/oxneria-fallax' },
      { name: 'Parmelia omphalodes', category: 'LMDb', path: '/lichmdb/parmelia-omphalodes' },
      { name: 'Parmelia saxatilis', category: 'LMDb', path: '/lichmdb/parmelia-saxatilis' },
      { name: 'Parmotrema nilgherrense', category: 'LMDb', path: '/lichmdb/parmotrema-nilgherrense' },
      { name: 'Parmotrema praesorediosum', category: 'LMDb', path: '/lichmdb/parmotrema-praesorediosum' },
      { name: 'Parmotrema sancti-angelii', category: 'LMDb', path: '/lichmdb/parmotrema-sancti-angelii' },
      { name: 'Parmotrema tinctorum', category: 'LMDb', path: '/lichmdb/parmotrema-tinctorum' },
      { name: 'Peltigera canina', category: 'LMDb', path: '/lichmdb/peltigera-canina' },
      { name: 'Peltigera malacea', category: 'LMDb', path: '/lichmdb/peltigera-malacea' },
      { name: 'Peltigera venosa', category: 'LMDb', path: '/lichmdb/peltigera-venosa' },
      { name: 'Platismatia glauca', category: 'LMDb', path: '/lichmdb/platismatia-glauca' },
      { name: 'Pseudocyphellaria faveolata', category: 'LMDb', path: '/lichmdb/pseudocyphellaria-faveolata' },
      { name: 'Pseudocyphellaria norvegica', category: 'LMDb', path: '/lichmdb/pseudocyphellaria-norvegica' },
      { name: 'Pyrenula pseudobufonia', category: 'LMDb', path: '/lichmdb/pyrenula-pseudobufonia' },
      { name: 'Ramalina calicaris', category: 'LMDb', path: '/lichmdb/ramalina-calicaris' },
      { name: 'Ramalina dilacerata', category: 'LMDb', path: '/lichmdb/ramalina-dilacerata' },
      { name: 'Ramalina farinacea', category: 'LMDb', path: '/lichmdb/ramalina-farinacea' },
      { name: 'Ramalina hierrensis', category: 'LMDb', path: '/lichmdb/ramalina-hierrensis' },
      { name: 'Ramalina pollinaria', category: 'LMDb', path: '/lichmdb/ramalina-pollinaria' },
      { name: 'Ramalina siliquosa', category: 'LMDb', path: '/lichmdb/ramalina-siliquosa' },
      { name: 'Ramalina stenospora', category: 'LMDb', path: '/lichmdb/ramalina-stenospora' },
      { name: 'Ricasolia amplissima', category: 'LMDb', path: '/lichmdb/ricasolia-amplissima' },
      { name: 'Roccella fuciformis', category: 'LMDb', path: '/lichmdb/roccella-fuciformis' },
      { name: 'Roccella montagnei', category: 'LMDb', path: '/lichmdb/roccella-montagnei' },
      { name: 'Sphaerophorus fragilis', category: 'LMDb', path: '/lichmdb/sphaerophorus-fragilis' },
      { name: 'Stereocaulon azoreum', category: 'LMDb', path: '/lichmdb/stereocaulon-azoreum' },
      { name: 'Stereocaulon corticatulum', category: 'LMDb', path: '/lichmdb/stereocaulon-corticatulum' },
      { name: 'Stereocaulon japonicum', category: 'LMDb', path: '/lichmdb/stereocaulon-japonicum' },
      { name: 'Stereocaulon paschale', category: 'LMDb', path: '/lichmdb/stereocaulon-paschale' },
      { name: 'Stereocaulon ramulosum', category: 'LMDb', path: '/lichmdb/stereocaulon-ramulosum' },
      { name: 'Stereocaulon sasakii', category: 'LMDb', path: '/lichmdb/stereocaulon-sasakii' },
      { name: 'Stereocaulon vesuvianum', category: 'LMDb', path: '/lichmdb/stereocaulon-vesuvianum' },
      { name: 'Sulcaria sulcata', category: 'LMDb', path: '/lichmdb/sulcaria-sulcata' },
      { name: 'Teloschistes chrysophthalmus', category: 'LMDb', path: '/lichmdb/teloschistes-chrysophthalmus' },
      { name: 'Teloschistes flavicans', category: 'LMDb', path: '/lichmdb/teloschistes-flavicans' },
      { name: 'Umbilicaria cinereorufescens', category: 'LMDb', path: '/lichmdb/umbilicaria-cinereorufescens' },
      { name: 'Umbilicaria crustulosa', category: 'LMDb', path: '/lichmdb/umbilicaria-crustulosa' },
      { name: 'Umbilicaria esculenta', category: 'LMDb', path: '/lichmdb/umbilicaria-esculenta' },
      { name: 'Umbilicaria hypococcinea', category: 'LMDb', path: '/lichmdb/umbilicaria-hypococcinea' },
      { name: 'Umbilicaria polyphylla', category: 'LMDb', path: '/lichmdb/umbilicaria-polyphylla' },
      { name: 'Umbilicaria proboscidea', category: 'LMDb', path: '/lichmdb/umbilicaria-proboscidea' },
      { name: 'Umbilicaria spodochroa', category: 'LMDb', path: '/lichmdb/umbilicaria-spodochroa' },
      { name: 'Usnea articulata', category: 'LMDb', path: '/lichmdb/usnea-articulata' },
      { name: 'Usnea florida', category: 'LMDb', path: '/lichmdb/usnea-florida' },
      { name: 'Usnea undulata', category: 'LMDb', path: '/lichmdb/usnea-undulata' },
      { name: 'Xalocoa ocellata', category: 'LMDb', path: '/lichmdb/xalocoa-ocellata' },
      { name: 'Xanthoparmelia camtschadalis', category: 'LMDb', path: '/lichmdb/xanthoparmelia-camtschadalis' },
      { name: 'Xanthoparmelia tinctina', category: 'LMDb', path: '/lichmdb/xanthoparmelia-tinctina' },
      

      // GMDB files
      // { name: 'GMDB About', category: 'GMDB', path: '/gmdb/about' },
      // { name: 'GMDB ADME', category: 'GMDB', path: '/gmdb/adme' },
      // { name: 'GMDB Statistics', category: 'GMDB', path: '/gmdb/statistics' },
      // { name: 'GMDB Pharmacological', category: 'GMDB', path: '/gmdb/pharmacological' },
      // { name: 'Abies pindrow', category: 'GMDB', path: '/gmdb/abies-pindrow' },
      // { name: 'Abies sachalinensis', category: 'GMDB', path: '/gmdb/abies-sachalinensis' },
      // { name: 'Agathis alba', category: 'GMDB', path: '/gmdb/agathis-alba' },
      // { name: 'Agathis dammara', category: 'GMDB', path: '/gmdb/agathis-dammara' },
      // { name: 'Agathis palmerstonii', category: 'GMDB', path: '/gmdb/agathis-palmerstonii' },
      // { name: 'Araucaria columnaris', category: 'GMDB', path: '/gmdb/araucaria-columnaris' },
      // { name: 'Calocedrus macrolepis', category: 'GMDB', path: '/gmdb/calocedrus-macrolepis' },
      // { name: 'Cedrus deodara', category: 'GMDB', path: '/gmdb/cedrus-deodara' },
      // { name: 'Chamaecyparis lawsoniana', category: 'GMDB', path: '/gmdb/chamaecyparis-lawsoniana' },
      // { name: 'Cycas beddomei', category: 'GMDB', path: '/gmdb/cycas-beddomei' },
      // { name: 'Cycas circinalis', category: 'GMDB', path: '/gmdb/cycas-circinalis' },
      // { name: 'Cycas revoluta', category: 'GMDB', path: '/gmdb/cycas-revoluta' },
      // { name: 'Ephedra distachya', category: 'GMDB', path: '/gmdb/ephedra-distachya' },
      // { name: 'Ephedra equisetina', category: 'GMDB', path: '/gmdb/ephedra-equisetina' },
      // { name: 'Ephedra gerardiana', category: 'GMDB', path: '/gmdb/ephedra-gerardiana' },
      // { name: 'Ephedra intermedia', category: 'GMDB', path: '/gmdb/ephedra-intermedia' },
      // { name: 'Ephedra likiangensis', category: 'GMDB', path: '/gmdb/ephedra-likiangensis' },
      // { name: 'Ephedra lomatolepis', category: 'GMDB', path: '/gmdb/ephedra-lomatolepis' },
      // { name: 'Ephedra minuta', category: 'GMDB', path: '/gmdb/ephedra-minuta' },
      // { name: 'Ephedra monosperma', category: 'GMDB', path: '/gmdb/ephedra-monosperma' },
      // { name: 'Ephedra sinica', category: 'GMDB', path: '/gmdb/ephedra-sinica' },
      // { name: 'Ephedra regeliana', category: 'GMDB', path: '/gmdb/ephedra-regeliana' },
      // { name: 'Ginkgo biloba', category: 'GMDB', path: '/gmdb/ginkgo-biloba' },
      // { name: 'Juniperus communis', category: 'GMDB', path: '/gmdb/juniperus-communis' },
      // { name: 'Picea smithiana', category: 'GMDB', path: '/gmdb/picea-smithiana' },
      // { name: 'Pinus armandii', category: 'GMDB', path: '/gmdb/pinus-armandii' },
      // { name: 'Pinus densiflora', category: 'GMDB', path: '/gmdb/pinus-densiflora' },
      // { name: 'Pinus edulis', category: 'GMDB', path: '/gmdb/pinus-edulis' },
      // { name: 'Pinus elliottii', category: 'GMDB', path: '/gmdb/pinus-elliottii' },
      // { name: 'Pinus flexilis', category: 'GMDB', path: '/gmdb/pinus-flexilis' },
      // { name: 'Pinus heldreichii', category: 'GMDB', path: '/gmdb/pinus-heldreichii' },
      // { name: 'Pinus luchuensis', category: 'GMDB', path: '/gmdb/pinus-luchuensis' },
      // { name: 'Pinus monophylla', category: 'GMDB', path: '/gmdb/pinus-monophylla' },
      // { name: 'Pinus montezumae', category: 'GMDB', path: '/gmdb/pinus-montezumae' },
      // { name: 'Pinus monticola', category: 'GMDB', path: '/gmdb/pinus-monticola' },
      // { name: 'Pinus nigra', category: 'GMDB', path: '/gmdb/pinus-nigra' },
      // { name: 'Pinus palustris', category: 'GMDB', path: '/gmdb/pinus-palustris' },
      // { name: 'Pinus pinea', category: 'GMDB', path: '/gmdb/pinus-pinea' },
      // { name: 'Pinus ponderosa', category: 'GMDB', path: '/gmdb/pinus-ponderosa' },
      // { name: 'Pinus pumila', category: 'GMDB', path: '/gmdb/pinus-pumila' },
      // { name: 'Pinus radiata', category: 'GMDB', path: '/gmdb/pinus-radiata' },
      // { name: 'Pinus resinosa', category: 'GMDB', path: '/gmdb/pinus-resinosa' },
      // { name: 'Pinus sibirica', category: 'GMDB', path: '/gmdb/pinus-sibirica' },
      // { name: 'Pinus strobus', category: 'GMDB', path: '/gmdb/pinus-strobus' },
      // { name: 'Pinus sylvestris', category: 'GMDB', path: '/gmdb/pinus-sylvestris' },
      // { name: 'Pinus taeda', category: 'GMDB', path: '/gmdb/pinus-taeda' },
      // { name: 'Pinus yunnanensis', category: 'GMDB', path: '/gmdb/pinus-yunnanensis' },
      // { name: 'Platycladus orientalis', category: 'GMDB', path: '/gmdb/platycladus-orientalis' },
      // { name: 'Sequoia sempervirens', category: 'GMDB', path: '/gmdb/sequoia-sempervirens' },
      // { name: 'Taiwania cryptomerioides', category: 'GMDB', path: '/gmdb/taiwania-cryptomerioides' },
      // { name: 'Taxus baccata', category: 'GMDB', path: '/gmdb/taxus-baccata' },
      // { name: 'Taxus brevifolia', category: 'GMDB', path: '/gmdb/taxus-brevifolia' },
      // { name: 'Taxus canadensis', category: 'GMDB', path: '/gmdb/taxus-canadensis' },
      // { name: 'Taxus cuspidata', category: 'GMDB', path: '/gmdb/taxus-cuspidata' },
      // { name: 'Taxus mairei', category: 'GMDB', path: '/gmdb/taxus-mairei' },
      // { name: 'Taxus sumatrana', category: 'GMDB', path: '/gmdb/taxus-sumatrana' },
      // { name: 'Taxus wallichiana', category: 'GMDB', path: '/gmdb/taxus-wallichiana' },
      // { name: 'Tetraclinis articulata', category: 'GMDB', path: '/gmdb/tetraclinis-articulata' },
      // { name: 'Thuja occidentalis', category: 'GMDB', path: '/gmdb/thuja-occidentalis' },
      // { name: 'Thuja standishii', category: 'GMDB', path: '/gmdb/thuja-standishii' },
      // { name: 'Thuja plicata', category: 'GMDB', path: '/gmdb/thuja-plicata' },
      // ...fmdbFruitFiles
    ];

    // Filter results based on query - exact word matching
    const filteredResults = allFiles.filter(file => {
      const queryLower = query.toLowerCase().trim();
      const nameLower = file.name.toLowerCase();
      const categoryLower = file.category.toLowerCase();
      
      // Check if query matches the beginning of any word in the name
      const nameWords = nameLower.split(/\s+/);
      const nameStartsWithQuery = nameWords.some(word => word.startsWith(queryLower));
      
      // Check if query matches the beginning of any word in the category
      const categoryWords = categoryLower.split(/\s+/);
      const categoryStartsWithQuery = categoryWords.some(word => word.startsWith(queryLower));
      
      return nameStartsWithQuery || categoryStartsWithQuery;
    });

    setSearchResults(filteredResults);
  };

  return (
    <nav className='mb-10 bg-gradient-to-r from-[#1BD11B] to-[#57C785] fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-white'>
      <div className='flex items-center justify-between'>
        <Link
          to='/'
          className='flex items-center order-first mb-0 font-medium text-gray-900 lg:order-none lg:w-1/5 title-font md:mb-0'
        >
          <span className='ml-4 md:ml-12 p-2 text-2xl md:text-3xl font-bold'>
            <span className='text-[#fad73d]'>Food Drugs & </span>
            <span className='text-white'>Pharmacology</span>
          </span>
          {/* <img src={logo} alt="Food Drugs & Pharmacology" className='w-24 h-24'/> */}
        </Link>
        <div className='md:hidden'>
          <button onClick={toggleMobileMenu} className='mr-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </button>
        </div>
        <ul className='hidden md:flex space-x-4 flex-wrap items-center text-base lg:w-4/5 lg:justify-end lg:mr-10 md:ml-auto'>
          <li>
            <Link to='/'>
              <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                <span className='ml-1.5 text-xl text-white hover:text-gray-900'>
                  Home
                </span>
              </span>
            </Link>
          </li>

          {/* GMDb (Gymnosperms) */}
          {/* <li className='menu'>
            <Link className=''>
              <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                <span className='ml-1.5 text-xl text-white hover:text-gray-900'>
                  GMDb
                </span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2.5}
                  stroke='#ffffff'
                  className='size-5 hover:text-gray-900'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m19.5 8.25-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </span>
            </Link>
            <div className='menu-bar-1 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]'>
              <ul>
                <li className='hover-me'>
                  <Link>
                    <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-1 font-medium'>
                      <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                        Species
                      </span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={2.5}
                        stroke='#ffffff'
                        className='size-6 ml-32'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='m8.25 4.5 7.5 7.5-7.5 7.5'
                        />
                      </svg>
                    </span>
                  </Link>
                  <div className='menu-bar-2 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]'>
                    <ul>
                      <li className='hover-me'>
                        <Link>
                          <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                              Species (A-L)
                            </span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#ffffff' className='size-6 ml-8'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                            </svg>
                          </span>
                        </Link>
                        <div className='menu-bar-3 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]'>
                          <ul>
                            <li><Link to='/gmdb/abies-pindrow'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Abies pindrow</span></span></Link></li>
                            <li><Link to='/gmdb/cedrus-deodara'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Cedrus deodara</span></span></Link></li>
                            <li><Link to='/gmdb/cycas-revoluta'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Cycas revoluta</span></span></Link></li>
                            <li><Link to='/gmdb/ginkgo-biloba'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Ginkgo biloba</span></span></Link></li>
                            <li><Link to='/gmdb/juniperus-communis'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Juniperus communis</span></span></Link></li>
                            <li><Link to='/gmdb/picea-smithiana'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 pb-2 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Picea smithiana</span></span></Link></li>
                          </ul>
                        </div>
                      </li>
                      <li className='hover-me'>
                        <Link>
                          <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                              Species (M-Z)
                            </span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#ffffff' className='size-6 ml-8'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                            </svg>
                          </span>
                        </Link>
                        <div className='menu-bar-10 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]'>
                          <ul>
                            <li><Link to='/gmdb/pinus-pinea'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Pinus pinea</span></span></Link></li>
                            <li><Link to='/gmdb/pinus-sylvestris'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Pinus sylvestris</span></span></Link></li>
                            <li><Link to='/gmdb/sequoia-sempervirens'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Sequoia sempervirens</span></span></Link></li>
                            <li><Link to='/gmdb/taxus-baccata'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Taxus baccata</span></span></Link></li>
                            <li><Link to='/gmdb/thuja-occidentalis'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 pb-2 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Thuja occidentalis</span></span></Link></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li> */}

          {/* SMDb all files in food and drugs */}
          <li className='menu'>
            <Link className=''>
              <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                <span className='ml-1.5 text-xl text-white hover:text-gray-900'>
                  SMDb
                </span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2.5}
                  stroke='#ffffff'
                  className='size-5 hover:text-gray-900'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m19.5 8.25-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </span>
            </Link>
            <div className='menu-bar-1 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]'>
              <ul>
                <li className='hover-me'>
                  <Link>
                    <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-1 font-medium'>
                      <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                        Spices
                      </span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={2.5}
                        stroke='#ffffff'
                        className='size-6 ml-32'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='m8.25 4.5 7.5 7.5-7.5 7.5'
                        />
                      </svg>
                    </span>
                  </Link>
                  <div className='menu-bar-2 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]'>
                    <ul>
                      <li className='hover-me'>
                        <Link>
                          <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                              Spices (A-L)
                            </span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#ffffff' className='size-6 ml-8'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                            </svg>
                          </span>
                        </Link>
                        <div className='menu-bar-3 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]'>
                          <ul>
                            <li><Link to='/smdb/ratanjot'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Alkanna tinktoria</span></span></Link></li>
                            <li><Link to='/smdb/anthriscus-cerefolium'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Anthriscus cerefolium</span></span></Link></li>
                            <li><Link to='/smdb/apium-graveolens'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Apium graveolens</span></span></Link></li>
                            <li><Link to='/smdb/armoracia-rusticana'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Armoracia rusticana</span></span></Link></li>
                            <li><Link to='/smdb/brassica-juncea'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Brassica juncea</span></span></Link></li>
                            <li><Link to='/smdb/capparis-spinosa'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Capparis spinosa</span></span></Link></li>
                            <li><Link to='/smdb/capsicum-annuum'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Capsicum annuum</span></span></Link></li>
                            <li><Link to='/smdb/tezpatta'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Cinnamomum tamala</span></span></Link></li>
                            <li><Link to='/smdb/dalchini'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Cinnamomum verum</span></span></Link></li>
                            <li><Link to='/smdb/dhaniya'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Coriandrum sativum</span></span></Link></li>
                            <li><Link to='/smdb/kesar'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Crocus sativus</span></span></Link></li>
                            <li><Link to='/smdb/jeera'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Cuminum cyminum</span></span></Link></li>
                            <li><Link to='/smdb/haldi'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Curcuma longa</span></span></Link></li>
                            <li><Link to='/smdb/dracocephalum-officinale'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Dracocephalum officinale</span></span></Link></li>
                            <li><Link to='/smdb/elayachi'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Elettaria cardamomum</span></span></Link></li>
                            <li><Link to='/smdb/foeniculum-vulgare'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Foeniculum vulgare</span></span></Link></li>
                            <li><Link to='/smdb/hing'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Ferula assafoetida</span></span></Link></li>
                            <li><Link to='/smdb/illicium-verum'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Illicium verum</span></span></Link></li>
                            <li><Link to='/smdb/laurus-nobilis'><span className='relative inline-flex items-center rounded px-1.5 py-0.3  font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Laurus nobilis</span></span></Link></li>
                            <li><Link to='/smdb/levisticum-officinale'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 pb-2 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Levisticum officinale</span></span></Link></li>
                            
                             </ul>
                        </div>
                      </li>
                      <li className='hover-me'>
                        <Link>
                          <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                              Spices (K-Z)
                            </span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#ffffff' className='size-6 ml-8'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                            </svg>
                          </span>
                        </Link>
                        <div className='menu-bar-10 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]'>
                          <ul>
                            <li><Link to='/smdb/mangifera-indica'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Mangifera indica</span></span></Link></li>
                            <li><Link to='/smdb/pudina'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Mentha spicata</span></span></Link></li>
                            <li><Link to='/smdb/currypatta'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Murraya koengii</span></span></Link></li>
                            <li><Link to='/smdb/javitri'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Myristica fragrans</span></span></Link></li>
                            <li><Link to='/smdb/kalonji'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Nigella sativa</span></span></Link></li>
                            <li><Link to='/smdb/ocimum-basilicum'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Ocimum basilicum</span></span></Link></li>
                            <li><Link to='/smdb/papaver-somniferum'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Papaver somniferum</span></span></Link></li>
                            <li><Link to='/smdb/pimpinella-anisum'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Pimpinella anisum</span></span></Link></li>
                            <li><Link to='/smdb/kalimirch'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Piper nigrum</span></span></Link></li>
                            <li><Link to='/smdb/punica-granatum'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Punica granatum</span></span></Link></li>
                            
                            <li><Link to='/smdb/loung'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Syzygium aromaticum</span></span></Link></li>
                            <li><Link to='/smdb/salvia-rosmarinus'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Salvia rosmarinus</span></span></Link></li>
                            <li><Link to='/smdb/satureja-hortensis'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Satureja hortensis</span></span></Link></li>
                            <li><Link to='/smdb/sesamum-indicum'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Sesamum indicum</span></span></Link></li>
                            <li><Link to='/smdb/tamarindus-indica'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Tamarindus indica</span></span></Link></li>
                            <li><Link to='/smdb/thymus-vulgaris'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Thymus vulgaris</span></span></Link></li>
                            <li><Link to='/smdb/ajwain'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trachyspermum ammi</span></span></Link></li>
                            <li><Link to='/smdb/adrak'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 pb-2 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Zingiber officinale</span></span></Link></li>
                         
                            
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to='/smdb/adme'>
                    <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                      <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                        ADME
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to='/smdb/statistics'>
                    <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                      <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                        Statistics
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to='/smdb/pharmacological'>
                    <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                      <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                        Pharmacological Activities
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

           {/* LMDb all files in food and drugs */}
           <li className='menu'>
            <Link className=''>
              <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                <span className='ml-1.5 text-xl text-white hover:text-gray-900'>
                  LMDb
                </span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2.5}
                  stroke='#ffffff'
                  className='size-5 hover:text-gray-900'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m19.5 8.25-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </span>
            </Link>
            <div className='menu-bar-1 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]'>
              <ul>
                <li className='hover-me'>
                  <Link>
                    <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-1 font-medium'>
                      <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                      Lichens
                      </span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={2.5}
                        stroke='#ffffff'
                        className='size-6 ml-32'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='m8.25 4.5 7.5 7.5-7.5 7.5'
                        />
                      </svg>
                    </span>
                  </Link>
                  <div className='menu-bar-2 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]'>
                    <ul>
                      <li className='hover-me'>
                        <Link>
                          <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-0.5 font-medium'>
                            <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                            Lichens (A-E)
                            </span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#ffffff' className='size-6 ml-8'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                            </svg>
                          </span>
                        </Link>
                        <div className='menu-bar-3 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]'>
                          <ul>
                          <li><Link to='/lichmdb/alectoria-ochroleuca'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Alectoria ochroleuca</span></span></Link></li>
                      <li><Link to='/lichmdb/alectoria-sarmentosa'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Alectoria sarmentosa</span></span></Link></li>
                      <li><Link to='/lichmdb/anzia-hypoleucoides'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Anzia hypoleucoides</span></span></Link></li>
                      <li><Link to='/lichmdb/candelaria-concolor'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Candelaria concolor</span></span></Link></li>
                      <li><Link to='/lichmdb/cetraria-islandica'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Cetraria islandica</span></span></Link></li>
                      <li><Link to='/lichmdb/cladonia-convoluta'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Cladonia convoluta</span></span></Link></li>
                      <li><Link to='/lichmdb/cladonia-cristatella'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Cladonia cristatella</span></span></Link></li>
                      <li><Link to='/lichmdb/cladonia-cryptochlorophaea'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Cladonia cryptochlorophaea</span></span></Link></li>
                      <li><Link to='/lichmdb/cladonia-furcata'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Cladonia furcata</span></span></Link></li>
                      <li><Link to='/lichmdb/cladonia-macilenta'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Cladonia macilenta</span></span></Link></li>
                      <li><Link to='/lichmdb/cladonia-mitis'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Cladonia mitis</span></span></Link></li>
                      <li><Link to='/lichmdb/cladonia-rangiferina'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Cladonia rangiferina</span></span></Link></li>
                      <li><Link to='/lichmdb/cladonia-stellaris'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Cladonia stellaris</span></span></Link></li>
                      <li><Link to='/lichmdb/cladonia-verticillata'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Cladonia verticillata</span></span></Link></li>
                      <li><Link to='/lichmdb/coniocarpon-cinnabarinum'><span className='relative inline-flex items-center rounded px-1.5 py-0.4  font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Coniocarpon cinnabarinum</span></span></Link></li>
                      <li><Link to='/lichmdb/dimelaena-oreina'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Dimelaena oreina</span></span></Link></li>
                      <li><Link to='/lichmdb/dolichousnea-longissima'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Dolichousnea longissima</span></span></Link></li>
                      <li><Link to='/lichmdb/evernia-prunastri'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 pb-2 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Evernia prunastri</span></span></Link></li>
                      
                     </ul>
                        </div>
                      </li>
                      <li className='hover-me'>
                        <Link>
                          <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-0.5 font-medium'>
                            <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                            Lichens (F-M)
                            </span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 24' strokeWidth={2.5} stroke='#ffffff' className='size-6 ml-8'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                            </svg>
                          </span>
                        </Link>
                        <div className='menu-bar-3 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]'>
                          <ul>
                      <li><Link to='/lichmdb/flavoparmelia-caperata'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Flavoparmelia caperata</span></span></Link></li>
                      <li><Link to='/lichmdb/flavoparmelia-haysomii'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Flavoparmelia haysomii</span></span></Link></li>
                      <li><Link to='/lichmdb/heterodermia-dissecta'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Heterodermia dissecta</span></span></Link></li>
                      <li><Link to='/lichmdb/hypogymnia-enteromorpha'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Hypogymnia enteromorpha</span></span></Link></li>
                      <li><Link to='/lichmdb/hypotrachyna-cirrhata'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Hypotrachyna cirrhata</span></span></Link></li>
                      <li><Link to='/lichmdb/hypotrachyna-leiophylla'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Hypotrachyna leiophylla</span></span></Link></li>
                      <li><Link to='/lichmdb/lecanora-frustulosa'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Lecanora frustulosa</span></span></Link></li>
                      <li><Link to='/lichmdb/lecanora-hybocarpa'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Lecanora hybocarpa</span></span></Link></li>
                      <li><Link to='/lichmdb/lecanora-lividocinerea'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Lecanora lividocinerea</span></span></Link></li>
                      <li><Link to='/lichmdb/leptogium-saturninum'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Leptogium saturninum</span></span></Link></li>
                      <li><Link to='/lichmdb/lethariella-cladonioides'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Lethariella cladonioides</span></span></Link></li>
                      <li><Link to='/lichmdb/lethariella-sernanderi'><span className='relative inline-flex items-center rounded px-1.5 py-0.4  font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Lethariella sernanderi</span></span></Link></li>
                      <li><Link to='/lichmdb/lobaria-pulmonaria'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Lobaria pulmonaria</span></span></Link></li>
                      <li><Link to='/lichmdb/lobaria-scrobiculata'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Lobaria scrobiculata</span></span></Link></li>
                      <li><Link to='/lichmdb/menegazzia-terebrata'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 pb-2 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Menegazzia terebrata</span></span></Link></li>
                      
                    </ul>
                        </div>
                      </li>
                      <li className='hover-me'>
                        <Link>
                          <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-0.5 font-medium'>
                            <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                            Lichens (O-P)
                            </span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#ffffff' className='size-6 ml-8'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                            </svg>
                          </span>
                        </Link>
                        <div className='menu-bar-3 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]'>
                          <ul>
                          <li><Link to='/lichmdb/ochrolechia-parella'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Ochrolechia parella</span></span></Link></li>
                      <li><Link to='/lichmdb/ophioparma-ventosa'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Ophioparma ventosa</span></span></Link></li>
                      <li><Link to='/lichmdb/oxneria-fallax'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Oxneria fallax</span></span></Link></li>
                      
                      <li><Link to='/lichmdb/parmelia-omphalodes'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Parmelia omphalodes</span></span></Link></li>
                      <li><Link to='/lichmdb/parmelia-saxatilis'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Parmelia saxatilis</span></span></Link></li>
                      <li><Link to='/lichmdb/parmotrema-nilgherrense'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Parmotrema nilgherrense</span></span></Link></li>
                      <li><Link to='/lichmdb/parmotrema-praesorediosum'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Parmotrema praesorediosum</span></span></Link></li>
                      <li><Link to='/lichmdb/parmotrema-sancti-angelii'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Parmotrema sancti-angelii</span></span></Link></li>
                      <li><Link to='/lichmdb/parmotrema-tinctorum'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Parmotrema tinctorum</span></span></Link></li>
                      <li><Link to='/lichmdb/peltigera-canina'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Peltigera canina</span></span></Link></li>
                      <li><Link to='/lichmdb/peltigera-malacea'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Peltigera malacea</span></span></Link></li>
                      <li><Link to='/lichmdb/peltigera-venosa'><span className='relative inline-flex items-center rounded px-1.5 py-0.4  font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Peltigera venosa</span></span></Link></li>
                      <li><Link to='/lichmdb/platismatia-glauca'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Platismatia glauca</span></span></Link></li>
                      <li><Link to='/lichmdb/pseudocyphellaria-faveolata'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Pseudocyphellaria faveolata</span></span></Link></li>
                      <li><Link to='/lichmdb/pseudocyphellaria-norvegica'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Pseudocyphellaria norvegica</span></span></Link></li>
                      <li><Link to='/lichmdb/pyrenula-pseudobufonia'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 pb-2 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Pyrenula pseudobufonia</span></span></Link></li>
                      
                     </ul>
                        </div>
                      </li>
                      <li className='hover-me'>
                        <Link>
                          <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-0.5 font-medium'>
                            <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                            Lichens (Q-S)
                            </span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#ffffff' className='size-6 ml-8'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                            </svg>
                          </span>
                        </Link>
                        <div className='menu-bar-3 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]'>
                          <ul>
                          <li><Link to='/lichmdb/ramalina-calicaris'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Ramalina calicaris</span></span></Link></li>
                      <li><Link to='/lichmdb/ramalina-dilacerata'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Ramalina dilacerata</span></span></Link></li>
                      <li><Link to='/lichmdb/ramalina-farinacea'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Ramalina farinacea</span></span></Link></li>
                      <li><Link to='/lichmdb/ramalina-hierrensis'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Ramalina hierrensis</span></span></Link></li>
                      <li><Link to='/lichmdb/ramalina-pollinaria'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Ramalina pollinaria</span></span></Link></li>
                      <li><Link to='/lichmdb/ramalina-siliquosa'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Ramalina siliquosa</span></span></Link></li>
                      <li><Link to='/lichmdb/ramalina-stenospora'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Ramalina stenospora</span></span></Link></li>
                      <li><Link to='/lichmdb/ricasolia-amplissima'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Ricasolia amplissima</span></span></Link></li>
                      <li><Link to='/lichmdb/roccella-fuciformis'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Roccella fuciformis</span></span></Link></li>
                      <li><Link to='/lichmdb/roccella-montagnei'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Roccella montagnei</span></span></Link></li>                      
                           <li><Link to='/lichmdb/sphaerophorus-fragilis'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Sphaerophorus fragilis</span></span></Link></li>
                           <li><Link to='/lichmdb/stereocaulon-azoreum'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Stereocaulon azoreum</span></span></Link></li>
                      <li><Link to='/lichmdb/stereocaulon-corticatulum'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Stereocaulon corticatulum</span></span></Link></li>
                      <li><Link to='/lichmdb/stereocaulon-japonicum'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Stereocaulon japonicum</span></span></Link></li>
                      <li><Link to='/lichmdb/stereocaulon-paschale'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Stereocaulon paschale</span></span></Link></li>
                      <li><Link to='/lichmdb/stereocaulon-ramulosum'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Stereocaulon ramulosum</span></span></Link></li>
                      <li><Link to='/lichmdb/stereocaulon-sasakii'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Stereocaulon sasakii</span></span></Link></li>
                      <li><Link to='/lichmdb/sulcaria-sulcata'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Sulcaria sulcata</span></span></Link></li>
                      
                      <li><Link to='/lichmdb/stereocaulon-vesuvianum'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 pb-2 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Stereocaulon vesuvianum</span></span></Link></li>
                     
                     </ul>
                        </div>
                      </li>
                      <li className='hover-me'>
                        <Link>
                          <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-0.5 pb-2 font-medium'>
                            <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                            Lichens (T-Z)
                            </span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#ffffff' className='size-6 ml-8'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                            </svg>
                          </span>
                        </Link>
                        <div className='menu-bar-3 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]'>
                          <ul>
                          
                           <li><Link to='/lichmdb/teloschistes-chrysophthalmus'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Teloschistes chrysophthalmus</span></span></Link></li>
                      <li><Link to='/lichmdb/teloschistes-flavicans'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Teloschistes flavicans</span></span></Link></li>
                      <li><Link to='/lichmdb/umbilicaria-cinereorufescens'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Umbilicaria cinereorufescens</span></span></Link></li>
                      <li><Link to='/lichmdb/umbilicaria-crustulosa'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Umbilicaria crustulosa</span></span></Link></li>
                      <li><Link to='/lichmdb/umbilicaria-esculenta'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Umbilicaria esculenta</span></span></Link></li>
                      <li><Link to='/lichmdb/umbilicaria-hypococcinea'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Umbilicaria hypococcinea</span></span></Link></li>
                      <li><Link to='/lichmdb/umbilicaria-polyphylla'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Umbilicaria polyphylla</span></span></Link></li>
                          <li><Link to='/lichmdb/umbilicaria-proboscidea'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Umbilicaria proboscidea</span></span></Link></li>
                      <li><Link to='/lichmdb/umbilicaria-spodochroa'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Umbilicaria spodochroa</span></span></Link></li>
                      <li><Link to='/lichmdb/usnea-articulata'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Usnea articulata</span></span></Link></li>
                      <li><Link to='/lichmdb/usnea-florida'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Usnea florida</span></span></Link></li>
                      <li><Link to='/lichmdb/usnea-undulata'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Usnea undulata</span></span></Link></li>
                      <li><Link to='/lichmdb/xalocoa-ocellata'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Xalocoa ocellata</span></span></Link></li>
                      <li><Link to='/lichmdb/xanthoparmelia-camtschadalis'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Xanthoparmelia camtschadalis</span></span></Link></li>
                      <li><Link to='/lichmdb/xanthoparmelia-tinctina'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 pb-2 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Xanthoparmelia tinctina</span></span></Link></li>
                  
                     </ul>
                        </div>
                      </li>
                      
                      
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to='/lichmdb/adme'>
                    <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                      <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                        ADME
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to='/lichmdb/statistics'>
                    <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                      <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                        Statistics
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to='/lichmdb/pharmacological'>
                    <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                      <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                        Pharmacological Activities
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
           
          </li>

          {/* Trichoderma all files */}
          
          <li className='menu'>
            <Link className=''>
              <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                <span className='ml-1.5 text-xl text-white hover:text-gray-900'>
                  TMDb
                </span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2.5}
                  stroke='#ffffff'
                  className='size-5 hover:text-gray-900'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m19.5 8.25-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </span>
            </Link>
            <div className='menu-bar-1 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]'>
              <ul>
                <li className='hover-me'>
                  <Link>
                    <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-1 font-medium'>
                      <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                      Trichoderma
                      </span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={2.5}
                        stroke='#ffffff'
                        className='size-6 ml-24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='m8.25 4.5 7.5 7.5-7.5 7.5'
                        />
                      </svg>
                    </span>
                  </Link>
                  <div className='menu-bar-12 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]'>
                    <ul>
                      <li className='hover-me'>
                        <Link>
                          <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                              Trichoderma (A-G)
                            </span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#ffffff' className='size-6 ml-4'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                            </svg>
                          </span>
                        </Link>
                        <div className='menu-bar-9 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]'>
                         <ul>
                      <li><Link to='/trichoderma/album'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma Album</span></span></Link></li>
                      <li><Link to='/trichoderma/applanatum'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma Applanatum</span></span></Link></li>
                      <li><Link to='/trichoderma/asperellum'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma Asperellum</span></span></Link></li>
                      <li><Link to='/trichoderma/atroviride'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma Atroviride</span></span></Link></li>
                       <li><Link to='/trichoderma/aureoviride'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma Aureoviride</span></span></Link></li>
                      <li><Link to='/trichoderma/avellaneum'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma Avellaneum</span></span></Link></li>
                      <li><Link to='/trichoderma/brevicompactum'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma Brevicompactum</span></span></Link></li>
                      <li><Link to='/trichoderma/cerinum'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma Cerinum</span></span></Link></li>
                      <li><Link to='/trichoderma/citrinoviride'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma Citrinoviride</span></span></Link></li>
                      <li><Link to='/trichoderma/citrinum'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma Citrinum</span></span></Link></li>
                      <li><Link to='/trichoderma/cornudamae'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma cornudamae</span></span></Link></li>
                      <li><Link to='/trichoderma/crassum'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma Crassum</span></span></Link></li>                   
                      <li><Link to='/trichoderma/cremeum'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma Cremeum</span></span></Link></li>
                      <li><Link to='/trichoderma/deliquescens'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma Deliquescens</span></span></Link></li>
                      <li><Link to='/trichoderma/gamsii'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 pb-2 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma Gamsii</span></span></Link></li>
                     
                   </ul>
                        </div>
                      </li>
                      <li className='hover-me'>
                        <Link>
                          <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                              Trichoderma (H-Z)
                            </span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#ffffff' className='size-6 ml-4'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                            </svg>
                          </span>
                        </Link>
                        <div className='menu-bar-9 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]'>
                          <ul>
                            <li><Link to='/trichoderma/hamatum'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma Hamatum</span></span></Link></li>
                      <li><Link to='/trichoderma/harzianum'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma Harzianum</span></span></Link></li>
                      <li><Link to='/trichoderma/hypocreamuroiana'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma Hypocreamuroiana</span></span></Link></li>
                      <li><Link to='/trichoderma/hypoxylon'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma Hypoxylon</span></span></Link></li>              
                      <li><Link to='/trichoderma/koningii'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma Koningii</span></span></Link></li>
                      <li><Link to='/trichoderma/koningiopsis'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma Koningiopsis</span></span></Link></li>
                      <li><Link to='/trichoderma/longibrachiatum'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma Longibrachiatum</span></span></Link></li>
                      <li><Link to='/trichoderma/polysporum'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma Polysporum</span></span></Link></li>
                      <li><Link to='/trichoderma/reesei'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma Reesei</span></span></Link></li>
                      <li><Link to='/trichoderma/saturnisporum'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma Saturnisporum</span></span></Link></li>
                      <li><Link to='/trichoderma/spirale'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma Spirale</span></span></Link></li>                    
                      <li><Link to='/trichoderma/velutinum'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma Velutinum</span></span></Link></li>
                      <li><Link to='/trichoderma/virens'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma Virens</span></span></Link></li>
                      <li><Link to='/trichoderma/viride'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma Viride</span></span></Link></li>
                      <li><Link to='/trichoderma/vinosum'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 pb-2 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Trichoderma Vinosum</span></span></Link></li>
                    

                      </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to='/trichoderma/adme'>
                    <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                      <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                        ADME
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to='/trichoderma/statistics'>
                    <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                      <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                        Statistics
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to='/trichoderma/pharmacological'>
                    <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                      <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                        Pharmacological Activities
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* CMDb all files in food and drugs */}
          <li className='menu ml-auto'>
            <Link className=''>
              <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                <span className='ml-1.5 text-xl text-white hover:text-gray-900'>
                  CMDb
                </span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2.5}
                  stroke='#ffffff'
                  className='size-5 hover:text-gray-900'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m19.5 8.25-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </span>
            </Link>
            <div className='menu-bar-1 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]'>
              <ul>
                <li className='hover-me'>
                  <Link>
                    <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-1 font-medium'>
                      <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                        Cereals
                      </span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={2.5}
                        stroke='#ffffff'
                        className='size-6 ml-32'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='m8.25 4.5 7.5 7.5-7.5 7.5'
                        />
                      </svg>
                    </span>
                  </Link>
                  <div className='menu-bar-4 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]'>
                    <ul>
                      <li><Link to='/Cereals/wheat'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Wheat</span></span></Link></li>
                      <li><Link to='/Cereals/rice'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Rice</span></span></Link></li>
                      <li><Link to='/Cereals/sorghum'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Sorghum</span></span></Link></li>
                      <li><Link to='/Cereals/ragi'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Ragi</span></span></Link></li>
                      <li><Link to='/Cereals/barley'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Barley</span></span></Link></li>
                      <li><Link to='/Cereals/maize'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Maize</span></span></Link></li>
                      <li><Link to='/Cereals/bajra'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 pb-2 font-medium'><span className='ml-1.5 text-base text-white hover:text-gray-900'>Bajra</span></span></Link></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to='/Cereals/adme'>
                    <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                      <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                        ADME
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to='/Cereals/statistics'>
                    <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                      <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                        Statistics
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to='/Cereals/pharmcological'>
                    <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                      <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                        Pharmacological Activities
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* More dropdown menu */}
          <li className='menu'>
            <Link className=''>
              <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                <span className='ml-1.5  text-xl text-white hover:text-gray-900'>
                  More
                </span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2.5}
                  stroke='#ffffff'
                  className='size-5 mr-8 hover:text-gray-900'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m19.5 8.25-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </span>
            </Link>
            <div className='menu-bar-1 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]'>
              <ul>
                <li>
                  <Link to='/author'>
                    <span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'>
                      <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                        Author
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to='/acknowledgements'>
                    <span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'>
                      <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                        Acknowledgements
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to='/help'>
                    <span className='relative inline-flex items-center rounded pb-2.5 px-1.5 py-0.5 font-medium'>
                      <span className='ml-1.5 text-base text-white hover:text-gray-900'>
                        Help
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* Search functionality */}
          <li className='ml-4'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search files...'
                className='w-64 px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500'
                onChange={(e) => handleSearch(e.target.value)}
              />
              <button className='absolute right-2 top-1/2 transform -translate-y-1/2'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5 text-gray-500'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z' />
                </svg>
              </button>
            </div>
            {/* Search results dropdown */}
            {searchResults.length > 0 && (
              <div className='absolute top-full w-64 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 max-h-96 overflow-hidden' style={{marginTop: '0px'}}>
                {/* Search results header */}
                <div className='px-4 py-3 bg-gray-50 border-b border-gray-100'>
                  <div className='flex items-center'>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4 text-gray-500 mr-2'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z' />
                    </svg>
                    <span className='text-sm font-medium text-gray-700'>Search Results</span>
                    <span className='ml-auto text-xs text-gray-500'>{searchResults.length} found</span>
                  </div>
                </div>
                
                {/* Search results list */}
                <div className='max-h-80 overflow-y-auto'>
                  {searchResults.map((result, index) => (
                    <Link
                      key={index}
                      to={result.path}
                      className='block px-4 py-3 text-sm text-gray-900 hover:bg-blue-50 border-b border-gray-100 last:border-b-0 transition-all duration-150 group'
                      onClick={() => setSearchResults([])}
                    >
                      <div className='flex items-start'>
                        <div className='flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 mt-0.5'>
                          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4 text-green-600'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 1 18 18a8.966 8.966 0 0 1-6 2.292m0-14.25v14.25' />
                          </svg>
                        </div>
                        <div className='flex-1 min-w-0'>
                          <div className='font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-150'>{result.name}</div>
                          <div className='text-xs text-gray-500 mt-1 flex items-center'>
                            <span className='inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800'>
                              {result.category}
                            </span>
                          </div>
                        </div>
                        <div className='flex-shrink-0 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150'>
                          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4 text-gray-400'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <ul className='flex-col md:hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785] border-t border-white/20'>
          {/* Search (mobile) - moved to top */}
          <li className='px-4 py-3'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search files...'
                className='w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500'
                onChange={(e) => handleSearch(e.target.value)}
              />
              <button className='absolute right-2 top-1/2 transform -translate-y-1/2'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5 text-gray-500'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z' />
                </svg>
              </button>
            </div>
            {/* Mobile search results */}
            {searchResults.length > 0 && (
              <div className='mt-0 bg-white border border-gray-200 rounded-xl shadow-2xl max-h-64 overflow-hidden w-full' style={{marginTop: '0px'}}>
                {/* Mobile search results header */}
                <div className='px-4 py-3 bg-gray-50 border-b border-gray-100'>
                  <div className='flex items-center'>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4 text-gray-500 mr-2'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z' />
                    </svg>
                    <span className='text-sm font-medium text-gray-700'>Search Results</span>
                    <span className='ml-auto text-xs text-gray-500'>{searchResults.length} found</span>
                  </div>
                </div>
                
                {/* Mobile search results list */}
                <div className='max-h-48 overflow-y-auto'>
                  {searchResults.map((result, index) => (
                    <Link
                      key={index}
                      to={result.path}
                      className='block px-4 py-3 text-sm text-gray-900 hover:bg-blue-50 border-b border-gray-100 last:border-b-0 transition-all duration-150 group'
                      onClick={() => {
                        setSearchResults([]);
                        closeAllMenus();
                      }}
                    >
                      <div className='flex items-start'>
                        <div className='flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 mt-0.5'>
                          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4 text-green-600'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 1 6 2.292m0-14.25v14.25' />
                          </svg>
                        </div>
                        <div className='flex-1 min-w-0'>
                          <div className='font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-150'>{result.name}</div>
                          <div className='text-xs text-gray-500 mt-1 flex items-center'>
                            <span className='inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800'>
                              {result.category}
                            </span>
                          </div>
                        </div>
                        <div className='flex-shrink-0 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150'>
                          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4 text-gray-500'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          <li>
            <Link to='/' onClick={closeAllMenus} className='block px-4 py-3 text-white hover:bg-white/10'>
              <span className='text-base'>Home</span>
            </Link>
          </li>
          {/* SMDb (mobile) */}
          <li>
            <button
              className='w-full text-left flex items-center justify-between px-4 py-1 text-white hover:bg-white/10'
              onClick={() => setIsSmdbMobileOpen(!isSmdbMobileOpen)}
            >
              <span className='text-base'>SMDb</span>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
              </svg>
            </button>
            {isSmdbMobileOpen && (
              <ul className='bg-white/10 space-y-1'>
                <li>
                  <button
                    className='w-full text-left flex items-center justify-between px-8 py-1 text-white/90 hover:bg-white/10'
                    onClick={() => setIsSpicesMobileOpen(!isSpicesMobileOpen)}
                  >
                    <span>Spices</span>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                    </svg>
                  </button>
                  {isSpicesMobileOpen && (
                    <ul className='bg-white/5 space-y-1'>
                      <li>
                        <button
                          className='w-full text-left flex items-center justify-between px-12 py-1 text-white/80 hover:bg-white/10'
                          onClick={() => setIsSpices1MobileOpen(!isSpices1MobileOpen)}
                        >
                          <span>Spices (A-L)</span>
                          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                          </svg>
                        </button>
                        {isSpices1MobileOpen && (
                          <ul className='bg-white/5 space-y-1 max-h-64 overflow-y-auto'>
                            <li><Link to='/smdb/ratanjot' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Alkanna tinktoria</Link></li>
                            <li><Link to='/smdb/anthriscus-cerefolium' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Anthriscus cerefolium</Link></li>
                            <li><Link to='/smdb/apium-graveolens' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Apium graveolens</Link></li>
                            <li><Link to='/smdb/armoracia-rusticana' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Armoracia rusticana</Link></li>
                            <li><Link to='/smdb/brassica-juncea' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Brassica juncea</Link></li>
                            <li><Link to='/smdb/capparis-spinosa' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Capparis spinosa</Link></li>
                            <li><Link to='/smdb/capsicum-annuum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Capsicum annuum</Link></li>
                            <li><Link to='/smdb/tezpatta' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Cinnamomum tamala</Link></li>
                            <li><Link to='/smdb/dalchini' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Cinnamomum verum</Link></li>
                            <li><Link to='/smdb/dhaniya' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Coriandrum sativum</Link></li>
                            <li><Link to='/smdb/kesar' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Crocus sativus</Link></li>
                            <li><Link to='/smdb/jeera' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Cuminum cyminum</Link></li>
                            <li><Link to='/smdb/haldi' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Curcuma longa</Link></li>
                            <li><Link to='/smdb/dracocephalum-officinale' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Dracocephalum officinale</Link></li>
                            <li><Link to='/smdb/elayachi' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Elettaria cardamomum</Link></li>
                            <li><Link to='/smdb/foeniculum-vulgare' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Foeniculum vulgare</Link></li>
                            <li><Link to='/smdb/hing' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Ferula assafoetida</Link></li>
                            <li><Link to='/smdb/illicium-verum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Illicium verum</Link></li>
                            <li><Link to='/smdb/laurus-nobilis' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Laurus nobilis</Link></li>
                            <li><Link to='/smdb/levisticum-officinale' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Levisticum officinale</Link></li>
                          </ul>
                        )}
                      </li>
                      <li>
                        <button
                          className='w-full text-left flex items-center justify-between px-12 py-1 text-white/80 hover:bg-white/10'
                          onClick={() => setIsSpices2MobileOpen(!isSpices2MobileOpen)}
                        >
                          <span>Spices (K-Z)</span>
                          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                          </svg>
                        </button>
                        {isSpices2MobileOpen && (
                          <ul className='bg-white/5 space-y-1 max-h-64 overflow-y-auto'>
                            <li><Link to='/smdb/mangifera-indica' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Mangifera indica</Link></li>
                            <li><Link to='/smdb/pudina' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Mentha spicata</Link></li>
                            <li><Link to='/smdb/currypatta' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Murraya koengii</Link></li>
                            <li><Link to='/smdb/javitri' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Myristica fragrans</Link></li>
                            <li><Link to='/smdb/kalonji' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Nigella sativa</Link></li>
                            <li><Link to='/smdb/ocimum-basilicum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Ocimum basilicum</Link></li>
                            <li><Link to='/smdb/papaver-somniferum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Papaver somniferum</Link></li>
                            <li><Link to='/smdb/pimpinella-anisum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Pimpinella anisum</Link></li>
                            <li><Link to='/smdb/kalimirch' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Piper nigrum</Link></li>
                            <li><Link to='/smdb/punica-granatum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Punica granatum</Link></li>
                            <li><Link to='/smdb/loung' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Syzygium aromaticum</Link></li>
                            <li><Link to='/smdb/salvia-rosmarinus' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Salvia rosmarinus</Link></li>
                            <li><Link to='/smdb/satureja-hortensis' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Satureja hortensis</Link></li>
                            <li><Link to='/smdb/sesamum-indicum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Sesamum indicum</Link></li>
                            <li><Link to='/smdb/tamarindus-indica' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Tamarindus indica</Link></li>
                            <li><Link to='/smdb/thymus-vulgaris' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Thymus vulgaris</Link></li>
                            <li><Link to='/smdb/ajwain' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trachyspermum ammi</Link></li>
                            <li><Link to='/smdb/adrak' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Zingiber officinale</Link></li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  )}
                </li>
                <li><Link to='/smdb/adme' onClick={closeAllMenus} className='block px-8 py-1 text-white/90 hover:bg-white/10'>ADME</Link></li>
                <li><Link to='/smdb/statistics' onClick={closeAllMenus} className='block px-8 py-1 text-white/90 hover:bg-white/10'>Statistics</Link></li>
                <li><Link to='/smdb/pharmacological' onClick={closeAllMenus} className='block px-8 py-1 text-white/90 hover:bg-white/10'>Pharmacological Activities</Link></li>
              </ul>
            )}
          </li>


           {/* LMDb (mobile) */}
           <li>
           <button
              className='w-full text-left flex items-center justify-between px-4 py-1 text-white hover:bg-white/10'
              onClick={() => setIsLmdbMobileOpen(!isLmdbMobileOpen)}
            >
              <span className='text-base'>LMDb</span>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
              </svg>
            </button>
            {isLmdbMobileOpen && (
              <ul className='bg-white/10 space-y-1'>
                <li>
                <button
                    className='w-full text-left flex items-center justify-between px-8 py-1 text-white/90 hover:bg-white/10'
                    onClick={() => setIsLichensMobileOpen(!isLichensMobileOpen)}
                  >
                    <span>Lichens</span>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                    </svg>
                  </button>
                  {isLichensMobileOpen && (
                    <ul className='bg-white/5 space-y-1'>
                      <li>
                        <button
                          className='w-full text-left flex items-center justify-between px-12 py-1 text-white/80 hover:bg-white/10'
                          onClick={() => setIsLichens1MobileOpen(!isLichens1MobileOpen)}
                        >
                          <span>Lichens (A-E)</span>
                          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                          </svg>
                        </button>
                        {isLichens1MobileOpen && (
                          <ul className='bg-white/5 space-y-1 max-h-64 overflow-y-auto'>
                            <li><Link to='/lichmdb/alectoria-ochroleuca' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Alectoria ochroleuca</Link></li>
                            <li><Link to='/lichmdb/alectoria-sarmentosa' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Alectoria sarmentosa</Link></li>
                            <li><Link to='/lichmdb/anzia-hypoleucoides' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Anzia hypoleucoides</Link></li>
                            <li><Link to='/lichmdb/candelaria-concolor' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Candelaria concolor</Link></li>
                            <li><Link to='/lichmdb/cetraria-islandica' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Cetraria islandica</Link></li>
                            <li><Link to='/lichmdb/cladonia-convoluta' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Cladonia convoluta</Link></li>
                            <li><Link to='/lichmdb/cladonia-cristatella' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Cladonia cristatella</Link></li>
                            <li><Link to='/lichmdb/cladonia-cryptochlorophaea' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Cladonia cryptochlorophaea</Link></li>
                            <li><Link to='/lichmdb/cladonia-furcata' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Cladonia furcata</Link></li>
                            <li><Link to='/lichmdb/cladonia-macilenta' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Cladonia macilenta</Link></li>
                            <li><Link to='/lichmdb/cladonia-mitis' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Cladonia mitis</Link></li>
                            <li><Link to='/lichmdb/cladonia-rangiferina' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Cladonia rangiferina</Link></li>
                            <li><Link to='/lichmdb/cladonia-stellaris' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Cladonia stellaris</Link></li>
                            <li><Link to='/lichmdb/cladonia-verticillata' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Cladonia verticillata</Link></li>
                            <li><Link to='/lichmdb/coniocarpon-cinnabarinum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Coniocarpon cinnabarinum</Link></li>
                            <li><Link to='/lichmdb/dimelaena-oreina' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Dimelaena oreina</Link></li>
                            <li><Link to='/lichmdb/dolichousnea-longissima' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Dolichousnea longissima</Link></li>
                            <li><Link to='/lichmdb/evernia-prunastri' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Evernia prunastri</Link></li>
                           </ul>
                        )}
                      </li>
                      <li>
                        <button
                          className='w-full text-left flex items-center justify-between px-12 py-1 text-white/80 hover:bg-white/10'
                          onClick={() => setIsLichens2MobileOpen(!isLichens2MobileOpen)}
                        >
                          <span>Lichens (F-M)</span>
                          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                          </svg>
                        </button>
                        {isLichens2MobileOpen && (
                          <ul className='bg-white/5 space-y-1 max-h-64 overflow-y-auto'>
                            <li><Link to='/lichmdb/flavoparmelia-caperata' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Flavoparmelia caperata</Link></li>
                            <li><Link to='/lichmdb/flavoparmelia-haysomii' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Flavoparmelia haysomii</Link></li>
                            <li><Link to='/lichmdb/heterodermia-dissecta' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Heterodermia dissecta</Link></li>
                            <li><Link to='/lichmdb/hypogymnia-enteromorpha' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Hypogymnia enteromorpha</Link></li>
                            <li><Link to='/lichmdb/hypotrachyna-cirrhata' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Hypotrachyna cirrhata</Link></li>
                            <li><Link to='/lichmdb/hypotrachyna-leiophylla' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Hypotrachyna leiophylla</Link></li>
                            <li><Link to='/lichmdb/lecanora-frustulosa' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Lecanora frustulosa</Link></li>
                            <li><Link to='/lichmdb/lecanora-hybocarpa' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Lecanora hybocarpa</Link></li>
                            <li><Link to='/lichmdb/lecanora-lividocinerea' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Lecanora lividocinerea</Link></li>
                            <li><Link to='/lichmdb/leptogium-saturninum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Leptogium saturninum</Link></li>
                            <li><Link to='/lichmdb/lethariella-cladonioides' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Lethariella cladonioides</Link></li>
                            <li><Link to='/lichmdb/lethariella-sernanderi' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Lethariella sernanderi</Link></li>
                            <li><Link to='/lichmdb/lobaria-pulmonaria' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Lobaria pulmonaria</Link></li>
                            <li><Link to='/lichmdb/lobaria-scrobiculata' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Lobaria scrobiculata</Link></li>
                            <li><Link to='/lichmdb/menegazzia-terebrata' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Menegazzia terebrata</Link></li>
                   </ul>
                        )}
                      </li>
                      <li>
                        <button
                          className='w-full text-left flex items-center justify-between px-12 py-1 text-white/80 hover:bg-white/10'
                          onClick={() => setIsLichens3MobileOpen(!isLichens3MobileOpen)}
                        >
                          <span>Lichens (O-P)</span>
                          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                          </svg>
                        </button>
                        {isLichens3MobileOpen && (
                          <ul className='bg-white/5 space-y-1 max-h-64 overflow-y-auto'>
                            <li><Link to='/lichmdb/ochrolechia-parella' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Ochrolechia parella</Link></li>
                            <li><Link to='/lichmdb/ophioparma-ventosa' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Ophioparma ventosa</Link></li>
                            <li><Link to='/lichmdb/oxneria-fallax' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Oxneria fallax</Link></li>
                            <li><Link to='/lichmdb/parmelia-omphalodes' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Parmelia omphalodes</Link></li>
                            <li><Link to='/lichmdb/parmelia-saxatilis' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Parmelia saxatilis</Link></li>
                            <li><Link to='/lichmdb/parmotrema-nilgherrense' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Parmotrema nilgherrense</Link></li>
                            <li><Link to='/lichmdb/parmotrema-praesorediosum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Parmotrema praesorediosum</Link></li>
                            <li><Link to='/lichmdb/parmotrema-sancti-angelii' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Parmotrema sancti-angelii</Link></li>
                            <li><Link to='/lichmdb/parmotrema-tinctorum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Parmotrema tinctorum</Link></li>
                            <li><Link to='/lichmdb/peltigera-canina' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Peltigera canina</Link></li>
                            <li><Link to='/lichmdb/peltigera-malacea' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Peltigera malacea</Link></li>
                            <li><Link to='/lichmdb/peltigera-venosa' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Peltigera venosa</Link></li>
                            <li><Link to='/lichmdb/platismatia-glauca' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Platismatia glauca</Link></li>
                            <li><Link to='/lichmdb/pseudocyphellaria-faveolata' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Pseudocyphellaria faveolata</Link></li>
                            <li><Link to='/lichmdb/pseudocyphellaria-norvegica' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Pseudocyphellaria norvegica</Link></li>
                            <li><Link to='/lichmdb/pyrenula-pseudobufonia' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Pyrenula pseudobufonia</Link></li>
                    </ul>
                        )}
                      </li>
                      <li>
                        <button
                          className='w-full text-left flex items-center justify-between px-12 py-1 text-white/80 hover:bg-white/10'
                          onClick={() => setIsLichens4MobileOpen(!isLichens4MobileOpen)}
                        >
                          <span>Lichens (Q-S)</span>
                          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                          </svg>
                        </button>
                        {isLichens4MobileOpen && (
                          <ul className='bg-white/5 space-y-1 max-h-64 overflow-y-auto'>
                            <li><Link to='/lichmdb/ramalina-calicaris' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Ramalina calicaris</Link></li>
                            <li><Link to='/lichmdb/ramalina-dilacerata' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Ramalina dilacerata</Link></li>
                            <li><Link to='/lichmdb/ramalina-farinacea' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Ramalina farinacea</Link></li>
                            <li><Link to='/lichmdb/ramalina-hierrensis' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Ramalina hierrensis</Link></li>
                            <li><Link to='/lichmdb/ramalina-pollinaria' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Ramalina pollinaria</Link></li>
                            <li><Link to='/lichmdb/ramalina-siliquosa' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Ramalina siliquosa</Link></li>
                            <li><Link to='/lichmdb/ramalina-stenospora' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Ramalina stenospora</Link></li>
                            <li><Link to='/lichmdb/ricasolia-amplissima' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Ricasolia amplissima</Link></li>
                            <li><Link to='/lichmdb/roccella-fuciformis' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Roccella fuciformis</Link></li>
                            <li><Link to='/lichmdb/roccella-montagnei' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Roccella montagnei</Link></li>
                            <li><Link to='/lichmdb/sphaerophorus-fragilis' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Sphaerophorus fragilis</Link></li>
                            <li><Link to='/lichmdb/stereocaulon-azoreum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Stereocaulon azoreum</Link></li>
                            <li><Link to='/lichmdb/stereocaulon-corticatulum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Stereocaulon corticatulum</Link></li>
                            <li><Link to='/lichmdb/stereocaulon-japonicum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Stereocaulon japonicum</Link></li>
                            <li><Link to='/lichmdb/stereocaulon-paschale' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Stereocaulon paschale</Link></li>
                            <li><Link to='/lichmdb/stereocaulon-ramulosum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Stereocaulon ramulosum</Link></li>
                            <li><Link to='/lichmdb/stereocaulon-sasakii' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Stereocaulon sasakii</Link></li>
                            <li><Link to='/lichmdb/sulcaria-sulcata' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Sulcaria sulcata</Link></li>
                            <li><Link to='/lichmdb/stereocaulon-vesuvianum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Stereocaulon vesuvianum</Link></li>
                    </ul>
                        )}
                      </li>
                      <li>
                        <button
                          className='w-full text-left flex items-center justify-between px-12 py-1 text-white/80 hover:bg-white/10'
                          onClick={() => setIsLichens5MobileOpen(!isLichens5MobileOpen)}
                        >
                          <span>Lichens (T-Z)</span>
                          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                          </svg>
                        </button>
                        {isLichens5MobileOpen && (
                          <ul className='bg-white/5 space-y-1 max-h-64 overflow-y-auto'>
                            <li><Link to='/lichmdb/teloschistes-chrysophthalmus' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Teloschistes chrysophthalmus</Link></li>
                            <li><Link to='/lichmdb/teloschistes-flavicans' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Teloschistes flavicans</Link></li>
                            <li><Link to='/lichmdb/umbilicaria-cinereorufescens' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Umbilicaria cinereorufescens</Link></li>
                            <li><Link to='/lichmdb/umbilicaria-crustulosa' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Umbilicaria crustulosa</Link></li>
                            <li><Link to='/lichmdb/umbilicaria-esculenta' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Umbilicaria esculenta</Link></li>
                            <li><Link to='/lichmdb/umbilicaria-hypococcinea' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Umbilicaria hypococcinea</Link></li>
                            <li><Link to='/lichmdb/umbilicaria-polyphylla' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Umbilicaria polyphylla</Link></li>
                            <li><Link to='/lichmdb/umbilicaria-proboscidea' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Umbilicaria proboscidea</Link></li>
                            <li><Link to='/lichmdb/umbilicaria-spodochroa' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Umbilicaria spodochroa</Link></li>
                            <li><Link to='/lichmdb/usnea-articulata' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Usnea articulata</Link></li>
                            <li><Link to='/lichmdb/usnea-florida' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Usnea florida</Link></li>
                            <li><Link to='/lichmdb/usnea-undulata' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Usnea undulata</Link></li>
                            <li><Link to='/lichmdb/xalocoa-ocellata' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Xalocoa ocellata</Link></li>
                            <li><Link to='/lichmdb/xanthoparmelia-camtschadalis' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Xanthoparmelia camtschadalis</Link></li>
                            <li><Link to='/lichmdb/xanthoparmelia-tinctina' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Xanthoparmelia tinctina</Link></li>
                             </ul>
                        )}
                      </li>
                    </ul>
                  )}
                </li>
                <li><Link to='/lichmdb/adme' onClick={closeAllMenus} className='block px-8 py-1 text-white/90 hover:bg-white/10'>ADME</Link></li>
                <li><Link to='/lichmdb/statistics' onClick={closeAllMenus} className='block px-8 py-1 text-white/90 hover:bg-white/10'>Statistics</Link></li>
                <li><Link to='/lichmdb/pharmacological' onClick={closeAllMenus} className='block px-8 py-1 text-white/90 hover:bg-white/10'>Pharmacological Activities</Link></li>
              </ul>
            )}
            
          </li>


          {/* TMDb (mobile) */}
          <li>
            <button
              className='w-full text-left flex items-center justify-between px-4 py-1 text-white hover:bg-white/10'
             onClick={() => setIsTrichodermaMobileOpen(!isTrichodermaMobileOpen)}
            >
              <span className='text-base'>TMDb</span>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
              </svg>
            </button>
            {isTrichodermaMobileOpen && (
              <ul className='bg-white/10 space-y-1'>
                <li>
                  <button
                    className='w-full text-left flex items-center justify-between px-8 py-1 text-white/90 hover:bg-white/10'
                    onClick={() => setIsTrichoderma1MobileOpen(!isTrichoderma1MobileOpen)}
                  >
                    <span>Trichoderma</span>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                    </svg>
                  </button>
                  {isTrichoderma1MobileOpen && (
                    <ul className='bg-white/5 space-y-1'>
                      <li>
                        <button
                          className='w-full text-left flex items-center justify-between px-12 py-1 text-white/80 hover:bg-white/10'
                          onClick={() => setIsTrichoderma2MobileOpen(!isTrichoderma2MobileOpen)}
                        >
                          <span>Trichoderma (A-G)</span>
                          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                          </svg>
                        </button>
                        {isTrichoderma2MobileOpen && (
                          <ul className='bg-white/5 space-y-1 max-h-64 overflow-y-auto'>
                            <li><Link to='/trichoderma/album' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Album</Link></li>
                            <li><Link to='/trichoderma/applanatum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Applanatum</Link></li>
                            <li><Link to='/trichoderma/asperellum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Asperellum</Link></li>
                            <li><Link to='/trichoderma/atroviride' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Atroviride</Link></li>
                            <li><Link to='/trichoderma/aureoviride' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Aureoviride</Link></li>
                            <li><Link to='/trichoderma/avellaneum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Avellaneum</Link></li>
                            <li><Link to='/trichoderma/brevicompactum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Brevicompactum</Link></li>
                            <li><Link to='/trichoderma/cerinum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Cerinum</Link></li>
                            <li><Link to='/trichoderma/citrinoviride' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Citrinoviride</Link></li>
                            <li><Link to='/trichoderma/citrinum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Citrinum</Link></li>
                            <li><Link to='/trichoderma/cornu-damae' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Cornu-Damae</Link></li>
                            <li><Link to='/trichoderma/crassum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Crassum</Link></li>
                            <li><Link to='/trichoderma/cremeum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Cremeum</Link></li>
                            <li><Link to='/trichoderma/deliquescens' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Deliquescens</Link></li>
                            <li><Link to='/trichoderma/gamsii' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Gamsii</Link></li>
                    </ul>
                        )}
                      </li>
                      <li>
                        <button
                          className='w-full text-left flex items-center justify-between px-12 py-1 text-white/80 hover:bg-white/10'
                          onClick={() => setIsTrichoderma2MobileOpen(!isTrichoderma2MobileOpen)}
                        >
                          <span>Trichoderma (H-Z)</span>
                          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                          </svg>
                        </button>
                        {isTrichoderma2MobileOpen && (
                    <ul className='bg-white/5 space-y-1 max-h-64 overflow-y-auto'>
                            <li><Link to='/trichoderma/hamatum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Hamatum</Link></li>
                            <li><Link to='/trichoderma/harzianum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Harzianum</Link></li>
                            <li><Link to='/trichoderma/hypocrea-muroiana' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Hypocrea-Muroiana</Link></li>
                            <li><Link to='/trichoderma/hypoxylon' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Hypoxylon</Link></li>
                            <li><Link to='/trichoderma/koningii' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Koningii</Link></li>
                            <li><Link to='/trichoderma/koningiopsis' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Koningiopsis</Link></li>
                            <li><Link to='/trichoderma/longibrachiatum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Longibrachiatum</Link></li>
                            <li><Link to='/trichoderma/polysporum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Polysporum</Link></li>
                            <li><Link to='/trichoderma/reesei' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Reesei</Link></li>
                            <li><Link to='/trichoderma/saturnisporum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Saturnisporum</Link></li>
                            <li><Link to='/trichoderma/spirale' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Spirale</Link></li>
                            <li><Link to='/trichoderma/velutinum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Velutinum</Link></li>
                            <li><Link to='/trichoderma/virens' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Virens</Link></li>
                            <li><Link to='/trichoderma/viride' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Viride</Link></li>
                            <li><Link to='/trichoderma/vinosum' onClick={closeAllMenus} className='block px-16 py-0.3 text-white/70 hover:bg-white/10'>Trichoderma Vinosum</Link></li>
                      </ul>
                  )}
                      </li>
                    </ul>
                  )}
                </li>
                <li><Link to='/trichoderma/adme' onClick={closeAllMenus} className='block px-8 py-1 text-white/90 hover:bg-white/10'>ADME</Link></li>
                <li><Link to='/trichoderma/statistics' onClick={closeAllMenus} className='block px-8 py-1 text-white/90 hover:bg-white/10'>Statistics</Link></li>
                <li><Link to='/trichoderma/pharmacological' onClick={closeAllMenus} className='block px-8 py-1 text-white/90 hover:bg-white/10'>Pharmacological Activities</Link></li>
              </ul>
            )}
          </li>

          {/* CMDb (mobile) */}
          <li>
            <button
              className='w-full text-left flex items-center justify-between px-4 py-1 text-white hover:bg-white/10'
              onClick={() => setIsCmdbMobileOpen(!isCmdbMobileOpen)}
            >
              <span className='text-base'>CMDb</span>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
              </svg>
            </button>
            {isCmdbMobileOpen && (
              <ul className='bg-white/10 space-y-1'>
                <li>
                  <button
                    className='w-full text-left flex items-center justify-between px-8 py-1 text-white/90 hover:bg-white/10'
                    onClick={() => setIsCerealsMobileOpen(!isCerealsMobileOpen)}
                  >
                    <span>Cereals</span>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                    </svg>
                  </button>
                  {isCerealsMobileOpen && (
                    <ul className='bg-white/5 space-y-1 max-h-64 overflow-y-auto'>
                      <li><Link to='/Cereals/wheat' onClick={closeAllMenus} className='block px-12 py-0.3 text-white/80 hover:bg-white/10'>Wheat</Link></li>
                      <li><Link to='/Cereals/rice' onClick={closeAllMenus} className='block px-12 py-0.3 text-white/80 hover:bg-white/10'>Rice</Link></li>
                      <li><Link to='/Cereals/sorghum' onClick={closeAllMenus} className='block px-12 py-0.3 text-white/80 hover:bg-white/10'>Sorghum</Link></li>
                      <li><Link to='/Cereals/ragi' onClick={closeAllMenus} className='block px-12 py-0.3 text-white/80 hover:bg-white/10'>Ragi</Link></li>
                      <li><Link to='/Cereals/barley' onClick={closeAllMenus} className='block px-12 py-0.3 text-white/80 hover:bg-white/10'>Barley</Link></li>
                      <li><Link to='/Cereals/maize' onClick={closeAllMenus} className='block px-12 py-0.3 text-white/80 hover:bg-white/10'>Maize</Link></li>
                      <li><Link to='/Cereals/bajra' onClick={closeAllMenus} className='block px-12 py-0.3 text-white/80 hover:bg-white/10'>Bajra</Link></li>
                    </ul>
                  )}
                </li>
                <li><Link to='/Cereals/adme' onClick={closeAllMenus} className='block px-8 py-1 text-white/90 hover:bg-white/10'>ADME</Link></li>
                <li><Link to='/Cereals/statistics' onClick={closeAllMenus} className='block px-8 py-1 text-white/90 hover:bg-white/10'>Statistics</Link></li>
                <li><Link to='/Cereals/pharmcological' onClick={closeAllMenus} className='block px-8 py-1 text-white/90 hover:bg-white/10'>Pharmacological Activities</Link></li>
                
              </ul>
            )}
          </li>


          {/* More (mobile) */}
          <li>
            <button
              className='w-full text-left flex items-center justify-between px-4 py-1 text-white hover:bg-white/10'
              onClick={() => setIsInfoMobileOpen(!isInfoMobileOpen)}
            >
              <span className='text-base'>More</span>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
              </svg>
            </button>
            {isInfoMobileOpen && (
              <ul className='bg-white/10 space-y-1'>
                <li><Link to='/author' onClick={closeAllMenus} className='block px-8 py-1 text-white/90 hover:bg-white/10'>Author</Link></li>
                <li><Link to='/acknowledgements' onClick={closeAllMenus} className='block px-8 py-1 text-white/90 hover:bg-white/10'>Acknowledgements</Link></li>
                <li><Link to='/help' onClick={closeAllMenus} className='block px-8 py-1 text-white/90 hover:bg-white/10'>Help</Link></li>
              </ul>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
}
