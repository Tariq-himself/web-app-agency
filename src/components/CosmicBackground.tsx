import React, { useEffect, useRef } from 'react';

interface CosmicBackgroundProps {
  accent: string;
  accent2: string;
  intensity?: number;
}

// Convert hex to rgb
function hexToRgb(hex: string): [number, number, number] {
  let c = hex.replace('#', '');
  if (c.length === 3) {
    c = c
      .split('')
      .map((x) => x + x)
      .join('');
  }
  const num = parseInt(c, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

interface Particle3D {
  x: number;
  y: number;
  z: number;
  r: number; // orbital radius
  angle: number;
  speed: number;
  vSpeed: number;
  size: number;
  baseAlpha: number;
  mix: number;
}

export const CosmicBackground: React.FC<CosmicBackgroundProps> = ({
  accent,
  accent2,
  intensity = 0.35,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stateRef = useRef({
    currentAccent: hexToRgb(accent),
    targetAccent: hexToRgb(accent),
    currentAccent2: hexToRgb(accent2),
    targetAccent2: hexToRgb(accent2),
    currentIntensity: intensity,
    targetIntensity: intensity,
    mouse: { x: 0, y: 0, targetX: 0, targetY: 0 },
    scroll: { current: 0, target: 0, velocity: 0 },
    time: 0,
  });

  useEffect(() => {
    stateRef.current.targetAccent = hexToRgb(accent);
    stateRef.current.targetAccent2 = hexToRgb(accent2);
    stateRef.current.targetIntensity = intensity;
  }, [accent, accent2, intensity]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      stateRef.current.mouse.targetX = (e.clientX / innerWidth - 0.5) * 2;
      stateRef.current.mouse.targetY = (e.clientY / innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      stateRef.current.scroll.target = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Continuous 3D Particles
    const particleCount = 135;
    const particles: Particle3D[] = [];

    const initParticle = (zInit?: number): Particle3D => {
      const angle = Math.random() * Math.PI * 2;
      const r = 120 + Math.random() * 680;
      return {
        x: Math.cos(angle) * r,
        y: Math.sin(angle) * (r * 0.65),
        z: zInit !== undefined ? zInit : 80 + Math.random() * 1200,
        r,
        angle,
        speed: (0.15 + Math.random() * 0.45) * (Math.random() > 0.5 ? 1 : -1),
        vSpeed: 0.6 + Math.random() * 1.4,
        size: 1.2 + Math.random() * 2.2,
        baseAlpha: 0.25 + Math.random() * 0.65,
        mix: Math.random(),
      };
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (particles.length === 0) {
        for (let i = 0; i < particleCount; i++) {
          particles.push(initParticle((i / particleCount) * 1250 + 80));
        }
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    let lastScrollY = window.scrollY;

    const render = () => {
      const s = stateRef.current;
      s.time += 0.008;

      // Color lerp
      const lerpSpeed = 0.05;
      for (let i = 0; i < 3; i++) {
        s.currentAccent[i] = lerp(s.currentAccent[i], s.targetAccent[i], lerpSpeed);
        s.currentAccent2[i] = lerp(s.currentAccent2[i], s.targetAccent2[i], lerpSpeed);
      }
      s.currentIntensity = lerp(s.currentIntensity, s.targetIntensity, lerpSpeed);

      // Mouse & Scroll follow
      s.mouse.x = lerp(s.mouse.x, s.mouse.targetX, 0.04);
      s.mouse.y = lerp(s.mouse.y, s.mouse.targetY, 0.04);

      const prevScroll = s.scroll.current;
      s.scroll.current = lerp(s.scroll.current, s.scroll.target, 0.06);
      s.scroll.velocity = s.scroll.current - prevScroll;

      ctx.clearRect(0, 0, width, height);

      // Deep space base
      ctx.fillStyle = '#04050a';
      ctx.fillRect(0, 0, width, height);

      const c1 = s.currentAccent;
      const c2 = s.currentAccent2;

      const mx = s.mouse.x * 45;
      const my = s.mouse.y * 35;
      const cx = width / 2;
      const cy = height / 2;

      // Volumetric Continuous Cosmic Nebulae
      ctx.save();
      ctx.globalCompositeOperation = 'screen';

      const g1X = cx + mx * 0.6 + Math.sin(s.time * 0.6) * 50;
      const g1Y = cy * 0.85 + my * 0.6 + Math.cos(s.time * 0.5) * 40;
      const r1 = Math.max(width, height) * 0.62;

      const grad1 = ctx.createRadialGradient(g1X, g1Y, 0, g1X, g1Y, r1);
      grad1.addColorStop(0, `rgba(${c1[0]}, ${c1[1]}, ${c1[2]}, ${s.currentIntensity * 0.7})`);
      grad1.addColorStop(0.42, `rgba(${c1[0]}, ${c1[1]}, ${c1[2]}, ${s.currentIntensity * 0.25})`);
      grad1.addColorStop(0.8, `rgba(${c1[0]}, ${c1[1]}, ${c1[2]}, 0.03)`);
      grad1.addColorStop(1, 'rgba(4, 5, 10, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const g2X = cx * 1.25 - mx * 0.6 + Math.cos(s.time * 0.55) * 60;
      const g2Y = cy * 1.15 - my * 0.6 + Math.sin(s.time * 0.45) * 45;
      const r2 = Math.max(width, height) * 0.65;

      const grad2 = ctx.createRadialGradient(g2X, g2Y, 0, g2X, g2Y, r2);
      grad2.addColorStop(0, `rgba(${c2[0]}, ${c2[1]}, ${c2[2]}, ${s.currentIntensity * 0.6})`);
      grad2.addColorStop(0.48, `rgba(${c2[0]}, ${c2[1]}, ${c2[2]}, ${s.currentIntensity * 0.18})`);
      grad2.addColorStop(1, 'rgba(4, 5, 10, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Continuous 3D Particle Space Simulation
      const fov = Math.min(width, height) * 0.95;
      const scrollDrift = s.scroll.velocity * 0.45;

      for (let p of particles) {
        // Continuous orbital motion in 3D
        p.angle += p.speed * 0.005;
        p.x = Math.cos(p.angle) * p.r;
        p.y = Math.sin(p.angle) * (p.r * 0.68) + Math.sin(s.time + p.angle) * 35;

        // Continuous Z depth travel (forward drift + scroll responsiveness)
        p.z -= p.vSpeed + scrollDrift;

        // Seamless wrap around depth frustum (no visual breaks)
        if (p.z < 60) {
          p.z = 1350;
          p.r = 140 + Math.random() * 660;
          p.angle = Math.random() * Math.PI * 2;
        } else if (p.z > 1350) {
          p.z = 60;
        }

        // 3D Perspective Projection
        const scale = fov / p.z;
        const screenX = cx + (p.x + mx * 0.5) * scale;
        const screenY = cy + (p.y + my * 0.5) * scale;

        // Skip if outside viewport bounds
        if (screenX < -50 || screenX > width + 50 || screenY < -50 || screenY > height + 50) {
          continue;
        }

        const projectedSize = Math.max(0.6, p.size * scale * 0.85);

        // Depth fog & fade near clipping planes
        const depthAlpha =
          Math.min(1, Math.max(0, (1350 - p.z) / 950)) *
          (p.z > 140 ? 1 : Math.max(0, (p.z - 60) / 80));

        const finalAlpha = Math.max(0, Math.min(1, p.baseAlpha * depthAlpha));

        // Color blending between accent and accent2 for the particle
        const pr = Math.round(c1[0] * (1 - p.mix) + c2[0] * p.mix);
        const pg = Math.round(c1[1] * (1 - p.mix) + c2[1] * p.mix);
        const pb = Math.round(c1[2] * (1 - p.mix) + c2[2] * p.mix);

        ctx.fillStyle = `rgba(${pr}, ${pg}, ${pb}, ${finalAlpha})`;
        ctx.beginPath();
        ctx.arc(screenX, screenY, projectedSize, 0, Math.PI * 2);
        ctx.fill();

        // Delicate luminous halo on closer particles
        if (scale > 0.9 && finalAlpha > 0.4) {
          ctx.fillStyle = `rgba(${pr}, ${pg}, ${pb}, ${finalAlpha * 0.25})`;
          ctx.beginPath();
          ctx.arc(screenX, screenY, projectedSize * 2.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-0 h-full w-full"
        aria-hidden="true"
      />
      {/* Cinematic vignette & noise overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-[1]"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 45%, transparent 50%, rgba(4,5,10,0.65) 100%), linear-gradient(to bottom, rgba(4,5,10,0.4) 0%, transparent 18%, transparent 82%, rgba(4,5,10,0.65) 100%)',
        }}
      />
    </>
  );
};
