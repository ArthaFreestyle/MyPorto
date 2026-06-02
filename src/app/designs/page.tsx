"use client";
import { useEffect, useRef, useCallback } from "react";
import { Pause, Play, Crosshair, X, ChevronLeft, ChevronRight, Copy, FileCode2 } from "lucide-react";
import { marked } from "marked";

/* ── design data ── */
const DESIGNS: Record<string, { title: string; badge: string; img: string; md: string }> = {
  d31: {
    title: "Arsiva",
    badge: "Portfolio · Mobile",
    img: "/arsiva-cover.png",
    md: `# Arsiva — Cover\n\nHero shot for **Arsiva**, a gamified learning platform for the history and culture of Tulungagung.\n\n## Direction\n- **Palette:** warm yellow-orange anchor, cream surfaces, deep brown text\n- **Mascot:** soft, friendly — leans into local heritage without feeling like a museum\n- **Type:** display weight for the wordmark, humanist sans for body\n\n> Make local heritage feel as engaging as a mobile game.`,
  },
  d32: {
    title: "Surat",
    badge: "Portfolio · Web",
    img: "/surat-cover.webp",
    md: `# Surat — Cover\n\nPress-shot for **Surat**, an AI-powered form filler.\n\n## Direction\n- **Story:** kill the chore of retyping data from paper documents\n- **Palette:** cream paper + warm coral accent — "paperwork, but less painful"\n- **Hero device:** browser + OCR overlay, side-by-side with source document\n\n\`\`\`\nOCR → structured fields → auto-fill the page you have open\n\`\`\``,
  },
  d33: {
    title: "SIMBA",
    badge: "Portfolio · ERP",
    img: "/simba-cover.png",
    md: `# SIMBA — Cover\n\nPress-shot for **SIMBA** (*Sistem Informasi Manajemen Barang Airlangga*), an enterprise ERP for Universitas Airlangga.\n\n## Direction\n- **Palette:** institutional navy + soft sky tint, with a single mint highlight for active state\n- **Density:** enterprise — tables, filters, status pills; calm, not crowded\n- **Story:** end-to-end asset lifecycle from procurement to reinventory\n\n> Enterprise tools don't have to feel hostile.`,
  },
  d34: {
    title: "Airlangga Maps",
    badge: "Portfolio · Mobile",
    img: "/maps-admin.webp",
    md: `# Airlangga Maps — Admin\n\nAdmin / desk shot for **Airlangga Maps**, a campus wayfinding app.\n\n## Direction\n- **Palette:** mint primary on near-white surfaces, soft greys for chrome\n- **Map layer:** muted base — only the user's destination and route are saturated\n- **Story:** new students should find the room, the canteen, the prayer room without asking\n\nEach place: photos, opening hours, short description, walking directions.`,
  },
  d35: {
    title: "Arsiva · Showcase",
    badge: "Portfolio · Mobile",
    img: "/arsiva-landscape.png",
    md: `# Arsiva — Showcase\n\nPress-kit hero for **Arsiva**, a gamified learning platform for Tulungagung's history and culture.\n\n## Direction\n- **Palette:** warm cream canvas + the brand's mint anchor; flat cartoon illustration to match the playful tone\n- **Composition:** four hero screens — Profile, Quiz catalog, Dashboard greeting, Leaderboard — stitched by a hand-drawn line journey\n- **Story:** learning local heritage should feel as engaging as a daily streak app\n\n> Local heritage, but with XP.`,
  },
  d36: {
    title: "Airlangga Maps · Hero",
    badge: "Portfolio · Mobile",
    img: "/maps-landscape.webp",
    md: `# Airlangga Maps — Hero\n\nPress-kit hero for **Airlangga Maps**, a campus wayfinding app for new students.\n\n## Direction\n- **Palette:** mint primary on near-white surfaces; deep green ink for type\n- **Composition:** four key screens — Home directory, Map with pin callout, Building detail, About & categories — connected by a route line with iconographic stops\n- **Story:** find the room, the canteen, the prayer room without asking\n\n\`\`\`\nBeranda  →  Peta  →  Detail  →  Info\n\`\`\``,
  },
  d37: {
    title: "Map Directory · Admin",
    badge: "Portfolio · Web",
    img: "/maps-admin-web.webp",
    md: `# Map Directory · Admin\n\nInternal **admin panel** login for Airlangga Maps — the surface that Cloud Computing operators use to keep the mobile app's data fresh.\n\n## Direction\n- **Palette:** split canvas — institutional black on the left for the brand promise, neutral cream on the right for the form\n- **Type:** display weight headline sets the job-to-be-done immediately\n- **Composition:** marketing-grade hero on the left, a quiet credentials form on the right with TLS & rate-limit signals\n\n> Even an internal tool deserves a first screen that feels considered.`,
  },
};

const ALL_IDS = Object.keys(DESIGNS);
const IMG_POOL = ALL_IDS.map((id) => DESIGNS[id].img);

function cellHash(c: number, r: number): number {
  let x = (c | 0) * 73856093 ^ (r | 0) * 19349663;
  x = (x ^ (x >>> 16)) * 0x45d9f3b;
  x = (x ^ (x >>> 16)) * 0x45d9f3b;
  x = x ^ (x >>> 16);
  return Math.abs(x);
}

function cellDesignId(c: number, r: number): string {
  return ALL_IDS[cellHash(c, r) % ALL_IDS.length];
}


export default function DesignsPage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);

  /* state held in refs to avoid re-renders in the rAF loop */
  const panX = useRef(0);
  const panY = useRef(0);
  const velX = useRef(0);
  const velY = useRef(0);
  const drifting = useRef(true);
  const isDragging = useRef(false);
  const isHovering = useRef(false);
  const dragStartX = useRef(0);
  const dragStartY = useRef(0);
  const panStartX = useRef(0);
  const panStartY = useRef(0);
  const lastMoveX = useRef(0);
  const lastMoveY = useRef(0);
  const lastMoveTime = useRef(0);
  const dragMoved = useRef(0);
  const downPointerId = useRef<number | null>(null);
  const lastTime = useRef(performance.now());
  const rafId = useRef<number>(0);
  const cellEls = useRef<Map<string, HTMLButtonElement>>(new Map());

  /* lightbox state */
  const lbRef = useRef<HTMLDivElement>(null);
  const lbImgRef = useRef<HTMLImageElement>(null);
  const lbTitleRef = useRef<HTMLDivElement>(null);
  const lbBodyRef = useRef<HTMLDivElement>(null);
  const lbDesignIdx = useRef(0);
  const currentMd = useRef('');

  /* controls */
  const ctlPlayRef = useRef<HTMLButtonElement>(null);
  const ctlPlayIconRef = useRef<HTMLSpanElement>(null);

  const computeCellSize = useCallback(() => {
    const vw = window.innerWidth;
    const tileW = Math.max(220, Math.min(360, vw * 0.22));
    const tileH = tileW * (2 / 3);
    const gap = Math.max(14, Math.min(24, vw * 0.016));
    return { tileW, tileH, gap, cellW: tileW + gap, cellH: tileH + gap };
  }, []);

  const geomRef = useRef({ tileW: 280, tileH: 186, gap: 18, cellW: 298, cellH: 204 });

  function colYOffset(c: number): number {
    const m = ((c % 3) + 3) % 3;
    return (m * geomRef.current.cellH) / 3;
  }

  function buildTile(designId: string): HTMLButtonElement {
    const meta = DESIGNS[designId];
    const el = document.createElement('button');
    el.className = 'ds-tile';
    el.dataset.id = designId;
    el.setAttribute('aria-label', meta.title);
    el.innerHTML = `
      <span class="ds-badge"><span class="ds-dot"></span>${meta.badge}</span>
      <span class="ds-hint"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="m21 3-7 7"/><path d="m3 21 7-7"/></svg></span>
      <img src="${meta.img}" alt="${meta.title}" draggable="false" />
    `;
    return el;
  }

  function render() {
    const world = worldRef.current;
    if (!world) return;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const { tileW, tileH, cellW, cellH } = geomRef.current;
    const px = panX.current;
    const py = panY.current;
    const BUFFER = 200;
    const minC = Math.floor((-px - tileW - BUFFER) / cellW);
    const maxC = Math.ceil((-px + vw + BUFFER) / cellW);
    const minR = Math.floor((-py - tileH - BUFFER) / cellH);
    const maxR = Math.ceil((-py + vh + BUFFER) / cellH);

    const stale = new Set(cellEls.current.keys());

    for (let c = minC; c <= maxC; c++) {
      const yOff = colYOffset(c);
      for (let r = minR; r <= maxR; r++) {
        const key = `${c},${r}`;
        stale.delete(key);
        let el = cellEls.current.get(key);
        if (!el) {
          const id = cellDesignId(c, r);
          el = buildTile(id);
          el.style.width = tileW + 'px';
          el.style.height = tileH + 'px';
          world.appendChild(el);
          cellEls.current.set(key, el);
        }
        const x = c * cellW;
        const y = r * cellH + yOff;
        el.style.transform = `translate3d(${x}px,${y}px,0)`;
      }
    }

    stale.forEach((key) => {
      const el = cellEls.current.get(key);
      if (el?.parentNode) el.parentNode.removeChild(el);
      cellEls.current.delete(key);
    });

    world.style.transform = `translate3d(${px}px,${py}px,0)`;
  }

  function showDesign(idx: number) {
    const i = ((idx % ALL_IDS.length) + ALL_IDS.length) % ALL_IDS.length;
    lbDesignIdx.current = i;
    const id = ALL_IDS[i];
    const meta = DESIGNS[id];
    if (lbImgRef.current) { lbImgRef.current.src = meta.img; lbImgRef.current.alt = meta.title; }
    if (lbTitleRef.current) lbTitleRef.current.textContent = meta.title;
    currentMd.current = meta.md;
    if (lbBodyRef.current) {
      try { lbBodyRef.current.innerHTML = marked.parse(meta.md) as string; }
      catch { lbBodyRef.current.textContent = meta.md; }
      lbBodyRef.current.scrollTop = 0;
    }
    const copyBtn = document.getElementById('ds-copy-btn');
    if (copyBtn) { copyBtn.classList.remove('copied'); copyBtn.querySelector('span')!.textContent = 'Copy'; }
  }

  function openLightbox(designId: string) {
    const idx = ALL_IDS.indexOf(designId);
    showDesign(idx >= 0 ? idx : 0);
    lbRef.current?.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeLb() {
    lbRef.current?.classList.remove('show');
    document.body.style.overflow = '';
  }

  useEffect(() => {
    geomRef.current = computeCellSize();
    const stage = stageRef.current;
    if (!stage) return;

    const DRIFT_X = 0.18;
    const DRIFT_Y = 0.07;

    function tick(now: number) {
      const dt = Math.min(48, now - lastTime.current);
      lastTime.current = now;
      const f = dt / 16.6667;

      const damp = Math.pow(0.92, f);
      velX.current *= damp;
      velY.current *= damp;
      if (Math.abs(velX.current) < 0.02) velX.current = 0;
      if (Math.abs(velY.current) < 0.02) velY.current = 0;

      panX.current += velX.current * f;
      panY.current += velY.current * f;

      if (drifting.current && !isDragging.current && !isHovering.current) {
        panX.current -= DRIFT_X * f;
        panY.current -= DRIFT_Y * f;
      }

      render();
      rafId.current = requestAnimationFrame(tick);
    }
    rafId.current = requestAnimationFrame(tick);

    /* drag */
    const onPointerDown = (e: PointerEvent) => {
      if (e.button !== 0) return;
      isDragging.current = true;
      dragMoved.current = 0;
      dragStartX.current = e.clientX;
      dragStartY.current = e.clientY;
      panStartX.current = panX.current;
      panStartY.current = panY.current;
      lastMoveX.current = e.clientX;
      lastMoveY.current = e.clientY;
      lastMoveTime.current = performance.now();
      velX.current = 0;
      velY.current = 0;
      stage.classList.add('dragging');
      downPointerId.current = e.pointerId;
      stage.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return;
      const dx = e.clientX - dragStartX.current;
      const dy = e.clientY - dragStartY.current;
      dragMoved.current = Math.max(dragMoved.current, Math.abs(dx), Math.abs(dy));
      panX.current = panStartX.current + dx;
      panY.current = panStartY.current + dy;
      const now = performance.now();
      const dt = Math.max(1, now - lastMoveTime.current);
      velX.current = ((e.clientX - lastMoveX.current) / dt) * 16;
      velY.current = ((e.clientY - lastMoveY.current) / dt) * 16;
      lastMoveX.current = e.clientX;
      lastMoveY.current = e.clientY;
      lastMoveTime.current = now;
    };

    const endDrag = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      stage.classList.remove('dragging');
      if (downPointerId.current != null) {
        try { stage.releasePointerCapture(downPointerId.current); } catch {}
      }
      downPointerId.current = null;
    };

    const onPointerOver = (e: PointerEvent) => {
      if ((e.target as Element).closest?.('.ds-tile')) isHovering.current = true;
    };
    const onPointerOut = (e: PointerEvent) => {
      const into = e.relatedTarget && (e.relatedTarget as Element).closest?.('.ds-tile');
      if (!into) isHovering.current = false;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      panX.current -= e.deltaX;
      panY.current -= e.deltaY;
      velX.current = 0;
      velY.current = 0;
    };

    const onClick = (e: MouseEvent) => {
      const tile = (e.target as Element).closest?.('.ds-tile') as HTMLButtonElement | null;
      if (!tile) return;
      if (dragMoved.current > 6) { e.preventDefault(); e.stopPropagation(); return; }
      openLightbox(tile.dataset.id!);
    };

    stage.addEventListener('pointerdown', onPointerDown);
    stage.addEventListener('pointermove', onPointerMove);
    stage.addEventListener('pointerup', endDrag);
    stage.addEventListener('pointercancel', endDrag);
    stage.addEventListener('pointerover', onPointerOver);
    stage.addEventListener('pointerout', onPointerOut);
    stage.addEventListener('wheel', onWheel, { passive: false });
    stage.addEventListener('click', onClick, true);
    stage.addEventListener('dragstart', (e) => e.preventDefault());

    const onResize = () => {
      geomRef.current = computeCellSize();
      cellEls.current.forEach((el) => el.remove());
      cellEls.current.clear();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (!lbRef.current?.classList.contains('show')) return;
      if (e.key === 'Escape') closeLb();
      else if (e.key === 'ArrowLeft') showDesign(lbDesignIdx.current - 1);
      else if (e.key === 'ArrowRight') showDesign(lbDesignIdx.current + 1);
    };

    window.addEventListener('resize', onResize);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      cancelAnimationFrame(rafId.current);
      stage.removeEventListener('pointerdown', onPointerDown);
      stage.removeEventListener('pointermove', onPointerMove);
      stage.removeEventListener('pointerup', endDrag);
      stage.removeEventListener('pointercancel', endDrag);
      stage.removeEventListener('pointerover', onPointerOver);
      stage.removeEventListener('pointerout', onPointerOut);
      stage.removeEventListener('wheel', onWheel);
      stage.removeEventListener('click', onClick, true);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('keydown', onKeyDown);
      cellEls.current.forEach((el) => el.remove());
      cellEls.current.clear();
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── controls wired after mount ── */
  function toggleDrift() {
    drifting.current = !drifting.current;
    ctlPlayRef.current?.classList.toggle('active', !drifting.current);
  }

  function recenter() {
    const t0 = performance.now();
    const sx = panX.current;
    const sy = panY.current;
    const dur = 600;
    function step(t: number) {
      const k = Math.min(1, (t - t0) / dur);
      const ease = 1 - Math.pow(1 - k, 3);
      panX.current = sx * (1 - ease);
      panY.current = sy * (1 - ease);
      if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  async function copyMd() {
    const btn = document.getElementById('ds-copy-btn');
    if (!btn) return;
    try {
      await navigator.clipboard.writeText(currentMd.current);
      btn.classList.add('copied');
      btn.querySelector('span')!.textContent = 'Copied';
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.querySelector('span')!.textContent = 'Copy';
      }, 1400);
    } catch {}
  }

  return (
    <>
      {/* ── STAGE ── */}
      <div ref={stageRef} className="ds-stage">
        <div ref={worldRef} className="ds-world" />
      </div>

      {/* ── CONTROLS ── */}
      <div className="ds-controls">
        <button
          ref={ctlPlayRef}
          className="ds-ctl"
          aria-label="Pause auto-drift"
          title="Pause drift"
          onClick={toggleDrift}
        >
          <Pause size={16} className="ds-ctl-pause" />
          <Play size={16} className="ds-ctl-play" style={{ display: 'none' }} />
        </button>
        <button className="ds-ctl" aria-label="Recenter" title="Recenter" onClick={recenter}>
          <Crosshair size={16} />
        </button>
      </div>

      {/* ── LIGHTBOX ── */}
      <div ref={lbRef} className="ds-lb" role="dialog" aria-modal="true" aria-label="Design viewer" onClick={(e) => { if (e.target === lbRef.current) closeLb(); }}>
        <button className="ds-lb-close" aria-label="Close (Esc)" onClick={closeLb}>
          <X size={18} />
        </button>
        <button className="ds-lb-nav ds-lb-prev" aria-label="Previous" onClick={() => showDesign(lbDesignIdx.current - 1)}>
          <ChevronLeft size={20} />
        </button>
        <button className="ds-lb-nav ds-lb-next" aria-label="Next" onClick={() => showDesign(lbDesignIdx.current + 1)}>
          <ChevronRight size={20} />
        </button>

        <div className="ds-lb-card">
          <div className="ds-lb-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img ref={lbImgRef} alt="" className="ds-lb-img" />
          </div>
          <aside className="ds-lb-md">
            <header className="ds-lb-md-head">
              <span className="ds-file-ico"><FileCode2 size={18} /></span>
              <div className="ds-title-wrap">
                <div className="ds-file-name">Design.md</div>
                <div ref={lbTitleRef} className="ds-file-title">—</div>
              </div>
              <button id="ds-copy-btn" className="ds-copy-btn" aria-label="Copy markdown" onClick={copyMd}>
                <Copy size={14} /><span>Copy</span>
              </button>
            </header>
            <div ref={lbBodyRef} className="ds-lb-md-body" />
          </aside>
        </div>
      </div>

      <style>{`
        /* ── stage ── */
        .ds-stage {
          position: fixed;
          inset: 0;
          z-index: 1;
          overflow: hidden;
          cursor: grab;
          background: var(--bg-base, #FAFAFA);
          --fade: 70px;
          -webkit-mask-image:
            linear-gradient(to right, transparent 0, black var(--fade), black calc(100% - var(--fade)), transparent 100%),
            linear-gradient(to bottom, transparent 0, black var(--fade), black calc(100% - var(--fade)), transparent 100%);
          -webkit-mask-composite: source-in;
          mask-image:
            linear-gradient(to right, transparent 0, black var(--fade), black calc(100% - var(--fade)), transparent 100%),
            linear-gradient(to bottom, transparent 0, black var(--fade), black calc(100% - var(--fade)), transparent 100%);
          mask-composite: intersect;
        }
        .ds-stage.dragging { cursor: grabbing; }
        .ds-stage.dragging * { cursor: grabbing !important; }

        .ds-world {
          position: absolute; top: 0; left: 0;
          width: 0; height: 0;
          will-change: transform;
        }

        /* ── tile ── */
        .ds-tile {
          position: absolute;
          border-radius: 16px;
          overflow: hidden;
          background: var(--bg-elevated, #F4F5F7);
          box-shadow: 0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04);
          border: 1px solid var(--border, #E4E4E7);
          cursor: zoom-in;
          padding: 0;
          scale: 1;
          transition: scale .35s cubic-bezier(0.22,1,0.36,1), box-shadow .35s cubic-bezier(0.22,1,0.36,1);
          user-select: none;
          -webkit-user-drag: none;
          will-change: transform;
        }
        .ds-tile:hover {
          scale: 1.025;
          box-shadow: 0 6px 16px rgba(0,0,0,0.08), 0 12px 32px rgba(0,0,0,0.10);
          z-index: 3;
        }
        .ds-tile img {
          display: block; width: 100%; height: 100%; object-fit: cover;
          pointer-events: none; -webkit-user-drag: none;
        }

        .ds-badge {
          position: absolute; top: 10px; left: 10px;
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.94);
          backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
          color: var(--text-primary, #0A0A0A);
          border-radius: 9999px; padding: 5px 11px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.01em;
          box-shadow: 0 1px 2px rgba(0,0,0,0.06);
          opacity: 0; transform: translateY(-4px);
          transition: opacity .25s, transform .25s;
          pointer-events: none;
        }
        .ds-tile:hover .ds-badge { opacity: 1; transform: translateY(0); }
        .ds-dot { width: 6px; height: 6px; border-radius: 50%; background: #A78BFA; flex-shrink: 0; }

        .ds-hint {
          position: absolute; right: 10px; bottom: 10px;
          width: 30px; height: 30px; border-radius: 9999px;
          background: rgba(255,255,255,0.94);
          backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
          display: grid; place-items: center; color: var(--text-primary, #0A0A0A);
          box-shadow: 0 1px 2px rgba(0,0,0,0.06);
          opacity: 0; transform: translateY(4px);
          transition: opacity .25s, transform .25s;
          pointer-events: none;
        }
        .ds-tile:hover .ds-hint { opacity: 1; transform: translateY(0); }

        /* ── controls ── */
        .ds-controls {
          position: fixed; top: 18px; right: 18px; z-index: 6;
          display: flex; gap: 8px;
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(12px) saturate(1.4); -webkit-backdrop-filter: blur(12px) saturate(1.4);
          border: 1px solid var(--border, #E4E4E7);
          border-radius: 9999px;
          padding: 6px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.06);
        }
        .ds-ctl {
          width: 34px; height: 34px;
          border: none; background: transparent;
          border-radius: 9999px;
          display: grid; place-items: center;
          cursor: pointer; color: var(--text-secondary, #52525B);
          transition: background .18s, color .18s;
        }
        .ds-ctl:hover { background: var(--bg-elevated, #F4F5F7); color: var(--text-primary, #0A0A0A); }
        .ds-ctl.active { background: var(--text-primary, #0A0A0A); color: #fff; }
        .ds-ctl.active .ds-ctl-pause { display: none !important; }
        .ds-ctl.active .ds-ctl-play { display: block !important; }

        /* ── lightbox ── */
        .ds-lb {
          position: fixed; inset: 0; z-index: 100;
          background: rgba(15,15,20,0.62);
          backdrop-filter: blur(10px) saturate(1.2); -webkit-backdrop-filter: blur(10px) saturate(1.2);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; pointer-events: none;
          transition: opacity .3s cubic-bezier(0.22,1,0.36,1);
          padding: 40px;
        }
        .ds-lb.show { opacity: 1; pointer-events: auto; }

        .ds-lb-card {
          background: var(--bg-card, #fff);
          border-radius: 24px;
          width: 100%; max-width: 1280px;
          max-height: calc(100vh - 80px);
          display: grid; grid-template-columns: minmax(0,1fr) 420px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.2);
          transform: scale(0.96); opacity: 0;
          transition: transform .35s cubic-bezier(0.34,1.56,0.64,1), opacity .25s cubic-bezier(0.22,1,0.36,1);
        }
        .ds-lb.show .ds-lb-card { transform: scale(1); opacity: 1; }

        .ds-lb-image {
          background: var(--bg-elevated, #F4F5F7);
          display: flex; align-items: center; justify-content: center;
          padding: 32px;
          position: relative;
          min-height: 480px;
          overflow: hidden;
        }
        .ds-lb-image::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(120% 80% at 50% 0%, rgba(167,139,250,0.10), transparent 60%);
          pointer-events: none;
        }
        .ds-lb-img {
          max-width: 100%; max-height: calc(100vh - 144px);
          width: auto; height: auto; object-fit: contain;
          border-radius: 14px;
          box-shadow: 0 16px 40px rgba(0,0,0,0.18), 0 4px 12px rgba(0,0,0,0.08);
          position: relative; z-index: 1;
        }

        .ds-lb-md { background: var(--bg-card, #fff); border-left: 1px solid var(--border, #E4E4E7); display: flex; flex-direction: column; min-width: 0; }
        .ds-lb-md-head { padding: 24px 28px 18px; border-bottom: 1px solid var(--border, #E4E4E7); display: flex; align-items: center; gap: 12px; }
        .ds-file-ico { width: 36px; height: 36px; border-radius: 10px; background: #EDE9FE; color: #6D28D9; display: grid; place-items: center; flex-shrink: 0; }
        .ds-title-wrap { display: flex; flex-direction: column; min-width: 0; flex: 1; }
        .ds-file-name { font-size: 14px; font-weight: 600; color: var(--text-muted, #A1A1AA); font-family: ui-monospace, 'SF Mono', Menlo, monospace; }
        .ds-file-title { font-size: 18px; font-weight: 700; letter-spacing: -0.01em; color: var(--text-primary, #0A0A0A); margin-top: 1px; }
        .ds-copy-btn {
          margin-left: auto; flex-shrink: 0; display: inline-flex; align-items: center; gap: 6px;
          font-family: inherit; font-size: 13px; font-weight: 600;
          background: var(--bg-elevated, #F4F5F7); color: var(--text-secondary, #52525B);
          border: 1px solid var(--border, #E4E4E7); border-radius: 9999px; padding: 7px 12px;
          cursor: pointer; transition: all .18s;
        }
        .ds-copy-btn:hover { background: var(--text-primary, #0A0A0A); color: #fff; border-color: var(--text-primary, #0A0A0A); }
        .ds-copy-btn.copied { background: #A78BFA; color: #fff; border-color: #A78BFA; }

        .ds-lb-md-body { flex: 1; overflow: auto; padding: 24px 28px 30px; font-size: 14.5px; line-height: 1.62; color: var(--text-secondary, #52525B); }
        .ds-lb-md-body h1 { font-size: 22px; font-weight: 700; letter-spacing: -0.02em; color: var(--text-primary, #0A0A0A); margin: 0 0 12px; }
        .ds-lb-md-body h2 { font-size: 17px; font-weight: 700; letter-spacing: -0.01em; color: var(--text-primary, #0A0A0A); margin: 22px 0 8px; }
        .ds-lb-md-body h3 { font-size: 14px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; color: var(--text-muted, #A1A1AA); margin: 18px 0 6px; }
        .ds-lb-md-body p { margin: 0 0 12px; }
        .ds-lb-md-body ul, .ds-lb-md-body ol { padding-left: 22px; margin: 0 0 14px; }
        .ds-lb-md-body li { margin: 4px 0; }
        .ds-lb-md-body li::marker { color: #A78BFA; }
        .ds-lb-md-body a { color: #6D28D9; text-decoration: none; border-bottom: 1px solid #EDE9FE; }
        .ds-lb-md-body a:hover { border-bottom-color: #A78BFA; }
        .ds-lb-md-body hr { border: none; border-top: 1px solid var(--border, #E4E4E7); margin: 18px 0; }
        .ds-lb-md-body strong { color: var(--text-primary, #0A0A0A); font-weight: 600; }
        .ds-lb-md-body code { font-family: ui-monospace, 'SF Mono', Menlo, monospace; font-size: 12.5px; background: var(--bg-elevated, #F4F5F7); padding: 2px 6px; border-radius: 6px; color: #6D28D9; }
        .ds-lb-md-body pre { background: #0F1115; color: #E6E6EB; padding: 14px 16px; border-radius: 12px; overflow: auto; margin: 0 0 14px; font-size: 12.5px; line-height: 1.55; }
        .ds-lb-md-body pre code { background: transparent; color: inherit; padding: 0; }
        .ds-lb-md-body blockquote { margin: 0 0 14px; padding: 10px 16px; background: #EDE9FE; color: #6D28D9; border-radius: 10px; font-weight: 500; }

        .ds-lb-close {
          position: absolute; top: 18px; right: 18px; z-index: 120;
          width: 42px; height: 42px; border-radius: 9999px;
          background: rgba(255,255,255,0.95); border: 1px solid rgba(255,255,255,0.4);
          display: grid; place-items: center; cursor: pointer;
          box-shadow: 0 4px 14px rgba(0,0,0,0.25);
          transition: transform .18s, background .18s;
          color: var(--text-primary, #0A0A0A);
        }
        .ds-lb-close:hover { transform: rotate(90deg) scale(1.05); background: #fff; }

        .ds-lb-nav {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 48px; height: 48px; border-radius: 9999px;
          background: rgba(255,255,255,0.95); border: 1px solid rgba(255,255,255,0.4);
          display: grid; place-items: center; cursor: pointer;
          box-shadow: 0 4px 14px rgba(0,0,0,0.22);
          transition: transform .18s, background .18s;
          z-index: 110; color: var(--text-primary, #0A0A0A);
        }
        .ds-lb-nav:hover { background: #fff; }
        .ds-lb-prev { left: 18px; }
        .ds-lb-prev:hover { transform: translateY(-50%) translateX(-3px); }
        .ds-lb-next { right: calc(420px + 18px); }
        .ds-lb-next:hover { transform: translateY(-50%) translateX(3px); }

        @media (max-width: 980px) {
          .ds-lb { padding: 16px; }
          .ds-lb-card { grid-template-columns: 1fr; max-height: calc(100vh - 32px); }
          .ds-lb-image { min-height: 280px; padding: 20px; }
          .ds-lb-img { max-height: 60vh; }
          .ds-lb-md { border-left: none; border-top: 1px solid var(--border, #E4E4E7); max-height: 46vh; }
          .ds-lb-next { right: 18px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .ds-tile, .ds-lb, .ds-lb-card { transition: none !important; animation: none !important; }
          .ds-lb-card { transform: scale(1) !important; opacity: 1 !important; }
        }
      `}</style>
    </>
  );
}
