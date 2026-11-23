import CitationPage from "../../components/CitationPage";


const citations = [
  {
    style: "APA",
    text: 'Sharma, S., Choudhir, G., Islam, A., & Kumar, S. (2025). CMDB: a comprehensive public database of secondary metabolites from cereals. South African Journal of Botany, 185, 98-105',
    displayText: <>Sharma, S., Choudhir, G., Islam, A., & Kumar, S. (2025). CMDB: a comprehensive public database of secondary metabolites from cereals.<i> South African Journal of Botany</i>, 185, 98-105.</>,
  },
  {
    style: "MLA",
    text: 'Sharma, Sakshi, et al. "CMDB: a comprehensive public database of secondary metabolites from cereals." South African Journal of Botany 185 (2025): 98-105.',
    displayText: <>Sharma, Sakshi, et al. "CMDB: a comprehensive public database of secondary metabolites from cereals." <i> South African Journal of Botany</i> 185 (2025): 98-105.</>,
  },
  {
    style: "Chicago",
    text: 'Sharma, Sakshi, Gourav Choudhir, Asimul Islam, and Sushil Kumar. "CMDB: a comprehensive public database of secondary metabolites from cereals." South African Journal of Botany 185 (2025): 98-105.',
    displayText: <>Sharma, Sakshi, Gourav Choudhir, Asimul Islam, and Sushil Kumar. "CMDB: a comprehensive public database of secondary metabolites from cereals." <i> South African Journal of Botany</i> 185 (2025): 98-105.</>,
  },
  {
    style: "Harvard",
    text: "Sharma, S., Choudhir, G., Islam, A. and Kumar, S., 2025. CMDB: a comprehensive public database of secondary metabolites from cereals. South African Journal of Botany, 185, pp.98-105.",
    displayText: <>Sharma, S., Choudhir, G., Islam, A. and Kumar, S., 2025. CMDB: a comprehensive public database of secondary metabolites from cereals. <i> South African Journal of Botany</i>, 185, pp.98-105.</>,
  },
  {
    style: "Vancouver",
    text: "Sharma S, Choudhir G, Islam A, Kumar S. CMDB: a comprehensive public database of secondary metabolites from cereals. South African Journal of Botany. 2025 Oct 1;185:98-105.",
    // displayText: <>Sharma S, Choudhir G, Islam A, Kumar S. CMDB: a comprehensive public database of secondary metabolites from cereals. <i> South African Journal of Botany</i>, 2025 Oct 1;185:98-105.</>,
  },
];

export default function CiteThisAsCmdb() {
  return (
    <CitationPage
      shortName="CMDB"
      databaseName="Cereals Metabolite Database"
      modulePath="/Cereals/about"
      moduleLabel="CMDB"
      paperTitle="CMDB: a comprehensive public database of secondary metabolites from cereals"
      paperLink="https://doi.org/10.1016/j.sajb.2025.07.031"
      description="CMDB citation styles are listed below in a responsive format for easy reading and quick copy access. This page now follows the same polished layout pattern across mobile and desktop views."
      citations={citations}
      theme="amber"
    />
  );
}
