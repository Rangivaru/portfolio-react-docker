import Image from "next/image";
import Link from "next/link";

const GITHUB_URL = "https://github.com/Rangivaru/portfolio-react-docker";
const LIVE_URL = "https://rangivaru-portfolio.vercel.app";

const stack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma"];

export default function PortfolioProjectPage() {
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
              <h1 className="text-3xl font-semibold uppercase">Portfolio</h1>
              <span className="text-xs text-gray-light bg-gray-lighter px-2 py-0.5 rounded-full shrink-0">2023</span>
            </div>
            <p className="text-gray-light leading-relaxed">
              Le site que vous êtes en train de consulter : un portfolio personnel pour présenter mon
              parcours, mes expériences et mes projets, pensé comme une page de code — sidebar façon IDE,
              fiche CV et section projets classée entre réalisations professionnelles et personnelles.
            </p>
            <div className="flex flex-wrap gap-3">
              {stack.map((t) => (
                <span key={t} className="text-[11px] text-gray-light bg-gray-lighter px-2.5 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm rounded-md border border-gray-border bg-gray px-4 py-2 hover:border-gray-light transition-colors"
              >
                Voir en ligne ↗
              </a>
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
            <h2 className="text-lg font-semibold text-orange uppercase tracking-wide">Le projet</h2>
            <p className="text-gray-light leading-relaxed">
              Construit avec Next.js, React et Tailwind CSS, ce portfolio centralise mon CV, mes
              expériences et mes projets dans une interface unique, avec un design inspiré des éditeurs de
              code. Il est déployé en continu sur Vercel et évolue au fil de mes nouvelles réalisations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
