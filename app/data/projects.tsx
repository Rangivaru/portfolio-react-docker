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
const STORYBOOK_COLOR = "#E65482";
const STRIPE_COLOR = "#995DF6";
const SPOTIFY_COLOR = "#48CB65";

const REACT_NAME = "ReactJS";
const NEXT_NAME = "NextJS";
const NODE_NAME = "NodeJS";
const FIGMA_NAME = "Figma";
const STORYBOOK_NAME = "Storybook";
const API_SPOTIFY = "Spotify API";
const STRIPE_NAME = "Stripe";

export const projects: ProjectsDTO[] = [
    {
        id: 1,
        year: 2024,
        title: "Musical Guess",
        description: "Quiz musical sur les artistes et les chansons utilisant l'API Spotify.",
        href: "https://musicalguess.jeremiebarriere.fr",
        technos: [
            {color: NEXT_COLOR, label: NEXT_NAME},
            {color: FIGMA_COLOR, label: FIGMA_NAME},
            {color: SPOTIFY_COLOR, label: API_SPOTIFY},
        ],
    }
];