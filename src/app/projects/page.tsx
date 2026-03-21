"use client";
import Image from "next/image";
import PageTransition from "@/components/PageTransition";

const projects = [
  {
    title : "Arsiva",
    description: "platform pembelajaran berbasis gamifikasi yang dirancang untuk mengeksplorasi dan menyelami sejarah dengan cara yang sangat interaktif dan memikat.",
    image: "/Arsiva.png",
    tags: ["Go","NextJs", "PostgreSQL","Redis","Docker"],
    link: "https://github.com/ArthaFreestyle/Arsiva",
  },
  {
    title: "SIMBA",
    description: "Sistem Informasi Manajemen Barang Airlangga (Enterprise Resource Planning). Sistem ini dirancang untuk membantu Universitas Airlangga dalam mengelola inventaris barang, melacak aset, dan mengoptimalkan penggunaan sumber daya.",
    image: "/SIMBA.png",
    tags: ["Laravel", "PostgreSQL","Redis","Nginx"],
    link: "https://github.com/ArthaFreestyle/SIMBA",
  },
  {
    title: "PanganMerata",
    description: "Platform digital terintegrasi untuk distribusi pangan di Indonesia. Solusi inovatif untuk menjamin ketersediaan pangan melalui sistem distribusi yang merata dan efisien di seluruh Indonesia.",
    image: "/PanganMerata.png",
    tags: ["Next.js", "React"],
    link: "https://olivia-vert.vercel.app/",
  },
  {
    title: "Jiniso Marketplace",
    description: "Marketplace for Jiniso fashion products with mobile-first layout. Built with a focus on performance, user experience, and modern design patterns.",
    image: "/Jiniso.png",
    tags: ["React", "Node.js"],
    link: "https://github.com/ArthaFreestyle/JINISO",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured marketplace with cart, checkout, and payment integration. Clean UI with product filtering, search, and optimized checkout flow.",
    image: "/Belanja.png",
    tags: ["Next.js", "Tailwind"],
    link: "https://market-place-beta-two.vercel.app/",
  },
  {
    title: "FreightPooling",
    description: "Logistics optimization platform for freight distribution. Integrates mapping APIs for route optimization and real-time tracking.",
    image: "/FreightPooling.png",
    tags: ["React", "Maps API"],
    link: "https://github.com/ArthaFreestyle/olivia2",
  },
  {
    title: "Fuzzy Sugeno Laptop",
    description: "Laptop recommendation system using Fuzzy Sugeno method. AI-powered decision making for optimal laptop selection based on user preferences.",
    image: "/Fuzzy.png",
    tags: ["Python", "ML"],
    link: "https://pakar-plum.vercel.app/",
  },
  {
    title: "Point of Sales",
    description: "POS system with product management, transaction history, and comprehensive daily sales reports for retail businesses.",
    image: "/POS.png",
    tags: ["Laravel", "MySQL"],
    link: "https://github.com/ArthaFreestyle/cashier-app",
  },
];

export default function ProjectsPage() {
  return (
    <div className="h-[100dvh] w-full flex flex-col overflow-y-auto relative">
      <header className="text-center pt-6 lg:pt-8 pb-3 px-4 flex-shrink-0">
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
          My Works Highlights
        </h1>
        <p className="text-base lg:text-lg mt-2" style={{ color: "var(--text-secondary)" }}>
          I&apos;ve worked on a lot of projects, here are some of my favorites.
        </p>
      </header>

      <PageTransition>
        <main className="flex-1 max-w-[800px] mx-auto px-4 sm:px-6 pb-24 w-full page-content">
          <div className="flex flex-col gap-3">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-clip group block"
              >
                {/* Header */}
                <div className="p-6 lg:p-7 pb-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl overflow-hidden flex-shrink-0 shadow-sm" style={{ background: "rgba(0,0,0,0.03)" }}>
                      <Image src={project.image} alt="" width={36} height={36} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="2" strokeLinecap="round">
                      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                    <span className="text-xl transition-transform duration-300 group-hover:translate-x-1" style={{ color: "var(--text-tertiary)" }}>→</span>
                  </div>
                </div>

                {/* Description */}
                <p className="px-6 lg:px-7 text-sm lg:text-base leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                  {project.description}
                </p>

                {/* Screenshot */}
                <div className="px-6 lg:px-7 pb-6 lg:pb-7">
                  <div className="rounded-2xl overflow-hidden shadow-md">
                    <Image src={project.image} alt={project.title} width={800} height={450}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </main>
      </PageTransition>
    </div>
  );
}
