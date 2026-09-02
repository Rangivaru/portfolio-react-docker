export function RelocationBanner() {
  return (
    <div className="w-full border border-orange/30 bg-orange/10 rounded-md p-4 flex items-center gap-3 flex-wrap">
      <span className="text-2xl shrink-0">🌴</span>
      <p className="text-sm flex-1 min-w-[220px]">
        <strong>De retour à Tahiti le 5 octobre 2026</strong> — je recherche une opportunité de Développeur / Lead Développeur sur place, disponible pour une prise de poste à partir de mi-octobre.
      </p>
      <a
        href="mailto:rangivaru.salem@gmail.com"
        className="rounded-md py-2 px-4 font-medium text-sm bg-orange text-center hover:bg-orange-light whitespace-nowrap shrink-0"
      >
        Me contacter
      </a>
    </div>
  );
}
