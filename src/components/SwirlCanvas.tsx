import React, { useEffect, useRef } from 'react';

interface SwirlCanvasProps {
  particleCount?: number;
  color?: string; // rgb base e.g. "180, 205, 255"
}

export const SwirlCanvas: React.FC<SwirlCanvasProps> = ({
  particleCount = 110,
  color = '180, 205, 255',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    interface Particle {
      x: number;
      y: number;
      a: number; // angle
      r: number; // radius
      s: number; // speed
    }

    let particles: Particle[] = [];

    const spawn = (): Particle => {
      const a = Math.random() * Math.PI * 2;
      const r = Math.max(width, height) * (0.35 + 0.45 * Math.random());
      return {
        x: width / 2 + Math.cos(a) * r,
        y: height / 2 + Math.sin(a) * r,
        a,
        r,
        s: 0.2 + 0.6 * Math.random(),
      };
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = Array.from({ length: particleCount }, () => spawn());
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;
      const maxR = 0.85 * Math.max(width, height);

      for (let p of particles) {
        p.r -= p.s;
        p.a += 0.0035;

        if (p.r < 8) {
          Object.assign(p, spawn());
        }

        p.x = cx + Math.cos(p.a) * p.r;
        p.y = cy + Math.sin(p.a) * p.r;

        const alpha = Math.min(1, (1 - p.r / maxR) * 0.95);
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [particleCount, color]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
};
