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
    },
    {
        id: 2,
        year: 2022,
        title: "Boutique du Club de BMX de Verrières le Buisson",
        description: "Demo de la Boutique en ligne pour le club de BMX de Verrières le Buisson.",
        href: "https://shop-vb-bmx.pages.dev/",
        technos: [
            {color: NEXT_COLOR, label: NEXT_NAME},
            {color: NODE_COLOR, label: NODE_NAME},
            {color: STRIPE_COLOR, label: STRIPE_NAME},
            {color: FIGMA_COLOR, label: FIGMA_NAME},
            {color: STORYBOOK_COLOR, label: STORYBOOK_NAME},
        ],
    },
    {
        id: 3,
        year: 2023,
        title: "Comptheures",
        description: "SaaS de gestion de comptes d'heures pour les entreprises.",
        href: "https://comptheures.fr",
        technos: [
            {color: NEXT_COLOR, label: NEXT_NAME},
            {color: NODE_COLOR, label: NODE_NAME},
            {color: FIGMA_COLOR, label: FIGMA_NAME},
            {color: STORYBOOK_COLOR, label: STORYBOOK_NAME},
        ],
    },
    {
        id: 4,
        year: 2023,
        title: "Masteries Biscotte Family",
        description: "Application de consultation des points de maitrise des champions du jeu League of Legends.",
        href: "https://masteries.biscottefamily.fr",
        technos: [
            {color: REACT_COLOR, label: REACT_NAME},
            {color: NODE_COLOR, label: NODE_NAME},
            {color: FIGMA_COLOR, label: FIGMA_NAME},
        ],
    },
    {
        id: 5,
        year: 2022,
        title: "Bonappli",
        description: "SaaS de création de menus pour les restaurants.",
        href: "https://bonappli.fr",
        technos: [
            {color: REACT_COLOR, label: REACT_NAME},
            {color: NODE_COLOR, label: NODE_NAME},
            {color: NEXT_COLOR, label: NEXT_NAME},
            {color: FIGMA_COLOR, label: FIGMA_NAME},
        ],
    },
];