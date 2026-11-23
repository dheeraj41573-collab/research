import BannerProduct from "../components/BannerProduct";
import ApprovedFeedbackList from "../components/ApprovedFeedbackList";
import FeedbackForm from "../components/FeedbackForm";

export default function Home() {
  return (
    <div className="home__component">
      <div className="pt-20 lg:pt-[88px] pb-4 ">
        <BannerProduct />
        <div className="mt-6 md:mt-8 lg:mt-10 px-2 md:px-4 xl:ml-10 xl:mr-10">
          <div className='flex flex-col gap-3 text-justify text-base md:text-lg text-gray-800'>
            <p >
              <span className="text-xl md:text-2xl text-gray-1000 font-semibold">The Food Drugs & Pharmacology (FDP)</span> is a curated digital platform
              designed to provide researchers with comprehensive information on secondary
              metabolites found in plants. It compiles data from various reliable sources,
              including research articles, established databases, and other trustworthy
              resources.
            </p>
          </div>
        </div>
        <div className="mt-6 md:mt-8 lg:mt-10 px-2 md:px-6 xl:ml-10 xl:mr-10 border-t-4 border-indigo-200">
          <div >
            <h1 className="text-2xl md:text-3xl font-semibold font">ABOUT FDP</h1>
          </div>
          <div className="md:ml-4 xl:ml-6" >
            <h3 className="text-lg md:text-xl font-semibold font">Current Scope</h3>
            <div className='flex flex-col gap-3 text-base md:text-lg text-justify md:ml-2 xl:ml-4 px-2 text-gray-800'>
              <p>The Food Drugs & Pharmacology (FDP) platform is a comprehensive online resource dedicated to secondary metabolite data. It currently hosts six specialized databases:</p>
              <ul className="list-disc ml-2 space-y-2">
                <li><span className="text-lg md:text-xl font-semibold text-gray-600">CMDB (Cereals Metabolite Database)</span></li>
                <li><span className="text-lg md:text-xl font-semibold text-gray-600">SMDB (Spices Metabolite Database)</span></li>
                <li><span className="text-lg md:text-xl font-semibold text-gray-600">TMDB (Trichoderma Metabolite Database)</span></li>
                <li><span className="text-lg md:text-xl font-semibold text-gray-600">LMDB (Lichen Metabolite Database)</span></li>
                <li><span className="text-lg md:text-xl font-semibold text-gray-600">GMDB (Gymnosperms Metabolite Database)</span></li>
                 <li><span className="text-lg md:text-xl font-semibold text-gray-600">FMDB (Fruits Metabolite Database)</span></li>
                  {/* <li><span className="text-lg md:text-xl font-semibold text-gray-600">CMDB (Common Legumes Secondary metabolites Database)</span></li> */}
              </ul>
              <p>Each of these databases provides detailed and structured information on a wide range of secondary metabolites. In addition to this, databases include ADME (Absorption, Distribution, Metabolism, and Excretion) profiles, compound classifications, and associated pharmacological activities. This integrated data is particularly valuable for researchers, enabling them to explore the therapeutic potential of specific compounds and make informed connections between chemical structures and biological functions.</p>
            </div>
          </div>
          <div className="md:ml-4 xl:ml-6" >
            <h3 className="text-lg md:text-xl font-semibold font">Future Expansion</h3>
            <div className='flex flex-col gap-3 md:ml-2 xl:ml-4 px-2 text-justify text-base md:text-lg text-gray-800'>
              <p>FDP platform is a constantly evolving resource with a clear vision to expand its library of secondary metabolites and broaden its scope to include diverse species. This ongoing growth aims to strengthen FDP's role as a key knowledge hub for secondary metabolites, making it easier for scientists to explore natural compounds with pharmacological promise.</p>
            </div>
          </div>
          <div className="md:ml-4 xl:ml-6" >
            <h3 className="text-lg md:text-xl font-semibold font">Significance for Research</h3>
            <div className='flex flex-col gap-3 md:ml-2 xl:ml-4 px-2 text-justify text-base md:text-lg text-gray-800'>
              <p>The FDP platform is being built as a single, comprehensive resource. It aims to provide researchers from various disciplines with structured data on secondary metabolites. Its significance spans across multiple fields.</p>
              <div className="ml-4 space-y-3">
                <p>
                  <span className="text-lg md:text-xl font-semibold text-gray-600">Food Science:</span> FDP enables a deeper understanding of the health benefits, safety, and potential interactions of compounds derived from food.
                </p>
                <p>
                  <span className="text-lg md:text-xl font-semibold text-gray-600">Natural Product Discovery:</span> FDP opens avenues for the discovery of bioactive compounds with therapeutic and commercial potential.
                </p>
              </div>
            </div>
          </div>
          <div className="md:ml-4 xl:ml-6" >
            <h3 className="text-lg md:text-xl font-semibold font">Benefits for Researchers</h3>
            <div className='flex flex-col gap-3 text-justify md:ml-2 xl:ml-4 px-2 text-base md:text-lg text-gray-800'>
              <p>
                <span className="text-lg md:text-xl font-semibold text-gray-600">Digitized Access:</span> FDP provides fast, streamlined access to comprehensive data, enabling researchers to efficiently explore specific metabolites and their associated biological properties.
              </p>
              <p>
                <span className="text-lg md:text-xl font-semibold text-gray-600">Standardized Data:</span> All data is presented in standardized formats, ensuring high quality and facilitating seamless comparison across different Lichen species.
              </p>
              <p>
                <span className="text-lg md:text-xl font-semibold text-gray-600">Continuous Updates:</span> The platform is continuously updated, ensuring researchers have access to the latest findings and discoveries on secondary metabolites.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-8 lg:mt-10 px-2 md:px-6 xl:ml-10 xl:mr-10 border-t-4 border-indigo-200">
          <div >
            <h1 className="text-2xl md:text-3xl font-semibold font">DISCLAIMER</h1>
          </div>
          <div className='flex flex-col gap-3 text-justify md:ml-2 xl:ml-4 px-2 text-base md:text-lg text-gray-800'>
            <p>The main goal of this database is to compile information from scientific literature on cereals.
              It should not be used for any self-diagnosis or medical treatment.
            </p>
            <p>This data is intended for research purposes only and should not be used for self-diagnosis or medical treatment.
              Consulting a qualified healthcare professional is essential for any medical conditions.
            </p>
          </div>
        </div>

        {/* Achievement Section */}
        <div className="mt-6 md:mt-8 lg:mt-10 px-2 md:px-6 xl:ml-10 xl:mr-10 border-t-4 border-indigo-200">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold font">ACHIEVEMENT</h1>
          </div>
          <div className="md:ml-4 xl:ml-6">
            <div className='flex flex-col gap-6 text-justify md:ml-2 xl:ml-4 px-2 text-base md:text-lg text-gray-800'>
              <div className="achievement-paper">
                <p className="leading-relaxed">
                  1. Sakshi Sharma, Gourav Choudhir, Asimul Islam, Sushil Kumar (2025).
                  <span className="achievement-title"> CMDB: a comprehensive public database of secondary metabolites from cereals.</span>
                  <span className="achievement-journal"> South African Journal of Botany</span>, 185:98-105.
                  <br className="md:hidden"/>
                  <a
                    href="https://doi.org/10.1016/j.sajb.2025.07.031"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="achievement-doi-link"
                  >
                     https://doi.org/10.1016/j.sajb.2025.07.031
                  </a>
                </p>
              </div>
              <div className="achievement-paper">
                <p className="leading-relaxed">
                  2. Himanshu, Gourav Choudhir, Sakshi Sharma, Tanu Tyagi, Asimul Islam, Sushil Kumar (2026).
                  <span className="achievement-title"> LMDB: A Secondary Metabolites Database Exploring Chemical Diversity and Therapeutic Potentials of Lichens.</span>
                  <span className="achievement-journal"> In Silico Research in Biomedicine</span>, 2:100281.
                  <br className="md:hidden"/>
                  <a
                    href="https://doi.org/10.1016/j.insi.2026.100281"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="achievement-doi-link"
                  >
                     https://doi.org/10.1016/j.insi.2026.100281
                  </a>
                </p>
              </div>
              <div className="achievement-paper">
                <p className="leading-relaxed">
                  3. Sakshi Sharma, Gourav Choudhir, Tanu Tyagi, Himanshu, Karishma Kashyap, Asimul Islam, Sushil Kumar (2026).
                  <span className="achievement-title"> SMDB: Investigating Secondary Metabolites in Common Spices through Bioactive Metabolite Profiling.</span>
                  <span className="achievement-journal"> In Silico Research in Biomedicine</span>, 2:100360.
                  <br className="md:hidden"/>
                  <a
                    href="https://doi.org/10.1016/j.insi.2026.100360"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="achievement-doi-link"
                  >
                     https://doi.org/10.1016/j.insi.2026.100360
                  </a>
                </p>
              </div>
               <div className="achievement-paper">
                <p className="leading-relaxed">
                  4. Tanu Tyagi, Gourav Choudhir, Sakshi Sharma, Himanshu, Karishma Kashyap, Asimul Islam, Sushil Kumar (2026)..
                  <span className="achievement-title">TMDB: An Integrated Repository of Trichoderma Secondary Metabolites and Their In Silico Screening Against Pseudomonas aeruginosa LasR. </span>
                  <span className="achievement-journal"> In Silico Research in Biomedicine, </span>, 2:100641.
                  <br className="md:hidden"/>
                  <a
                    href="https://doi.org/10.1016/j.insi.2026.100641"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="achievement-doi-link"
                  >
                     https://doi.org/10.1016/j.insi.2026.100641
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="mt-6 md:mt-8 lg:mt-10 px-2 md:px-6 xl:ml-10 xl:mr-10 border-t-4 border-indigo-200">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold font">FEEDBACK</h1>
          </div>
          <div className="mt-4 md:mt-6 flex flex-col gap-6 md:gap-8">
            <ApprovedFeedbackList />
            <FeedbackForm />
          </div>
        </div>

        {/* <div className="mt-6 md:mt-8 lg:mt-10 px-2 md:px-6 xl:ml-10 xl:mr-10 border-t-4 border-indigo-200">
          <div className="rounded-2xl bg-gradient-to-r from-indigo-50 via-white to-emerald-50 p-5 md:p-8 shadow-sm">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Need a Website?
            </h1>
            <p className="mt-3 text-base md:text-lg text-gray-700 leading-relaxed">
              If you need a website for your business, institute, lab, or personal
              work, feel free to contact us. We would be happy to discuss your
              requirements and help you build your website.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <a
                href="tel:9808581928"
                className="rounded-xl border border-indigo-200 bg-white p-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                  Call
                </div>
                <div className="mt-2 text-lg font-bold text-gray-900">
                  9808581928
                </div>
              </a>

              <a
                href="mailto:refernext1@gmail.com"
                className="rounded-xl border border-emerald-200 bg-white p-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                  Email
                </div>
                <div className="mt-2 break-all text-lg font-bold text-gray-900">
                  refernext1@gmail.com
                </div>
              </a>

              <a
                href="https://wa.me/919808581928?text=Hello%2C%20I%20would%20like%20to%20build%20a%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-green-200 bg-white p-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="text-sm font-semibold uppercase tracking-wide text-green-600">
                  WhatsApp
                </div>
                <div className="mt-2 text-lg font-bold text-gray-900">
                  Chat on WhatsApp
                </div>
              </a>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  );
}
