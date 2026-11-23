import { useState, useEffect } from "react";
import useDownloadWithEmail from "../../hooks/useDownloadWithEmail";
import EmailDownloadModal, { DownloadButton, RowRangeInputs } from "../../components/DownloadWithEmail";

const SMDB_PHARMA_CEREAL_COLUMNS = [
    { header: "S.No", field: "sn" },
    { header: "Plants", field: "Plants" },
    { header: "Anti-cancerous", field: "Anticancerous" },
    { header: "Anti-bacterial", field: "Antibacterial" },
    { header: "Anti-fungal", field: "Antifungal" },
    { header: "Anti-inflammatory", field: "Antiinflammattory" },
    { header: "Anti-oxidant", field: "Antioxidant" },
    { header: "Anti-diabetic", field: "Antidiabetic" },
    { header: "Anti-protozons", field: "Antiprotozons" },
    { header: "Anti-allergic", field: "Antiallergic" },
    { header: "Anti-convulsant", field: "Anticonvulsant" },
    { header: "Anti-coagulant", field: "Anticoagulant" },
    { header: "Anti-ulcer", field: "Antiulcer" },
    { header: "Anti-aging", field: "Antiaging" },
    { header: "Anti-obesity", field: "Antiobesity" },
    { header: "Anti-anxiety", field: "Antianxiety" },
    { header: "Anti-depressive", field: "Antidepressive" },
    { header: "Anti-osteoporosis", field: "Antiosteoporosis" },
    { header: "Anti-neoplastic", field: "Antineoplastic" },
    { header: "Anti-algal", field: "Antialgal" },
    { header: "Anti-spasmodic", field: "Antispasmodic" },
    { header: "Anti-estrogenic", field: "Antiestrogenic" },
    { header: "Anti-proliferative", field: "Antiproliferative" },
];

const SMDB_PHARMA_CEREAL_COL_WIDTHS = SMDB_PHARMA_CEREAL_COLUMNS.map(() => 15);

export default function PharmacologicalCerealSMDB() {
    const [pharmacologicalCereals, setPharmacologicalCereal] = useState([]);
    const [active, setActive] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(10);
    const lastIndex = active * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = pharmacologicalCereals.slice(firstIndex, lastIndex);
    const npage = Math.ceil(pharmacologicalCereals.length / recordsPerPage)
    const numCol = firstIndex + 1;
    const numColPage = Math.min(lastIndex, pharmacologicalCereals.length);

    const dl = useDownloadWithEmail({
        items: pharmacologicalCereals,
        slug: "smdb-pharma-cereal",
        localStorageKey: "smdb_pharma_cereal_email",
        slugFieldName: "smdbPharmaCerealSlug",
        columns: SMDB_PHARMA_CEREAL_COLUMNS,
        colWidths: SMDB_PHARMA_CEREAL_COL_WIDTHS,
        maxRows: 5,
    });

    const next = () => {
        if (active === npage) return;
        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;
        setActive(active - 1);
    };

    const handlePageSizeChange = (newSize) => {
        setRecordsPerPage(Number(newSize));
        setActive(1);
    };

    useEffect(() => {
        fetch(`${import.meta.env.VITE_APP_URI_API}/api/smdb/pharmacologyCereals/`).then((result) => {
            result.json().then((resp) => {
                setPharmacologicalCereal(resp);
            });
        });
    }, []);

    return (
        <>
            <EmailDownloadModal
                show={dl.showModal}
                onClose={() => dl.setShowModal(false)}
                name={dl.name}
                setName={dl.setName}
                email={dl.email}
                setEmail={dl.setEmail}
                address={dl.address}
                setAddress={dl.setAddress}
                onSubmit={dl.handleSubmit}
            />
            {/* Mobile and Tablet Layout */}
            <div className="lg:hidden pt-24 px-4">

                {/* Data Table Section */}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold">Data Table</h3>
                    </div>
                    <div className="flex items-center space-x-2 flex-wrap gap-2 mb-4">
                        <RowRangeInputs
                            startRow={dl.startRow}
                            setStartRow={dl.setStartRow}
                            endRow={dl.endRow}
                            setEndRow={dl.setEndRow}
                            maxRows={dl.maxRows}
                            maxRow={pharmacologicalCereals.length}
                        />
                        <DownloadButton onClick={dl.handleDownloadClick} />
                        <div className="flex items-center space-x-2 ml-auto">
                            <label className="text-sm font-medium text-gray-700">Show:</label>
                            <select
                                value={recordsPerPage}
                                onChange={(e) => handlePageSizeChange(e.target.value)}
                                className="border border-gray-300 rounded px-2 py-1 text-sm"
                            >
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                                <option value={20}>20</option>
                                <option value={25}>25</option>
                            </select>
                            <span className="text-sm text-gray-600">entries</span>
                        </div>
                    </div>

                    <div className="overflow-x-auto border-4 border-black-600 rounded-lg shadow-lg  " style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 #f1f1f1' }}>
                        <table className="min-w-full bg-white" style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}>
                            <thead className="bg-black-50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">S.No</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Plants</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-cancerous</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-bacterial</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-fungal</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-inflammatory</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-oxidant</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-diabetic</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-protozons</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-allergic</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-convulsant</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-coagulant</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-ulcer</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-aging</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-obesity</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-anxiety</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-depressive</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-osteoporosis</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-neoplastic</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-algal</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-spasmodic</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-estrogenic</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600  ">Anti-proliferative</th>
                                </tr>
                            </thead>
                            <tbody>
                                {records.map((pharmacologicalCereal, i) => (
                                    <tr key={i} className="hover:bg-black-50 border-b border-black-200  ">
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300 font-medium bg-gray-50  ">{firstIndex + i + 1}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300 font-medium bg-gray-50  italic">{pharmacologicalCereal.Plants}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Anticancerous}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antibacterial}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antifungal}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antiinflammattory}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antioxidant}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antidiabetic}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antiprotozons}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antiallergic}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Anticonvulsant}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Anticoagulant}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antiulcer}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antiaging}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antiobesity}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antianxiety}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antidepressive}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antiosteoporosis}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antineoplastic}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antialgal}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antispasmodic}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antiestrogenic}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900  ">{pharmacologicalCereal.Antiproliferative}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination - Bottom Left and Right */}
                    {npage > 1 && (
                        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 mt-4">
                            {/* Showing Text - Left Side */}
                            <div className="text-center">
                                <span className="text-sm text-gray-700 font-medium">
                                    Showing {numCol} to {numColPage} of {pharmacologicalCereals.length} records
                                </span>
                            </div>

                            {/* Pagination Controls - Right Side */}
                            <div className="flex items-center space-x-2">
                                <button
                                    onClick={prev}
                                    disabled={active === 1}
                                    className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 border border-black-600 rounded hover:bg-black-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    &lt;
                                </button>

                                <span className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded">
                                    Page <span className="text-black-600 font-bold">{active}</span> of <span className="text-black-600 font-bold">{npage}</span>
                                </span>

                                <button
                                    onClick={next}
                                    disabled={active === npage}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border-2 border-black-600 rounded-lg hover:bg-black-700 hover:border-black-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    &gt;
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Add minimum gap between table and footer for mobile */}
                <div className="min-h-[20px]"></div>
            </div>

            {/* Desktop Data Table */}
            <div className="hidden lg:block pt-24 px-4">
                <div className="max-w-7xl mx-auto">

                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold">Data Table</h3>
                        <div className="flex items-center space-x-2 flex-wrap gap-2">
                            <RowRangeInputs
                                startRow={dl.startRow}
                                setStartRow={dl.setStartRow}
                                endRow={dl.endRow}
                                setEndRow={dl.setEndRow}
                                maxRows={dl.maxRows}
                                maxRow={pharmacologicalCereals.length}
                            />
                            <DownloadButton onClick={dl.handleDownloadClick} />
                            <label className="text-sm font-medium text-gray-700">Show:</label>
                            <select
                                value={recordsPerPage}
                                onChange={(e) => handlePageSizeChange(e.target.value)}
                                className="border border-gray-300 rounded px-3 py-1 text-sm"
                            >
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                                <option value={20}>20</option>
                                <option value={25}>25</option>
                            </select>
                            <span className="text-sm text-gray-600">entries</span>
                        </div>
                    </div>

                    <div className="overflow-x-auto border-2 border-black-600 rounded-lg shadow-lg  " style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 #f1f1f1' }}>
                        <table className="min-w-full bg-white" style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}>
                            <thead className="bg-black-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">S.No</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Plants</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-cancerous</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-bacterial</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-fungal</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-inflammatory</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-oxidant</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-diabetic</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-protozons</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-allergic</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-convulsant</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-coagulant</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-ulcer</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-aging</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-obesity</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-anxiety</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-depressive</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-osteoporosis</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-neoplastic</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-algal</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-spasmodic</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anti-estrogenic</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600  ">Anti-proliferative</th>
                                </tr>
                            </thead>
                            <tbody>
                                {records.map((pharmacologicalCereal, i) => (
                                    <tr key={i} className="hover:bg-black-50 border-b border-black-200  ">
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300 font-medium bg-gray-50  ">{firstIndex + i + 1}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300 font-medium bg-gray-50 italic ">{pharmacologicalCereal.Plants}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Anticancerous}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antibacterial}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antifungal}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antiinflammattory}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antioxidant}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antidiabetic}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antiprotozons}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antiallergic}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Anticonvulsant}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Anticoagulant}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antiulcer}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antiaging}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antiobesity}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antianxiety}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antidepressive}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antiosteoporosis}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antineoplastic}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antialgal}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antispasmodic}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologicalCereal.Antiestrogenic}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900  ">{pharmacologicalCereal.Antiproliferative}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Desktop Pagination - Bottom Left and Right */}
                    {npage > 1 && (
                        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 mt-6 mb-20">
                            {/* Showing Text - Left Side */}
                            <div className="text-center">
                                <span className="text-base text-gray-700 font-medium">
                                    Showing <span className="text-black-600 font-bold">{numCol}</span> to <span className="text-black-600 font-bold">{numColPage}</span> of <span className="text-black-600 font-bold">{pharmacologicalCereals.length}</span> records
                                </span>
                            </div>

                            {/* Pagination Controls - Right Side */}
                            <div className="flex items-center space-x-3">
                                <button
                                    onClick={prev}
                                    disabled={active === 1}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border-2 border-black-600 rounded-lg hover:bg-black-700 hover:border-black-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    &lt;
                                </button>

                                <span className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border-2 border-gray-300 rounded-lg">
                                    Page <span className="text-black-600 font-bold">{active}</span> of <span className="text-black-600 font-bold">{npage}</span>
                                </span>

                                <button
                                    onClick={next}
                                    disabled={active === npage}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border-2 border-black-600 rounded-lg hover:bg-black-700 hover:border-black-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    &gt;
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Add minimum gap between table and footer */}
                <div className="min-h-[20px]"></div>
            </div>
        </>
    );
}
