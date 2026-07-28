"use client";
import { useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { DOCK_RESELECT_EVENT } from "@/lib/events";

const NAV_ITEMS = [
  { icon: "/icons-3d/avatar.webp",    label: "About",      href: "/",           dot: "#38BDF8" },
  { icon: "/icons-3d/laptop.webp",    label: "Works",      href: "/projects",   dot: "#00D26A" },
  { icon: "/icons-3d/toolbox.webp",   label: "Designs",    href: "/designs",    dot: "#A78BFA" },
  { icon: "/icons-3d/paper-pen.webp", label: "Blogs",      href: "/blogs",      dot: "#FF9F1C" },
];

export default function DockNav() {
  const pathname = usePathname();
  const router = useRouter();
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

  function handleClick(href: string, index: number) {
    const img = imgRefs.current[index];
    if (img) {
      img.classList.remove("dock-jiggle");
      void img.offsetWidth; // force reflow to restart animation
      img.classList.add("dock-jiggle");
    }
    // clicking the section you're already on replays that page's entrance
    if (pathname === href) {
      window.dispatchEvent(new CustomEvent(DOCK_RESELECT_EVENT, { detail: { href } }));
      return;
    }
    router.push(href);
  }

  return (
    <>
      {/* blurred glow behind dock */}
      <div className="dock-glow" />

      <div
        style={{
          position: "fixed",
          bottom: 26,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 50,
          pointerEvents: "none",
        }}
      >
        <nav
          role="tablist"
          aria-label="Sections"
          className="dock-nav-bar"
          style={{
            pointerEvents: "auto",
            position: "relative",
            display: "flex",
            alignItems: "flex-end",
            gap: 22,
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(16px) saturate(1.4)",
            WebkitBackdropFilter: "blur(16px) saturate(1.4)",
            border: "1px solid #E4E4E7",
            borderRadius: 28,
            padding: "16px 32px 20px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
          }}
        >
          {/* home-indicator dash */}
          <span
            style={{
              position: "absolute",
              bottom: 8,
              left: "50%",
              transform: "translateX(-50%)",
              width: 54,
              height: 4,
              borderRadius: 9999,
              background: "#E4E4E7",
              pointerEvents: "none",
            }}
          />

          {NAV_ITEMS.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <button
                key={item.label}
                role="tab"
                aria-selected={isActive}
                aria-current={isActive ? "page" : undefined}
                aria-label={item.label}
                onClick={() => handleClick(item.href, index)}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                  padding: "0 8px",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {/* 3D icon — rises above bar */}
                <Image
                  ref={(el) => { imgRefs.current[index] = el as HTMLImageElement | null; }}
                  src={item.icon}
                  alt=""
                  width={82}
                  height={82}
                  className={`dock-3d-icon${isActive ? " active" : ""}`}
                  style={{
                    objectFit: "contain",
                    transformOrigin: "bottom center",
                    marginTop: -56,
                    filter: "drop-shadow(0 10px 14px rgba(0,0,0,0.16))",
                  }}
                  priority
                />

                {/* label row */}
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    transition: "all 0.25s cubic-bezier(0.22,1,0.36,1)",
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      flexShrink: 0,
                      background: item.dot,
                      opacity: isActive ? 1 : 0,
                      transition: "opacity 0.25s cubic-bezier(0.22,1,0.36,1)",
                    }}
                  />
                  <span
                    className={`dock-lbl${isActive ? " active" : ""}`}
                    style={{
                      fontSize: isActive ? 19 : 16,
                      fontWeight: isActive ? 700 : 600,
                      color: isActive ? "#0A0A0A" : "#52525B",
                      fontFamily: "'Open Runde', system-ui, sans-serif",
                      letterSpacing: "-0.01em",
                      lineHeight: 1,
                      transition: "all 0.25s cubic-bezier(0.22,1,0.36,1)",
                    }}
                  >
                    {item.label}
                  </span>
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      <style>{`
        @keyframes dock-enter {
          from { opacity: 0; transform: translateY(80px) scale(0.9); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .dock-nav-bar {
          animation: dock-enter 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.5s both;
        }

        .dock-3d-icon {
          transition: transform 0.28s cubic-bezier(0.22,1,0.36,1), filter 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .dock-3d-icon.active {
          transform: scale(1.05) translateY(-2px);
        }
        button:hover .dock-3d-icon,
        button:focus-visible .dock-3d-icon {
          transform: scale(1.2) translateY(-8px) !important;
          filter: drop-shadow(0 16px 18px rgba(0,0,0,0.24)) !important;
        }

        @keyframes dock-jiggle {
          0%   { transform: scale(1.2,1.2) translateY(-8px) rotate(0deg); }
          16%  { transform: scale(1.32,1.04) translateY(-8px) rotate(-7deg); }
          34%  { transform: scale(1.04,1.34) translateY(-12px) rotate(6deg); }
          52%  { transform: scale(1.26,1.12) translateY(-7px) rotate(-4deg); }
          70%  { transform: scale(1.12,1.26) translateY(-9px) rotate(2deg); }
          86%  { transform: scale(1.21,1.18) translateY(-8px) rotate(-1deg); }
          100% { transform: scale(1.2,1.2) translateY(-8px) rotate(0deg); }
        }
        .dock-jiggle {
          animation: dock-jiggle 0.62s cubic-bezier(0.22,1,0.36,1) !important;
        }

        @media (max-width: 520px) {
          .dock-nav-bar { gap: 8px !important; padding: 14px 14px 18px !important; }
          .dock-3d-icon { width: 56px !important; height: 56px !important; margin-top: -38px !important; }
          .dock-nav-bar button { padding: 0 4px !important; min-width: 44px; }
          .dock-lbl { font-size: 12px !important; }
          .dock-lbl.active { font-size: 14px !important; }
        }

        @media (max-width: 360px) {
          .dock-nav-bar { gap: 4px !important; padding: 14px 10px 18px !important; }
          .dock-nav-bar button { padding: 0 2px !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          .dock-nav-bar { animation: none; }
          .dock-3d-icon { transition: none !important; }
          .dock-jiggle { animation: none !important; }
        }
      `}</style>
    </>
  );
}
