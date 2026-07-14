import type { SkillContext } from "@/data/skills.ts";
import type { LocalizedText, LocalizedList } from "@/i18n/ui";

export interface Project {
  id: string;
  title: LocalizedText;
  description: LocalizedList;
  context: SkillContext;
  org?: LocalizedText;
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
    id: "personal-portfolio-website",
    title: { en: "Personal Portfolio Website", de: "Personal Portfolio Website" },
    description: {
      en: [
        "I built a personal portfolio website to showcase my career, skills, and projects. It uses Astro for static generation, focusing on performance and minimal JavaScript.",
      ],
      de: [
        "I built a personal portfolio website to showcase my career, skills, and projects. It uses Astro for static generation, focusing on performance and minimal JavaScript.",
      ],
    },
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
    id: "glsp-langium-integration",
    title: {
      en: "Interweaving Graphical and Textual Modelling Using GLSP and Langium",
      de: "Interweaving Graphical and Textual Modelling Using GLSP and Langium",
    },
    description: {
      en: [
        "I developed an open-source framework designed to seamlessly integrate text-based grammar support into web-based graphical modeling environments. It bridges the gap between two distinct modeling paradigms by connecting the Graphical Language Server Platform (GLSP), used for diagrammatic views, with Langium, a parsing workbench for textual domain-specific languages. By embedding lightweight Monaco text editors directly into graphical diagram elements, the framework allows language engineers to implement advanced, context-aware textual sub-languages. These embedded editors provide rich IDE features like autocomplete, syntax highlighting, and live validation markers directly within the graphical layout.",
        "The core technical achievement of the framework lies in its unified abstract syntax graph and its sophisticated bi-directional synchronization. Textual elements are structurally aware of their exact position on the canvas, meaning a condition expression typed into a specific edge dynamically restricts its scope and filters autocomplete options based only on elements declared in preceding graphical nodes. An automated message bus manages communication between the components, ensuring that any modification to either the graphical layout or the text immediately triggers scope re-evaluation and highlights dangling references. This reusable architecture significantly lowers the implementation overhead for language engineers looking to build robust, hybrid modeling tools.",
      ],
      de: [
        "I developed an open-source framework designed to seamlessly integrate text-based grammar support into web-based graphical modeling environments. It bridges the gap between two distinct modeling paradigms by connecting the Graphical Language Server Platform (GLSP), used for diagrammatic views, with Langium, a parsing workbench for textual domain-specific languages. By embedding lightweight Monaco text editors directly into graphical diagram elements, the framework allows language engineers to implement advanced, context-aware textual sub-languages. These embedded editors provide rich IDE features like autocomplete, syntax highlighting, and live validation markers directly within the graphical layout.",
        "The core technical achievement of the framework lies in its unified abstract syntax graph and its sophisticated bi-directional synchronization. Textual elements are structurally aware of their exact position on the canvas, meaning a condition expression typed into a specific edge dynamically restricts its scope and filters autocomplete options based only on elements declared in preceding graphical nodes. An automated message bus manages communication between the components, ensuring that any modification to either the graphical layout or the text immediately triggers scope re-evaluation and highlights dangling references. This reusable architecture significantly lowers the implementation overhead for language engineers looking to build robust, hybrid modeling tools.",
      ],
    },
    context: "education",
    org: { en: "King's College London", de: "King's College London" },
    start: "2025-07",
    end: "2025-07",
    skills: ["GLSP", "Langium", "TypeScript", "Event-Driven Architecture (EDA)", "JavaScript"],
    links: {
      repo: "https://github.com/YourHarbour/glsp-langium-integration/tree/main/framework",
    },
    important: true,
  },
  {
    id: "mcp-server-glsp",
    title: {
      en: "Master's Thesis - Design and Implementation of a Model Context Protocol (MCP) Server for the Graphical Language Server Platform (GLSP)",
      de: "Master's Thesis - Design and Implementation of a Model Context Protocol (MCP) Server for the Graphical Language Server Platform (GLSP)",
    },
    description: {
      en: [
        "I designed and implemented a novel Model Context Protocol (MCP) server integration for the Graphical Language Server Platform (GLSP), establishing a structured framework for Large Language Models (LLMs) to act as stateful, interactive assistants within graphical modeling environments. By embedding the MCP server directly into GLSP's existing Node.js client-server architecture, the system shares session management and dependency injection containers within a single process, avoiding the overhead and fragility of traditional inter-process communication. The resulting reusable library, @eclipse-glsp/server-mcp, exposes generic tool and resource endpoints that allow AI agents to surgically interact with and alter diagram elements directly within the editor. Both client and server implementations were successfully accepted and merged into the official upstream Eclipse GLSP open-source repositories.",
        "Following a Design Science Research methodology, I evaluated the framework's performance against alternative serialization-based (JSON/XML) and text-DSL (PlantUML) interaction models using standardized modeling exercises. The empirical results demonstrated that the protocol-driven approach achieves near-perfect precision and recall in information retrieval while completely eliminating syntactic errors during model manipulation. Most notably during iterative model modifications, the MCP server prevents the structural corruption typical of generative re-generation methods by executing surgical API operations. Additionally, by incorporating domain optimizations such as identifier aliasing, Markdown serialization, and deterministic layout offloading, the architecture successfully reduced operational token costs and inference latency by approximately 50%.",
      ],
      de: [
        "I designed and implemented a novel Model Context Protocol (MCP) server integration for the Graphical Language Server Platform (GLSP), establishing a structured framework for Large Language Models (LLMs) to act as stateful, interactive assistants within graphical modeling environments. By embedding the MCP server directly into GLSP's existing Node.js client-server architecture, the system shares session management and dependency injection containers within a single process, avoiding the overhead and fragility of traditional inter-process communication. The resulting reusable library, @eclipse-glsp/server-mcp, exposes generic tool and resource endpoints that allow AI agents to surgically interact with and alter diagram elements directly within the editor. Both client and server implementations were successfully accepted and merged into the official upstream Eclipse GLSP open-source repositories.",
        "Following a Design Science Research methodology, I evaluated the framework's performance against alternative serialization-based (JSON/XML) and text-DSL (PlantUML) interaction models using standardized modeling exercises. The empirical results demonstrated that the protocol-driven approach achieves near-perfect precision and recall in information retrieval while completely eliminating syntactic errors during model manipulation. Most notably during iterative model modifications, the MCP server prevents the structural corruption typical of generative re-generation methods by executing surgical API operations. Additionally, by incorporating domain optimizations such as identifier aliasing, Markdown serialization, and deterministic layout offloading, the architecture successfully reduced operational token costs and inference latency by approximately 50%.",
      ],
    },
    context: "education",
    org: { en: "TU Wien", de: "TU Wien" },
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
    id: "glsp-browser-sandbox",
    title: {
      en: "Bachelor's Thesis - Browser-Only Implementation of GLSP as a Digital Sandbox Environment",
      de: "Bachelor's Thesis - Browser-Only Implementation of GLSP as a Digital Sandbox Environment",
    },
    description: {
      en: [
        "I developed a completely serverless, lightweight sandbox environment for the Graphical Language Server Protocol (GLSP), moving away from resource-intensive, server-backed platforms like Theia Cloud. Developed at TU Wien in collaboration with EclipseSource, the solution leverages advanced browser capabilities, including Node.js servers compiled directly into Web Workers and communication managed via custom JSON-RPC protocols, to enable instantaneous client-side rendering and static file hosting on GitHub Pages. By eliminating backend dependencies, the platform dramatically reduces server infrastructure costs while ensuring instant loading times and fluid interactivity for evaluating graphical modeling tools.",
        "Expanding beyond a simple showcase tool, the sandbox introduces a specialized meta-programming interface integrated with the Monaco Editor. Users can not only modify visual diagram elements but also directly edit and transpile TypeScript source files inside the browser to recompile the graphical language definitions live. This dual-capability provides an immersive developer workflow directly within a documentation site, allowing prospective adopters to instantly preview the structural code and the real-time visual output side by side.",
      ],
      de: [
        "I developed a completely serverless, lightweight sandbox environment for the Graphical Language Server Protocol (GLSP), moving away from resource-intensive, server-backed platforms like Theia Cloud. Developed at TU Wien in collaboration with EclipseSource, the solution leverages advanced browser capabilities, including Node.js servers compiled directly into Web Workers and communication managed via custom JSON-RPC protocols, to enable instantaneous client-side rendering and static file hosting on GitHub Pages. By eliminating backend dependencies, the platform dramatically reduces server infrastructure costs while ensuring instant loading times and fluid interactivity for evaluating graphical modeling tools.",
        "Expanding beyond a simple showcase tool, the sandbox introduces a specialized meta-programming interface integrated with the Monaco Editor. Users can not only modify visual diagram elements but also directly edit and transpile TypeScript source files inside the browser to recompile the graphical language definitions live. This dual-capability provides an immersive developer workflow directly within a documentation site, allowing prospective adopters to instantly preview the structural code and the real-time visual output side by side.",
      ],
    },
    context: "education",
    org: { en: "TU Wien", de: "TU Wien" },
    start: "2024-04",
    end: "2024-07",
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
    id: "realworld-tech-comparison",
    title: { en: "RealWorld Tech Comparison", de: "RealWorld Tech Comparison" },
    description: {
      en: [
        "I built a full-stack evaluation project designed to analyze how different backend and frontend technologies, as well as architectures, measure up under real-world conditions. A rigorous specification for a simple blog application (Conduit) is implemented across multiple tech stacks. This allows for direct comparison of various aspects. On the one hand, the developer experience such as code boilerplate, type safety, and ecosystem maturity, as well as raw performance metrics like response times, resource utilization, and throughput. The resulting data serves as a practical guide for choosing the optimal architecture based on measurable trade-offs, while also providing some insights into developer ergonomics.",
      ],
      de: [
        "I built a full-stack evaluation project designed to analyze how different backend and frontend technologies, as well as architectures, measure up under real-world conditions. A rigorous specification for a simple blog application (Conduit) is implemented across multiple tech stacks. This allows for direct comparison of various aspects. On the one hand, the developer experience such as code boilerplate, type safety, and ecosystem maturity, as well as raw performance metrics like response times, resource utilization, and throughput. The resulting data serves as a practical guide for choosing the optimal architecture based on measurable trade-offs, while also providing some insights into developer ergonomics.",
      ],
    },
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
      "Vitest",
      "Playwright",
      "k6",
    ],
    links: {
      repo: "https://github.com/Sakrafux/realworld-tech-comparison",
    },
    important: true,
  },
  {
    id: "family-tree-app",
    title: { en: "Family Tree Web Application", de: "Family Tree Web Application" },
    description: {
      en: [
        "I built a web application for visualizing and managing family trees, designed with a minimal but powerful stack. It combines a Go backend with an embedded graph database and a React + D3.js frontend for interactive visualization.",
      ],
      de: [
        "I built a web application for visualizing and managing family trees, designed with a minimal but powerful stack. It combines a Go backend with an embedded graph database and a React + D3.js frontend for interactive visualization.",
      ],
    },
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
  {
    id: "rum",
    title: { en: "Real User Monitoring (RUM)", de: "Real User Monitoring (RUM)" },
    description: {
      en: [
        "As a Backend Software Engineer within the Real User Monitoring (RUM) Core team at Dynatrace, I contribute to the core high-load, high-availability ingestion pipelines that capture and process real-time user experience data at scale. Working primarily with Java, our team prototypes, implements, and optimizes backend features, ensuring system components maintain peak performance and resilience under heavy loads. Collaborating closely with cross-functional teams and product architects, I take end-to-end ownership of backend services, from initial design and debugging to monitoring and analyzing their live performance directly within the Dynatrace platform.",
      ],
      de: [
        "As a Backend Software Engineer within the Real User Monitoring (RUM) Core team at Dynatrace, I contribute to the core high-load, high-availability ingestion pipelines that capture and process real-time user experience data at scale. Working primarily with Java, our team prototypes, implements, and optimizes backend features, ensuring system components maintain peak performance and resilience under heavy loads. Collaborating closely with cross-functional teams and product architects, I take end-to-end ownership of backend services, from initial design and debugging to monitoring and analyzing their live performance directly within the Dynatrace platform.",
      ],
    },
    context: "work",
    org: { en: "Dynatrace", de: "Dynatrace" },
    start: "2026-04",
    end: null,
    skills: [
      "Java",
      "Dynatrace",
      "Service-oriented Architecture (SOA)",
      "Java Microbenchmark Harness (JMH)",
      "Event-Driven Architecture (EDA)",
      "Jenkins",
      "Monolith",
      "REST",
      "JUnit & Mockito",
      "Claude Code",
    ],
    links: {},
    important: true,
  },
  {
    id: "justice-it-modernization",
    title: {
      en: "IT Modernization at the German Federal Ministry of Justice",
      de: "IT Modernization at the German Federal Ministry of Justice",
    },
    description: {
      en: [
        "After multiple years on ice, this legacy Java project was resurrected at the behest of the German Federal Ministry of Justice. Our team's mission was twofold: first, a major modernization effort to upgrade the outdated codebase from Java 11 to Java 17; and second, the successful implementation and completion of the remaining project requirements. Navigating an inherited, unfinished architecture required both deep technical troubleshooting to resolve technical debt and a goal-oriented approach to deliver on a critical public sector mandate.",
      ],
      de: [
        "After multiple years on ice, this legacy Java project was resurrected at the behest of the German Federal Ministry of Justice. Our team's mission was twofold: first, a major modernization effort to upgrade the outdated codebase from Java 11 to Java 17; and second, the successful implementation and completion of the remaining project requirements. Navigating an inherited, unfinished architecture required both deep technical troubleshooting to resolve technical debt and a goal-oriented approach to deliver on a critical public sector mandate.",
      ],
    },
    context: "work",
    org: { en: "Accenture", de: "Accenture" },
    start: "2025-10",
    end: "2026-03",
    skills: [
      "Java",
      "SQL",
      "Spring Boot",
      "PostgreSQL",
      "Service-oriented Architecture (SOA)",
      "Docker",
      "Jenkins",
      "SonarQube",
      "Monolith",
      "REST",
      "JUnit & Mockito",
    ],
    links: {},
    important: true,
  },
  {
    id: "bmf-services",
    title: {
      en: "Streamlining Independent Services at the Austrian BMF",
      de: "Streamlining Independent Services at the Austrian BMF",
    },
    description: {
      en: [
        "As part of a large-scale IT modernization initiative for the Austrian Ministry of Finance (BMF), this project focused on unifying and streamlining how the ministry handles dozens of independent services. Our team performed a complete, ground-up reimplementation of core software that had been running for over twenty years, updating it to meet modern requirements. Built on a distributed microservices architecture using Java, Apache Kafka for event streaming, and Camunda for business process orchestration, the new system replaced rigid, legacy workflows with a highly scalable, event-driven framework designed for long-term uniformity and efficiency. As lead developer, I oversaw the developers of the team, engaging in constant communication with both technical and functional stakeholders.",
      ],
      de: [
        "As part of a large-scale IT modernization initiative for the Austrian Ministry of Finance (BMF), this project focused on unifying and streamlining how the ministry handles dozens of independent services. Our team performed a complete, ground-up reimplementation of core software that had been running for over twenty years, updating it to meet modern requirements. Built on a distributed microservices architecture using Java, Apache Kafka for event streaming, and Camunda for business process orchestration, the new system replaced rigid, legacy workflows with a highly scalable, event-driven framework designed for long-term uniformity and efficiency. As lead developer, I oversaw the developers of the team, engaging in constant communication with both technical and functional stakeholders.",
      ],
    },
    context: "work",
    org: { en: "Accenture", de: "Accenture" },
    start: "2024-07",
    end: "2025-02",
    skills: [
      "Java",
      "Spring Boot",
      "TypeScript",
      "React",
      "Microservice",
      "Event-Driven Architecture (EDA)",
      "SQL",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "SonarQube",
      "ArgoCD",
      "OpenShift",
      "REST",
      "N-Tier",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JUnit & Mockito",
      "Vitest",
    ],
    links: {},
    important: true,
  },
  {
    id: "bmf-deadline",
    title: {
      en: "Central Deadline Management at the Austrian BMF",
      de: "Central Deadline Management at the Austrian BMF",
    },
    description: {
      en: [
        "This project was a core component of a major IT modernization initiative for the Austrian Ministry of Finance (BMF), where our team performed the complete, ground-up reimplementation of a 20+ year-old software system to meet modern operational requirements. The primary objective was building a robust, centralized deadline handling system. To achieve this, we designed the solution using a Service-Oriented Architecture (SOA) and decoupled microfrontends, utilizing Java, Apache Kafka, and Camunda to orchestrate complex workflows. By implementing the CQRS (Command Query Responsibility Segregation) pattern, the new system effectively separates read and write operations, ensuring high performance, scalability, and data consistency for deadline handling.",
      ],
      de: [
        "This project was a core component of a major IT modernization initiative for the Austrian Ministry of Finance (BMF), where our team performed the complete, ground-up reimplementation of a 20+ year-old software system to meet modern operational requirements. The primary objective was building a robust, centralized deadline handling system. To achieve this, we designed the solution using a Service-Oriented Architecture (SOA) and decoupled microfrontends, utilizing Java, Apache Kafka, and Camunda to orchestrate complex workflows. By implementing the CQRS (Command Query Responsibility Segregation) pattern, the new system effectively separates read and write operations, ensuring high performance, scalability, and data consistency for deadline handling.",
      ],
    },
    context: "work",
    org: { en: "Accenture", de: "Accenture" },
    start: "2022-09",
    end: "2024-06",
    skills: [
      "Java",
      "Spring Boot",
      "TypeScript",
      "React",
      "Microfrontend",
      "Service-oriented Architecture (SOA)",
      "Event-Driven Architecture (EDA)",
      "SQL",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "SonarQube",
      "ArgoCD",
      "OpenShift",
      "Prometheus & Grafana",
      "REST",
      "N-Tier",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JUnit & Mockito",
      "Vitest",
    ],
    links: {},
    important: true,
  },
  {
    id: "bmf-component-library",
    title: {
      en: "React Component Library at the Austrian BMF",
      de: "React Component Library at the Austrian BMF",
    },
    description: {
      en: [
        "Serving as Lead Developer for a key segment of a massive IT modernization initiative for the Austrian Ministry of Finance (BMF), I took ownership of a central React component library designed to unify the ministry's digital ecosystem. Stepping into a project that initially lacked proper development practices, I established rigorous engineering standards, code quality baselines, and a structured delivery pipeline together with the team. In addition to driving the technical execution, I actively participated in the high-level design decisions, collaborating with cross-functional teams to ensure the shared component architecture was scalable, accessible, and aligned with the overarching modernization goals.",
      ],
      de: [
        "Serving as Lead Developer for a key segment of a massive IT modernization initiative for the Austrian Ministry of Finance (BMF), I took ownership of a central React component library designed to unify the ministry's digital ecosystem. Stepping into a project that initially lacked proper development practices, I established rigorous engineering standards, code quality baselines, and a structured delivery pipeline together with the team. In addition to driving the technical execution, I actively participated in the high-level design decisions, collaborating with cross-functional teams to ensure the shared component architecture was scalable, accessible, and aligned with the overarching modernization goals.",
      ],
    },
    context: "work",
    org: { en: "Accenture", de: "Accenture" },
    start: "2023-07",
    end: "2023-12",
    skills: [
      "TypeScript",
      "React",
      "Jenkins",
      "SonarQube",
      "Jest",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
    links: {},
    important: true,
  },
  {
    id: "bmf-camunda-prototype",
    title: {
      en: "Camunda Proof-of-Concept at the Austrian BMF",
      de: "Camunda Proof-of-Concept at the Austrian BMF",
    },
    description: {
      en: [
        "As part of the large-scale IT modernization for the Austrian Ministry of Finance, our team developed a targeted prototype designed to demonstrate the capabilities and integration potential of Camunda for business process orchestration. The proof-of-concept seamlessly connected a robust backend ecosystem, built with Java and Apache Kafka for event-driven streaming, with a modern, responsive frontend implemented in Next.js. By delivering this functional prototype, we successfully validated the architecture's viability, paving the way for data-driven decisions on orchestrating complex workflows across the ministry's broader modernization pipeline.",
      ],
      de: [
        "As part of the large-scale IT modernization for the Austrian Ministry of Finance, our team developed a targeted prototype designed to demonstrate the capabilities and integration potential of Camunda for business process orchestration. The proof-of-concept seamlessly connected a robust backend ecosystem, built with Java and Apache Kafka for event-driven streaming, with a modern, responsive frontend implemented in Next.js. By delivering this functional prototype, we successfully validated the architecture's viability, paving the way for data-driven decisions on orchestrating complex workflows across the ministry's broader modernization pipeline.",
      ],
    },
    context: "work",
    org: { en: "Accenture", de: "Accenture" },
    start: "2022-03",
    end: "2022-08",
    skills: [
      "Java",
      "Spring Boot",
      "TypeScript",
      "Next.js",
      "React",
      "SQL",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "SonarQube",
      "REST",
      "N-Tier",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JUnit & Mockito",
      "Jest",
    ],
    links: {},
    important: true,
  },
  {
    id: "real-estate-subsystem",
    title: {
      en: "Internal Real Estate Management Sub-System",
      de: "Internal Real Estate Management Sub-System",
    },
    description: {
      en: [
        "I contributed to a sub-system for the internal real estate management software ecosystem for a local landlord and real estate agency.",
      ],
      de: [
        "I contributed to a sub-system for the internal real estate management software ecosystem for a local landlord and real estate agency.",
      ],
    },
    context: "work",
    start: "2021-08",
    end: "2021-12",
    skills: ["Java", "Spring Boot", "SQL", "JavaScript", "React", "Docker", "JUnit & Mockito"],
    links: {},
    important: true,
  },
  {
    id: "svs-it-modernization",
    title: {
      en: "Project as Part of the IT Modernization at the Austrian SVS",
      de: "Project as Part of the IT Modernization at the Austrian SVS",
    },
    description: {
      en: [
        "Joining at the tail end of a major IT modernization for the Austrian Social Insurance Institution for the Self-Employed (SVS), I contributed to a service that originally began as a small prototype but ultimately exploded into a massive, five-year initiative spanning four development teams. Working as an intern within this large-scale environment, my efforts were focused on stabilizing the rapidly expanded system by aggressively increasing automated test coverage and debugging critical runtime issues. This role required diving deep into a complex, multi-team codebase to identify edge cases, resolve regressions, and ensure the software met production-grade reliability standards for public service delivery.",
      ],
      de: [
        "Joining at the tail end of a major IT modernization for the Austrian Social Insurance Institution for the Self-Employed (SVS), I contributed to a service that originally began as a small prototype but ultimately exploded into a massive, five-year initiative spanning four development teams. Working as an intern within this large-scale environment, my efforts were focused on stabilizing the rapidly expanded system by aggressively increasing automated test coverage and debugging critical runtime issues. This role required diving deep into a complex, multi-team codebase to identify edge cases, resolve regressions, and ensure the software met production-grade reliability standards for public service delivery.",
      ],
    },
    context: "work",
    org: { en: "Accenture", de: "Accenture" },
    start: "2021-02",
    end: "2021-07",
    skills: ["Java", "Spring", "SQL", "JavaScript", "Monolith", "Docker", "JUnit & Mockito"],
    links: {},
    important: true,
  },
];
