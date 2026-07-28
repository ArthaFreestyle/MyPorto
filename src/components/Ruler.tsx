"use client";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Full-screen overlays the ruler should get out of the way for.
 * `.ds-lb.show` is this project's design lightbox; the rest are defensive.
 */
const OVERLAY_SELECTOR = '.ds-lb.show, .lb.show, .lightbox.show, dialog[open]';

/** Top ruler with px labels that parallax-shift with the pointer. Hidden on phones. */
export default function Ruler() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [marks, setMarks] = useState<number[]>([]);
  const [hidden, setHidden] = useState(false);

  const relabel = useCallback(() => {
    const next: number[] = [];
    for (let x = -480; x <= window.innerWidth + 600; x += 120) next.push(x);
    setMarks(next);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    relabel();

    function onMove(e: PointerEvent) {
      const shift = (e.clientX / window.innerWidth - 0.5) * -420;
      track!.style.setProperty("--rx", `${shift.toFixed(1)}px`);
    }

    const sync = () => setHidden(!!document.querySelector(OVERLAY_SELECTOR));
    const observer = new MutationObserver(sync);
    observer.observe(document.body, {
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "open"],
    });
    sync();

    window.addEventListener("resize", relabel);
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", relabel);
      window.removeEventListener("pointermove", onMove);
    };
  }, [relabel]);

  return (
    <>
      <div className="ruler" aria-hidden="true" style={{ opacity: hidden ? 0 : undefined }}>
        <div className="track" ref={trackRef}>
          <div className="ticks" />
          <div className="nums">
            {marks.map((x) => (
              <span key={x} style={{ left: x }}>
                {x}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .ruler {
          position: fixed; top: 0; left: 0; right: 0; height: 26px;
          z-index: 120; pointer-events: none; overflow: hidden;
          background: rgba(255,255,255,0.82);
          backdrop-filter: blur(10px) saturate(1.3);
          -webkit-backdrop-filter: blur(10px) saturate(1.3);
          border-bottom: 1px solid var(--border);
          transition: opacity .2s cubic-bezier(.22,1,.36,1);
        }
        .ruler .track {
          position: absolute; inset: 0;
          transform: translateX(var(--rx, 0px));
          transition: transform .22s cubic-bezier(.2,.7,.3,1);
        }
        .ruler .ticks {
          position: absolute; left: -460px; right: -460px; bottom: 0; height: 26px;
          background-image:
            linear-gradient(to right, #D4D4D8 1px, transparent 1px),
            linear-gradient(to right, #A1A1AA 1px, transparent 1px);
          background-size: 24px 7px, 120px 13px;
          background-position: 0 100%, 0 100%;
          background-repeat: repeat-x;
        }
        .ruler .nums { position: absolute; left: 0; top: 4px; height: 12px; }
        .ruler .nums span {
          position: absolute; top: 0;
          font-family: var(--font-mono), ui-monospace, monospace;
          font-size: 9.5px; font-weight: 700; letter-spacing: .06em;
          color: var(--text-tertiary);
          transform: translateX(3px);
        }
        body.lock .ruler, body.modal-open .ruler, body.no-scroll .ruler { opacity: 0; }
        @media (max-width: 520px) { .ruler { display: none; } }
        @media (prefers-reduced-motion: reduce) { .ruler .track { transition: none; } }
      `}</style>
    </>
  );
}
