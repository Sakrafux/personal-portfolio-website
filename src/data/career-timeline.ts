export interface TimelineEntry {
  start: string;
  end: string | null;
  title: string;
  org: string;
  description: string | null;
  icon: string | null;
  accentColor: string;
  rowAdjustment?: number;
  important: boolean;
}

export interface TimelineEntryExtended extends TimelineEntry {
  lineColumn: number;
  cardColumn: number;
  cardLocation: "left" | "right";
  prefix: string;
}

export const work: TimelineEntry[] = [
  {
    start: "2026-04",
    end: null,
    title: "Software Engineer II",
    org: "Dynatrace",
    description: null,
    icon: "/logos/dynatrace_logo.jpg",
    accentColor: "var(--color-accent)",
    important: true,
  },
  {
    start: "2023-12",
    end: "2026-03",
    title: "Application Development Senior Analyst",
    org: "Accenture",
    description: null,
    icon: "/logos/accenture_dach_logo.jpg",
    accentColor: "var(--color-accent-secondary)",
    important: true,
  },
  {
    start: "2022-12",
    end: "2023-11",
    title: "Application Development Analyst",
    org: "Accenture",
    description: null,
    icon: "/logos/accenture_dach_logo.jpg",
    accentColor: "var(--color-accent-secondary)",
    important: true,
  },
  {
    start: "2022-01",
    end: "2022-11",
    title: "Application Development Associate",
    org: "Accenture",
    description: null,
    icon: "/logos/accenture_dach_logo.jpg",
    accentColor: "var(--color-accent-secondary)",
    important: true,
  },
  {
    start: "2021-08",
    end: "2021-12",
    title: "Full Stack Developer",
    org: "Freelance",
    description: null,
    icon: null,
    accentColor: "var(--color-accent)",
    important: true,
  },
  {
    start: "2021-02",
    end: "2021-07",
    title: "Consulting Intern",
    org: "Accenture",
    description: null,
    icon: "/logos/accenture_dach_logo.jpg",
    accentColor: "var(--color-accent-secondary)",
    important: true,
  },
  {
    start: "2020-07",
    end: "2020-12",
    title: "Military Service",
    org: "Austrian Armed Forces",
    description: null,
    icon: "/logos/bundesheer_logo.jpg",
    accentColor: "var(--color-accent)",
    important: false,
  },
  {
    start: "2019-08",
    end: "2019-08",
    title: "Summer Intern",
    org: "Wien IT",
    description: null,
    icon: "/logos/wienit_logo.jpg",
    accentColor: "var(--color-accent)",
    important: false,
  },
  {
    start: "2017-08",
    end: "2017-08",
    title: "Summer Intern",
    org: "SNAP Consulting",
    description: null,
    icon: "/logos/snap_consulting_logo.jpg",
    accentColor: "var(--color-accent)",
    important: false,
  },
];

export const education: TimelineEntry[] = [
  {
    start: "2024-09",
    end: "2026-06",
    title: "Master - Business Informatics",
    org: "TU Wien - Grade 1.0",
    description:
      "Deepening of my studies with a special focus on Economic Modeling and Information System Engineering.",
    icon: "/logos/tuwien_logo.jpg",
    accentColor: "var(--color-accent)",
    important: true,
  },
  {
    start: "2025-07",
    end: "2025-07",
    title: "Research Assistant",
    org: "King's College London",
    description:
      "Integration of textual grammar support using Langium and graphical modeling using GLSP, in order to enrich graphical models with LSP-conforming text elements.",
    icon: "/logos/kings_college_london_logo.jpg",
    accentColor: "var(--color-accent-secondary)",
    rowAdjustment: 1,
    important: true,
  },
  {
    start: "2021-10",
    end: "2024-07",
    title: "Bachelor - Software & Information Engineering",
    org: "TU Wien - Grade 1.2",
    description:
      "Foundational Computer Science degree touching on a wide array of related fields, from university-level mathematics and hardware basics to distributed systems and project development, to give a broad knowledge basis.",
    icon: "/logos/tuwien_logo.jpg",
    accentColor: "var(--color-accent)",
    important: true,
  },
  {
    start: "2015-09",
    end: "2020-06",
    title: "Matura - Informatics",
    org: "HTL St. Pölten - Grade 1.0",
    description: null,
    icon: "/logos/htl_stpoelten_logo.jpg",
    accentColor: "var(--color-accent)",
    important: false,
  },
  // Certifications
  {
    start: "2025-09",
    end: "2025-09",
    title: "Certified Associate - Back-End Developer - ABAP Cloud",
    org: "SAP",
    description: null,
    icon: "/logos/sap_logo.jpg",
    accentColor: "var(--color-accent-secondary)",
    rowAdjustment: -2,
    important: false,
  },
  {
    start: "2021-04",
    end: "2021-04",
    title: "Microsoft Azure Fundamentals (AZ-900)",
    org: "Microsoft",
    description: null,
    icon: "/logos/microsoft_logo.jpg",
    accentColor: "var(--color-accent-secondary)",
    important: false,
  },
  {
    start: "2019-02",
    end: "2019-02",
    title: "Oracle Certified Associate, Java SE 8 Programmer",
    org: "Oracle",
    description: null,
    icon: "/logos/oracle_logo.jpg",
    accentColor: "var(--color-accent-secondary)",
    important: false,
  },
  {
    start: "2018-06",
    end: "2018-06",
    title: "BEC Vantage C1",
    org: "Cambridge English",
    description: null,
    icon: "/logos/cambridge_university_press_assessment_english_logo.jpg",
    accentColor: "var(--color-accent-secondary)",
    important: false,
  },
];
