export interface Experience {
    id: number;
    organization: string;
    role: string;
    type: 'school' | 'work';
    startDate: string;   // format "YYYY-MM"
    endDate: string;     // "YYYY-MM" ou "present"
    color: string;       // hex pour inline style
    description?: string;
}

export const experiences: Experience[] = [
    { id: 1, organization: 'Cdiscount', role: 'Lead Développeur (interne)', type: 'work', startDate: '2023-03', endDate: 'present', color: '#E63946' },
    { id: 2, organization: 'Group Créative (Cdiscount)', role: 'Développeur Full-Stack', type: 'work', startDate: '2019-09', endDate: '2023-03', color: '#4361EE' },
    { id: 3, organization: 'Gestform', role: 'Développeur .net', type: 'work', startDate: '2016-10', endDate: '2019-08', color: '#F4820A' },
    { id: 4, organization: 'IUT de Bordeaux', role: 'Licence Pro L3 / Alternance', type: 'school', startDate: '2015-09', endDate: '2016-09', color: '#2DC653' },
    { id: 5, organization: 'Lycée Taaone', role: 'BTS Systèmes informatiques aux organisations', type: 'school', startDate: '2013-09', endDate: '2015-06', color: '#2DC653' },
    { id: 6, organization: 'Gestform', role: 'Développeur .net', type: 'work', startDate: '2015-09', endDate: '2016-07', color: '#F4820A' },
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
