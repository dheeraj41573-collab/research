import { useState, useEffect } from "react";
import useDownloadWithEmail from "../../hooks/useDownloadWithEmail";
import EmailDownloadModal, { DownloadButton, RowRangeInputs } from "../../components/DownloadWithEmail";

const allFields = [
    { key: "Anticancerous", label: "Anti-cancerous" },
    { key: "Antibacterial", label: "Anti-bacterial" },
    { key: "Antifungal", label: "Anti-fungal" },
    { key: "Antiinflammattory", label: "Anti-inflammatory" },
    { key: "Antioxidant", label: "Anti-oxidant" },
    { key: "Antidiabetic", label: "Anti-diabetic" },
    { key: "Antiprotozons", label: "Anti-protozons" },
    { key: "Antiallergic", label: "Anti-allergic" },
    { key: "Anticonvulsant", label: "Anti-convulsant" },
    { key: "Anticoagulant", label: "Anti-coagulant" },
    { key: "Antiulcer", label: "Anti-ulcer" },
    { key: "Antiaging", label: "Anti-aging" },
    { key: "Antiobesity", label: "Anti-obesity" },
    { key: "Antianxiety", label: "Anti-anxiety" },
    { key: "Antiinfectious", label: "Anti-infectious" },
    { key: "Antidepressive", label: "Anti-depressive" },
    { key: "Antiosteoporosis", label: "Anti-osteoporosis" },
    { key: "Antineoplastic", label: "Anti-neoplastic" },
    { key: "Antialgal", label: "Anti-algal" },
    { key: "Antigastritic", label: "Anti-gastritic" },
    { key: "Antispasmodic", label: "Anti-spasmodic" },
    { key: "Antimigraine", label: "Anti-migraine" },
    { key: "Antipsychotic", label: "Anti-psychotic" },
    { key: "Antiadipogenic", label: "Anti-adipogenic" },
    { key: "Antiestrogenic", label: "Anti-estrogenic" },
    { key: "Antiinsecticide", label: "Anti-insecticide" },
    { key: "Antihypertensive", label: "Anti-hypertensive" },
    { key: "Antiamyloidogenic", label: "Anti-amyloidogenic" },
    { key: "Antiarthritic", label: "Anti-arthritic" },
    { key: "Antiplateletaggregating", label: "Anti-platelet aggregating" },
    { key: "Antisickling", label: "Anti-sickling" },
    { key: "Antimelanogenesis", label: "Anti-melanogenesis" },
];

const CMDB_PHARMA_PLANT_COLUMNS = [
    { header: "S.No", field: "sn" },
    ...allFields.map(f => ({ header: f.label, field: f.key })),
];

const CMDB_PHARMA_PLANT_COL_WIDTHS = CMDB_PHARMA_PLANT_COLUMNS.map(() => 15);

export default function PharmacologicalPlant() {
    const [pharmacologicalPlants, setPharmacologicalPlant] = useState([]);
    const [active, setActive] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(10);
    const lastIndex = active * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = pharmacologicalPlants.slice(firstIndex, lastIndex);
    const npage = Math.ceil(pharmacologicalPlants.length / recordsPerPage)
    const numCol = firstIndex + 1;
    const numColPage = Math.min(lastIndex, pharmacologicalPlants.length);

    const dl = useDownloadWithEmail({
        items: pharmacologicalPlants,
        slug: "cmdb-pharma-plant",
        localStorageKey: "cmdb_pharma_plant_email",
        slugFieldName: "cmdbPharmaPlantSlug",
        columns: CMDB_PHARMA_PLANT_COLUMNS,
        colWidths: CMDB_PHARMA_PLANT_COL_WIDTHS,
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
        fetch(`${import.meta.env.VITE_APP_URI_API}/api/pharmacologyPlant/`).then((result) => {
            result.json().then((resp) => {
                setPharmacologicalPlant(resp);
            });
        });
    }, []);

    const renderItalicized = (text) => {
        if (!text || typeof text !== 'string') return text || '-';
        const parts = text.split(/(\([^)]+\))/g);
        return parts.map((part, index) => {
            if (part.startsWith('(') && part.endsWith(')')) {
                return <span key={index}>(<i>{part.slice(1, -1)}</i>)</span>;
            }
            return part;
        });
    };

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
                            maxRow={pharmacologicalPlants.length}
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
                                    {allFields.map((field, index) => (
                                        <th
                                            key={field.key}
                                            className={`px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 ${index === allFields.length - 1 ? '' : 'border-r border-black-400'}`}
                                        >
                                            {field.label}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {records.map((pharmacologicalPlant, i) => (
                                    <tr key={i} className="hover:bg-black-50 border-b border-black-200  ">
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300 font-medium bg-gray-50  ">{firstIndex + i + 1}</td>
                                        {allFields.map((field, index) => (
                                            <td
                                                key={field.key}
                                                className={`px-4 py-3 text-sm text-gray-900 ${index === allFields.length - 1 ? '' : 'border-r border-black-300'}`}
                                            >
                                                {renderItalicized(pharmacologicalPlant[field.key])}
                                            </td>
                                        ))}
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
                                    Showing {numCol} to {numColPage} of {pharmacologicalPlants.length} records
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
                                maxRow={pharmacologicalPlants.length}
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
                                    {allFields.map((field, index) => (
                                        <th
                                            key={field.key}
                                            className={`px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 ${index === allFields.length - 1 ? '' : 'border-r border-black-400'}`}
                                        >
                                            {field.label}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {records.map((pharmacologicalPlant, i) => (
                                    <tr key={i} className="hover:bg-black-50 border-b border-black-200  ">
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300 font-medium bg-gray-50  ">{firstIndex + i + 1}</td>
                                        {allFields.map((field, index) => (
                                            <td
                                                key={field.key}
                                                className={`px-6 py-4 text-sm text-gray-900 ${index === allFields.length - 1 ? '' : 'border-r border-black-300'}`}
                                            >
                                                {renderItalicized(pharmacologicalPlant[field.key])}
                                            </td>
                                        ))}
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
                                    Showing <span className="text-black-600 font-bold">{numCol}</span> to <span className="text-black-600 font-bold">{numColPage}</span> of <span className="text-black-600 font-bold">{pharmacologicalPlants.length}</span> records
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
