import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function WordMatchGame({ words, onExit, onAddXP }) {
    const [cards, setCards] = useState([]);
    const [selected, setSelected] = useState([]);
    const [matched, setMatched] = useState([]);
    const [gameStatus, setGameStatus] = useState('playing'); // playing, won

    useEffect(() => {
        // Prepare game: shuffle and double the cards (word and translation)
        const gameCards = [
            ...words.map(w => ({ id: `word-${w.word}`, text: w.word, pairId: w.word, type: 'original' })),
            ...words.map(w => ({ id: `trans-${w.word}`, text: w.translation, pairId: w.word, type: 'translation' }))
        ].sort(() => Math.random() - 0.5);

        setCards(gameCards);
    }, [words]);

    const handleCardClick = (card) => {
        if (selected.length === 2 || matched.includes(card.pairId) || selected.find(s => s.id === card.id)) return;

        const newSelected = [...selected, card];
        setSelected(newSelected);

        if (newSelected.length === 2) {
            if (newSelected[0].pairId === newSelected[1].pairId) {
                setMatched(prev => [...prev, newSelected[0].pairId]);
                setSelected([]);
                if (matched.length + 1 === words.length) {
                    setGameStatus('won');
                    onAddXP(50);
                }
            } else {
                setTimeout(() => setSelected([]), 1000);
            }
        }
    };

    return (
        <div className="dashboard-container" style={{ minHeight: '100vh', padding: '20px' }}>
            <header className="header" style={{ marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button onClick={onExit} className="glass-card" style={{ padding: '12px 24px', borderRadius: '16px', margin: 0, background: 'rgba(255,255,255,0.1)' }}>← VOLVER</button>
                <div className="badge-pill" style={{ background: 'var(--accent-glow)', color: '#fff' }}>
                    {matched.length} / {words.length} PAREJAS
                </div>
            </header>

            <AnimatePresence>
                {gameStatus === 'playing' ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                            gap: '15px',
                            perspective: '1000px'
                        }}
                    >
                        {cards.map((card) => {
                            const isSelected = selected.find(s => s.id === card.id);
                            const isMatched = matched.includes(card.pairId);

                            return (
                                <motion.div
                                    key={card.id}
                                    layout
                                    onClick={() => handleCardClick(card)}
                                    whileHover={{ scale: isMatched ? 1 : 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        height: '120px',
                                        cursor: isMatched ? 'default' : 'pointer',
                                        position: 'relative',
                                        transformStyle: 'preserve-3d',
                                    }}
                                >
                                    <div style={{
                                        width: '100%',
                                        height: '100%',
                                        position: 'absolute',
                                        borderRadius: '20px',
                                        background: isMatched ? 'rgba(0, 229, 255, 0.2)' : isSelected ? 'rgba(189, 106, 240, 0.3)' : 'rgba(255,255,255,0.05)',
                                        border: isMatched ? '2px solid #00e5ff' : isSelected ? '2px solid #bd6af0' : '1px solid rgba(255,255,255,0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        padding: '10px',
                                        transition: 'all 0.3s ease',
                                        boxShadow: isSelected || isMatched ? '0 10px 20px rgba(0,0,0,0.3)' : 'none'
                                    }}>
                                        <span style={{
                                            fontSize: '14px',
                                            fontWeight: '700',
                                            color: isMatched ? '#00e5ff' : '#fff',
                                            opacity: isMatched ? 0.8 : 1
                                        }}>
                                            {card.text}
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="glass-card"
                        style={{
                            textAlign: 'center',
                            padding: '60px',
                            marginTop: '40px',
                            background: 'rgba(0,0,0,0.4)',
                            border: '2px solid #00e5ff'
                        }}
                    >
                        <h2 style={{ fontSize: '48px', fontWeight: '900', color: '#fff', marginBottom: '20px' }}>¡EXCELENTE!</h2>
                        <p style={{ fontSize: '20px', color: '#00e5ff', marginBottom: '40px' }}>Has memorizado todas las palabras.</p>
                        <div style={{ fontSize: '24px', color: '#fbbf24', marginBottom: '40px' }}>🔥 +50 XP</div>
                        <button
                            onClick={onExit}
                            className="premium-btn"
                            style={{ background: '#fff', color: '#000', padding: '20px 40px' }}
                        >
                            CONTINUAR
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default WordMatchGame;
