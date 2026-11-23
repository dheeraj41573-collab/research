import PharmacologyBiologicalGMDB from "./PharmacologyBiologicalGMDB";
import PharmacologyPlantGMDB from "./PharmacologyPlantGMDB";
import PharmacologyCerealGMDB from "./PharmacologyCerealGMDB";
export default function PharmacologicalPostGMDB() {
  return (
    <>
          {/* Mobile and Tablet Layout */}
          <div className="lg:hidden pt-32 px-4">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold">Biological Activities of ADME-Qualified Secondary Metabolites from Gymnosperms</h1>
            </div>
            <PharmacologyBiologicalGMDB />
    
            <div className="mt-8 text-center">
              <h1 className="text-2xl font-bold">Plant-Wise Distribution of Secondary Metabolites of Gymnosperms and Their Associated Biological Activities</h1>
            </div>
            <PharmacologyPlantGMDB />
    
            <div className="mt-8 text-center">
              <h1 className="text-2xl font-bold">Dominant Biological Activities of Secondary Metabolites in Different Species of Gymnosperms</h1>
            </div>
            <PharmacologyCerealGMDB />
          </div>
    
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="pt-32 text-center">
              <h1 className="text-4xl font-bold">Biological Activities of ADME-Qualified Secondary Metabolites from Gymnosperms</h1>
            </div>
            <PharmacologyBiologicalGMDB />
    
            <div className="mt-10 text-center">
              <h1 className="text-4xl font-bold">Plant-Wise Distribution of Secondary Metabolites of Gymnosperms and Their Associated Biological Activities</h1>
            </div>
            <PharmacologyPlantGMDB />
    
            <div className="mt-10 text-center">
              <h1 className="text-4xl font-bold">Dominant Biological Activities of Secondary Metabolites in Different Species of Gymnosperms</h1>
            </div>
            <PharmacologyCerealGMDB />
          </div>
        </>
  );
}
