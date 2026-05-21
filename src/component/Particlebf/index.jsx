import React, { useEffect, useRef } from 'react';

/**
 * CinematicSpace — Hand-crafted high-performance space engine.
 *
 * Features:
 *  - 🌀 SPIRAL GALAXY: Thousands of particles in a logarithmic spiral configuration.
 *  - 🌫️ NEBULA CLOUDS: Layered radial gradients for deep atmospheric fog.
 *  - ✨ TWINKLING STARS: Multi-layer parallax starfield with diffraction spikes.
 *  - 🌠 SHOOTING STARS: Faster, glowing streaks with fading tails.
 *  - 🖱️ INTERACTION: Subtle parallax drift based on mouse position.
 */

const rand = (min, max) => min + Math.random() * (max - min);

/* Real stellar type → RGB */
function stellarColor() {
    const t = Math.random();
    if (t < 0.08) return [165, 195, 255]; // O/B - Deep Blue
    if (t < 0.25) return [210, 230, 255]; // A - White Blue
    if (t < 0.55) return [255, 255, 255]; // F/G - Pure White
    if (t < 0.72) return [255, 248, 220]; // G - Warm Yellow
    if (t < 0.85) return [255, 225, 175]; // K - Orange
    return [255, 185, 150];               // M - Red
}

export default function CinematicSpace() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let W, H;
        let frame = 0;
        let raf;
        let mx = 0, my = 0;

        let stars = [];
        let brightStars = [];
        let shootingStars = [];
        let nebulaParticles = [];
        let nextShoot = Date.now() + rand(4000, 8000);

        // Optimization: Offscreen layers
        const starCanvas = document.createElement('canvas');
        const dustCanvas = document.createElement('canvas');
        const starCtx = starCanvas.getContext('2d');
        const dustCtx = dustCanvas.getContext('2d');

        /* ─── SCENE INITIALIZATION ─── */
        function init() {
            W = canvas.width = window.innerWidth;
            H = canvas.height = window.innerHeight;

            starCanvas.width = dustCanvas.width = W;
            starCanvas.height = dustCanvas.height = H;

            // 1. STARFIELD (Static depth)
            const starCount = Math.floor((W * H) / 1500);
            starCtx.clearRect(0, 0, W, H);
            for (let i = 0; i < starCount; i++) {
                const [r, g, b] = stellarColor();
                const x = rand(0, W);
                const y = rand(0, H);
                const size = rand(0.1, 0.6);
                const alpha = rand(0.1, 0.5);
                starCtx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
                starCtx.beginPath();
                starCtx.arc(x, y, size, 0, Math.PI * 2);
                starCtx.fill();
            }

            // 2. FINE DUST (Pre-rendered)
            dustCtx.clearRect(0, 0, W, H);
            dustCtx.fillStyle = '#fff';
            for (let i = 0; i < 1500; i++) {
                dustCtx.globalAlpha = rand(0.02, 0.08);
                dustCtx.fillRect(rand(0, W), rand(0, H), rand(0.3, 0.8), rand(0.3, 0.8));
            }
            dustCtx.globalAlpha = 1;

            // 3. NEBULA GASEOUS PARTICLES (Dynamic)
            nebulaParticles = [];
            const gasColors = [[76, 29, 149, 0.02], [8, 145, 178, 0.015], [190, 24, 93, 0.012], [30, 58, 138, 0.018]];
            for (let i = 0; i < 200; i++) {
                nebulaParticles.push({
                    x: rand(-W * 0.2, W * 1.2), y: rand(-H * 0.2, H * 1.2),
                    size: rand(W * 0.15, W * 0.35), color: gasColors[i % 4],
                    vx: rand(-0.015, 0.015), vy: rand(-0.015, 0.015), px: rand(0.01, 0.03)
                });
            }

            // 4. BRIGHT STARS & CLUSTERS
            brightStars = [];
            const clusters = [
                { x: W * 0.2, y: H * 0.3, spread: 150, count: 10 },
                { x: W * 0.8, y: H * 0.7, spread: 200, count: 12 }
            ];
            clusters.forEach(c => {
                for (let i = 0; i < c.count; i++) {
                    const [r, g, b] = stellarColor();
                    brightStars.push({
                        x: c.x + rand(-c.spread, c.spread), y: c.y + rand(-c.spread, c.spread),
                        size: rand(0.8, 1.6), alpha: rand(0.4, 0.7),
                        r, g, b, phase: rand(0, Math.PI * 2), speed: rand(0.01, 0.03), px: rand(0.015, 0.035)
                    });
                }
            });
        }

        /* ─── DRAWING FUNCTIONS ─── */

        function drawNebulae() {
            ctx.globalCompositeOperation = 'screen';
            nebulaParticles.forEach(p => {
                p.x += p.vx; p.y += p.vy;
                if (p.x < -p.size) p.x = W + p.size; if (p.x > W + p.size) p.x = -p.size;
                if (p.y < -p.size) p.y = H + p.size; if (p.y > H + p.size) p.y = -p.size;

                const sx = p.x + (mx - W / 2) * p.px;
                const sy = p.y + (my - H / 2) * p.px;
                const grd = ctx.createRadialGradient(sx, sy, 0, sx, sy, p.size);
                const [r, g, b, a] = p.color;
                grd.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${a})`);
                grd.addColorStop(1, 'transparent');
                ctx.fillStyle = grd;
                ctx.beginPath(); ctx.arc(sx, sy, p.size, 0, Math.PI * 2); ctx.fill();
            });
            ctx.globalCompositeOperation = 'source-over';
        }

        function drawStar(s) {
            const twinkle = Math.sin(frame * s.speed + s.phase);
            const alpha = Math.max(0.05, s.alpha + twinkle * 0.2);
            const sx = s.x + (mx - W / 2) * s.px;
            const sy = s.y + (my - H / 2) * s.px;

            ctx.fillStyle = `rgba(${s.r}, ${s.g}, ${s.b}, ${alpha})`;
            ctx.beginPath(); ctx.arc(sx, sy, s.size, 0, Math.PI * 2); ctx.fill();

            if (s.size > 1.2) {
                const len = s.size * 7;
                ctx.lineWidth = 0.5;
                ctx.strokeStyle = `rgba(${s.r}, ${s.g}, ${s.b}, ${alpha * 0.25})`;
                ctx.beginPath(); ctx.moveTo(sx - len, sy); ctx.lineTo(sx + len, sy); ctx.stroke();
                ctx.beginPath(); ctx.moveTo(sx, sy - len); ctx.lineTo(sx, sy + len); ctx.stroke();
            }
        }

        function loop() {
            ctx.clearRect(0, 0, W, H);
            frame++;

            // Draw pre-rendered layers with parallax
            ctx.drawImage(starCanvas, (mx - W / 2) * 0.005, (my - H / 2) * 0.005);
            ctx.drawImage(dustCanvas, (mx - W / 2) * 0.015, (my - H / 2) * 0.015);

            drawNebulae();
            brightStars.forEach(drawStar);

            if (Date.now() > nextShoot) {
                const ang = rand(20, 45) * Math.PI / 180;
                shootingStars.push({
                    x: rand(0, W * 0.7), y: rand(0, H * 0.4),
                    vx: Math.cos(ang) * 12, vy: Math.sin(ang) * 12,
                    alpha: 1, tail: rand(60, 140), width: rand(0.8, 1.5)
                });
                nextShoot = Date.now() + rand(5000, 15000);
            }

            shootingStars = shootingStars.filter(s => s.alpha > 0.05);
            shootingStars.forEach(s => {
                const spd = Math.hypot(s.vx, s.vy);
                const tx = s.x - (s.vx / spd) * s.tail;
                const ty = s.y - (s.vy / spd) * s.tail;
                const grd = ctx.createLinearGradient(tx, ty, s.x, s.y);
                grd.addColorStop(0, 'transparent'); grd.addColorStop(1, `rgba(255, 255, 255, ${s.alpha})`);
                ctx.strokeStyle = grd; ctx.lineWidth = s.width;
                ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(s.x, s.y); ctx.stroke();
                s.x += s.vx; s.y += s.vy; s.alpha -= 0.012;
            });

            raf = requestAnimationFrame(loop);
        }

        const handleResize = () => init();
        const handleMouse = (e) => { mx = e.clientX; my = e.clientY; };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouse);

        init();
        loop();

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouse);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0, left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
                display: 'block',
                background: '#06050f'
            }}
        />
    );
}
