"use client";
import PageTransition from "@/components/PageTransition";

const blogPosts = [
  {
    title: "Why Clean Code Matters More Than You Think",
    excerpt: "Most developers focus on making things work. But the real difference between a junior and senior dev isn't just about solving problems — it's about writing code that others can understand, maintain, and build upon.",
    date: "Mar 15, 2026",
    emoji: "🧹",
    color: "#30d158",
    readTime: "5 min read",
  },
  {
    title: "My Journey From Zero to Full-Stack",
    excerpt: "Two years ago I didn't know what an API was. Now I'm building production apps with Next.js and Laravel. Here's what I learned along the way — the hard parts, the breakthroughs, and the mistakes I'd make again.",
    date: "Feb 28, 2026",
    emoji: "🚀",
    color: "#007aff",
    readTime: "8 min read",
  },
  {
    title: "Stop Overthinking Your Tech Stack",
    excerpt: "I've seen too many developers spend weeks debating between frameworks instead of actually building. The best stack is the one you ship with. Here's my honest take on choosing tools that get the job done.",
    date: "Feb 10, 2026",
    emoji: "🤔",
    color: "#ff9f0a",
    readTime: "4 min read",
  },
  {
    title: "Building for Real Users, Not Just Developers",
    excerpt: "We love our blazing-fast SSR and edge functions, but does your grandma care about your Lighthouse score? A reminder that the best product is one people actually want to use.",
    date: "Jan 22, 2026",
    emoji: "👥",
    color: "#af52de",
    readTime: "6 min read",
  },
  {
    title: "What Hackathons Taught Me About Problem Solving",
    excerpt: "48 hours to build something from scratch. No perfect plan, no time for refactoring. Hackathons stripped away my perfectionism and taught me the most important skill: shipping under pressure.",
    date: "Jan 5, 2026",
    emoji: "⚡",
    color: "#ff3b30",
    readTime: "5 min read",
  },
];

export default function BlogsPage() {
  return (
    <div className="h-[100dvh] w-full flex flex-col overflow-y-auto relative">
      <header className="text-center pt-6 lg:pt-8 pb-3 px-4 flex-shrink-0">
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
          My Thoughts
        </h1>
        <p className="text-base lg:text-lg mt-2" style={{ color: "var(--text-secondary)" }}>
          Little tinkers from my mind, soaked in coffee-fueled chaos.
        </p>
      </header>

      <PageTransition>
        <main className="flex-1 max-w-[800px] mx-auto px-4 sm:px-6 pb-24 w-full page-content">
          <div className="flex flex-col gap-3">
            {blogPosts.map((post) => (
              <div key={post.title} className="glass-card p-6 lg:p-7 group cursor-pointer">
                <div className="flex items-start gap-4 lg:gap-5">
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-bold leading-snug" style={{ color: "var(--text-primary)" }}>
                      {post.title}
                    </h3>
                    <p className="text-sm lg:text-base leading-relaxed mt-3" style={{ color: "var(--text-secondary)" }}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 mt-4">
                      <span className="text-sm font-semibold" style={{ color: "var(--accent-green)" }}>Read more</span>
                      <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>·</span>
                      <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>{post.readTime}</span>
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
              </div>
            ))}
          </div>
        </main>
      </PageTransition>
    </div>
  );
}
