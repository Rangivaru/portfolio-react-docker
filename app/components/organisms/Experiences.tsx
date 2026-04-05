import { experiences, timelineGroups, formatDateRange, type Experience } from "@/app/data/experiences";

interface ExperienceProps {
    sectionRef: any;
}

// Couleurs sémantiques par type d'expérience
const TYPE_COLORS = {
    cdi:        { bg: '#f78066', text: '#fff', label: 'CDI' },
    alternance: { bg: '#4361EE', text: '#fff', label: 'Alternance' },
    school:     { bg: '#10B981', text: '#fff', label: 'École' },
};

function getTypeColor(type: 'school' | 'work', isAlternance: boolean) {
    if (type === 'school') return TYPE_COLORS.school;
    return isAlternance ? TYPE_COLORS.alternance : TYPE_COLORS.cdi;
}

function ExperienceCard({ exp, isAlternance }: { exp: Experience; isAlternance: boolean }) {
    const typeColor = getTypeColor(exp.type, isAlternance);

    return (
        <div
            className="relative rounded-md border border-gray-border bg-gray p-4 w-full border-l-[3px] transition-opacity duration-200"
            style={{ borderLeftColor: typeColor.bg }}
        >
            <div className="flex items-start justify-between gap-2 mb-1 pl-2">
                <p className="font-semibold text-sm leading-tight">{exp.organization}</p>
                <span
                    className="text-[10px] px-2 py-0.5 rounded-full font-medium uppercase shrink-0 whitespace-nowrap"
                    style={{ backgroundColor: typeColor.bg, color: typeColor.text }}
                >
                    {typeColor.label}
                </span>
            </div>
            <p className="text-xs text-gray-light mb-1 pl-2">{exp.role}</p>
            <p className="text-xs text-gray-light/70 pl-2">{formatDateRange(exp.startDate, exp.endDate)}</p>
        </div>
    );
}

export default function Experiences({ sectionRef }: ExperienceProps) {
    return (
        <div className="w-full" id="experiences" ref={sectionRef}>
            <h3 className="text-3xl mb-8 mt-16 uppercase font-semibold">Expériences</h3>

            {/* Légende des types */}
            <div className="flex gap-4 mb-6">
                {Object.values(TYPE_COLORS).map(({ bg, label }) => (
                    <div key={label} className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: bg }} />
                        <span className="text-xs text-gray-light">{label}</span>
                    </div>
                ))}
            </div>

            {/* ── Mobile : liste simple ── */}
            <div className="flex flex-col gap-4 md:hidden">
                {timelineGroups.map((group, idx) => {
                    const school = group.schoolId ? experiences.find(e => e.id === group.schoolId) ?? null : null;
                    const work = group.workId ? experiences.find(e => e.id === group.workId) ?? null : null;
                    const isAlternance = !!(school && work);

                    return (
                        <div key={idx} className="flex flex-col gap-2">
                            {school && <ExperienceCard exp={school} isAlternance={isAlternance} />}
                            {work && <ExperienceCard exp={work} isAlternance={isAlternance} />}
                        </div>
                    );
                })}
            </div>

            {/* ── Desktop : timeline 2 colonnes ── */}
            <div className="hidden md:block">
                {/* En-têtes des colonnes */}
                <div className="grid grid-cols-[1fr_32px_1fr] mb-4 px-1">
                    <p className="text-right text-xs uppercase tracking-widest text-gray-light pr-4">Formation</p>
                    <div />
                    <p className="text-left text-xs uppercase tracking-widest text-gray-light pl-4">Entreprise</p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Ligne verticale centrale */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-lighter -translate-x-1/2" />

                    <div className="flex flex-col gap-6">
                        {timelineGroups.map((group, idx) => {
                            const school = group.schoolId ? experiences.find(e => e.id === group.schoolId) ?? null : null;
                            const work = group.workId ? experiences.find(e => e.id === group.workId) ?? null : null;

                            const prevGroup = idx > 0 ? timelineGroups[idx - 1] : null;
                            const schoolFaded = !!(prevGroup && prevGroup.schoolId === group.schoolId && group.schoolId !== null);
                            const workFaded = !!(prevGroup && prevGroup.workId === group.workId && group.workId !== null);

                            const isAlternance = !!(school && work);
                            const dotColor = work
                                ? getTypeColor('work', isAlternance).bg
                                : school
                                ? getTypeColor('school', false).bg
                                : '#21262d';

                            return (
                                <div key={idx} className="grid grid-cols-[1fr_32px_1fr] items-start">
                                    {/* Colonne gauche : école */}
                                    <div className="flex justify-end pr-4">
                                        {school ? (
                                            <div className={schoolFaded ? 'opacity-50 w-full' : 'w-full'}>
                                                <ExperienceCard exp={school} isAlternance={isAlternance} />
                                            </div>
                                        ) : <div />}
                                    </div>

                                    {/* Point central */}
                                    <div className="flex justify-center items-start pt-5 z-10">
                                        <div
                                            className="w-3 h-3 rounded-full border-2 border-[#0e1117] shadow-md"
                                            style={{ backgroundColor: dotColor }}
                                        />
                                    </div>

                                    {/* Colonne droite : travail */}
                                    <div className="flex justify-start pl-4">
                                        {work ? (
                                            <div className={workFaded ? 'opacity-50 w-full' : 'w-full'}>
                                                <ExperienceCard exp={work} isAlternance={isAlternance} />
                                            </div>
                                        ) : <div />}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
