export interface Experience {
    id: number;
    organization: string;
    role: string;
    type: 'school' | 'work';
    startDate: string;   // format "YYYY-MM"
    endDate: string;     // "YYYY-MM" ou "present"
    color: string;       // hex pour inline style
    description?: string;
    context?: string;        // une ligne de contexte (équipe, périmètre, produit)
    highlights?: string[];   // missions / réalisations affichées sur le CV
    stack?: string[];        // technos clés de la mission
}

export const experiences: Experience[] = [
    {
        id: 1, organization: 'Cdiscount', role: 'Lead Développeur (interne)', type: 'work',
        startDate: '2023-03', endDate: 'present', color: '#E63946',
        context: "Arrivée en interne dans l'équipe SWORD (produits sponsorisés), puis promotion Lead Dev sur l'équipe MAAC (marketing & publicité), 8 personnes.",
        highlights: [
            "SWORD : maintenance et évolution du levier produits sponsorisés, devenu back-up du lead dev.",
            "MAAC : promu Lead Développeur, pilotage technique des projets de publicité et d'affiliation.",
            "Collaboration rapprochée avec les profils Data (MLE, DS, DA) pour intégrer de l'IA",
        ],
        stack: ['.NET', 'Kafka', 'Java', 'React', 'MongoDB', 'Snowflake', 'SQL Server', 'Azure DevOps', 'Git', 'Jira', 'IA','Talend'],
    },
    {
        id: 2, organization: 'Group Créative (Cdiscount)', role: 'Développeur .NET Full-Stack', type: 'work',
        startDate: '2019-09', endDate: '2023-03', color: '#4361EE',
        context: "Prestataire ESN (Groupe Créative) chez Cdiscount, au sein de 2 équipes successives avant le passage en interne.",
        highlights: [
            "CT Lib : maintenance des librairies .NET génériques utilisées par l'ensemble des développeurs Cdiscount.",
            "OPECO : bons de réduction et prix barré, mise en conformité suite à la loi Omnibus.",
        ],
        stack: ['.NET', '.NET Framework', 'React', 'Kafka', 'MongoDB', 'SQL Server', 'Azure DevOps', 'Git', 'Jira'],
    },
    {
        id: 3, organization: 'Gestform', role: 'Développeur .NET', type: 'work',
        startDate: '2016-10', endDate: '2019-08', color: '#F4820A',
        context: "Alternance transformée en CDI à mon arrivée en France, équipe de 9 personnes.",
        highlights: [
            "Maintenance et développement de l'ERP interne custom de l'entreprise (.NET, Angular).",
            "Participation à la transition méthodologique du cycle en V vers Scrum.",
        ],
        stack: ['.NET', 'Angular', 'Jenkins', 'TFS', 'Jira'],
    },
    { id: 4, organization: 'IUT de Bordeaux', role: 'Licence Pro L3 / Alternance', type: 'school', startDate: '2015-09', endDate: '2016-09', color: '#2DC653' },
    { id: 5, organization: 'Lycée Taaone', role: 'BTS Systèmes informatiques aux organisations', type: 'school', startDate: '2013-09', endDate: '2015-06', color: '#2DC653' },
    { id: 6, organization: 'Gestform', role: 'Développeur .NET (alternance)', type: 'work', startDate: '2015-09', endDate: '2016-07', color: '#F4820A' },
];

export type TimelineGroup = { schoolId: number | null; workId: number | null };

export const timelineGroups: TimelineGroup[] = [
    { schoolId: null, workId: 1 },
    { schoolId: null, workId: 2 },
    { schoolId: null, workId: 3 },
    { schoolId: 4, workId: 6 },
    { schoolId: 5, workId: null },
];

export function formatDateRange(start: string, end: string): string {
    const monthsFR = ['Janv.', 'Fév.', 'Mars', 'Avr.', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'];
    const fmt = (d: string) => {
        const [y, m] = d.split('-');
        return `${monthsFR[parseInt(m) - 1]} ${y}`;
    };
    return `${fmt(start)} – ${end === 'present' ? 'Présent' : fmt(end)}`;
}
