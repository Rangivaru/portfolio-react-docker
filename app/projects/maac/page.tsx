import Image from "next/image";
import Link from "next/link";

const stack = [".NET", "MongoDB", "SQL Server", "Snowflake", "React", "Claude", "C4 model"];

interface Item {
  name: string;
  description: string;
}

interface Category {
  title: string;
  items: Item[];
}

const responsibilityAreas: Category[] = [
  {
    title: "Leviers marketing Core Business",
    items: [
      { name: "SEA", description: "Campagnes Google (catalogue, stratégie de bidding, alimentation des signaux, reporting, monitoring) et Bing." },
      { name: "Affiliation", description: "Partenariats avec AWIN et les comparateurs de prix." },
      { name: "Réseaux sociaux", description: "Campagnes sur Snapchat, TikTok et Meta." },
      { name: "Display", description: "Gestion de l'affichage des publicités Display sur Cdiscount.com." },
    ],
  },
  {
    title: "Régie publicitaire",
    items: [
      { name: "DMP", description: "Segmentation de la donnée." },
      { name: "Data exchange", description: "Monétisation de la donnée client." },
      { name: "Partenariats page de confirmation", description: "Powerspace et Webloyalty, sur la page de confirmation de commande." },
      { name: "Abonnement Premium", description: "Mécanique d'acquisition liée à l'abonnement Premium." },
    ],
  },
];

const teamMissions: string[] = [
  "Exposer un catalogue produits 1P et 3P de qualité aux plateformes partenaires (Google, Meta...) pour des campagnes pertinentes, génératrices de trafic et de transformation.",
  "Pousser aux partenaires les données de performance (conversions, impressions...) pour améliorer en continu l'efficacité des campagnes.",
  "Développer une expertise des algorithmes partenaires pour maximiser l'efficacité des campagnes.",
  "Suivre les évolutions du marché et des partenaires historiques, et s'adapter en intégrant les nouveaux acteurs majeurs.",
  "Assurer le suivi technique permettant aux équipes métier CDads de monétiser la donnée.",
];

const leadDevPillars: Item[] = [
  { name: "Chef d'ingénierie", description: "Responsable de la stabilité, la performance, la robustesse et l'évolutivité du code, ainsi que du backlog technique. J'anime les revues de conception et pose des implémentations de référence." },
  { name: "Développer", description: "Je contribue à la conception et à la réalisation d'engagements à grande échelle, critiques et complexes — au moins 70% de mon temps reste consacré au développement." },
  { name: "Animer & épauler", description: "Mentorat de l'équipe, montée en compétence technique, appui au Product Owner sur la priorisation, et participation au recrutement des profils tech." },
];

export default function MaacProjectPage() {
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
              <h1 className="text-3xl font-semibold uppercase">MAAC</h1>
              <span className="text-xs text-gray-light bg-gray-lighter px-2 py-0.5 rounded-full shrink-0">2024 – Présent</span>
            </div>
            <p className="text-gray-light leading-relaxed">
              L&apos;équipe Marketing Acquisition a pour mission de générer et d&apos;augmenter le trafic
              qualifié sur le site Cdiscount, via des campagnes de publicité payante sur les moteurs de
              recherche (SEA), les réseaux sociaux et des partenariats d&apos;affiliation — avec un soin
              particulier porté à la qualité des campagnes et à l&apos;analyse de performance pour optimiser
              les coûts et le retour sur investissement.
            </p>
            <div className="flex flex-wrap gap-3">
              {stack.map((t) => (
                <span key={t} className="text-[11px] text-gray-light bg-gray-lighter px-2.5 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-light italic">
              Projet interne Cdiscount — code source non public.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-orange uppercase tracking-wide">Mission de l&apos;équipe</h2>
            <p className="text-gray-light leading-relaxed">Développer l&apos;acquisition payante, ce qui se traduit concrètement par :</p>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              {teamMissions.map((mission) => (
                <li key={mission} className="text-sm text-gray-light leading-relaxed">{mission}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="text-lg font-semibold text-orange uppercase tracking-wide">Domaine de responsabilité</h2>
            {responsibilityAreas.map((category) => (
              <div key={category.title} className="flex flex-col gap-3">
                <h3 className="text-sm font-semibold uppercase tracking-wide">{category.title}</h3>
                <div className="flex flex-col gap-2">
                  {category.items.map((item) => (
                    <div key={item.name} className="rounded-md border border-gray-border bg-gray p-4 flex flex-col gap-1">
                      <span className="text-xs font-mono text-orange">{item.name}</span>
                      <p className="text-xs text-gray-light leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-orange uppercase tracking-wide">Mon rôle — Lead Dev</h2>
            <div className="flex flex-col gap-2">
              {leadDevPillars.map((pillar) => (
                <div key={pillar.name} className="rounded-md border border-gray-border bg-gray p-4 flex flex-col gap-1">
                  <span className="text-xs font-mono text-orange">{pillar.name}</span>
                  <p className="text-xs text-gray-light leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
