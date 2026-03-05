import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const DAY_LABELS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

function StatsPanel({ onExit, streak, userId }) {
    // Build last-7-days data from localStorage (per user)
    const dailyXPKey = userId ? `user_${userId}_dailyXP` : 'dailyXP';
    const days = useMemo(() => {
        const dailyXP = JSON.parse(localStorage.getItem(dailyXPKey) || '{}');
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

            {/* Weekly Goal Progress */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card"
                style={{ marginBottom: '24px', padding: '24px', background: 'linear-gradient(135deg, rgba(0,229,255,0.1), rgba(157,80,187,0.1))', border: '1px solid rgba(255,255,255,0.15)' }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <div>
                        <div style={{ fontSize: '11px', fontWeight: 900, opacity: 0.6, letterSpacing: '2px' }}>META SEMANAL</div>
                        <div style={{ fontSize: '24px', fontWeight: 900 }}>{totalWeek} <span style={{ opacity: 0.4, fontSize: '18px' }}>/ 500 XP</span></div>
                    </div>
                    <div style={{ fontSize: '32px' }}>🎯</div>
                </div>
                <div className="progress-track" style={{ height: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}>
                    <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min((totalWeek / 500) * 100, 100)}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{ height: '100%', borderRadius: '10px', boxShadow: '0 0 20px var(--primary-glow)' }}
                    ></motion.div>
                </div>
                <div style={{ fontSize: '12px', marginTop: '10px', opacity: 0.7, fontWeight: 600 }}>
                    {totalWeek >= 500 ? "¡Meta alcanzada! Eres una leyenda. 🔥" : `Faltan ${500 - totalWeek} XP para tu objetivo.`}
                </div>
            </motion.div>

            {/* Summary cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px', marginBottom: '24px' }}>
                {[
                    { icon: '💎', label: 'FUERZA', value: `${Math.min(Math.round((totalWeek / 300) * 100), 100)}%` },
                    { icon: '🔥', label: 'RACHA', value: `${streak}d` },
                    { icon: '🚀', label: 'VELOCIDAD', value: 'ALTA' }
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card"
                        style={{ padding: '20px 10px', textAlign: 'center', background: 'rgba(255,255,255,0.05)' }}
                    >
                        <div style={{ fontSize: '24px', marginBottom: '6px' }}>{stat.icon}</div>
                        <div style={{ fontSize: '9px', fontWeight: 900, opacity: 0.6, letterSpacing: '1px', marginBottom: '4px' }}>
                            {stat.label}
                        </div>
                        <div style={{ fontSize: '16px', fontWeight: 900 }}>{stat.value}</div>
                    </motion.div>
                ))}
            </div>

            {/* SVG Bar Chart */}
            <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="glass-card"
                style={{ padding: '28px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 900, opacity: 0.6, letterSpacing: '2px' }}>PROGRESO DIARIO</div>
                    <div style={{ fontSize: '11px', fontWeight: 900, color: 'var(--primary)' }}>ÚLTIMOS 7 DÍAS</div>
                </div>

                <svg viewBox={`0 0 ${SVG_W} ${SVG_H + 30}`} width="100%" style={{ overflow: 'visible' }}>
                    {days.map((day, i) => {
                        const barH = maxXP > 0 ? (day.xp / maxXP) * SVG_H : 0;
                        const x = GAP + i * (BAR_W + GAP);
                        const y = SVG_H - barH;
                        const isToday = day.isToday;
                        const fill = day.xp === 0
                            ? 'rgba(255,255,255,0.05)'
                            : isToday
                                ? 'url(#gradToday)'
                                : 'var(--primary)';

                        return (
                            <g key={day.date}>
                                <defs>
                                    <linearGradient id="gradToday" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#fff" stopOpacity="1" />
                                        <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.8" />
                                    </linearGradient>
                                </defs>

                                <rect x={x} y={0} width={BAR_W} height={SVG_H} rx={12}
                                    fill="rgba(255,255,255,0.02)" />

                                <motion.rect
                                    initial={{ height: 0, y: SVG_H }}
                                    animate={{ height: Math.max(barH, 4), y: Math.min(y, SVG_H - 4) }}
                                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                                    x={x} width={BAR_W} rx={12}
                                    fill={fill}
                                    style={{ filter: day.xp > 0 ? 'drop-shadow(0 0 8px var(--primary-glow))' : 'none' }}
                                />

                                <text x={x + BAR_W / 2} y={SVG_H + 20} textAnchor="middle"
                                    fill={isToday ? '#fff' : 'rgba(255,255,255,0.4)'}
                                    fontSize={10} fontWeight={isToday ? 900 : 500} style={{ letterSpacing: '0.5px' }}>
                                    {day.label}
                                </text>
                            </g>
                        );
                    })}
                </svg>

                {bestDay && bestDay.xp > 0 && (
                    <div style={{
                        marginTop: '30px', padding: '15px', borderRadius: '16px',
                        background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)',
                        display: 'flex', alignItems: 'center', gap: '15px'
                    }}>
                        <div style={{ width: '40px', height: '40px', background: 'rgba(255,215,0,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>👑</div>
                        <div>
                            <div style={{ fontSize: '10px', opacity: 0.5, fontWeight: 900, letterSpacing: '1px' }}>RÉCORD SEMANAL</div>
                            <div style={{ fontSize: '15px', fontWeight: 900 }}>{bestDay.xp} XP el {bestDay.label}</div>
                        </div>
                    </div>
                )}
            </motion.div>

            {/* Action Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                className="glass-card"
                style={{ marginTop: '20px', padding: '25px', background: 'var(--primary)', color: '#000', textAlign: 'center' }}
            >
                <h3 style={{ margin: '0 0 5px 0', fontSize: '20px', fontWeight: 900 }}>¡SIGUE ASÍ!</h3>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: 700, opacity: 0.8 }}>
                    {activeDays >= 3 ? "Tu cerebro está creando nuevas conexiones neuronales." : "Empieza una sesión de 5 minutos para mantener la racha."}
                </p>
            </motion.div>

            <div style={{ height: '40px' }} />
        </div>
    );
}

export default StatsPanel;
