
const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl mt-16 md:text-5xl font-bold text-gray-800 mb-4">
            About
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Current Scope Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-green-500">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-green-100 text-green-600 p-2 rounded-lg mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            Current Scope
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
          Currently, GMDB hosts the Gymnosperms Metabolite Database (GMDB), a curated repository that offers comprehensive information on secondary metabolites produced by Gymnosperms. In addition to providing structural and chemical information, the Gymnosperms Metabolite Database (GMDB) also includes ADME (Absorption, Distribution, Metabolism, and Excretion) profiles and their associated pharmacological activities. This information is vital for researchers as it helps them connect specific compounds with their potential therapeutic activities.
          </p>
        </div>

        {/* Future Expansion Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-blue-500">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            Future Expansion
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
          GMDB platform is a constantly evolving resource with a clear vision to expand its library of secondary metabolites and broaden its scope to include diverse species. This ongoing growth aims to strengthen GMDB role as a key knowledge hub for Gymnosperms research, making it easier for scientists to explore natural compounds with pharmacological promise.
          </p>
        </div>

        {/* Significance for Research Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-purple-500">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-purple-100 text-purple-600 p-2 rounded-lg mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </span>
            Significance for Research
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
          The GMDB platform is being built as a single, comprehensive resource. It aims to provide researchers from various disciplines with structured data on secondary metabolites. Its significance spans across multiple fields.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center">
                <span className="bg-green-200 p-1 rounded mr-3">
                  🍎
                </span>
                Food Science
              </h3>
              <p className="text-green-700">
              Enabling a deeper understanding of the health benefits, safety, and potential interactions of compounds derived from food.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center">
                <span className="bg-blue-200 p-1 rounded mr-3">
                  🔬
                </span>
                Natural Product Discovery
              </h3>
              <p className="text-blue-700">
              Opening avenues for the discovery of bioactive compounds with therapeutic and commercial potential.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits for Researchers Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-orange-500">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-orange-100 text-orange-600 p-2 rounded-lg mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </span>
            Benefits for Researchers
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="bg-green-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-green-800 mb-3">Digitized Access</h3>
                <p className="text-green-700 text-sm">
                GMDB provides fast, streamlined access to comprehensive data, enabling researchers to efficiently explore specific metabolites and their associated biological properties.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="bg-blue-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-blue-800 mb-3">Standardized Data</h3>
                <p className="text-blue-700 text-sm">
                 All data is presented in standardized formats, ensuring high quality and facilitating seamless comparison across different Gymnosperms species.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="bg-purple-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-purple-800 mb-3">Continuous Updates</h3>
                <p className="text-purple-700 text-sm">
                The platform is continuously updated, ensuring researchers have access to the latest findings and discoveries on Gymnosperms secondary metabolites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
