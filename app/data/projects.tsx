export type ProjectCategory = 'pro' | 'personal';

export interface ProjectsDTO {
    id: number;
    year: number;
    title: string;
    description: string;
    href: string;
    category: ProjectCategory;
    technos: TechnosDTO[];
}

export interface TechnosDTO {
    color: string;
    label: string;
}

const FIGMA_COLOR = "#60CC89";
const NEXT_COLOR = "#FFFFFF";
const NODE_COLOR = "#669C4F";
const REACT_COLOR = "#62D5FA";
const TAILWIND_COLOR = "#38BDF8";
const TYPESCRIPT_COLOR = "#3178C6";
const CLAUDE_COLOR = "#D97757";
const MCP_COLOR = "#FFFFFF";
const MARKDOWN_COLOR = "#A3A3A3";
const DOTNET_COLOR = "#512BD4";
const OPENTELEMETRY_COLOR = "#425CC7";
const KEYCLOAK_COLOR = "#DB1B1B";
const NUGET_COLOR = "#004880";
const JAVA_COLOR = "#F89820";
const KAFKA_COLOR = "#8B8B8B";
const MONGODB_COLOR = "#47A248";
const SNOWFLAKE_COLOR = "#29B5E8";

const REACT_NAME = "ReactJS";
const NEXT_NAME = "NextJS";
const NODE_NAME = "NodeJS";
const FIGMA_NAME = "Figma";
const TAILWIND_NAME = "Tailwind CSS";
const TYPESCRIPT_NAME = "TypeScript";
const CLAUDE_NAME = "Claude Code";
const MCP_NAME = "MCP";
const MARKDOWN_NAME = "Markdown";
const DOTNET_NAME = ".NET";
const OPENTELEMETRY_NAME = "OpenTelemetry";
const KEYCLOAK_NAME = "Keycloak";
const NUGET_NAME = "NuGet";
const JAVA_NAME = "Java";
const KAFKA_NAME = "Kafka";
const MONGODB_NAME = "MongoDB";
const SNOWFLAKE_NAME = "Snowflake";
const CLAUDE_AI_NAME = "Claude";
export const projects: ProjectsDTO[] = [
    {
        id: 1,
        year: 2019,
        title: "CT Lib",
        description: "Conception et maintenance des librairies .NET transverses (web, logging, métriques, OpenTelemetry, sécurité) utilisées par l'ensemble des équipes de développement Cdiscount.",
        href: "/projects/ct-lib",
        category: 'pro',
        technos: [
            {color: DOTNET_COLOR, label: DOTNET_NAME},
            {color: NUGET_COLOR, label: NUGET_NAME},
            {color: OPENTELEMETRY_COLOR, label: OPENTELEMETRY_NAME},
            {color: KEYCLOAK_COLOR, label: KEYCLOAK_NAME},
        ],
    },
    {
        id: 2,
        year: 2023,
        title: "SWORD",
        description: "Moteur d'enchères publicitaires plug-and-play qui maximise la visibilité des offres vendeurs et fournisseurs sur les emplacements les plus pertinents et rentables, en temps réel.",
        href: "/projects/sword",
        category: 'pro',
        technos: [
            {color: DOTNET_COLOR, label: DOTNET_NAME},
            {color: JAVA_COLOR, label: JAVA_NAME},
            {color: KAFKA_COLOR, label: KAFKA_NAME},
            {color: MONGODB_COLOR, label: MONGODB_NAME},
            {color: SNOWFLAKE_COLOR, label: SNOWFLAKE_NAME},
        ],
    },
    {
        id: 3,
        year: 2025,
        title: "MAAC",
        description: "Pilotage technique de l'acquisition payante (SEA, réseaux sociaux, affiliation) : exposition du catalogue produits aux plateformes partenaires et optimisation continue des campagnes marketing.",
        href: "/projects/maac",
        category: 'pro',
        technos: [
            {color: DOTNET_COLOR, label: DOTNET_NAME},
            {color: MONGODB_COLOR, label: MONGODB_NAME},
            {color: SNOWFLAKE_COLOR, label: SNOWFLAKE_NAME},
            {color: REACT_COLOR, label: REACT_NAME},
            {color: CLAUDE_COLOR, label: CLAUDE_AI_NAME},
        ],
    },
    {
        id: 4,
        year: 2023,
        title: "Portfolio",
        description: "Portfolio personnel présentant mes projets et compétences.",
        href: "/projects/portfolio",
        category: 'personal',
        technos: [
            {color: NEXT_COLOR, label: NEXT_NAME},
            {color: REACT_COLOR, label: REACT_NAME},
            {color: TAILWIND_COLOR, label: TAILWIND_NAME},
            {color: TYPESCRIPT_COLOR, label: TYPESCRIPT_NAME},
            {color: FIGMA_COLOR, label: FIGMA_NAME},
        ],
    },
    {
        id: 5,
        year: 2024,
        title: "Interactive Roadmap",
        description: "Roadmap interactive pour tickets Jira, avec moteur d'estimation d'avancement et de charge d'équipe.",
        href: "/projects/int-roa",
        category: 'personal',
        technos: [
            {color: NEXT_COLOR, label: NEXT_NAME},
            {color: REACT_COLOR, label: REACT_NAME},
            {color: TAILWIND_COLOR, label: TAILWIND_NAME},
            {color: TYPESCRIPT_COLOR, label: TYPESCRIPT_NAME},
        ],
    },
    {
        id: 6,
        year: 2025,
        title: "Peaksys Tech Plugin",
        description: "Squelette de plugins Claude Code qui structure un workflow de développement assisté par IA, de la spec à la livraison.",
        href: "/projects/peaksys-tech-plugin",
        category: 'pro',
        technos: [
            {color: CLAUDE_COLOR, label: CLAUDE_NAME},
            {color: NODE_COLOR, label: NODE_NAME},
            {color: MCP_COLOR, label: MCP_NAME},
            {color: MARKDOWN_COLOR, label: MARKDOWN_NAME},
        ],
    }
];