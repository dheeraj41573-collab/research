import CitationPage from "../../components/CitationPage";

const citations = [
  {
    style: "APA",
    text: "Himanshu., Choudhir, G., Sharma, S., Tyagi, T., Islam, A., & Kumar, S. (2026). LMDB: A Secondary Metabolites Database Exploring Chemical Diversity and Therapeutic Potentials of Lichens. In Silico Research in Biomedicine, 100281. ",
    displayText: <>Himanshu., Choudhir, G., Sharma, S., Tyagi, T., Islam, A., & Kumar, S. (2026). LMDB: A Secondary Metabolites Database Exploring Chemical Diversity and Therapeutic Potentials of Lichens. In <i> Silico Research in Biomedicine</i>, 2026, 100281.</>,
  },
  {
    style: "MLA",
    text: 'Himanshu, et al. "LMDB: A Secondary Metabolites Database Exploring Chemical Diversity and Therapeutic Potentials of Lichens." In Silico Research in Biomedicine (2026): 100281.',
    displayText: <>Himanshu, et al. "LMDB: A Secondary Metabolites Database Exploring Chemical Diversity and Therapeutic Potentials of Lichens." In <i> Silico Research in Biomedicine</i> 2026 (2026): 100281.</>,
  },
  {
    style: "Chicago",
    text: ' Himanshu, Gourav Choudhir, Sakshi Sharma, Tanu Tyagi, Asimul Islam, and Sushil Kumar. "LMDB: A Secondary Metabolites Database Exploring Chemical Diversity and Therapeutic Potentials of Lichens." In Silico Research in Biomedicine (2026): 100281.',
    displayText: <>Himanshu, Gourav Choudhir, Sakshi Sharma, Tanu Tyagi, Asimul Islam, and Sushil Kumar. "LMDB: A Secondary Metabolites Database Exploring Chemical Diversity and Therapeutic Potentials of Lichens." In <i> Silico Research in Biomedicine</i> 2026 (2026): 100281.</>,
  },
  {
    style: "Harvard",
    text: "Himanshu., Choudhir, G., Sharma, S., Tyagi, T., Islam, A. and Kumar, S., 2026. LMDB: A Secondary Metabolites Database Exploring Chemical Diversity and Therapeutic Potentials of Lichens. In Silico Research in Biomedicine, p.100281.",
    displayText: <>Himanshu., Choudhir, G., Sharma, S., Tyagi, T., Islam, A. and Kumar, S., 2026. LMDB: A Secondary Metabolites Database Exploring Chemical Diversity and Therapeutic Potentials of Lichens. In <i> Silico Research in Biomedicine</i>, 2026, 100281.</>,
  },
  {
    style: "Vancouver",
    text: " Himanshu, Choudhir G, Sharma S, Tyagi T, Islam A, Kumar S. LMDB: A Secondary Metabolites Database Exploring Chemical Diversity and Therapeutic Potentials of Lichens. In Silico Research in Biomedicine. 2026 Mar 9:100281.",
    // displayText: <>Himanshu, Choudhir G, Sharma S, Tyagi T, Islam A, Kumar S. LMDB: A Secondary Metabolites Database Exploring Chemical Diversity and Therapeutic Potentials of Lichens. In <i> Silico Research in Biomedicine</i>. 2026 Mar 9:100281.</>,
  },
];

export default function CiteThisAsLmdb() {
  return (
    <CitationPage
      shortName="LMDB"
      databaseName="Lichen Metabolites Database"
      modulePath="/lichmdb/about"
      moduleLabel="LMDB"
      paperTitle="LMDB: A Secondary Metabolites Database Exploring Chemical Diversity and Therapeutic Potentials of Lichens"
      paperLink="https://doi.org/10.1016/j.insi.2026.100281"
      description="Use any of the formatted references below while citing LMDB. The layout is fully responsive, so the citation cards stay readable and easy to copy on mobile, tablet, and desktop."
      citations={citations}
      theme="violet"
    />
  );
}
