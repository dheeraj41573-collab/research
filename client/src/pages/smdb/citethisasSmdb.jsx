import CitationPage from "../../components/CitationPage";

const citations = [
  {
    style: "APA",
    text: "Sharma, S., Choudhir, G., Tyagi, T., Himanshu., Kashyap, K., Islam, A., & Kumar, S. (2026). SMDB: Investigating Secondary Metabolites in Common Spices through Bioactive Metabolite Profiling. In Silico Research in Biomedicine, 100360.",
    displayText: <>Sharma, S., Choudhir, G., Tyagi, T., Himanshu., Kashyap, K., Islam, A., & Kumar, S. (2026). SMDB: Investigating Secondary Metabolites in Common Spices through Bioactive Metabolite Profiling. <i>In Silico Research in Biomedicine, </i>100360.</>,
  },
  {
    style: "MLA",
    text: 'Sharma, Sakshi, et al. "SMDB: Investigating Secondary Metabolites in Common Spices through Bioactive Metabolite Profiling." In Silico Research in Biomedicine (2026): 100360.',
    displayText: <>Sharma, Sakshi, et al. "SMDB: Investigating Secondary Metabolites in Common Spices through Bioactive Metabolite Profiling." <i>In Silico Research in Biomedicine</i> (2026): 100360.</>,
  },
  {
    style: "Chicago",
    text: 'Sharma, Sakshi, Gourav Choudhir, Tanu Tyagi, Himanshu, Karishma Kashyap, Asimul Islam, and Sushil Kumar. "SMDB: Investigating Secondary Metabolites in Common Spices through Bioactive Metabolite Profiling." In Silico Research in Biomedicine (2026): 100360.',
    displayText: <>Sharma, Sakshi, Gourav Choudhir, Tanu Tyagi, Himanshu, Karishma Kashyap, Asimul Islam, and Sushil Kumar. "SMDB: Investigating Secondary Metabolites in Common Spices through Bioactive Metabolite Profiling." <i>In Silico Research in Biomedicine</i> (2026): 100360.</>,
  },
  {
    style: "Harvard",
    text: "Sharma, S., Choudhir, G., Tyagi, T., Himanshu., Kashyap, K., Islam, A. and Kumar, S., 2026. SMDB: Investigating Secondary Metabolites in Common Spices through Bioactive Metabolite Profiling. In Silico Research in Biomedicine, p.100360.",
    displayText: <>Sharma, S., Choudhir, G., Tyagi, T., Himanshu., Kashyap, K., Islam, A. and Kumar, S., 2026. SMDB: Investigating Secondary Metabolites in Common Spices through Bioactive Metabolite Profiling. <i>In Silico Research in Biomedicine</i>, p.100360.</>,
  },
  {
    style: "Vancouver",
    text: "Sharma S, Choudhir G, Tyagi T, Himanshu, Kashyap K, Islam A, Kumar S. SMDB: Investigating Secondary Metabolites in Common Spices through Bioactive Metabolite Profiling. In Silico Research in Biomedicine. 2026 May 5:100360.",
    // displayText: <>Sharma S, Choudhir G, Tyagi T, Himanshu, Kashyap K, Islam A, Kumar S. SMDB: Investigating Secondary Metabolites in Common Spices through Bioactive Metabolite Profiling. <i>In Silico Research in Biomedicine</i>. 2026 May 5:100360.</>,
  },
];

export default function CiteThisAsSmdb() {
  return (
    <CitationPage
      shortName="SMDB"
      databaseName="Spices Metabolite Database"
      modulePath="/smdb/about"
      moduleLabel="SMDB"
      paperTitle="SMDB: Investigating Secondary Metabolites in Common Spices through Bioactive Metabolite Profiling"
      paperLink="https://doi.org/10.1016/j.insi.2026.100360"
      description="These references are ready for direct use while citing SMDB. Each citation style is shown in a separate responsive card so it remains clean and readable across all screen sizes."
      citations={citations}
      theme="emerald"
    />
  );
}
