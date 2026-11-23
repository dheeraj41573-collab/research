import PharmacologicalBiologicalTrichoderma from "./PharmacologicalBiologicalTrichoderma";
import PharmacologicalPlantTrichoderma from "./PharmacologicalPlantTrichoderma";
import PharmacologicalBiologicalCountingTrichoderma from "./PharmacologicalBiologicalCountingTrichoderma";

export default function PharmacologicalPostSMDB() {
  return (
    <>
      {/* Mobile and Tablet Layout */}
      <div className="lg:hidden pt-32 px-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Biological activities of ADME- qualified secondary metabolites from <i>Trichoderma</i></h1>
        </div>
        <PharmacologicalBiologicalTrichoderma />

        <div className="mt-8 text-center">
          <h1 className="text-2xl font-bold">Species-wise distribution of secondary metabolites of <i>Trichoderma</i> and their associated biological activities</h1>
        </div>
        <PharmacologicalPlantTrichoderma />

        <div className="mt-8 text-center">
          <h1 className="text-2xl font-bold">Dominant biological activities of secondary metabolites in different species of <i>Trichoderma</i></h1>
        </div>
        <PharmacologicalBiologicalCountingTrichoderma />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="pt-32 text-center">
          <h1 className="text-4xl font-bold">Biological activities of ADME- qualified secondary metabolites from <i>Trichoderma</i></h1>
        </div>
        <PharmacologicalBiologicalTrichoderma />

        <div className="mt-10 text-center">
          <h1 className="text-4xl font-bold">Species-wise distribution of secondary metabolites of <i>Trichoderma</i> and their associated biological activities</h1>
        </div>
        <PharmacologicalPlantTrichoderma />

        <div className="mt-10 text-center">
          <h1 className="text-4xl font-bold">Dominant biological activities of secondary metabolites in different species of <i>Trichoderma</i></h1>
        </div>
        <PharmacologicalBiologicalCountingTrichoderma />
      </div>
    </>
  );
}
