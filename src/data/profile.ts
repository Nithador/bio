export type Link = {
  label: string;
  href: string;
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: "journal" | "chapter";
  doi: string;
  featured?: boolean;
};

export type Project = {
  years: string;
  name: string;
  description: string;
  impact?: string;
  role?: string;
  doi?: string;
  grant?: string;
  category: "international" | "national" | "contract";
  featured?: boolean;
};

export type NotableRepo = {
  name: string;
  href: string;
  description: string;
  language?: string;
  stars?: number;
  forks?: number;
};

export const profile = {
  name: "Tomáš Martinovič",
  degrees: "Ing., Ph.D.",
  title: "Senior Researcher",
  affiliation: "IT4Innovations, VSB - Technical University of Ostrava",
  location: "Ostrava, Czech Republic",
  email: "tomas.martinovic@vsb.cz",
  summary:
    "I work at the intersection of high-performance computing, artificial intelligence, data-intensive workflows, and digital twins. My current research focuses on AI/ML applications in HPC and data-intensive environments.",
  shortSummary:
    "Senior researcher building applied AI, HPC workflows, and biodiversity digital twin infrastructure.",
  links: [
    { label: "GitHub", href: "https://github.com/Nithador" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tomas-martinovic" },
    { label: "ORCID", href: "https://orcid.org/0000-0002-0132-1434" },
    { label: "Scopus", href: "https://www.scopus.com/authid/detail.uri?authorId=57190291307" },
    { label: "ResearcherID", href: "https://www.webofscience.com/wos/author/record/E-8615-2017" },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?hl=cs&user=CIkRgLQAAAAJ" }
  ] satisfies Link[]
};

export const highlights = [
  {
    value: "Senior researcher",
    label: "IT4Innovations, VSB - Technical University of Ostrava"
  },
  {
    value: "20+ publications",
    label: "Journal articles, book chapters, and applied research outputs"
  },
  {
    value: "WP & task leadership",
    label: "European research projects in AI, HPC, and biodiversity digital twins"
  },
  {
    value: "Lecturer",
    label: "Parallel data processing, AI, HPC, R, and Python training"
  }
];

export const notableRepos: NotableRepo[] = [
  {
    name: "BioDT Shiny Application",
    href: "https://github.com/BioDT/biodt-shiny",
    description: "BioDT Shiny application for interactive biodiversity data exploration and analysis."
  },
  {
    name: "Subsim",
    href: "https://github.com/ocean-data-factory-sweden/kso/tree/dev",
    description: "Subsim for ocean image processing workflows."
  },
  {
    name: "EXA4MIND AI Inference Service",
    href: "https://opencode.it4i.eu/exa4mind/platform/aqis/query-inference/ai-inference-service/",
    description: "AI inference service for query-based model execution in EXA4MIND workflows."
  },
  {
    name: "HPC AI Training App Workflow Nodes",
    href: "https://opencode.it4i.eu/lexis-platform/orchestrator/workflow-nodes",
    description: "Workflow node components used by the AI Training Application for HPC environments."
  }
];

export const researchThemes = [
  {
    name: "Digital twins for biodiversity",
    summary:
      "Data integration, modelling workflows, and digital twin infrastructure for biodiversity, ecosystem services, and environmental research."
  },
  {
    name: "HPC, cloud, and AI workflows",
    summary:
      "Time-constrained, data-intensive workflows that combine high-performance computing, cloud orchestration, and AI services."
  },
  {
    name: "Nonlinear dynamics and time series",
    summary:
      "Chaos detection, recurrence analysis, self-organizing maps, clustering, and scalable methods for complex temporal data."
  },
  {
    name: "Applied research software",
    summary:
      "Practical tools, prototypes, and training that help researchers and domain experts turn methods into working systems."
  }
];

export const employment = [
  {
    years: "2022-present",
    role: "Senior Researcher",
    organization: "IT4Innovations, VSB - Technical University of Ostrava"
  },
  {
    years: "2019-2022",
    role: "Researcher",
    organization: "IT4Innovations, VSB - Technical University of Ostrava"
  },
  {
    years: "2016-2018",
    role: "Research Assistant",
    organization: "IT4Innovations, VSB - Technical University of Ostrava"
  },
  {
    years: "2014-2015",
    role: "Junior Data Analyst",
    organization: "IT4Innovations, VSB - Technical University of Ostrava"
  }
];

export const education = [
  {
    years: "2015-2018",
    degree: "Ph.D., Computational Sciences",
    organization: "VSB - Technical University of Ostrava",
    thesis: "Tools for time series analysis of nonlinear dynamical systems"
  },
  {
    years: "2012-2015",
    degree: "Ing., Quantitative Methods in Economy",
    organization: "Masaryk University",
    thesis: "Investigating uncertainty in the estimates of potential output and the NAIRU"
  },
  {
    years: "2009-2012",
    degree: "Bc., Mathematical Methods in Economics",
    organization: "Prague University of Economics and Business",
    thesis: "Operation research applications in public sector"
  }
];

export const projects: Project[] = [
  {
    years: "2026-2030",
    name: "PeatGenie",
    description: "Research project focused on peatland-related data and digital research workflows.",
    impact: "Creating AI agents for the stakeholder interface and interaction with peatland models.",
    role: "Work Package Leader",
    category: "international",
    featured: true
  },
  {
    years: "2023-2027",
    name: "DTO-BioFlow",
    description: "Integration of biodiversity monitoring data into the Digital Twin Ocean.",
    impact: "Optimized and scaled Digital Twin Ocean use cases to HPC environments.",
    role: "Task Leader",
    doi: "10.3030/101112823",
    category: "international",
    featured: true
  },
  {
    years: "2022-2025",
    name: "BioDT",
    description:
      "Biodiversity Digital Twin for advanced modelling, simulation, and prediction capabilities.",
    impact: "Delivered biodiversity prototype digital twin used for modelling and scenario exploration.",
    role: "Work Package Leader",
    doi: "10.3030/101057437",
    category: "international",
    featured: true
  },
  {
    years: "2026-2029",
    name: "Czech AI Factory",
    description: "European AI factory initiative supporting AI adoption and service infrastructure.",
    impact: "Contributing to AI service and MLOps development.",
    role: "Work Package Co-Leader",
    doi: "10.3030/101314740",
    category: "international",
    featured: true
  },
  {
    years: "2025-2028",
    name: "LAIFS",
    description: "LUMI AI Factory - Service Center.",
    impact: "Supports practical access to AI services through the LUMI ecosystem.",
    doi: "10.3030/101234208",
    category: "international",
    featured: true
  },
  {
    years: "2023-2026",
    name: "EXA4MIND",
    description: "EXtreme Analytics for MINing Data spaces.",
    impact: "Designed data analytics pipelines and LLM inference service solution.",
    role: "Task Leader",
    doi: "10.3030/101092944",
    category: "international",
    featured: true
  },
  {
    years: "2021-2024",
    name: "ACROSS",
    description: "HPC, big data, and artificial intelligence cross-stack platform towards exascale.",
    role: "Task Leader",
    doi: "10.3030/955648",
    category: "international"
  },
  {
    years: "2019-2021",
    name: "LEXIS",
    description: "Large-scale EXecution for Industry & Society.",
    role: "Task Leader",
    doi: "10.3030/825532",
    category: "international"
  },
  {
    years: "2023-2026",
    name: "EyeERP",
    description:
      "Comprehensive ERP system for eye clinics with the MojeOči mobile application for performing and analyzing eye tests.",
    grant: "E122_002/0000436",
    category: "national"
  },
  {
    years: "2021-2023",
    name: "SmartFleet",
    description:
      "AI-based software for increasing effective use of electric vehicles in company fleets.",
    grant: "EG20_321/0024896",
    category: "national"
  },
  {
    years: "2019-2021",
    name: "Contact-less detector for partial discharges",
    description:
      "Detection of partial discharge activity in medium overhead voltage powerlines.",
    grant: "TJ02000031",
    category: "national"
  }
];

export const publications: Publication[] = [
  {
    title:
      "A new technique for characterizing nonlinear dynamical system behavior using self-organizing maps and clustering",
    authors: "Adil Jhangeer et al.",
    venue: "Ain Shams Engineering Journal",
    year: "2026",
    type: "journal",
    doi: "10.1016/j.asej.2026.104206",
    featured: true
  },
  {
    title: "Essential time series characteristics for human motion analysis based on Self-Organizing Map clustering",
    authors: "Andrii Patrikei et al.",
    venue: "Acta Gymnica",
    year: "2026",
    type: "journal",
    doi: "10.5507/ag.2026.004"
  },
  {
    title:
      "Modeling and implementing an earthquake and tsunami event-triggered, time-constrained impact assessment workflow",
    authors: "Stéphane Louise et al.",
    venue: "The International Journal of High Performance Computing Applications",
    year: "2025",
    type: "journal",
    doi: "10.1177/10943420251343794",
    featured: true
  },
  {
    title:
      "Fragmented Networks: Challenges in communication and cohesion of European Biodiversity Research Infrastructures",
    authors: "Allan Souza et al.",
    venue: "Biodiversity Data Journal",
    year: "2025",
    type: "journal",
    doi: "10.3897/BDJ.13.e148079"
  },
  {
    title:
      "Demonstration of Sensitive Analysis and Optical Soliton Patterns in a (4+1) Dimensional Boiti-Leon-Manna Pempinelli Equation",
    authors: "Muhammad Iqbal et al.",
    venue: "Chaos Theory and Applications",
    year: "2025",
    type: "journal",
    doi: "10.51537/chaos.1518307"
  },
  {
    title: "AggreProt: a web server for predicting and engineering aggregation prone regions in proteins",
    authors: "Joan Planas-Iglesias et al.",
    venue: "Nucleic Acids Research",
    year: "2024",
    type: "journal",
    doi: "10.1093/nar/gkae420",
    featured: true
  },
  {
    title: "Prototype biodiversity digital twin: crop wild relatives genetic resources for food security",
    authors: "Desalegn Chala et al.",
    venue: "Research Ideas and Outcomes",
    year: "2024",
    type: "journal",
    doi: "10.3897/rio.10.e125192"
  },
  {
    title: "Prototype Biodiversity Digital Twin: honey bees in agricultural landscapes",
    authors: "Jürgen Groeneveld et al.",
    venue: "Research Ideas and Outcomes",
    year: "2024",
    type: "journal",
    doi: "10.3897/rio.10.e125167"
  },
  {
    title: "Prototype Digital Twin: Recreation and biodiversity cultural ecosystem services",
    authors: "Simon Rolph et al.",
    venue: "Research Ideas and Outcomes",
    year: "2024",
    type: "journal",
    doi: "10.3897/rio.10.e125450"
  },
  {
    title: "Prototype Biodiversity Digital Twin: grassland biodiversity dynamics",
    authors: "Franziska Taubert et al.",
    venue: "Research Ideas and Outcomes",
    year: "2024",
    type: "journal",
    doi: "10.3897/rio.10.e124168"
  },
  {
    title: "Fast Algorithm for Contactless Partial Discharge Detection on Remote Gateway Device",
    authors: "Tomas Martinovic and Jan Fulnecek",
    venue: "IEEE Transactions on Power Delivery",
    year: "2022",
    type: "journal",
    doi: "10.1109/TPWRD.2021.3104746",
    featured: true
  },
  {
    title: "Alternative approaches of evaluating the 0-1 test for chaos",
    authors: "T. Martinovič",
    venue: "International Journal of Computer Mathematics",
    year: "2020",
    type: "journal",
    doi: "10.1080/00207160.2019.1701662",
    featured: true
  },
  {
    title: "Highly scalable algorithm for computation of recurrence quantitative analysis",
    authors: "Tomáš Martinovič and Georg Zitzlsberger",
    venue: "The Journal of Supercomputing",
    year: "2019",
    type: "journal",
    doi: "10.1007/s11227-018-2350-5",
    featured: true
  },
  {
    title: "Chaotic behaviour of noisy traffic data",
    authors: "Tomáš Martinovič",
    venue: "Mathematical Methods in the Applied Sciences",
    year: "2018",
    type: "journal",
    doi: "10.1002/mma.4234"
  },
  {
    title: "A survey of tools detecting the dynamical properties of one-dimensional families",
    authors: "Marek Lampart and Tomas Martinovic",
    venue: "Advances in Electrical and Electronic Engineering",
    year: "2017",
    type: "journal",
    doi: "10.15598/aeee.v15i2.2314"
  },
  {
    title: "Event-Driven, Time-Constrained Workflows",
    authors: "Rubén J. García-Hernández et al.",
    venue: "HPC, Big Data, and AI Convergence Towards Exascale",
    year: "2022",
    type: "chapter",
    doi: "10.1201/9781003176664-7"
  },
  {
    title: "Inventory Optimization Model Parameter Search Speed-Up Through Similarity Reduction",
    authors: "Tomáš Martinovič et al.",
    venue: "Soft Computing Applications",
    year: "2021",
    type: "chapter",
    doi: "10.1007/978-3-030-51992-6_9"
  },
  {
    title: "Real-Time Model of Computation over HPC/Cloud Orchestration - The LEXIS Approach",
    authors: "Thierry Goubier et al.",
    venue: "Complex, Intelligent and Software Intensive Systems",
    year: "2021",
    type: "chapter",
    doi: "10.1007/978-3-030-50454-0_24"
  },
  {
    title: "CML-Tent Model Chaotic Behavior with Respect to the State and Coupling Parameters",
    authors: "Marek Lampart and Tomáš Martinovič",
    venue: "Chaos and Complex Systems",
    year: "2020",
    type: "chapter",
    doi: "10.1007/978-3-030-35441-1_2"
  },
  {
    title: "Earthquake and Tsunami Workflow Leveraging the Modern HPC/Cloud Environment in the LEXIS Project",
    authors: "Thierry Goubier et al.",
    venue: "Advances in Networked-based Information Systems",
    year: "2020",
    type: "chapter",
    doi: "10.1007/978-3-030-29029-0_21"
  },
  {
    title: "HPC, Cloud and Big-Data Convergent Architectures: The LEXIS Approach",
    authors: "Alberto Scionti et al.",
    venue: "Complex, Intelligent, and Software Intensive Systems",
    year: "2020",
    type: "chapter",
    doi: "10.1007/978-3-030-22354-0_19"
  },
  {
    title: "Sequence Analysis for Relationship Pattern Extraction",
    authors: "Tomáš Martinovič et al.",
    venue: "Computer Information Systems and Industrial Management",
    year: "2019",
    type: "chapter",
    doi: "10.1007/978-3-030-28957-7_29"
  },
  {
    title: "Automated Application of Inventory Optimization",
    authors: "Tomáš Martinovič et al.",
    venue: "Computer Information Systems and Industrial Management",
    year: "2016",
    type: "chapter",
    doi: "10.1007/978-3-319-45378-1_21"
  },
  {
    title: "Traffic Speed Prediction Using Hidden Markov Models for Czech Republic Highways",
    authors: "Lukáš Rapant et al.",
    venue: "Agent and Multi-Agent Systems: Technology and Applications",
    year: "2016",
    type: "chapter",
    doi: "10.1007/978-3-319-39883-9_15"
  }
];

export const teaching = {
  courses: [
    {
      years: "2019-2026",
      name: "Libraries for parallel data processing",
      role: "Tutor and lecturer",
      organization: "VSB - Technical University of Ostrava"
    }
  ],
  supervision: [
    {
      year: "2026",
      student: "Petr Kladov",
      title: "Kolmogorov-Arnold Network analysis and comparison with classical neural networks",
      role: "Diploma thesis supervisor"
    },
    {
      year: "2023",
      student: "Matěj Eliáš",
      title: "Tool for iterative visualization of selected protein characteristics in a web interface",
      role: "Bachelor thesis supervisor"
    },
    {
      year: "2020",
      student: "Jan Pastorek",
      title: "Use of High-level Synthesis to accelerate application development to programmable logic",
      role: "Bachelor thesis consultant"
    }
  ],
  trainingTopics: [
    "Python for HPC",
    "Python for Data Stewards",
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
    "Parallel Computing",
    "High Performance Data Analysis",
    "Exploratory Data Analysis",
    "MLOps"
  ],
  trainings: [
    "AI Confidential, Prague, Brno, and Ostrava",
    "Python for Data Stewards",
    "Python for HPC",
    "Parallel R",
    "High Performance Data Analysis with R",
    "Data science with R and Python",
    "Deep Learning on Intel Architecture"
  ],
  summerSchools: [
    "BioDT School, Lecce",
    "EUMaster4HPC Summer School, Ostrava",
    "SCTrain Summer School, Ostrava"
  ]
};

export const awards = [
  {
    year: "2019",
    title: "Best Poster Award",
    detail: "HPC Oriented Algorithm for Computation of Recurrence Quantitative Analysis, ISC High Performance"
  },
  {
    year: "2019",
    title: "1st place, best dissertation defended in 2018",
    detail:
      "Topic: Information Technology and Electrical Engineering, VSB - Technical University of Ostrava and Consortium PROGRES 3"
  }
];

export const service = [
  "Reviewer for Frontiers in Plant Science, Ecological Informatics, Ecological Modelling, International Journal of Computer Mathematics, The Journal of Supercomputing, and Mathematical Methods in the Applied Sciences",
  "ETP4HPC SRA7 HPC / AI Applications and Workflows",
  "BDVA Task Force Finance",
  "ELIXIR CZ AI Positioning framework",
  "TDWG 2026 session co-convening on Digital Twins and Data Infrastructures"
];
