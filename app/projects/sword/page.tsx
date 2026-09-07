import Image from "next/image";
import Link from "next/link";

const stack = [".NET", "Java", "MongoDB", "SQL Server", "Snowflake", "React", "Kafka"];

interface Module {
  name: string;
  description: string;
}

const modules: Module[] = [
  {
    name: "Module de gestion des campagnes",
    description: "Centralise, trie et organise les campagnes venues de CARS, vérifie qu'elles sont complètes pour être mises en compétition, et pilote leur cycle de vie.",
  },
  {
    name: "Module de bid",
    description: "Détermine et recalcule le CPC de chaque offre — validation manuelle ou calcul automatique selon la diffusion à maximiser.",
  },
  {
    name: "Module de placement",
    description: "Gère les mots clés d'une campagne : validation manuelle ou détermination automatique des mots clés les plus pertinents à ajouter.",
  },
  {
    name: "Module de budget",
    description: "Décrémente le spent d'une campagne à chaque clic et arrête la diffusion lorsque le budget est épuisé, avec un mode daily dynamique qui ajuste la dépense selon les conversions prévues.",
  },
  {
    name: "Moteur d'enchère",
    description: "Sélectionne les offres gagnantes en temps réel : un moteur ShortTail optimisé pour les mots clés fréquents, complété par un moteur LongTail basé sur des critères sémantiques et business.",
  },
  {
    name: "Modèle d'attribution",
    description: "Traite les événements de tracking (impressions, clics, conversions) et les redistribue aux modules concernés pour ajuster bid, budget et reporting.",
  },
  {
    name: "Référentiel des offres",
    description: "Copie allégée du catalogue produit, tenue à jour du statut des offres (stock, éligibilité) pour alimenter les campagnes.",
  },
];

export default function SwordProjectPage() {
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
              <h1 className="text-3xl font-semibold uppercase">SWORD</h1>
              <span className="text-xs text-gray-light bg-gray-lighter px-2 py-0.5 rounded-full shrink-0">2023</span>
            </div>
            <p className="text-gray-light leading-relaxed">
              Pour les vendeurs et fournisseurs qui cherchent à gagner en parts de marché, SWORD est un
              moteur d&apos;enchères publicitaires plug and play qui maximise la visibilité de leurs produits —
              sur les emplacements pertinents et rentables — en ordonnant leurs meilleures offres en temps
              réel et en s&apos;adaptant à leurs objectifs. À la différence des solutions concurrentes, SWORD
              exploite un maximum de la data disponible et propose des parcours modulables qui simplifient
              la gestion des campagnes.
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
            <h2 className="text-lg font-semibold text-orange uppercase tracking-wide">Mon rôle</h2>
            <p className="text-gray-light leading-relaxed">
              Arrivé en interne chez Cdiscount en mars 2023, j&apos;ai intégré l&apos;équipe SWORD pour reprendre
              la maintenance et l&apos;évolution du levier produits sponsorisés, jusqu&apos;à devenir back-up du
              lead développeur sur le produit. J&apos;ai quitté l&apos;équipe SWORD à l&apos;occasion de ma promotion
              en tant que Lead Développeur sur l&apos;équipe MAAC (marketing &amp; publicité). Sur SWORD, j&apos;ai
              travaillé en lien étroit avec les équipes qui l&apos;entourent : CARS (BFF de gestion des
              campagnes), les fronts Cdiscount et clients, le tracking, et la Data Science pour les
              modèles d&apos;attribution et de scoring.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-orange uppercase tracking-wide">Architecture applicative</h2>
            <p className="text-gray-light leading-relaxed">
              SWORD est découpé en modules indépendants, orchestrés autour d&apos;un moteur d&apos;enchère qui
              répond en temps réel aux requêtes des ad servers Cdiscount et clients.
            </p>
            <div className="flex flex-col gap-2">
              {modules.map((mod) => (
                <div key={mod.name} className="rounded-md border border-gray-border bg-gray p-4 flex flex-col gap-1">
                  <span className="text-xs font-mono text-orange">{mod.name}</span>
                  <p className="text-xs text-gray-light leading-relaxed">{mod.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
