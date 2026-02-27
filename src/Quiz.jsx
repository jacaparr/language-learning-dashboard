import React, { useState } from 'react';

function Quiz({ onComplete, onCancel }) {
    const [qIndex, setQIndex] = useState(0);
    const [score, setScore] = useState(0);

    const questions = [
        { q: "¿Cómo se dice 'Environment' en Alemán?", a: ["Umwelt", "Haus", "Auto"], correct: 0 },
        { q: "Traduce: 'Never have I seen such beauty'", a: ["Nunca he visto...", "Siempre veo...", "Vi ayer..."], correct: 0 },
        { q: "¿Qué significa 'Ephemeral'?", a: ["Duradero", "Efímero", "Rápido"], correct: 1 }
    ];

    const handleAnswer = (idx) => {
        if (idx === questions[qIndex].correct) setScore(score + 10);

        if (qIndex < questions.length - 1) {
            setQIndex(qIndex + 1);
        } else {
            onComplete(score + (idx === questions[qIndex].correct ? 10 : 0));
        }
    };

    return (
        <>
            <div className="mesh-container">
                <div className="orb orb-1"></div>
                <div className="orb orb-3"></div>
            </div>
            <div className="dashboard-container reveal">
                <header className="header" style={{ marginBottom: '20px' }}>
                    <button onClick={onCancel} className="glass-card" style={{ padding: '12px 24px', borderRadius: '16px', margin: 0, background: 'rgba(255,255,255,0.1)' }}>← SALIR</button>
                    <div className="badge-pill" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>PREGUNTA {qIndex + 1} / {questions.length}</div>
                </header>

                <div className="glass-card reveal" style={{ marginTop: '40px', padding: '40px', textAlign: 'center', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.15)' }}>
                    <h2 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '40px', lineHeight: 1.2, color: '#fff', textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>{questions[qIndex].q}</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {questions[qIndex].a.map((opt, idx) => (
                            <button
                                key={idx}
                                className="glass-card"
                                onClick={() => handleAnswer(idx)}
                                style={{
                                    padding: '24px',
                                    textAlign: 'left',
                                    fontSize: '18px',
                                    fontWeight: '800',
                                    border: '1px solid rgba(255,255,255,0.12)',
                                    background: 'rgba(255,255,255,0.05)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    color: '#fff'
                                }}
                            >
                                <span>{opt}</span>
                                <span style={{ opacity: 0.5, fontWeight: '900', color: '#00e5ff' }}>→</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <div className="badge-pill" style={{ background: 'rgba(0, 229, 255, 0.1)', color: '#00e5ff', fontWeight: '900', padding: '10px 20px' }}>PUNTUACIÓN ACTUAL: {score} XP</div>
                </div>
            </div>
        </>
    );
}

export default Quiz;
