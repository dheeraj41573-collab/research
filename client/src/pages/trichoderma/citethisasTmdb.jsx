import CitationPage from "../../components/CitationPage";

const citations = [
  {
    style: "APA",
    text: "Tyagi, T., Choudhir, G., Sharma, S., Himanshu., Kashyap, K., Islam, A., & Kumar, S. (2026). TMDB: An Integrated Repository of Trichoderma Secondary Metabolites and Their In Silico Screening Against Pseudomonas aeruginosa LasR. In Silico Research in Biomedicine, 100641.",
    displayText: <>Tyagi, T., Choudhir, G., Sharma, S., Himanshu., Kashyap, K., Islam, A., &amp; Kumar, S. (2026). TMDB: An Integrated Repository of Trichoderma Secondary Metabolites and Their In Silico Screening Against Pseudomonas aeruginosa LasR. <i>In Silico Research in Biomedicine</i>, 100641.</>,
  },
  {
    style: "MLA",
    text: 'Tyagi, Tanu, et al. "TMDB: An Integrated Repository of Trichoderma Secondary Metabolites and Their In Silico Screening Against Pseudomonas aeruginosa LasR." In Silico Research in Biomedicine (2026): 100641.',
    displayText: <>Tyagi, Tanu, et al. "TMDB: An Integrated Repository of Trichoderma Secondary Metabolites and Their In Silico Screening Against Pseudomonas aeruginosa LasR." <i>In Silico Research in Biomedicine</i> (2026): 100641.</>,
  },
  {
    style: "Chicago",
    text: 'Tyagi, Tanu, Gourav Choudhir, Sakshi Sharma, Himanshu, Karishma Kashyap, Asimul Islam, and Sushil Kumar. "TMDB: An Integrated Repository of Trichoderma Secondary Metabolites and Their In Silico Screening Against Pseudomonas aeruginosa LasR." In Silico Research in Biomedicine (2026): 100641.',
    displayText: <>Tyagi, Tanu, Gourav Choudhir, Sakshi Sharma, Himanshu, Karishma Kashyap, Asimul Islam, and Sushil Kumar. "TMDB: An Integrated Repository of Trichoderma Secondary Metabolites and Their In Silico Screening Against Pseudomonas aeruginosa LasR." <i>In Silico Research in Biomedicine</i> (2026): 100641.</>,
  },
  {
    style: "Harvard",
    text: "Tyagi, T., Choudhir, G., Sharma, S., Kashyap, K., Himanshu., Islam, A. and Kumar, S., 2026. TMDB: An Integrated Repository of Trichoderma Secondary Metabolites and Their In Silico Screening Against Pseudomonas aeruginosa LasR. In Silico Research in Biomedicine, p.100641.",
    displayText: <>Tyagi, T., Choudhir, G., Sharma, S., Kashyap, K., Himanshu., Islam, A. and Kumar, S., 2026. TMDB: An Integrated Repository of Trichoderma Secondary Metabolites and Their In Silico Screening Against Pseudomonas aeruginosa LasR. <i>In Silico Research in Biomedicine</i>, p.100641.</>,
  },
  {
    style: "Vancouver",
    text: "Tyagi T, Choudhir G, Sharma S, Himanshu, Kashyap K, Islam A, Kumar S. TMDB: An Integrated Repository of Trichoderma Secondary Metabolites and Their In Silico Screening Against Pseudomonas aeruginosa LasR. In Silico Research in Biomedicine. 2026 Sep 22:100641.",
  },
];

export default function CiteThisAsTmdb() {
  return (
    <CitationPage
      shortName="TMDB"
      databaseName="Trichoderma Metabolite Database"
      modulePath="/trichoderma/about"
      moduleLabel="TMDB"
      paperTitle="TMDB: An Integrated Repository of Trichoderma Secondary Metabolites and Their In Silico Screening Against Pseudomonas aeruginosa LasR"
      paperLink="https://doi.org/10.1016/j.insi.2026.100641"
      description="TMDB citation styles are presented below in a clean, responsive layout for quick reference and easy one-click copy access across all devices."
      citations={citations}
      theme="cyan"
    />
  );
}
