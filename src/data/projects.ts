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
    title: { en: "Personal Portfolio Website", de: "Persönliche Portfolio-Website" },
    description: {
      en: [
        "I built a personal portfolio website to showcase my career, skills, and projects. It uses Astro for static generation, focusing on performance and minimal JavaScript.",
      ],
      de: [
        "Ich habe eine persönliche Portfolio-Website erstellt, um meinen beruflichen Werdegang, meine Fähigkeiten und meine Projekte zu präsentieren. Die Website nutzt Astro zur statischen Generierung und legt dabei den Schwerpunkt auf Leistung und minimalen JavaScript-Einsatz.",
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
      de: "Verflechtung von grafischer und textueller Modellierung mit GLSP und Langium",
    },
    description: {
      en: [
        "I developed an open-source framework designed to seamlessly integrate text-based grammar support into web-based graphical modeling environments. It bridges the gap between two distinct modeling paradigms by connecting the Graphical Language Server Platform (GLSP), used for diagrammatic views, with Langium, a parsing workbench for textual domain-specific languages. By embedding lightweight Monaco text editors directly into graphical diagram elements, the framework allows language engineers to implement advanced, context-aware textual sub-languages. These embedded editors provide rich IDE features like autocomplete, syntax highlighting, and live validation markers directly within the graphical layout.",
        "The core technical achievement of the framework lies in its unified abstract syntax graph and its sophisticated bi-directional synchronization. Textual elements are structurally aware of their exact position on the canvas, meaning a condition expression typed into a specific edge dynamically restricts its scope and filters autocomplete options based only on elements declared in preceding graphical nodes. An automated message bus manages communication between the components, ensuring that any modification to either the graphical layout or the text immediately triggers scope re-evaluation and highlights dangling references. This reusable architecture significantly lowers the implementation overhead for language engineers looking to build robust, hybrid modeling tools.",
      ],
      de: [
        "Ich habe ein Open-Source-Framework entwickelt, das darauf ausgelegt ist, textbasierte Grammatikunterstützung nahtlos in webbasierte grafische Modellierungsumgebungen zu integrieren. Es überbrückt die Kluft zwischen zwei unterschiedlichen Modellierungsparadigmen, indem es die Graphical Language Server Platform (GLSP), die für diagrammatische Ansichten verwendet wird, mit Langium verbindet, einer Parsing-Workbench für textbasierte domänenspezifische Sprachen. Durch die direkte Einbettung von schlanken Monaco-Texteditoren in grafische Diagrammelemente ermöglicht das Framework Sprachingenieuren die Implementierung fortschrittlicher, kontextbezogener Text-Subsprachen. Diese eingebetteten Editoren bieten umfangreiche IDE-Funktionen wie Autovervollständigung, Syntaxhervorhebung und Markierungen zur Live-Validierung direkt innerhalb des grafischen Layouts.",
        "Die zentrale technische Errungenschaft des Frameworks liegt in seinem einheitlichen abstrakten Syntaxgraphen und seiner ausgeklügelten bidirektionalen Synchronisation. Textelemente erkennen strukturell ihre genaue Position auf der Arbeitsfläche, was bedeutet, dass ein in eine bestimmte Kante eingegebener Bedingungsausdruck dessen Geltungsbereich dynamisch einschränkt und die Vorschläge für die automatische Vervollständigung ausschließlich auf der Grundlage der in den vorangehenden grafischen Knoten deklarierten Elemente filtert. Ein automatisierter Nachrichtenbus steuert die Kommunikation zwischen den Komponenten und stellt sicher, dass jede Änderung am grafischen Layout oder am Text sofort eine Neubewertung des Geltungsbereichs auslöst und fehlende Verweise hervorhebt. Diese wiederverwendbare Architektur senkt den Implementierungsaufwand für Sprachingenieure, die robuste, hybride Modellierungswerkzeuge entwickeln möchten, erheblich.",
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
      de: "Diplomarbeit - Design and Implementation of a Model Context Protocol (MCP) Server for the Graphical Language Server Platform (GLSP)",
    },
    description: {
      en: [
        "I designed and implemented a novel Model Context Protocol (MCP) server integration for the Graphical Language Server Platform (GLSP), establishing a structured framework for Large Language Models (LLMs) to act as stateful, interactive assistants within graphical modeling environments. By embedding the MCP server directly into GLSP's existing Node.js client-server architecture, the system shares session management and dependency injection containers within a single process, avoiding the overhead and fragility of traditional inter-process communication. The resulting reusable library, @eclipse-glsp/server-mcp, exposes generic tool and resource endpoints that allow AI agents to surgically interact with and alter diagram elements directly within the editor. Both client and server implementations were successfully accepted and merged into the official upstream Eclipse GLSP open-source repositories.",
        "Following a Design Science Research methodology, I evaluated the framework's performance against alternative serialization-based (JSON/XML) and text-DSL (PlantUML) interaction models using standardized modeling exercises. The empirical results demonstrated that the protocol-driven approach achieves near-perfect precision and recall in information retrieval while completely eliminating syntactic errors during model manipulation. Most notably during iterative model modifications, the MCP server prevents the structural corruption typical of generative re-generation methods by executing surgical API operations. Additionally, by incorporating domain optimizations such as identifier aliasing, Markdown serialization, and deterministic layout offloading, the architecture successfully reduced operational token costs and inference latency by approximately 50%.",
      ],
      de: [
        "Ich habe eine neuartige Integration eines Model Context Protocol (MCP)-Servers für die Graphical Language Server Platform (GLSP) entworfen und implementiert und damit ein strukturiertes Rahmenwerk geschaffen, in dem große Sprachmodelle (LLMs) als zustandsbehaftete, interaktive Assistenten innerhalb grafischer Modellierungsumgebungen fungieren können. Durch die direkte Einbindung des MCP-Servers in die bestehende Node.js-Client-Server-Architektur von GLSP nutzt das System gemeinsame Container für die Sitzungsverwaltung und die Abhängigkeitsinjektion innerhalb eines einzigen Prozesses und vermeidet so den Overhead und die Anfälligkeit herkömmlicher Interprozesskommunikation. Die daraus resultierende wiederverwendbare Bibliothek @eclipse-glsp/server-mcp stellt generische Tool- und Ressourcen-Endpunkte bereit, die es KI-Agenten ermöglichen, präzise mit Diagrammelementen zu interagieren und diese direkt im Editor zu verändern. Sowohl die Client- als auch die Server-Implementierung wurden erfolgreich angenommen und in die offiziellen  Upstream-Open-Source-Repositories von Eclipse GLSP integriert.",
        "Unter Anwendung einer Design-Science-Research-Methodik habe ich die Leistungsfähigkeit des Frameworks im Vergleich zu alternativen, auf Serialisierung basierenden (JSON/XML) und Text-DSL-basierten (PlantUML) Interaktionsmodellen anhand standardisierter Modellierungsübungen bewertet. Die empirischen Ergebnisse zeigten, dass der protokollgesteuerte Ansatz bei der Informationsgewinnung nahezu perfekte Präzision und Recall erzielt und gleichzeitig syntaktische Fehler bei der Modellbearbeitung vollständig eliminiert. Insbesondere bei iterativen Modelländerungen verhindert der MCP-Server die für generative Regenerierungsmethoden typische strukturelle Beschädigung durch die Ausführung präziser API-Operationen. Durch die Einbindung domänenbezogener Optimierungen wie Identifikator-Aliasing, Markdown-Serialisierung und deterministisches Layout-Offloading gelang es der Architektur zudem, die operativen Token-Kosten und die Inferenzlatenz um etwa 50 % zu reduzieren.",
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
      de: "Bachelorarbeit - Browser-Only Implementation of GLSP as a Digital Sandbox Environment",
    },
    description: {
      en: [
        "I developed a completely serverless, lightweight sandbox environment for the Graphical Language Server Protocol (GLSP), moving away from resource-intensive, server-backed platforms like Theia Cloud. Developed at TU Wien in collaboration with EclipseSource, the solution leverages advanced browser capabilities, including Node.js servers compiled directly into Web Workers and communication managed via custom JSON-RPC protocols, to enable instantaneous client-side rendering and static file hosting on GitHub Pages. By eliminating backend dependencies, the platform dramatically reduces server infrastructure costs while ensuring instant loading times and fluid interactivity for evaluating graphical modeling tools.",
        "Expanding beyond a simple showcase tool, the sandbox introduces a specialized meta-programming interface integrated with the Monaco Editor. Users can not only modify visual diagram elements but also directly edit and transpile TypeScript source files inside the browser to recompile the graphical language definitions live. This dual-capability provides an immersive developer workflow directly within a documentation site, allowing prospective adopters to instantly preview the structural code and the real-time visual output side by side.",
      ],
      de: [
        "Ich habe eine vollständig serverlose, ressourcenschonende Sandbox-Umgebung für das Graphical Language Server Protocol (GLSP) entwickelt und mich damit von ressourcenintensiven, servergestützten Plattformen wie Theia Cloud gelöst. Die an der TU Wien in Zusammenarbeit mit EclipseSource entwickelte Lösung nutzt fortschrittliche Browserfunktionen, darunter Node.js-Server, die direkt in Web Workers kompiliert werden, sowie die über benutzerdefinierte JSON-RPC-Protokolle verwaltete Kommunikation, um ein sofortiges clientseitiges Rendering und das Hosting statischer Dateien auf GitHub Pages zu ermöglichen. Durch den Wegfall von Backend-Abhängigkeiten senkt die Plattform die Kosten für die Serverinfrastruktur erheblich und gewährleistet gleichzeitig sofortige Ladezeiten und flüssige Interaktivität bei der Bewertung grafischer Modellierungstools.",
        "Die Sandbox ist mehr als nur ein einfaches Demo-Tool und bietet eine spezielle Metaprogrammier-Schnittstelle, die in den Monaco-Editor integriert ist. Benutzer können nicht nur visuelle Diagrammelemente ändern, sondern auch direkt TypeScript-Quelldateien im Browser bearbeiten und transpilieren, um die grafischen Sprachdefinitionen in Echtzeit neu zu kompilieren. Diese doppelte Funktionalität ermöglicht einen immersiven Entwickler-Workflow direkt innerhalb einer Dokumentationsseite, sodass potenzielle Nutzer sofort eine Vorschau auf den strukturellen Code und die visuelle Ausgabe in Echtzeit nebeneinander anzeigen können.",
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
        "Ich habe ein Full-Stack-Evaluierungsprojekt entwickelt, mit dem analysiert werden soll, wie sich verschiedene Backend- und Frontend-Technologien sowie Architekturen unter realen Bedingungen bewähren. Eine strenge Spezifikation für eine einfache Blog-Anwendung (Conduit) wird über mehrere Tech-Stacks hinweg implementiert. Dies ermöglicht einen direkten Vergleich verschiedener Aspekte. Einerseits die Entwicklererfahrung, wie beispielsweise Code-Boilerplate, Typsicherheit und die Reife des Ökosystems, sowie reine Leistungskennzahlen wie Antwortzeiten, Ressourcenauslastung und Durchsatz. Die daraus resultierenden Daten dienen als praktischer Leitfaden für die Auswahl der optimalen Architektur auf der Grundlage messbarer Kompromisse und liefern gleichzeitig Einblicke in die Entwicklerergonomie.",
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
        "Ich habe eine Webanwendung zur Visualisierung und Verwaltung von Stammbäumen entwickelt, die auf einem minimalistischen, aber leistungsstarken Stack basiert. Sie kombiniert ein Go-Backend mit einer eingebetteten Graphdatenbank und einem React- und D3.js-Frontend für die interaktive Visualisierung.",
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
        "Als Backend-Softwareentwickler im Real User Monitoring (RUM)-Kernteam bei Dynatrace arbeite ich an den zentralen, hochbelastbaren und hochverfügbaren Erfassungspipelines mit, die Nutzererfahrungsdaten in Echtzeit und in großem Maßstab erfassen und verarbeiten. Unser Team arbeitet hauptsächlich mit Java und entwickelt Prototypen, implementiert und optimiert Backend-Funktionen, um sicherzustellen, dass die Systemkomponenten auch unter hoher Belastung ihre maximale Leistung und Ausfallsicherheit beibehalten. In enger Zusammenarbeit mit funktionsübergreifenden Teams und Produktarchitekten übernehme ich die End-to-End-Verantwortung für Backend-Dienste – vom ersten Entwurf über das Debugging bis hin zur Überwachung und Analyse ihrer Live-Leistung direkt innerhalb der Dynatrace-Plattform.",
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
      de: "IT-Modernisierung im Bundesjustizministerium",
    },
    description: {
      en: [
        "After multiple years on ice, this legacy Java project was resurrected at the behest of the German Federal Ministry of Justice. Our team's mission was twofold: first, a major modernization effort to upgrade the outdated codebase from Java 11 to Java 17; and second, the successful implementation and completion of the remaining project requirements. Navigating an inherited, unfinished architecture required both deep technical troubleshooting to resolve technical debt and a goal-oriented approach to deliver on a critical public sector mandate.",
      ],
      de: [
        "Nach mehreren Jahren auf Eis wurde dieses alte Java-Projekt auf Veranlassung des Bundesjustizministeriums wiederbelebt. Die Aufgabe unseres Teams war zweigeteilt: Zum einen ging es um eine umfassende Modernisierung, um die veraltete Codebasis von Java 11 auf Java 17 zu aktualisieren, und zum anderen um die erfolgreiche Umsetzung und Fertigstellung der verbleibenden Projektanforderungen. Der Umgang mit einer übernommenen, unvollendeten Architektur erforderte sowohl fundierte technische Fehlerbehebung zur Beseitigung technischer Schulden als auch einen zielorientierten Ansatz, um einen wichtigen Auftrag des öffentlichen Sektors zu erfüllen.",
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
      de: "Optimierung der unabhängigen Dienstleistungen beim österreichischen BMF",
    },
    description: {
      en: [
        "As part of a large-scale IT modernization initiative for the Austrian Ministry of Finance (BMF), this project focused on unifying and streamlining how the ministry handles dozens of independent services. Our team performed a complete, ground-up reimplementation of core software that had been running for over twenty years, updating it to meet modern requirements. Built on a distributed microservices architecture using Java, Apache Kafka for event streaming, and Camunda for business process orchestration, the new system replaced rigid, legacy workflows with a highly scalable, event-driven framework designed for long-term uniformity and efficiency. As lead developer, I oversaw the developers of the team, engaging in constant communication with both technical and functional stakeholders.",
      ],
      de: [
        "Im Rahmen einer groß angelegten IT-Modernisierungsinitiative für das österreichische Bundesministerium für Finanzen (BMF) konzentrierte sich dieses Projekt auf die Vereinheitlichung und Optimierung der Abläufe, mit denen das Ministerium Dutzende unabhängiger Dienste verwaltet. Unser Team führte eine vollständige Neuimplementierung der Kernsoftware durch, die bereits seit über zwanzig Jahren im Einsatz war, und passte sie an moderne Anforderungen an. Das neue System basiert auf einer verteilten Microservices-Architektur unter Verwendung von Java, Apache Kafka für das Event-Streaming und Camunda für die Geschäftsprozessorchestrierung. Es ersetzte starre, veraltete Arbeitsabläufe durch ein hochskalierbares, ereignisgesteuertes Framework, das auf langfristige Einheitlichkeit und Effizienz ausgelegt ist. Als leitender Entwickler beaufsichtigte ich die Entwickler des Teams und stand in ständigem Austausch mit den technischen und funktionalen Stakeholdern.",
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
      de: "Fristenüberwachung beim österreichischen BMF",
    },
    description: {
      en: [
        "This project was a core component of a major IT modernization initiative for the Austrian Ministry of Finance (BMF), where our team performed the complete, ground-up reimplementation of a 20+ year-old software system to meet modern operational requirements. The primary objective was building a robust, centralized deadline handling system. To achieve this, we designed the solution using a Service-Oriented Architecture (SOA) and decoupled microfrontends, utilizing Java, Apache Kafka, and Camunda to orchestrate complex workflows. By implementing the CQRS (Command Query Responsibility Segregation) pattern, the new system effectively separates read and write operations, ensuring high performance, scalability, and data consistency for deadline handling.",
      ],
      de: [
        "Dieses Projekt war ein zentraler Bestandteil einer groß angelegten IT-Modernisierungsinitiative für das österreichische Bundesministerium für Finanzen (BMF), in deren Rahmen unser Team die vollständige Neuimplementierung eines über 20 Jahre alten Softwaresystems von Grund auf durchführte, um modernen betrieblichen Anforderungen gerecht zu werden. Das vorrangige Ziel war der Aufbau eines robusten, zentralisierten Systems zur Fristabwicklung. Um dies zu erreichen, entwarfen wir die Lösung auf Basis einer serviceorientierten Architektur (SOA) und entkoppelter Mikrofrontends, wobei wir Java, Apache Kafka und Camunda zur Orchestrierung komplexer Workflows einsetzten. Durch die Implementierung des CQRS-Musters (Command Query Responsibility Segregation) trennt das neue System Lese- und Schreibvorgänge effektiv voneinander und gewährleistet so hohe Leistung, Skalierbarkeit und Datenkonsistenz bei der Fristabwicklung.",
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
      de: "React-Komponentenbibliothek beim österreichischen BMF",
    },
    description: {
      en: [
        "Serving as Lead Developer for a key segment of a massive IT modernization initiative for the Austrian Ministry of Finance (BMF), I took ownership of a central React component library designed to unify the ministry's digital ecosystem. Stepping into a project that initially lacked proper development practices, I established rigorous engineering standards, code quality baselines, and a structured delivery pipeline together with the team. In addition to driving the technical execution, I actively participated in the high-level design decisions, collaborating with cross-functional teams to ensure the shared component architecture was scalable, accessible, and aligned with the overarching modernization goals.",
      ],
      de: [
        "Als leitender Entwickler für einen Schlüsselbereich einer groß angelegten IT-Modernisierungsinitiative des österreichischen Bundesministeriums für Finanzen (BMF) war ich verantwortlich für eine zentrale React-Komponentenbibliothek, die zur Vereinheitlichung des digitalen Ökosystems des Ministeriums konzipiert wurde. Als ich in ein Projekt einstieg, in dem es anfangs an geeigneten Entwicklungspraktiken mangelte, etablierte ich gemeinsam mit dem Team strenge technische Standards, Grundsätze für die Codequalität und eine strukturierte Lieferpipeline. Neben der Leitung der technischen Umsetzung war ich aktiv an den übergeordneten Designentscheidungen beteiligt und arbeitete mit funktionsübergreifenden Teams zusammen, um sicherzustellen, dass die gemeinsame Komponentenarchitektur skalierbar, barrierefrei und auf die übergeordneten Modernisierungsziele abgestimmt war.",
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
      de: "Camunda Proof-of-Concept beim österreichischen BMF",
    },
    description: {
      en: [
        "As part of the large-scale IT modernization for the Austrian Ministry of Finance, our team developed a targeted prototype designed to demonstrate the capabilities and integration potential of Camunda for business process orchestration. The proof-of-concept seamlessly connected a robust backend ecosystem, built with Java and Apache Kafka for event-driven streaming, with a modern, responsive frontend implemented in Next.js. By delivering this functional prototype, we successfully validated the architecture's viability, paving the way for data-driven decisions on orchestrating complex workflows across the ministry's broader modernization pipeline.",
      ],
      de: [
        "Im Rahmen der groß angelegten IT-Modernisierung für das österreichische Finanzministerium entwickelte unser Team einen zielgerichteten Prototyp, um die Fähigkeiten und das Integrationspotenzial von Camunda für die Geschäftsprozessorchestrierung zu demonstrieren. Der Proof-of-Concept verband nahtlos ein robustes Backend-Ökosystem, das mit Java und Apache Kafka für ereignisgesteuertes Streaming aufgebaut wurde, mit einem modernen, responsiven Frontend, das in Next.js implementiert wurde. Mit der Bereitstellung dieses funktionsfähigen Prototyps haben wir die Tragfähigkeit der Architektur erfolgreich validiert und damit den Weg für datengestützte Entscheidungen zur Orchestrierung komplexer Workflows im Rahmen der umfassenden Modernisierungsmaßnahmen des Ministeriums geebnet.",
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
      de: "Teilsystem für die interne Immobilienverwaltung",
    },
    description: {
      en: [
        "I contributed to a sub-system for the internal real estate management software ecosystem for a local landlord and real estate agency.",
      ],
      de: [
        "Ich habe an einem Teilsystem für das interne Software-Ökosystem zur Immobilienverwaltung eines lokalen Vermieters und einer Immobilienagentur mitgearbeitet.",
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
      de: "Projekt im Rahmen der IT-Modernisierung bei der österreichischen SVS",
    },
    description: {
      en: [
        "Joining at the tail end of a major IT modernization for the Austrian Social Insurance Institution for the Self-Employed (SVS), I contributed to a service that originally began as a small prototype but ultimately exploded into a massive, five-year initiative spanning four development teams. Working as an intern within this large-scale environment, my efforts were focused on stabilizing the rapidly expanded system by aggressively increasing automated test coverage and debugging critical runtime issues. This role required diving deep into a complex, multi-team codebase to identify edge cases, resolve regressions, and ensure the software met production-grade reliability standards for public service delivery.",
      ],
      de: [
        "Ich stieg gegen Ende einer umfassenden IT-Modernisierung bei der Sozialversicherungsanstalt für Selbstständige (SVS) ein und wirkte an einem Dienst mit, der ursprünglich als kleiner Prototyp begann, sich aber schließlich zu einer groß angelegten, fünfjährigen Initiative entwickelte, an der vier Entwicklungsteams beteiligt waren. Als Praktikant in diesem groß angelegten Umfeld konzentrierten sich meine Bemühungen darauf, das rasch expandierende System zu stabilisieren, indem ich die Abdeckung durch automatisierte Tests konsequent ausbaute und kritische Laufzeitprobleme behob. Diese Aufgabe erforderte ein tiefes Eintauchen in eine komplexe, von mehreren Teams gemeinsam gepflegte Codebasis, um Randfälle zu identifizieren, Regressionen zu beheben und sicherzustellen, dass die Software die für die Erbringung öffentlicher Dienstleistungen erforderlichen Zuverlässigkeitsstandards auf Produktionsniveau erfüllte.",
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
