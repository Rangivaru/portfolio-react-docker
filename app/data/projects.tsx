export interface ProjectsDTO {
    id: number;
    year: number;
    title: string;
    description: string;
    href: string;
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

const REACT_NAME = "ReactJS";
const NEXT_NAME = "NextJS";
const NODE_NAME = "NodeJS";
const FIGMA_NAME = "Figma";
const TAILWIND_NAME = "Tailwind CSS";
const TYPESCRIPT_NAME = "TypeScript";
export const projects: ProjectsDTO[] = [
    
    {
        id: 1,
        year: 2024,
        title: "Interactive Roadmap",
        description: "Roadmap interactive pour tickets Jira, avec moteur d'estimation d'avancement et de charge d'équipe.",
        href: "/projects/int-roa",
        technos: [
            {color: NEXT_COLOR, label: NEXT_NAME},
            {color: REACT_COLOR, label: REACT_NAME},
            {color: TAILWIND_COLOR, label: TAILWIND_NAME},
            {color: TYPESCRIPT_COLOR, label: TYPESCRIPT_NAME},
        ],
    },
    {
        id: 2,
        year: 2025,
        title: "Portfolio",
        description: "Portfolio personnel présentant mes projets et compétences.",
        href: "https://rangivaru-portfolio.vercel.app",
        technos: [
            {color: NEXT_COLOR, label: NEXT_NAME},
            {color: REACT_COLOR, label: REACT_NAME},
            {color: TAILWIND_COLOR, label: TAILWIND_NAME},
            {color: TYPESCRIPT_COLOR, label: TYPESCRIPT_NAME},
            {color: FIGMA_COLOR, label: FIGMA_NAME},
        ],
    }
];