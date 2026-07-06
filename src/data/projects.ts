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
    doc?: string;
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
    skills: ["Astro", "TypeScript", "HTML", "CSS", "JavaScript"],
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
    skills: ["GLSP", "Langium", "TypeScript", "Event-Driven Architecture (EDA)", "JavaScript"],
    links: {
      repo: "https://github.com/YourHarbour/glsp-langium-integration/tree/main/framework",
    },
    important: true,
  },
  {
    title:
      "Master's Thesis: Design and Implementation of a Model Context Protocol (MCP) Server for the Graphical Language Server Platform (GLSP)",
    description: [
      "This project covers the design and implementation of a novel Model Context Protocol (MCP) server integration for the Graphical Language Server Platform (GLSP), establishing a structured framework for Large Language Models (LLMs) to act as stateful, interactive assistants within graphical modeling environments. By embedding the MCP server directly into GLSP's existing Node.js client-server architecture, the system shares session management and dependency injection containers within a single process, avoiding the overhead and fragility of traditional inter-process communication. The resulting reusable library, @eclipse-glsp/server-mcp, exposes generic tool and resource endpoints that allow AI agents to surgically interact with and alter diagram elements directly within the editor. Both client and server implementations were successfully accepted and merged into the official upstream Eclipse GLSP open-source repositories.",
      "Following a Design Science Research methodology, the framework's performance was evaluated against alternative serialization-based (JSON/XML) and text-DSL (PlantUML) interaction models using standardized modeling exercises. The empirical results demonstrated that the protocol-driven approach achieves near-perfect precision and recall in information retrieval while completely eliminating syntactic errors during model manipulation. Most notably during iterative model modifications, the MCP server prevents the structural corruption typical of generative re-generation methods by executing surgical API operations. Additionally, by incorporating domain optimizations such as identifier aliasing, Markdown serialization, and deterministic layout offloading, the architecture successfully reduced operational token costs and inference latency by approximately 50%.",
    ],
    context: "education",
    org: "TU Wien",
    start: "2025-09",
    end: "2026-06",
    skills: [
      "GLSP",
      "Model Context Protocol (MCP)",
      "TypeScript",
      "Node.js",
      "Event-Driven Architecture (EDA)",
      "Monorepo",
      "JavaScript",
    ],
    links: {
      repo: "https://github.com/eclipse-glsp/glsp-server-node/tree/main/packages/server-mcp",
      doc: "https://repositum.tuwien.at/handle/20.500.12708/228891",
    },
    important: true,
  },
  {
    title:
      "Bachelor's Thesis: Browser-only implementation of GLSP as a digital sandbox environment",
    description: [
      "This project introduces a completely serverless, lightweight sandbox environment for the Graphical Language Server Protocol (GLSP), moving away from resource-intensive, server-backed platforms like Theia Cloud. Developed at TU Wien in collaboration with EclipseSource, the solution leverages advanced browser capabilities, including Node.js servers compiled directly into Web Workers and communication managed via custom JSON-RPC protocols, to enable instantaneous client-side rendering and static file hosting on GitHub Pages. By eliminating backend dependencies, the platform dramatically reduces server infrastructure costs while ensuring instant loading times and fluid interactivity for evaluating graphical modeling tools.",
      "Expanding beyond a simple showcase tool, the sandbox introduces a specialized meta-programming interface integrated with the Monaco Editor. Users can not only modify visual diagram elements but also directly edit and transpile TypeScript source files inside the browser to recompile the graphical language definitions live. This dual-capability provides an immersive developer workflow directly within a documentation site, allowing prospective adopters to instantly preview the structural code and the real-time visual output side by side.",
    ],
    context: "education",
    org: "TU Wien",
    start: "2024-07",
    end: "2024-04",
    skills: [
      "GLSP",
      "TypeScript",
      "Node.js",
      "WebSockets",
      "Event-Driven Architecture (EDA)",
      "Monorepo",
      "JavaScript",
    ],
    links: {
      repo: "https://github.com/Sakrafux/glsp-browser-standalone-integration",
      demo: "https://sakrafux.github.io/glsp-browser-standalone-integration/",
      doc: "https://model-engineering.info/publications/theses/thesis-hell.pdf",
    },
    important: true,
  },
  {
    title: "RealWorld Tech Comparison",
    description: [
      "A full-stack evaluation project designed to analyze how different backend and frontend technologies, as well as architectures, measure up under real-world conditions. A rigorous specification for a simple blog application (Conduit) is implemented across multiple tech stacks. This allows for direct comparison of various aspects. On the one hand, the developer experience such as code boilerplate, type safety, and ecosystem maturity, as well as raw performance metrics like response times, resource utilization, and throughput. The resulting data serves as a practical guide for choosing the optimal architecture based on measurable trade-offs, while also providing some insights into developer ergonomics.",
    ],
    context: "private",
    start: "2026-04",
    end: "2026-06",
    skills: [
      "Java",
      "Go",
      "TypeScript",
      "Python",
      "SQL",
      "Spring Boot",
      "Quarkus",
      "Micronaut",
      "FastAPI",
      "Express",
      "Node.js",
      "Bun",
      "React",
      "Astro",
      "PostgreSQL",
      "Docker",
      "Prometheus & Grafana",
      "OpenTelemetry",
      "REST",
      "N-Tier",
      "Vertical Slice",
      "Hexagonal",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
    ],
    links: {
      repo: "https://github.com/Sakrafux/realworld-tech-comparison",
    },
    important: true,
  },
  {
    title: "Family Tree Web Application",
    description: [
      "This project is a web application for visualizing and managing family trees, designed with a minimal but powerful stack. It combines a Go backend with an embedded graph database and a React + D3.js frontend for interactive visualization.",
    ],
    context: "private",
    start: "2025-09",
    end: "2025-09",
    skills: [
      "Go",
      "TypeScript",
      "React",
      "Cypher",
      "SQLite",
      "Docker",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
    ],
    links: {
      repo: "https://github.com/Sakrafux/family-tree-app",
      demo: "https://andreas-hell.ddns.net/apps/family-tree/",
    },
    important: false,
  },
];
