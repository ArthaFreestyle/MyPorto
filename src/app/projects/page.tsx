"use client";
import Image from "next/image";
import PageTransition from "@/components/PageTransition";

const works = [
  {
    id: "arsiva",
    name: "Arsiva",
    logo: { src: "/arsiva-logo.png", type: "image" as const },
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
    wide: "/arsiva-cover.png",
    portrait: "/arsiva-splash.png",
    siteHref: "#",
    caseHref: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="h-[100dvh] w-full flex flex-col overflow-y-auto relative">
      <PageTransition>
        <main
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            padding: "80px 40px 170px",
          }}
        >
          <section style={{ width: "100%", maxWidth: 1080 }}>
            {/* Header */}
            <header
              className="works-reveal"
              style={{ marginBottom: 32, animationDelay: "0.04s" }}
            >
              <h1
                style={{
                  fontSize: 54,
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.02,
                  color: "var(--text-primary)",
                  fontFamily: "'Open Runde', system-ui, sans-serif",
                }}
              >
                My Works Highlights
              </h1>
              <p
                style={{
                  fontSize: 18,
                  color: "var(--text-secondary)",
                  fontWeight: 500,
                  marginTop: 10,
                  fontFamily: "'Open Runde', system-ui, sans-serif",
                }}
              >
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

        .work-action-btn {
          width: 38px;
          height: 38px;
          border-radius: 9999px;
          display: grid;
          place-items: center;
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
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 9999px;
          font-size: 12.5px;
          font-weight: 600;
          background: #F4F5F7;
          color: #52525B;
          border: 1px solid #E4E4E7;
          font-family: 'Open Runde', system-ui, sans-serif;
        }

        .cc-media {
          position: relative;
          height: 300px;
          margin: 28px auto 0;
          max-width: 700px;
        }
        .cc-wide {
          position: absolute;
          bottom: -34px;
          left: 0;
          width: 540px;
          height: 320px;
          border-radius: 16px;
          box-shadow: 0 10px 28px rgba(0,0,0,0.14), 0 2px 6px rgba(0,0,0,0.06);
          transform-origin: bottom center;
          transform: translate(-22px, -18px) rotate(-7deg);
          transition: transform 0.5s cubic-bezier(0.34,1.56,0.64,1);
          will-change: transform;
          z-index: 2;
          overflow: hidden;
          background: #D7F7E6;
        }
        .cc-portrait {
          position: absolute;
          bottom: -34px;
          right: 0;
          width: 260px;
          height: 380px;
          border-radius: 16px;
          box-shadow: 0 10px 28px rgba(0,0,0,0.14), 0 2px 6px rgba(0,0,0,0.06);
          transform-origin: bottom center;
          transform: translate(22px, -14px) rotate(6deg);
          transition: transform 0.5s cubic-bezier(0.34,1.56,0.64,1);
          will-change: transform;
          z-index: 1;
          overflow: hidden;
          background: #F4F5F7;
        }
        .work-card:hover .cc-wide     { transform: translate(-36px, -28px) rotate(-9deg); }
        .work-card:hover .cc-portrait { transform: translate(36px, -22px) rotate(8deg); }

        @media (max-width: 760px) {
          .work-card { padding: 24px 22px 26px; }
          .cc-media {
            height: auto;
            display: flex;
            flex-direction: column;
            gap: 18px;
            margin-top: 22px;
            padding-bottom: 24px;
          }
          .cc-wide, .cc-portrait {
            position: static !important;
            width: 100% !important;
            height: auto !important;
            transform: none !important;
          }
          .cc-wide { aspect-ratio: 16/10; }
          .cc-portrait { aspect-ratio: 3/4; }
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
        <span
          style={{
            flexShrink: 0,
            width: 52,
            height: 52,
            borderRadius: 0,
            display: "grid",
            placeItems: "center",
          }}
        >
          <Image
            src={work.logo.src}
            alt={`${work.name} logo`}
            width={52}
            height={52}
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </span>

        <h2
          style={{
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            fontFamily: "'Open Runde', system-ui, sans-serif",
            color: "var(--text-primary)",
          }}
        >
          {work.name}
        </h2>

        {/* Actions */}
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <a
            className="work-action-btn"
            href={work.siteHref}
            aria-label={`Visit ${work.name} site`}
          >
            <GlobeIcon />
          </a>
          <a
            className="work-action-btn"
            href={work.caseHref}
            aria-label={`Open ${work.name} case study`}
          >
            <ArrowUpRightIcon />
          </a>
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          marginTop: 18,
          fontSize: 16.5,
          color: "var(--text-secondary)",
          fontWeight: 500,
          maxWidth: 760,
          fontFamily: "'Open Runde', system-ui, sans-serif",
          lineHeight: 1.55,
        }}
      >
        {work.description}
      </p>

      {/* Meta pills */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 7,
          marginTop: 18,
        }}
      >
        {work.pills.map((pill) => (
          <span key={pill.label} className="meta-pill">
            {pill.dot && (
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: pill.dot,
                  flexShrink: 0,
                }}
              />
            )}
            {pill.label}
          </span>
        ))}
      </div>

      {/* Media showcase */}
      <div className="cc-media">
        <div className="cc-wide">
          <Image
            src={work.wide}
            alt={`${work.name} cover`}
            fill
            style={{ objectFit: "cover" }}
            sizes="440px"
          />
        </div>
        <div className="cc-portrait">
          <Image
            src={work.portrait}
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
