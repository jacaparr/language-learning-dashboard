import React, { useState, useEffect } from 'react';

function Quiz({ words = [], language, onComplete, onCancel }) {
    const [qIndex, setQIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [dynamicQuestions, setDynamicQuestions] = useState([]);

    useEffect(() => {
        if (!words || words.length < 3) return;

        // Generate 5 dynamic questions or as many as we have words
        const numQ = Math.min(5, words.length);
        const shuffled = [...words].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, numQ);

        const generated = selected.map(target => {
            const wrongOptions = words
                .filter(w => w.word !== target.word)
                .sort(() => Math.random() - 0.5)
                .slice(0, 2)
                .map(w => w.word);

            const options = [target.word, ...wrongOptions].sort(() => Math.random() - 0.5);
            const correctIdx = options.indexOf(target.word);

            return {
                q: `¿Cómo se dice '${target.translation}' en ${language === 'de' ? 'Alemán' : 'Inglés'}?`,
                a: options,
                correct: correctIdx,
                targetWord: target.word
            };
        });

        setDynamicQuestions(generated);
    }, [words, language]);

    const handleAnswer = (idx) => {
        const question = dynamicQuestions[qIndex];
        const isCorrect = idx === question.correct;
        const newScore = isCorrect ? score + 10 : score;

        if (isCorrect) {
            setScore(newScore);
        } else {
            // Report missed word for SRS
            if (onComplete) {
                // Find the original word object from current words
                const missed = words.find(w => w.word === question.targetWord);
                if (missed && typeof window.onMissedWord === 'function') {
                    window.onMissedWord(missed);
                }
            }
        }

        if (qIndex < dynamicQuestions.length - 1) {
            setQIndex(qIndex + 1);
        } else {
            onComplete(newScore);
        }
    };

    if (dynamicQuestions.length === 0) {
        return (
            <div className="dashboard-container reveal" style={{ textAlign: 'center', padding: '100px' }}>
                <div className="mesh-container"><div className="orb orb-1"></div></div>
                <h2 style={{ color: '#fff' }}>Necesitas más vocabulario para empezar el Quiz.</h2>
                <button onClick={onCancel} className="premium-btn" style={{ marginTop: '20px', width: 'auto', padding: '15px 40px' }}>VOLVER</button>
            </div>
        );
    }

    const currentQ = dynamicQuestions[qIndex];

    return (
        <>
            <div className="mesh-container">
                <div className="orb orb-1"></div>
                <div className="orb orb-3"></div>
            </div>
            <div className="dashboard-container reveal">
                <header className="header" style={{ marginBottom: '20px' }}>
                    <button onClick={onCancel} className="glass-card" style={{ padding: '12px 24px', borderRadius: '16px', margin: 0, background: 'rgba(255,255,255,0.1)' }}>← SALIR</button>
                    <div className="badge-pill" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>PREGUNTA {qIndex + 1} / {dynamicQuestions.length}</div>
                </header>

                <div className="glass-card reveal" style={{ marginTop: '40px', padding: '40px', textAlign: 'center', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.15)' }}>
                    <h2 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '40px', lineHeight: 1.2, color: '#fff', textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>{currentQ.q}</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {currentQ.a.map((opt, idx) => (
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
