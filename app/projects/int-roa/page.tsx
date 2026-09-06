import Image from "next/image";
import Link from "next/link";

const GITHUB_URL = "https://github.com/Rangivaru/int-roa";

const shots: { src: string; alt: string; caption: string }[] = [
  {
    src: "/projects/int-roa/home.png",
    alt: "Écran d'accueil d'Interactive Roadmap avec recherche par thème Jira",
    caption: "Accueil — on ouvre un thème par son ID Jira, plus besoin de chercher un fichier.",
  },
  {
    src: "/projects/int-roa/theme-liste.png",
    alt: "Vue liste d'un thème avec ses epics, leur avancement et leur statut de délai",
    caption: "Vue liste — avancement, retard/avance et story points par epic, en un coup d'œil.",
  },
  {
    src: "/projects/int-roa/theme-timeline.png",
    alt: "Vue Gantt en lecture seule d'un thème, partageable avec toute l'équipe",
    caption: "Vue Gantt publique — la même roadmap pour tout le monde, à jour en permanence.",
  },
  {
    src: "/projects/int-roa/admin-gantt.png",
    alt: "Backoffice avec Gantt éditable en glisser-déposer",
    caption: "Backoffice — Gantt éditable au glisser-déposer pour replanifier un epic.",
  },
  {
    src: "/projects/int-roa/equipe-optimale.png",
    alt: "Modale de calcul d'équipe optimale indiquant le nombre de développeurs requis",
    caption: "Moteur d'estimation — calcule le nombre de développeurs requis pour tenir la due date.",
  },
];

const stack = ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Vitest"];

export default function IntRoaProjectPage() {
  return (
    <main className="flex flex-col">
      <header className="w-full bg-black mb-8">
        <div className="w-full max-w-[1216px] mx-auto flex items-center gap-2 px-4 h-[64px]">
          <Image
            width={32}
            height={32}
            className="rounded-full bg-black border border-gray-border"
            src="/logo.png"
            alt="logo-rangivaru-salem"
          />
          <Link href="/" className="font-medium hover:text-orange transition-colors">
            Rangivaru Salem
          </Link>
        </div>
      </header>

      <section className="w-full m-auto flex justify-center">
        <div className="w-full max-w-[860px] xl:px-0 px-4 flex flex-col gap-10 pb-24">
          <div>
            <Link href="/#projets" className="text-sm text-gray-light hover:text-orange transition-colors">
              ← Retour aux projets
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-3xl font-semibold uppercase">Interactive Roadmap</h1>
              <span className="text-xs text-gray-light bg-gray-lighter px-2 py-0.5 rounded-full shrink-0">2025</span>
            </div>
            <p className="text-gray-light leading-relaxed">
              Roadmap Gantt interactive, pensée pour un usage quotidien
              par un team lead : une vue partagée, éditable, avec un moteur d&apos;estimation qui calcule
              l&apos;avancement et le nombre de développeurs nécessaires pour tenir les délais.
            </p>
            <div className="flex flex-wrap gap-3">
              {stack.map((t) => (
                <span key={t} className="text-[11px] text-gray-light bg-gray-lighter px-2.5 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <div>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm rounded-md border border-gray-border bg-gray px-4 py-2 hover:border-gray-light transition-colors"
              >
                Voir le code sur GitHub ↗
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-orange uppercase tracking-wide">Le constat</h2>
            <p className="text-gray-light leading-relaxed">
              J'ai remarquais qu&apos;à chaque présentation de roadmap, chacun utilisait
              son propre outil — Confluence, PowerPoint, parfois même Paint. Aucun standard commun, et les
              fichiers finissaient stockés sur la machine de leur auteur plutôt que partagés avec l&apos;équipe.
              Résultat : des roadmaps difficiles à retrouver, jamais à jour, et impossibles à comparer d&apos;une
              équipe à l&apos;autre.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-orange uppercase tracking-wide">La solution</h2>
            <p className="text-gray-light leading-relaxed">
              Interactive Roadmap standardise la présentation d&apos;une roadmap autour de la structure Jira
              qu&apos;on utilise déjà : un thème regroupe des epics, chaque epic regroupe des tickets. La
              roadmap devient un Gantt interactif consultable par toute l&apos;équipe, avec les indicateurs
              (avancement, avance/retard, date de fin estimée) recalculés automatiquement — plus de fichier
              à retrouver ni à remettre à jour à la main.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-lg font-semibold text-orange uppercase tracking-wide">Aperçu</h2>
            <div className="flex flex-col gap-6">
              {shots.map((shot, i) => (
                <figure
                  key={shot.src}
                  className="flex flex-col rounded-md border border-gray-border bg-gray overflow-hidden"
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={1280}
                    height={800}
                    priority={i === 0}
                    className="w-full h-auto"
                  />
                  <figcaption className="text-xs text-gray-light px-4 py-3 border-t border-gray-border">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
