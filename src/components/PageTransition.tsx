"use client";
import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";

interface Props {
  children: ReactNode;
}

export default function PageTransition({ children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Find all glass cards and animate them in puzzle-pop style
    const cards = container.querySelectorAll(".glass-card, .glass-card-clip, .glass-card-sm");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          scale: 0.7,
          y: 30,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.6,
          delay: 0.15 + index * 0.08,
          ease: "back.out(1.4)",
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="relative z-10 h-full">
      {children}
    </div>
  );
}
