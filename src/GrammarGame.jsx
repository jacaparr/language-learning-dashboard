import React, { useState } from 'react';

// NOTA: Los errorIdx cuentan palabras separadas por espacio (0-indexed)
// Verificados manualmente para cada frase
const grammarLevels = {
    en: {
        B1: [
            // "I has been waiting for two hours"
            // 0:I  1:has  2:been  3:waiting  4:for  5:two  6:hours
            { sentence: "I has been waiting for two hours", correct: "have", errorIdx: 1 },
            // "She don't like chocolate at all"
            // 0:She  1:don't  2:like  3:chocolate  4:at  5:all
            { sentence: "She don't like chocolate at all", correct: "doesn't", errorIdx: 1 },
            // "They was playing football yesterday"
            // 0:They  1:was  2:playing  3:football  4:yesterday
            { sentence: "They was playing football yesterday", correct: "were", errorIdx: 1 },
            // "He go to school every day"
            // 0:He  1:go  2:to  3:school  4:every  5:day
            { sentence: "He go to school every day", correct: "goes", errorIdx: 1 },
            // "We have meet before in Paris"
            // 0:We  1:have  2:meet  3:before  4:in  5:Paris
            { sentence: "We have meet before in Paris", correct: "met", errorIdx: 2 },
        ],
        B2: [
            // "If I would have the money I would go"
            // 0:If  1:I  2:would  3:have  4:the  5:money  6:I  7:would  8:go
            { sentence: "If I would have the money I would go", correct: "had", errorIdx: 2 },
            // "The report was wrote by the manager"
            // 0:The  1:report  2:was  3:wrote  4:by  5:the  6:manager
            { sentence: "The report was wrote by the manager", correct: "written", errorIdx: 3 },
            // "She suggested to work harder"
            // 0:She  1:suggested  2:to  3:work  4:harder
            { sentence: "She suggested to work harder", correct: "working", errorIdx: 2 },
            // "By the time he arrived she already left"
            // 0:By  1:the  2:time  3:he  4:arrived  5:she  6:already  7:left
            { sentence: "By the time he arrived she already left", correct: "had left", errorIdx: 7 },
            // "I am used to wake up early every day"
            // 0:I  1:am  2:used  3:to  4:wake  5:up  6:early  7:every  8:day
            { sentence: "I am used to wake up early every day", correct: "waking", errorIdx: 4 },
        ],
        C1: [
            // "Despite of his efforts he failed the exam"
            // 0:Despite  1:of  2:his  3:efforts  4:he  5:failed  6:the  7:exam
            { sentence: "Despite of his efforts he failed the exam", correct: "of → remove it", errorIdx: 1 },
            // "The committee have reached a unanimous decision"
            // 0:The  1:committee  2:have  3:reached  4:a  5:unanimous  6:decision
            { sentence: "The committee have reached a unanimous decision", correct: "has", errorIdx: 2 },
            // "He is the person which invented the telephone"
            // 0:He  1:is  2:the  3:person  4:which  5:invented  6:the  7:telephone
            { sentence: "He is the person which invented the telephone", correct: "who", errorIdx: 4 },
            // "I am very interesting in this topic"
            // 0:I  1:am  2:very  3:interesting  4:in  5:this  6:topic
            { sentence: "I am very interesting in this topic", correct: "interested", errorIdx: 3 },
            // "She is more smarter than her sister"
            // 0:She  1:is  2:more  3:smarter  4:than  5:her  6:sister
            { sentence: "She is more smarter than her sister", correct: "smarter", errorIdx: 2 },
        ]
    },
    de: {
        B1: [
            // "Ich bin gestern ins Kino gehen"
            // 0:Ich  1:bin  2:gestern  3:ins  4:Kino  5:gehen
            { sentence: "Ich bin gestern ins Kino gehen", correct: "gegangen", errorIdx: 5 },
            // "Du hast ein Buch liest sehr schnell"
            // 0:Du  1:hast  2:ein  3:Buch  4:liest  5:sehr  6:schnell
            { sentence: "Du hast ein Buch liest sehr schnell", correct: "gelesen", errorIdx: 4 },
            // "Er hat mir ein Geschenk gibt"
            // 0:Er  1:hat  2:mir  3:ein  4:Geschenk  5:gibt
            { sentence: "Er hat mir ein Geschenk gibt", correct: "gegeben", errorIdx: 5 },
            // "Wir haben die ganze Nacht arbeiten"
            // 0:Wir  1:haben  2:die  3:ganze  4:Nacht  5:arbeiten
            { sentence: "Wir haben die ganze Nacht arbeiten", correct: "gearbeitet", errorIdx: 5 },
            // "Sie ist sehr früh aufgestehen"
            // 0:Sie  1:ist  2:sehr  3:früh  4:aufgestehen
            { sentence: "Sie ist sehr früh aufgestehen", correct: "aufgestanden", errorIdx: 4 },
        ],
        B2: [
            // "Wenn ich Zeit hätte würde ich reise"
            // 0:Wenn  1:ich  2:Zeit  3:hätte  4:würde  5:ich  6:reise
            { sentence: "Wenn ich Zeit hätte würde ich reise", correct: "reisen", errorIdx: 6 },
            // "Das Buch wo ich lese ist sehr spannend"
            // 0:Das  1:Buch  2:wo  3:ich  4:lese  5:ist  6:sehr  7:spannend
            { sentence: "Das Buch wo ich lese ist sehr spannend", correct: "das", errorIdx: 2 },
            // "Ich warte auf mein Freund seit zwei Stunden"
            // 0:Ich  1:warte  2:auf  3:mein  4:Freund  5:seit  6:zwei  7:Stunden
            { sentence: "Ich warte auf mein Freund seit zwei Stunden", correct: "meinen", errorIdx: 3 },
            // "Die Studie wurde von den Wissenschaftlern durchführen"
            // 0:Die  1:Studie  2:wurde  3:von  4:den  5:Wissenschaftlern  6:durchführen
            { sentence: "Die Studie wurde von den Wissenschaftlern durchführen", correct: "durchgeführt", errorIdx: 6 },
            // "Ich habe mit mein Chef gesprochen"
            // 0:Ich  1:habe  2:mit  3:mein  4:Chef  5:gesprochen
            { sentence: "Ich habe mit mein Chef gesprochen", correct: "meinem", errorIdx: 3 },
        ],
        C1: [
            // "Trotz der schwierigen Bedingungen er hat das Ziel erreichet"
            // 0:Trotz  1:der  2:schwierigen  3:Bedingungen  4:er  5:hat  6:das  7:Ziel  8:erreichet
            { sentence: "Trotz der schwierigen Bedingungen er hat das Ziel erreichet", correct: "erreicht", errorIdx: 8 },
            // "Er verhielt sich als ob er alles wissen würde"
            // 0:Er  1:verhielt  2:sich  3:als  4:ob  5:er  6:alles  7:wissen  8:würde
            { sentence: "Er verhielt sich als ob er alles wissen würde", correct: "wüsste", errorIdx: 7 },
            // "Anlässlich des Jubiläums wurde ein großer Fest gefeiert"
            // 0:Anlässlich  1:des  2:Jubiläums  3:wurde  4:ein  5:großer  6:Fest  7:gefeiert
            { sentence: "Anlässlich des Jubiläums wurde ein großer Fest gefeiert", correct: "großes", errorIdx: 5 },
            // "Nicht nur die Kosten sondern auch die Zeit spielte eine Rolle"
            // 0:Nicht  1:nur  2:die  3:Kosten  4:sondern  5:auch  6:die  7:Zeit  8:spielte  9:eine  10:Rolle
            { sentence: "Nicht nur die Kosten sondern auch die Zeit spielte eine Rolle", correct: "spielten", errorIdx: 8 },
            // "Das Ergebnis hängt davon aus wie viel Arbeit man investiert"
            // 0:Das  1:Ergebnis  2:hängt  3:davon  4:aus  5:wie  6:viel  7:Arbeit  8:man  9:investiert
            { sentence: "Das Ergebnis hängt davon aus wie viel Arbeit man investiert", correct: "ab", errorIdx: 4 },
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
                                background: feedback && i === current.errorIdx
                                    ? 'rgba(0, 229, 100, 0.25)'
                                    : 'rgba(255, 255, 255, 0.05)',
                                padding: '8px 16px',
                                borderRadius: '20px',
                                cursor: 'pointer',
                                border: `1px solid ${feedback && i === current.errorIdx ? '#00e564' : 'var(--glass-border)'}`,
                                transition: 'all 0.2s ease',
                                fontSize: '16px',
                                color: '#fff',
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
                            ? `La forma correcta es "${current.correct}"`
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
