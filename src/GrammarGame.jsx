import React, { useState } from 'react';

// NOTA: Los errorIdx cuentan palabras separadas por espacio (0-indexed)
// Verificados manualmente para cada frase
const grammarLevels = {
    en: {
        B1: [
            // 0:I  1:has  2:been  3:waiting  4:for  5:two  6:hours
            { sentence: "I has been waiting for two hours", correct: "have", errorIdx: 1 },
            // 0:She  1:don't  2:like  3:chocolate  4:at  5:all
            { sentence: "She don't like chocolate at all", correct: "doesn't", errorIdx: 1 },
            // 0:They  1:was  2:playing  3:football  4:yesterday
            { sentence: "They was playing football yesterday", correct: "were", errorIdx: 1 },
            // 0:He  1:go  2:to  3:school  4:every  5:day
            { sentence: "He go to school every day", correct: "goes", errorIdx: 1 },
            // 0:We  1:have  2:meet  3:before  4:in  5:Paris
            { sentence: "We have meet before in Paris", correct: "met", errorIdx: 2 },
            // 0:I  1:am  2:agree  3:with  4:you
            { sentence: "I am agree with you", correct: "agree (remove 'am')", errorIdx: 1 },
            // 0:She  1:is  2:having  3:a  4:car  5:since  6:2015
            { sentence: "She is having a car since 2015", correct: "has had", errorIdx: 1 },
            // 0:Yesterday  1:I  2:have  3:eaten  4:pizza  5:for  6:dinner
            { sentence: "Yesterday I have eaten pizza for dinner", correct: "ate", errorIdx: 2 },
            // 0:The  1:news  2:are  3:very  4:shocking  5:today
            { sentence: "The news are very shocking today", correct: "is", errorIdx: 2 },
            // 0:He  1:told  2:me  3:that  4:he  5:will  6:come
            { sentence: "He told me that he will come", correct: "would", errorIdx: 5 },
        ],
        B2: [
            // 0:If  1:I  2:would  3:have  4:the  5:money  6:I  7:would  8:go
            { sentence: "If I would have the money I would go", correct: "had", errorIdx: 2 },
            // 0:The  1:report  2:was  3:wrote  4:by  5:the  6:manager
            { sentence: "The report was wrote by the manager", correct: "written", errorIdx: 3 },
            // 0:She  1:suggested  2:to  3:work  4:harder
            { sentence: "She suggested to work harder", correct: "working", errorIdx: 2 },
            // 0:By  1:the  2:time  3:he  4:arrived  5:she  6:already  7:left
            { sentence: "By the time he arrived she already left", correct: "had left", errorIdx: 7 },
            // 0:I  1:am  2:used  3:to  4:wake  5:up  6:early  7:every  8:day
            { sentence: "I am used to wake up early every day", correct: "waking", errorIdx: 4 },
            // 0:Despite  1:of  2:his  3:efforts  4:he  5:failed
            { sentence: "Despite of his efforts he failed", correct: "of → remove it", errorIdx: 1 },
            // 0:The  1:police  2:have  3:arrested  4:a  5:man  6:whom  7:they  8:suspected
            { sentence: "The police arrested a man who they suspected it", correct: "it → remove it", errorIdx: 9 },
            // 0:I  1:wish  2:I  3:will  4:know  5:the  6:answer
            { sentence: "I wish I will know the answer", correct: "knew", errorIdx: 3 },
            // 0:She  1:is  2:more  3:smarter  4:than  5:her  6:sister
            { sentence: "She is more smarter than her sister", correct: "smarter (remove 'more')", errorIdx: 2 },
            // 0:It  1:is  2:the  3:most  4:best  5:film  6:I  7:have  8:seen
            { sentence: "It is the most best film I have seen", correct: "best (remove 'most')", errorIdx: 3 },
        ],
        C1: [
            // 0:The  1:committee  2:have  3:reached  4:a  5:unanimous  6:decision
            { sentence: "The committee have reached a unanimous decision", correct: "has", errorIdx: 2 },
            // 0:He  1:is  2:the  3:person  4:which  5:invented  6:the  7:telephone
            { sentence: "He is the person which invented the telephone", correct: "who", errorIdx: 4 },
            // 0:I  1:am  2:very  3:interesting  4:in  5:this  6:topic
            { sentence: "I am very interesting in this topic", correct: "interested", errorIdx: 3 },
            // 0:Had  1:I  2:known  3:I  4:would  5:have  6:helped
            // The sentence is correct (inversion) - let me use a different one
            // 0:The  1:information  2:were  3:very  4:helpful
            { sentence: "The information were very helpful", correct: "was", errorIdx: 2 },
            // 0:She  1:insisted  2:that  3:he  4:leaves  5:immediately
            { sentence: "She insisted that he leaves immediately", correct: "leave", errorIdx: 4 },
            // 0:No  1:sooner  2:he  3:arrived  4:than  5:the  6:meeting  7:started
            { sentence: "No sooner he arrived than the meeting started", correct: "had he arrived", errorIdx: 2 },
            // 0:This  1:is  2:the  3:book  4:which  5:cover  6:is  7:red
            { sentence: "This is the book which cover is red", correct: "whose", errorIdx: 4 },
            // 0:They  1:should  2:have  3:being  4:more  5:careful
            { sentence: "They should have being more careful", correct: "been", errorIdx: 3 },
            // 0:The  1:project  2:needs  3:to  4:be  5:finished  6:until  7:Friday
            { sentence: "The project needs to be finished until Friday", correct: "by", errorIdx: 6 },
            // 0:Every  1:student  2:must  3:bring  4:their  5:own  6:materials
            // This is actually correct now (singular they) - let's use another
            // 0:She  1:asked  2:me  3:that  4:where  5:I  6:lived
            { sentence: "She asked me that where I lived", correct: "that → remove it", errorIdx: 3 },
        ]
    },
    de: {
        B1: [
            // 0:Ich  1:bin  2:gestern  3:ins  4:Kino  5:gehen
            { sentence: "Ich bin gestern ins Kino gehen", correct: "gegangen", errorIdx: 5 },
            // 0:Du  1:hast  2:ein  3:Buch  4:liest  5:sehr  6:schnell
            { sentence: "Du hast ein Buch liest sehr schnell", correct: "gelesen", errorIdx: 4 },
            // 0:Er  1:hat  2:mir  3:ein  4:Geschenk  5:gibt
            { sentence: "Er hat mir ein Geschenk gibt", correct: "gegeben", errorIdx: 5 },
            // 0:Wir  1:haben  2:die  3:ganze  4:Nacht  5:arbeiten
            { sentence: "Wir haben die ganze Nacht arbeiten", correct: "gearbeitet", errorIdx: 5 },
            // 0:Sie  1:ist  2:sehr  3:früh  4:aufgestehen
            { sentence: "Sie ist sehr früh aufgestehen", correct: "aufgestanden", errorIdx: 4 },
            // 0:Ich  1:lerne  2:Deutsch  3:seit  4:drei  5:Jahre
            { sentence: "Ich lerne Deutsch seit drei Jahre", correct: "Jahren", errorIdx: 5 },
            // 0:Er  1:wohnt  2:in  3:der  4:Berlin
            { sentence: "Er wohnt in der Berlin", correct: "in (remove 'der')", errorIdx: 3 },
            // 0:Das  1:ist  2:ein  3:großes  4:Haus
            // Correct - use different
            // 0:Ich  1:habe  2:eine  3:Hunger
            { sentence: "Ich habe eine Hunger", correct: "keinen / viel", errorIdx: 2 },
            // 0:Er  1:geht  2:immer  3:in  4:das  5:Schule
            { sentence: "Er geht immer in das Schule", correct: "die", errorIdx: 3 },
            // 0:Wir  1:haben  2:gut  3:geschlaft
            { sentence: "Wir haben gut geschlaft", correct: "geschlafen", errorIdx: 3 },
        ],
        B2: [
            // 0:Wenn  1:ich  2:Zeit  3:hätte  4:würde  5:ich  6:reise
            { sentence: "Wenn ich Zeit hätte würde ich reise", correct: "reisen", errorIdx: 6 },
            // 0:Das  1:Buch  2:wo  3:ich  4:lese  5:ist  6:sehr  7:spannend
            { sentence: "Das Buch wo ich lese ist sehr spannend", correct: "das", errorIdx: 2 },
            // 0:Ich  1:warte  2:auf  3:mein  4:Freund  5:seit  6:zwei  7:Stunden
            { sentence: "Ich warte auf mein Freund seit zwei Stunden", correct: "meinen", errorIdx: 3 },
            // 0:Die  1:Studie  2:wurde  3:von  4:den  5:Wissenschaftlern  6:durchführen
            { sentence: "Die Studie wurde von den Wissenschaftlern durchführen", correct: "durchgeführt", errorIdx: 6 },
            // 0:Ich  1:habe  2:mit  3:mein  4:Chef  5:gesprochen
            { sentence: "Ich habe mit mein Chef gesprochen", correct: "meinem", errorIdx: 3 },
            // 0:Es  1:ist  2:wichtig  3:dass  4:du  5:pünktlich  6:kommst
            // correct sentence - use different
            // 0:Obwohl  1:es  2:regnete  3:aber  4:wir  5:gingen  6:spazieren
            { sentence: "Obwohl es regnete aber wir gingen spazieren", correct: "aber → remove it", errorIdx: 3 },
            // 0:Er  1:hat  2:das  3:Buch  4:zu  5:lesen  6:angefangen
            // 0:Er  1:fing  2:an  3:das  4:Buch  5:gelesen
            { sentence: "Er fing an das Buch gelesen", correct: "zu lesen", errorIdx: 5 },
            // 0:Dank  1:meines  2:Vaters  3:habe  4:ich  5:viel  6:gelernt
            // correct - use different
            // 0:Ich  1:bin  2:seit  3:zehn  4:Minuten  5:hier  6:gewartet
            { sentence: "Ich bin seit zehn Minuten hier gewartet", correct: "warte", errorIdx: 1 },
            // 0:Trotz  1:dem  2:Regen  3:gingen  4:wir  5:spazieren
            { sentence: "Trotz dem Regen gingen wir spazieren", correct: "des", errorIdx: 1 },
            // 0:Das  1:ist  2:der  3:Mann  4:dem  5:Hund  6:bellt
            { sentence: "Das ist der Mann dem Hund bellt", correct: "dessen", errorIdx: 3 },
        ],
        C1: [
            // 0:Trotz  1:der  2:schwierigen  3:Bedingungen  4:er  5:hat  6:das  7:Ziel  8:erreichet
            { sentence: "Trotz der schwierigen Bedingungen er hat das Ziel erreichet", correct: "erreicht", errorIdx: 8 },
            // 0:Er  1:verhielt  2:sich  3:als  4:ob  5:er  6:alles  7:wissen  8:würde
            { sentence: "Er verhielt sich als ob er alles wissen würde", correct: "wüsste", errorIdx: 7 },
            // 0:Anlässlich  1:des  2:Jubiläums  3:wurde  4:ein  5:großer  6:Fest  7:gefeiert
            { sentence: "Anlässlich des Jubiläums wurde ein großer Fest gefeiert", correct: "großes", errorIdx: 5 },
            // 0:Nicht  1:nur  2:die  3:Kosten  4:sondern  5:auch  6:die  7:Zeit  8:spielte  9:eine  10:Rolle
            { sentence: "Nicht nur die Kosten sondern auch die Zeit spielte eine Rolle", correct: "spielten", errorIdx: 8 },
            // 0:Das  1:Ergebnis  2:hängt  3:davon  4:aus  5:wie  6:viel  7:Arbeit  8:man  9:investiert
            { sentence: "Das Ergebnis hängt davon aus wie viel Arbeit man investiert", correct: "ab", errorIdx: 4 },
            // 0:Der  1:Zeuge  2:berichtete  3:über  4:was  5:er  6:gesehen  7:hatte
            { sentence: "Der Zeuge berichtete über was er gesehen hatte", correct: "worüber", errorIdx: 2 },
            // 0:Angesichts  1:die  2:Krise  3:müssen  4:wir  5:handeln
            { sentence: "Angesichts die Krise müssen wir handeln", correct: "der", errorIdx: 1 },
            // 0:Er  1:sprach  2:so  3:als  4:würde  5:er  6:alles  7:wissen
            // correct - different one
            // 0:Das  1:Gesetz  2:wurde  3:von  4:dem  5:Bundestag  6:verabschiedet  7:werden
            { sentence: "Das Gesetz wurde von dem Bundestag verabschiedet werden", correct: "worden", errorIdx: 7 },
            // 0:Sie  1:bat  2:ihn  3:das  4:Er  5:kommen  6:würde
            { sentence: "Sie bat ihn dass er kommen würde", correct: "zu kommen", errorIdx: 4 },
            // 0:Infolge  1:dem  2:Unfall  3:war  4:die  5:Straße  6:gesperrt
            { sentence: "Infolge dem Unfall war die Straße gesperrt", correct: "des", errorIdx: 1 },
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
                            onClick={() => handleWordClick(i)}
                            style={{
                                background: feedback && i === current.errorIdx
                                    ? 'rgba(0, 229, 100, 0.25)'
                                    : 'rgba(255, 255, 255, 0.05)',
                                padding: '10px 18px',
                                borderRadius: '20px',
                                cursor: 'pointer',
                                border: `1px solid ${feedback && i === current.errorIdx ? '#00e564' : 'rgba(255,255,255,0.15)'}`,
                                transition: 'all 0.2s ease',
                                fontSize: '16px',
                                color: '#fff',
                                fontWeight: '600',
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
