"use client";
import Image from "next/image";
import PageTransition from "@/components/PageTransition";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import LiquidText from "@/components/LiquidText";

const stack = [
  {
    id: 1,
    image: "/php.webp"
  },
  {
    id: 2,
    image: "/rust-original.svg"
  },
  {
    id: 3,
    image: "/go.webp"
  }
]

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeStatTooltip, setActiveStatTooltip] = useState<string | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    gsap.fromTo(hero, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, delay: 0.1, ease: "power3.out" });
  }, []);

  return (
    <div className="h-[100dvh] w-full flex flex-col overflow-y-auto lg:overflow-hidden relative">
      <PageTransition>
        <main className="flex-1 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-6 py-8 md:py-10 lg:py-10 mt-2 md:mt-4 lg:mt-6 w-full min-h-0">
          <div className="h-full grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-6">

            {/* ===== LEFT COLUMN: Profile ===== */}
            <div className="lg:col-span-4 flex flex-col gap-3">

              {/* Profile Card — photo + name SIDE BY SIDE on top, then details */}
              <div className="glass-card p-6 md:p-10 lg:p-13">
                {/* Photo + Title side by side */}
                <div ref={heroRef} className="flex items-center gap-4 mb-5 opacity-0">
                  <div className="w-40 h-48 md:w-20 md:h-28 lg:w-28 lg:h-36 rounded-xl overflow-hidden shadow-lg ring-2 ring-white/50 flex-shrink-0">
                    <Image src="/profile.jpg" alt="Artha Gandhi" width={96} height={96} className="w-full h-full border-2 border-black object-cover" priority />
                  </div>
                  <div className="flex-1 w-full h-full flex flex-col justify-center items-center overflow-hidden">
                    <LiquidText />
                  </div>
                  <div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <h2 className="text-2xl lg:text-2xl font-bold" style={{ color: "var(--text-primary)" }}>Artha Gandhi Wardhana Aksa</h2>
                  <div className="flex items-center gap-2.5">
                    {[
                      { href: "https://github.com/ArthaFreestyle", d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z", fill: true },
                      { href: "https://linkedin.com/in/artha-gandhi-wardhana-aksa-724b42253", d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", fill: true },
                    ].map((s, i) => (
                      <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                        className="w-15 h-15 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        style={{ background: "rgba(0,0,0,0.04)" }}>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="var(--text-secondary)"><path d={s.d} /></svg>
                      </a>
                    ))}
                  </div>
                </div>

              </div>

              <div className="glass-card p-5 md:p-5 lg:p-5" >
                {/* Badge */}

                <div >
                  <div className="flex flex-col md:flex-row gap-3 mb-2">
                    <div className="flex flex-row items-center">
                      <AnimatedTooltip items={stack} />
                    </div>
                    <p className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>Backend Engineer</p>
                  </div>
                  <p className="text-xs" style={{ color: "var(--text-secondary)" }}>From coffee brainstorm to launch day. I like to Dev and Design.</p>
                </div>

              </div>

              <div className="glass-card p-6 md:p-7 lg:p-8" >
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                  {[
                    { v: "10+", l: "Projects\nShipped", t: "From building robust APIs from scratch to exorcising N+1 demons from legacy code. I've seen it all." },
                    { v: "5+", l: "Satisfied\nClients", t: "I turn sluggish backends into speed demons so founders can finally sleep at night. You're in good hands." },
                    { v: "2+", l: "Years of\nJourney", t: "Writing clean architecture, optimizing heavy queries, and fixing whatever the previous guy broke." }
                  ].map((s) => (
                    <div key={s.l} className="text-center relative"
                      onMouseEnter={() => setActiveStatTooltip(s.l)}
                      onMouseLeave={() => setActiveStatTooltip(null)}>
                      <p className="text-2xl lg:text-3xl font-bold" style={{ color: "var(--text-primary)" }}>{s.v}</p>
                      <p className="text-[10px] lg:text-xs leading-tight whitespace-pre-line mt-1" style={{ color: "var(--text-secondary)" }}>{s.l}</p>

                      {/* Tooltip Wrapper to prevent CSS animation from overwriting translate-x */}
                      {activeStatTooltip === s.l && (
                        <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-48 z-50">
                          <div className="ios-tooltip text-center block shadow-[0_10px_40px_rgba(0,0,0,0.5)] w-full"
                            style={{
                              animation: "puzzlePop 0.35s ease forwards",
                              cursor: "default",
                              background: "linear-gradient(145deg, rgba(140, 140, 145, 0.95) 0%, rgba(15, 15, 18, 0.95) 100%)",
                              border: "1px solid rgba(255, 255, 255, 0.2)"
                            }}>
                            {s.t}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ===== CENTER COLUMN: Bio + Philosophy ===== */}
            <div className="lg:col-span-5 flex flex-col gap-3">

              {/* Bio Card */}
              <div className="glass-card p-6 lg:p-7 flex-1 relative cursor-default">
  <p className="text-base font-bold md:text-xl lg:text-xl leading-relaxed mb-4" style={{ color: "var(--text-primary)" }}>
    I kicked things off diving deep into server-side logic and system design, building APIs from scratch and untangling messy databases.
  </p>
  <p className="text-base font-bold md:text-xl lg:text-xl leading-relaxed mb-4" style={{ color: "var(--text-primary)" }}>
    That curiosity morphed into a full-on obsession with performance, where I&apos;ve spent my time optimizing queries, rewriting legacy systems, and making sure the backend actually scales.
  </p>
  <p className="text-base md:text-2xl lg:text-xl leading-relaxed mb-4" style={{ color: "var(--text-primary)" }}>
    From{" "}
    <span className="font-bold" style={{ color: "var(--accent-green)" }}>architecting clean code</span>{" "}
    to{" "}
    <span className="font-bold" style={{ color: "var(--accent-blue)" }}>shipping high-performance platforms</span>.
  </p>
  <p className="text-sm lg:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
    Most devs are busy chasing the latest frontend trends, but I care about the foundation. You&apos;ll find me nerding out over clean architecture, hunting down N+1 queries, or hanging out in tech communities.
  </p>
  <p className="text-sm lg:text-base leading-relaxed mt-3" style={{ color: "var(--text-secondary)" }}>
    When my teammates get lost in technical jargon, I&apos;m usually the one pulling us back to the fundamentals. It&apos;s not just about typing code; it&apos;s about building maintainable systems that solve actual business problems without crashing under pressure.
  </p>
</div>

              {/* Philosophy */}
              <div className="glass-card p-6 lg:p-7">
                <h3 className="text-2xl font-bold flex items-center gap-2 mb-4" style={{ color: "var(--text-primary)" }}>
                  💡 My Philosophy
                </h3>
                <blockquote className="text-center mb-4">
                  <p className="text-xl lg:text-2xl font-bold italic" style={{ color: "var(--text-primary)" }}>
                    &ldquo;Build Systems, Not Just Features&rdquo;
                  </p>
                </blockquote>
                <p className="text-sm lg:text-base leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
                  Writing code is the easy part; making it scale is where the real engineering happens.
                  Building an API? Focus on database optimization and response time.
                  Handling legacy code? Exorcise those N+1 queries before they bring the server down.
                </p>
                <p className="text-sm lg:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  It&apos;s not about throwing the newest, most hyped framework at a problem. It&apos;s about
                  using the <span className="font-semibold" style={{ color: "var(--accent-blue)" }}>right architecture and patterns</span> to build a robust foundation that lasts.
                </p>
              </div>
            </div>

            {/* ===== RIGHT COLUMN: Competition ===== */}
            <div className="lg:col-span-3 flex flex-col gap-3">

              {/* Achievements Card */}
              <div className="glass-card p-6 lg:p-7 flex-1">
                <h3 className="text-lg font-bold flex items-center gap-2 mb-5" style={{ color: "var(--text-primary)" }}>
                  Competition Experience
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "Olivia 2025", desc: "PanganMerata - Participant", badge: "/Olivia.webp", color: "#FFFFFF" },
                    { title: "Gemastik 2025", desc: "Participant", badge: "/Gemastik.webp", color: "#FFFFFF" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-center gap-3 md:gap-4 group cursor-default">
                      {/* Square webp badge on the left */}
                      <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg shrink-0 overflow-hidden bg-white/5 border flex items-center justify-center p-1.5" style={{ background: `${item.color}15`, borderColor: `${item.color}30` }}>
                        <img src={item.badge} alt={`${item.title} badge`} width={44} height={44} className="w-full h-full object-contain" onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/44' }} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm lg:text-base font-semibold" style={{ color: "var(--text-primary)" }}>{item.title}</p>
                        <p className="text-xs lg:text-sm mt-0.5" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>



              {/* <a href="https://drive.google.com/uc?export=download&id=1Jhve40bZx2OtnB9zPV2umtmYjZgjW4G_" download
                className="glass-card p-4 flex items-center justify-center gap-2 group cursor-pointer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span className="text-sm font-semibold" style={{ color: "var(--accent-blue)" }}>Download CV</span>
              </a> */}
            </div>

          </div>
        </main>
      </PageTransition>
    </div>
  );
}
