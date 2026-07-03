import type { SkillContext } from "@/data/skills.ts";

export interface Project {
  title: string;
  description: string;
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

export const projects: Project[] = [
  {
    title: "Personal Portfolio Website",
    description:
      "A personal portfolio website to showcase my career, skills, and projects. Built with Astro for static generation, focusing on performance and minimal JavaScript.",
    context: "private",
    start: "2025-07",
    end: null,
    skills: ["Astro", "TypeScript", "CSS"],
    links: {
      repo: "https://github.com/andreashell/personal-portfolio-website",
    },
    important: true,
  },
  {
    title: "Graphical-Textual Language Modeling",
    description:
      "Integration of textual grammar support using Langium and graphical modeling using GLSP, in order to enrich graphical models with LSP-conforming text elements.",
    context: "education",
    org: "King's College London",
    start: "2025-07",
    end: "2025-07",
    skills: ["Langium", "GLSP", "TypeScript"],
    links: {},
    important: true,
  },
];
