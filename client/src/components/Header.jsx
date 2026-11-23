import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// import logo from '../Image/logo.png'
import taxonomy from '../fmdb.js'
import dmdbTaxonomy from '../dmdb.js'

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSmdbMobileOpen, setIsSmdbMobileOpen] = useState(false);
  const [isGmdbMobileOpen, setIsGmdbMobileOpen] = useState(false);
  const [isGymnospermsMobileOpen, setIsGymnospermsMobileOpen] = useState(false);
  const [isGmdb1MobileOpen, setIsGmdb1MobileOpen] = useState(false);
  const [isGmdb2MobileOpen, setIsGmdb2MobileOpen] = useState(false);
  const [isGmdb3MobileOpen, setIsGmdb3MobileOpen] = useState(false);
  const [isFmdbMobileOpen, setIsFmdbMobileOpen] = useState(false);
  const [isFmdb1MobileOpen, setIsFmdb1MobileOpen] = useState(false);
  const [isFmdb2MobileOpen, setIsFmdb2MobileOpen] = useState(false);
  const [isFmdbFruitsMobileOpen, setIsFmdbFruitsMobileOpen] = useState(false);
  const [isDmdbMobileOpen, setIsDmdbMobileOpen] = useState(false);
  const [isDmdb1MobileOpen, setIsDmdb1MobileOpen] = useState(false);
  const [isDmdb2MobileOpen, setIsDmdb2MobileOpen] = useState(false);
  const [isDmdbSpeciesMobileOpen, setIsDmdbSpeciesMobileOpen] = useState(false);
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
  const [isTrichoderma3MobileOpen, setIsTrichoderma3MobileOpen] = useState(false);
  const [isInfoMobileOpen, setIsInfoMobileOpen] = useState(false);
  const [isMetabolitesMobileOpen, setIsMetabolitesMobileOpen] = useState(false);
  const [isMetaCmdbMobileOpen, setIsMetaCmdbMobileOpen] = useState(false);
  const [isMetaDmdbMobileOpen, setIsMetaDmdbMobileOpen] = useState(false);
  const [isMetaFmdbMobileOpen, setIsMetaFmdbMobileOpen] = useState(false);
  const [isMetaGmdbMobileOpen, setIsMetaGmdbMobileOpen] = useState(false);
  const [isMetaLmdbMobileOpen, setIsMetaLmdbMobileOpen] = useState(false);
  const [isMetaSmdbMobileOpen, setIsMetaSmdbMobileOpen] = useState(false);
  const [isMetaTmdbMobileOpen, setIsMetaTmdbMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [suppressHover, setSuppressHover] = useState(false);

  function slugify(value) {
    return String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }

  const fmdbFruitFiles = Object.entries(taxonomy).map(([key, v]) => ({
    name: v.scientificName,
    category: 'FMDB',
    path: `/fmdb/${slugify(v.scientificName)}`
  }));
  const fmdbFruitFilesSorted = [...fmdbFruitFiles].sort((a, b) => a.name.localeCompare(b.name));
  const firstAlpha = (s) => {
    const m = String(s).match(/[A-Za-z]/);
    return m ? m[0].toUpperCase() : 'Z';
  };
  const fmdbSection1 = fmdbFruitFilesSorted.filter(f => {
    const ch = firstAlpha(f.name);
    return ch >= 'A' && ch <= 'M';
  });
  const fmdbSection2 = fmdbFruitFilesSorted.filter(f => {
    const ch = firstAlpha(f.name);
    return ch >= 'N' && ch <= 'Z';
  });

  const dmdbSpeciesFiles = Object.entries(dmdbTaxonomy).map(([key, v]) => ({
    name: v.scientificName,
    category: 'LeSeMeDa',
    path: `/LeSeMeDa/${slugify(v.scientificName)}`
  }));
  const dmdbSpeciesFilesSorted = [...dmdbSpeciesFiles].sort((a, b) => a.name.localeCompare(b.name));
  const dmdbSection1 = dmdbSpeciesFilesSorted.filter(f => {
    const ch = firstAlpha(f.name);
    return ch >= 'A' && ch <= 'M';
  });
  const dmdbSection2 = dmdbSpeciesFilesSorted.filter(f => {
    const ch = firstAlpha(f.name);
    return ch >= 'N' && ch <= 'Z';
  });

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  // Function to close all mobile menus when a link is clicked
  const closeAllMenus = () => {
    setIsMobileOpen(false);
    setIsSmdbMobileOpen(false);
    setIsGmdbMobileOpen(false);
    setIsGymnospermsMobileOpen(false);
    setIsGmdb1MobileOpen(false);
    setIsGmdb2MobileOpen(false);
    setIsGmdb3MobileOpen(false);
    setIsFmdbMobileOpen(false);
    setIsFmdb1MobileOpen(false);
    setIsFmdb2MobileOpen(false);
    setIsDmdbMobileOpen(false);
    setIsDmdb1MobileOpen(false);
    setIsDmdb2MobileOpen(false);
    setIsDmdbSpeciesMobileOpen(false);
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
    setIsTrichoderma3MobileOpen(false);
    setIsInfoMobileOpen(false);
    setIsMetabolitesMobileOpen(false);
    setIsMetaCmdbMobileOpen(false);
    setIsMetaDmdbMobileOpen(false);
    setIsMetaFmdbMobileOpen(false);
    setIsMetaGmdbMobileOpen(false);
    setIsMetaLmdbMobileOpen(false);
    setIsMetaSmdbMobileOpen(false);
    setIsMetaTmdbMobileOpen(false);
    setSearchResults([]);
    setSearchQuery('');
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const allFiles = [
      // Spices1 files
      { name: 'Alkanna tinktoria', category: 'Spices1', path: '/smdb/ratanjot' },
      { name: 'Allium sativum', category: 'Spices1', path: '/smdb/lahsun' },
      { name: 'Allium cepa', category: 'Spices1', path: '/smdb/pyaj' },
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
      // { name: 'Mangifera indica', category: 'Spices2', path: '/smdb/mangifera-indica' },
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
      { name: 'Umbilicaria polyphylla', category: 'LMDb', path: '/lichmdb/umbilicaria-polyphylla1' },
      { name: 'Umbilicaria proboscidea', category: 'LMDb', path: '/lichmdb/umbilicaria-proboscidea' },
      { name: 'Umbilicaria spodochroa', category: 'LMDb', path: '/lichmdb/umbilicaria-spodochroa' },
      { name: 'Umbilicaria spodochroa', category: 'LMDb', path: '/lichmdb/umbilicaria-spodochroa1' },
      { name: 'Usnea articulata', category: 'LMDb', path: '/lichmdb/usnea-articulata' },
      { name: 'Usnea florida', category: 'LMDb', path: '/lichmdb/usnea-florida' },
      { name: 'Usnea undulata', category: 'LMDb', path: '/lichmdb/usnea-undulata' },
      { name: 'Xalocoa ocellata', category: 'LMDb', path: '/lichmdb/xalocoa-ocellata' },
      { name: 'Xanthoparmelia competita', category: 'LMDb', path: '/lichmdb/Xanthoparmelia competita' },
      { name: 'Xanthoparmelia camtschadalis', category: 'LMDb', path: '/lichmdb/xanthoparmelia-camtschadalis' },
      { name: 'Xanthoparmelia tinctina', category: 'LMDb', path: '/lichmdb/xanthoparmelia-tinctina' },
      { name: 'GMDB About', category: 'GMDB', path: '/gmdb/about' },
      { name: 'GMDB ADME', category: 'GMDB', path: '/gmdb/adme' },
      { name: 'GMDB Statistics', category: 'GMDB', path: '/gmdb/statistics' },
      { name: 'GMDB Pharmacological', category: 'GMDB', path: '/gmdb/pharmacological' },
      { name: 'GMDB Toxicity Prediction', category: 'GMDB', path: '/gmdb/toxicityPrediction' },
      { name: 'Abies pindrow', category: 'GMDB', path: '/gmdb/abies-pindrow' },
      { name: 'Abies sachalinensis', category: 'GMDB', path: '/gmdb/abies-sachalinensis' },
      { name: 'Agathis alba', category: 'GMDB', path: '/gmdb/agathis-alba' },
      { name: 'Agathis dammara', category: 'GMDB', path: '/gmdb/agathis-dammara' },
      { name: 'Agathis palmerstonii', category: 'GMDB', path: '/gmdb/agathis-palmerstonii' },
      { name: 'Araucaria columnaris', category: 'GMDB', path: '/gmdb/araucaria-columnaris' },
      { name: 'Calocedrus macrolepis', category: 'GMDB', path: '/gmdb/calocedrus-macrolepis' },
      { name: 'Cedrus deodara', category: 'GMDB', path: '/gmdb/cedrus-deodara' },
      { name: 'Chamaecyparis lawsoniana', category: 'GMDB', path: '/gmdb/chamaecyparis-lawsoniana' },
      { name: 'Cycas beddomei', category: 'GMDB', path: '/gmdb/cycas-beddomei' },
      { name: 'Cycas circinalis', category: 'GMDB', path: '/gmdb/cycas-circinalis' },
      { name: 'Cycas revoluta', category: 'GMDB', path: '/gmdb/cycas-revoluta' },
      { name: 'Ephedra distachya', category: 'GMDB', path: '/gmdb/ephedra-distachya' },
      { name: 'Ephedra equisetina', category: 'GMDB', path: '/gmdb/ephedra-equisetina' },
      { name: 'Ephedra gerardiana', category: 'GMDB', path: '/gmdb/ephedra-gerardiana' },
      { name: 'Ephedra intermedia', category: 'GMDB', path: '/gmdb/ephedra-intermedia' },
      { name: 'Ephedra likiangensis', category: 'GMDB', path: '/gmdb/ephedra-likiangensis' },
      { name: 'Ephedra lomatolepis', category: 'GMDB', path: '/gmdb/ephedra-lomatolepis' },
      { name: 'Ephedra minuta', category: 'GMDB', path: '/gmdb/ephedra-minuta' },
      { name: 'Ephedra monosperma', category: 'GMDB', path: '/gmdb/ephedra-monosperma' },
      { name: 'Ephedra sinica', category: 'GMDB', path: '/gmdb/ephedra-sinica' },
      { name: 'Ephedra regeliana', category: 'GMDB', path: '/gmdb/ephedra-regeliana' },
      { name: 'Ginkgo biloba', category: 'GMDB', path: '/gmdb/ginkgo-biloba' },
      { name: 'Juniperus communis', category: 'GMDB', path: '/gmdb/juniperus-communis' },
      { name: 'Picea smithiana', category: 'GMDB', path: '/gmdb/picea-smithiana' },
      { name: 'Pinus armandii', category: 'GMDB', path: '/gmdb/pinus-armandii' },
      { name: 'Pinus densiflora', category: 'GMDB', path: '/gmdb/pinus-densiflora' },
      { name: 'Pinus edulis', category: 'GMDB', path: '/gmdb/pinus-edulis' },
      { name: 'Pinus elliottii', category: 'GMDB', path: '/gmdb/pinus-elliottii' },
      { name: 'Pinus flexilis', category: 'GMDB', path: '/gmdb/pinus-flexilis' },
      { name: 'Pinus heldreichii', category: 'GMDB', path: '/gmdb/pinus-heldreichii' },
      { name: 'Pinus luchuensis', category: 'GMDB', path: '/gmdb/pinus-luchuensis' },
      { name: 'Pinus monophylla', category: 'GMDB', path: '/gmdb/pinus-monophylla' },
      { name: 'Pinus montezumae', category: 'GMDB', path: '/gmdb/pinus-montezumae' },
      { name: 'Pinus monticola', category: 'GMDB', path: '/gmdb/pinus-monticola' },
      { name: 'Pinus nigra', category: 'GMDB', path: '/gmdb/pinus-nigra' },
      { name: 'Pinus palustris', category: 'GMDB', path: '/gmdb/pinus-palustris' },
      { name: 'Pinus pinea', category: 'GMDB', path: '/gmdb/pinus-pinea' },
      { name: 'Pinus ponderosa', category: 'GMDB', path: '/gmdb/pinus-ponderosa' },
      { name: 'Pinus pumila', category: 'GMDB', path: '/gmdb/pinus-pumila' },
      { name: 'Pinus radiata', category: 'GMDB', path: '/gmdb/pinus-radiata' },
      { name: 'Pinus resinosa', category: 'GMDB', path: '/gmdb/pinus-resinosa' },
      { name: 'Pinus sibirica', category: 'GMDB', path: '/gmdb/pinus-sibirica' },
      { name: 'Pinus strobus', category: 'GMDB', path: '/gmdb/pinus-strobus' },
      { name: 'Pinus sylvestris', category: 'GMDB', path: '/gmdb/pinus-sylvestris' },
      { name: 'Pinus taeda', category: 'GMDB', path: '/gmdb/pinus-taeda' },
      { name: 'Pinus yunnanensis', category: 'GMDB', path: '/gmdb/pinus-yunnanensis' },
      { name: 'Platycladus orientalis', category: 'GMDB', path: '/gmdb/platycladus-orientalis' },
      { name: 'Sequoia sempervirens', category: 'GMDB', path: '/gmdb/sequoia-sempervirens' },
      { name: 'Taiwania cryptomerioides', category: 'GMDB', path: '/gmdb/taiwania-cryptomerioides' },
      { name: 'Taxus baccata', category: 'GMDB', path: '/gmdb/taxus-baccata' },
      { name: 'Taxus brevifolia', category: 'GMDB', path: '/gmdb/taxus-brevifolia' },
      { name: 'Taxus canadensis', category: 'GMDB', path: '/gmdb/taxus-canadensis' },
      { name: 'Taxus cuspidata', category: 'GMDB', path: '/gmdb/taxus-cuspidata' },
      { name: 'Taxus mairei', category: 'GMDB', path: '/gmdb/taxus-mairei' },
      { name: 'Taxus sumatrana', category: 'GMDB', path: '/gmdb/taxus-sumatrana' },
      { name: 'Taxus wallichiana', category: 'GMDB', path: '/gmdb/taxus-wallichiana' },
      { name: 'Tetraclinis articulata', category: 'GMDB', path: '/gmdb/tetraclinis-articulata' },
      { name: 'Thuja occidentalis', category: 'GMDB', path: '/gmdb/thuja-occidentalis' },
      { name: 'Thuja standishii', category: 'GMDB', path: '/gmdb/thuja-standishii' },
      { name: 'Thuja plicata', category: 'GMDB', path: '/gmdb/thuja-plicata' },
      ...fmdbFruitFiles,
      ...dmdbSpeciesFiles
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

    setSearchResults(filteredResults.slice(0, 12));
  };

  const handleNavigateClickCapture = (e) => {
    const anchor = e.target && e.target.closest && e.target.closest('a[href]');
    if (anchor) {
      setSuppressHover(true);
      closeAllMenus();
    }
  };

  const handleNavMouseLeave = () => {
    setSuppressHover(false);
  };

  return (
    <nav
      className={`fixed start-0 top-0 z-20 mb-10 w-full bg-gradient-to-r from-[#1BD11B] to-[#57C785] shadow-[0_10px_30px_rgba(15,23,42,0.12)] ${suppressHover ? 'dropdown-suppress' : ''}`}
      onClickCapture={handleNavigateClickCapture}
      onMouseLeave={handleNavMouseLeave}
    >
      <div className='mx-auto flex min-h-[86px] w-full max-w-[1440px] items-center gap-3 px-3 py-2 sm:px-4 lg:gap-6 lg:px-6'>
        <Link
          to='/'
          className='order-first mb-0 min-w-0 shrink-0 font-medium text-gray-900 title-font md:mb-0'
        >
          {/* <img src='/logo.png' alt='Logo' className='ml-4 md:ml-8 my-0 w-auto h-24 md:h-28 object-contain' /> */}
          <span className='block px-1 py-1 text-lg font-bold leading-none sm:px-2 sm:text-2xl md:text-[2rem]'>
            <span className='block whitespace-nowrap text-[#fad73d]'>Food Drugs &</span>
            <span className='mt-1 block whitespace-nowrap text-black'>Pharmacology</span>
          </span>
        </Link>
        <div className='ml-auto md:hidden'>
          <button
            onClick={toggleMobileMenu}
            className='inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white/10 text-black shadow-sm backdrop-blur-sm transition hover:bg-white/15'
            aria-label='Open menu'
          >
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
        <ul className='hidden min-w-0 flex-1 items-center justify-center gap-1 text-base md:flex lg:gap-3 xl:gap-5'>
          <li>
            <Link to='/'>
              <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                <span className='ml-0.5 text-lg text-black hover:text-gray-900'>
                  Home
                </span>
              </span>
            </Link>
          </li>

          

          {/* Metabolites Database dropdown menu */} 
          <li className='menu'>
            <Link className=''>
              <span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'>
                <span className='ml-0.5 text-lg text-black hover:text-gray-900'>
                  Metabolites Database
                </span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2.5}
                  stroke='#000000'
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
            <div className='menu-bar-1 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '230px' }}>
              <ul>
                

                <li className='hover-me'>
                  <Link>
                    <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-1 font-medium'>
                      <span className='ml-1.5 text-lg text-black hover:text-gray-900'>LeSeMeDa</span>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                      </svg>
                    </span>
                  </Link>
                  <div className='menu-bar-9 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '230px' }}>
                    <ul>
                      <li>
                        <Link to='/LeSeMeDa/about'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>About</span>
                          </span>
                        </Link>
                      </li>
                      <li className='hover-me'>
                        <Link>
                          <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>Legumes</span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                            </svg>
                          </span>
                        </Link>
                        <div className='menu-bar-22 menu-right hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '280px' }}>
                          <ul>
                            <li className='hover-me'>
                              <Link>
                                <span className='relative inline-flex items-center hover:text-gray-900 rounded px-0.5 py-1 font-medium'>
                                  <span className='ml-0.5 text-base text-black hover:text-gray-900'>Legumes (A–M)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                                  </svg>
                                </span>
                              </Link>
                              <div className='menu-bar-3 menu-right hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '300px' }}>
                                <ul>
                                  {dmdbSection1.map((f, idx) => (
                                    <li key={idx}>
                                      <Link to={f.path}>
                                        <span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'>
                                          <span className='ml-1.5 text-base text-black hover:text-gray-900'>{f.name}</span>
                                        </span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </li>
                            <li className='hover-me'>
                              <Link>
                                <span className='relative inline-flex items-center hover:text-gray-900 rounded px-0.5 py-1 font-medium'>
                                  <span className='ml-0.5 text-base text-black hover:text-gray-900'>Legumes (N–Z)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                                  </svg>
                                </span>
                              </Link>
                              <div className='menu-bar-3 menu-right hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '300px' }}>
                                <ul>
                                  {dmdbSection2.map((f, idx) => (
                                    <li key={idx}>
                                      <Link to={f.path}>
                                        <span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'>
                                          <span className='ml-1.5 text-base text-black hover:text-gray-900'>{f.name}</span>
                                        </span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link to='/LeSeMeDa/adme'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>ADME</span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/LeSeMeDa/statistics'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>Statistics</span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/LeSeMeDa/pharmacological'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 pb-2 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>Pharmacological Activities</span>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li> 

                <li className='hover-me'>
                  <Link>
                    <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-1 font-medium'>
                      <span className='ml-1.5 text-lg text-black hover:text-gray-900'>FMDB</span>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                      </svg>
                    </span>
                  </Link>
                  <div className='menu-bar-9 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '230px' }}>
                    <ul>
                      <li>
                        <Link to='/fmdb/about'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>About</span>
                          </span>
                        </Link>
                      </li>
                      <li className='hover-me'>
                        <Link>
                          <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>Fruits</span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                            </svg>
                          </span>
                        </Link>
                        <div className='menu-bar-22 menu-right hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '280px' }}>
                          <ul>
                            <li className='hover-me'>
                              <Link>
                                <span className='relative inline-flex items-center hover:text-gray-900 rounded px-0.5 py-1 font-medium'>
                                  <span className='ml-0.5 text-base text-black hover:text-gray-900'>Fruits (A–M)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                                  </svg>
                                </span>
                              </Link>
                              <div className='menu-bar-3 menu-right hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '300px' }}>
                                <ul>
                                  {fmdbSection1.map((f, idx) => (
                                    <li key={idx}>
                                      <Link to={f.path}>
                                        <span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'>
                                          <span className='ml-1.5 text-base text-black hover:text-gray-900'>{f.name}</span>
                                        </span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </li>
                            <li className='hover-me'>
                              <Link>
                                <span className='relative inline-flex items-center hover:text-gray-900 rounded px-0.5 py-1 font-medium'>
                                  <span className='ml-0.5 text-base text-black hover:text-gray-900'>Fruits (N–Z)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                                  </svg>
                                </span>
                              </Link>
                              <div className='menu-bar-3 menu-right hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '300px' }}>
                                <ul>
                                  {fmdbSection2.map((f, idx) => (
                                    <li key={idx}>
                                      <Link to={f.path}>
                                        <span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'>
                                          <span className='ml-1.5 text-base text-black hover:text-gray-900'>{f.name}</span>
                                        </span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link to='/fmdb/adme'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>ADME</span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/fmdb/statistics'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>Statistics</span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/fmdb/pharmacological'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 pb-2 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>Pharmacological Activities</span>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className='hover-me'>
                  <Link>
                    <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-1 font-medium'>
                      <span className='ml-1.5 text-lg text-black hover:text-gray-900'>TMDB</span>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                      </svg>
                    </span>
                  </Link>
                  <div className='menu-bar-9 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '230px' }}>
                    <ul>
                      <li>
                        <Link to='/trichoderma/about'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>About</span>
                          </span>
                        </Link>
                      </li>
                      <li className='hover-me'>
                        <Link>
                          <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma</span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                            </svg>
                          </span>
                        </Link>
                        <div className='menu-bar-2 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '280px' }}>
                          <ul>
                            <li className='hover-me'>
                              <Link>
                                <span className='relative inline-flex items-center hover:text-gray-900 rounded px-0.5 py-1 font-medium'>
                                  <span className='ml-0.5 text-base text-black hover:text-gray-900'>Trichoderma (A-G)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                                  </svg>
                                </span>
                              </Link>
                              <div className='menu-bar-9 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '320px' }}>
                                <ul>
                                  {/* <li><Link to='/trichoderma/album'><span className='relative inline-flex items-center rounded px-0.3 py-0.2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma album</span></span></Link></li> */}
                                  <li><Link to='/trichoderma/applanatum'><span className='relative inline-flex items-center rounded px-0.3 py-0.2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma applanatum</span></span></Link></li>
                                  <li><Link to='/trichoderma/asperellum'><span className='relative inline-flex items-center rounded px-0.3 py-0.2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma asperellum</span></span></Link></li>
                                  <li><Link to='/trichoderma/atroviride'><span className='relative inline-flex items-center rounded px-0.3 py-0.2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma atroviride</span></span></Link></li>
                                  <li><Link to='/trichoderma/aureoviride'><span className='relative inline-flex items-center rounded px-0.3 py-0.2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma aureoviride</span></span></Link></li>
                                  <li><Link to='/trichoderma/avellaneum'><span className='relative inline-flex items-center rounded px-0.3 py-0.2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma avellaneum</span></span></Link></li>
                                  <li><Link to='/trichoderma/brevicompactum'><span className='relative inline-flex items-center rounded px-0.3 py-0.2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma brevicompactum</span></span></Link></li>
                                  <li><Link to='/trichoderma/cerinum'><span className='relative inline-flex items-center rounded px-0.3 py-0.2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma cerinum</span></span></Link></li>
                                  <li><Link to='/trichoderma/citrinoviride'><span className='relative inline-flex items-center rounded px-0.3 py-0.2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma citrinoviride</span></span></Link></li>
                                  <li><Link to='/trichoderma/citrinum'><span className='relative inline-flex items-center rounded px-0.3 py-0.2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma citrinum</span></span></Link></li>
                                  <li><Link to='/trichoderma/cornudamae'><span className='relative inline-flex items-center rounded px-0.3 py-0.2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma cornudamae</span></span></Link></li>
                                  <li><Link to='/trichoderma/crassum'><span className='relative inline-flex items-center rounded px-0.3 py-0.2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma crassum</span></span></Link></li>
                                  <li><Link to='/trichoderma/cremeum'><span className='relative inline-flex items-center rounded px-0.3 py-0.2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma cremeum</span></span></Link></li>
                                  <li><Link to='/trichoderma/deliquescens'><span className='relative inline-flex items-center rounded px-0.3 py-0.2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma deliquescens</span></span></Link></li>
                                  <li><Link to='/trichoderma/gamsii'><span className='relative inline-flex items-center rounded px-0.3 py-0.2  font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma gamsii</span></span></Link></li>
                                </ul>
                              </div>
                            </li>
                            <li className='hover-me'>
                              <Link>
                                <span className='relative inline-flex items-center hover:text-gray-900 rounded px-0.5 py-1 font-medium'>
                                  <span className='ml-0.5 text-base text-black hover:text-gray-900'>Trichoderma (H-Z)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                                  </svg>
                                </span>
                              </Link>
                              <div className='menu-bar-9 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '320px' }}>
                                <ul>
                                  <li><Link to='/trichoderma/hamatum'><span className='relative inline-flex items-center rounded px-0.3 py-0.2 pb-2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma hamatum</span></span></Link></li>
                                  <li><Link to='/trichoderma/harzianum'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma harzianum</span></span></Link></li>
                                  <li><Link to='/trichoderma/hypocreamuroiana'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Hypocrea muroiana</span></span></Link></li>
                                  <li><Link to='/trichoderma/hypoxylon'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma hypoxylon</span></span></Link></li>
                                  <li><Link to='/trichoderma/koningii'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma koningii</span></span></Link></li>
                                    <li><Link to='/trichoderma/koningiopsis'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma koningiopsis</span></span></Link></li>
                                   <li><Link to='/trichoderma/longibrachiatum'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma longibrachiatum</span></span></Link></li>
                                  <li><Link to='/trichoderma/polysporum'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma polysporum</span></span></Link></li>
                                  <li><Link to='/trichoderma/reesei'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma reesei</span></span></Link></li>
                                  <li><Link to='/trichoderma/saturnisporum'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma saturnisporum</span></span></Link></li>
                                  <li><Link to='/trichoderma/spirale'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma spirale</span></span></Link></li>
                                  <li><Link to='/trichoderma/velutinum'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma velutinum</span></span></Link></li>
                                  <li><Link to='/trichoderma/virens'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma virens</span></span></Link></li>
                                  <li><Link to='/trichoderma/viride'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma viride</span></span></Link></li>
                                  <li><Link to='/trichoderma/vinosum'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 pb-2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trichoderma vinosum</span></span></Link></li>
                               
                                </ul>
                              </div>
                            </li>
                            
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link to='/trichoderma/adme'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>ADME</span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/trichoderma/statistics'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>Statistics</span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/trichoderma/pharmacological'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 pb-2 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>Pharmacological Activities</span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/trichoderma/citethisasTmdb'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 pb-2 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>Cite This As</span>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className='hover-me'>
                  <Link>
                    <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-1 font-medium'>
                      <span className='ml-1.5 text-lg text-black hover:text-gray-900'>GMDB</span>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                      </svg>
                    </span>
                  </Link>
                  <div className='menu-bar-9 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '230px' }}>
                    <ul>
                      <li>
                        <Link to='/gmdb/about'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>About</span>
                          </span>
                        </Link>
                      </li>
                      <li className='hover-me'>
                        <Link>
                          <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>Gymnosperm</span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                            </svg>
                          </span>
                        </Link>
                        <div className='menu-bar-2 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '280px' }}>
                          <ul>
                            <li className='hover-me'>
                              <Link>
                                <span className='relative inline-flex items-center hover:text-gray-900 rounded px-0.5 py-1 font-medium'>
                                  <span className='ml-0.5 text-base text-black hover:text-gray-900'>Gymnosperm (A-E)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                                  </svg>
                                </span>
                              </Link>
                              <div className='menu-bar-3 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '300px' }}>
                                <ul>
                                  <li><Link to='/gmdb/abies-pindrow'><span className='relative inline-flex items-center rounded px-0.2 py-0.1 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Abies pindrow</span></span></Link></li>
                                  <li><Link to='/gmdb/abies-sachalinensis'><span className='relative inline-flex items-center rounded px-0.2 py-0.1 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Abies sachalinensis</span></span></Link></li>
                                  <li><Link to='/gmdb/agathis-alba'><span className='relative inline-flex items-center rounded px-0.2 py-0.1 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Agathis alba</span></span></Link></li>
                                  <li><Link to='/gmdb/agathis-dammara'><span className='relative inline-flex items-center rounded px-0.2 py-0.1 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Agathis dammara</span></span></Link></li>
                                  <li><Link to='/gmdb/agathis-palmerstonii'><span className='relative inline-flex items-center rounded px-0.2 py-0.1 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Agathis palmerstonii</span></span></Link></li>
                                  <li><Link to='/gmdb/araucaria-columnaris'><span className='relative inline-flex items-center rounded px-0.2 py-0.1 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Araucaria columnaris</span></span></Link></li>
                                  <li><Link to='/gmdb/calocedrus-macrolepis'><span className='relative inline-flex items-center rounded px-0.2 py-0.1 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Calocedrus macrolepis</span></span></Link></li>
                                  <li><Link to='/gmdb/cedrus-deodara'><span className='relative inline-flex items-center rounded px-0.2 py-0.1 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Cedrus deodara</span></span></Link></li>
                                  <li><Link to='/gmdb/chamaecyparis-lawsoniana'><span className='relative inline-flex items-center rounded px-0.2 py-0.1 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Chamaecyparis lawsoniana</span></span></Link></li>
                                  <li><Link to='/gmdb/cycas-beddomei'><span className='relative inline-flex items-center rounded px-0.2 py-0.1 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Cycas beddomei</span></span></Link></li>
                                  <li><Link to='/gmdb/cycas-circinalis'><span className='relative inline-flex items-center rounded px-0.2 py-0.1 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Cycas circinalis</span></span></Link></li>
                                  <li><Link to='/gmdb/cycas-revoluta'><span className='relative inline-flex items-center rounded px-0.2 py-0.1 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Cycas revoluta</span></span></Link></li>
                                  <li><Link to='/gmdb/ephedra-distachya'><span className='relative inline-flex items-center rounded px-0.2 py-0.1 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Ephedra distachya</span></span></Link></li>
                                  <li><Link to='/gmdb/ephedra-equisetina'><span className='relative inline-flex items-center rounded px-0.2 py-0.1 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Ephedra equisetina</span></span></Link></li>
                                  <li><Link to='/gmdb/ephedra-gerardiana'><span className='relative inline-flex items-center rounded px-0.2 py-0.1 pb-2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Ephedra gerardiana</span></span></Link></li>
                                </ul>
                              </div>
                            </li>
                            <li className='hover-me'>
                              <Link>
                                <span className='relative inline-flex items-center hover:text-gray-900 rounded px-0.5 py-1 font-medium'>
                                  <span className='ml-0.5 text-base text-black hover:text-gray-900'>Gymnosperm (E-P)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                                  </svg>
                                </span>
                              </Link>
                              <div className='menu-bar-3 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '300px' }}>
                                <ul>
                                  <li><Link to='/gmdb/ephedra-intermedia'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Ephedra intermedia</span></span></Link></li>
                                  <li><Link to='/gmdb/ephedra-likiangensis'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Ephedra likiangensis</span></span></Link></li>
                                  <li><Link to='/gmdb/ephedra-lomatolepis'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Ephedra lomatolepis</span></span></Link></li>
                                  <li><Link to='/gmdb/ephedra-minuta'><span className='relative inline-flex items-center rounded px-0.5 py-0.3  font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Ephedra minuta</span></span></Link></li>
                                  <li><Link to='/gmdb/ephedra-monosperma'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Ephedra monosperma</span></span></Link></li>
                                  <li><Link to='/gmdb/ephedra-sinica'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Ephedra sinica</span></span></Link></li>
                                  <li><Link to='/gmdb/ephedra-regeliana'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Ephedra regeliana</span></span></Link></li>
                                  <li><Link to='/gmdb/ginkgo-biloba'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Ginkgo biloba</span></span></Link></li>
                                  <li><Link to='/gmdb/juniperus-communis'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Juniperus communis</span></span></Link></li>
                                  <li><Link to='/gmdb/picea-smithiana'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Picea smithiana</span></span></Link></li>
                                  <li><Link to='/gmdb/pinus-armandii'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Pinus armandii</span></span></Link></li>
                                  <li><Link to='/gmdb/pinus-densiflora'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Pinus densiflora</span></span></Link></li>
                                  <li><Link to='/gmdb/pinus-edulis'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Pinus edulis</span></span></Link></li>
                                  <li><Link to='/gmdb/pinus-elliottii'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Pinus elliottii</span></span></Link></li>
                                  <li><Link to='/gmdb/pinus-flexilis'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 pb-2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Pinus flexilis</span></span></Link></li>
                                </ul>
                              </div>
                            </li>
                            <li className='hover-me'>
                              <Link>
                                <span className='relative inline-flex items-center hover:text-gray-900 rounded px-0.5 py-1 font-medium'>
                                  <span className='ml-0.5 text-base text-black hover:text-gray-900'>Gymnosperm (P-P)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                                  </svg>
                                </span>
                              </Link>
                              <div className='menu-bar-3 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '300px' }}>
                                <ul>
                                  <li><Link to='/gmdb/pinus-heldreichii'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Pinus heldreichii</span></span></Link></li>
                                  <li><Link to='/gmdb/pinus-luchuensis'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Pinus luchuensis</span></span></Link></li>
                                  <li><Link to='/gmdb/pinus-monophylla'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Pinus monophylla</span></span></Link></li>
                                  <li><Link to='/gmdb/pinus-montezumae'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Pinus montezumae</span></span></Link></li>
                                  <li><Link to='/gmdb/pinus-monticola'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Pinus monticola</span></span></Link></li>
                                  <li><Link to='/gmdb/pinus-nigra'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Pinus nigra</span></span></Link></li>
                                  <li><Link to='/gmdb/pinus-palustris'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Pinus palustris</span></span></Link></li>
                                  <li><Link to='/gmdb/pinus-pinea'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Pinus pinea</span></span></Link></li>
                                  <li><Link to='/gmdb/pinus-ponderosa'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Pinus ponderosa</span></span></Link></li>
                                  <li><Link to='/gmdb/pinus-pumila'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Pinus pumila</span></span></Link></li>
                                  <li><Link to='/gmdb/pinus-radiata'><span className='relative inline-flex items-center rounded px-0.5 py-0.3  font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Pinus radiata</span></span></Link></li>
                                  <li><Link to='/gmdb/pinus-resinosa'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Pinus resinosa</span></span></Link></li>
                                  <li><Link to='/gmdb/pinus-sibirica'><span className='relative inline-flex items-center rounded px-0.5 py-0.3  font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Pinus sibirica</span></span></Link></li>
                                  <li><Link to='/gmdb/pinus-strobus'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Pinus strobus</span></span></Link></li>
                                  <li><Link to='/gmdb/pinus-taeda'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Pinus taeda</span></span></Link></li>
                                  
                                  <li><Link to='/gmdb/pinus-sylvestris'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 pb-2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Pinus sylvestris</span></span></Link></li>
                                </ul>
                              </div>
                            </li>
                            <li className='hover-me'>
                              <Link>
                                <span className='relative inline-flex items-center hover:text-gray-900 rounded px-0.5 py-1 font-medium'>
                                  <span className='ml-0.5 text-base text-black hover:text-gray-900'>Gymnosperm (P-T)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                                  </svg>
                                </span>
                              </Link>
                              <div className='menu-bar-3 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '300px' }}>
                                <ul>
                                  <li><Link to='/gmdb/pinus-yunnanensis'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Pinus yunnanensis</span></span></Link></li>
                                  <li><Link to='/gmdb/platycladus-orientalis'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Platycladus orientalis</span></span></Link></li>
                                  <li><Link to='/gmdb/sequoia-sempervirens'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Sequoia sempervirens</span></span></Link></li>
                                  <li><Link to='/gmdb/taiwania-cryptomerioides'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Taiwania cryptomerioides</span></span></Link></li>
                                  <li><Link to='/gmdb/taxus-baccata'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Taxus baccata</span></span></Link></li>
                                  <li><Link to='/gmdb/taxus-brevifolia'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Taxus brevifolia</span></span></Link></li>
                                  <li><Link to='/gmdb/taxus-canadensis'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Taxus canadensis</span></span></Link></li>
                                  <li><Link to='/gmdb/taxus-cuspidata'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Taxus cuspidata</span></span></Link></li>
                                  <li><Link to='/gmdb/taxus-mairei'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Taxus mairei</span></span></Link></li>
                                  <li><Link to='/gmdb/taxus-sumatrana'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Taxus sumatrana</span></span></Link></li>
                                  <li><Link to='/gmdb/taxus-wallichiana'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Taxus wallichiana</span></span></Link></li>
                                  <li><Link to='/gmdb/tetraclinis-articulata'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Tetraclinis articulata</span></span></Link></li>
                                  <li><Link to='/gmdb/thuja-occidentalis'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Thuja occidentalis</span></span></Link></li>
                                  <li><Link to='/gmdb/thuja-standishii'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Thuja standishii</span></span></Link></li>
                                  <li><Link to='/gmdb/thuja-plicata'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 pb-2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Thuja plicata</span></span></Link></li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link to='/gmdb/adme'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>ADME</span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/gmdb/statistics'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>Statistics</span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/gmdb/pharmacological'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>Pharmacological Activities</span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/gmdb/toxicityPrediction'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 pb-2 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>Toxicity Prediction</span>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className='hover-me'>
                  <Link>
                    <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-1 font-medium'>
                      <span className='ml-1.5 text-lg text-black hover:text-gray-900'>LMDB</span>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                      </svg>
                    </span>
                  </Link>
                  <div className='menu-bar-9 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '230px' }}>
                    <ul>
                      <li>
                        <Link to='/lichmdb/about'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>About</span>
                          </span>
                        </Link>
                      </li>
                      <li className='hover-me'>
                        <Link>
                          <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>Lichens</span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                            </svg>
                          </span>
                        </Link>
                        <div className='menu-bar-2 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '280px' }}>
                          <ul>
                            <li className='hover-me'>
                              <Link>
                                <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-0.5 font-medium'>
                                  <span className='ml-1.5 text-base text-black hover:text-gray-900'>Lichens (A-C)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                                  </svg>
                                </span>
                              </Link>
                              <div className='menu-bar-13 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '320px' }}>
                                <ul>
                                  <li><Link to='/lichmdb/alectoria-ochroleuca'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Alectoria ochroleuca</span></span></Link></li>
                                  <li><Link to='/lichmdb/alectoria-sarmentosa'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Alectoria sarmentosa</span></span></Link></li>
                                  <li><Link to='/lichmdb/anzia-hypoleucoides'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Anzia hypoleucoides</span></span></Link></li>
                                  <li><Link to='/lichmdb/candelaria-concolor'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Candelaria concolor</span></span></Link></li>
                                  <li><Link to='/lichmdb/cetraria-islandica'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Cetraria islandica</span></span></Link></li>
                                  <li><Link to='/lichmdb/cladonia-convoluta'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Cladonia convoluta</span></span></Link></li>
                                  <li><Link to='/lichmdb/cladonia-cristatella'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Cladonia cristatella</span></span></Link></li>
                                  <li><Link to='/lichmdb/cladonia-cryptochlorophaea'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Cladonia cryptochlorophaea</span></span></Link></li>
                                  <li><Link to='/lichmdb/cladonia-furcata'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Cladonia furcata</span></span></Link></li>
                                  <li><Link to='/lichmdb/cladonia-macilenta'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Cladonia macilenta</span></span></Link></li>
                                  <li><Link to='/lichmdb/cladonia-mitis'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Cladonia mitis</span></span></Link></li>
                                  <li><Link to='/lichmdb/cladonia-rangiferina'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Cladonia rangiferina</span></span></Link></li>
                                  <li><Link to='/lichmdb/cladonia-stellaris'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Cladonia stellaris</span></span></Link></li>
                                  <li><Link to='/lichmdb/cladonia-verticillata'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Cladonia verticillata</span></span></Link></li>
                                  <li><Link to='/lichmdb/coniocarpon-cinnabarinum'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 pb-2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Coniocarpon cinnabarinum</span></span></Link></li>
                                   </ul>
                              </div>
                            </li>
                            <li className='hover-me'>
                              <Link>
                                <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-0.5 font-medium'>
                                  <span className='ml-1.5 text-base text-black hover:text-gray-900'>Lichens (D-L)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                                  </svg>
                                </span>
                              </Link>
                              <div className='menu-bar-13 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '320px' }}>
                                <ul>
                                  <li><Link to='/lichmdb/dimelaena-oreina'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Dimelaena oreina</span></span></Link></li>
                                  <li><Link to='/lichmdb/dolichousnea-longissima'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Dolichousnea longissima</span></span></Link></li>
                                  <li><Link to='/lichmdb/evernia-prunastri'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 pb-2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Evernia prunastri</span></span></Link></li>
                                  <li><Link to='/lichmdb/flavoparmelia-caperata'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Flavoparmelia caperata</span></span></Link></li>
                                  <li><Link to='/lichmdb/flavoparmelia-haysomii'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Flavoparmelia haysomii</span></span></Link></li>
                                  <li><Link to='/lichmdb/heterodermia-dissecta'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Heterodermia dissecta</span></span></Link></li>
                                  <li><Link to='/lichmdb/hypogymnia-enteromorpha'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Hypogymnia enteromorpha</span></span></Link></li>
                                  <li><Link to='/lichmdb/hypotrachyna-cirrhata'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Hypotrachyna cirrhata</span></span></Link></li>
                                  <li><Link to='/lichmdb/hypotrachyna-leiophylla'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Hypotrachyna leiophylla</span></span></Link></li>
                                  <li><Link to='/lichmdb/lecanora-frustulosa'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Lecanora frustulosa</span></span></Link></li>
                                  <li><Link to='/lichmdb/lecanora-hybocarpa'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Lecanora hybocarpa</span></span></Link></li>
                                  <li><Link to='/lichmdb/lecanora-lividocinerea'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Lecanora lividocinerea</span></span></Link></li>
                                  <li><Link to='/lichmdb/leptogium-saturninum'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Leptogium saturninum</span></span></Link></li>
                                  <li><Link to='/lichmdb/lethariella-cladonioides'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Lethariella cladonioides</span></span></Link></li>
                                  <li><Link to='/lichmdb/lethariella-sernanderi'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 pb-2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Lethariella sernanderi</span></span></Link></li>
                                   </ul>
                              </div>
                            </li>
                            <li className='hover-me'>
                              <Link>
                                <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-0.5 font-medium'>
                                  <span className='ml-1.5 text-base text-black hover:text-gray-900'>Lichens (L-P)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                                  </svg>
                                </span>
                              </Link>
                              <div className='menu-bar-13 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '320px' }}>
                                <ul>
                                  <li><Link to='/lichmdb/lobaria-pulmonaria'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Lobaria pulmonaria</span></span></Link></li>
                                  <li><Link to='/lichmdb/lobaria-scrobiculata'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Lobaria scrobiculata</span></span></Link></li>
                                  <li><Link to='/lichmdb/menegazzia-terebrata'><span className='relative inline-flex items-center rounded px-1.5 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Menegazzia terebrata</span></span></Link></li>
                               
                                  <li><Link to='/lichmdb/ochrolechia-parella'><span className='relative inline-flex items-center rounded px-2 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Ochrolechia parella</span></span></Link></li>
                                  <li><Link to='/lichmdb/ophioparma-ventosa'><span className='relative inline-flex items-center rounded px-2 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Ophioparma ventosa</span></span></Link></li>
                                  <li><Link to='/lichmdb/oxneria-fallax'><span className='relative inline-flex items-center rounded px-2 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Oxneria fallax</span></span></Link></li>
                                  <li><Link to='/lichmdb/parmelia-omphalodes'><span className='relative inline-flex items-center rounded px-2 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Parmelia omphalodes</span></span></Link></li>
                                  <li><Link to='/lichmdb/parmelia-saxatilis'><span className='relative inline-flex items-center rounded px-2 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Parmelia saxatilis</span></span></Link></li>
                                  <li><Link to='/lichmdb/parmotrema-nilgherrense'><span className='relative inline-flex items-center rounded px-2 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Parmotrema nilgherrense</span></span></Link></li>
                                  <li><Link to='/lichmdb/parmotrema-praesorediosum'><span className='relative inline-flex items-center rounded px-2 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Parmotrema praesorediosum</span></span></Link></li>
                                  <li><Link to='/lichmdb/parmotrema-sancti-angelii'><span className='relative inline-flex items-center rounded px-2 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Parmotrema sancti-angelii</span></span></Link></li>
                                  <li><Link to='/lichmdb/parmotrema-tinctorum'><span className='relative inline-flex items-center rounded px-2 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Parmotrema tinctorum</span></span></Link></li>
                                  <li><Link to='/lichmdb/peltigera-canina'><span className='relative inline-flex items-center rounded px-2 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Peltigera canina</span></span></Link></li>
                                  <li><Link to='/lichmdb/peltigera-malacea'><span className='relative inline-flex items-center rounded px-2 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Peltigera malacea</span></span></Link></li>
                                  <li><Link to='/lichmdb/peltigera-venosa'><span className='relative inline-flex items-center rounded px-2 py-0.4 pb-2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Peltigera venosa</span></span></Link></li>
                                   </ul>
                              </div>
                            </li>
                            <li className='hover-me'>
                              <Link>
                                <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-0.5 font-medium'>
                                  <span className='ml-1.5 text-base text-black hover:text-gray-900'>Lichens (P-R)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                                  </svg>
                                </span>
                              </Link>
                              <div className='menu-bar-13 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '320px' }}>
                                <ul>
                                  <li><Link to='/lichmdb/platismatia-glauca'><span className='relative inline-flex items-center rounded px-2 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Platismatia glauca</span></span></Link></li>

                                  <li><Link to='/lichmdb/pseudocyphellaria-faveolata'><span className='relative inline-flex items-center rounded px-2 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Pseudocyphellaria faveolata</span></span></Link></li>
                                  <li><Link to='/lichmdb/pseudocyphellaria-norvegica'><span className='relative inline-flex items-center rounded px-2 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Pseudocyphellaria norvegica</span></span></Link></li>
                                  <li><Link to='/lichmdb/pyrenula-pseudobufonia'><span className='relative inline-flex items-center rounded px-2 py-0.4 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Pyrenula pseudobufonia</span></span></Link></li>
                               
                                  <li><Link to='/lichmdb/ramalina-calicaris'><span className='relative inline-flex items-center rounded px-1.5 py-0.2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Ramalina calicaris</span></span></Link></li>
                                  <li><Link to='/lichmdb/ramalina-dilacerata'><span className='relative inline-flex items-center rounded px-1.5 py-0.2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Ramalina dilacerata</span></span></Link></li>
                                  <li><Link to='/lichmdb/ramalina-farinacea'><span className='relative inline-flex items-center rounded px-1.5 py-0.2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Ramalina farinacea</span></span></Link></li>
                                  <li><Link to='/lichmdb/ramalina-hierrensis'><span className='relative inline-flex items-center rounded px-1.5 py-0.2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Ramalina hierrensis</span></span></Link></li>
                                  <li><Link to='/lichmdb/ramalina-pollinaria'><span className='relative inline-flex items-center rounded px-1.5 py-0.2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Ramalina pollinaria</span></span></Link></li>
                                  <li><Link to='/lichmdb/ramalina-siliquosa'><span className='relative inline-flex items-center rounded px-1.5 py-0.2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Ramalina siliquosa</span></span></Link></li>
                                  <li><Link to='/lichmdb/ramalina-stenospora'><span className='relative inline-flex items-center rounded px-1.5 py-0.2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Ramalina stenospora</span></span></Link></li>
                                  <li><Link to='/lichmdb/ricasolia-amplissima'><span className='relative inline-flex items-center rounded px-1.5 py-0.2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Ricasolia amplissima</span></span></Link></li>
                                  <li><Link to='/lichmdb/roccella-fuciformis'><span className='relative inline-flex items-center rounded px-1.5 py-0.2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Roccella fuciformis</span></span></Link></li>
                                  <li><Link to='/lichmdb/roccella-montagnei'><span className='relative inline-flex items-center rounded px-1.5 py-0.2 pb-2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Roccella montagnei</span></span></Link></li>
                                  </ul>
                              </div>
                            </li>
                            <li className='hover-me'>
                              <Link>
                                <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-0.5 pb-2 font-medium'>
                                  <span className='ml-1.5 text-base text-black hover:text-gray-900'>Lichens (S-U)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                                  </svg>
                                </span>
                              </Link>
                              <div className='menu-bar-13 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '320px' }}>
                                <ul>
                                   <li><Link to='/lichmdb/sphaerophorus-fragilis'><span className='relative inline-flex items-center rounded px-1.5 py-0.2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Sphaerophorus fragilis</span></span></Link></li>
                                  <li><Link to='/lichmdb/stereocaulon-azoreum'><span className='relative inline-flex items-center rounded px-1.5 py-0.2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Stereocaulon azoreum</span></span></Link></li>
                                  <li><Link to='/lichmdb/stereocaulon-corticatulum'><span className='relative inline-flex items-center rounded px-1.5 py-0.2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Stereocaulon corticatulum</span></span></Link></li>
                                  <li><Link to='/lichmdb/stereocaulon-japonicum'><span className='relative inline-flex items-center rounded px-1.5 py-0.2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Stereocaulon japonicum</span></span></Link></li>
                                  <li><Link to='/lichmdb/stereocaulon-paschale'><span className='relative inline-flex items-center rounded px-1.5 py-0.2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Stereocaulon paschale</span></span></Link></li>
                                  <li><Link to='/lichmdb/stereocaulon-ramulosum'><span className='relative inline-flex items-center rounded px-1.5 py-0.2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Stereocaulon ramulosum</span></span></Link></li>
                                  <li><Link to='/lichmdb/stereocaulon-sasakii'><span className='relative inline-flex items-center rounded px-1.5 py-0.2  font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Stereocaulon sasakii</span></span></Link></li>
                                  <li><Link to='/lichmdb/sulcaria-sulcata'><span className='relative inline-flex items-center rounded px-1.5 py-0.2  font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Sulcaria sulcata</span></span></Link></li>
                               
                                  <li><Link to='/lichmdb/stereocaulon-vesuvianum'><span className='relative inline-flex items-center rounded px-1.5 py-0.2  font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Stereocaulon vesuvianum</span></span></Link></li>
                                  <li><Link to='/lichmdb/teloschistes-chrysophthalmus'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Teloschistes chrysophthalmus</span></span></Link></li>
                                  <li><Link to='/lichmdb/teloschistes-flavicans'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Teloschistes flavicans</span></span></Link></li>
                                  <li><Link to='/lichmdb/umbilicaria-cinereorufescens'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Umbilicaria cinereorufescens</span></span></Link></li>
                                  <li><Link to='/lichmdb/umbilicaria-crustulosa'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 pb-2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Umbilicaria crustulosa</span></span></Link></li>
                                </ul>
                              </div>
                            </li>
                             <li className='hover-me'>
                              <Link>
                                <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-0.5 pb-2 font-medium'>
                                  <span className='ml-1.5 text-base text-black hover:text-gray-900'>Lichens (U-Z)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                                  </svg>
                                </span>
                              </Link>
                              <div className='menu-bar-13 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '320px' }}>
                                <ul>
                                  <li><Link to='/lichmdb/umbilicaria-esculenta'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Umbilicaria esculenta</span></span></Link></li>
                                  <li><Link to='/lichmdb/umbilicaria-hypococcinea'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Umbilicaria hypococcinea</span></span></Link></li>
                                  <li><Link to='/lichmdb/umbilicaria-polyphylla'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Umbilicaria polyphylla</span></span></Link></li>
                                  <li><Link to='/lichmdb/umbilicaria-proboscidea'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Umbilicaria proboscidea</span></span></Link></li>
                                  <li><Link to='/lichmdb/umbilicaria-spodochroa1'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Umbilicaria spodochroa</span></span></Link></li>
                                  <li><Link to='/lichmdb/usnea-articulata'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Usnea articulata</span></span></Link></li>
                                  <li><Link to='/lichmdb/usnea-florida'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Usnea florida</span></span></Link></li>
                                  <li><Link to='/lichmdb/usnea-undulata'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Usnea undulata</span></span></Link></li>
                                  <li><Link to='/lichmdb/xanthoparmelia-competita'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Xanthoparmelia competita</span></span></Link></li>
                                  <li><Link to='/lichmdb/xalocoa-ocellata'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Xalocoa ocellata</span></span></Link></li>
                                  <li><Link to='/lichmdb/xanthoparmelia-camtschadalis'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Xanthoparmelia camtschadalis</span></span></Link></li>
                                  <li><Link to='/lichmdb/xanthoparmelia-tinctina'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 pb-2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Xanthoparmelia tinctina</span></span></Link></li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link to='/lichmdb/adme'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>ADME</span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/lichmdb/statistics'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>Statistics</span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/lichmdb/pharmacological'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 pb-2 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>Pharmacological Activities</span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/lichmdb/citethisasLmdb'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 pb-2 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>Cite This As</span>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className='hover-me'>
                  <Link>
                    <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-1 font-medium'>
                      <span className='ml-1.5 text-lg text-black hover:text-gray-900'>SMDB</span>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                      </svg>
                    </span>
                  </Link>
                  <div className='menu-bar-9 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '230px' }}>
                    <ul>
                      <li>
                        <Link to='/smdb/about'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>About</span>
                          </span>
                        </Link>
                      </li>
                      <li className='hover-me'>
                        <Link>
                          <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>Species</span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                            </svg>
                          </span>
                        </Link>
                        <div className='menu-bar-2 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '280px' }}>
                          <ul>
                            <li className='hover-me'>
                              <Link>
                                <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-1 font-medium'>
                                  <span className='ml-1.5 text-base text-black hover:text-gray-900'>Species (A-C)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                                  </svg>
                                </span>
                              </Link>
                              <div className='menu-bar-3 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '320px' }}>
                                <ul>
                                  <li><Link to='/smdb/ratanjot'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Alkanna tinktoria</span></span></Link></li>
                                  <li><Link to='/smdb/lahsun'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Allium sativum</span></span></Link></li>
                                  <li><Link to='/smdb/pyaj'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Allium cepa</span></span></Link></li>
                                  <li><Link to='/smdb/anthriscus-cerefolium'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Anthriscus cerefolium</span></span></Link></li>
                                  <li><Link to='/smdb/apium-graveolens'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Apium graveolens</span></span></Link></li>
                                  <li><Link to='/smdb/armoracia-rusticana'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Armoracia rusticana</span></span></Link></li>
                                  <li><Link to='/smdb/brassica-juncea'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Brassica juncea</span></span></Link></li>
                                  <li><Link to='/smdb/capparis-spinosa'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Capparis spinosa</span></span></Link></li>
                                  <li><Link to='/smdb/capsicum-annuum'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Capsicum annuum</span></span></Link></li>
                                  <li><Link to='/smdb/tezpatta'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Cinnamomum tamala</span></span></Link></li>
                                  <li><Link to='/smdb/dalchini'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Cinnamomum verum</span></span></Link></li>
                                  <li><Link to='/smdb/dhaniya'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Coriandrum sativum</span></span></Link></li>
                                  <li><Link to='/smdb/kesar'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Crocus sativus</span></span></Link></li>
                                  <li><Link to='/smdb/jeera'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Cuminum cyminum</span></span></Link></li>
                                </ul>
                              </div>
                            </li>
                            <li className='hover-me'>
                              <Link>
                                <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-1 font-medium'>
                                  <span className='ml-1.5 text-base text-black hover:text-gray-900'>Species (C-N)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                                  </svg>
                                </span>
                              </Link>
                              <div className='menu-bar-3 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '320px' }}>
                                <ul>
                                  <li><Link to='/smdb/haldi'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Curcuma longa</span></span></Link></li>
                                  <li><Link to='/smdb/dracocephalum-officinale'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Dracocephalum officinale</span></span></Link></li>
                                  <li><Link to='/smdb/elayachi'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Elettaria cardamomum</span></span></Link></li>
                                  <li><Link to='/smdb/foeniculum-vulgare'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Foeniculum vulgare</span></span></Link></li>
                                  <li><Link to='/smdb/hing'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Ferula assafoetida</span></span></Link></li>
                                  <li><Link to='/smdb/illicium-verum'><span className='relative inline-flex items-center rounded px-0.5 py-0.3 pb-2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Illicium verum</span></span></Link></li>
                                  <li><Link to='/smdb/laurus-nobilis'><span className='relative inline-flex items-center rounded px-1.5 py-0.3  font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Laurus nobilis</span></span></Link></li>
                                  <li><Link to='/smdb/levisticum-officinale'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Levisticum officinale</span></span></Link></li>
                                  {/* <li><Link to='/smdb/mangifera-indica'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Mangifera indica</span></span></Link></li> */}
                                  <li><Link to='/smdb/pudina'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Mentha spicata</span></span></Link></li>
                                  <li><Link to='/smdb/currypatta'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Murraya koengii</span></span></Link></li>
                                  <li><Link to='/smdb/javitri'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Myristica fragrans</span></span></Link></li>
                                  <li><Link to='/smdb/kalonji'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Nigella sativa</span></span></Link></li>
                                  
                                </ul>
                              </div>
                            </li>
                            <li className='hover-me'>
                              <Link>
                                <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-1 font-medium'>
                                  <span className='ml-1.5 text-base text-black hover:text-gray-900'>Species (O-Z)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                                  </svg>
                                </span>
                              </Link>
                              <div className='menu-bar-3 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '320px' }}>
                                <ul>
                                  <li><Link to='/smdb/ocimum-basilicum'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Ocimum basilicum</span></span></Link></li>
                                  <li><Link to='/smdb/papaver-somniferum'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Papaver somniferum</span></span></Link></li>
                                  <li><Link to='/smdb/pimpinella-anisum'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Pimpinella anisum</span></span></Link></li>
                                  <li><Link to='/smdb/kalimirch'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Piper nigrum</span></span></Link></li>
                                  <li><Link to='/smdb/punica-granatum'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Punica granatum</span></span></Link></li>
                                  <li><Link to='/smdb/loung'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Syzygium aromaticum</span></span></Link></li>
                                  <li><Link to='/smdb/salvia-rosmarinus'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Salvia rosmarinus</span></span></Link></li>
                                  <li><Link to='/smdb/satureja-hortensis'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Satureja hortensis</span></span></Link></li>
                                  <li><Link to='/smdb/sesamum-indicum'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Sesamum indicum</span></span></Link></li>
                                  <li><Link to='/smdb/tamarindus-indica'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Tamarindus indica</span></span></Link></li>
                                  <li><Link to='/smdb/thymus-vulgaris'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Thymus vulgaris</span></span></Link></li>
                                  <li><Link to='/smdb/ajwain'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Trachyspermum ammi</span></span></Link></li>
                                  <li><Link to='/smdb/adrak'><span className='relative inline-flex items-center rounded px-1.5 py-0.3 pb-2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Zingiber officinale</span></span></Link></li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link to='/smdb/adme'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>ADME</span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/smdb/statistics'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>Statistics</span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/smdb/pharmacological'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 pb-2 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>Pharmacological Activities</span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/smdb/citethisasSmdb'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 pb-2 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>Cite This As</span>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                
                <li className='hover-me'>
                  <Link>
                    <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-1 font-medium'>
                      <span className='ml-1.5 text-lg text-black hover:text-gray-900'>CMDB</span>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                      </svg>
                    </span>
                  </Link>
                  <div className='menu-bar-9 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]' style={{ minWidth: '230px' }}>
                    <ul>
                      <li>
                        <Link to='/Cereals/about'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>About</span>
                          </span>
                        </Link>
                      </li>
                      <li className='hover-me'>
                        <Link>
                          <span className='relative inline-flex items-center hover:text-gray-900 rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>Cereals</span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='#000000' className='size-6 ml-auto'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                            </svg>
                          </span>
                        </Link>
                        <div className='menu-bar-4 hidden bg-gradient-to-r from-[#1BD11B] to-[#57C785]'>
                          <ul>
                            <li><Link to='/Cereals/wheat'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Triticum aestivum</span></span></Link></li>
                            <li><Link to='/Cereals/rice'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Oryza sativa</span></span></Link></li>
                            <li><Link to='/Cereals/sorghum'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Sorghum bicolor</span></span></Link></li>
                            <li><Link to='/Cereals/ragi'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Eleusine coracana</span></span></Link></li>
                            <li><Link to='/Cereals/barley'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Hordeum vulgare</span></span></Link></li>
                            <li><Link to='/Cereals/maize'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Zea mays</span></span></Link></li>
                            <li><Link to='/Cereals/bajra'><span className='relative inline-flex items-center rounded px-1.5 py-0.5 pb-2 font-medium'><span className='ml-1.5 text-base text-black hover:text-gray-900'>Pennisetum glaucum</span></span></Link></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link to='/Cereals/adme'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>ADME</span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/Cereals/statistics'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>Statistics</span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/Cereals/pharmacological'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 pb-2 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>Pharmacological Activities</span>
                          </span>
                        </Link>
                      </li>
                       <li>
                        <Link to='/Cereals/citethisasCmdb'>
                          <span className='relative inline-flex items-center rounded px-1.5 py-1 pb-2 font-medium'>
                            <span className='ml-1.5 text-base text-black hover:text-gray-900'>Cite This As</span>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link to='/analytics'>
              <span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'>
                <span className='ml-0.5 text-xl text-black hover:text-gray-900'>
                  Analytics
                </span>
              </span>
            </Link>
          </li>

          {/* More dropdown menu */}
          <li className='menu'>
            <Link className=''>
              <span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'>
                <span className='ml-0.5  text-xl text-black hover:text-gray-900'>
                  More
                </span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2.5}
                  stroke='#000000'
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
                      <span className='ml-1.5 text-base text-black hover:text-gray-900'>
                        Author
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to='/acknowledgements'>
                    <span className='relative inline-flex items-center rounded px-1.5 py-0.5 font-medium'>
                      <span className='ml-1.5 text-base text-black hover:text-gray-900'>
                        Acknowledgements
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to='/help'>
                    <span className='relative inline-flex items-center rounded pb-2.5 px-1.5 py-0.5 font-medium'>
                      <span className='ml-1.5 text-base text-black hover:text-gray-900'>
                        Help
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

        </ul>
        {/* Search functionality */}
        <div className='hidden shrink-0 md:flex md:w-[250px] md:justify-end lg:w-[300px] xl:w-[340px]'>
          <div className='relative w-full'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search files...'
                value={searchQuery}
                className='w-full rounded-2xl border border-black/10 bg-white/90 px-4 py-2.5 pr-11 text-sm text-gray-900 shadow-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/30'
                onChange={(e) => handleSearch(e.target.value)}
              />
              <button className='absolute right-3 top-1/2 -translate-y-1/2' type='button' aria-label='Search'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5 text-gray-500'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z' />
                </svg>
              </button>
            </div>
            {/* Search results dropdown */}
            {searchQuery.trim().length > 0 && (
              <div className='absolute top-full right-0 z-50 mt-2 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl'>
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
                  {searchResults.length > 0 ? (
                    searchResults.map((result, index) => (
                      <Link
                        key={index}
                        to={result.path}
                        className='group block border-b border-gray-100 px-4 py-3 text-sm text-gray-900 transition-all duration-150 last:border-b-0 hover:bg-blue-50'
                        onClick={closeAllMenus}
                      >
                        <div className='flex items-start'>
                          <div className='mr-3 mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100'>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='h-4 w-4 text-green-600'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 1 18 18a8.966 8.966 0 0 1-6 2.292m0-14.25v14.25' />
                            </svg>
                          </div>
                          <div className='min-w-0 flex-1'>
                            <div className='font-medium text-gray-900 transition-colors duration-150 group-hover:text-blue-600'>{result.name}</div>
                            <div className='mt-1 flex items-center text-xs text-gray-500'>
                              <span className='inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800'>
                                {result.category}
                              </span>
                            </div>
                          </div>
                          <div className='ml-2 flex-shrink-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100'>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='h-4 w-4 text-gray-400'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className='px-4 py-6 text-center text-sm text-gray-500'>
                      No matching records found.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMobileOpen && (
        <div className='fixed inset-0 z-50 md:hidden'>
          {/* Backdrop */}
          <div
            className='fixed inset-0 bg-black/45 backdrop-blur-[2px]'
            onClick={closeAllMenus}
          ></div>

          {/* Sidebar */}
          <div className='fixed left-0 top-0 h-full w-[88vw] max-w-[22rem] rounded-r-3xl bg-gradient-to-b from-[#1BD11B] to-[#57C785] shadow-2xl transition-transform duration-300 ease-in-out'>
            <div className='flex h-full flex-col overflow-hidden'>
              {/* Header */}
              <div className='border-b border-black/10 px-4 pb-4 pt-5'>
                <div className='flex items-start justify-between gap-3'>
                  <h2 className='text-xl font-bold leading-none sm:text-2xl'>
                    <span className='block whitespace-nowrap text-[#fad73d]'>Food Drugs &</span>
                    <span className='mt-1 block whitespace-nowrap text-black'>Pharmacology</span>
                  </h2>
                  <button
                    onClick={closeAllMenus}
                    className='rounded-xl border border-black/10 bg-white/10 p-2 text-black shadow-sm transition hover:bg-white/15'
                    aria-label='Close menu'
                  >
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='h-5 w-5'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                    </svg>
                  </button>
                </div>

                <div className='mt-4'>
                  <div className='relative'>
                    <input
                      type='text'
                      value={searchQuery}
                      placeholder='Search files...'
                      className='w-full rounded-2xl border border-black/10 bg-white/90 px-4 py-3 pr-11 text-sm text-gray-900 shadow-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/30'
                      onChange={(e) => handleSearch(e.target.value)}
                    />
                    <button className='absolute right-3 top-1/2 -translate-y-1/2' type='button' aria-label='Search'>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5 text-gray-500'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z' />
                      </svg>
                    </button>
                  </div>
                  {searchQuery.trim().length > 0 && (
                    <div className='mt-3 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg'>
                      <div className='border-b border-gray-100 bg-gray-50 px-4 py-2.5'>
                        <div className='flex items-center'>
                          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='mr-2 h-4 w-4 text-gray-500'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z' />
                          </svg>
                          <span className='text-sm font-medium text-gray-700'>Search Results</span>
                          <span className='ml-auto text-xs text-gray-500'>{searchResults.length} found</span>
                        </div>
                      </div>
                      <div className='max-h-52 overflow-y-auto'>
                        {searchResults.length > 0 ? (
                          searchResults.map((result, index) => (
                            <Link
                              key={index}
                              to={result.path}
                              className='block border-b border-gray-100 px-4 py-3 text-sm text-gray-900 last:border-b-0 hover:bg-blue-50'
                              onClick={closeAllMenus}
                            >
                              <div className='font-medium'>{result.name}</div>
                              <div className='mt-1 text-xs text-gray-500'>{result.category}</div>
                            </Link>
                          ))
                        ) : (
                          <div className='px-4 py-5 text-center text-sm text-gray-500'>
                            No matching records found.
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className='flex-1 overflow-y-auto px-4 pb-6 pt-4'>

                {/* Navigation Content */}
                <ul className='space-y-1'>
                  {/* Home Link */}
                  <li>
                    <Link to='/' onClick={closeAllMenus} className='block px-2 py-3 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg font-semibold'>
                      HOME
                    </Link>
                  </li>
                  {false && (
                  <>
                  {/* Metabolites Database Section */}
                   <li>
                    <button
                      className='w-full text-left flex items-center justify-between px-2 py-3 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg font-semibold whitespace-nowrap'
                      onClick={() => setIsMetabolitesMobileOpen(!isMetabolitesMobileOpen)}
                    >
                      <span>Metabolites Database</span>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                      </svg>
                    </button>
                    {isMetabolitesMobileOpen && (
                      <ul className='mt-1 ml-4 space-y-1'>
                        <li>
                          <button
                            className='w-full text-left flex items-center justify-between px-2 py-3 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg font-semibold whitespace-nowrap'
                            onClick={() => setIsMetaCmdbMobileOpen(!isMetaCmdbMobileOpen)}
                          >
                            <span>CMDB</span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                            </svg>
                          </button>
                          {isMetaCmdbMobileOpen && (
                            <ul className='mt-1 ml-4 space-y-1'>
                              <li>
                                <Link to='/Cereals/about' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>
                                  About
                                </Link>
                              </li>
                              <li className='px-2 text-xs uppercase tracking-wider text-black/80'>Cereals</li>
                              <ul className='mt-1 ml-2 space-y-1'>
                                <li><Link to='/Cereals/wheat' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Wheat</Link></li>
                                <li><Link to='/Cereals/rice' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Rice</Link></li>
                                <li><Link to='/Cereals/sorghum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Sorghum</Link></li>
                                <li><Link to='/Cereals/ragi' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ragi</Link></li>
                                <li><Link to='/Cereals/barley' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Barley</Link></li>
                                <li><Link to='/Cereals/maize' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Maize</Link></li>
                                <li><Link to='/Cereals/bajra' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Bajra</Link></li>
                              </ul>
                              <li><Link to='/Cereals/adme' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>ADME</Link></li>
                              <li><Link to='/Cereals/statistics' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Statistics</Link></li>
                              <li><Link to='/Cereals/pharmacological' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Pharmacological Activities</Link></li>
                              <li><Link to='/Cereals/citethisasCmdb' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Cite This As</Link></li>
                            </ul>
                          )}
                        </li>
                         <li>
                          <button
                            className='w-full text-left flex items-center justify-between px-2 py-3 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg font-semibold whitespace-nowrap'
                            onClick={() => setIsMetaDmdbMobileOpen(!isMetaDmdbMobileOpen)}
                          >
                            <span>LeSeMeDa</span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                            </svg>
                          </button>
                          {isMetaDmdbMobileOpen && (
                            <ul className='mt-1 ml-4 space-y-1'>
                              <li>
                                <Link to='/LeSeMeDa/about' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>
                                  About
                                </Link>
                              </li>
                              <li className='px-2 text-xs uppercase tracking-wider text-black/80'>LeSeMeDa</li>
                              <ul className='mt-1 ml-2 space-y-1'>
                                {dmdbSection1.map((f, idx) => (
                                  <li key={idx}>
                                    <Link to={f.path} onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>
                                      {f.name}
                                    </Link>
                                  </li>
                                ))}
                                {dmdbSection2.map((f, idx) => (
                                  <li key={`dm2-${idx}`}>
                                    <Link to={f.path} onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>
                                      {f.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                              <li><Link to='/LeSeMeDa/adme' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>ADME</Link></li>
                              <li><Link to='/LeSeMeDa/statistics' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Statistics</Link></li>
                              <li><Link to='/LeSeMeDa/pharmacological' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Pharmacological Activities</Link></li>
                            </ul>
                          )}
                        </li> 
                        <li>
                          <button
                            className='w-full text-left flex items-center justify-between px-2 py-3 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg font-semibold whitespace-nowrap'
                            onClick={() => setIsMetaFmdbMobileOpen(!isMetaFmdbMobileOpen)}
                          >
                            <span>FMDB</span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                            </svg>
                          </button>
                          {isMetaFmdbMobileOpen && (
                            <ul className='mt-1 ml-4 space-y-1'>
                              <li>
                                <Link to='/fmdb/about' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>
                                  About
                                </Link>
                              </li>
                              <li className='px-2 text-xs uppercase tracking-wider text-black/80'>Fruits</li>
                              <ul className='mt-1 ml-2 space-y-1'>
                                {fmdbSection1.map((f, idx) => (
                                  <li key={idx}>
                                    <Link to={f.path} onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>
                                      {f.name}
                                    </Link>
                                  </li>
                                ))}
                                {fmdbSection2.map((f, idx) => (
                                  <li key={`fm2-${idx}`}>
                                    <Link to={f.path} onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>
                                      {f.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                              <li><Link to='/fmdb/adme' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>ADME</Link></li>
                              <li><Link to='/fmdb/statistics' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Statistics</Link></li>
                              <li><Link to='/fmdb/pharmacological' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Pharmacological Activities</Link></li>
                            </ul>
                          )}
                        </li>
                        <li>
                          <button
                            className='w-full text-left flex items-center justify-between px-2 py-3 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg font-semibold whitespace-nowrap'
                            onClick={() => setIsMetaGmdbMobileOpen(!isMetaGmdbMobileOpen)}
                          >
                            <span>GMDB</span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                            </svg>
                          </button>
                          {isMetaGmdbMobileOpen && (
                            <ul className='mt-1 ml-4 space-y-1'>
                              <li>
                                <Link to='/gmdb/about' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>
                                  About
                                </Link>
                              </li>
                              <li className='px-2 text-xs uppercase tracking-wider text-black/80'>Gymnosperm</li>
                              <ul className='mt-1 ml-2 space-y-1'>
                                <li><Link to='/gmdb/abies-pindrow' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Abies pindrow</Link></li>
                                <li><Link to='/gmdb/abies-sachalinensis' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Abies sachalinensis</Link></li>
                                <li><Link to='/gmdb/agathis-alba' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Agathis alba</Link></li>
                                <li><Link to='/gmdb/agathis-dammara' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Agathis dammara</Link></li>
                                <li><Link to='/gmdb/agathis-palmerstonii' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Agathis palmerstonii</Link></li>
                                <li><Link to='/gmdb/araucaria-columnaris' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Araucaria columnaris</Link></li>
                                <li><Link to='/gmdb/calocedrus-macrolepis' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Calocedrus macrolepis</Link></li>
                                <li><Link to='/gmdb/cedrus-deodara' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cedrus deodara</Link></li>
                                <li><Link to='/gmdb/chamaecyparis-lawsoniana' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Chamaecyparis lawsoniana</Link></li>
                                <li><Link to='/gmdb/cycas-beddomei' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cycas beddomei</Link></li>
                                <li><Link to='/gmdb/cycas-circinalis' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cycas circinalis</Link></li>
                                <li><Link to='/gmdb/cycas-revoluta' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cycas revoluta</Link></li>
                                <li><Link to='/gmdb/ephedra-distachya' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ephedra distachya</Link></li>
                                <li><Link to='/gmdb/ephedra-equisetina' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ephedra equisetina</Link></li>
                                <li><Link to='/gmdb/ephedra-gerardiana' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ephedra gerardiana</Link></li>
                                <li><Link to='/gmdb/ephedra-intermedia' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ephedra intermedia</Link></li>
                                <li><Link to='/gmdb/ephedra-likiangensis' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ephedra likiangensis</Link></li>
                                <li><Link to='/gmdb/ephedra-lomatolepis' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ephedra lomatolepis</Link></li>
                                <li><Link to='/gmdb/ephedra-minuta' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ephedra minuta</Link></li>
                                <li><Link to='/gmdb/ephedra-monosperma' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ephedra monosperma</Link></li>
                                <li><Link to='/gmdb/ephedra-sinica' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ephedra sinica</Link></li>
                                <li><Link to='/gmdb/ephedra-regeliana' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ephedra regeliana</Link></li>
                                <li><Link to='/gmdb/ginkgo-biloba' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ginkgo biloba</Link></li>
                                <li><Link to='/gmdb/juniperus-communis' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Juniperus communis</Link></li>
                                <li><Link to='/gmdb/picea-smithiana' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Picea smithiana</Link></li>
                                <li><Link to='/gmdb/pinus-armandii' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus armandii</Link></li>
                                <li><Link to='/gmdb/pinus-densiflora' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus densiflora</Link></li>
                                <li><Link to='/gmdb/pinus-edulis' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus edulis</Link></li>
                                <li><Link to='/gmdb/pinus-elliottii' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus elliottii</Link></li>
                                <li><Link to='/gmdb/pinus-flexilis' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus flexilis</Link></li>
                                <li><Link to='/gmdb/pinus-heldreichii' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus heldreichii</Link></li>
                                <li><Link to='/gmdb/pinus-luchuensis' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus luchuensis</Link></li>
                                <li><Link to='/gmdb/pinus-monophylla' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus monophylla</Link></li>
                                <li><Link to='/gmdb/pinus-montezumae' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus montezumae</Link></li>
                                <li><Link to='/gmdb/pinus-monticola' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus monticola</Link></li>
                                <li><Link to='/gmdb/pinus-nigra' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus nigra</Link></li>
                                <li><Link to='/gmdb/pinus-palustris' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus palustris</Link></li>
                                <li><Link to='/gmdb/pinus-pinea' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus pinea</Link></li>
                                <li><Link to='/gmdb/pinus-ponderosa' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus ponderosa</Link></li>
                                <li><Link to='/gmdb/pinus-pumila' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus pumila</Link></li>
                                <li><Link to='/gmdb/pinus-radiata' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus radiata</Link></li>
                                <li><Link to='/gmdb/pinus-resinosa' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus resinosa</Link></li>
                                <li><Link to='/gmdb/pinus-sibirica' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus sibirica</Link></li>
                                <li><Link to='/gmdb/pinus-strobus' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus strobus</Link></li>
                                <li><Link to='/gmdb/pinus-sylvestris' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus sylvestris</Link></li>
                                <li><Link to='/gmdb/pinus-taeda' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus taeda</Link></li>
                                <li><Link to='/gmdb/pinus-yunnanensis' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus yunnanensis</Link></li>
                                <li><Link to='/gmdb/platycladus-orientalis' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Platycladus orientalis</Link></li>
                                <li><Link to='/gmdb/sequoia-sempervirens' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Sequoia sempervirens</Link></li>
                                <li><Link to='/gmdb/taiwania-cryptomerioides' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Taiwania cryptomerioides</Link></li>
                                <li><Link to='/gmdb/taxus-baccata' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Taxus baccata</Link></li>
                                <li><Link to='/gmdb/taxus-brevifolia' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Taxus brevifolia</Link></li>
                                <li><Link to='/gmdb/taxus-canadensis' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Taxus canadensis</Link></li>
                                <li><Link to='/gmdb/taxus-cuspidata' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Taxus cuspidata</Link></li>
                                <li><Link to='/gmdb/taxus-mairei' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Taxus mairei</Link></li>
                                <li><Link to='/gmdb/taxus-sumatrana' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Taxus sumatrana</Link></li>
                                <li><Link to='/gmdb/taxus-wallichiana' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Taxus wallichiana</Link></li>
                                <li><Link to='/gmdb/tetraclinis-articulata' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Tetraclinis articulata</Link></li>
                                <li><Link to='/gmdb/thuja-occidentalis' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Thuja occidentalis</Link></li>
                                <li><Link to='/gmdb/thuja-standishii' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Thuja standishii</Link></li>
                                <li><Link to='/gmdb/thuja-plicata' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Thuja plicata</Link></li>
                              </ul>
                              <li><Link to='/gmdb/adme' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>ADME</Link></li>
                              <li><Link to='/gmdb/statistics' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Statistics</Link></li>
                              <li><Link to='/gmdb/pharmacological' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Pharmacological Activities</Link></li>
                              <li><Link to='/gmdb/toxicityPrediction' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Toxicity Prediction</Link></li>
                            </ul>
                          )}
                        </li>
                        <li>
                          <button
                            className='w-full text-left flex items-center justify-between px-2 py-3 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg font-semibold whitespace-nowrap'
                            onClick={() => setIsMetaLmdbMobileOpen(!isMetaLmdbMobileOpen)}
                          >
                            <span>LMDB</span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                            </svg>
                          </button>
                          {isMetaLmdbMobileOpen && (
                            <ul className='mt-1 ml-4 space-y-1'>
                              <li>
                                <Link to='/lichmdb/about' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>
                                  About
                                </Link>
                              </li>
                              <li className='px-2 text-xs uppercase tracking-wider text-black/80'>Lichens</li>
                              <ul className='mt-1 ml-2 space-y-1'>
                                <li><Link to='/lichmdb/alectoria-ochroleuca' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Alectoria ochroleuca</Link></li>
                                <li><Link to='/lichmdb/alectoria-sarmentosa' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Alectoria sarmentosa</Link></li>
                                <li><Link to='/lichmdb/anzia-hypoleucoides' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Anzia hypoleucoides</Link></li>
                                <li><Link to='/lichmdb/candelaria-concolor' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Candelaria concolor</Link></li>
                                <li><Link to='/lichmdb/cetraria-islandica' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cetraria islandica</Link></li>
                                <li><Link to='/lichmdb/cladonia-convoluta' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cladonia convoluta</Link></li>
                                <li><Link to='/lichmdb/cladonia-cristatella' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cladonia cristatella</Link></li>
                                <li><Link to='/lichmdb/cladonia-cryptochlorophaea' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cladonia cryptochlorophaea</Link></li>
                                <li><Link to='/lichmdb/cladonia-furcata' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cladonia furcata</Link></li>
                                <li><Link to='/lichmdb/cladonia-macilenta' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cladonia macilenta</Link></li>
                                <li><Link to='/lichmdb/cladonia-mitis' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cladonia mitis</Link></li>
                                <li><Link to='/lichmdb/cladonia-rangiferina' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cladonia rangiferina</Link></li>
                                <li><Link to='/lichmdb/cladonia-stellaris' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cladonia stellaris</Link></li>
                                <li><Link to='/lichmdb/cladonia-verticillata' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cladonia verticillata</Link></li>
                                <li><Link to='/lichmdb/coniocarpon-cinnabarinum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Coniocarpon cinnabarinum</Link></li>
                                <li><Link to='/lichmdb/dimelaena-oreina' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Dimelaena oreina</Link></li>
                                <li><Link to='/lichmdb/dolichousnea-longissima' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Dolichousnea longissima</Link></li>
                                <li><Link to='/lichmdb/evernia-prunastri' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Evernia prunastri</Link></li>
                                <li><Link to='/lichmdb/flavoparmelia-caperata' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Flavoparmelia caperata</Link></li>
                                <li><Link to='/lichmdb/flavoparmelia-haysomii' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Flavoparmelia haysomii</Link></li>
                                <li><Link to='/lichmdb/heterodermia-dissecta' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Heterodermia dissecta</Link></li>
                                <li><Link to='/lichmdb/hypogymnia-enteromorpha' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Hypogymnia enteromorpha</Link></li>
                                <li><Link to='/lichmdb/hypotrachyna-cirrhata' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Hypotrachyna cirrhata</Link></li>
                                <li><Link to='/lichmdb/hypotrachyna-leiophylla' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Hypotrachyna leiophylla</Link></li>
                                <li><Link to='/lichmdb/lecanora-frustulosa' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Lecanora frustulosa</Link></li>
                                <li><Link to='/lichmdb/lecanora-hybocarpa' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Lecanora hybocarpa</Link></li>
                                <li><Link to='/lichmdb/lecanora-lividocinerea' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Lecanora lividocinerea</Link></li>
                                <li><Link to='/lichmdb/leptogium-saturninum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Leptogium saturninum</Link></li>
                                <li><Link to='/lichmdb/lethariella-cladonioides' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Lethariella cladonioides</Link></li>
                                <li><Link to='/lichmdb/lethariella-sernanderi' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Lethariella sernanderi</Link></li>
                                <li><Link to='/lichmdb/lobaria-pulmonaria' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Lobaria pulmonaria</Link></li>
                                <li><Link to='/lichmdb/lobaria-scrobiculata' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Lobaria scrobiculata</Link></li>
                                <li><Link to='/lichmdb/menegazzia-terebrata' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Menegazzia terebrata</Link></li>
                                <li><Link to='/lichmdb/ochrolechia-parella' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ochrolechia parella</Link></li>
                                <li><Link to='/lichmdb/ophioparma-ventosa' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ophioparma ventosa</Link></li>
                                <li><Link to='/lichmdb/oxneria-fallax' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Oxneria fallax</Link></li>
                                <li><Link to='/lichmdb/parmelia-omphalodes' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Parmelia omphalodes</Link></li>
                                <li><Link to='/lichmdb/parmelia-saxatilis' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Parmelia saxatilis</Link></li>
                                <li><Link to='/lichmdb/parmotrema-nilgherrense' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Parmotrema nilgherrense</Link></li>
                                <li><Link to='/lichmdb/parmotrema-praesorediosum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Parmotrema praesorediosum</Link></li>
                                <li><Link to='/lichmdb/parmotrema-sancti-angelii' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Parmotrema sancti-angelii</Link></li>
                                <li><Link to='/lichmdb/parmotrema-tinctorum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Parmotrema tinctorum</Link></li>
                                <li><Link to='/lichmdb/peltigera-canina' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Peltigera canina</Link></li>
                                <li><Link to='/lichmdb/peltigera-malacea' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Peltigera malacea</Link></li>
                                <li><Link to='/lichmdb/peltigera-venosa' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Peltigera venosa</Link></li>
                                <li><Link to='/lichmdb/platismatia-glauca' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Platismatia glauca</Link></li>
                                <li><Link to='/lichmdb/pseudocyphellaria-faveolata' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pseudocyphellaria faveolata</Link></li>
                                <li><Link to='/lichmdb/pseudocyphellaria-norvegica' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pseudocyphellaria norvegica</Link></li>
                                <li><Link to='/lichmdb/pyrenula-pseudobufonia' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pyrenula pseudobufonia</Link></li>
                                <li><Link to='/lichmdb/ramalina-calicaris' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ramalina calicaris</Link></li>
                                <li><Link to='/lichmdb/ramalina-dilacerata' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ramalina dilacerata</Link></li>
                                <li><Link to='/lichmdb/ramalina-farinacea' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ramalina farinacea</Link></li>
                                <li><Link to='/lichmdb/ramalina-hierrensis' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ramalina hierrensis</Link></li>
                                <li><Link to='/lichmdb/ramalina-pollinaria' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ramalina pollinaria</Link></li>
                                <li><Link to='/lichmdb/ramalina-siliquosa' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ramalina siliquosa</Link></li>
                                <li><Link to='/lichmdb/ramalina-stenospora' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ramalina stenospora</Link></li>
                                <li><Link to='/lichmdb/ricasolia-amplissima' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ricasolia amplissima</Link></li>
                                <li><Link to='/lichmdb/roccella-fuciformis' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Roccella fuciformis</Link></li>
                                <li><Link to='/lichmdb/roccella-montagnei' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Roccella montagnei</Link></li>
                                <li><Link to='/lichmdb/sphaerophorus-fragilis' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Sphaerophorus fragilis</Link></li>
                                <li><Link to='/lichmdb/stereocaulon-azoreum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Stereocaulon azoreum</Link></li>
                                <li><Link to='/lichmdb/stereocaulon-corticatulum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Stereocaulon corticatulum</Link></li>
                                <li><Link to='/lichmdb/stereocaulon-japonicum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Stereocaulon japonicum</Link></li>
                                <li><Link to='/lichmdb/stereocaulon-paschale' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Stereocaulon paschale</Link></li>
                                <li><Link to='/lichmdb/stereocaulon-ramulosum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Stereocaulon ramulosum</Link></li>
                                <li><Link to='/lichmdb/stereocaulon-sasakii' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Stereocaulon sasakii</Link></li>
                                <li><Link to='/lichmdb/sulcaria-sulcata' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Sulcaria sulcata</Link></li>
                                <li><Link to='/lichmdb/stereocaulon-vesuvianum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Stereocaulon vesuvianum</Link></li>
                                <li><Link to='/lichmdb/teloschistes-chrysophthalmus' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Teloschistes chrysophthalmus</Link></li>
                                <li><Link to='/lichmdb/teloschistes-flavicans' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Teloschistes flavicans</Link></li>
                                <li><Link to='/lichmdb/umbilicaria-cinereorufescens' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Umbilicaria cinereorufescens</Link></li>
                                <li><Link to='/lichmdb/umbilicaria-crustulosa' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Umbilicaria crustulosa</Link></li>
                                <li><Link to='/lichmdb/umbilicaria-esculenta' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Umbilicaria esculenta</Link></li>
                                <li><Link to='/lichmdb/umbilicaria-hypococcinea' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Umbilicaria hypococcinea</Link></li>
                                <li><Link to='/lichmdb/umbilicaria-polyphylla' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Umbilicaria polyphylla</Link></li>
                                <li><Link to='/lichmdb/umbilicaria-proboscidea' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Umbilicaria proboscidea</Link></li>
                                <li><Link to='/lichmdb/umbilicaria-spodochroa1' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Umbilicaria spodochroa</Link></li>
                                <li><Link to='/lichmdb/usnea-articulata' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Usnea articulata</Link></li>
                                <li><Link to='/lichmdb/usnea-florida' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Usnea florida</Link></li>
                                <li><Link to='/lichmdb/usnea-undulata' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Usnea undulata</Link></li>
                                <li><Link to='/lichmdb/xanthoparmelia-competita' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Xanthoparmelia competita</Link></li>
                                <li><Link to='/lichmdb/xalocoa-ocellata' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Xalocoa ocellata</Link></li>
                                <li><Link to='/lichmdb/xanthoparmelia-camtschadalis' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Xanthoparmelia camtschadalis</Link></li>
                                <li><Link to='/lichmdb/xanthoparmelia-tinctina' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Xanthoparmelia tinctina</Link></li>
                              </ul>
                              <li><Link to='/lichmdb/adme' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>ADME</Link></li>
                              <li><Link to='/lichmdb/statistics' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Statistics</Link></li>
                              <li><Link to='/lichmdb/pharmacological' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Pharmacological Activities</Link></li>
                            <li><Link to='/lichmdb/citethisasLmdb' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Cite This As</Link></li>
                            </ul>
                          )}
                        </li>
                        <li>
                          <button
                            className='w-full text-left flex items-center justify-between px-2 py-3 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg font-semibold whitespace-nowrap'
                            onClick={() => setIsMetaSmdbMobileOpen(!isMetaSmdbMobileOpen)}
                          >
                            <span>SMDB</span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                            </svg>
                          </button>
                          {isMetaSmdbMobileOpen && (
                            <ul className='mt-1 ml-4 space-y-1'>
                              <li>
                                <Link to='/smdb/about' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>
                                  About
                                </Link>
                              </li>
                              <li className='px-2 text-xs uppercase tracking-wider text-black/80'>Spices</li>
                              <ul className='mt-1 ml-2 space-y-1'>
                                <li><Link to='/smdb/ratanjot' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Alkanna tinktoria</Link></li>
                                <li><Link to='/smdb/lahsun' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Allium sativum</Link></li>
                                <li><Link to='/smdb/pyaj' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Allium cepa</Link></li>
                                <li><Link to='/smdb/anthriscus-cerefolium' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Anthriscus cerefolium</Link></li>
                                <li><Link to='/smdb/apium-graveolens' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Apium graveolens</Link></li>
                                <li><Link to='/smdb/armoracia-rusticana' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Armoracia rusticana</Link></li>
                                <li><Link to='/smdb/brassica-juncea' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Brassica juncea</Link></li>
                                <li><Link to='/smdb/capparis-spinosa' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Capparis spinosa</Link></li>
                                <li><Link to='/smdb/capsicum-annuum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Capsicum annuum</Link></li>
                                <li><Link to='/smdb/tezpatta' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cinnamomum tamala</Link></li>
                                <li><Link to='/smdb/dalchini' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cinnamomum verum</Link></li>
                                <li><Link to='/smdb/dhaniya' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Coriandrum sativum</Link></li>
                                <li><Link to='/smdb/kesar' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Crocus sativus</Link></li>
                                <li><Link to='/smdb/jeera' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cuminum cyminum</Link></li>
                                <li><Link to='/smdb/haldi' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Curcuma longa</Link></li>
                                <li><Link to='/smdb/dracocephalum-officinale' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Dracocephalum officinale</Link></li>
                                <li><Link to='/smdb/elayachi' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Elettaria cardamomum</Link></li>
                                <li><Link to='/smdb/foeniculum-vulgare' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Foeniculum vulgare</Link></li>
                                <li><Link to='/smdb/hing' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ferula assafoetida</Link></li>
                                <li><Link to='/smdb/illicium-verum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Illicium verum</Link></li>
                                <li><Link to='/smdb/laurus-nobilis' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Laurus nobilis</Link></li>
                                <li><Link to='/smdb/levisticum-officinale' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Levisticum officinale</Link></li>
                                {/* <li><Link to='/smdb/mangifera-indica' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Mangifera indica</Link></li> */}
                                <li><Link to='/smdb/pudina' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Mentha spicata</Link></li>
                                <li><Link to='/smdb/currypatta' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Murraya koengii</Link></li>
                                <li><Link to='/smdb/javitri' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Myristica fragrans</Link></li>
                                <li><Link to='/smdb/kalonji' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Nigella sativa</Link></li>
                                <li><Link to='/smdb/ocimum-basilicum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ocimum basilicum</Link></li>
                                <li><Link to='/smdb/papaver-somniferum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Papaver somniferum</Link></li>
                                <li><Link to='/smdb/pimpinella-anisum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pimpinella anisum</Link></li>
                                <li><Link to='/smdb/kalimirch' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Piper nigrum</Link></li>
                                <li><Link to='/smdb/punica-granatum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Punica granatum</Link></li>
                                <li><Link to='/smdb/loung' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Syzygium aromaticum</Link></li>
                                <li><Link to='/smdb/salvia-rosmarinus' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Salvia rosmarinus</Link></li>
                                <li><Link to='/smdb/satureja-hortensis' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Satureja hortensis</Link></li>
                                <li><Link to='/smdb/sesamum-indicum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Sesamum indicum</Link></li>
                                <li><Link to='/smdb/tamarindus-indica' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Tamarindus indica</Link></li>
                                <li><Link to='/smdb/thymus-vulgaris' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Thymus vulgaris</Link></li>
                                <li><Link to='/smdb/ajwain' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trachyspermum ammi</Link></li>
                                <li><Link to='/smdb/adrak' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Zingiber officinale</Link></li>
                              </ul>
                              <li><Link to='/smdb/adme' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>ADME</Link></li>
                              <li><Link to='/smdb/statistics' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Statistics</Link></li>
                              <li><Link to='/smdb/pharmacological' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Pharmacological Activities</Link></li>
                              <li><Link to='/smdb/citethisasSmdb' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Cite This As</Link></li>
                            </ul>
                          )}
                        </li>
                        <li>
                          <button
                            className='w-full text-left flex items-center justify-between px-2 py-3 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg font-semibold whitespace-nowrap'
                            onClick={() => setIsMetaTmdbMobileOpen(!isMetaTmdbMobileOpen)}
                          >
                            <span>TMDB</span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                            </svg>
                          </button>
                          {isMetaTmdbMobileOpen && (
                            <ul className='mt-1 ml-4 space-y-1'>
                              <li>
                                <Link to='/trichoderma/about' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>
                                  About
                                </Link>
                              </li>
                              <li className='px-2 text-xs uppercase tracking-wider text-black/80'>Trichoderma</li>
                              <ul className='mt-1 ml-2 space-y-1'>
                                <li><Link to='/trichoderma/album' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma album</Link></li>
                                <li><Link to='/trichoderma/applanatum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma applanatum</Link></li>
                                <li><Link to='/trichoderma/asperellum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma asperellum</Link></li>
                                <li><Link to='/trichoderma/atroviride' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma atroviride</Link></li>
                                <li><Link to='/trichoderma/aureoviride' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma aureoviride</Link></li>
                                <li><Link to='/trichoderma/avellaneum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma avellaneum</Link></li>
                                <li><Link to='/trichoderma/brevicompactum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma brevicompactum</Link></li>
                                <li><Link to='/trichoderma/cerinum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma cerinum</Link></li>
                                <li><Link to='/trichoderma/citrinoviride' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma citrinoviride</Link></li>
                                <li><Link to='/trichoderma/citrinum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma citrinum</Link></li>
                                <li><Link to='/trichoderma/cornu-damae' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma cornu-damae</Link></li>
                                <li><Link to='/trichoderma/crassum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma crassum</Link></li>
                                <li><Link to='/trichoderma/cremeum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma cremeum</Link></li>
                                <li><Link to='/trichoderma/deliquescens' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma deliquescens</Link></li>
                                <li><Link to='/trichoderma/gamsii' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma gamsii</Link></li>
                                <li><Link to='/trichoderma/hamatum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma hamatum</Link></li>
                                <li><Link to='/trichoderma/harzianum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma harzianum</Link></li>
                                <li><Link to='/trichoderma/hypocrea-muroiana' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma hypocrea-muroiana</Link></li>
                                <li><Link to='/trichoderma/hypoxylon' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma hypoxylon</Link></li>
                                <li><Link to='/trichoderma/koningii' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma koningii</Link></li>
                                <li><Link to='/trichoderma/koningiopsis' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma koningiopsis</Link></li>
                                <li><Link to='/trichoderma/longibrachiatum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma longibrachiatum</Link></li>
                                <li><Link to='/trichoderma/polysporum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma polysporum</Link></li>
                                <li><Link to='/trichoderma/reesei' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma reesei</Link></li>
                                <li><Link to='/trichoderma/saturnisporum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma saturnisporum</Link></li>
                                <li><Link to='/trichoderma/spirale' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma spirale</Link></li>
                                <li><Link to='/trichoderma/velutinum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma velutinum</Link></li>
                                <li><Link to='/trichoderma/virens' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma virens</Link></li>
                                <li><Link to='/trichoderma/viride' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma viride</Link></li>
                                <li><Link to='/trichoderma/vinosum' onClick={closeAllMenus} className='block px-2 py-1 text-sm text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma vinosum</Link></li>
                              </ul>
                              <li><Link to='/trichoderma/adme' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>ADME</Link></li>
                              <li><Link to='/trichoderma/statistics' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Statistics</Link></li>
                              <li><Link to='/trichoderma/pharmacological' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Pharmacological Activities</Link></li>
                              <li><Link to='/trichoderma/citethisasTmdb' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Cite This As</Link></li>
                            </ul>
                          )}
                        </li>
                      </ul>
                    )}
                  </li>
                  </>
                  )}
                  {/* DMDB Section */}
                  <li>
                    <button
                      className='w-full text-left flex items-center justify-between px-2 py-3 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg font-semibold whitespace-nowrap'
                      onClick={() => setIsDmdbMobileOpen(!isDmdbMobileOpen)}
                    >
                      <span>LeSeMeDa</span>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                      </svg>
                    </button>
                    {isDmdbMobileOpen && (
                      <ul className='mt-1 ml-4 space-y-1'>
                        <li>
                          <Link to='/dmdb/about' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>
                            About
                          </Link>
                        </li>
                        <li>
                          <button
                            className='w-full text-left flex items-center justify-between px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg font-medium whitespace-nowrap'
                            onClick={() => setIsDmdbSpeciesMobileOpen(!isDmdbSpeciesMobileOpen)}
                          >
                            <span>Legumes</span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                            </svg>
                          </button>
                          {isDmdbSpeciesMobileOpen && (
                            <ul className='mt-1 ml-4 space-y-1'>
                              <li>
                                <button
                                  className='w-full text-left flex items-center justify-between px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'
                                  onClick={() => setIsDmdb1MobileOpen(!isDmdb1MobileOpen)}
                                >
                                  <span>Legumes (A–M)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                                  </svg>
                                </button>
                                {isDmdb1MobileOpen && (
                                  <ul className='mt-1 ml-4 space-y-1'>
                                    {dmdbSection1.map((f, idx) => (
                                      <li key={idx}>
                                        <Link to={f.path} onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>
                                          {f.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                              <li>
                                <button
                                  className='w-full text-left flex items-center justify-between px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'
                                  onClick={() => setIsDmdb2MobileOpen(!isDmdb2MobileOpen)}
                                >
                                  <span>Legumes (N–Z)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                                  </svg>
                                </button>
                                {isDmdb2MobileOpen && (
                                  <ul className='mt-1 ml-4 space-y-1'>
                                    {dmdbSection2.map((f, idx) => (
                                      <li key={idx}>
                                        <Link to={f.path} onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>
                                          {f.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            </ul>
                          )}
                        </li>
                        <li><Link to='/dmdb/adme' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>ADME</Link></li>
                        <li><Link to='/dmdb/statistics' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Statistics</Link></li>
                        <li><Link to='/dmdb/pharmacological' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Pharmacological Activities</Link></li>
                      </ul>
                    )}
                  </li> 
                   
                  {/* FMDB Section */}
                   <li>
                    <button
                      className='w-full text-left flex items-center justify-between px-2 py-3 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg font-semibold whitespace-nowrap'
                      onClick={() => setIsFmdbMobileOpen(!isFmdbMobileOpen)}
                    >
                      <span>FMDB</span>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                      </svg>
                    </button>
                    {isFmdbMobileOpen && (
                      <ul className='mt-1 ml-4 space-y-1'>
                        <li>
                          <Link to='/fmdb/about' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>
                            About
                          </Link>
                        </li>
                        <li>
                          <button
                            className='w-full text-left flex items-center justify-between px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg font-medium whitespace-nowrap'
                            onClick={() => setIsFmdbFruitsMobileOpen(!isFmdbFruitsMobileOpen)}
                          >
                            <span>Fruits</span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                            </svg>
                          </button>
                          {isFmdbFruitsMobileOpen && (
                            <ul className='mt-1 ml-4 space-y-1'>
                              <li>
                                <button
                                  className='w-full text-left flex items-center justify-between px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'
                                  onClick={() => setIsFmdb1MobileOpen(!isFmdb1MobileOpen)}
                                >
                                  <span>Fruits (A–M)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                                  </svg>
                                </button>
                                {isFmdb1MobileOpen && (
                                  <ul className='mt-1 ml-4 space-y-1'>
                                    {fmdbSection1.map((f, idx) => (
                                      <li key={idx}>
                                        <Link to={f.path} onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>
                                          {f.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                              <li>
                                <button
                                  className='w-full text-left flex items-center justify-between px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'
                                  onClick={() => setIsFmdb2MobileOpen(!isFmdb2MobileOpen)}
                                >
                                  <span>Fruits (N–Z)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                                  </svg>
                                </button>
                                {isFmdb2MobileOpen && (
                                  <ul className='mt-1 ml-4 space-y-1'>
                                    {fmdbSection2.map((f, idx) => (
                                      <li key={idx}>
                                        <Link to={f.path} onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>
                                          {f.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            </ul>
                          )}
                        </li>
                        <li><Link to='/fmdb/adme' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>ADME</Link></li>
                        <li><Link to='/fmdb/statistics' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Statistics</Link></li>
                        <li><Link to='/fmdb/pharmacological' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Pharmacological Activities</Link></li>
                      </ul>
                    )}
                  </li> 
                   
                  {/* TMDb (mobile) */}
                  <li>
                    <button
                      className='w-full text-left flex items-center justify-between px-2 py-3 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg font-semibold whitespace-nowrap'
                      onClick={() => setIsTrichodermaMobileOpen(!isTrichodermaMobileOpen)}
                    >
                      <span>TMDB</span>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                      </svg>
                    </button>
                    {isTrichodermaMobileOpen && (
                      <ul className='mt-1 ml-4 space-y-1'>
                        <li><Link to='/trichoderma/about' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>About</Link></li>

                        <li>
                          <button
                            className='w-full text-left flex items-center justify-between px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg font-medium whitespace-nowrap'
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
                                  className='w-full text-left flex items-center justify-between px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'
                                  onClick={() => setIsTrichoderma2MobileOpen(!isTrichoderma2MobileOpen)}
                                >
                                  <span>Trichoderma (A-G)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                                  </svg>
                                </button>
                                {isTrichoderma2MobileOpen && (
                                  <ul className='mt-1 ml-4 space-y-1'>
                                    <li><Link to='/trichoderma/album' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma album</Link></li>
                                    <li><Link to='/trichoderma/applanatum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma applanatum</Link></li>
                                    <li><Link to='/trichoderma/asperellum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma asperellum</Link></li>
                                    <li><Link to='/trichoderma/atroviride' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma atroviride</Link></li>
                                    <li><Link to='/trichoderma/aureoviride' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma aureoviride</Link></li>
                                    <li><Link to='/trichoderma/avellaneum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma avellaneum</Link></li>
                                    <li><Link to='/trichoderma/brevicompactum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma brevicompactum</Link></li>
                                    <li><Link to='/trichoderma/cerinum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma cerinum</Link></li>
                                    <li><Link to='/trichoderma/citrinoviride' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma citrinoviride</Link></li>
                                    <li><Link to='/trichoderma/citrinum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma citrinum</Link></li>
                                    <li><Link to='/trichoderma/cornu-damae' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma cornu-damae</Link></li>
                                    <li><Link to='/trichoderma/crassum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma crassum</Link></li>
                                    <li><Link to='/trichoderma/cremeum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma cremeum</Link></li>
                                    <li><Link to='/trichoderma/deliquescens' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma deliquescens</Link></li>
                                    <li><Link to='/trichoderma/gamsii' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma gamsii</Link></li>
                                  </ul>
                                )}
                              </li>
                              <li>
                                <button
                                  className='w-full text-left flex items-center justify-between px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'
                                  onClick={() => setIsTrichoderma3MobileOpen(!isTrichoderma3MobileOpen)}
                                >
                                  <span>Trichoderma (H-Z)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                                  </svg>
                                </button>
                                {isTrichoderma3MobileOpen && (
                                  <ul className='mt-1 ml-4 space-y-1'>
                                    <li><Link to='/trichoderma/hamatum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma hamatum</Link></li>
                                    <li><Link to='/trichoderma/harzianum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma harzianum</Link></li>
                                    <li><Link to='/trichoderma/hypocrea-muroiana' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma hypocrea-muroiana</Link></li>
                                    <li><Link to='/trichoderma/hypoxylon' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma hypoxylon</Link></li>
                                    <li><Link to='/trichoderma/koningii' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma koningii</Link></li>
                                    <li><Link to='/trichoderma/koningiopsis' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma koningiopsis</Link></li>
                                    <li><Link to='/trichoderma/longibrachiatum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma longibrachiatum</Link></li>
                                    <li><Link to='/trichoderma/polysporum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma polysporum</Link></li>
                                    <li><Link to='/trichoderma/reesei' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma reesei</Link></li>
                                    <li><Link to='/trichoderma/saturnisporum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma saturnisporum</Link></li>
                                    <li><Link to='/trichoderma/spirale' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma spirale</Link></li>
                                    <li><Link to='/trichoderma/velutinum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma velutinum</Link></li>
                                    <li><Link to='/trichoderma/virens' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma virens</Link></li>
                                    <li><Link to='/trichoderma/viride' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma viride</Link></li>
                                    <li><Link to='/trichoderma/vinosum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trichoderma vinosum</Link></li>
                                  </ul>
                                )}
                              </li>
                            </ul>
                          )}
                        </li>
                        <li><Link to='/trichoderma/adme' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>ADME</Link></li>
                        <li><Link to='/trichoderma/statistics' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Statistics</Link></li>
                        <li><Link to='/trichoderma/pharmacological' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Pharmacological Activities</Link></li>
                        <li><Link to='/trichoderma/citethisasTmdb' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Cite This As</Link></li>
                      </ul>
                    )}
                  </li>
                  {/* GMDB Section */}
                   <li>
                    <button
                      className='w-full text-left flex items-center justify-between px-2 py-3 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg font-semibold whitespace-nowrap'
                      onClick={() => setIsGmdbMobileOpen(!isGmdbMobileOpen)}
                    >
                      <span>GMDB</span>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                      </svg>
                    </button>
                    {isGmdbMobileOpen && (
                      <ul className='mt-1 ml-4 space-y-1'>
                        <li>
                          <Link to='/gmdb/about' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>
                            About
                          </Link>
                        </li>
                        <li>
                          <button
                            className='w-full text-left flex items-center justify-between px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg font-medium whitespace-nowrap'
                            onClick={() => setIsGymnospermsMobileOpen(!isGymnospermsMobileOpen)}
                          >
                            <span>Gymnosperms</span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                            </svg>
                          </button>
                          {isGymnospermsMobileOpen && (
                            <ul className='mt-1 ml-4 space-y-1'>
                              <li>
                                <button
                                  className='w-full text-left flex items-center justify-between px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'
                                  onClick={() => setIsGmdb1MobileOpen(!isGmdb1MobileOpen)}
                                >
                                  <span>Gymnosperms (A-E)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                                  </svg>
                                </button>
                                {isGmdb1MobileOpen && (
                                  <ul className='mt-1 ml-4 space-y-1'>
                                    <li><Link to='/gmdb/abies-pindrow' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Abies pindrow</Link></li>
                                    <li><Link to='/gmdb/abies-sachalinensis' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Abies sachalinensis</Link></li>
                                    <li><Link to='/gmdb/agathis-alba' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Agathis alba</Link></li>
                                    <li><Link to='/gmdb/agathis-dammara' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Agathis dammara</Link></li>
                                    <li><Link to='/gmdb/agathis-palmerstonii' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Agathis palmerstonii</Link></li>
                                    <li><Link to='/gmdb/araucaria-columnaris' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Araucaria columnaris</Link></li>
                                    <li><Link to='/gmdb/calocedrus-macrolepis' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Calocedrus macrolepis</Link></li>
                                    <li><Link to='/gmdb/cedrus-deodara' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cedrus deodara</Link></li>
                                    <li><Link to='/gmdb/chamaecyparis-lawsoniana' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Chamaecyparis lawsoniana</Link></li>
                                    <li><Link to='/gmdb/cycas-beddomei' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cycas beddomei</Link></li>
                                    <li><Link to='/gmdb/cycas-circinalis' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cycas circinalis</Link></li>
                                    <li><Link to='/gmdb/cycas-revoluta' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cycas revoluta</Link></li>
                                    <li><Link to='/gmdb/ephedra-distachya' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ephedra distachya</Link></li>
                                    <li><Link to='/gmdb/ephedra-equisetina' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ephedra equisetina</Link></li>
                                    <li><Link to='/gmdb/ephedra-gerardiana' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ephedra gerardiana</Link></li>
                                    <li><Link to='/gmdb/ephedra-intermedia' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ephedra intermedia</Link></li>
                                    <li><Link to='/gmdb/ephedra-likiangensis' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ephedra likiangensis</Link></li>
                                    <li><Link to='/gmdb/ephedra-lomatolepis' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ephedra lomatolepis</Link></li>
                                    <li><Link to='/gmdb/ephedra-minuta' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ephedra minuta</Link></li>
                                    <li><Link to='/gmdb/ephedra-monosperma' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ephedra monosperma</Link></li>
                                    <li><Link to='/gmdb/ephedra-sinica' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ephedra sinica</Link></li>
                                    <li><Link to='/gmdb/ephedra-regeliana' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ephedra regeliana</Link></li>
                                  </ul>
                                )}
                              </li>
                              <li>
                                <button
                                  className='w-full text-left flex items-center justify-between px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'
                                  onClick={() => setIsGmdb2MobileOpen(!isGmdb2MobileOpen)}
                                >
                                  <span>Gymnosperms (G-P)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                                  </svg>
                                </button>
                                {isGmdb2MobileOpen && (
                                  <ul className='mt-1 ml-4 space-y-1'>
                                    <li><Link to='/gmdb/ginkgo-biloba' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ginkgo biloba</Link></li>
                                    <li><Link to='/gmdb/juniperus-communis' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Juniperus communis</Link></li>
                                    <li><Link to='/gmdb/picea-smithiana' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Picea smithiana</Link></li>
                                    <li><Link to='/gmdb/pinus-armandii' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus armandii</Link></li>
                                    <li><Link to='/gmdb/pinus-densiflora' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus densiflora</Link></li>
                                    <li><Link to='/gmdb/pinus-edulis' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus edulis</Link></li>
                                    <li><Link to='/gmdb/pinus-elliottii' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus elliottii</Link></li>
                                    <li><Link to='/gmdb/pinus-flexilis' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus flexilis</Link></li>
                                    <li><Link to='/gmdb/pinus-heldreichii' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus heldreichii</Link></li>
                                    <li><Link to='/gmdb/pinus-luchuensis' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus luchuensis</Link></li>
                                    <li><Link to='/gmdb/pinus-monophylla' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus monophylla</Link></li>
                                    <li><Link to='/gmdb/pinus-montezumae' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus montezumae</Link></li>
                                    <li><Link to='/gmdb/pinus-monticola' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus monticola</Link></li>
                                    <li><Link to='/gmdb/pinus-nigra' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus nigra</Link></li>
                                    <li><Link to='/gmdb/pinus-palustris' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus palustris</Link></li>
                                    <li><Link to='/gmdb/pinus-pinea' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus pinea</Link></li>
                                    <li><Link to='/gmdb/pinus-ponderosa' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus ponderosa</Link></li>
                                    <li><Link to='/gmdb/pinus-pumila' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus pumila</Link></li>
                                    <li><Link to='/gmdb/pinus-radiata' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus radiata</Link></li>
                                  </ul>
                                )}
                              </li>
                              <li>
                                <button
                                  className='w-full text-left flex items-center justify-between px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'
                                  onClick={() => setIsGmdb3MobileOpen(!isGmdb3MobileOpen)}
                                >
                                  <span>Gymnosperms (P-Z)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                                  </svg>
                                </button>
                                {isGmdb3MobileOpen && (
                                  <ul className='mt-1 ml-4 space-y-1'>
                                    <li><Link to='/gmdb/pinus-resinosa' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus resinosa</Link></li>
                                    <li><Link to='/gmdb/pinus-sibirica' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus sibirica</Link></li>
                                    <li><Link to='/gmdb/pinus-strobus' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus strobus</Link></li>
                                    <li><Link to='/gmdb/pinus-sylvestris' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus sylvestris</Link></li>
                                    <li><Link to='/gmdb/pinus-taeda' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus taeda</Link></li>
                                    <li><Link to='/gmdb/pinus-yunnanensis' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pinus yunnanensis</Link></li>
                                    <li><Link to='/gmdb/platycladus-orientalis' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Platycladus orientalis</Link></li>
                                    <li><Link to='/gmdb/sequoia-sempervirens' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Sequoia sempervirens</Link></li>
                                    <li><Link to='/gmdb/taiwania-cryptomerioides' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Taiwania cryptomerioides</Link></li>
                                    <li><Link to='/gmdb/taxus-baccata' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Taxus baccata</Link></li>
                                    <li><Link to='/gmdb/taxus-brevifolia' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Taxus brevifolia</Link></li>
                                    <li><Link to='/gmdb/taxus-canadensis' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Taxus canadensis</Link></li>
                                    <li><Link to='/gmdb/taxus-cuspidata' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Taxus cuspidata</Link></li>
                                    <li><Link to='/gmdb/taxus-mairei' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Taxus mairei</Link></li>
                                    <li><Link to='/gmdb/taxus-sumatrana' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Taxus sumatrana</Link></li>
                                    <li><Link to='/gmdb/taxus-wallichiana' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Taxus wallichiana</Link></li>
                                    <li><Link to='/gmdb/tetraclinis-articulata' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Tetraclinis articulata</Link></li>
                                    <li><Link to='/gmdb/thuja-occidentalis' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Thuja occidentalis</Link></li>
                                    <li><Link to='/gmdb/thuja-standishii' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Thuja standishii</Link></li>
                                    <li><Link to='/gmdb/thuja-plicata' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Thuja plicata</Link></li>
                                  </ul>
                                )}
                              </li>
                            </ul>
                          )}
                        </li>
                        <li><Link to='/gmdb/adme' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>ADME</Link></li>
                        <li><Link to='/gmdb/statistics' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Statistics</Link></li>
                        <li><Link to='/gmdb/pharmacological' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Pharmacological Activities</Link></li>
                        <li><Link to='/gmdb/toxicityPrediction' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Toxicity Prediction</Link></li>
                      </ul>
                    )}
                  </li>
                  
                  {/* LMDb (mobile) */}
                  <li>
                    <button
                      className='w-full text-left flex items-center justify-between px-2 py-3 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg font-semibold whitespace-nowrap'
                      onClick={() => setIsLmdbMobileOpen(!isLmdbMobileOpen)}
                    >
                      <span>LMDB</span>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                      </svg>
                    </button>
                    {isLmdbMobileOpen && (
                      <ul className='mt-1 ml-4 space-y-1'>
                        <li><Link to='/lichmdb/about' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>About</Link></li>

                        <li>
                          <button
                            className='w-full text-left flex items-center justify-between px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg font-medium whitespace-nowrap'
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
                                  className='w-full text-left flex items-center justify-between px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'
                                  onClick={() => setIsLichens1MobileOpen(!isLichens1MobileOpen)}
                                >
                                  <span>Lichens (A-E)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                                  </svg>
                                </button>
                                {isLichens1MobileOpen && (
                                  <ul className='mt-1 ml-4 space-y-1'>
                                    <li><Link to='/lichmdb/alectoria-ochroleuca' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Alectoria ochroleuca</Link></li>
                                    <li><Link to='/lichmdb/alectoria-sarmentosa' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Alectoria sarmentosa</Link></li>
                                    <li><Link to='/lichmdb/anzia-hypoleucoides' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Anzia hypoleucoides</Link></li>
                                    <li><Link to='/lichmdb/candelaria-concolor' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Candelaria concolor</Link></li>
                                    <li><Link to='/lichmdb/cetraria-islandica' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cetraria islandica</Link></li>
                                    <li><Link to='/lichmdb/cladonia-convoluta' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cladonia convoluta</Link></li>
                                    <li><Link to='/lichmdb/cladonia-cristatella' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cladonia cristatella</Link></li>
                                    <li><Link to='/lichmdb/cladonia-cryptochlorophaea' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cladonia cryptochlorophaea</Link></li>
                                    <li><Link to='/lichmdb/cladonia-furcata' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cladonia furcata</Link></li>
                                    <li><Link to='/lichmdb/cladonia-macilenta' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cladonia macilenta</Link></li>
                                    <li><Link to='/lichmdb/cladonia-mitis' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cladonia mitis</Link></li>
                                    <li><Link to='/lichmdb/cladonia-rangiferina' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cladonia rangiferina</Link></li>
                                    <li><Link to='/lichmdb/cladonia-stellaris' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cladonia stellaris</Link></li>
                                    <li><Link to='/lichmdb/cladonia-verticillata' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cladonia verticillata</Link></li>
                                    <li><Link to='/lichmdb/coniocarpon-cinnabarinum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Coniocarpon cinnabarinum</Link></li>
                                    <li><Link to='/lichmdb/dimelaena-oreina' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Dimelaena oreina</Link></li>
                                    <li><Link to='/lichmdb/dolichousnea-longissima' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Dolichousnea longissima</Link></li>
                                    <li><Link to='/lichmdb/evernia-prunastri' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Evernia prunastri</Link></li>
                                  </ul>
                                )}
                              </li>
                              <li>
                                <button
                                  className='w-full text-left flex items-center justify-between px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'
                                  onClick={() => setIsLichens2MobileOpen(!isLichens2MobileOpen)}
                                >
                                  <span>Lichens (F-M)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                                  </svg>
                                </button>
                                {isLichens2MobileOpen && (
                                  <ul className='mt-1 ml-4 space-y-1'>
                                    <li><Link to='/lichmdb/flavoparmelia-caperata' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Flavoparmelia caperata</Link></li>
                                    <li><Link to='/lichmdb/flavoparmelia-haysomii' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Flavoparmelia haysomii</Link></li>
                                    <li><Link to='/lichmdb/heterodermia-dissecta' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Heterodermia dissecta</Link></li>
                                    <li><Link to='/lichmdb/hypogymnia-enteromorpha' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Hypogymnia enteromorpha</Link></li>
                                    <li><Link to='/lichmdb/hypotrachyna-cirrhata' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Hypotrachyna cirrhata</Link></li>
                                    <li><Link to='/lichmdb/hypotrachyna-leiophylla' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Hypotrachyna leiophylla</Link></li>
                                    <li><Link to='/lichmdb/lecanora-frustulosa' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Lecanora frustulosa</Link></li>
                                    <li><Link to='/lichmdb/lecanora-hybocarpa' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Lecanora hybocarpa</Link></li>
                                    <li><Link to='/lichmdb/lecanora-lividocinerea' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Lecanora lividocinerea</Link></li>
                                    <li><Link to='/lichmdb/leptogium-saturninum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Leptogium saturninum</Link></li>
                                    <li><Link to='/lichmdb/lethariella-cladonioides' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Lethariella cladonioides</Link></li>
                                    <li><Link to='/lichmdb/lethariella-sernanderi' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Lethariella sernanderi</Link></li>
                                    <li><Link to='/lichmdb/lobaria-pulmonaria' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Lobaria pulmonaria</Link></li>
                                    <li><Link to='/lichmdb/lobaria-scrobiculata' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Lobaria scrobiculata</Link></li>
                                    <li><Link to='/lichmdb/menegazzia-terebrata' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Menegazzia terebrata</Link></li>
                                  </ul>
                                )}
                              </li>
                              <li>
                                <button
                                  className='w-full text-left flex items-center justify-between px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'
                                  onClick={() => setIsLichens3MobileOpen(!isLichens3MobileOpen)}
                                >
                                  <span>Lichens (O-P)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                                  </svg>
                                </button>
                                {isLichens3MobileOpen && (
                                  <ul className='mt-1 ml-4 space-y-1'>
                                    <li><Link to='/lichmdb/ochrolechia-parella' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ochrolechia parella</Link></li>
                                    <li><Link to='/lichmdb/ophioparma-ventosa' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ophioparma ventosa</Link></li>
                                    <li><Link to='/lichmdb/oxneria-fallax' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Oxneria fallax</Link></li>
                                    <li><Link to='/lichmdb/parmelia-omphalodes' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Parmelia omphalodes</Link></li>
                                    <li><Link to='/lichmdb/parmelia-saxatilis' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Parmelia saxatilis</Link></li>
                                    <li><Link to='/lichmdb/parmotrema-nilgherrense' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Parmotrema nilgherrense</Link></li>
                                    <li><Link to='/lichmdb/parmotrema-praesorediosum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Parmotrema praesorediosum</Link></li>
                                    <li><Link to='/lichmdb/parmotrema-sancti-angelii' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Parmotrema sancti-angelii</Link></li>
                                    <li><Link to='/lichmdb/parmotrema-tinctorum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Parmotrema tinctorum</Link></li>
                                    <li><Link to='/lichmdb/peltigera-canina' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Peltigera canina</Link></li>
                                    <li><Link to='/lichmdb/peltigera-malacea' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Peltigera malacea</Link></li>
                                    <li><Link to='/lichmdb/peltigera-venosa' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Peltigera venosa</Link></li>
                                    <li><Link to='/lichmdb/platismatia-glauca' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Platismatia glauca</Link></li>
                                    <li><Link to='/lichmdb/pseudocyphellaria-faveolata' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pseudocyphellaria faveolata</Link></li>
                                    <li><Link to='/lichmdb/pseudocyphellaria-norvegica' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pseudocyphellaria norvegica</Link></li>
                                    <li><Link to='/lichmdb/pyrenula-pseudobufonia' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pyrenula pseudobufonia</Link></li>
                                  </ul>
                                )}
                              </li>
                              <li>
                                <button
                                  className='w-full text-left flex items-center justify-between px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'
                                  onClick={() => setIsLichens4MobileOpen(!isLichens4MobileOpen)}
                                >
                                  <span>Lichens (Q-S)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                                  </svg>
                                </button>
                                {isLichens4MobileOpen && (
                                  <ul className='mt-1 ml-4 space-y-1'>
                                    <li><Link to='/lichmdb/ramalina-calicaris' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ramalina calicaris</Link></li>
                                    <li><Link to='/lichmdb/ramalina-dilacerata' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ramalina dilacerata</Link></li>
                                    <li><Link to='/lichmdb/ramalina-farinacea' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ramalina farinacea</Link></li>
                                    <li><Link to='/lichmdb/ramalina-hierrensis' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ramalina hierrensis</Link></li>
                                    <li><Link to='/lichmdb/ramalina-pollinaria' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ramalina pollinaria</Link></li>
                                    <li><Link to='/lichmdb/ramalina-siliquosa' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ramalina siliquosa</Link></li>
                                    <li><Link to='/lichmdb/ramalina-stenospora' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ramalina stenospora</Link></li>
                                    <li><Link to='/lichmdb/ricasolia-amplissima' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ricasolia amplissima</Link></li>
                                    <li><Link to='/lichmdb/roccella-fuciformis' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Roccella fuciformis</Link></li>
                                    <li><Link to='/lichmdb/roccella-montagnei' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Roccella montagnei</Link></li>
                                    <li><Link to='/lichmdb/sphaerophorus-fragilis' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Sphaerophorus fragilis</Link></li>
                                    <li><Link to='/lichmdb/stereocaulon-azoreum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Stereocaulon azoreum</Link></li>
                                    <li><Link to='/lichmdb/stereocaulon-corticatulum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Stereocaulon corticatulum</Link></li>
                                    <li><Link to='/lichmdb/stereocaulon-japonicum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Stereocaulon japonicum</Link></li>
                                    <li><Link to='/lichmdb/stereocaulon-paschale' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Stereocaulon paschale</Link></li>
                                    <li><Link to='/lichmdb/stereocaulon-ramulosum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Stereocaulon ramulosum</Link></li>
                                    <li><Link to='/lichmdb/stereocaulon-sasakii' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Stereocaulon sasakii</Link></li>
                                    <li><Link to='/lichmdb/sulcaria-sulcata' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Sulcaria sulcata</Link></li>
                                    <li><Link to='/lichmdb/stereocaulon-vesuvianum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Stereocaulon vesuvianum</Link></li>
                                  </ul>
                                )}
                              </li>
                              <li>
                                <button
                                  className='w-full text-left flex items-center justify-between px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'
                                  onClick={() => setIsLichens5MobileOpen(!isLichens5MobileOpen)}
                                >
                                  <span>Lichens (T-Z)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                                  </svg>
                                </button>
                                {isLichens5MobileOpen && (
                                  <ul className='mt-1 ml-4 space-y-1'>
                                    <li><Link to='/lichmdb/teloschistes-chrysophthalmus' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Teloschistes chrysophthalmus</Link></li>
                                    <li><Link to='/lichmdb/teloschistes-flavicans' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Teloschistes flavicans</Link></li>
                                    <li><Link to='/lichmdb/umbilicaria-cinereorufescens' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Umbilicaria cinereorufescens</Link></li>
                                    <li><Link to='/lichmdb/umbilicaria-crustulosa' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Umbilicaria crustulosa</Link></li>
                                    <li><Link to='/lichmdb/umbilicaria-esculenta' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Umbilicaria esculenta</Link></li>
                                    <li><Link to='/lichmdb/umbilicaria-hypococcinea' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Umbilicaria hypococcinea</Link></li>
                                    <li><Link to='/lichmdb/umbilicaria-polyphylla' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Umbilicaria polyphylla</Link></li>
                                    <li><Link to='/lichmdb/umbilicaria-proboscidea' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Umbilicaria proboscidea</Link></li>
                                    {/* <li><Link to='/lichmdb/umbilicaria-polyphylla1' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Umbilicaria polyphylla</Link></li> */}
                                    <li><Link to='/lichmdb/umbilicaria-spodochroa1' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Umbilicaria spodochroa</Link></li>
                                    <li><Link to='/lichmdb/usnea-articulata' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Usnea articulata</Link></li>
                                    {/* <li><Link to='/lichmdb/umbilicaria-spodochroa1' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Umbilicaria spodochroa</Link></li> */}
                                    <li><Link to='/lichmdb/usnea-florida' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Usnea florida</Link></li>
                                    <li><Link to='/lichmdb/usnea-undulata' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Usnea undulata</Link></li>
                                    <li><Link to='/lichmdb/xanthoparmelia-competita' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Xanthoparmelia competita</Link></li>
                                    <li><Link to='/lichmdb/xalocoa-ocellata' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Xalocoa ocellata</Link></li>
                                    <li><Link to='/lichmdb/xanthoparmelia-camtschadalis' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Xanthoparmelia camtschadalis</Link></li>
                                    <li><Link to='/lichmdb/xanthoparmelia-tinctina' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Xanthoparmelia tinctina</Link></li>
                                  </ul>
                                )}
                              </li>
                            </ul>
                          )}
                        </li>

                        <li><Link to='/lichmdb/adme' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>ADME</Link></li>
                        <li><Link to='/lichmdb/statistics' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Statistics</Link></li>
                        <li><Link to='/lichmdb/pharmacological' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Pharmacological Activities</Link></li>
                        <li><Link to='/lichmdb/citethisasLmdb' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Cite This As</Link></li>
                      </ul>
                    )}
                  </li>
                  {/* SMDb Section */}
                  <li>
                    <button
                      className='w-full text-left flex items-center justify-between px-2 py-3 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg font-semibold whitespace-nowrap'
                      onClick={() => setIsSmdbMobileOpen(!isSmdbMobileOpen)}
                    >
                      <span>SMDB</span>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                      </svg>
                    </button>
                    {isSmdbMobileOpen && (
                      <ul className='mt-1 ml-4 space-y-1'>
                        <li><Link to='/smdb/about' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>About</Link></li>

                        <li>
                          <button
                            className='w-full text-left flex items-center justify-between px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg font-medium whitespace-nowrap'
                            onClick={() => setIsSpicesMobileOpen(!isSpicesMobileOpen)}
                          >
                            <span>Spices</span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                            </svg>
                          </button>
                          {isSpicesMobileOpen && (
                            <ul className='mt-1 ml-4 space-y-1'>
                              <li>
                                <button
                                  className='w-full text-left flex items-center justify-between px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'
                                  onClick={() => setIsSpices1MobileOpen(!isSpices1MobileOpen)}
                                >
                                  <span>Spices (A-I)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                                  </svg>
                                </button>
                                {isSpices1MobileOpen && (
                                  <ul className='mt-1 ml-4 space-y-1'>
                                    <li><Link to='/smdb/ratanjot' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Alkanna tinktoria</Link></li>
                                    <li><Link to='/smdb/lahsun' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Allium sativum</Link></li>
                                    <li><Link to='/smdb/pyaj' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Allium cepa</Link></li>
                                    <li><Link to='/smdb/anthriscus-cerefolium' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Anthriscus cerefolium</Link></li>
                                    <li><Link to='/smdb/apium-graveolens' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Apium graveolens</Link></li>
                                    <li><Link to='/smdb/armoracia-rusticana' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Armoracia rusticana</Link></li>
                                    <li><Link to='/smdb/brassica-juncea' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Brassica juncea</Link></li>
                                    <li><Link to='/smdb/capparis-spinosa' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Capparis spinosa</Link></li>
                                    <li><Link to='/smdb/capsicum-annuum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Capsicum annuum</Link></li>
                                    <li><Link to='/smdb/tezpatta' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cinnamomum tamala</Link></li>
                                    <li><Link to='/smdb/dalchini' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cinnamomum verum</Link></li>
                                    <li><Link to='/smdb/dhaniya' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Coriandrum sativum</Link></li>
                                    <li><Link to='/smdb/kesar' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Crocus sativus</Link></li>
                                    <li><Link to='/smdb/jeera' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Cuminum cyminum</Link></li>
                                    <li><Link to='/smdb/haldi' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Curcuma longa</Link></li>
                                    <li><Link to='/smdb/dracocephalum-officinale' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Dracocephalum officinale</Link></li>
                                    <li><Link to='/smdb/elayachi' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Elettaria cardamomum</Link></li>
                                    <li><Link to='/smdb/foeniculum-vulgare' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Foeniculum vulgare</Link></li>
                                    <li><Link to='/smdb/hing' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ferula assafoetida</Link></li>
                                    <li><Link to='/smdb/illicium-verum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Illicium verum</Link></li>
                                  </ul>
                                )}
                              </li>
                              <li>
                                <button
                                  className='w-full text-left flex items-center justify-between px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'
                                  onClick={() => setIsSpices2MobileOpen(!isSpices2MobileOpen)}
                                >
                                  <span>Spices (L-Z)</span>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                                  </svg>
                                </button>
                                {isSpices2MobileOpen && (
                                  <ul className='mt-1 ml-4 space-y-1'>
                                    <li><Link to='/smdb/laurus-nobilis' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Laurus nobilis</Link></li>
                                    <li><Link to='/smdb/levisticum-officinale' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Levisticum officinale</Link></li>
                                    {/* <li><Link to='/smdb/mangifera-indica' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Mangifera indica</Link></li> */}
                                    <li><Link to='/smdb/pudina' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Mentha spicata</Link></li>
                                    <li><Link to='/smdb/currypatta' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Murraya koengii</Link></li>
                                    <li><Link to='/smdb/javitri' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Myristica fragrans</Link></li>
                                    <li><Link to='/smdb/kalonji' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Nigella sativa</Link></li>
                                    <li><Link to='/smdb/ocimum-basilicum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ocimum basilicum</Link></li>
                                    <li><Link to='/smdb/papaver-somniferum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Papaver somniferum</Link></li>
                                    <li><Link to='/smdb/pimpinella-anisum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Pimpinella anisum</Link></li>
                                    <li><Link to='/smdb/kalimirch' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Piper nigrum</Link></li>
                                    <li><Link to='/smdb/punica-granatum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Punica granatum</Link></li>
                                    <li><Link to='/smdb/loung' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Syzygium aromaticum</Link></li>
                                    <li><Link to='/smdb/salvia-rosmarinus' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Salvia rosmarinus</Link></li>
                                    <li><Link to='/smdb/satureja-hortensis' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Satureja hortensis</Link></li>
                                    <li><Link to='/smdb/sesamum-indicum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Sesamum indicum</Link></li>
                                    <li><Link to='/smdb/tamarindus-indica' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Tamarindus indica</Link></li>
                                    <li><Link to='/smdb/thymus-vulgaris' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Thymus vulgaris</Link></li>
                                    <li><Link to='/smdb/ajwain' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Trachyspermum ammi</Link></li>
                                    <li><Link to='/smdb/adrak' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Zingiber officinale</Link></li>
                                  </ul>
                                )}
                              </li>
                            </ul>
                          )}
                        </li>
                        <li><Link to='/smdb/adme' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>ADME</Link></li>
                        <li><Link to='/smdb/statistics' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Statistics</Link></li>
                        <li><Link to='/smdb/pharmacological' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Pharmacological Activities</Link></li>
                        <li><Link to='/smdb/citethisasSmdb' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Cite This As</Link></li>
                      </ul>
                    )}
                  </li>                  
                  {/* CMDb (mobile) */}
                  <li>
                    <button
                      className='w-full text-left flex items-center justify-between px-2 py-3 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg font-semibold whitespace-nowrap'
                      onClick={() => setIsCmdbMobileOpen(!isCmdbMobileOpen)}
                    >
                      <span>CMDB</span>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                      </svg>
                    </button>
                    {isCmdbMobileOpen && (
                      <ul className='mt-1 ml-4 space-y-1'>
                        <li><Link to='/Cereals/about' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>About</Link></li>

                        <li>
                          <button
                            className='w-full text-left flex items-center justify-between px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg font-medium whitespace-nowrap'
                            onClick={() => setIsCerealsMobileOpen(!isCerealsMobileOpen)}
                          >
                            <span>Cereals</span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                            </svg>
                          </button>
                          {isCerealsMobileOpen && (
                            <ul className='mt-1 ml-4 space-y-1'>
                              <li><Link to='/Cereals/wheat' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Wheat</Link></li>
                              <li><Link to='/Cereals/rice' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Rice</Link></li>
                              <li><Link to='/Cereals/sorghum' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Sorghum</Link></li>
                              <li><Link to='/Cereals/ragi' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Ragi</Link></li>
                              <li><Link to='/Cereals/barley' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Barley</Link></li>
                              <li><Link to='/Cereals/maize' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Maize</Link></li>
                              <li><Link to='/Cereals/bajra' onClick={closeAllMenus} className='block px-2 py-1 text-black hover:text-gray-200 hover:bg-white/10 rounded whitespace-nowrap'>Bajra</Link></li>
                            </ul>
                          )}
                        </li>

                        <li><Link to='/Cereals/adme' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>ADME</Link></li>
                        <li><Link to='/Cereals/statistics' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Statistics</Link></li>
                        <li><Link to='/Cereals/pharmacological' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Pharmacological Activities</Link></li>
                        <li><Link to='/Cereals/citethisasCmdb' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Cite This As</Link></li>

                      </ul>
                    )}
                  </li>


                  <li>
                    <Link
                      to='/analytics'
                      onClick={closeAllMenus}
                      className='block px-2 py-3 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg font-semibold whitespace-nowrap'
                    >
                      Analytics
                    </Link>
                  </li>

                  {/* More (mobile) */}
                  <li>
                    <button
                      className='w-full text-left flex items-center justify-between px-2 py-3 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg font-semibold whitespace-nowrap'
                      onClick={() => setIsInfoMobileOpen(!isInfoMobileOpen)}
                    >
                      <span>More</span>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                      </svg>
                    </button>
                    {isInfoMobileOpen && (
                      <ul className='mt-1 ml-4 space-y-1'>
                        <li><Link to='/author' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Author</Link></li>
                        <li><Link to='/acknowledgements' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Acknowledgements</Link></li>
                        <li><Link to='/help' onClick={closeAllMenus} className='block px-2 py-2 text-black hover:text-gray-200 hover:bg-white/10 rounded-lg whitespace-nowrap'>Help</Link></li>
                      </ul>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
