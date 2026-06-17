import { useEffect, useRef } from 'react';

// Soft Indigo Mist — macOS Monterey-style animated light blob wallpaper
const BLOBS = [
  { x: 0.18, y: 0.28, r: 0.50, color: [99,  102, 241], sx: 0.42, sy: 0.35, phase: 0.0  },  // indigo
  { x: 0.72, y: 0.18, r: 0.45, color: [139,  92, 246], sx: 0.38, sy: 0.48, phase: 1.3  },  // violet
  { x: 0.48, y: 0.72, r: 0.48, color: [79,  130, 255], sx: 0.45, sy: 0.40, phase: 2.6  },  // blue
  { x: 0.85, y: 0.60, r: 0.40, color: [168,  85, 247], sx: 0.36, sy: 0.44, phase: 3.9  },  // purple
  { x: 0.12, y: 0.68, r: 0.38, color: [96,  165, 250], sx: 0.40, sy: 0.38, phase: 5.2  },  // sky
];

export default function WallpaperCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let w, h, raf;

    const resize = () => {
      w = canvas.width  = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const tick = (ms) => {
      const t = ms * 0.001;

      // Base light lavender fill
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#dde4ff';
      ctx.fillRect(0, 0, w, h);

      // Animated soft blobs
      BLOBS.forEach(b => {
        const bx = (b.x + Math.sin(t * b.sx + b.phase) * 0.14) * w;
        const by = (b.y + Math.cos(t * b.sy + b.phase) * 0.11) * h;
        const br = b.r * Math.min(w, h);
        const [r, g, bl] = b.color;
        const grad = ctx.createRadialGradient(bx, by, 0, bx, by, br);
        grad.addColorStop(0,   `rgba(${r},${g},${bl},0.32)`);
        grad.addColorStop(0.45,`rgba(${r},${g},${bl},0.12)`);
        grad.addColorStop(1,   `rgba(${r},${g},${bl},0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      });

      // Soft noise overlay to break up banding — very subtle
      ctx.globalAlpha = 0.018;
      ctx.fillStyle = '#a5b4fc';
      for (let i = 0; i < 6; i++) {
        ctx.fillRect(
          Math.sin(t * 0.3 + i) * w * 0.5 + w * 0.25,
          Math.cos(t * 0.25 + i) * h * 0.4 + h * 0.25,
          w * 0.5, h * 0.5
        );
      }
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, zIndex: -1, display: 'block', pointerEvents: 'none' }}
    />
  );
}
