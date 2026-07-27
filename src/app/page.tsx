"use client";
import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/ArthaFreestyle",
    path: "M12 .5C5.73.5.5 5.73.5 12.21c0 5.18 3.34 9.57 7.98 11.12.58.11.79-.26.79-.57 0-.28-.01-1.02-.02-2-3.25.72-3.94-1.6-3.94-1.6-.53-1.38-1.3-1.75-1.3-1.75-1.06-.74.08-.73.08-.73 1.17.08 1.79 1.23 1.79 1.23 1.04 1.83 2.74 1.3 3.41.99.11-.78.41-1.3.74-1.6-2.6-.3-5.33-1.33-5.33-5.93 0-1.31.46-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.33 3.3 1.23a11.3 11.3 0 0 1 6 0c2.29-1.56 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.74 5.62-5.35 5.92.42.37.8 1.1.8 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.21.69.8.57 4.64-1.55 7.97-5.94 7.97-11.12C23.5 5.73 18.27.5 12 .5Z",
  },
  {
    label: "X",
    href: "#",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z",
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
];

const STATS = [
  { num: "10", accent: "+", label: "Projects Shipped" },
  { num: "20", accent: "+", label: "Happy Clients" },
  { num: "3", accent: "y", label: "Years of Journey" },
];

const STACK = ["Go Fiber", "MySQL", "Redis", "Docker"];

export default function Home() {
  return (
    <main className="hero-page">
      <section className="hero">
        <div className="hero-grid">
          {/* ── INTRO ── */}
          <div className="card c-intro reveal">
            <div className="top">
              <span className="hand-note">
                my name is
                <svg className="ul" viewBox="0 0 96 8" fill="none" stroke="#141414" strokeWidth="1.4">
                  <path d="M2 3c22-2 62-2 92 0" />
                  <path d="M6 6.5c20-1.6 56-1.6 84 0" />
                </svg>
              </span>

              <div className="socials">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    className="social"
                    href={s.href}
                    target={s.href === "#" ? undefined : "_blank"}
                    rel={s.href === "#" ? undefined : "noopener noreferrer"}
                    aria-label={s.label}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <h1>
              <span className="nm">
                Artha <span className="accent">Gandhi.</span>
                <span className="sticker">Full-stack dev</span>
              </span>
            </h1>

            <p className="lede">
              I build{" "}
              <span className="hl">
                internal systems
                <svg
                  className="sq"
                  viewBox="0 0 120 7"
                  preserveAspectRatio="none"
                  fill="none"
                  stroke="#141414"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                >
                  <path d="M2 4.5c18-3 38 3 56 0s42-3 60 1" />
                </svg>
              </span>
              : vehicle-loan logistics for a university fleet, correspondence and permit tools for
              local offices. Go Fiber and MySQL on the backend, Redis once the queries got slow,
              Docker so a deploy takes one command.
            </p>

            <div className="cta-row">
              <a className="btn btn-primary" href="mailto:arumifathina@gmail.com">
                Get in touch <ArrowUpRight />
              </a>
              <a
                className="btn btn-ghost btn-pill"
                href="https://drive.google.com/uc?export=download&id=1Jhve40bZx2OtnB9zPV2umtmYjZgjW4G_"
                download
              >
                Download CV <Download />
              </a>
            </div>
          </div>

          {/* ── AVATAR ── */}
          <div className="c-avatar reveal">
            <span className="photo-note">
              <span className="txt">that&apos;s me</span>
              <svg
                className="arw"
                viewBox="0 0 80 66"
                fill="none"
                stroke="#141414"
                strokeWidth="2.1"
                strokeLinecap="round"
              >
                <path d="M2 44c14-26 38-40 64-42" />
                <path d="M56 1l11 2-3 13" />
              </svg>
            </span>

            <span className="cursor-lbl">
              <svg className="arrow" viewBox="0 0 16 20" fill="#EF2B5E" stroke="#141414" strokeWidth="1.4">
                <path d="M1 1l13 8-6 1.5L5.5 18z" />
              </svg>
              <span className="tag">ArthaFreestyle</span>
            </span>

            <Image
              className="photo"
              src="/artha.webp"
              alt="Photo of Artha Gandhi"
              fill
              sizes="(max-width: 860px) 100vw, 33vw"
              priority
            />

            <a
              className="evop-bar"
              href="https://evop.tech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="System Architect at EVOP Tech"
            >
              <span className="evop-logo">
                <svg viewBox="0 0 218 259" fill="none" aria-hidden="true">
                  <rect x="1.5" y="174.368" width="212.483" height="80.4316" fill="#0088FF" />
                  <rect x="81.9316" y="77.1298" width="132.052" height="81.6321" fill="#0088FF" />
                  <path d="M1.5 254.799V1.5H213.983L1.5 254.799Z" fill="#0088FF" stroke="#72C9FF" strokeWidth="3" />
                </svg>
              </span>
              <span className="evop-text">
                <span className="evop-role">System Architect</span>
                <span className="evop-name">EVOP TECH</span>
              </span>
              <span className="evop-arrow">
                <ArrowUpRight />
              </span>
            </a>
          </div>

          {/* ── STATS ── */}
          <div className="card c-stats reveal">
            <span className="stats-note">
              <span className="txt">and counting</span>
              <svg
                className="arw"
                viewBox="0 0 30 34"
                fill="none"
                stroke="#141414"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M26 2c2 14-4 24-18 28" />
                <path d="M14 22l-6 8 11 2" />
              </svg>
            </span>
            {STATS.map((s, i) => (
              <div key={s.label} style={{ display: "contents" }}>
                <div className="stat">
                  <div className="num">
                    {s.num}
                    <span className="accent">{s.accent}</span>
                  </div>
                  <div className="lbl">{s.label}</div>
                </div>
                {i < STATS.length - 1 && <div className="stat-div" />}
              </div>
            ))}
          </div>

          {/* ── NOW ── */}
          <div className="card c-now reveal">
            <div className="now-head">
              <span className="live-dot" />
              <span className="lbl">Currently building</span>
            </div>
            <div className="now-title">
              <b>Silogis</b>: vehicle-loan system for Universitas Airlangga.
            </div>
            <div className="skills">
              {STACK.map((t) => (
                <span key={t} className="pill">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* ===== page shell — grid paper backdrop, hero centred, dock floats ===== */
        .hero-page {
          /* the design system's greys are a touch darker than the site-wide ones */
          --text-secondary: #52525B;
          --text-muted: #A1A1AA;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 64px 40px 150px;
          min-height: 100vh;
          font-family: 'Open Runde', system-ui, sans-serif;
          color: var(--text-primary);
          line-height: 1.55;
          background: var(--bg-base);
          background-image:
            linear-gradient(to right, #ECECEC 1px, transparent 1px),
            linear-gradient(to bottom, #ECECEC 1px, transparent 1px);
          background-size: 24px 24px;
          background-position: center top;
        }
        .hero-page .hero { width: 100%; max-width: 1200px; }

        /* ===== bento grid ===== */
        .hero-page .hero-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-auto-rows: minmax(0, auto);
          gap: 16px;
        }
        .hero-page .card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-card);
        }

        /* ===== INTRO card ===== */
        .hero-page .c-intro {
          grid-column: span 4;
          grid-row: span 2;
          border-radius: var(--radius-xl);
          padding: 40px 44px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
        .hero-page .c-intro .top {
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
        }
        .hero-page .socials { display: flex; gap: 8px; }
        .hero-page .social {
          width: 40px; height: 40px; border-radius: var(--radius-full);
          display: grid; place-items: center; color: #0A0A0A;
          background: #FFFFFF; text-decoration: none;
          border: 1px solid var(--border);
          transition: background-color .18s var(--ease-custom),
                      color .18s var(--ease-custom),
                      border-color .18s var(--ease-custom);
        }
        .hero-page .social:hover { background: #0A0A0A; color: #FFFFFF; border-color: #0A0A0A; }
        .hero-page .social svg { width: 19px; height: 19px; }

        .hero-page .c-intro h1 {
          font-size: 64px; font-weight: 700; letter-spacing: -0.03em; line-height: 1.02;
          margin-top: 16px; position: relative; padding-bottom: 10px;
        }
        .hero-page .c-intro h1 .accent { color: var(--text-primary); }
        .hero-page .c-intro h1 .nm { position: relative; display: inline-block; }

        /* amber sticker slipped under the name */
        .hero-page .c-intro h1 .sticker {
          position: absolute; left: 4px; bottom: -30px; z-index: 2;
          color: var(--ink); background: var(--amber);
          border: 1.5px solid var(--ink); border-radius: var(--radius-full);
          font-family: var(--font-mono), ui-monospace, monospace;
          font-size: 14.5px; font-weight: 700; letter-spacing: .07em;
          text-transform: uppercase; white-space: nowrap;
          padding: 11px 24px; transform: rotate(-3.5deg);
          box-shadow: 0 2px 0 rgba(20,20,20,.9);
        }

        /* hand-written annotations */
        .hero-page .hand-note {
          font-family: var(--font-hand), cursive;
          font-size: 26px; font-weight: 700; color: var(--ink);
          display: inline-flex; flex-direction: column; align-items: center; gap: 2px;
        }
        .hero-page .hand-note .ul { width: 96px; height: 8px; }

        .hero-page .lede {
          font-size: 18px; font-weight: 500; color: var(--text-secondary);
          margin-top: 38px; max-width: 560px; text-wrap: pretty;
        }
        .hero-page .lede .hl { position: relative; color: var(--text-primary); font-weight: 600; }
        .hero-page .lede .hl .sq { position: absolute; left: 0; bottom: -7px; width: 100%; height: 7px; }

        /* ===== CTAs ===== */
        .hero-page .cta-row {
          display: flex; gap: 12px; flex-wrap: wrap;
          margin-top: auto; padding-top: 34px; position: relative;
        }
        .hero-page .btn {
          display: inline-flex; align-items: center; gap: 8px; font-family: inherit;
          font-size: 15px; font-weight: 600; padding: 13px 22px;
          border-radius: var(--radius-md); border: none; cursor: pointer;
          text-decoration: none; transition: all .18s var(--ease-custom);
        }
        .hero-page .btn svg {
          width: 17px; height: 17px; transition: transform .25s var(--ease-custom);
        }
        .hero-page .btn-primary {
          background: #0A0A0A; color: #FFFFFF;
          transition: background .3s var(--ease-custom), color .3s var(--ease-custom), transform .3s var(--ease-custom);
        }
        .hero-page .btn-primary:hover { background: var(--mint); color: #0A0A0A; transform: scale(1.06); }
        .hero-page .btn-primary:hover svg { transform: translate(2px,-2px) scale(1.1); }
        .hero-page .btn-ghost {
          background: var(--bg-card); color: var(--text-primary); border: 1px solid var(--border);
        }
        .hero-page .btn-ghost:hover { background: var(--bg-elevated); }
        .hero-page .btn-pill { border-radius: var(--radius-full); }

        /* ===== AVATAR card ===== */
        .hero-page .c-avatar {
          grid-column: span 2; grid-row: span 2;
          border-radius: var(--radius-xl);
          background: var(--cream);
          border: 1.5px solid var(--border);
          position: relative; overflow: visible;
          display: flex; flex-direction: column; justify-content: flex-end;
          padding: 20px; min-height: 340px;
        }
        .hero-page .c-avatar .photo {
          object-fit: cover; object-position: 50% 22%;
          border-radius: var(--radius-xl);
        }
        /* subtle bottom scrim for depth */
        .hero-page .c-avatar::before {
          content: ''; position: absolute; inset: 0; z-index: 1; pointer-events: none;
          border-radius: var(--radius-xl);
          background: linear-gradient(180deg, rgba(10,10,10,0) 52%, rgba(10,10,10,0.22) 100%);
        }

        /* hand annotation pointing at the photo */
        .hero-page .photo-note {
          position: absolute; z-index: 3; top: 136px; left: -124px;
          display: flex; align-items: flex-start; pointer-events: none;
        }
        .hero-page .photo-note .txt {
          font-family: var(--font-hand), cursive;
          font-size: 26px; font-weight: 700; color: var(--ink);
          background: var(--bg-card); border: 1.5px solid var(--ink);
          border-radius: var(--radius-full); padding: 2px 14px 4px;
          transform: rotate(-4deg); box-shadow: 0 2px 0 rgba(20,20,20,.9);
        }
        .hero-page .photo-note .arw { width: 80px; height: 66px; margin: -6px 0 0 -8px; }

        /* drifting cursor label */
        .hero-page .cursor-lbl {
          position: absolute; z-index: 3; top: 14px; right: 14px;
          display: inline-flex; align-items: center; padding-left: 20px;
          pointer-events: none;
          animation: cursor-drift 14s cubic-bezier(.5,0,.3,1) infinite;
        }
        @keyframes cursor-drift {
          0%,6%    { transform: translate(0,0); }
          22%,28%  { transform: translate(0,344px); }
          44%,50%  { transform: translate(-104px,344px); }
          66%,72%  { transform: translate(-104px,0); }
          88%,100% { transform: translate(0,0); }
        }
        .hero-page .cursor-lbl .arrow {
          position: absolute; left: 0; top: -5px; width: 18px; height: 22px;
          animation: cursor-tilt 14s cubic-bezier(.5,0,.3,1) infinite;
        }
        @keyframes cursor-tilt {
          0%,6%,88%,100% { transform: rotate(0deg); }
          22%,28% { transform: rotate(6deg); }
          44%,50% { transform: rotate(-6deg); }
          66%,72% { transform: rotate(4deg); }
        }
        .hero-page .cursor-lbl .tag {
          font-family: var(--font-mono), ui-monospace, monospace;
          font-size: 11.5px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase;
          background: var(--pink-sg); color: #fff; border: 1.5px solid var(--ink);
          border-radius: var(--radius-full); padding: 6px 14px; transform: rotate(3.5deg);
        }

        /* ===== EVOP badge — dark glass pill poking past the card edge ===== */
        .hero-page .evop-bar {
          position: absolute; right: 16px; bottom: -15px; z-index: 5;
          display: flex; align-items: center; gap: 10px;
          padding: 8px 11px 8px 8px; border-radius: 16px;
          background: rgba(20,22,28,0.80);
          backdrop-filter: blur(14px) saturate(1.3);
          -webkit-backdrop-filter: blur(14px) saturate(1.3);
          border: 1px solid rgba(255,255,255,0.14);
          box-shadow: 0 12px 26px rgba(0,0,0,0.36), 0 2px 6px rgba(0,0,0,0.3);
          cursor: pointer; text-decoration: none; transform-origin: bottom right;
          transition: transform .32s var(--bounce),
                      box-shadow .32s var(--ease-custom),
                      border-color .32s var(--ease-custom);
        }
        .hero-page .evop-bar:hover {
          transform: scale(1.12) translateY(-6px);
          box-shadow: 0 22px 42px rgba(0,0,0,0.42), 0 4px 12px rgba(0,0,0,0.34);
          border-color: rgba(114,201,255,0.5);
        }
        .hero-page .evop-bar .evop-logo {
          flex-shrink: 0; width: 32px; height: 32px; border-radius: 9px;
          display: grid; place-items: center; background: #0A0F1A;
          border: 1px solid rgba(255,255,255,0.16);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.14);
        }
        .hero-page .evop-bar .evop-logo svg {
          width: 15px; height: auto; display: block;
          transform-origin: 50% 50%;
          animation: evop-spin 4.5s linear infinite;
        }
        .hero-page .evop-bar:hover .evop-logo svg { animation-duration: 1.1s; }
        @keyframes evop-spin { to { transform: rotate(360deg); } }
        .hero-page .evop-bar .evop-text { display: flex; flex-direction: column; line-height: 1.2; }
        .hero-page .evop-bar .evop-role {
          font-size: 11px; font-weight: 500; color: rgba(255,255,255,0.62); white-space: nowrap;
        }
        .hero-page .evop-bar .evop-name {
          font-size: 14.5px; font-weight: 700; color: #fff; letter-spacing: 0.01em; white-space: nowrap;
        }
        .hero-page .evop-bar .evop-arrow {
          align-self: flex-start; margin: 1px 0 0 2px;
          color: rgba(255,255,255,0.55); display: grid; place-items: center;
        }
        .hero-page .evop-bar .evop-arrow svg { width: 14px; height: 14px; }

        /* ===== STATS card ===== */
        .hero-page .c-stats {
          position: relative;
          grid-column: span 3; padding: 26px 30px;
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
        }
        .hero-page .stats-note {
          position: absolute; z-index: 3; top: -30px; right: 22px;
          display: flex; align-items: flex-end; gap: 2px; pointer-events: none;
        }
        .hero-page .stats-note .txt {
          font-family: var(--font-hand), cursive;
          font-size: 23px; font-weight: 700; color: var(--ink); transform: rotate(-3deg);
        }
        .hero-page .stats-note .arw { width: 30px; height: 34px; }
        .hero-page .stat .num { font-size: 40px; font-weight: 700; letter-spacing: -0.02em; line-height: 1; }
        .hero-page .stat .num .accent { color: var(--text-primary); font-weight: 500; }
        .hero-page .stat .lbl { font-size: 13.5px; color: var(--text-secondary); font-weight: 500; margin-top: 8px; }
        .hero-page .stat-div { width: 1px; align-self: stretch; background: var(--border); }

        /* ===== NOW card ===== */
        .hero-page .c-now {
          grid-column: span 3; padding: 24px 28px;
          display: flex; flex-direction: column; gap: 14px;
        }
        .hero-page .now-head { display: flex; align-items: center; gap: 10px; }
        .hero-page .now-head .live-dot {
          width: 9px; height: 9px; border-radius: 50%; background: var(--mint); position: relative;
        }
        .hero-page .now-head .live-dot::after {
          content: ''; position: absolute; inset: 0; border-radius: 50%;
          background: var(--mint); animation: pulse-mint 1.8s var(--ease-custom) infinite;
        }
        .hero-page .now-head .lbl {
          font-size: 12px; font-weight: 600; letter-spacing: 0.06em;
          text-transform: uppercase; color: var(--text-muted);
        }
        .hero-page .now-title { font-size: 18px; font-weight: 600; letter-spacing: -0.01em; }
        .hero-page .now-title b { color: var(--text-primary); }
        .hero-page .skills { display: flex; flex-wrap: wrap; gap: 7px; }
        .hero-page .pill {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 5px 12px; border-radius: var(--radius-full);
          font-size: 12.5px; font-weight: 600;
          background: var(--bg-elevated); color: var(--text-secondary);
          border: 1px solid var(--border);
        }

        /* ===== entrance motion ===== */
        .hero-page .reveal {
          opacity: 0; transform: translateY(20px);
          animation: reveal-up .6s var(--ease-custom) forwards;
        }
        .hero-page .hero-grid .reveal:nth-child(1) { animation-delay: .05s; }
        .hero-page .hero-grid .reveal:nth-child(2) { animation-delay: .13s; }
        .hero-page .hero-grid .reveal:nth-child(3) { animation-delay: .21s; }
        .hero-page .hero-grid .reveal:nth-child(4) { animation-delay: .29s; }

        /* ===== responsive ===== */
        @media (max-width: 1024px) {
          .hero-page .c-intro h1 { font-size: 54px; }
        }
        @media (max-width: 860px) {
          .hero-page { padding: 40px 22px 140px; }
          .hero-page .hero-grid { grid-template-columns: repeat(2, 1fr); }
          .hero-page .c-intro { grid-column: span 2; grid-row: auto; padding: 32px 28px; }
          .hero-page .c-avatar { grid-column: span 2; grid-row: auto; min-height: 300px; }
          .hero-page .c-stats,
          .hero-page .c-now { grid-column: span 2; }
          .hero-page .c-intro h1 { font-size: 44px; }
          /* the doodles have no room to hang outside the cards */
          .hero-page .photo-note { top: 16px; left: 16px; }
          .hero-page .cursor-lbl,
          .hero-page .cursor-lbl .arrow { animation: none; }
          .hero-page .stats-note { top: -22px; right: 14px; }
        }
        @media (max-width: 520px) {
          .hero-page .c-stats { flex-direction: column; align-items: flex-start; gap: 18px; }
          .hero-page .stat-div { display: none; }
          .hero-page .photo-note .arw { display: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-page .reveal { animation: none; opacity: 1; transform: none; }
          .hero-page .cursor-lbl,
          .hero-page .cursor-lbl .arrow,
          .hero-page .evop-bar .evop-logo svg { animation: none; }
          .hero-page .now-head .live-dot::after { animation: none; display: none; }
          .hero-page .btn-primary:hover { transform: none; }
          .hero-page .evop-bar:hover { transform: none; }
        }
      `}</style>
    </main>
  );
}
