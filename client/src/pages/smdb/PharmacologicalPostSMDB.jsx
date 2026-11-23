import PharmacologicalBiologicalSMDB from "./PharmacologicalBiologicalSMDB";
import PharmacologicalPlantSMDB from "./PharmacologicalPlantSMDB";
import PharmacologicalCerealSMDB from "./PharmacologicalCerealsSMDB";

export default function PharmacologicalPostSMDB() {
  return (
    <>
      {/* Mobile and Tablet Layout */}
      <div className="lg:hidden pt-32 px-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Biological activities of ADME-qualified phytometaboites from spice</h1>
        </div>
        <PharmacologicalBiologicalSMDB />

        <div className="mt-8 text-center">
          <h1 className="text-2xl font-bold">Plant-wise distribution of spice phytometabolites and their associated biological activities</h1>
        </div>
        <PharmacologicalPlantSMDB />

        <div className="mt-8 text-center">
          <h1 className="text-2xl font-bold">Dominant biological activities of phytometabolites in different spice</h1>
        </div>
        <PharmacologicalCerealSMDB />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="pt-32 text-center">
          <h1 className="text-4xl font-bold">Biological activities of ADME-qualified phytometaboites from spice</h1>
        </div>
        <PharmacologicalBiologicalSMDB />

        <div className="mt-10 text-center">
          <h1 className="text-4xl font-bold">Plant-wise distribution of spice phytometabolites and their associated biological activities</h1>
        </div>
        <PharmacologicalPlantSMDB />

        <div className="mt-10 text-center">
          <h1 className="text-4xl font-bold">Dominant biological activities of phytometabolites in different spice</h1>
        </div>
        <PharmacologicalCerealSMDB />
      </div>
    </>
  );
}
