import { projects, type ProjectsDTO } from "@/app/data/projects";

interface ProjectsProps {
    sectionRef: any;
}

function ProjectCard({ project }: { project: ProjectsDTO }) {
    return (
        <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-md border border-gray-border bg-gray p-5 hover:border-gray-light transition-colors duration-200"
        >
            <div className="flex justify-between items-start mb-3 gap-2">
                <h4 className="font-semibold text-sm leading-snug group-hover:text-orange transition-colors">
                    {project.title}
                </h4>
                <span className="text-xs text-gray-light bg-gray-lighter px-2 py-0.5 rounded-full shrink-0">
                    {project.year}
                </span>
            </div>
            <p className="text-xs text-gray-light mb-4 flex-1 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-3">
                {project.technos.map((tech, i) => (
                    <span key={i} className="flex items-center gap-1.5 text-[11px] text-gray-light">
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: tech.color }} />
                        {tech.label}
                    </span>
                ))}
            </div>
        </a>
    );
}

export default function Projects({ sectionRef }: ProjectsProps) {
    return (
        <div className="w-full" id="projets" ref={sectionRef}>
            <h3 className="text-3xl mb-8 mt-16 uppercase font-semibold">Projets</h3>
            {projects.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 border border-dashed border-gray-border rounded-md">
                    <p className="text-gray-light text-sm">Les projets arrivent bientôt...</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            )}
        </div>
    );
}
