import Image from "next/image";
import Link from "next/link";

const stack = [".NET", "NuGet", "Swagger", "Polly", "Keycloak", "OpenTelemetry", "log4net", "Prometheus"];

interface LibPackage {
  name: string;
  description: string;
}

interface LibCategory {
  title: string;
  intro?: string;
  packages: LibPackage[];
}

const categories: LibCategory[] = [
  {
    title: "Lib Web",
    packages: [
      {
        name: "Cds.Foundation.Web",
        description:
          "Wrapper de configuration pour Swagger et pour AppMetrics, exposition d'un port de management (pour l'exécution en conteneur), propagation des headers préfixés X-CDS-*, HttpClient par défaut avec policies Polly pour appeler les autres microservices, middleware custom d'interrogation de Keycloak, et calcul automatique de l'en-tête ETag.",
      },
      {
        name: "Cds.Foundation.Web.HealthChecks",
        description: "Wrapper de configuration pour les HealthChecks, avec possibilité d'ajouter des checks custom directement dans le Startup.",
      },
      {
        name: "Cds.Foundation.Web.Mvc",
        description: "Helpers de configuration WebAPI et composants REST unifiés qui étendent la génération de documentation Swagger et simplifient le travail des développeurs.",
      },
      {
        name: "Cds.Foundation.Web.Mvc.Razor",
        description: "Configuration pour une structure de projet MVC alternative, utilisant le moteur de rendu Razor.",
      },
    ],
  },
  {
    title: "Lib Logging",
    intro: "Capacités de logging pour les projets .NET, avec des abstractions et plusieurs implémentations selon le besoin.",
    packages: [
      {
        name: "Cds.Foundation.Logging.Common",
        description: "Classes de base utilisées par les packages Basic et Fluentd — à ne pas utiliser directement sauf pour implémenter un logger custom.",
      },
      {
        name: "Cds.Foundation.Logging.Fluentd",
        description: "Envoi de tous les events de logging vers un agrégateur Fluentd.",
      },
      {
        name: "Cds.Foundation.Logging.Log4net",
        description: "Utilisation de log4net dans .NET Core, grâce aux abstractions .NET Standard.",
      },
      {
        name: "Cds.Foundation.Logging.Log4net.Monithor",
        description: "Support du format de logging Monithor V3.",
      },
      {
        name: "Cds.Foundation.Logging.Log4net.Dashboard",
        description: "Envoi des warnings et erreurs loggés par log4net vers le dashboard de bugs legacy (applications hébergées en IIS uniquement).",
      },
      {
        name: "Cds.Foundation.Logging.Log4net.Fluentd",
        description: "Envoi de tous les events de logging vers l'agrégateur Fluentd : chaque serveur IIS dispose d'un service Fluentd local qui reçoit les events, consultables ensuite dans les dashboards Grafana/Kibana.",
      },
      {
        name: "Cds.Foundation.Logging.Metrics",
        description: "Incrémentation de compteurs à chaque appel des méthodes de log dans .NET Core.",
      },
    ],
  },
  {
    title: "Lib Metrics",
    intro: "Ajout de métriques dans les projets Web & WebAPI.",
    packages: [
      { name: "Cds.Foundation.Metrics", description: "Cœur de la librairie de métriques." },
      { name: "Cds.Foundation.Metrics.Abstraction", description: "Abstractions communes utilisées par les autres packages de métriques." },
      { name: "Cds.Foundation.Metrics.Web", description: "Intégration des métriques dans les projets Web & WebAPI." },
      { name: "Cds.Foundation.Metrics.PushGateway", description: "Export des métriques vers un Prometheus PushGateway." },
    ],
  },
  {
    title: "Lib OpenTelemetry",
    intro: "Instrumentation des applications via le standard OpenTelemetry.",
    packages: [
      {
        name: "Cds.Foundation.OpenTelemetry.Logging.Monithor",
        description: "Logging dans un format compatible Monithor.",
      },
      {
        name: "Cds.Foundation.OpenTelemetry.Logging.Monithor.WebApi",
        description: "Capacités de logging supplémentaires dans un contexte WebAPI.",
      },
      {
        name: "Cds.Foundation.OpenTelemetry.Instrumentation.Kafka",
        description: "Instrumentation de Confluent.Kafka.",
      },
      {
        name: "Cds.Foundation.OpenTelemetry.Instrumentation.Mongo",
        description: "Instrumentation du driver MongoDB.",
      },
    ],
  },
  {
    title: "Lib Security",
    packages: [
      {
        name: "Cds.Foundation.Security.Keycloak",
        description: "Intégration Keycloak pour l'authentification et la gestion des tokens dans les projets .NET.",
      },
    ],
  },
];

export default function CtLibProjectPage() {
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
              <h1 className="text-3xl font-semibold uppercase">CT Lib</h1>
              <span className="text-xs text-gray-light bg-gray-lighter px-2 py-0.5 rounded-full shrink-0">2019 – 2023</span>
            </div>
            <p className="text-gray-light leading-relaxed">
              À mon arrivée chez Cdiscount en 2019, j&apos;ai intégré l&apos;équipe CT Lib, en charge de créer,
              faire évoluer et maintenir les librairies .NET utilisées de manière transverse par
              l&apos;ensemble des équipes de développement.
            </p>
            <div className="flex flex-wrap gap-3">
              {stack.map((t) => (
                <span key={t} className="text-[11px] text-gray-light bg-gray-lighter px-2.5 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-light italic">
              Projet interne Cdiscount — packages NuGet privés, code source non public.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-orange uppercase tracking-wide">Le rôle</h2>
            <p className="text-gray-light leading-relaxed">
              Sans référentiel technique commun, chaque équipe réinventait sa propre façon de gérer la
              configuration Web, le logging, les métriques ou l&apos;authentification — avec des niveaux de
              qualité et d&apos;observabilité disparates d&apos;un microservice à l&apos;autre. L&apos;équipe CT Lib
              fournissait ce socle commun sous forme de packages NuGet, pour que chaque équipe puisse se
              concentrer sur son métier plutôt que sur la plomberie technique.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="text-lg font-semibold text-orange uppercase tracking-wide">Les librairies</h2>
            {categories.map((category) => (
              <div key={category.title} className="flex flex-col gap-3">
                <h3 className="text-sm font-semibold uppercase tracking-wide">{category.title}</h3>
                {category.intro && <p className="text-sm text-gray-light leading-relaxed">{category.intro}</p>}
                <div className="flex flex-col gap-2">
                  {category.packages.map((pkg) => (
                    <div
                      key={pkg.name}
                      className="rounded-md border border-gray-border bg-gray p-4 flex flex-col gap-1"
                    >
                      <span className="text-xs font-mono text-orange">{pkg.name}</span>
                      <p className="text-xs text-gray-light leading-relaxed">{pkg.description}</p>
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
