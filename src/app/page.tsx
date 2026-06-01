"use client";
import Image from "next/image";
import { ArrowUpRight, Code2, MapPin, Download } from "lucide-react";

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "'Open Runde', system-ui, sans-serif",
        background: "var(--bg-base)",
        color: "var(--text-primary)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "64px 40px 150px",
      }}
    >
      <section style={{ width: "100%", maxWidth: 1200 }}>
        {/* Bento grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 16,
          }}
        >
          {/* ── INTRO card ── */}
          <div
            className="hero-card-reveal"
            style={{
              gridColumn: "span 4",
              gridRow: "span 2",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-xl)",
              boxShadow: "var(--shadow-card)",
              padding: "40px 44px",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden",
              animationDelay: "0.05s",
            }}
          >
            {/* top row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
              {/* Hello badge */}
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "var(--mint-soft)",
                  color: "#060606",
                  fontSize: 14,
                  fontWeight: 600,
                  padding: "7px 15px",
                  borderRadius: "var(--radius-full)",
                }}
              >
                <span className="live-dot-wrap">
                  <span className="live-dot" />
                </span>
                Hello, I&apos;m
              </span>

              {/* Socials */}
              <div style={{ display: "flex", gap: 8 }}>
                {[
                  {
                    label: "GitHub",
                    href: "https://github.com/ArthaFreestyle",
                    path: "M12 .5C5.73.5.5 5.73.5 12.21c0 5.18 3.34 9.57 7.98 11.12.58.11.79-.26.79-.57 0-.28-.01-1.02-.02-2-3.25.72-3.94-1.6-3.94-1.6-.53-1.38-1.3-1.75-1.3-1.75-1.06-.74.08-.73.08-.73 1.17.08 1.79 1.23 1.79 1.23 1.04 1.83 2.74 1.3 3.41.99.11-.78.41-1.3.74-1.6-2.6-.3-5.33-1.33-5.33-5.93 0-1.31.46-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.33 3.3 1.23a11.3 11.3 0 0 1 6 0c2.29-1.56 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.74 5.62-5.35 5.92.42.37.8 1.1.8 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.21.69.8.57 4.64-1.55 7.97-5.94 7.97-11.12C23.5 5.73 18.27.5 12 .5Z",
                  },
                  {
                    label: "LinkedIn",
                    href: "https://linkedin.com/in/artha-gandhi-wardhana-aksa-724b42253",
                    path: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0Z",
                  },
                  {
                    label: "Instagram",
                    href: "#",
                    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38A5.86 5.86 0 0 0 .63 4.14c-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.33 1.08 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.12-1.38 5.86 5.86 0 0 0 1.38-2.12c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.12A5.86 5.86 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-10.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z",
                  },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="social-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" width={19} height={19} aria-hidden>
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Name */}
            <h1
              style={{
                fontSize: 64,
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.02,
                marginTop: 28,
              }}
            >
              Artha <span style={{ color: "var(--mint)" }}>Gandhi.</span>
            </h1>

            {/* Role + location */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 20, flexWrap: "wrap" }}>
              <span style={{ fontSize: 20, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 9 }}>
                <span
                  style={{
                    width: 34, height: 34, borderRadius: "var(--radius-md)",
                    background: "var(--mint-soft)", color: "var(--mint-text)",
                    display: "grid", placeItems: "center",
                  }}
                >
                  <Code2 size={18} />
                </span>
                Full Stack Developer
              </span>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#A1A1AA" }} />
              <span style={{ fontSize: 15, fontWeight: 500, color: "#52525B", display: "inline-flex", alignItems: "center", gap: 6 }}>
                <MapPin size={16} color="#A1A1AA" />
                Jakarta, ID
              </span>
            </div>

            {/* Lede */}
            <p
              style={{
                fontSize: 18, fontWeight: 500, color: "#52525B",
                marginTop: 22, maxWidth: 560,
              }}
            >
              I turn ideas into{" "}
              <span
                style={{
                  color: "#0A0A0A", fontWeight: 600,
                  background: "linear-gradient(transparent 62%, var(--mint-soft) 62%)",
                  padding: "0 2px",
                }}
              >
                shipped, dependable products
              </span>
              {" "}— front to back. Clean interfaces, solid systems, and the little details that make software feel good to use.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: "auto", paddingTop: 34 }}>
              <a href="mailto:arumifathina@gmail.com" className="btn-primary">
                Get in touch <ArrowUpRight size={17} />
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1Jhve40bZx2OtnB9zPV2umtmYjZgjW4G_"
                download
                className="btn-ghost"
              >
                Download CV <Download size={17} />
              </a>
            </div>
          </div>

          {/* ── AVATAR card ── */}
          <div
            className="hero-card-reveal"
            style={{
              gridColumn: "span 2",
              gridRow: "span 2",
              borderRadius: "var(--radius-xl)",
              background: "var(--mint-soft)",
              border: "1.5px solid var(--border)",
              position: "relative",
              overflow: "visible",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: 20,
              minHeight: 340,
              animationDelay: "0.13s",
            }}
          >
            {/* Photo */}
            <Image
              src="/artha.webp"
              alt="Photo of Artha Gandhi"
              fill
              className="avatar-photo"
              style={{ objectFit: "cover", objectPosition: "50% 22%", borderRadius: "var(--radius-xl)" }}
              sizes="(max-width:860px) 100vw, 33vw"
              priority
            />
            {/* Bottom scrim */}
            <div
              style={{
                position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
                borderRadius: "var(--radius-xl)",
                background: "linear-gradient(180deg, rgba(10,10,10,0) 52%, rgba(10,10,10,0.22) 100%)",
              }}
            />
            {/* EVOP badge */}
            <div
              style={{
                position: "absolute", right: 16, bottom: -15, zIndex: 5,
                display: "flex", alignItems: "center", gap: 10,
                padding: "8px 11px 8px 8px", borderRadius: 16,
                background: "rgba(20,22,28,0.80)",
                backdropFilter: "blur(14px) saturate(1.3)",
                WebkitBackdropFilter: "blur(14px) saturate(1.3)",
                border: "1px solid rgba(255,255,255,0.14)",
                boxShadow: "0 12px 26px rgba(0,0,0,0.36), 0 2px 6px rgba(0,0,0,0.3)",
              }}
            >
              <span
                style={{
                  flexShrink: 0, width: 32, height: 32, borderRadius: 9,
                  display: "grid", placeItems: "center",
                  background: "#0A0F1A",
                  border: "1px solid rgba(255,255,255,0.16)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.14)",
                }}
              >
                {/* EVOP logo */}
                <svg width="15" height="auto" viewBox="0 0 218 259" fill="none" aria-hidden>
                  <rect x="1.5" y="174.368" width="212.483" height="80.4316" fill="#0088FF" />
                  <rect x="81.9316" y="77.1298" width="132.052" height="81.6321" fill="#0088FF" />
                  <path d="M1.5 254.799V1.5H213.983L1.5 254.799Z" fill="#0088FF" stroke="#72C9FF" strokeWidth="3" />
                </svg>
              </span>
              <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
                <span style={{ fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.62)", whiteSpace: "nowrap" }}>System Architect</span>
                <span style={{ fontSize: 14.5, fontWeight: 700, color: "#fff", letterSpacing: "0.01em", whiteSpace: "nowrap" }}>EVOP TECH</span>
              </span>
              <span style={{ alignSelf: "flex-start", margin: "1px 0 0 2px", color: "rgba(255,255,255,0.55)", display: "grid", placeItems: "center" }}>
                <ArrowUpRight size={14} />
              </span>
            </div>
          </div>

          {/* ── STATS card ── */}
          <div
            className="hero-card-reveal"
            style={{
              gridColumn: "span 3",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-card)",
              padding: "26px 30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              animationDelay: "0.21s",
            }}
          >
            {[
              { num: "15", suffix: "+", label: "Projects Shipped" },
              { num: "10", suffix: "+", label: "Happy Clients" },
              { num: "3", suffix: "y", label: "Years of Journey" },
            ].map((s, i) => (
              <div key={s.label} style={{ display: "contents" }}>
                <div>
                  <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1 }}>
                    {s.num}<span style={{ color: "var(--mint)" }}>{s.suffix}</span>
                  </div>
                  <div style={{ fontSize: 13.5, color: "#52525B", fontWeight: 500, marginTop: 8 }}>{s.label}</div>
                </div>
                {i < 2 && <div style={{ width: 1, alignSelf: "stretch", background: "var(--border)" }} />}
              </div>
            ))}
          </div>

          {/* ── NOW card ── */}
          <div
            className="hero-card-reveal"
            style={{
              gridColumn: "span 3",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-card)",
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              animationDelay: "0.29s",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span className="live-dot-wrap"><span className="live-dot" style={{ width: 9, height: 9 }} /></span>
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#A1A1AA" }}>Currently building</span>
            </div>
            <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.01em" }}>
              <span style={{ color: "var(--mint-text)" }}>Artha Portfolio</span> — a bento-grid playground
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
              {["Next.js", "TypeScript", "React", "Node", "Postgres"].map((t) => (
                <span
                  key={t}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    padding: "5px 12px", borderRadius: "var(--radius-full)",
                    fontSize: 12.5, fontWeight: 600,
                    background: "var(--bg-elevated)", color: "#52525B",
                    border: "1px solid var(--border)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Open Runde on hero */
        main { font-family: 'Open Runde', system-ui, sans-serif; }

        /* card reveal entrance */
        .hero-card-reveal {
          opacity: 0;
          transform: translateY(20px);
          animation: reveal-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* pulsing live dot */
        .live-dot-wrap { position: relative; display: inline-block; }
        .live-dot {
          display: block;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--mint);
          position: relative;
        }
        .live-dot::after {
          content: '';
          position: absolute; inset: 0;
          border-radius: 50%;
          background: var(--mint);
          animation: pulse-mint 1.8s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }

        /* social icons */
        .social-icon {
          width: 40px; height: 40px; border-radius: 9999px;
          display: grid; place-items: center;
          color: #0A0A0A; background: #FFFFFF;
          text-decoration: none; border: 1px solid var(--border);
          transition: background-color .18s, color .18s, border-color .18s;
        }
        .social-icon:hover { background: #0A0A0A; color: #FFFFFF; border-color: #0A0A0A; }

        /* CTA buttons */
        .btn-primary, .btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Open Runde', system-ui, sans-serif;
          font-size: 15px; font-weight: 600; padding: 13px 22px;
          border-radius: var(--radius-md); border: none; cursor: pointer;
          text-decoration: none; transition: all .18s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .btn-primary { background: #0A0A0A; color: #FFFFFF; }
        .btn-primary:hover { background: var(--mint); color: #0A0A0A; transform: scale(1.06); }
        .btn-ghost {
          background: var(--bg-card); color: var(--text-primary);
          border: 1px solid var(--border) !important;
          border-radius: 9999px !important;
        }
        .btn-ghost:hover { background: var(--bg-elevated); }

        /* responsive */
        @media (max-width: 1024px) {
          h1 { font-size: 54px !important; }
        }
        @media (max-width: 860px) {
          main { padding: 40px 22px 140px !important; }
          div[style*="grid-template-columns"] { grid-template-columns: repeat(2, 1fr) !important; }
          div[style*="span 4"] { grid-column: span 2 !important; grid-row: auto !important; padding: 32px 28px !important; }
          div[style*="span 2"][style*="grid-row: span 2"] { grid-column: span 2 !important; grid-row: auto !important; min-height: 300px !important; }
          div[style*="span 3"] { grid-column: span 2 !important; }
          h1 { font-size: 44px !important; }
        }
        @media (max-width: 520px) {
          div[style*="span 3"][style*="justify-content: space-between"] { flex-direction: column !important; align-items: flex-start !important; gap: 18px !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-card-reveal { animation: none; opacity: 1; transform: none; }
          .live-dot::after { animation: none; display: none; }
          .btn-primary:hover { transform: none; }
        }
      `}</style>
    </main>
  );
}
