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
                    rule: "Use 'Present Perfect' (have/has + past participle) for life experiences, recent actions with present relevance, or actions continuing from the past until now. Use 'Past Simple' for completed actions at a SPECIFIC past time.",
                    ruleEs: "Usa el Present Perfect para experiencias de vida, acciones recientes con relevancia presente, o acciones que continúan desde el pasado. Usa el Past Simple para acciones terminadas en un momento ESPECÍFICO del pasado.",
                    examples: [
                        "I have lived in London for three years. (still living there)",
                        "I lived in Paris in 2018. (specific time, finished)",
                        "Have you ever tried sushi? (life experience)",
                        "She didn't visit us last week. (specific time: last week)",
                        "He has just finished his homework. (just = very recent)",
                        "They worked here from 2010 to 2015. (completed period)"
                    ],
                    mistake: "NEVER use Present Perfect with: 'yesterday', 'in 1999', 'last year', 'three days ago', 'when I was young'. These force Past Simple. Key words for Present Perfect: 'ever', 'never', 'already', 'yet', 'just', 'since', 'for'.",
                    mistakeEs: "NUNCA uses el Present Perfect con: 'yesterday', 'in 1999', 'last year', 'three days ago'. Palabras clave del Present Perfect: 'ever', 'never', 'already', 'yet', 'just', 'since', 'for'."
                },
                {
                    topic: "Passive Voice",
                    rule: "Form: Subject + to be (conjugated) + Past Participle. Use passive when the ACTION is important, not who does it, or when the doer is unknown. Add the agent with 'by' only when relevant.",
                    ruleEs: "Forma: Sujeto + to be (conjugado) + Participio Pasado. Usa la pasiva cuando importa la ACCIÓN, no quien la realiza, o cuando es desconocido. Añade el agente con 'by' solo si es relevante.",
                    examples: [
                        "The office is cleaned every day. (present)",
                        "This bridge was built in the 19th century. (past)",
                        "The results will be published tomorrow. (future)",
                        "The project has been completed. (present perfect)",
                        "The letter was written by Shakespeare. (agent with 'by')",
                        "English is spoken in over 50 countries. (actor irrelevant)"
                    ],
                    mistake: "Don't use passive with intransitive verbs like 'arrive', 'happen', 'sleep' — they can't take an object. Also: 'to be' must agree in tense with the main sentence.",
                    mistakeEs: "No uses la pasiva con verbos intransitivos como 'llegar', 'suceder', 'dormir' — no pueden tener objeto directo. Además: 'to be' debe concordar en tiempo con la oración principal."
                },
                {
                    topic: "Relative Clauses: Defining vs. Non-defining",
                    rule: "Defining: essential info, no commas, can use 'that'. Non-defining: extra info about something already identified, surrounded by commas, NEVER use 'that'. Relative pronouns: who (people), which (things), whose (possession), where (places), when (times).",
                    ruleEs: "Definitoria: info esencial, sin comas, puede usar 'that'. No definitoria: info extra, entre comas, NUNCA 'that'. Pronombres relativos: who (personas), which (cosas), whose (posesión), where (lugares), when (tiempos).",
                    examples: [
                        "The woman who lives next door is a doctor. (defining)",
                        "My sister, who lives in Madrid, is a nurse. (non-defining)",
                        "The book that I lent you was a bestseller. (defining, 'that' OK)",
                        "This car, which I bought last year, has broken down. (non-defining)",
                        "The city where I was born is very small. (defining, place)",
                        "My boss, whose son I know, is very strict. (non-defining, possession)"
                    ],
                    mistake: "'That' is FORBIDDEN in non-defining clauses (with commas). You also cannot omit the pronoun from a non-defining clause. WRONG: 'My sister, that lives in Madrid...' CORRECT: 'My sister, who lives in Madrid...'",
                    mistakeEs: "'That' está PROHIBIDO en cláusulas no definitorias (con comas). MAL: 'My sister, that lives in Madrid...' BIEN: 'My sister, who lives in Madrid...'"
                },
                {
                    topic: "Modals: Ability, Possibility & Permission",
                    rule: "Ability → can (present), could (past general), be able to (specific single success). Permission → can (informal), may (formal). Possibility → might / may / could. Past speculation → might have / may have / could have.",
                    ruleEs: "Habilidad → can (presente), could (pasado general), be able to (logro puntual). Permiso → can (informal), may (formal). Posibilidad → might / may / could. Especulación pasada → might have / may have / could have.",
                    examples: [
                        "She can play the guitar. (general ability)",
                        "I was able to finish on time. (specific success)",
                        "Could you swim when you were five? (past ability)",
                        "May I open the window? (formal permission)",
                        "It might rain this afternoon. (future possibility)",
                        "She may have already left — I'm not sure. (past speculation)"
                    ],
                    mistake: "Don't use 'could' for a one-time successful past action. WRONG: 'I could pass the exam.' CORRECT: 'I managed to pass / I was able to pass the exam.'",
                    mistakeEs: "No uses 'could' para un logro puntual pasado. MAL: 'I could pass the exam.' BIEN: 'I managed to pass / I was able to pass the exam.'"
                },
                {
                    topic: "Gerunds vs. Infinitives",
                    rule: "After some verbs use -ing (gerund): enjoy, avoid, mind, suggest, finish, keep, deny, consider. After others use to + verb (infinitive): decide, want, hope, plan, agree, manage, refuse. Some change meaning with each form: stop, remember, forget, try, regret.",
                    ruleEs: "Después de ciertos verbos usa -ing: enjoy, avoid, mind, suggest, finish, keep. Después de otros usa to + verbo: decide, want, hope, plan, agree, manage. Algunos cambian de significado: stop, remember, forget, try, regret.",
                    examples: [
                        "I enjoy swimming. (enjoy → always gerund)",
                        "She decided to study harder. (decide → always infinitive)",
                        "I stopped smoking. (= I quit)",
                        "I stopped to smoke. (= I paused in order to smoke)",
                        "Remember to lock the door! (= don't forget – future action)",
                        "I remember locking the door. (= I recall doing it – past memory)"
                    ],
                    mistake: "Key verb pairs that change meaning: stop, remember, forget, try, regret, go on. Memorize both uses of each. Also: after prepositions ALWAYS use -ing. E.g.: 'I'm interested in learning' (NOT 'to learn').",
                    mistakeEs: "Pares de verbos clave que cambian de significado: stop, remember, forget, try, regret, go on. Memorízalos. Además: después de preposiciones SIEMPRE usa -ing. Ej: 'I'm interested in learning' (NO 'to learn')."
                },
                {
                    topic: "Zero, 1st & 2nd Conditionals",
                    rule: "Zero: general truth (if + present / present). 1st: real/likely future (if + present / will + verb). 2nd: unreal/unlikely present/future (if + past simple / would + verb). For 2nd conditional, use 'were' for all persons, not 'was' (formal).",
                    ruleEs: "Cero: verdad general (if + presente / presente). 1º: futuro real/probable (if + presente / will + verbo). 2º: presente/futuro irreal (if + pasado / would + verbo). En el 2º condicional, usa 'were' para todas las personas.",
                    examples: [
                        "If you heat water to 100°C, it boils. (zero – fact)",
                        "If it rains tomorrow, I will cancel the picnic. (1st – real)",
                        "If I won the lottery, I would travel the world. (2nd – dream)",
                        "If I were you, I would apologize. (2nd – 'were' not 'was')",
                        "What will you do if you miss the train? (1st)",
                        "I would help you if I knew the answer. (2nd)"
                    ],
                    mistake: "NEVER use 'will' or 'would' in the 'if' clause. WRONG: 'If it will rain...' or 'If I would win...'. CORRECT: 'If it rains...' / 'If I won...'",
                    mistakeEs: "NUNCA uses 'will' o 'would' dentro de la cláusula 'if'. MAL: 'If it will rain...' BIEN: 'If it rains...'"
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
                    topic: "Passiv (Präsens, Präteritum & Perfekt)",
                    rule: "Bildung: 'werden' + Partizip II. Für Vorgänge (Passiv werden) vs. Zustände (Passiv sein). Präsens: wird gemacht. Präteritum: wurde gemacht. Perfekt: ist gemacht worden.",
                    ruleEs: "Formación: 'werden' + Participio II. Para procesos (pasiva de proceso) vs. estados (pasiva de estado). Presente: wird gemacht. Pretérito: wurde gemacht. Perfecto: ist gemacht worden.",
                    examples: [
                        "Das Auto wird repariert. (Präsens – process)",
                        "Das Haus wurde 1950 gebaut. (Präteritum)",
                        "Der Brief ist geschrieben worden. (Perfekt)",
                        "Die Tür ist geschlossen. (Zustandspassiv – state: is closed)",
                        "Das Paket wird morgen geliefert. (Präsens, future reference)",
                        "Die Aufgabe wurde von den Schülern gelöst. (with agent)"
                    ],
                    mistake: "Verwechslung von Vorgangspassiv ('wird gemacht') und Zustandspassiv ('ist gemacht'). Letzteres beschreibt einen Zustand, nicht einen Vorgang.",
                    mistakeEs: "Confundir la pasiva de proceso ('wird gemacht') con la pasiva de estado ('ist gemacht'). La última describe un estado, no un proceso."
                },
                {
                    topic: "Nebensätze: weil, dass, obwohl, wenn",
                    rule: "In Nebensätzen (subordinate clauses) steht das konjugierte Verb am ENDE. Eingeleitet durch: weil (because), dass (that), obwohl (although), wenn (when/if), als (when, once), damit (so that).",
                    ruleEs: "En las oraciones subordinadas el verbo conjugado va al FINAL. Introducidas por: weil (porque), dass (que), obwohl (aunque), wenn (cuando/si), als (cuando – pasado), damit (para que).",
                    examples: [
                        "Ich lerne Deutsch, weil ich in Berlin arbeiten möchte.",
                        "Obwohl es regnet, gehen wir spazieren.",
                        "Er sagt, dass er müde ist.",
                        "Wenn ich Zeit habe, lese ich gerne.",
                        "Als ich Kind war, spielte ich immer draußen.",
                        "Sie lernt viel, damit sie die Prüfung besteht."
                    ],
                    mistake: "Das Verb NICHT in die Mitte des Nebensatzes setzen. FALSCH: 'Ich lerne Deutsch, weil ich möchte in Berlin arbeiten.' RICHTIG: '...weil ich in Berlin arbeiten möchte.'",
                    mistakeEs: "NO pongas el verbo en el medio de la subordinada. MAL: 'weil ich möchte arbeiten.' BIEN: 'weil ich arbeiten möchte.' (verbo al final)."
                },
                {
                    topic: "Relativsätze (Nominativ & Akkusativ)",
                    rule: "Relativpronomen richtet sich nach: (1) Genus des Bezugsnomens & (2) Kasus im Nebensatz. Nominativ: der/die/das/die. Akkusativ: den/die/das/die. Das Verb geht ans Ende des Relativsatzes.",
                    ruleEs: "El pronombre relativo depende de: (1) el género del sustantivo al que se refiere & (2) el caso dentro de la subordinada. Nominativo: der/die/das/die. Acusativo: den/die/das/die. El verbo va al final.",
                    examples: [
                        "Das ist der Mann, der dort wohnt. (mask. Nom.)",
                        "Das ist der Hund, den ich mag. (mask. Akk.)",
                        "Die Frau, die singt, ist meine Lehrerin. (fem. Nom.)",
                        "Das Haus, das ich kaufe, ist groß. (neutr. Akk.)",
                        "Die Kinder, die spielen, sind glücklich. (Pl. Nom.)",
                        "Das sind die Schuhe, die ich gestern gekauft habe. (Pl. Akk.)"
                    ],
                    mistake: "Den falschen Artikel/Kasus wählen. Häufigster Fehler: 'der Mann, den dort wohnt' – falsch! 'den' ist Akkusativ; der Nominativ 'der' ist nötig, da 'wohnen' kein Objekt braucht.",
                    mistakeEs: "Elegir el artículo o caso incorrecto. Error más frecuente: 'der Mann, den dort wohnt' – ¡incorrecto! 'den' es acusativo; se necesita el nominativo 'der' porque 'wohnen' no tiene objeto."
                },
                {
                    topic: "Adjektivdeklination nach Artikeln",
                    rule: "Die Adjektivendung hängt ab von: (1) Artikel (bestimmt/unbestimmt/kein Artikel) & (2) Kasus. NACH BESTIMMTEM ARTIKEL: meist -e oder -en. NACH UNBESTIMMTEM: variiert stärker. OHNE ARTIKEL: Adjektivendung trägt die Kasusinfo.",
                    ruleEs: "La terminación del adjetivo depende de: (1) artículo (determinado/indeterminado/sin artículo) & (2) caso. TRAS ART. DETERMINADO: mayormente -e o -en. TRAS ART. INDETERMINADO: varía más. SIN ARTÍCULO: el adjetivo lleva la marca de caso.",
                    examples: [
                        "Der alte Mann (bestimmt, Nom., mask.) → -e",
                        "Ein alter Mann (unbestimmt, Nom., mask.) → -er",
                        "Ich sehe den alten Mann. (bestimmt, Akk., mask.) → -en",
                        "Die nette Frau (bestimmt, Nom., fem.) → -e",
                        "Ich kaufe ein großes Haus. (unbestimmt, Akk., neutr.) → -es",
                        "Kalter Kaffee schmeckt nicht gut. (kein Artikel, Nom., mask.) → -er"
                    ],
                    mistake: "Die häufigsten Fehler: Endung beim unbestimmten Artikel im Nominativ Maskulinum (-er statt -e). Tipp: Lerne die Tabellen und übe viel!",
                    mistakeEs: "Los errores más comunes: terminación con artículo indeterminado en nominativo masculino (-er no -e). Consejo: aprende las tablas y practica mucho."
                },
                {
                    topic: "Modalverben: Präsens & Präteritum",
                    rule: "Modalverben (dürfen, können, möchten/mögen, müssen, sollen, wollen) + Infinitiv am Satzende. Im Präteritum (für Erzählungen): konnte, durfte, musste, wollte, sollte.",
                    ruleEs: "Verbos modales + infinitivo al final de la oración. En Präteritum (para narrar): konnte, durfte, musste, wollte, sollte.",
                    examples: [
                        "Ich muss morgen früh aufstehen. (obligation)",
                        "Du darfst hier nicht rauchen. (prohibition)",
                        "Er kann gut Gitarre spielen. (ability)",
                        "Früher konnte ich gut schwimmen. (past ability)",
                        "Ich wollte gestern anrufen, aber ich hatte keine Zeit. (past intention)",
                        "Als Kind musste ich immer um 9 Uhr ins Bett. (past obligation)"
                    ],
                    mistake: "Den Umlaut im Präteritum NICHT beibehalten: konnte (nicht: könnte), musste (nicht: müsste), durfte (nicht: dürfte). Diese Formen mit Umlaut = Konjunktiv II!",
                    mistakeEs: "NO conservar el umlaut en Präteritum: konnte (no könnte), musste (no müsste), durfte (no dürfte). Las formas con umlaut = Konjunktiv II."
                },
                {
                    topic: "Perfekt: Bildung & Wahl von haben/sein",
                    rule: "Das Perfekt wird im Alltag für vergangene Handlungen benutzt. Bildung: haben/sein + Partizip II. SEIN: Verben der Bewegung (gehen, fahren), Zustandsänderung (aufwachen, einschlafen) oder: bleiben, sein, werden. HABEN: die meisten anderen.",
                    ruleEs: "El Perfecto se usa en la lengua cotidiana para acciones pasadas. Formación: haben/sein + Partizip II. SEIN: verbos de movimiento (gehen, fahren), cambio de estado (aufwachen, einschlafen), o: bleiben, sein, werden. HABEN: la mayoría.",
                    examples: [
                        "Ich habe das Buch gelesen. (haben – transitive)",
                        "Sie hat Deutsch gelernt. (haben – activity)",
                        "Er ist nach Berlin gefahren. (sein – movement)",
                        "Wir sind gestern aufgewacht. (sein – state change)",
                        "Das Kind ist eingeschlafen. (sein – state change)",
                        "Er ist mein Freund geblieben. (sein – bleiben)"
                    ],
                    mistake: "'Ich habe gegangen' ist FALSCH. 'gehen' nimmt 'sein'. Verwirrend: 'fahren' – intransitiv mit sein ('Ich bin gefahren'), aber transitiv mit haben ('Ich habe das Auto gefahren').",
                    mistakeEs: "'Ich habe gegangen' es INCORRECTO. 'gehen' lleva 'sein'. Confuso: 'fahren' – intransitivo con sein ('Ich bin gefahren'), pero transitivo con haben ('Ich habe das Auto gefahren')."
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
