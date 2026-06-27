const exams = [
  {
    id: 1,
    category: "university",
    name: "IBA Karachi",
    logo: "../logo_IBA_Karachi.png",
    description:
      "Full prep for IBA's aptitude test — quantitative, verbal and analytical.",
    meta: {
      questions: "3,000+ questions with explanation",
      mock_tests: "10+ mock tests and past papers",
    },
    coming_soon: false,
    available: true,
  },
  {
    id: 2,
    category: "medical",
    name: "MDCAT",
    logo: "../mdcat_logo.png",
    description:
      "Comprehensive prep for MDCAT — biology, chemistry, physics and English.",
    meta: {
      questions: "10,000+ questions with explanation",
      mock_tests: "10+ mock tests and past papers",
    },
    coming_soon: false,
    available: true,
  },
  {
    id: 5,
    category: "university",
    name: "LUMS",
    logo: "../LUMS-Logo.png",
    description:
      "Full prep for LUMS' aptitude test — quantitative, verbal and analytical.",
    coming_soon: true,
    meta: {
      questions: "Coming soon",
      mock_tests: "Coming soon",
    },
    available: false,
  },

  {
    id: 4,
    category: "university",
    name: "NED University",
    logo: "../NED_logo.png",
    description:
      "Full prep for NED's aptitude test — quantitative, verbal and analytical.",
    coming_soon: true,
    meta: {
      questions: "Coming soon",
      mock_tests: "Coming soon",
    },
    available: false,
  },

  {
    id: 6,
    category: "university",
    name: "FAST-NUCES",
    logo: "../Fast_Logo.png",
    description:
      "Full prep for FAST-NUCES' aptitude test — quantitative, verbal and analytical.",
    coming_soon: true,
    meta: {
      questions: "Coming soon",
      mock_tests: "Coming soon",
    },
    available: false,
  },
  {
    id: 3,
    category: "engineering",
    name: "ECAT",
    logo: "../ecat_logo.png",
    description:
      "Complete prep for ECAT — physics, chemistry, mathematics and English.",
    coming_soon: true,
    meta: {
      questions: "Coming soon",
      mock_tests: "Coming soon",
    },
    available: false,
  },
];

export default exams;
