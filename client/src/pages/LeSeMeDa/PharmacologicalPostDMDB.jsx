import PharmacologyBiologicalDMDB from "./PharmacologyBiologicalDMDB";
import PharmacologyPlantDMDB from "./PharmacologyPlantDMDB";
import PharmacologyCerealDMDB from "./PharmacologyCerealDMDB";
export default function PharmacologicalPostDMDB() {
  return (
    <>
          {/* Mobile and Tablet Layout */}
          <div className="lg:hidden pt-32 px-4">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold">Biological activities of ADME-qualified phytometaboites from Legumes Secondary</h1>
            </div>
            <PharmacologyBiologicalDMDB />
    
            <div className="mt-8 text-center">
              <h1 className="text-2xl font-bold">Plant-wise distribution of Legumes Secondary phytometabolites and their associated biological activities</h1>
            </div>
            <PharmacologyPlantDMDB />
    
            <div className="mt-8 text-center">
              <h1 className="text-2xl font-bold">Dominant biological activities of phytometabolites in different Legumes Secondary</h1>
            </div>
            <PharmacologyCerealDMDB />
          </div>
    
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="pt-32 text-center">
              <h1 className="text-4xl font-bold">Biological activities of ADME-qualified secondary metabolites from Legumes Secondary</h1>
            </div>
            <PharmacologyBiologicalDMDB />
    
            <div className="mt-10 text-center">
              <h1 className="text-4xl font-bold">Plant-wise distribution of Legumes Secondary secondary metabolites and their associated biological activities</h1>
            </div>
            <PharmacologyPlantDMDB />
    
            <div className="mt-10 text-center">
              <h1 className="text-4xl font-bold">Dominant biological activities of secondary metabolites in different Legumes Secondary</h1>
            </div>
            <PharmacologyCerealDMDB />
          </div>
        </>
  );
}
