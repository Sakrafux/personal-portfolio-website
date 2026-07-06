import type { SkillContext } from "@/data/skills.ts";

export interface Project {
  title: string;
  description: string[];
  context: SkillContext;
  org?: string;
  start: string;
  end: string | null;
  skills: string[];
  links: {
    repo?: string;
    demo?: string;
  };
  important: boolean;
}

export const sortProjects = (projects: Project[]): Project[] =>
  [...projects].sort((a, b) => {
    const aEnd = a.end ?? "9999-12";
    const bEnd = b.end ?? "9999-12";
    return bEnd.localeCompare(aEnd);
  });

export const projects: Project[] = [
  {
    title: "Personal Portfolio Website",
    description: [
      "A personal portfolio website to showcase my career, skills, and projects. Built with Astro for static generation, focusing on performance and minimal JavaScript.",
    ],
    context: "private",
    start: "2026-07",
    end: "2026-07",
    skills: ["Astro", "TypeScript", "HTML", "CSS", "JavaScript", "Git", "Docker"],
    links: {
      repo: "https://github.com/Sakrafux/personal-portfolio-website",
      demo: "https://andreas-hell.ddns.net",
    },
    important: false,
  },
  {
    title: "Interweaving Graphical and Textual Modelling using GLSP and Langium",
    description: [
      "This project introduces an open-source framework designed to seamlessly integrate text-based grammar support into web-based graphical modeling environments. It bridges the gap between two distinct modeling paradigms by connecting the Graphical Language Server Platform (GLSP), used for diagrammatic views, with Langium, a parsing workbench for textual domain-specific languages. By embedding lightweight Monaco text editors directly into graphical diagram elements, the framework allows language engineers to implement advanced, context-aware textual sub-languages. These embedded editors provide rich IDE features like autocomplete, syntax highlighting, and live validation markers directly within the graphical layout.",
      "The core technical achievement of the framework lies in its unified abstract syntax graph and its sophisticated bi-directional synchronization. Textual elements are structurally aware of their exact position on the canvas, meaning a condition expression typed into a specific edge dynamically restricts its scope and filters autocomplete options based only on elements declared in preceding graphical nodes. An automated message bus manages communication between the components, ensuring that any modification to either the graphical layout or the text immediately triggers scope re-evaluation and highlights dangling references. This reusable architecture significantly lowers the implementation overhead for language engineers looking to build robust, hybrid modeling tools.",
    ],
    context: "education",
    org: "King's College London",
    start: "2025-07",
    end: "2025-07",
    skills: ["GLSP", "Langium", "TypeScript", "JavaScript"],
    links: {
      repo: "https://github.com/YourHarbour/glsp-langium-integration/tree/main/framework",
    },
    important: true,
  },
];
