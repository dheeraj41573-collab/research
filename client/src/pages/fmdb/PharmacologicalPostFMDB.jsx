import PharmacologyBiologicalFMDB from "./PharmacologyBiologicalFMDB";
import PharmacologyPlantFMDB from "./PharmacologyPlantFMDB";
import PharmacologyCerealFMDB from "./PharmacologyCerealFMDB";
export default function PharmacologicalPostFMDB() {
  return (
    <>
          {/* Mobile and Tablet Layout */}
          <div className="lg:hidden pt-32 px-4">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold">Biological activities of ADME-qualified phytometaboites from fruits</h1>
            </div>
            <PharmacologyBiologicalFMDB />
    
            <div className="mt-8 text-center">
              <h1 className="text-2xl font-bold">Plant-wise distribution of fruits phytometabolites and their associated biological activities</h1>
            </div>
            <PharmacologyPlantFMDB />
    
            <div className="mt-8 text-center">
              <h1 className="text-2xl font-bold">Dominant biological activities of phytometabolites in different fruits</h1>
            </div>
            <PharmacologyCerealFMDB />
          </div>
    
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="pt-32 text-center">
              <h1 className="text-4xl font-bold">Biological activities of ADME-qualified phytometaboites from fruits</h1>
            </div>
            <PharmacologyBiologicalFMDB />
    
            <div className="mt-10 text-center">
              <h1 className="text-4xl font-bold">Plant-wise distribution of fruits phytometabolites and their associated biological activities</h1>
            </div>
            <PharmacologyPlantFMDB />
    
            <div className="mt-10 text-center">
              <h1 className="text-4xl font-bold">Dominant biological activities of phytometabolites in different fruits</h1>
            </div>
            <PharmacologyCerealFMDB />
          </div>
        </>
  );
}
