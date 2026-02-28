import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Utility: replace first occurrence of the target word in a sentence with blanks
function createBlank(example, word) {
    const regex = new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
    const match = example.match(regex);
    if (!match) return { sentence: example + ' (__________)', answer: word };
    const blank = '_'.repeat(match[0].length);
    return { sentence: example.replace(regex, blank), answer: match[0] };
}

// Generate 3 wrong options from the rest of the words list
function getOptions(correctWord, allWords) {
    const wrong = allWords
        .map(w => w.word)
        .filter(w => w.toLowerCase() !== correctWord.toLowerCase())
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
    const opts = [...wrong, correctWord].sort(() => Math.random() - 0.5);
    return opts;
}

function FillBlankGame({ words, language, onExit, onAddXP }) {
    const [index, setIndex] = useState(0);
    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState(null);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [inputMode, setInputMode] = useState(false); // fallback when <4 words
    const [typed, setTyped] = useState('');
    const inputRef = useRef(null);

    const validWords = words.filter(w => w.example && w.example.length > 0);

    const current = validWords[index];
    const { sentence, answer } = current
        ? createBlank(current.example, current.word)
        : { sentence: '', answer: '' };

    useEffect(() => {
        if (!current) return;
        if (validWords.length < 4) {
            setInputMode(true);
        } else {
            setOptions(getOptions(current.word, validWords));
            setInputMode(false);
        }
        setSelected(null);
        setTyped('');
    }, [index, validWords.length]);

    useEffect(() => {
        if (inputMode && inputRef.current) inputRef.current.focus();
    }, [inputMode, index]);

    const speak = (text) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = language === 'en' ? 'en-US' : 'de-DE';
        utterance.rate = 0.85;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
    };

    const handleAnswer = (choice) => {
        if (selected !== null) return;
        setSelected(choice);
        const correct = choice.toLowerCase() === answer.toLowerCase();
        if (correct) {
            setScore(s => s + 1);
            setStreak(s => s + 1);
            speak(current.example);
        } else {
            setStreak(0);
        }
        setTimeout(() => {
            if (index + 1 >= validWords.length) {
                setGameOver(true);
                onAddXP(40 + score * 5);
            } else {
                setIndex(i => i + 1);
            }
        }, 1200);
    };

    const handleTyped = () => {
        handleAnswer(typed.trim());
    };

    if (validWords.length === 0) {
        return (
            <div className="dashboard-container" style={{ textAlign: 'center', paddingTop: '100px' }}>
                <h2 style={{ color: '#fff' }}>Este tema no tiene ejemplos de frases aún.</h2>
                <button onClick={onExit} className="premium-btn" style={{ marginTop: 30 }}>VOLVER</button>
            </div>
        );
    }

    return (
        <div className="dashboard-container" style={{ minHeight: '100vh', padding: '20px' }}>
            <div className="mesh-container"><div className="orb orb-2" /><div className="orb orb-3" /></div>

            {/* Header */}
            <header className="header" style={{ marginBottom: '24px' }}>
                <button onClick={onExit} className="glass-card"
                    style={{ padding: '12px 24px', borderRadius: '16px', margin: 0, background: 'rgba(255,255,255,0.1)' }}>
                    ← VOLVER
                </button>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    {streak >= 2 && (
                        <div className="badge-pill" style={{ background: 'rgba(255,180,0,0.2)', color: '#ffb400' }}>
                            🔥 {streak}x RACHA
                        </div>
                    )}
                    <div className="badge-pill" style={{ background: 'rgba(0,229,255,0.15)', color: '#00e5ff' }}>
                        {index + 1} / {validWords.length}
                    </div>
                </div>
            </header>

            <AnimatePresence mode="wait">
                {!gameOver ? (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{ duration: 0.35 }}
                    >
                        {/* Score bar */}
                        <div className="progress-track" style={{ marginBottom: '24px' }}>
                            <motion.div
                                className="progress-fill"
                                animate={{ width: `${(score / validWords.length) * 100}%` }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>

                        {/* Card */}
                        <div className="glass-card" style={{
                            padding: '36px',
                            background: 'rgba(0,0,0,0.4)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            marginBottom: '28px',
                            textAlign: 'center'
                        }}>
                            <div style={{ fontSize: '11px', fontWeight: 900, opacity: 0.5, letterSpacing: '2px', marginBottom: '20px', color: '#fff' }}>
                                COMPLETA LA FRASE
                            </div>
                            <p style={{
                                fontSize: '22px',
                                fontWeight: '700',
                                color: '#fff',
                                lineHeight: 1.5,
                                letterSpacing: '-0.3px',
                                marginBottom: 0
                            }}>
                                {sentence}
                            </p>
                            <div style={{ fontSize: '12px', color: '#00e5ff', marginTop: '16px', opacity: 0.7 }}>
                                💡 {current.translation}
                            </div>
                        </div>

                        {/* Options or Input */}
                        {!inputMode ? (
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                                {options.map((opt, i) => {
                                    const isCorrect = opt.toLowerCase() === answer.toLowerCase();
                                    const isSelected = selected === opt;
                                    let bg = 'rgba(255,255,255,0.06)';
                                    let border = '1px solid rgba(255,255,255,0.1)';
                                    let color = '#fff';
                                    if (selected !== null) {
                                        if (isCorrect) { bg = 'rgba(0,229,100,0.2)'; border = '2px solid #00e564'; color = '#00e564'; }
                                        else if (isSelected) { bg = 'rgba(255,71,87,0.2)'; border = '2px solid #ff4757'; color = '#ff4757'; }
                                    }
                                    return (
                                        <motion.button
                                            key={i}
                                            whileHover={selected === null ? { scale: 1.03, y: -3 } : {}}
                                            whileTap={selected === null ? { scale: 0.97 } : {}}
                                            onClick={() => handleAnswer(opt)}
                                            style={{
                                                padding: '20px',
                                                borderRadius: '18px',
                                                background: bg,
                                                border,
                                                color,
                                                fontSize: '17px',
                                                fontWeight: '800',
                                                cursor: selected !== null ? 'default' : 'pointer',
                                                transition: 'all 0.25s ease',
                                                boxShadow: selected !== null && isCorrect ? '0 0 20px rgba(0,229,100,0.3)' : 'none'
                                            }}
                                        >
                                            {opt}
                                        </motion.button>
                                    );
                                })}
                            </div>
                        ) : (
                            <div style={{ display: 'flex', gap: '12px' }}>
                                <input
                                    ref={inputRef}
                                    className="search-input"
                                    placeholder="Escribe la palabra..."
                                    value={typed}
                                    onChange={e => setTyped(e.target.value)}
                                    onKeyDown={e => e.key === 'Enter' && handleTyped()}
                                    style={{
                                        flex: 1,
                                        background: selected === null
                                            ? 'rgba(255,255,255,0.08)'
                                            : typed.toLowerCase() === answer.toLowerCase()
                                                ? 'rgba(0,229,100,0.15)'
                                                : 'rgba(255,71,87,0.15)',
                                        color: '#fff',
                                        border: selected === null
                                            ? '1px solid rgba(255,255,255,0.15)'
                                            : typed.toLowerCase() === answer.toLowerCase()
                                                ? '1px solid #00e564'
                                                : '1px solid #ff4757'
                                    }}
                                    disabled={selected !== null}
                                />
                                <button
                                    onClick={handleTyped}
                                    className="premium-btn"
                                    disabled={selected !== null}
                                    style={{ padding: '0 24px', background: '#fff', color: '#000' }}
                                >
                                    OK
                                </button>
                            </div>
                        )}
                    </motion.div>
                ) : (
                    /* Game Over */
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className="glass-card"
                        style={{ textAlign: 'center', padding: '60px 40px', marginTop: '40px', background: 'rgba(0,0,0,0.5)', border: '2px solid rgba(0,229,255,0.3)' }}
                    >
                        <div style={{ fontSize: '80px', marginBottom: '20px' }}>
                            {score >= validWords.length * 0.8 ? '🏆' : score >= validWords.length * 0.5 ? '🎯' : '💪'}
                        </div>
                        <h2 style={{ fontSize: '36px', fontWeight: 900, color: '#fff', margin: '0 0 10px' }}>
                            {score >= validWords.length * 0.8 ? '¡PERFECTO!' : score >= validWords.length * 0.5 ? '¡MUY BIEN!' : '¡SIGUE PRACTICANDO!'}
                        </h2>
                        <p style={{ color: '#00e5ff', fontSize: '20px', fontWeight: 800, marginBottom: 8 }}>
                            {score} / {validWords.length} CORRECTAS
                        </p>
                        <div style={{ fontSize: '20px', color: '#ffb400', marginBottom: '40px' }}>+{40 + score * 5} XP</div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                            <button onClick={() => { setIndex(0); setScore(0); setStreak(0); setGameOver(false); setSelected(null); }}
                                className="glass-card" style={{ padding: '18px', margin: 0, fontSize: '14px', fontWeight: 800 }}>
                                🔄 REPETIR
                            </button>
                            <button onClick={onExit} className="premium-btn" style={{ padding: '18px', background: '#fff', color: '#000', fontSize: '14px' }}>
                                CONTINUAR
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default FillBlankGame;
