"use client";

import { useEffect, useRef, useState } from "react";

const CODE_SNIPPETS = [
  "const",
  "let",
  "=>",
  "{}",
  "</>",
  "()",
  "[]",
  "npm",
  "git",
  "fn()",
  "async",
  "await",
  "return",
  "::",
  "&&",
  "||",
  "++",
  "==",
  "//",
];

type Particle = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
};

/**
 * Scope-reticle cursor (designer/coder tool feel).
 *
 * Default : 4 corner ticks forming a viewfinder reticle around a center dot,
 *           with a slowly rotating outer accent.
 * Hover   : reticle pulls inward and snaps to a square frame, terminal
 *           prompt label `> name` appears below.
 * Click   : ticks slam inward briefly for tactile feedback.
 *
 * Pure monochrome (gray-900 + white) — desktop only.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const reticleRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hoverLabel, setHoverLabel] = useState("");

  useEffect(() => {
    let rafId = 0;
    const target = { x: -100, y: -100 };
    const reticle = { x: -100, y: -100 };
    let rotation = 0;

    // Particle trail state
    const particles: Particle[] = [];
    const particleEls = new Map<number, HTMLSpanElement>();
    let particleId = 0;
    let lastSpawnX = -100;
    let lastSpawnY = -100;
    let lastSpawnT = 0;

    const getLabel = (el: HTMLElement) => {
      const data = el.getAttribute("data-cursor-label");
      if (data) return data;
      const aria = el.getAttribute("aria-label");
      const raw = (aria || el.textContent || "").trim().replace(/\s+/g, " ");
      return (raw.split(" ")[0] || "link").toLowerCase().slice(0, 16);
    };

    let hoveredEl: HTMLElement | null = null;

    const updateForElement = (el: HTMLElement | null) => {
      const clickable = el
        ? (el.closest("a") as HTMLElement | null) ||
          (el.closest("button") as HTMLElement | null)
        : null;
      hoveredEl = clickable;
      setHoverLabel(clickable ? getLabel(clickable) : "");
    };

    const handleMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      setIsVisible(true);
      updateForElement(e.target as HTMLElement);
    };

    // Touch handlers (mobile/tablet)
    const handleTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      target.x = t.clientX;
      target.y = t.clientY;
      setIsVisible(true);
      const el = document.elementFromPoint(t.clientX, t.clientY) as HTMLElement | null;
      updateForElement(el);
    };

    const handleTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      target.x = t.clientX;
      target.y = t.clientY;
      // Snap reticle to position on first touch
      reticle.x = t.clientX;
      reticle.y = t.clientY;
      setIsVisible(true);
      setIsClicking(true);
      const el = document.elementFromPoint(t.clientX, t.clientY) as HTMLElement | null;
      updateForElement(el);
    };

    let touchHideTimer: ReturnType<typeof setTimeout> | null = null;
    const handleTouchEnd = () => {
      setIsClicking(false);
      if (touchHideTimer) clearTimeout(touchHideTimer);
      // Fade out cursor a bit after touch lifts
      touchHideTimer = setTimeout(() => setIsVisible(false), 600);
    };

    const handleDown = () => setIsClicking(true);
    const handleUp = () => setIsClicking(false);
    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    // Track current reticle size for smooth morph
    const size = { w: 40, h: 40 };

    const spawnParticle = (x: number, y: number) => {
      const container = particlesRef.current;
      if (!container) return;
      const text =
        CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.4 + Math.random() * 0.8;
      const p: Particle = {
        id: particleId++,
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.4,
        life: 1,
      };
      particles.push(p);

      const el = document.createElement("span");
      el.textContent = text;
      el.className =
        "absolute font-mono font-semibold whitespace-nowrap select-none text-gray-900";
      el.style.fontSize = `${10 + Math.random() * 4}px`;
      el.style.textShadow = "0 0 6px rgba(255,255,255,0.9)";
      el.style.willChange = "transform, opacity";
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      container.appendChild(el);
      particleEls.set(p.id, el);
    };

    const animate = () => {
      // Dot snaps to mouse instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%)`;
      }

      // Compute reticle target position + size
      let tx = target.x;
      let ty = target.y;
      let tw = 40;
      let th = 40;

      if (hoveredEl) {
        const rect = hoveredEl.getBoundingClientRect();
        tx = rect.left + rect.width / 2;
        ty = rect.top + rect.height / 2;
        tw = rect.width + 16;
        th = rect.height + 12;
        // Don't rotate while locked on element
      } else {
        rotation += 0.25;
      }

      reticle.x += (tx - reticle.x) * 0.22;
      reticle.y += (ty - reticle.y) * 0.22;
      size.w += (tw - size.w) * 0.2;
      size.h += (th - size.h) * 0.2;

      if (reticleRef.current) {
        const rot = hoveredEl ? 0 : rotation;
        reticleRef.current.style.transform = `translate3d(${reticle.x}px, ${reticle.y}px, 0) translate(-50%, -50%) rotate(${rot}deg)`;
        reticleRef.current.style.width = `${size.w}px`;
        reticleRef.current.style.height = `${size.h}px`;
      }

      // Label sits below the reticle
      if (labelRef.current) {
        const labelY = hoveredEl
          ? reticle.y + size.h / 2 + 12
          : target.y + 24;
        labelRef.current.style.transform = `translate3d(${target.x}px, ${labelY}px, 0) translate(-50%, 0)`;
      }

      // Spawn code particles based on movement (skip when hovering links)
      if (!hoveredEl) {
        const dx = target.x - lastSpawnX;
        const dy = target.y - lastSpawnY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const now = performance.now();
        if (dist > 8 && now - lastSpawnT > 50) {
          spawnParticle(target.x, target.y);
          lastSpawnX = target.x;
          lastSpawnY = target.y;
          lastSpawnT = now;
        }
      }

      // Update existing particles (physics + fade)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.02; // gravity
        p.life -= 0.02;
        const el = particleEls.get(p.id);
        if (!el) continue;
        if (p.life <= 0) {
          el.remove();
          particleEls.delete(p.id);
          particles.splice(i, 1);
        } else {
          el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%) scale(${p.life})`;
          el.style.opacity = `${p.life}`;
        }
      }

      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchcancel", handleTouchEnd);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      cancelAnimationFrame(rafId);
      if (touchHideTimer) clearTimeout(touchHideTimer);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
      particleEls.forEach((el) => el.remove());
      particleEls.clear();
    };
  }, []);

  const hovering = hoverLabel.length > 0;

  return (
    <>
      {/* Code particle trail container (behind cursor) */}
      <div
        ref={particlesRef}
        className="fixed inset-0 pointer-events-none z-9996 overflow-hidden"
        aria-hidden
      />

      {/* Reticle: 4 corner ticks (rotates idle, wraps the link on hover) */}
      <div
        ref={reticleRef}
        className="fixed top-0 left-0 pointer-events-none z-9998"
        style={{
          width: "40px",
          height: "40px",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.25s ease",
          willChange: "transform, width, height",
        }}
      >
        <div
          className="relative w-full h-full"
          style={{
            transform: `scale(${isClicking ? 0.7 : 1})`,
            transition: "transform 0.18s ease",
          }}
        >
          {/* Top-left tick */}
          <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-gray-900" />
          {/* Top-right tick */}
          <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-gray-900" />
          {/* Bottom-left tick */}
          <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-gray-900" />
          {/* Bottom-right tick */}
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-gray-900" />
        </div>
      </div>

      {/* Center dot (snaps exactly to cursor) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-9999 rounded-full bg-gray-900"
        style={{
          width: isClicking ? "12px" : hovering ? "4px" : "6px",
          height: isClicking ? "12px" : hovering ? "4px" : "6px",
          opacity: isVisible ? 1 : 0,
          transition: "width 0.18s ease, height 0.18s ease, opacity 0.25s ease",
          boxShadow: "0 0 0 2px rgba(255,255,255,0.9), 0 2px 8px rgba(0,0,0,0.3)",
          willChange: "transform, width, height",
        }}
      />

      {/* Terminal-prompt label below cursor */}
      <div
        ref={labelRef}
        className="fixed top-0 left-0 pointer-events-none z-9999"
        style={{
          opacity: isVisible && hovering ? 1 : 0,
          transition: "opacity 0.2s ease",
          willChange: "transform, opacity",
        }}
      >
        <div
          className="font-mono text-xs font-semibold text-white bg-gray-900 px-3 py-1.5 rounded-md whitespace-nowrap shadow-[0_6px_18px_rgba(0,0,0,0.35)] flex items-center gap-2"
          style={{
            animation: "cursor-label-in 0.22s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        >
          <span className="text-gray-400">~ $</span>
          <span>{hoverLabel}</span>
          <span className="inline-block w-1.5 h-3 bg-white" style={{ animation: "cursor-blink 1s steps(2) infinite" }} />
        </div>
      </div>

      <style jsx global>{`
        @keyframes cursor-blink {
          to {
            opacity: 0;
          }
        }
        @keyframes cursor-label-in {
          from {
            opacity: 0;
            transform: translateX(-6px) scale(0.92);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        @media (pointer: fine) {
          html,
          body,
          a,
          button,
          input,
          textarea,
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
