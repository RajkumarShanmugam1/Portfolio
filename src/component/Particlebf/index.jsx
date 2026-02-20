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
        let galaxyParticles = [];
        let nextShoot = Date.now() + rand(4000, 8000);

        /* ─── SCENE INITIALIZATION ─── */
        function init() {
            W = canvas.width = window.innerWidth;
            H = canvas.height = window.innerHeight;

            // 1. STARFIELD (Static depth)
            stars = [];
            const starCount = Math.floor((W * H) / 1000);
            for (let i = 0; i < starCount; i++) {
                const [r, g, b] = stellarColor();
                stars.push({
                    x: rand(0, W),
                    y: rand(0, H),
                    size: rand(0.1, 0.7),
                    alpha: rand(0.1, 0.6),
                    r, g, b,
                    phase: rand(0, Math.PI * 2),
                    speed: rand(0.005, 0.02),
                    px: rand(0.005, 0.012) // parallax
                });
            }

            // 2. BRIGHT STARS (Foreground)
            brightStars = [];
            const brightCount = Math.floor((W * H) / 9000);
            for (let i = 0; i < brightCount; i++) {
                const [r, g, b] = stellarColor();
                brightStars.push({
                    x: rand(0, W),
                    y: rand(0, H),
                    size: rand(0.9, 2.2),
                    alpha: rand(0.5, 0.9),
                    r, g, b,
                    phase: rand(0, Math.PI * 2),
                    speed: rand(0.01, 0.03),
                    px: rand(0.02, 0.04)
                });
            }

            // 3. SPIRAL GALAXY PARTICLES
            galaxyParticles = [];
            const numArms = 3;
            const armTightness = 0.5;
            const galaxyCenter = { x: W * 0.75, y: H * 0.35 };
            const galaxySize = Math.min(W, H) * 0.45;

            for (let i = 0; i < 1800; i++) {
                const angle = rand(0, Math.PI * 2 * 3); // ~3 rotations
                const arm = Math.floor(rand(0, numArms)) * (Math.PI * 2 / numArms);
                const rFactor = Math.pow(rand(0, 1), 1.5); // Density toward center
                const distance = rFactor * galaxySize;

                // Logarithmic spiral formula: r = a * e^(b * theta)
                const spiralAngle = angle + arm;
                const spread = (galaxySize * 0.1) * (1 - rFactor) + rand(-20, 20);

                galaxyParticles.push({
                    distance,
                    angle: spiralAngle,
                    arm,
                    size: rand(0.2, 0.9),
                    color: stellarColor(),
                    alpha: (1 - rFactor) * rand(0.2, 0.8),
                    spread
                });
            }
        }

        /* ─── DRAWING FUNCTIONS ─── */

        function drawGalaxy() {
            const centerX = W * 0.75 + (mx - W / 2) * 0.005;
            const centerY = H * 0.35 + (my - H / 2) * 0.005;

            galaxyParticles.forEach(p => {
                // Rotate slowly
                p.angle += 0.0005;

                const x = centerX + Math.cos(p.angle) * p.distance + rand(-1, 1) * p.spread;
                const y = centerY + Math.sin(p.angle) * p.distance * 0.4 + rand(-1, 1) * p.spread; // Compressed for tilt

                if (x < 0 || x > W || y < 0 || y > H) return;

                const [r, g, b] = p.color;
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.alpha})`;
                ctx.beginPath();
                ctx.arc(x, y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });

            // Center glow
            const grd = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 100);
            grd.addColorStop(0, 'rgba(255, 230, 200, 0.15)');
            grd.addColorStop(1, 'transparent');
            ctx.fillStyle = grd;
            ctx.fillRect(centerX - 100, centerY - 100, 200, 200);
        }

        function drawNebulae() {
            const blobs = [
                { x: 0.1, y: 0.2, rx: 0.4, ry: 0.3, color: '80, 50, 200', a: 0.04 },
                { x: 0.8, y: 0.1, rx: 0.3, ry: 0.2, color: '150, 30, 180', a: 0.035 },
                { x: 0.4, y: 0.8, rx: 0.45, ry: 0.35, color: '40, 70, 220', a: 0.03 },
                { x: 0.7, y: 0.5, rx: 0.25, ry: 0.2, color: '200, 50, 100', a: 0.025 }
            ];

            blobs.forEach(b => {
                const cx = b.x * W + (mx - W / 2) * 0.002;
                const cy = b.y * H + (my - H / 2) * 0.002;
                const rx = b.rx * W;
                const ry = b.ry * H;

                ctx.save();
                ctx.translate(cx, cy);
                ctx.scale(rx, ry);
                const grd = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
                grd.addColorStop(0, `rgba(${b.color}, ${b.a})`);
                grd.addColorStop(1, 'transparent');
                ctx.fillStyle = grd;
                ctx.beginPath();
                ctx.arc(0, 0, 1, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            });
        }

        function drawStar(s) {
            const twinkle = Math.sin(frame * s.speed + s.phase);
            const alpha = Math.max(0.05, s.alpha + twinkle * 0.2);
            const sx = s.x + (mx - W / 2) * s.px;
            const sy = s.y + (my - H / 2) * s.px;

            ctx.fillStyle = `rgba(${s.r}, ${s.g}, ${s.b}, ${alpha})`;
            ctx.beginPath();
            ctx.arc(sx, sy, s.size, 0, Math.PI * 2);
            ctx.fill();

            // Diffraction spikes for foreground stars
            if (s.size > 1.2) {
                const len = s.size * 6;
                const spikeAlpha = alpha * 0.4;
                ctx.lineWidth = 0.5;

                // Horizontal
                const hGrd = ctx.createLinearGradient(sx - len, sy, sx + len, sy);
                hGrd.addColorStop(0, 'transparent');
                hGrd.addColorStop(0.5, `rgba(${s.r}, ${s.g}, ${s.b}, ${spikeAlpha})`);
                hGrd.addColorStop(1, 'transparent');
                ctx.strokeStyle = hGrd;
                ctx.beginPath(); ctx.moveTo(sx - len, sy); ctx.lineTo(sx + len, sy); ctx.stroke();

                // Vertical
                const vGrd = ctx.createLinearGradient(sx, sy - len, sx, sy + len);
                vGrd.addColorStop(0, 'transparent');
                vGrd.addColorStop(0.5, `rgba(${s.r}, ${s.g}, ${s.b}, ${spikeAlpha})`);
                vGrd.addColorStop(1, 'transparent');
                ctx.strokeStyle = vGrd;
                ctx.beginPath(); ctx.moveTo(sx, sy - len); ctx.lineTo(sx, sy + len); ctx.stroke();
            }
        }

        function drawShootingStar(s) {
            const spd = Math.hypot(s.vx, s.vy);
            const tx = s.x - (s.vx / spd) * s.tail;
            const ty = s.y - (s.vy / spd) * s.tail;

            const grd = ctx.createLinearGradient(tx, ty, s.x, s.y);
            grd.addColorStop(0, 'transparent');
            grd.addColorStop(1, `rgba(255, 255, 255, ${s.alpha})`);

            ctx.strokeStyle = grd;
            ctx.lineWidth = s.width;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(tx, ty);
            ctx.lineTo(s.x, s.y);
            ctx.stroke();

            s.x += s.vx;
            s.y += s.vy;
            s.alpha -= 0.012;
        }

        function loop() {
            ctx.clearRect(0, 0, W, H);
            frame++;

            drawNebulae();
            drawGalaxy();

            stars.forEach(drawStar);
            brightStars.forEach(drawStar);

            if (Date.now() > nextShoot) {
                const ang = rand(20, 45) * Math.PI / 180;
                const spd = rand(10, 18);
                shootingStars.push({
                    x: rand(0, W * 0.7), y: rand(0, H * 0.4),
                    vx: Math.cos(ang) * spd, vy: Math.sin(ang) * spd,
                    alpha: 1, tail: rand(60, 140), width: rand(0.8, 1.8)
                });
                nextShoot = Date.now() + rand(5000, 15000);
            }

            shootingStars = shootingStars.filter(s => s.alpha > 0.05);
            shootingStars.forEach(drawShootingStar);

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
