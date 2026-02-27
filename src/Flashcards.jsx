import React, { useState } from 'react';

function Flashcards({ words = [], language, onExit }) {
    const [index, setIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const speak = (text, langCode) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = langCode === 'en' ? 'en-US' : 'de-DE';
        window.speechSynthesis.speak(utterance);
    };

    if (words.length === 0) return <div>No words!</div>;

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
                    onClick={() => setIsFlipped(!isFlipped)}
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
                        border: '1px solid rgba(255,255,255,0.15)',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.6)'
                    }}
                >
                    {!isFlipped ? (
                        <div className="fade-in">
                            <h2 style={{ fontSize: '48px', fontWeight: '900', margin: '0 0 30px 0', letterSpacing: '-2px', color: '#fff', textShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>{currentWord.word}</h2>
                            <button
                                onClick={(e) => { e.stopPropagation(); speak(currentWord.word, language); }}
                                className="glass-card"
                                style={{ padding: '20px', borderRadius: '50%', fontSize: '24px', background: 'rgba(0, 229, 255, 0.2)', border: '1px solid rgba(0, 229, 255, 0.4)' }}
                            >🔊 Escuchar</button>
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
