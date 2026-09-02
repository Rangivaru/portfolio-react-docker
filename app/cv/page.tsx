'use client';
import { experiences, formatDateRange, type Experience } from "@/app/data/experiences";
import { StackData } from "@/app/data/Stack";

const C = {
  pageBg:     '#7A6B5A',   // taupe (fond)
  cardBg:     '#F5ECD8',   // beige (cards)
  cardBorder: '#C4B5A0',   // beige foncé pour les bordures
  accent:     '#f78066',   // orange portfolio
  gold:       '#C8933A',   // or chaud pour les dates
  textLight:  '#2C1810',   // brun foncé sur beige (texte cards)
  textMuted:  '#7A6B5A',   // taupe atténué
  textDark:   '#FAF5ED',   // crème sur taupe (header)
};

const card: React.CSSProperties = {
  backgroundColor: C.cardBg,
  borderRadius: '16px',
  padding: '20px',
  border: `1px solid ${C.cardBorder}`,
};

const heading = (centered = false): React.CSSProperties => ({
  fontFamily: 'sans-serif',
  fontSize: '0.7rem',
  letterSpacing: '3px',
  textTransform: 'uppercase',
  fontWeight: 700,
  marginBottom: '14px',
  color: C.accent,
  textAlign: centered ? 'center' : 'left',
});

// Fusionne les entrées ayant la même organisation (ex: deux périodes Gestform)
function mergeByOrg(exps: Experience[]): Experience[] {
  return exps.reduce<Experience[]>((acc, exp) => {
    const existing = acc.find(e => e.organization === exp.organization);
    if (existing) {
      if (exp.startDate < existing.startDate) existing.startDate = exp.startDate;
      if (exp.endDate === 'present' || exp.endDate > existing.endDate) existing.endDate = exp.endDate;
      existing.highlights = [...(existing.highlights ?? []), ...(exp.highlights ?? [])];
      existing.stack = Array.from(new Set([...(existing.stack ?? []), ...(exp.stack ?? [])]));
    } else {
      acc.push({ ...exp });
    }
    return acc;
  }, []);
}

export default function CV() {
  const workExps   = mergeByOrg(experiences.filter(e => e.type === 'work'));
  const schoolExps = experiences.filter(e => e.type === 'school');

  return (
    <>
      {/* CSS impression */}
      <style>{`
        @page {
          size: A4 portrait;
          margin: 2mm;
        }
        @media print {
          .no-print { display: none !important; }
          html, body { margin: 0; padding: 0; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          .cv-print-root {
            width: 206mm !important;
            height: 293mm !important;
            min-height: unset !important;
            padding: 16px !important;
            box-sizing: border-box !important;
            overflow: hidden !important;
          }
          .cv-inner {
            width: 133.333% !important;
            max-width: 133.333% !important;
            margin: 0 !important;
            gap: 10px !important;
            transform: scale(0.75) !important;
            transform-origin: top left !important;
          }
        }
      `}</style>

      <div className="cv-print-root" style={{ backgroundColor: C.pageBg, minHeight: '100vh', padding: '40px 20px', fontFamily: 'sans-serif' }}>
        <div className="cv-inner" style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>

          {/* ── Bouton téléchargement PDF ── */}
          <div className="no-print" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '4px' }}>
            <button
              onClick={() => window.print()}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                backgroundColor: C.cardBg, color: C.textLight,
                border: `1px solid ${C.cardBorder}`, borderRadius: '8px',
                padding: '8px 16px', fontSize: '0.8rem', cursor: 'pointer',
                fontFamily: 'sans-serif',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Télécharger PDF
            </button>
          </div>

          {/* ── HEADER ── */}
          <div style={{ textAlign: 'center', marginBottom: '4px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: '52px', height: '52px', borderRadius: '10px', marginBottom: '14px',
              backgroundColor: C.cardBg, border: `1px solid ${C.cardBorder}`,
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 6L2 12L8 18" stroke={C.accent} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 6L22 12L16 18" stroke={C.accent} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h1 style={{ fontSize: '2.8rem', fontWeight: 800, letterSpacing: '6px', textTransform: 'uppercase', margin: 0, color: C.textDark, lineHeight: 1 }}>
              RANGIVARU <span style={{ color: C.accent }}>SALEM</span>
            </h1>
            <p style={{ color: C.gold, fontSize: '0.82rem', letterSpacing: '5px', textTransform: 'uppercase', marginTop: '8px' }}>
              LEAD DÉVELOPPEUR
            </p>
          </div>

          {/* ── ROW 1 : Formation | Photo | Contact ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 160px 1fr', gap: '14px', alignItems: 'center' }}>
            <div style={card}>
              <p style={heading()}>FORMATION</p>
              {schoolExps.map(exp => (
                <div key={exp.id} style={{ marginBottom: '12px' }}>
                  <p style={{ color: C.gold, fontSize: '0.66rem', marginBottom: '2px' }}>
                    {formatDateRange(exp.startDate, exp.endDate)}
                  </p>
                  <p style={{ color: C.accent, fontSize: '0.76rem', fontWeight: 600, marginBottom: '2px' }}>{exp.role}</p>
                  <p style={{ color: C.textLight, fontSize: '0.72rem' }}>{exp.organization}</p>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden',
                border: `3px solid ${C.accent}`, boxShadow: `0 0 0 5px ${C.cardBorder}55`,
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/profile.png" alt="Rangivaru Salem"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
              </div>
            </div>

            <div style={card}>
              <p style={heading()}>CONTACT</p>
              {[
                'rangivaru.salem@gmail.com',
                'Bordeaux, 33000',
                '31 ans',
                'https://www.linkedin.com/in/rangivaru-salem-8a9444135/',
                'https://github.com/Rangivaru',
                'https://rangivaru-portfolio.vercel.app',
              ].map((line, i) => (
                <p key={i} style={{ color: C.textLight, fontSize: '0.72rem', marginBottom: '8px' }}>{line}</p>
              ))}
            </div>
          </div>

          {/* ── À PROPOS ── */}
          <div style={{ ...card, textAlign: 'center' }}>
            <p style={heading(true)}>
              À PROPOS DE <span style={{ color: C.textLight }}>MOI</span>
            </p>
            <p style={{ color: C.textLight, fontSize: '0.84rem', lineHeight: 1.75, maxWidth: '640px', margin: '0 auto' }}>
              Développeur Full-Stack passionné basé à Bordeaux, j'évolue dans le monde du développement depuis plus de 10 ans.
              Actuellement <strong style={{ color: C.accent }}>Lead Développeur chez Cdiscount</strong>, je conçois et pilote
              des solutions techniques à fort impact, de l'architecture back-end à l'expérience utilisateur.
              J'aime relever des défis techniques, travailler en équipe et contribuer à des projets ambitieux.
            </p>
          </div>

          {/* ── COMPÉTENCES TECHNIQUES ── */}
          <div style={card}>
            <p style={heading(true)}>
              COMPÉTENCES <span style={{ color: C.textLight }}>TECHNIQUES</span>
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '28px' }}>
              {StackData.map((item, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                  {item.logo}
                  <span style={{ color: C.textMuted, fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── EXPÉRIENCES PROFESSIONNELLES ── */}
          <div style={card}>
            <p style={heading(true)}>
              EXPÉRIENCES <span style={{ color: C.textLight }}>PROFESSIONNELLES</span>
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {workExps.map(exp => (
                <div key={exp.id} style={{ borderLeft: `3px solid ${C.accent}`, paddingLeft: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap' }}>
                    <p style={{ color: C.accent, fontWeight: 700, fontSize: '0.82rem' }}>
                      {exp.organization}
                      <span style={{ color: C.textLight, fontWeight: 500 }}> — {exp.role}</span>
                    </p>
                    <p style={{ color: C.gold, fontSize: '0.66rem', whiteSpace: 'nowrap' }}>
                      {formatDateRange(exp.startDate, exp.endDate)}
                    </p>
                  </div>

                  {exp.context && (
                    <p style={{ color: C.textMuted, fontSize: '0.68rem', fontStyle: 'italic', marginTop: '2px' }}>
                      {exp.context}
                    </p>
                  )}

                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul style={{ margin: '5px 0 0', paddingLeft: '14px', listStyleType: 'disc' }}>
                      {exp.highlights.map((h, i) => (
                        <li key={i} style={{ color: C.textLight, fontSize: '0.7rem', lineHeight: 1.5, marginBottom: '1px' }}>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.stack && exp.stack.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '6px' }}>
                      {exp.stack.map(t => (
                        <span key={t} style={{
                          backgroundColor: '#E8D9C0', border: `1px solid ${C.cardBorder}`,
                          borderRadius: '20px', padding: '1px 8px',
                          color: C.textLight, fontSize: '0.6rem',
                        }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── LANGUES & INTÉRÊTS ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div style={card}>
              <p style={heading()}>LANGUES</p>
              {[{ lang: 'Français', level: 100 }, { lang: 'Anglais', level: 65 }].map(({ lang, level }) => (
                <div key={lang} style={{ marginBottom: '12px' }}>
                  <span style={{ color: C.textLight, fontSize: '0.76rem' }}>{lang}</span>
                  <div style={{ height: '4px', backgroundColor: '#D4C4B0', borderRadius: '2px', marginTop: '4px' }}>
                    <div style={{ height: '100%', width: `${level}%`, backgroundColor: C.accent, borderRadius: '2px' }} />
                  </div>
                </div>
              ))}
            </div>

            <div style={card}>
              <p style={heading()}>INTÉRÊTS</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {[
                  { label: 'Musculation', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4v6a6 6 0 0 0 12 0V4"/><line x1="6" y1="4" x2="6" y2="2"/><line x1="18" y1="4" x2="18" y2="2"/><line x1="3" y1="7" x2="6" y2="7"/><line x1="18" y1="7" x2="21" y2="7"/></svg> },
                  { label: 'Surf', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20c4-8 12-10 20-4"/><path d="M2 20c2-4 6-6 10-4l6-8"/></svg> },
                  { label: 'Snowboarding', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="4" r="2"/><path d="M4 20l4-8 4 4 4-8 4 4"/></svg> },
                  { label: 'Intelligence Artificielle', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg> },
                  { label: 'Gaming', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><circle cx="16" cy="10" r="1" fill="currentColor"/><circle cx="18" cy="13" r="1" fill="currentColor"/></svg> },
                  { label: 'Voyages', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
                ].map(({ label, icon }) => (
                  <span key={label} style={{
                    display: 'inline-flex', alignItems: 'center', gap: '5px',
                    backgroundColor: '#E8D9C0', border: `1px solid ${C.cardBorder}`,
                    borderRadius: '20px', padding: '4px 10px',
                    color: C.textLight, fontSize: '0.64rem',
                  }}>
                    {icon}{label}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
