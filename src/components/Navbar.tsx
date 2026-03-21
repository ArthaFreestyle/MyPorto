"use client";
import { useRef, useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";

const navItems = [
  { icon: "/about-icon.webp", label: "About", href: "/" },
  { icon: "/works-icon.webp", label: "Works", href: "/projects" },
  { icon: "/blog-icon.webp", label: "Blogs", href: "/blogs" },
  { icon: "/design-stash-icon.webp", label: "Experience", href: "/experience" },
];

export default function DockNav() {
  const pathname = usePathname();
  const router = useRouter();
  const dockRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const hasAnimated = useRef(false);

  const dockCallbackRef = useCallback((node: HTMLDivElement | null) => {
    dockRef.current = node;
    if (node && !hasAnimated.current) {
      hasAnimated.current = true;
      gsap.fromTo(
        node,
        { y: 80, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, delay: 0.5, ease: "back.out(1.7)" }
      );
    }
  }, []);

  const handleNavigation = (href: string, index: number) => {
    const btn = itemRefs.current[index];
    if (btn) {
      const icon = btn.querySelector(".dock-icon");
      if (icon) {
        gsap.timeline()
          .to(icon, { rotation: -15, duration: 0.08, ease: "power2.out" })
          .to(icon, { rotation: 12, duration: 0.08, ease: "power2.out" })
          .to(icon, { rotation: -8, duration: 0.06, ease: "power2.out" })
          .to(icon, { rotation: 5, duration: 0.06, ease: "power2.out" })
          .to(icon, { rotation: 0, duration: 0.1, ease: "power2.out" });
      }
    }
    router.push(href);
  };

  const handleHover = (index: number) => {
    setHoveredIndex(index);
    itemRefs.current.forEach((item, i) => {
      if (!item) return;
      const icon = item.querySelector('.dock-icon');
      const dist = Math.abs(i - index);
      const scale = dist === 0 ? 1.35 : dist === 1 ? 1.15 : 1;
      const ty = dist === 0 ? -16 : dist === 1 ? -6 : 0;
      if (icon) {
        gsap.to(icon, { scale, y: ty, duration: 0.3, ease: "back.out(2)" });
      }
    });
  };

  const handleLeave = () => {
    setHoveredIndex(null);
    itemRefs.current.forEach((item) => {
      if (!item) return;
      const icon = item.querySelector('.dock-icon');
      if (icon) {
        gsap.to(icon, { scale: 1, y: 0, duration: 0.4, ease: "power2.out" });
      }
    });
  };

  return (
    <>
      <div className="dock-glow" />

      <div ref={dockCallbackRef} className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 opacity-0">
        <div className="dock-nav flex items-end gap-1.5" onMouseLeave={handleLeave}>
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <button
                key={item.label}
                ref={(el) => { itemRefs.current[index] = el; }}
                onClick={() => handleNavigation(item.href, index)}
                onMouseEnter={() => handleHover(index)}
                className="flex flex-col items-center justify-end px-3 sm:px-5 pb-2.5 h-[64px] rounded-2xl cursor-pointer relative"
                style={{
                  background: isActive ? "rgba(0, 0, 0, 0.05)" : "transparent",
                }}
              >
                <div className="dock-icon w-16 h-16 sm:w-20 sm:h-20 absolute bottom-6 pointer-events-none" style={{ transformOrigin: "bottom center" }}>
                  <Image src={item.icon} alt={item.label} fill className="object-contain drop-shadow-md" sizes="80px" />
                </div>
                <span
                  className="text-[10px] sm:text-xs font-semibold tracking-wide flex items-center gap-1 z-10"
                  style={{ color: isActive ? "var(--text-primary)" : "#8e8e93" }}
                >
                  {isActive && <span style={{ color: "var(--accent-green)" }}>●</span>}
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
