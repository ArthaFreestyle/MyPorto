"use client";
import PageTransition from "@/components/PageTransition";

const linkedInPosts = [
  {
    title: "Why Containerization Won",
    excerpt: "Why did the industry shift so aggressively to Containerization? 🤔 It’s often simplified as 'ease of deployment,' but the real driver is Resource Efficiency.",
    date: "Mar 15, 2026",
    emoji: "💼",
    color: "#0a66c2", // LinkedIn Blue
    link: "https://www.linkedin.com/posts/artha-gandhi-wardhana-aksa-724b42253_cloudarchitecture-devops-containerization-ugcPost-7426269541464219648-Qc-T?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6jiYwBa8hAb6r1zaer7Y_cUmMCEsSj6Fc",
  },
  {
    title: "Stop Wasting CPU Cycles: How I Doubled Throughput with 2 Simple Fixes",
    excerpt: "Many developers assume that json.Marshal or opening a database transaction is 'cheap.' But when your system hits thousands of requests per second, these 'small' costs turn into massive bottlenecks.",
    date: "Feb 28, 2026",
    emoji: "🚀",
    color: "#0a66c2",
    link: "https://www.linkedin.com/posts/artha-gandhi-wardhana-aksa-724b42253_golang-backendengineering-softwarearchitecture-ugcPost-7423291359714942976-VGVN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6jiYwBa8hAb6r1zaer7Y_cUmMCEsSj6Fc",
  },
];

export default function BlogsPage() {
  return (
    <div className="h-[100dvh] w-full flex flex-col overflow-y-auto relative">
      <header className="text-center pt-6 lg:pt-8 pb-3 px-4 flex-shrink-0">
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
          My LinkedIn Posts
        </h1>
        <p className="text-base lg:text-lg mt-2" style={{ color: "var(--text-secondary)" }}>
          Professional updates, thoughts, and my journey.
        </p>
      </header>

      <PageTransition>
        <main className="flex-1 max-w-[800px] mx-auto px-4 sm:px-6 pb-24 w-full page-content">
          <div className="flex flex-col gap-3">
            {linkedInPosts.map((post) => (
              <a 
                key={post.title} 
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 lg:p-7 group cursor-pointer block transition-transform duration-300 hover:scale-[1.01]"
              >
                <div className="flex items-start gap-4 lg:gap-5">
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-bold leading-snug group-hover:underline decoration-2 underline-offset-4" style={{ color: "var(--text-primary)" }}>
                      {post.title}
                    </h3>
                    <p className="text-sm lg:text-base leading-relaxed mt-3" style={{ color: "var(--text-secondary)" }}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <span className="text-sm font-semibold" style={{ color: "#0a66c2" }}>Read on LinkedIn</span>
                      <svg className="w-4 h-4" style={{ color: "#0a66c2" }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                  </div>
                  <div
                    className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center flex-shrink-0 text-3xl lg:text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{ background: `${post.color}15` }}
                  >
                    {post.emoji}
                  </div>
                </div>
                <div className="flex items-center justify-end mt-3">
                  <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>{post.date}</span>
                </div>
              </a>
            ))}
          </div>
        </main>
      </PageTransition>
    </div>
  );
}
