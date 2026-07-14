import type { LocalizedText } from "@/i18n/ui";

export type SkillLevel = "familiar" | "regular" | "heavy";

export type SkillContext = "work" | "education" | "private";

export type SkillContexts = Partial<Record<SkillContext, SkillLevel>>;

export interface Skill {
  name: string;
  contexts: SkillContexts;
}

export interface SkillGroup {
  title: LocalizedText;
  skills: Skill[];
  important: boolean;
}

export const skillContexts: SkillContext[] = ["work", "education", "private"];

export const skillLevels: { level: SkillLevel; label: LocalizedText }[] = [
  {
    level: "familiar",
    label: { en: "familiar", de: "vertraut" },
  },
  {
    level: "regular",
    label: { en: "regular use", de: "regelmäßige Nutzung" },
  },
  {
    level: "heavy",
    label: { en: "heavy / daily use", de: "intensiv / täglich" },
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: { en: "Programming Languages", de: "Programmiersprachen" },
    important: true,
    skills: [
      { name: "Java", contexts: { work: "heavy", education: "regular", private: "regular" } },
      {
        name: "JavaScript",
        contexts: { work: "regular", education: "heavy", private: "heavy" },
      },
      {
        name: "TypeScript",
        contexts: { work: "regular", education: "heavy", private: "heavy" },
      },
      { name: "SQL", contexts: { work: "regular", education: "regular", private: "regular" } },
      { name: "Go", contexts: { private: "heavy" } },
      { name: "Python", contexts: { education: "familiar", private: "familiar" } },
      { name: "C", contexts: { education: "familiar" } },
      { name: "R", contexts: { education: "familiar" } },
      { name: "Rust", contexts: { private: "familiar" } },
      { name: "Kotlin", contexts: { private: "familiar" } },
      { name: "ABAP", contexts: { education: "familiar" } },
      { name: "Bash", contexts: { private: "familiar" } },
      { name: "HTML", contexts: { work: "regular", education: "regular", private: "regular" } },
      { name: "CSS", contexts: { work: "regular", education: "regular", private: "regular" } },
      { name: "Cypher", contexts: { private: "familiar" } },
    ],
  },
  {
    title: { en: "Frameworks & Libraries", de: "Frameworks & Bibliotheken" },
    important: true,
    skills: [
      { name: "Spring Boot", contexts: { work: "heavy", private: "familiar" } },
      { name: "Spring", contexts: { work: "familiar" } },
      { name: "Quarkus", contexts: { private: "familiar" } },
      { name: "Micronaut", contexts: { private: "familiar" } },
      { name: "FastAPI", contexts: { private: "familiar" } },
      { name: "Express", contexts: { private: "familiar" } },
      {
        name: "Node.js",
        contexts: { work: "regular", education: "heavy", private: "heavy" },
      },
      { name: "Bun", contexts: { private: "familiar" } },
      { name: "React", contexts: { work: "regular", private: "heavy" } },
      { name: "Next.js", contexts: { work: "familiar", private: "familiar" } },
      { name: "Astro", contexts: { private: "heavy" } },
      { name: "Tailwind CSS", contexts: { work: "regular", private: "regular" } },
    ],
  },
  {
    title: { en: "Databases & Storage", de: "Datenbanken & Speicher" },
    important: true,
    skills: [
      {
        name: "PostgreSQL",
        contexts: { work: "regular", education: "regular", private: "regular" },
      },
      { name: "SQLite", contexts: { private: "regular" } },
      { name: "Neo4j", contexts: { education: "familiar", private: "familiar" } },
      { name: "SQL Server", contexts: { private: "familiar" } },
      { name: "MongoDB", contexts: { private: "familiar" } },
      { name: "Object Storage", contexts: { work: "familiar", private: "familiar" } },
    ],
  },
  {
    title: { en: "Cloud & DevOps", de: "Cloud & DevOps" },
    important: true,
    skills: [
      { name: "Git", contexts: { work: "heavy", education: "regular", private: "regular" } },
      { name: "Docker", contexts: { work: "regular", education: "familiar", private: "heavy" } },
      { name: "Kubernetes", contexts: { work: "regular", private: "familiar" } },
      { name: "Jenkins", contexts: { work: "regular" } },
      {
        name: "GitHub Actions",
        contexts: { work: "familiar", education: "familiar", private: "familiar" },
      },
      { name: "Prometheus & Grafana", contexts: { work: "familiar", private: "familiar" } },
      { name: "OpenTelemetry", contexts: { private: "familiar" } },
      { name: "Azure", contexts: { education: "familiar", private: "familiar" } },
      { name: "GCP", contexts: { private: "familiar" } },
      { name: "SonarQube", contexts: { work: "regular" } },
      { name: "ArgoCD", contexts: { work: "familiar" } },
      { name: "OpenShift", contexts: { work: "regular" } },
      { name: "Linux", contexts: { work: "familiar", education: "familiar", private: "regular" } },
    ],
  },
  {
    title: { en: "Architecture", de: "Architektur" },
    important: true,
    skills: [
      { name: "Monolith", contexts: { work: "heavy", education: "regular", private: "regular" } },
      { name: "Microservice", contexts: { work: "heavy", education: "familiar" } },
      {
        name: "Service-oriented Architecture (SOA)",
        contexts: { work: "regular", education: "familiar" },
      },
      {
        name: "Event-Driven Architecture (EDA)",
        contexts: { work: "regular", education: "regular" },
      },
      { name: "REST", contexts: { work: "heavy", education: "regular", private: "heavy" } },
      {
        name: "WebSockets",
        contexts: { work: "familiar", education: "familiar", private: "familiar" },
      },
      {
        name: "Monorepo",
        contexts: { work: "familiar", education: "regular", private: "familiar" },
      },
      { name: "CQRS", contexts: { work: "familiar" } },
      { name: "Microfrontend", contexts: { work: "familiar" } },
      { name: "N-Tier", contexts: { work: "regular", private: "regular" } },
      {
        name: "Vertical Slice",
        contexts: { work: "regular", education: "regular", private: "regular" },
      },
      { name: "Hexagonal", contexts: { private: "regular" } },
      { name: "Serverless", contexts: { education: "familiar", private: "familiar" } },
      {
        name: "Model Context Protocol (MCP)",
        contexts: { work: "familiar", education: "heavy" },
      },
    ],
  },
  {
    title: { en: "Testing", de: "Testing" },
    important: false,
    skills: [
      {
        name: "JUnit & Mockito",
        contexts: { work: "heavy", education: "familiar", private: "regular" },
      },
      { name: "Playwright", contexts: { private: "familiar" } },
      { name: "Vitest", contexts: { work: "regular", private: "regular" } },
      { name: "Jest", contexts: { work: "regular" } },
      { name: "k6", contexts: { private: "familiar" } },
      { name: "Java Microbenchmark Harness (JMH)", contexts: { work: "familiar" } },
    ],
  },
  {
    title: { en: "Supplementary Technologies", de: "Ergänzende Technologien" },
    important: false,
    skills: [
      { name: "GLSP", contexts: { education: "heavy" } },
      { name: "Langium", contexts: { education: "regular" } },
      { name: "Apache Kafka", contexts: { work: "regular" } },
      { name: "Camunda", contexts: { work: "regular" } },
      { name: "Dynatrace", contexts: { work: "heavy" } },
    ],
  },
  {
    title: { en: "Tools", de: "Werkzeuge" },
    important: false,
    skills: [
      { name: "IntelliJ", contexts: { work: "heavy", education: "regular", private: "heavy" } },
      { name: "VS Code", contexts: { work: "regular", education: "heavy", private: "regular" } },
      { name: "Claude Code", contexts: { work: "heavy", education: "regular" } },
      { name: "OpenCode", contexts: { private: "heavy" } },
    ],
  },
  {
    title: { en: "Languages", de: "Sprachen" },
    important: false,
    skills: [
      { name: "German", contexts: { work: "heavy", education: "heavy", private: "heavy" } },
      { name: "English", contexts: { work: "heavy", education: "heavy", private: "heavy" } },
      { name: "Japanese", contexts: { private: "familiar" } },
    ],
  },
];

const levelWeight: Record<SkillLevel, number> = {
  familiar: 1,
  regular: 5,
  heavy: 9,
};

const contextWeight: Record<SkillContext, number> = {
  work: 10,
  education: 5,
  private: 3,
};

const scoreImportanceBaseline = 25;

const skillScore = (skill: Skill): number =>
  skillContexts.reduce((sum, ctx) => {
    const level = skill.contexts[ctx];
    return sum + (level ? levelWeight[level] * contextWeight[ctx] : 0);
  }, 0);

export const sortSkillGroups = (groups: SkillGroup[]): SkillGroup[] =>
  groups.map((group) => ({
    ...group,
    skills: [...group.skills].sort(
      (a, b) => skillScore(b) - skillScore(a) || a.name.localeCompare(b.name),
    ),
  }));

export const filterSkillScore = (groups: SkillGroup[]): SkillGroup[] =>
  groups
    .map((group) => ({
      ...group,
      skills: group.skills.filter((skill) => skillScore(skill) >= scoreImportanceBaseline),
    }))
    .filter((group) => group.skills.length > 0);
