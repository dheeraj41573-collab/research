import PharmacologicalBiological from "./PharmacologicalBiological";
import PharmacologicalPlant from "./PharmacologicalPlant";
import PharmacologicalCereal from "./PharmacologicalCereals";

export default function PharmacologicalPost() {
  return (
    <>
      {/* Mobile and Tablet Layout */}
      <div className="lg:hidden pt-32 px-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Biological activities of ADME-qualified phytometaboites from cereals</h1>
        </div>
        <PharmacologicalBiological />

        <div className="mt-8 text-center">
          <h1 className="text-2xl font-bold">Plant-wise distribution of cereal phytometabolites and their associated biological activities</h1>
        </div>
        <PharmacologicalPlant />

        <div className="mt-8 text-center">
          <h1 className="text-2xl font-bold">Dominant biological activities of phytometabolites in different cereals</h1>
        </div>
        <PharmacologicalCereal />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="pt-32 text-center">
          <h1 className="text-4xl font-bold">Biological activities of ADME-qualified phytometaboites from cereals</h1>
        </div>
        <PharmacologicalBiological />

        <div className="mt-10 text-center">
          <h1 className="text-4xl font-bold">Plant-wise distribution of cereal phytometabolites and their associated biological activities</h1>
        </div>
        <PharmacologicalPlant />

        <div className="mt-10 text-center">
          <h1 className="text-4xl font-bold">Dominant biological activities of phytometabolites in different cereals</h1>
        </div>
        <PharmacologicalCereal />
      </div>
    </>
  );
}
