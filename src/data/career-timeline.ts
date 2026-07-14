import type { LocalizedText } from "@/i18n/ui";

export interface TimelineEntry {
  start: string;
  end: string | null;
  title: LocalizedText;
  org: LocalizedText;
  description: LocalizedText | null;
  icon: string | null;
  accentColor: "primary" | "secondary";
  rowAdjustment?: number;
  important: boolean;
  projectRefs?: string[];
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
    title: { en: "Software Engineer II", de: "Software Engineer II" },
    org: { en: "Dynatrace", de: "Dynatrace" },
    description: null,
    icon: "/logos/dynatrace_logo.jpg",
    accentColor: "primary",
    important: true,
    projectRefs: ["rum"],
  },
  {
    start: "2023-12",
    end: "2026-03",
    title: {
      en: "Application Development Senior Analyst",
      de: "Application Development Senior Analyst",
    },
    org: { en: "Accenture", de: "Accenture" },
    description: null,
    icon: "/logos/accenture_dach_logo.jpg",
    accentColor: "secondary",
    important: true,
    projectRefs: ["justice-it-modernization", "bmf-services", "bmf-deadline"],
  },
  {
    start: "2022-12",
    end: "2023-11",
    title: { en: "Application Development Analyst", de: "Application Development Analyst" },
    org: { en: "Accenture", de: "Accenture" },
    description: null,
    icon: "/logos/accenture_dach_logo.jpg",
    accentColor: "secondary",
    important: true,
    projectRefs: ["bmf-deadline", "bmf-component-library"],
  },
  {
    start: "2022-01",
    end: "2022-11",
    title: { en: "Application Development Associate", de: "Application Development Associate" },
    org: { en: "Accenture", de: "Accenture" },
    description: null,
    icon: "/logos/accenture_dach_logo.jpg",
    accentColor: "secondary",
    important: true,
    projectRefs: ["bmf-camunda-prototype", "bmf-deadline"],
  },
  {
    start: "2021-08",
    end: "2021-12",
    title: { en: "Full-Stack Developer", de: "Full-Stack Developer" },
    org: { en: "Freelance", de: "Freelance" },
    description: null,
    icon: null,
    accentColor: "primary",
    important: true,
    projectRefs: ["real-estate-subsystem"],
  },
  {
    start: "2021-02",
    end: "2021-07",
    title: { en: "Consulting Intern", de: "Consulting Intern" },
    org: { en: "Accenture", de: "Accenture" },
    description: null,
    icon: "/logos/accenture_dach_logo.jpg",
    accentColor: "secondary",
    important: true,
    projectRefs: ["svs-it-modernization"],
  },
  {
    start: "2020-07",
    end: "2020-12",
    title: { en: "Military Service", de: "Military Service" },
    org: { en: "Austrian Armed Forces", de: "Austrian Armed Forces" },
    description: null,
    icon: "/logos/bundesheer_logo.jpg",
    accentColor: "primary",
    important: false,
  },
  {
    start: "2019-08",
    end: "2019-08",
    title: { en: "Summer Intern", de: "Summer Intern" },
    org: { en: "Wien IT", de: "Wien IT" },
    description: null,
    icon: "/logos/wienit_logo.jpg",
    accentColor: "primary",
    important: false,
  },
  {
    start: "2017-08",
    end: "2017-08",
    title: { en: "Summer Intern", de: "Summer Intern" },
    org: { en: "SNAP Consulting", de: "SNAP Consulting" },
    description: null,
    icon: "/logos/snap_consulting_logo.jpg",
    accentColor: "primary",
    important: false,
  },
];

export const education: TimelineEntry[] = [
  {
    start: "2024-09",
    end: "2026-06",
    title: { en: "Master - Business Informatics", de: "Master - Business Informatics" },
    org: { en: "TU Wien - Grade 1.0", de: "TU Wien - Grade 1.0" },
    description: {
      en: "Advanced studies with a special focus on Economic Modeling and Information System Engineering, which I finished with distinction.",
      de: "Advanced studies with a special focus on Economic Modeling and Information System Engineering, which I finished with distinction.",
    },
    icon: "/logos/tuwien_logo.jpg",
    accentColor: "primary",
    important: true,
    projectRefs: ["mcp-server-glsp"],
  },
  {
    start: "2025-07",
    end: "2025-07",
    title: { en: "Research Assistant", de: "Research Assistant" },
    org: { en: "King's College London", de: "King's College London" },
    description: {
      en: "I integrated textual grammar support using Langium and graphical modeling using GLSP, in order to enrich graphical models with LSP-conforming text elements.",
      de: "I integrated textual grammar support using Langium and graphical modeling using GLSP, in order to enrich graphical models with LSP-conforming text elements.",
    },
    icon: "/logos/kings_college_london_logo.jpg",
    accentColor: "secondary",
    rowAdjustment: 1,
    important: true,
    projectRefs: ["glsp-langium-integration"],
  },
  {
    start: "2021-10",
    end: "2024-07",
    title: {
      en: "Bachelor - Software & Information Engineering",
      de: "Bachelor - Software & Information Engineering",
    },
    org: { en: "TU Wien - Grade 1.2", de: "TU Wien - Grade 1.2" },
    description: {
      en: "Foundational Computer Science degree touching on a wide array of related fields, from university-level mathematics and hardware basics to distributed systems and project development, giving a broad knowledge basis. I finished the degree with distinction.",
      de: "Foundational Computer Science degree touching on a wide array of related fields, from university-level mathematics and hardware basics to distributed systems and project development, giving a broad knowledge basis. I finished the degree with distinction.",
    },
    icon: "/logos/tuwien_logo.jpg",
    accentColor: "primary",
    important: true,
    projectRefs: ["glsp-browser-sandbox"],
  },
  {
    start: "2015-09",
    end: "2020-06",
    title: { en: "Matura - Informatics", de: "Matura - Informatics" },
    org: { en: "HTL St. Pölten - Grade 1.0", de: "HTL St. Pölten - Grade 1.0" },
    description: null,
    icon: "/logos/htl_stpoelten_logo.jpg",
    accentColor: "primary",
    important: false,
  },
  // Certifications
  {
    start: "2025-09",
    end: "2025-09",
    title: {
      en: "Certified Associate - Back-End Developer - ABAP Cloud",
      de: "Certified Associate - Back-End Developer - ABAP Cloud",
    },
    org: { en: "SAP", de: "SAP" },
    description: null,
    icon: "/logos/sap_logo.jpg",
    accentColor: "secondary",
    rowAdjustment: -3,
    important: false,
  },
  {
    start: "2021-04",
    end: "2021-04",
    title: {
      en: "Microsoft Azure Fundamentals (AZ-900)",
      de: "Microsoft Azure Fundamentals (AZ-900)",
    },
    org: { en: "Microsoft", de: "Microsoft" },
    description: null,
    icon: "/logos/microsoft_logo.jpg",
    accentColor: "secondary",
    important: false,
  },
  {
    start: "2019-02",
    end: "2019-02",
    title: {
      en: "Oracle Certified Associate, Java SE 8 Programmer",
      de: "Oracle Certified Associate, Java SE 8 Programmer",
    },
    org: { en: "Oracle", de: "Oracle" },
    description: null,
    icon: "/logos/oracle_logo.jpg",
    accentColor: "secondary",
    important: false,
  },
  {
    start: "2018-06",
    end: "2018-06",
    title: { en: "BEC Vantage C1", de: "BEC Vantage C1" },
    org: { en: "Cambridge English", de: "Cambridge English" },
    description: null,
    icon: "/logos/cambridge_university_press_assessment_english_logo.jpg",
    accentColor: "secondary",
    important: false,
  },
];
