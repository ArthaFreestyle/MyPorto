"use client";
import Image from "next/image";
import PageTransition from "@/components/PageTransition";

const works = [
  {
    id: "arsiva",
    name: "Arsiva",
    logo: { type: "image" as const, src: "/arsiva-logo.png", className: "arsiva" },
    description: (
      <>
        <b>Arsiva</b> is a gamified learning platform that helps students explore
        the history and culture of Tulungagung through interactive quizzes, daily
        missions, and XP-based progression. Designed to make local heritage feel
        as engaging as a mobile game.
      </>
    ),
    pills: [
      { label: "Case Study", dot: "var(--yellow-orange)" },
      { label: "Product Design" },
      { label: "Mobile App" },
      { label: "Gamification" },
      { label: "EdTech" },
    ],
    wide: { src: "/arsiva-cover.png", bg: "var(--mint-soft)" },
    portrait: { src: "/arsiva-splash.png", bg: "var(--bg-elevated)" },
    siteHref: "https://arsiva.id",
    caseHref: "https://arsiva.id",
  },
  {
    id: "surat",
    name: "Surat",
    logo: {
      type: "svg" as const,
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="5" y="3" width="13" height="16" rx="2" stroke="#c15f3c" strokeWidth="1.6" />
          <rect x="7.5" y="5.5" width="13" height="16" rx="2" fill="#c15f3c" />
          <path d="M11 11.5h6M11 14.5h4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      ),
      className: "surat",
    },
    description: (
      <>
        <b>Surat</b> is an AI-powered form filler built to eliminate the redundant
        chore of retyping data from paper documents. It uses OCR to extract information
        from photos or PDFs of IDs, invoices, and forms — then auto-fills the form
        you have open in your browser.
      </>
    ),
    pills: [
      { label: "Case Study", dot: "var(--coral)" },
      { label: "Product Design" },
      { label: "AI · OCR" },
      { label: "Web App" },
      { label: "Productivity" },
    ],
    wide: { src: "/surat-cover.webp", bg: "#F5EFE4" },
    portrait: { src: "/surat-mobile.webp", bg: "#F5EFE4" },
    siteHref: "https://landing-surat.vercel.app/",
    caseHref: "https://landing-surat.vercel.app/",
  },
  {
    id: "simba",
    name: "SIMBA",
    logo: { type: "image" as const, src: "/simba-logo.webp", className: "simba" },
    description: (
      <>
        <b>SIMBA</b> — short for <i>Sistem Informasi Manajemen Barang Airlangga</i> —
        is an enterprise ERP built for Universitas Airlangga to track assets and
        consumables end-to-end. It covers the full lifecycle from procurement and
        inventory to plotting, monitoring, and reinventory across every faculty and unit.
      </>
    ),
    pills: [
      { label: "Case Study", dot: "var(--sky-blue)" },
      { label: "Product Design" },
      { label: "ERP · Asset Management" },
      { label: "Web App" },
      { label: "Enterprise" },
    ],
    wide: { src: "/simba-cover.png", bg: "#E8EEFB" },
    portrait: { src: "/simba-login.png", bg: "#FFF7DC" },
    siteHref: "#",
    caseHref: "#",
  },
  {
    id: "maps",
    name: "Airlangga Maps",
    logo: { type: "image" as const, src: "/maps-logo.png", className: "maps" },
    description: (
      <>
        <b>Airlangga Maps</b> is a mobile wayfinding app that helps new students
        get around campus — where to borrow a room, where to handle administrative
        paperwork, where the canteens and prayer rooms are. Each place comes with
        photos, opening hours, a short description, and walking directions from
        wherever you&apos;re standing.
      </>
    ),
    pills: [
      { label: "Case Study", dot: "var(--mint)" },
      { label: "Product Design" },
      { label: "Mobile App" },
      { label: "Wayfinding" },
      { label: "Campus" },
    ],
    wide: { src: "/maps-admin.webp", bg: "#0A0A0A" },
    portrait: { src: "/maps-mobile.webp", bg: "#E6F7EC" },
    siteHref: "#",
    caseHref: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="h-[100dvh] w-full flex flex-col overflow-y-auto relative">
      <PageTransition>
        <main className="works-page-main">
          <section style={{ width: "100%", maxWidth: 1080 }}>
            {/* Header */}
            <header
              className="works-reveal"
              style={{ marginBottom: 32, animationDelay: "0.04s" }}
            >
              <h1 className="works-head-h1">My Works Highlights</h1>
              <p className="works-head-sub">
                I&apos;ve worked on a lot of projects, here are some of my favorites.
              </p>
            </header>

            {/* Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              {works.map((work, i) => (
                <WorkCard key={work.id} work={work} delay={0.14 + i * 0.08} />
              ))}
            </div>
          </section>
        </main>
      </PageTransition>

      <style>{`
        .works-reveal {
          opacity: 0;
          transform: translateY(20px);
          animation: works-reveal-up 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        @keyframes works-reveal-up {
          to { opacity: 1; transform: none; }
        }

        .works-page-main {
          flex: 1; display: flex; justify-content: center;
          padding: 80px 40px 170px;
        }
        .works-head-h1 {
          font-size: 54px; font-weight: 700;
          letter-spacing: -0.03em; line-height: 1.02;
          color: var(--text-primary);
          font-family: 'Open Runde', system-ui, sans-serif;
        }
        .works-head-sub {
          font-size: 18px; color: var(--text-secondary);
          font-weight: 500; margin-top: 10px;
          font-family: 'Open Runde', system-ui, sans-serif;
        }
        .work-title-h2 {
          font-size: 26px; font-weight: 700;
          letter-spacing: -0.02em;
          font-family: 'Open Runde', system-ui, sans-serif;
          color: var(--text-primary);
        }
        .work-desc-p {
          margin-top: 18px; font-size: 16.5px;
          color: var(--text-secondary); font-weight: 500;
          max-width: 760px;
          font-family: 'Open Runde', system-ui, sans-serif;
          line-height: 1.55;
        }

        .work-card {
          position: relative;
          background: #FFFFFF;
          border: 1px solid #E4E4E7;
          border-radius: 28px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04);
          padding: 30px 32px 0;
          overflow: hidden;
          transition: box-shadow 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .work-card:hover {
          box-shadow: 0 4px 12px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.08);
        }

        .work-logo-wrap {
          flex-shrink: 0;
          width: 48px; height: 48px;
          border-radius: 14px;
          display: grid; place-items: center;
          box-shadow: 0 1px 2px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.06);
        }
        .work-logo-wrap.arsiva,
        .work-logo-wrap.simba,
        .work-logo-wrap.maps {
          background: transparent;
          box-shadow: none;
          width: 52px; height: 52px;
          border-radius: 0;
        }
        .work-logo-wrap.surat {
          background: transparent;
          box-shadow: none;
          width: 48px; height: 48px;
          border-radius: 0;
        }

        .work-action-btn {
          width: 38px; height: 38px;
          border-radius: 9999px;
          display: grid; place-items: center;
          color: #0A0A0A;
          background: transparent;
          border: 1px solid #E4E4E7;
          text-decoration: none;
          transition: background-color 0.18s cubic-bezier(0.22,1,0.36,1),
                      color 0.18s cubic-bezier(0.22,1,0.36,1),
                      border-color 0.18s cubic-bezier(0.22,1,0.36,1);
          flex-shrink: 0;
        }
        .work-action-btn:hover {
          background: #0A0A0A;
          color: #FFFFFF;
          border-color: #0A0A0A;
        }

        .meta-pill {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 5px 12px; border-radius: 9999px;
          font-size: 12.5px; font-weight: 600;
          background: #F4F5F7; color: #52525B;
          border: 1px solid #E4E4E7;
          font-family: 'Open Runde', system-ui, sans-serif;
        }

        .cc-media {
          position: relative; height: 300px;
          margin: 28px auto 0; max-width: 700px;
        }
        .cc-wide {
          position: absolute; bottom: -34px; left: 0;
          width: 540px; height: 320px;
          border-radius: 16px;
          box-shadow: 0 10px 28px rgba(0,0,0,0.14), 0 2px 6px rgba(0,0,0,0.06);
          transform-origin: bottom center;
          transform: translate(-22px, -18px) rotate(-7deg);
          transition: transform 0.5s cubic-bezier(0.34,1.56,0.64,1);
          will-change: transform;
          z-index: 2; overflow: hidden;
        }
        .cc-portrait {
          position: absolute; bottom: -34px; right: 0;
          width: 260px; height: 380px;
          border-radius: 16px;
          box-shadow: 0 10px 28px rgba(0,0,0,0.14), 0 2px 6px rgba(0,0,0,0.06);
          transform-origin: bottom center;
          transform: translate(22px, -14px) rotate(6deg);
          transition: transform 0.5s cubic-bezier(0.34,1.56,0.64,1);
          will-change: transform;
          z-index: 1; overflow: hidden;
        }
        .work-card:hover .cc-wide     { transform: translate(-36px, -28px) rotate(-9deg); }
        .work-card:hover .cc-portrait { transform: translate(36px, -22px) rotate(8deg); }

        /* ---- tablet: ~75% scale ---- */
        @media (max-width: 760px) {
          .works-page-main { padding: 48px 20px 150px; }
          .works-head-h1 { font-size: 38px; }
          .works-head-sub { font-size: 16px; }
          .work-card { padding: 22px 20px 0; }
          .work-title-h2 { font-size: 22px; }
          .work-desc-p { font-size: 15.5px; margin-top: 14px; }
          .cc-media { height: 220px; margin-top: 20px; }
          .cc-wide  { width: 405px; height: 240px; bottom: -26px; transform: translate(-16px, -14px) rotate(-7deg); }
          .cc-portrait { width: 195px; height: 285px; bottom: -26px; transform: translate(16px, -11px) rotate(6deg); }
          .work-card:hover .cc-wide    { transform: translate(-27px, -21px) rotate(-9deg); }
          .work-card:hover .cc-portrait{ transform: translate(27px, -17px) rotate(8deg); }
        }

        /* ---- phone: ~50% scale ---- */
        @media (max-width: 480px) {
          .works-page-main { padding: 36px 14px 130px; }
          .works-head-h1 { font-size: 28px; letter-spacing: -0.02em; }
          .works-head-sub { font-size: 14px; margin-top: 8px; }
          .work-card { padding: 16px 14px 0; border-radius: 20px; }
          .work-title-h2 { font-size: 18px; }
          .work-desc-p { font-size: 13.5px; margin-top: 10px; line-height: 1.5; }
          .work-logo-wrap { width: 38px !important; height: 38px !important; }
          .work-action-btn { width: 32px; height: 32px; }
          .work-action-btn svg { width: 14px; height: 14px; }
          .meta-pill { font-size: 10.5px; padding: 4px 8px; gap: 4px; }
          .cc-media { height: 150px; margin-top: 14px; }
          .cc-wide  { width: 270px; height: 160px; bottom: -17px; transform: translate(-11px, -9px) rotate(-7deg); }
          .cc-portrait { width: 130px; height: 190px; bottom: -17px; transform: translate(11px, -7px) rotate(6deg); }
          .work-card:hover .cc-wide    { transform: translate(-18px, -14px) rotate(-9deg); }
          .work-card:hover .cc-portrait{ transform: translate(18px, -11px) rotate(8deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .works-reveal { animation: none; opacity: 1; transform: none; }
          .cc-wide, .cc-portrait { transition: none; }
        }
      `}</style>
    </div>
  );
}

function WorkCard({
  work,
  delay,
}: {
  work: (typeof works)[number];
  delay: number;
}) {
  return (
    <article
      className="work-card works-reveal"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Top row */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        {/* Logo */}
        <span className={`work-logo-wrap ${work.logo.className}`}>
          {work.logo.type === "image" ? (
            <Image
              src={work.logo.src!}
              alt={`${work.name} logo`}
              width={52}
              height={52}
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          ) : (
            work.logo.svg
          )}
        </span>

        <h2 className="work-title-h2">{work.name}</h2>

        {/* Actions */}
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
          <a
            className="work-action-btn"
            href={work.siteHref}
            target={work.siteHref !== "#" ? "_blank" : undefined}
            rel={work.siteHref !== "#" ? "noopener noreferrer" : undefined}
            aria-label={`Visit ${work.name} site`}
          >
            <GlobeIcon />
          </a>
          <a
            className="work-action-btn"
            href={work.caseHref}
            target={work.caseHref !== "#" ? "_blank" : undefined}
            rel={work.caseHref !== "#" ? "noopener noreferrer" : undefined}
            aria-label={`Open ${work.name} case study`}
          >
            <ArrowUpRightIcon />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="work-desc-p">{work.description}</p>

      {/* Meta pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 18 }}>
        {work.pills.map((pill) => (
          <span key={pill.label} className="meta-pill">
            {pill.dot && (
              <span
                style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: pill.dot, flexShrink: 0,
                }}
              />
            )}
            {pill.label}
          </span>
        ))}
      </div>

      {/* Media showcase */}
      <div className="cc-media">
        <div className="cc-wide" style={{ background: work.wide.bg }}>
          <Image
            src={work.wide.src}
            alt={`${work.name} cover`}
            fill
            style={{ objectFit: "cover" }}
            sizes="540px"
          />
        </div>
        <div className="cc-portrait" style={{ background: work.portrait.bg }}>
          <Image
            src={work.portrait.src}
            alt={`${work.name} screenshot`}
            fill
            style={{ objectFit: "cover" }}
            sizes="260px"
          />
        </div>
      </div>
    </article>
  );
}

function GlobeIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7"/>
      <polyline points="7 7 17 7 17 17"/>
    </svg>
  );
}
