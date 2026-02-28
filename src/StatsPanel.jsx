import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const DAY_LABELS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

function StatsPanel({ onExit, streak }) {
    // Build last-7-days data from localStorage
    const days = useMemo(() => {
        const dailyXP = JSON.parse(localStorage.getItem('dailyXP') || '{}');
        return Array.from({ length: 7 }, (_, i) => {
            const d = new Date();
            d.setDate(d.getDate() - (6 - i));
            const key = d.toISOString().slice(0, 10);
            return {
                label: DAY_LABELS[d.getDay()],
                date: key,
                xp: dailyXP[key] || 0,
                isToday: i === 6
            };
        });
    }, []);

    const maxXP = Math.max(...days.map(d => d.xp), 50);
    const totalWeek = days.reduce((s, d) => s + d.xp, 0);
    const bestDay = days.reduce((best, d) => d.xp > best.xp ? d : best, days[0]);
    const activeDays = days.filter(d => d.xp > 0).length;

    const SVG_H = 120;
    const SVG_W = 300;
    const BAR_W = 30;
    const GAP = (SVG_W - BAR_W * 7) / 8;

    return (
        <div className="dashboard-container" style={{ minHeight: '100vh', padding: '20px' }}>
            <div className="mesh-container"><div className="orb orb-1" /><div className="orb orb-3" /></div>

            {/* Header */}
            <header className="header" style={{ marginBottom: '30px' }}>
                <button onClick={onExit} className="glass-card"
                    style={{ padding: '12px 24px', borderRadius: '16px', margin: 0, background: 'rgba(255,255,255,0.1)' }}>
                    ← VOLVER
                </button>
                <div className="badge-pill" style={{ background: 'rgba(176,86,224,0.2)', color: '#b056e0' }}>
                    📊 ESTA SEMANA
                </div>
            </header>

            {/* Summary cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px', marginBottom: '24px' }}>
                {[
                    { icon: '⚡', label: 'XP SEMANA', value: totalWeek },
                    { icon: '🔥', label: 'RACHA', value: `${streak} días` },
                    { icon: '📅', label: 'DÍAS ACTIVOS', value: `${activeDays}/7` }
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card"
                        style={{ padding: '18px', textAlign: 'center', background: 'rgba(255,255,255,0.07)' }}
                    >
                        <div style={{ fontSize: '28px', marginBottom: '6px' }}>{stat.icon}</div>
                        <div style={{ fontSize: '11px', fontWeight: 900, opacity: 0.5, letterSpacing: '1px', color: '#fff', marginBottom: '4px' }}>
                            {stat.label}
                        </div>
                        <div style={{ fontSize: '20px', fontWeight: 900, color: '#fff' }}>{stat.value}</div>
                    </motion.div>
                ))}
            </div>

            {/* SVG Bar Chart */}
            <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="glass-card"
                style={{ padding: '28px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
                <div style={{ fontSize: '12px', fontWeight: 900, opacity: 0.5, letterSpacing: '2px', marginBottom: '20px', color: '#fff' }}>
                    XP POR DÍA — ÚLTIMOS 7 DÍAS
                </div>

                <svg viewBox={`0 0 ${SVG_W} ${SVG_H + 30}`} width="100%" style={{ overflow: 'visible' }}>
                    {days.map((day, i) => {
                        const barH = maxXP > 0 ? (day.xp / maxXP) * SVG_H : 0;
                        const x = GAP + i * (BAR_W + GAP);
                        const y = SVG_H - barH;
                        const isToday = day.isToday;
                        const fill = day.xp === 0
                            ? 'rgba(255,255,255,0.08)'
                            : isToday
                                ? 'url(#gradToday)'
                                : 'url(#gradNormal)';

                        return (
                            <g key={day.date}>
                                <defs>
                                    <linearGradient id="gradNormal" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.9" />
                                        <stop offset="100%" stopColor="#9d50bb" stopOpacity="0.6" />
                                    </linearGradient>
                                    <linearGradient id="gradToday" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#ffb400" stopOpacity="1" />
                                        <stop offset="100%" stopColor="#ff6b35" stopOpacity="0.8" />
                                    </linearGradient>
                                </defs>

                                {/* Background track */}
                                <rect x={x} y={0} width={BAR_W} height={SVG_H} rx={8}
                                    fill="rgba(255,255,255,0.04)" />

                                {/* Actual bar (animated via motion requires foreignObject or workaround; use CSS instead) */}
                                <rect x={x} y={y} width={BAR_W} height={barH || 2} rx={8}
                                    fill={fill}
                                    style={{ transition: 'height 0.6s ease, y 0.6s ease' }}
                                />

                                {/* Today highlight ring */}
                                {isToday && (
                                    <rect x={x - 2} y={-2} width={BAR_W + 4} height={SVG_H + 4} rx={10}
                                        fill="none" stroke="rgba(255,180,0,0.4)" strokeWidth={1.5} />
                                )}

                                {/* XP label on top */}
                                {day.xp > 0 && (
                                    <text x={x + BAR_W / 2} y={y - 6} textAnchor="middle"
                                        fill={isToday ? '#ffb400' : '#00e5ff'}
                                        fontSize={9} fontWeight={900}>
                                        {day.xp}
                                    </text>
                                )}

                                {/* Day label below */}
                                <text x={x + BAR_W / 2} y={SVG_H + 18} textAnchor="middle"
                                    fill={isToday ? '#ffb400' : 'rgba(255,255,255,0.5)'}
                                    fontSize={10} fontWeight={isToday ? 900 : 600}>
                                    {day.label}
                                </text>
                            </g>
                        );
                    })}
                </svg>

                {/* Best day callout */}
                {bestDay && bestDay.xp > 0 && (
                    <div style={{
                        marginTop: '20px', padding: '14px 18px', borderRadius: '14px',
                        background: 'rgba(0,229,255,0.07)', border: '1px solid rgba(0,229,255,0.2)',
                        display: 'flex', alignItems: 'center', gap: '12px'
                    }}>
                        <span style={{ fontSize: '24px' }}>🏆</span>
                        <div>
                            <div style={{ fontSize: '10px', opacity: 0.5, fontWeight: 900, letterSpacing: '1px', color: '#fff' }}>MEJOR DÍA</div>
                            <div style={{ fontSize: '16px', fontWeight: 900, color: '#00e5ff' }}>{bestDay.label} — {bestDay.xp} XP</div>
                        </div>
                    </div>
                )}
            </motion.div>

            {/* Motivation tip */}
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                className="glass-card"
                style={{ marginTop: '20px', padding: '20px', background: 'rgba(255,255,255,0.05)', textAlign: 'center' }}
            >
                <p style={{ margin: 0, fontSize: '15px', color: '#fff', fontWeight: 600, opacity: 0.8 }}>
                    {activeDays >= 5
                        ? '🚀 Semana increíble. ¡Eres imparable!'
                        : activeDays >= 3
                            ? '💪 Buen ritmo. ¡Empuja a 5 días esta semana!'
                            : '🌱 Cada día cuenta. ¡Empieza hoy con 10 minutos!'}
                </p>
            </motion.div>

            <div style={{ height: '40px' }} />
        </div>
    );
}

export default StatsPanel;
