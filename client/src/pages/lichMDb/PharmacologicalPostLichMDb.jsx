import PharmacologicalBiologicalPostLichMDb from "./PharmacologyBiologicalPostLichMDb";
import PharmacologicalPlantPostLichMDb from "./PharmacologyPlantPostLichMDb";
import PharmacologicalCerealPostLichMDb from "./PharmacologyCerealPostLichMDb";
import PharmacologicalTableLichMDb from "./PharmacologicalTableLichMDb";
// import BiologicalActivityStatisticsPostLichMDb from "./BiologicalActivityStatisticsPostLichMDb";

export default function PharmacologicalPostSMDB() {
  return (
    <>
      {/* Mobile and Tablet Layout */}
      <div className="lg:hidden pt-32 px-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Biological activities of ADME-qualified metabolites from lichens</h1>
        </div>
        <PharmacologicalBiologicalPostLichMDb />

        <div className="mt-8 text-center">
          <h1 className="text-2xl font-bold">Plant-wise distribution of lichen metabolites and their associated biological activities</h1>
        </div>
        <PharmacologicalPlantPostLichMDb />

        <div className="mt-8 text-center">
          <h1 className="text-2xl font-bold">Dominant biological activities of metabolites in different lichens</h1>
        </div>
        <PharmacologicalCerealPostLichMDb />

        <div className="mt-8 text-center">
          <h1 className="text-2xl font-bold">Hierarchical Classification and Distribution of Lichen Secondary Metabolites</h1>
        </div>
        <PharmacologicalTableLichMDb />

        </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="pt-32 text-center">
          <h1 className="text-4xl font-bold">Biological activities of ADME-qualified metabolites from lichens</h1>
        </div>
        <PharmacologicalBiologicalPostLichMDb />

        <div className="mt-10 text-center">
          <h1 className="text-4xl font-bold">Plant-wise distribution of lichen metabolites and their associated biological activities</h1>
        </div>
        <PharmacologicalPlantPostLichMDb />

        <div className="mt-10 text-center">
          <h1 className="text-4xl font-bold">Dominant biological activities of metabolites in different lichens</h1>
        </div>
        <PharmacologicalCerealPostLichMDb />

        <div className="mt-10 text-center">
          <h1 className="text-4xl font-bold">Hierarchical Classification and Distribution of Lichen Secondary Metabolites</h1>
        </div>
        <PharmacologicalTableLichMDb />
      </div>
        
    </>
  );
}
