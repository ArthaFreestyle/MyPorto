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
    wide: { src: "/simba-cover.webp", bg: "#E8EEFB" },
    portrait: { src: "/simba-login.webp", bg: "#FFF7DC" },
    siteHref: "#",
    caseHref: "#",
  },
  {
    id: "maps",
    name: "Airlangga Maps",
    logo: { type: "image" as const, src: "/maps-logo.png", className: "maps" },
    description: (
      <>
        <b>Airlangga Maps</b>{" "}
        is a mobile wayfinding app that helps new students
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
    wide: { src: "/maps-landscape.webp", bg: "#F4F6F4" },
    portrait: { src: "/maps-portrait.webp", bg: "#E6F7EC" },
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
              className="works-head works-reveal"
              style={{ animationDelay: "0.04s" }}
            >
              <div className="hand-kicker">
                what I ship
                <svg className="ul" viewBox="0 0 104 8" fill="none" stroke="#141414" strokeWidth="1.4">
                  <path d="M2 3c24-2 68-2 100 0" />
                  <path d="M6 6.5c22-1.6 62-1.6 92 0" />
                </svg>
              </div>
              <h1 className="works-head-h1">
                <span className="nm">
                  My Works Highlights
                  <span className="sticker">4 selected</span>
                </span>
              </h1>
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
          background: var(--bg-base);
          background-image:
            linear-gradient(to right, #ECECEC 1px, transparent 1px),
            linear-gradient(to bottom, #ECECEC 1px, transparent 1px);
          background-size: 24px 24px;
          background-position: center top;
        }

        .works-head { margin-bottom: 32px; }

        /* hand-drawn kicker + amber sticker */
        .hand-kicker {
          font-family: var(--font-hand), cursive;
          font-size: 27px; font-weight: 700; color: var(--ink);
          display: inline-flex; flex-direction: column; align-items: center; gap: 2px;
          transform: rotate(-2deg); margin-bottom: 8px;
        }
        .hand-kicker .ul { width: 104px; height: 8px; }
        .works-head-h1 .nm { position: relative; display: inline-block; }
        .works-head-h1 .sticker {
          position: absolute; left: 4px; bottom: -26px; z-index: 2;
          color: var(--ink); background: var(--amber);
          border: 1.5px solid var(--ink); border-radius: 9999px; white-space: nowrap;
          font-family: var(--font-mono), ui-monospace, monospace;
          font-size: 13px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase;
          padding: 9px 20px; transform: rotate(-3.5deg);
          box-shadow: 0 2px 0 rgba(20,20,20,.9);
        }

        .works-head-h1 {
          font-size: 54px; font-weight: 700;
          letter-spacing: -0.03em; line-height: 1.02;
          color: var(--text-primary);
          font-family: 'Open Runde', system-ui, sans-serif;
        }
        /* the top margin is what clears the sticker hanging off the h1 */
        .works-head-sub {
          font-size: 18px; color: var(--text-secondary);
          font-weight: 500; margin-top: 34px;
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
          max-width: 760px; text-wrap: pretty;
          font-family: 'Open Runde', system-ui, sans-serif;
          line-height: 1.55;
        }
        .work-desc-p b { color: var(--text-primary); font-weight: 600; }

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

        /* ---- tablet: slightly tightened, same composition ---- */
        @media (max-width: 860px) {
          .works-page-main { padding: 64px 28px 160px; }
          .works-head-h1 { font-size: 46px; }
          .work-card { padding: 26px 26px 0; }
          .work-title-h2 { font-size: 24px; }
          .work-desc-p { font-size: 16px; }
          .cc-media { height: 240px; margin-top: 24px; max-width: 560px; }
          .cc-wide { width: 430px; height: 256px; }
          .cc-portrait { width: 208px; height: 304px; }
        }

        /* ---- phone: same look, scaled down ---- */
        @media (max-width: 560px) {
          .works-page-main { padding: 44px 16px 150px; }
          .works-head { margin-bottom: 24px; }
          .hand-kicker { font-size: 23px; }
          .works-head-h1 { font-size: 34px; }
          /* sticker shrinks with the heading so it still clears the lede */
          .works-head-h1 .sticker { font-size: 11px; padding: 7px 14px; bottom: -22px; left: 0; }
          .works-head-sub { font-size: 15.5px; margin-top: 26px; }

          .work-card { padding: 22px 20px 0; border-radius: 24px; }
          .work-logo-wrap { width: 42px; height: 42px; border-radius: 12px; }
          .work-logo-wrap.arsiva,
          .work-logo-wrap.simba,
          .work-logo-wrap.maps { width: 46px; height: 46px; }
          .work-logo-wrap.surat { width: 42px; height: 42px; }
          .work-logo-wrap.surat svg { width: 30px; height: 30px; }
          .work-title-h2 { font-size: 20px; }
          .work-action-btn { width: 34px; height: 34px; }
          .work-action-btn svg { width: 15px; height: 15px; }

          .work-desc-p { margin-top: 14px; font-size: 14.5px; line-height: 1.5; }
          .meta-pill { padding: 4px 10px; font-size: 11.5px; }

          /* keep the slipped overlap + tilt — just smaller */
          .cc-media { height: 200px; margin: 22px auto 0; max-width: 100%; }
          .cc-wide { width: 64%; height: 170px; transform: translate(-14px, -12px) rotate(-7deg); }
          .cc-portrait { width: 34%; height: 210px; transform: translate(14px, -10px) rotate(6deg); }
          .work-card:hover .cc-wide     { transform: translate(-22px, -18px) rotate(-9deg); }
          .work-card:hover .cc-portrait { transform: translate(22px, -14px) rotate(8deg); }
        }

        /* ---- very small phones: squeeze a touch more ---- */
        @media (max-width: 380px) {
          .works-head-h1 { font-size: 30px; }
          .work-card { padding: 20px 16px 0; }
          .work-title-h2 { font-size: 18px; }
          .cc-media { height: 178px; }
          .cc-wide { height: 152px; transform: translate(-10px, -10px) rotate(-7deg); }
          .cc-portrait { height: 188px; transform: translate(10px, -8px) rotate(6deg); }
          .work-card:hover .cc-wide     { transform: translate(-16px, -14px) rotate(-9deg); }
          .work-card:hover .cc-portrait { transform: translate(16px, -12px) rotate(8deg); }
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
