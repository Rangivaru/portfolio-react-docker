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

const REACT_NAME = "ReactJS";
const NEXT_NAME = "NextJS";
const NODE_NAME = "NodeJS";
const FIGMA_NAME = "Figma";
export const projects: ProjectsDTO[] = [
    {
        id: 1,
        year: 2025,
        title: "Portfolio",
        description: "Portfolio personnel présentant mes projets et compétences.",
        href: "https://portfolio-react-docker.vercel.app",
        technos: [
            {color: NEXT_COLOR, label: NEXT_NAME},
            {color: REACT_COLOR, label: REACT_NAME},
            {color: NODE_COLOR, label: NODE_NAME},
            {color: FIGMA_COLOR, label: FIGMA_NAME},
        ],
    }
];