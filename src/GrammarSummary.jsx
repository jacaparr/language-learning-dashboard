import React from 'react';

const speak = (text, langCode) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langCode === 'en' ? 'en-US' : 'de-DE';
    utterance.rate = 0.85;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
};


// ... grammarContent (keeping content, updating visuals)
const grammarContent = {
    en: {
        B1: {
            title: "Essential B1 English Grammar",
            lessons: [
                {
                    topic: "Present Perfect vs. Past Simple",
                    rule: "Use 'Present Perfect' for actions that started in the past and continue today, or for life experiences. Use 'Past Simple' for actions completed at a specific time in the past.",
                    ruleEs: "Usa el 'Present Perfect' para acciones que empezaron en el pasado y continúan hoy, o para experiencias de vida. Usa el 'Past Simple' para acciones terminadas en un momento específico del pasado.",
                    examples: ["I have lived in London for three years (and still do).", "I lived in Paris in 2018 (and I moved away).", "Have you ever traveled to Asia?", "She didn't visit us last week."],
                    mistake: "Never use Present Perfect with specific past time words like 'yesterday', 'three days ago', or 'in 1999'.",
                    mistakeEs: "Nunca uses el Present Perfect con palabras de tiempo específico como 'yesterday', 'three days ago' o 'in 1999'."
                },
                {
                    topic: "Passive Voice (Foundations)",
                    rule: "Form: Subject + 'to be' (conjugated) + Past Participle. Use it when the action is more important than who performed it.",
                    ruleEs: "Forma: Sujeto + 'to be' (conjugado) + Participio Pasado. Úsalo cuando la acción es más importante que quién la realizó.",
                    examples: ["The office is cleaned every day.", "This bridge was built in the 19th century.", "The results will be published tomorrow."],
                    mistake: "Forgetting to conjugate 'to be' correctly according to the tense of the sentence.",
                    mistakeEs: "Olvidar conjugar el verbo 'to be' correctamente según el tiempo verbal de la oración."
                },
                {
                    topic: "Relative Clauses (Defining vs Non-defining)",
                    rule: "Defining clauses give essential information about a noun. Non-defining clauses give extra information and are separated by commas.",
                    ruleEs: "Las cláusulas definitorias dan información esencial sobre un sustantivo. Las no definitorias dan información extra y van separadas por comas.",
                    examples: ["The woman who lives next door is a doctor.", "My car, which I bought last month, has already broken down."],
                    mistake: "Never use 'that' in a non-defining relative clause (the one with commas).",
                    mistakeEs: "Nunca uses 'that' en una cláusula relativa no definitoria (la que lleva comas)."
                },
                {
                    topic: "Modals of Ability & Permission",
                    rule: "Use 'can' for general ability, 'could' for past ability, and 'be able to' for specific situations. Use 'may' for formal permission.",
                    ruleEs: "Usa 'can' para habilidad general, 'could' para habilidad pasada y 'be able to' para situaciones específicas. Usa 'may' para permiso formal.",
                    examples: ["I can swim well.", "I was able to find the keys after searching for an hour.", "May I leave the room?"],
                    mistake: "Using 'could' for a successful completion of a single action in the past (use 'managed to' or 'was able to' instead).",
                    mistakeEs: "Usar 'could' para completar con éxito una sola acción en el pasado (usa 'managed to' o 'was able to' en su lugar)."
                },
                {
                    topic: "Gerunds vs Infinitives",
                    rule: "Some verbs are followed by -ing (enjoy, avoid), others by 'to' + infinitive (decide, want).",
                    ruleEs: "Algunos verbos van seguidos de -ing (enjoy, avoid), otros de 'to' + infinitivo (decide, want).",
                    examples: ["I enjoy swimming.", "She decided to study harder.", "I avoid walking late at night."],
                    mistake: "Confusing verbs like 'stop', 'remember', or 'forget' which change meaning depending on the form.",
                    mistakeEs: "Confundir verbos como 'stop', 'remember' o 'forget', que cambian de significado según la forma."
                }
            ]
        },
        B2: {
            title: "Advanced B2 English Mastery",
            lessons: [
                {
                    topic: "Mixed Conditionals",
                    rule: "Used to describe past conditions with present results, or general conditions with past results.",
                    ruleEs: "Se usa para describir condiciones pasadas con resultados presentes, o condiciones generales con resultados pasados.",
                    examples: ["If I had studied harder in school (past), I would be a doctor now (present).", "If I were brave (general/present), I would have gone skydiving yesterday (past)."],
                    mistake: "Mixing 'would' and 'would have' incorrectly. Always check the time reference of each part.",
                    mistakeEs: "Mezclar 'would' y 'would have' incorrectamente. Comprueba siempre la referencia temporal de cada parte."
                },
                {
                    topic: "Reported Speech: Advanced Nuances",
                    rule: "When reporting thoughts or statements, shift tenses back. Change pronouns and time markers (tomorrow -> the next day).",
                    ruleEs: "Al reportar pensamientos o declaraciones, retrocede los tiempos verbales. Cambia pronombres y marcadores de tiempo.",
                    examples: ["'I am going now' -> He said he was going then.", "She asked me if I had seen the movie."],
                    mistake: "Forgetting to change 'here' to 'there' or 'this' to 'that'.",
                    mistakeEs: "Olvidar cambiar 'here' por 'there' o 'this' por 'that'."
                },
                {
                    topic: "The Subjunctive Mood",
                    rule: "Used for suggestions, demands, or hypothetical situations. Often seen after verbs like 'suggest', 'demand', or 'insist'.",
                    ruleEs: "Se usa para sugerencias, demandas o situaciones hipotéticas. Se ve a menudo tras verbos como 'suggest', 'demand' o 'insist'.",
                    examples: ["I suggest that he arrive on time.", "It is essential that she be informed immediately."],
                    mistake: "Using a normal conjugated verb (e.g., 'he arrives') instead of the base form (e.g., 'he arrive').",
                    mistakeEs: "Usar un verbo conjugado normal (ej: 'he arrives') en lugar de la forma base (ej: 'he arrive')."
                },
                {
                    topic: "Narrative Tenses",
                    rule: "Use Past Simple for the main events, Past Continuous for the background, and Past Perfect for events that happened earlier.",
                    ruleEs: "Usa el Past Simple para eventos principales, el Past Continuous para el trasfondo y el Past Perfect para eventos que ocurrieron antes.",
                    examples: ["While I was walking (background), I saw a cat (event) that had escaped (earlier)."],
                    mistake: "Overusing Past Simple and ignoring the 'order of events' provided by Past Perfect.",
                    mistakeEs: "Abusar del Past Simple e ignorar el 'orden de eventos' que proporciona el Past Perfect."
                },
                {
                    topic: "Future in the Past",
                    rule: "Use 'would' or 'was/were going to' to talk about a plan made in the past that was meant for the future.",
                    ruleEs: "Usa 'would' o 'was/were going to' para hablar de un plan hecho en el pasado que era para el futuro.",
                    examples: ["I knew he would win.", "I was going to call you, but I forgot."],
                    mistake: "Using 'will' to describe a past intention.",
                    mistakeEs: "Usar 'will' para describir una intención pasada."
                }
            ]
        },
        C1: {
            title: "C1 Academic & Proficient English",
            lessons: [
                {
                    topic: "Inversion for Rhetorical Emphasis",
                    rule: "Place a negative or restrictive adverb at the beginning of the sentence and invert the subject and auxiliary.",
                    ruleEs: "Coloca un adverbio negativo o restrictivo al principio de la oración e invierte el sujeto y el auxiliar.",
                    examples: ["Never have I witnessed such profound stupidity.", "Rarely does a talent like hers emerge."],
                    mistake: "Forgetting the auxiliary verb (e.g., *'Never I witnessed'* is incorrect).",
                    mistakeEs: "Olvidar el verbo auxiliar (ej: *'Never I witnessed'* es incorrecto)."
                },
                {
                    topic: "Cleft Sentences",
                    rule: "Used to highlight specific information. Common forms: 'It is... that...' or 'What... is...'.",
                    ruleEs: "Se usan para resaltar información específica. Formas comunes: 'It is... that...' o 'What... is...'.",
                    examples: ["What I found most striking was his humility.", "It was the lack of funding that ultimately doomed the project."],
                    mistake: "Over-complicating simple sentences where emphasis isn't necessary.",
                    mistakeEs: "Complicar demasiado oraciones simples donde el énfasis no es necesario."
                },
                {
                    topic: "Subjunctive & Hypothesizing",
                    rule: "Advanced hypothetical structures using 'Were it not for', 'Had I known', or 'Should you require'.",
                    ruleEs: "Estructuras hipotéticas avanzadas usando 'Were it not for', 'Had I known' o 'Should you require'.",
                    examples: ["Had I known the truth, I would have acted differently.", "Should you require assistance, do not hesitate to contact us."],
                    mistake: "Using 'if' in these specific formal inverted structures.",
                    mistakeEs: "Usar 'if' en estas estructuras formales invertidas específicas."
                },
                {
                    topic: "Nominalization in Academic Writing",
                    rule: "Turning verbs or adjectives into nouns to sound more objective and formal.",
                    ruleEs: "Convertir verbos o adjetivos en sustantivos para sonar más objetivo y formal.",
                    examples: ["The rapid increase in population (instead of: Population increased rapidly)."],
                    mistake: "Creating 'noun piles' that make the sentence hard to read.",
                    mistakeEs: "Crear 'pilas de sustantivos' que hacen que la oración sea difícil de leer."
                },
                {
                    topic: "Hedging & Modality",
                    rule: "Using words like 'arguably', 'presumably', or 'to some extent' to soften claims in academic discourse.",
                    ruleEs: "Usar palabras como 'arguably', 'presumably' o 'to some extent' para suavizar afirmaciones en el discurso académico.",
                    examples: ["The data suggests that this is arguably the best approach.", "This phenomenon is presumably linked to climate change."],
                    mistake: "Being too definitive or certain in academic papers where data might be interpreted differently.",
                    mistakeEs: "Ser demasiado definitivo o seguro en artículos académicos donde los datos podrían interpretarse de otra forma."
                }
            ]
        }
    },
    de: {
        B1: {
            title: "Wichtige B1 Deutsch Grammatik",
            lessons: [
                {
                    topic: "Passiv (Präsens & Präteritum)",
                    rule: "Bildung: 'werden' + Partizip II. Der Fokus liegt auf der Handlung, nicht auf dem Täter.",
                    ruleEs: "Formación: 'werden' + Participio II. El foco está en la acción, no en quien la realiza.",
                    examples: ["Das Auto wird repariert (Präsens).", "Das Haus wurde 1950 gebaut (Präteritum)."],
                    mistake: "Verwechslung von 'werden' mit 'sein' (das ist Zustandspassiv: 'Die Tür ist geschlossen').",
                    mistakeEs: "Confundir 'werden' con 'sein' (eso es pasiva de estado: 'Die Tür ist geschlossen')."
                },
                {
                    topic: "Konjunktionen in Nebensätzen",
                    rule: "Wörter wie 'weil', 'dass', 'obwohl' schicken das konjugierte Verb ans Ende des Satzes.",
                    ruleEs: "Palabras como 'weil', 'dass', 'obwohl' envían el verbo conjugado al final de la oración.",
                    examples: ["Ich lerne Deutsch, weil ich in Berlin arbeiten möchte.", "Obwohl es regnet, gehen wir spazieren."],
                    mistake: "Das Verb in der Mitte des Nebensatzes lassen (Satzbaufehler).",
                    mistakeEs: "Dejar el verbo en medio de la oración subordinada (error de estructura)."
                },
                {
                    topic: "Relativsätze im Nominativ und Akkusativ",
                    rule: "Der Relativsatz beschreibt ein Nomen genauer. Das Relativpronomen richtet sich nach Genus und Fall.",
                    ruleEs: "La oración relativa describe un sustantivo con más detalle. El pronombre relativo depende del género y el caso.",
                    examples: ["Das ist der Mann, der (Nom.) dort wohnt.", "Das ist der Hund, den (Akk.) ich mag."],
                    mistake: "Den falschen Artikel/Fall für das Pronomen wählen.",
                    mistakeEs: "Elegir el artículo o caso incorrecto para el pronombre."
                },
                {
                    topic: "Adjektivdeklination (Einblick)",
                    rule: "Die Endung des Adjektivs ändert sich je nach Artikel und Fall.",
                    ruleEs: "La terminación del adjetivo cambia según el artículo y el caso.",
                    examples: ["Ein guter Freund (mask, nom).", "Die nette Frau (fem, nom)."],
                    mistake: "Die Endungen -e, -en, -er, -es verwechseln (sehr häufiger Fehler).",
                    mistakeEs: "Confundir las terminaciones -e, -en, -er, -es (error muy común)."
                },
                {
                    topic: "Modalverben im Präteritum",
                    rule: "Lernen Sie die Präteritum-Formen (konnte, wollte, musste, durfte).",
                    ruleEs: "Aprende las formas del Präteritum (konnte, wollte, musste, durfte).",
                    examples: ["Früher konnte ich gut schwimmen.", "Ich wollte gestern anrufen."],
                    mistake: "Die Umlaute im Präteritum lassen (falsch: *könnte* statt konnte).",
                    mistakeEs: "Dejar los umlauts en el Präteritum (falso: *könnte* en lugar de 'konnte')."
                }
            ]
        },
        B2: {
            title: "B2 Deutsch für Fortgeschrittene",
            lessons: [
                {
                    topic: "Konjunktiv II (Wünsche & Irreales)",
                    rule: "Bildung mit 'würde' + Infinitiv oder speziellen Formen (wäre, hätte, käme).",
                    ruleEs: "Formación con 'würde' + infinitivo o formas especiales (wäre, hätte, käme).",
                    examples: ["Wenn ich mehr Zeit hätte, würde ich mehr Sport machen.", "Ich wäre gerne am Strand."],
                    mistake: "Übermäßiger Gebrauch von 'würde' bei Hilfsverben (nicht: *würde haben*, sondern: hätte).",
                    mistakeEs: "Uso excesivo de 'würde' con verbos auxiliares (no: *würde haben*, sino: hätte)."
                },
                {
                    topic: "Relativsätze mit Präpositionen",
                    rule: "Die Präposition steht vor dem Relativpronomen und bestimmt dessen Fall.",
                    ruleEs: "La preposición va delante del pronombre relativo y determina su caso.",
                    examples: ["Das Haus, in dem ich wohne.", "Die Freunde, mit denen ich reise."],
                    mistake: "Die Präposition ans Ende des Satzes stellen (wie im Englischen) - falsch!",
                    mistakeEs: "Poner la preposición al final de la oración (como en inglés). ¡Error!"
                },
                {
                    topic: "Partizip I und II als Adjektive",
                    rule: "Partizip I (aktiv/laufend) und Partizip II (passiv/abgeschlossen) können Adjektive sein.",
                    ruleEs: "El Participio I (activo/continuo) y el Participio II (pasivo/completado) pueden funcionar como adjetivos.",
                    examples: ["Das schreiende Kind (Partizip I).", "Die gekaufte Ware (Partizip II)."],
                    mistake: "Die Deklinationsendungen der Partizipien vergessen.",
                    mistakeEs: "Olvidar las terminaciones de declinación de los participios."
                },
                {
                    topic: "Zweiteilige Konnektoren",
                    rule: "Verbindungen wie 'entweder... oder', 'sowohl... als auch', 'nicht nur... sondern auch'.",
                    ruleEs: "Conexiones como 'entweder... oder', 'sowohl... als auch', 'nicht nur... sondern auch'.",
                    examples: ["Er spricht sowohl Deutsch als auch Englisch.", "Ich möchte weder Tee noch Kaffee."],
                    mistake: "Die falsche Kombination der Wörter (z.B. *nicht nur... aber auch*).",
                    mistakeEs: "Usar la combinación incorrecta de palabras (ej: *nicht nur... aber auch*)."
                },
                {
                    topic: "Verben mit festen Präpositionen",
                    rule: "Viele Verben brauchen eine feste Präposition und einen festen Fall (warten auf + Akk, träumen von + Dat).",
                    ruleEs: "Muchos verbos necesitan una preposición fija y un caso fijo (warten auf + Akk, träumen von + Dat).",
                    examples: ["Ich warte auf dich.", "Sie träumt von einem Haus."],
                    mistake: "Den falschen Fall nach der Präposition verwenden.",
                    mistakeEs: "Usar el caso incorrecto tras la preposición."
                }
            ]
        },
        C1: {
            title: "C1 Deutsch auf höchstem Niveau",
            lessons: [
                {
                    topic: "Nominalisierung (Papierdeutsch)",
                    rule: "Verben and Adjektive werden zu Nomen umgeformt. Typisch für formelle Texte.",
                    ruleEs: "Los verbos y adjetivos se transforman en sustantivos. Típico de textos formales.",
                    examples: ["Bei Erhalt der Ware... (statt: Wenn Sie die Ware erhalten...).", "Infolge der starken Regenfälle..."],
                    mistake: "Zu viele Nomen hintereinander ('Nomen-Stil') machen den Text schwer lesbar.",
                    mistakeEs: "Demasiados sustantivos seguidos ('estilo nominal') hacen que el texto sea difícil de leer."
                },
                {
                    topic: "Erweiterte Partizipialattribute",
                    rule: "Lange Beschreibungen vor dem Nomen, oft in wissenschaftlichen Texten.",
                    ruleEs: "Descripciones largas antes del sustantivo, a menudo en textos científicos.",
                    examples: ["Die seit langem in der Fachwelt diskutierte Theorie..."],
                    mistake: "Den Überblick über das eigentliche Subjekt verlieren, da das Verb weit weg steht.",
                    mistakeEs: "Perder la noción del sujeto real, ya que el verbo queda muy lejos."
                },
                {
                    topic: "Konjunktiv I (Indirekte Rede)",
                    rule: "Wird oft in der Presse verwendet. Bildung meist vom Infinitivstamm.",
                    ruleEs: "Se usa a menudo en la prensa. Formación habitualmente desde la raíz del infinitivo.",
                    examples: ["Der Minister sagte, er sehe (Konj I) keine Gefahr.", "Sie meinte, sie habe keine Zeit."],
                    mistake: "Konjunktiv I mit Konjunktiv II verwechseln.",
                    mistakeEs: "Confundir el Konjunktiv I con el Konjunktiv II."
                },
                {
                    topic: "Alternative Passivformen",
                    rule: "Strukturen wie 'sein + zu + Infinitiv' oder 'sich lassen + Infinitiv'.",
                    ruleEs: "Estructuras como 'sein + zu + Infinitivo' o 'sich lassen + Infinitivo'.",
                    examples: ["Das Problem ist leicht zu lösen (= kann gelöst werden).", "Das lässt sich leicht reparieren."],
                    mistake: "Diese abstrakten Formen im Alltag übermäßig verwenden (sie klingen sehr formell).",
                    mistakeEs: "Usar estas formas abstractas en exceso en el día a día (suenan muy formales)."
                },
                {
                    topic: "Subjektive Bedeutung der Modalverben",
                    rule: "Modalverben können eine Vermutung ausdrücken (müssen = fast sicher, dürften = wahrscheinlich).",
                    ruleEs: "Los verbos modales pueden expresar una suposición (müssen = casi seguro, dürften = probable).",
                    examples: ["Er müsste eigentlich schon da sein (90% sicher).", "Das dürfte stimmen (70% sicher)."],
                    mistake: "Den Grad der Sicherheit falsch einschätzen.",
                    mistakeEs: "Evaluar incorrectamente el grado de certeza."
                }
            ]
        }
    }
};

function GrammarSummary({ language, level, onExit }) {
    const content = grammarContent[language]?.[level];

    if (!content) return <div>No grammar!</div>;

    return (
        <>
            <div className="mesh-container">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
            </div>

            <div className="dashboard-container reveal">
                <header className="header" style={{ marginBottom: '20px' }}>
                    <button onClick={onExit} className="glass-card" style={{ padding: '12px 24px', borderRadius: '16px', margin: 0, background: 'rgba(255,255,255,0.1)' }}>← ATRÁS</button>
                    <div className="badge-pill" style={{ background: 'rgba(0, 229, 255, 0.15)', color: '#00e5ff' }}>MAESTRÍA {level}</div>
                </header>

                <section className="glass-card masterclass-hero" style={{ padding: '30px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(0, 229, 255, 0.3)' }}>
                    <h1 style={{ fontSize: '32px', fontWeight: '900', margin: 0, color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>{content.title === "Essential B1 English Grammar" ? "Gramática Esencial B1 Inglés" : content.title === "Advanced B2 English Mastery" ? "Maestría Avanzada B2 Inglés" : content.title === "C1 Academic & Proficient English" ? "Inglés Académico C1" : content.title === "Wichtige B1 Deutsch Grammatik" ? "Gramática Esencial B1 Alemán" : content.title === "B2 Deutsch für Fortgeschrittene" ? "Alemán Avanzado B2" : content.title === "C1 Deutsch auf höchstem Niveau" ? "Alemán Nivel C1 Superior" : content.title}</h1>
                    <p style={{ opacity: 0.9, marginTop: '10px', color: '#fff', fontWeight: '500' }}>Guía avanzada con explicaciones bilingües integrales.</p>
                </section>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {content.lessons.map((lesson, idx) => (
                        <div key={idx} className="glass-card reveal" style={{ animationDelay: `${0.2 + (idx * 0.1)}s`, background: 'rgba(255,255,255,0.08)' }}>
                            <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '15px' }}>
                                <span style={{ width: '36px', height: '36px', background: '#00e5ff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', color: '#000', boxShadow: '0 4px 10px rgba(0, 229, 255, 0.3)' }}>{idx + 1}</span>
                                <h2 style={{ fontSize: '20px', fontWeight: '800', margin: 0, color: '#fff' }}>{lesson.topic}</h2>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <p style={{ fontSize: '15px', color: '#fff', fontWeight: '700', lineHeight: 1.5, textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>{lesson.rule}</p>
                                <div style={{ background: 'rgba(0, 229, 255, 0.05)', padding: '10px 15px', borderRadius: '12px', borderLeft: '4px solid #00e5ff', marginTop: '10px' }}>
                                    <p style={{ fontSize: '14px', color: '#00e5ff', fontStyle: 'italic', fontWeight: '600', margin: 0 }}>{lesson.ruleEs}</p>
                                </div>
                            </div>

                            <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '18px', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <div style={{ fontSize: '11px', fontWeight: '900', opacity: 0.6, marginBottom: '12px', color: '#fff', letterSpacing: '1px' }}>EJEMPLOS PRÁCTICOS</div>
                                {lesson.examples.map((ex, i) => (
                                    <div key={i} style={{ fontSize: '14px', padding: '10px 0', color: '#fff', fontWeight: '500', borderBottom: i === lesson.examples.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'space-between' }}>
                                        <span>• {ex}</span>
                                        <button
                                            onClick={() => speak(ex, language)}
                                            title="Escuchar pronunciación"
                                            style={{ flexShrink: 0, background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.3)', borderRadius: '8px', padding: '5px 8px', cursor: 'pointer', fontSize: '14px', color: '#00e5ff', lineHeight: 1 }}
                                        >🔊</button>
                                    </div>
                                ))}
                            </div>

                            <div style={{ padding: '18px', background: 'rgba(255, 71, 87, 0.15)', borderRadius: '16px', border: '1px solid rgba(255, 71, 87, 0.3)' }}>
                                <div style={{ fontSize: '10px', fontWeight: '900', color: '#ff4757', marginBottom: '8px', letterSpacing: '1px' }}>⚠️ RECOMENDACIÓN IMPORTANTE</div>
                                <p style={{ fontSize: '13px', margin: 0, fontStyle: 'italic', color: '#fff', fontWeight: '600' }}>{lesson.mistake}</p>
                                <p style={{ fontSize: '12px', opacity: 0.9, marginTop: '5px', color: '#ff7f7f', fontStyle: 'italic' }}>{lesson.mistakeEs}</p>
                            </div>

                            <button
                                onClick={() => onPractice && onPractice(lesson)}
                                className="premium-btn"
                                style={{ marginTop: '20px', width: '100%', background: '#fff', color: '#000', fontSize: '13px', padding: '15px' }}
                            >
                                🎯 PRACTICAR ESTE TEMA
                            </button>
                        </div>
                    ))}
                </div>

                <div style={{ height: '50px' }}></div>
            </div>
        </>
    );
}

export default GrammarSummary;
