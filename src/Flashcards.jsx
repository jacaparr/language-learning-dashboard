import React, { useState } from 'react';

function Flashcards({ words = [], language, onExit }) {
    const [index, setIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const [isListening, setIsListening] = useState(false);
    const [feedback, setFeedback] = useState(null);

    const speak = (text, langCode) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = langCode === 'en' ? 'en-US' : 'de-DE';
        window.speechSynthesis.speak(utterance);
    };

    const listen = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert("Tu navegador no soporta reconocimiento de voz.");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = language === 'en' ? 'en-US' : 'de-DE';
        recognition.start();
        setIsListening(true);
        setFeedback(null);

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript.toLowerCase();
            const target = currentWord.word.toLowerCase();

            if (transcript.includes(target) || target.includes(transcript)) {
                setFeedback('correct');
            } else {
                setFeedback('wrong');
            }
        };

        recognition.onend = () => setIsListening(false);
    };

    if (words.length === 0) return <div style={{ textAlign: 'center', padding: '100px', color: '#fff', fontWeight: '900' }}>¡No hay palabras disponibles!</div>;

    const currentWord = words[index];

    return (
        <>
            <div className="mesh-container">
                <div className="orb orb-2"></div>
                <div className="orb orb-1"></div>
            </div>
            <div className="dashboard-container reveal">
                <header className="header" style={{ marginBottom: '20px' }}>
                    <button onClick={onExit} className="glass-card" style={{ padding: '12px 24px', borderRadius: '16px', margin: 0, background: 'rgba(255,255,255,0.1)' }}>← VOLVER</button>
                    <div className="badge-pill" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>{index + 1} / {words.length} TARJETAS</div>
                </header>

                <div
                    className={`glass-card reveal ${isFlipped ? 'flipped' : ''}`}
                    onClick={() => { if (!isListening) setIsFlipped(!isFlipped); }}
                    style={{
                        height: '450px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        cursor: 'pointer',
                        marginTop: '20px',
                        perspective: '1000px',
                        padding: '40px',
                        background: 'rgba(255,255,255,0.06)',
                        border: isListening ? '2px solid #00f2ff' : '1px solid rgba(255,255,255,0.15)',
                        boxShadow: isListening ? '0 0 40px rgba(0,242,255,0.3)' : '0 30px 60px rgba(0,0,0,0.6)',
                        transition: '0.3s'
                    }}
                >
                    {!isFlipped ? (
                        <div className="fade-in">
                            {feedback === 'correct' && <div style={{ color: '#00ff88', fontWeight: '900', marginBottom: '10px' }}>¡EXCELENTE PRONUNCIACIÓN! ✨</div>}
                            {feedback === 'wrong' && <div style={{ color: '#ff4444', fontWeight: '900', marginBottom: '10px' }}>INTÉNTALO DE NUEVO 🎙️</div>}

                            <h2 style={{ fontSize: '48px', fontWeight: '900', margin: '0 0 30px 0', letterSpacing: '-2px', color: '#fff', textShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>{currentWord.word}</h2>

                            <div style={{ display: 'flex', gap: '15px' }}>
                                <button
                                    onClick={(e) => { e.stopPropagation(); speak(currentWord.word, language); }}
                                    className="glass-card"
                                    style={{ padding: '20px', borderRadius: '50%', fontSize: '24px', background: 'rgba(0, 229, 255, 0.2)', border: '1px solid rgba(0, 229, 255, 0.4)' }}
                                    title="Escuchar"
                                >🔊</button>

                                <button
                                    onClick={(e) => { e.stopPropagation(); listen(); }}
                                    className="glass-card"
                                    style={{
                                        padding: '20px',
                                        borderRadius: '50%',
                                        fontSize: '24px',
                                        background: isListening ? '#00f2ff' : 'rgba(255, 255, 255, 0.1)',
                                        color: isListening ? '#000' : '#fff',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        animation: isListening ? 'pulse 1.5s infinite' : 'none'
                                    }}
                                    title="Practicar Pronunciación"
                                >{isListening ? '🛑' : '🎤'}</button>
                            </div>

                            <p style={{ marginTop: '40px', fontSize: '13px', opacity: 0.6, fontWeight: '900', color: '#fff', letterSpacing: '1px' }}>TOCA PARA REVELAR</p>
                        </div>
                    ) : (
                        <div className="fade-in">
                            <h2 style={{ fontSize: '32px', color: '#00e5ff', fontWeight: '900', margin: '0 0 20px 0', textShadow: '0 2px 10px rgba(0,229,255,0.3)' }}>{currentWord.translation}</h2>
                            <div style={{ padding: '25px', background: 'rgba(255,255,255,0.05)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <p style={{ fontSize: '20px', fontStyle: 'italic', opacity: 1, margin: 0, color: '#fff', lineHeight: 1.4 }}>"{currentWord.example}"</p>
                            </div>
                            <button
                                onClick={(e) => { e.stopPropagation(); speak(currentWord.example, language); }}
                                className="glass-card"
                                style={{ padding: '20px', borderRadius: '50%', fontSize: '24px', marginTop: '30px', background: 'rgba(176, 86, 224, 0.2)', border: '1px solid rgba(176, 86, 224, 0.4)' }}
                            >🔊 Pronunciación</button>
                        </div>
                    )}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '40px' }}>
                    <button
                        className="glass-card"
                        onClick={() => { setIndex((index - 1 + words.length) % words.length); setIsFlipped(false); }}
                        style={{ padding: '25px', fontSize: '16px', fontWeight: '900', background: 'rgba(255,255,255,0.1)' }}
                    >ANTERIOR</button>
                    <button
                        className="premium-btn"
                        style={{ background: '#fff', color: '#000' }}
                        onClick={() => { setIndex((index + 1) % words.length); setIsFlipped(false); }}
                    >SIGUIENTE</button>
                </div>
            </div>
        </>
    );
}

export default Flashcards;
