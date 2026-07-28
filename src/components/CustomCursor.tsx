"use client";
import { useEffect, useRef, useState } from "react";

/** Elements that make the cursor tag pop and turn pink. */
const HOT_SELECTOR =
  'a, button, [role="button"], .evop-bar, .dock-item, .social, input, textarea, select, summary';

/**
 * Figma-style pointer with a "you" label, trailing the real cursor.
 * Renders nothing on touch/coarse-pointer devices.
 */
export default function CustomCursor() {
  const curRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  // fine-pointer check has to wait for the client
  useEffect(() => {
    setEnabled(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  useEffect(() => {
    const cur = curRef.current;
    if (!enabled || !cur) return;

    document.body.classList.add("has-cursor");

    let tx = -100;
    let ty = -100;
    let x = tx;
    let y = ty;
    let raf: number | null = null;

    function loop() {
      x += (tx - x) * 0.26;
      y += (ty - y) * 0.26;
      cur!.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0)`;
      raf =
        Math.abs(tx - x) > 0.2 || Math.abs(ty - y) > 0.2
          ? requestAnimationFrame(loop)
          : null;
    }

    function onMove(e: PointerEvent) {
      tx = e.clientX;
      ty = e.clientY;
      cur!.classList.add("on");
      const target = e.target as Element | null;
      cur!.classList.toggle("hot", !!target?.closest?.(HOT_SELECTOR));
      if (!raf) raf = requestAnimationFrame(loop);
    }

    const onDown = () => cur.classList.add("press");
    const onUp = () => cur.classList.remove("press");
    const onOut = () => cur.classList.remove("on");

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.addEventListener("pointerleave", onOut);
    window.addEventListener("blur", onOut);

    return () => {
      document.body.classList.remove("has-cursor");
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointerleave", onOut);
      window.removeEventListener("blur", onOut);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div className="my-cursor" ref={curRef} aria-hidden="true">
        <svg
          className="ptr"
          viewBox="0 0 20 25"
          fill="#38BDF8"
          stroke="#141414"
          strokeWidth="1.5"
          strokeLinejoin="round"
        >
          <path d="M2 1.6l15.2 9.6-7.1 1.5L6.6 22.8z" />
        </svg>
        <span className="tag">you</span>
      </div>

      <style>{`
        body.has-cursor, body.has-cursor * { cursor: none !important; }
        .my-cursor {
          position: fixed; top: 0; left: 0;
          z-index: 2147483000; pointer-events: none;
          display: flex; align-items: flex-start;
          transform: translate3d(-100px,-100px,0);
          opacity: 0;
          transition: opacity .18s cubic-bezier(.22,1,.36,1);
          will-change: transform;
        }
        .my-cursor.on { opacity: 1; }
        .my-cursor .ptr {
          width: 20px; height: 25px;
          filter: drop-shadow(0 2px 3px rgba(0,0,0,.25));
          transition: transform .16s cubic-bezier(.34,1.56,.64,1);
          transform-origin: 2px 2px;
        }
        .my-cursor.press .ptr { transform: scale(.82); }
        .my-cursor .tag {
          margin: 14px 0 0 -2px;
          font-family: var(--font-mono), ui-monospace, monospace;
          font-size: 11px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase;
          color: #fff; background: var(--sky-blue);
          border: 1.5px solid var(--ink); border-radius: var(--radius-full);
          padding: 4px 11px; white-space: nowrap;
          box-shadow: 0 2px 0 rgba(20,20,20,.85);
          transition: transform .2s cubic-bezier(.34,1.56,.64,1),
                      background-color .2s cubic-bezier(.22,1,.36,1);
        }
        .my-cursor.hot .tag { transform: translateY(-2px) scale(1.06); background: var(--pink-sg); }
        @media (prefers-reduced-motion: reduce) {
          .my-cursor .ptr, .my-cursor .tag { transition: none; }
        }
      `}</style>
    </>
  );
}
