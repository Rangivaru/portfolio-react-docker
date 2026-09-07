import Image from "next/image";
import Link from "next/link";

const stack = ["Claude Code Plugins", "Node.js", "MCP", "Markdown / JSON"];

interface SubPhase {
  name: string;
  description: string;
}

interface Phase {
  title: string;
  subPhases: SubPhase[];
}

const phases: Phase[] = [
  {
    title: "Spec et conception",
    subPhases: [
      { name: "Spec fonctionnelle", description: "Challenge de la spec par rapport aux critères de Definition of Ready, jusqu'à sa complétude." },
      { name: "Conception technique", description: "Rédaction de l'ADR et génération du plan technique." },
      { name: "Découpage US", description: "Découpage en User Stories fonctionnelles, indépendantes et testables, à partir du contrat technique et de la spec fonctionnelle." },
    ],
  },
  {
    title: "Développement",
    subPhases: [
      { name: "Plan d'implémentation US", description: "Plan détaillé « comment coder », aligné avec le plan technique et la lecture du code existant concerné." },
      { name: "Code", description: "Implémentation guidée par le plan d'implémentation." },
      { name: "Tests", description: "Tests unitaires et tests d'intégration." },
      { name: "Code review", description: "Vérification de l'implémentation fonctionnelle, Sonar, couverture de code, build, tests et sécurité." },
    ],
  },
  {
    title: "Review et quality",
    subPhases: [
      { name: "CI gate", description: "Vérifications et corrections de la build et de Sonar." },
      { name: "PR review", description: "Création de la PR, traitement des commentaires et récupération des retours de review." },
    ],
  },
  {
    title: "Delivery",
    subPhases: [
      { name: "Tests", description: "Tests end-to-end." },
    ],
  },
];

export default function PeaksysTechPluginProjectPage() {
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
              <h1 className="text-3xl font-semibold uppercase">Peaksys Tech Plugin</h1>
              <span className="text-xs text-gray-light bg-gray-lighter px-2 py-0.5 rounded-full shrink-0">2025</span>
            </div>
            <p className="text-gray-light leading-relaxed">
              Squelette de plugins Claude Code qui structure un workflow de développement assisté par
              IA de bout en bout — de la spec fonctionnelle à la mise en production — pour toutes les
              équipes tech de Peaksys.
            </p>
            <div className="flex flex-wrap gap-3">
              {stack.map((t) => (
                <span key={t} className="text-[11px] text-gray-light bg-gray-lighter px-2.5 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-light italic">
              Projet interne Cdiscount/Peaksys — code source non public.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-orange uppercase tracking-wide">Le constat</h2>
            <p className="text-gray-light leading-relaxed">
              Chaque équipe s&apos;était mise à utiliser Claude Code à sa façon : ses propres prompts, ses
              propres conventions de documentation, ses propres réflexes de review. Sans référentiel commun,
              impossible de capitaliser d&apos;une équipe à l&apos;autre, de garantir un niveau de qualité homogène,
              ou de faire évoluer les pratiques IA de façon coordonnée.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-orange uppercase tracking-wide">La solution</h2>
            <p className="text-gray-light leading-relaxed">
              Peaksys Tech Plugin héberge une suite de plugins Claude Code, distribués via un marketplace
              interne, qui outillent chacune des phases du cycle de développement — spec &amp; conception,
              développement, review &amp; quality, delivery — ainsi que deux préoccupations transverses,
              learning et résolution de dette. Chaque plugin embarque skills, agents et serveurs MCP qui
              produisent et consomment des artefacts standardisés, assurant la continuité d&apos;une phase à
              l&apos;autre. Un moteur transverse de diagnostic (agents Saturnin, Redberny, Nora) est en plus
              déclenché automatiquement en cas d&apos;échec de CI/CD ou de déploiement, pour accélérer le
              retour à un état stable.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="text-lg font-semibold text-orange uppercase tracking-wide">Détail des phases</h2>
            {phases.map((phase) => (
              <div key={phase.title} className="flex flex-col gap-3">
                <h3 className="text-sm font-semibold uppercase tracking-wide">{phase.title}</h3>
                <div className="flex flex-col gap-2">
                  {phase.subPhases.map((sub) => (
                    <div key={sub.name} className="rounded-md border border-gray-border bg-gray p-4 flex flex-col gap-1">
                      <span className="text-xs font-mono text-orange">{sub.name}</span>
                      <p className="text-xs text-gray-light leading-relaxed">{sub.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
