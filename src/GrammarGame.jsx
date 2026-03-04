import React, { useState } from 'react';

const grammarLevels = {
    en: {
        B1: [
            { sentence: "I has been waiting for two hours", correct: "have", errorIdx: 1 },
            { sentence: "She don't like chocolate at all", correct: "doesn't", errorIdx: 1 },
            { sentence: "They was playing football yesterday", correct: "were", errorIdx: 1 },
            { sentence: "He go to school every day", correct: "goes", errorIdx: 1 },
            { sentence: "We have meet before in Paris", correct: "met", errorIdx: 2 },
        ],
        B2: [
            { sentence: "If I would have the money, I would go", correct: "had", errorIdx: 2 },
            { sentence: "The report was wrote by the manager", correct: "written", errorIdx: 3 },
            { sentence: "She suggested to work harder", correct: "working", errorIdx: 2 },
            { sentence: "By the time he arrived, she already left", correct: "had left", errorIdx: 6 },
            { sentence: "I am used to wake up early every day", correct: "waking", errorIdx: 4 },
        ],
        C1: [
            { sentence: "Despite of his efforts, he failed the exam", correct: "Despite", errorIdx: 1 },
            { sentence: "She not only sings but also plays the piano", correct: "only plays", errorIdx: 5 },
            { sentence: "The committee have reached a unanimous decision", correct: "has", errorIdx: 2 },
            { sentence: "He is the person which invented the telephone", correct: "who", errorIdx: 3 },
            { sentence: "It was so a beautiful day that we stayed outside", correct: "such", errorIdx: 2 },
        ]
    },
    de: {
        B1: [
            { sentence: "Ich bin gestern ins Kino gehen", correct: "gegangen", errorIdx: 4 },
            { sentence: "Du hast ein Buch liest sehr schnell", correct: "gelesen", errorIdx: 3 },
            { sentence: "Er hat mir ein Geschenk gibt", correct: "gegeben", errorIdx: 4 },
            { sentence: "Wir haben die ganze Nacht arbeiten", correct: "gearbeitet", errorIdx: 5 },
            { sentence: "Sie ist sehr früh aufgestehen", correct: "aufgestanden", errorIdx: 4 },
        ],
        B2: [
            { sentence: "Wenn ich Zeit hätte, würde ich reise", correct: "reisen", errorIdx: 6 },
            { sentence: "Das Buch, wo ich lese, ist sehr spannend", correct: "das", errorIdx: 2 },
            { sentence: "Er sprach, obwohl er kein Geld hatte nicht", correct: "obwohl er kein Geld hatte", errorIdx: 9 },
            { sentence: "Ich warte auf mein Freund seit zwei Stunden", correct: "meinen", errorIdx: 3 },
            { sentence: "Die Studie wurde von den Wissenschaftlern durchführen", correct: "durchgeführt", errorIdx: 7 },
        ],
        C1: [
            { sentence: "Trotz der schwierigen Bedingungen, er hat das Ziel erreichet", correct: "erreicht", errorIdx: 8 },
            { sentence: "Er verhielt sich, als ob er alles wissen würde", correct: "wüsste", errorIdx: 7 },
            { sentence: "Anlässlich des Jubiläums wurde ein großer Fest gefeiert", correct: "eine große", errorIdx: 7 },
            { sentence: "Nicht nur die Kosten, sondern auch die Zeit spielte eine Rolle", correct: "spielten", errorIdx: 9 },
            { sentence: "Das Ergebnis hängt davon aus, wie viel Arbeit man investiert", correct: "ab", errorIdx: 4 },
        ]
    }
};

function GrammarGame({ language, level, onExit, onAddXP }) {
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [feedback, setFeedback] = useState(null);

    const exercises = grammarLevels[language]?.[level] || grammarLevels['de']['B1'];
    const current = exercises[index % exercises.length];
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
        setIndex(prev => (prev + 1) % exercises.length);
    };

    return (
        <div className="dashboard-container">
            <header className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button onClick={onExit} className="glass-card" style={{ margin: 0, padding: '5px 15px' }}>← Salir</button>
                <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '12px', opacity: 0.7 }}>Puntos: {score}</div>
                    <div style={{ fontSize: '14px', color: '#fbbf24' }}>🔥 {streak} Racha</div>
                </div>
            </header>

            <section className="glass-card" style={{ marginTop: '40px', padding: '30px 20px', textAlign: 'center' }}>
                <div className="card-label" style={{ marginBottom: '30px' }}>
                    🎯 Cazador de Errores: Toca la palabra incorrecta
                </div>
                <div style={{ fontSize: '12px', opacity: 0.5, marginBottom: '15px' }}>
                    Ejercicio {(index % exercises.length) + 1} de {exercises.length}
                </div>
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
                                border: '1px solid var(--glass-border)',
                                transition: 'all 0.2s ease',
                                fontSize: '16px',
                            }}
                        >
                            {word}
                        </span>
                    ))}
                </div>
            </section>

            {feedback && (
                <div className={`feedback-toast ${feedback === 'correct' ? 'correct' : 'incorrect'}`} style={{ borderRadius: '20px 20px 0 0' }}>
                    <div className="feedback-title">{feedback === 'correct' ? '¡Bien hecho! 🎉' : '¡Esa no era! ❌'}</div>
                    <div className="feedback-text">
                        {feedback === 'correct'
                            ? `La forma correcta era "${current.correct}"`
                            : `El error estaba en "${words[current.errorIdx]}" → debería ser "${current.correct}"`
                        }
                    </div>
                    <button className="action-button next-button" onClick={next}>Siguiente →</button>
                </div>
            )}
        </div>
    );
}

export default GrammarGame;
