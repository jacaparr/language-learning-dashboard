import React, { useState } from 'react';

const grammarLevels = {
    en: {
        B1: [
            { sentence: "I has been waiting for two hours", correct: "have", errorIdx: 1 },
            { sentence: "She don't like chocolate", correct: "doesn't", errorIdx: 1 },
            { sentence: "They was playing football", correct: "were", errorIdx: 1 }
        ]
    },
    de: {
        B1: [
            { sentence: "Ich bin zu Hause gehen", correct: "gegangen", errorIdx: 4 },
            { sentence: "Du hast ein Buch liest", correct: "gelesen", errorIdx: 4 }
        ]
    }
};

function GrammarGame({ language, level, onExit, onAddXP }) {
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [feedback, setFeedback] = useState(null); // 'correct', 'wrong'

    const current = grammarLevels[language]?.[level]?.[index] || grammarLevels['en']['B1'][0];
    const words = current.sentence.split(' ');

    const handleWordClick = (wordIdx) => {
        if (feedback) return;
        if (wordIdx === current.errorIdx) {
            setFeedback('correct');
            setScore(s => s + 100);
            setStreak(st => st + 1);
            onAddXP(20);
        } else {
            setFeedback('wrong');
            setStreak(0);
        }
    };

    const next = () => {
        setFeedback(null);
        setIndex((index + 1) % (grammarLevels[language]?.[level]?.length || 1));
    };

    return (
        <div className="dashboard-container">
            <header className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button onClick={onExit} className="glass-card" style={{ margin: 0, padding: '5px 15px' }}>← Exit</button>
                <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '12px', opacity: 0.7 }}>Score: {score}</div>
                    <div style={{ fontSize: '14px', color: '#fbbf24' }}>🔥 {streak} Streak</div>
                </div>
            </header>

            <section className="glass-card" style={{ marginTop: '40px', padding: '30px 20px', textAlign: 'center' }}>
                <div className="card-label" style={{ marginBottom: '30px' }}>Mistake Hunter: Tap the error</div>
                <div className="word-bubbles" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
                    {words.map((word, i) => (
                        <span
                            key={i}
                            className={`word-bubble ${feedback && i === current.errorIdx ? 'highlight-correct' : ''}`}
                            onClick={() => handleWordClick(i)}
                            style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                padding: '8px 16px',
                                borderRadius: '20px',
                                cursor: 'pointer',
                                border: '1px solid var(--glass-border)'
                            }}
                        >
                            {word}
                        </span>
                    ))}
                </div>
            </section>

            {feedback && (
                <div className={`feedback-toast ${feedback === 'correct' ? 'correct' : 'incorrect'}`} style={{ borderRadius: '20px 20px 0 0' }}>
                    <div className="feedback-title">{feedback === 'correct' ? '¡Bien hecho!' : '¡Esa no era!'}</div>
                    <div className="feedback-text">
                        {feedback === 'correct' ? `La palabra correcta era "${current.correct}"` : 'Inténtalo de nuevo.'}
                    </div>
                    <button className="action-button next-button" onClick={next}>Next Challenge</button>
                </div>
            )}
        </div>
    );
}

export default GrammarGame;
