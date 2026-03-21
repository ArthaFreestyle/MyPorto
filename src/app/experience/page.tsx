"use client";
import Image from "next/image";
import PageTransition from "@/components/PageTransition";

const experiences = [
  {
    title: "HIMTI",
    role: "Tutoring",
    description: "Himpunan Mahasiswa Teknik Informatika — student organization for IT students advocating for tech education, hosting workshops, and building a strong dev community.",
    image: "/HIMTI.jpg",
    color: "#30d158",
  },
  {
    title: "EVOP",
    role: "Member",
    description: "Software House",
    image: "/EVOP.jpg",
    color: "#af52de",
  },
  {
    title: "GDG Community",
    role: "Member",
    description: "Google Developer Groups — local community for Google technology enthusiasts and developers. Regular meetups, study jams, and collaborative learning sessions.",
    image: "/GDG.jpg",
    color: "#ff9f0a",
  },
];

export default function ExperiencePage() {
  return (
    <div className="h-[100dvh] w-full flex flex-col overflow-y-auto relative">
      <header className="text-center pt-6 lg:pt-8 pb-3 px-4 flex-shrink-0">
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
          Experience &{" "}
          <span className="bg-gradient-to-r from-[#af52de] to-[#ff9f0a] bg-clip-text text-transparent">Community</span>
        </h1>
        <p className="text-base lg:text-lg mt-2" style={{ color: "var(--text-secondary)" }}>
          Growing together with passionate tech minds
        </p>
      </header>

      <PageTransition>
        <main className="flex-1 max-w-[800px] mx-auto px-4 sm:px-6 pb-24 w-full page-content">
          <div className="flex flex-col gap-3 mb-6">
            {experiences.map((exp) => (
              <div key={exp.title} className="glass-card p-6 lg:p-7 flex items-start gap-5 group">
                <div className="w-18 h-18 lg:w-20 lg:h-20 rounded-2xl overflow-hidden flex-shrink-0 ring-2 ring-white/50 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2">
                  <Image src={exp.image} alt={exp.title} width={80} height={80} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg lg:text-xl font-bold" style={{ color: "var(--text-primary)" }}>{exp.title}</h3>
                  <p className="text-sm lg:text-base font-semibold mt-1" style={{ color: exp.color }}>{exp.role}</p>
                  <p className="text-sm lg:text-base leading-relaxed mt-2" style={{ color: "var(--text-secondary)" }}>
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="glass-card p-7 lg:p-9 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
              Let&apos;s work together
            </h3>
            <p className="text-base lg:text-lg mb-6 max-w-md mx-auto" style={{ color: "var(--text-secondary)" }}>
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <a href="mailto:Arumifathina@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ background: "var(--text-primary)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Get in Touch
            </a>

            <div className="flex items-center justify-center gap-5 mt-7 pt-5" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
              {[
                { label: "GitHub", href: "https://github.com/ArthaFreestyle" },
                { label: "LinkedIn", href: "https://linkedin.com/in/artha-gandhi-wardhana-aksa-724b42253/" },
                { label: "Email", href: "mailto:Arumifathina@gmail.com" },
              ].map((link, i) => (
                <span key={link.label} className="flex items-center gap-5">
                  {i > 0 && <span style={{ color: "var(--text-tertiary)" }}>·</span>}
                  <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer" className="text-sm lg:text-base font-medium hover:opacity-70 transition-opacity"
                    style={{ color: "var(--text-secondary)" }}>
                    {link.label}
                  </a>
                </span>
              ))}
            </div>
            <p className="text-xs mt-4" style={{ color: "var(--text-tertiary)" }}>
              © {new Date().getFullYear()} Artha Gandhi Wardhana. Built with Next.js & GSAP.
            </p>
          </div>
        </main>
      </PageTransition>
    </div>
  );
}
