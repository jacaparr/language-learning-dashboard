import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function AIChat({ language, level, onExit }) {
    const [messages, setMessages] = useState([
        { id: 1, text: language === 'de' ? "Hallo! Ich bin dein KI-Lehrer. Wie kann ich dir heute helfen?" : "Hello! I am your AI tutor. How can I help you today?", sender: 'ai' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: input,
                    history: messages.map(m => ({ role: m.sender === 'ai' ? 'model' : 'user', parts: [{ text: m.text }] })),
                    language,
                    level
                })
            });

            const data = await response.json();
            if (data.reply) {
                setMessages(prev => [...prev, { id: Date.now() + 1, text: data.reply, sender: 'ai' }]);
            } else {
                throw new Error(data.error || 'No reply');
            }
        } catch (err) {
            setMessages(prev => [...prev, { id: Date.now() + 1, text: "⚠️ Error: " + err.message, sender: 'ai' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="dashboard-container" style={{ display: 'flex', flexDirection: 'column', height: '100vh', padding: '20px 0' }}>
            <header className="header" style={{ padding: '0 20px' }}>
                <h1 className="user-name">Tutor IA</h1>
                <div className="badge-pill" style={{ background: 'rgba(0, 242, 255, 0.15)', color: '#00f2ff' }}>{language.toUpperCase()} • {level}</div>
            </header>

            <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <AnimatePresence>
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, scale: 0.9, x: msg.sender === 'user' ? 20 : -20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            style={{
                                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                maxWidth: '80%',
                                padding: '12px 18px',
                                borderRadius: msg.sender === 'user' ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
                                background: msg.sender === 'user' ? 'var(--primary)' : 'rgba(255,255,255,0.08)',
                                color: msg.sender === 'user' ? '#000' : '#fff',
                                fontSize: '15px',
                                fontWeight: msg.sender === 'user' ? '600' : '400',
                                boxShadow: msg.sender === 'user' ? '0 10px 20px var(--primary-glow)' : 'none',
                                border: msg.sender === 'ai' ? '1px solid rgba(255,255,255,0.1)' : 'none'
                            }}
                        >
                            {msg.text}
                        </motion.div>
                    ))}
                    {isLoading && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ alignSelf: 'flex-start', color: 'var(--primary)', fontSize: '12px', fontWeight: '800' }}>
                            IA ESCRIBIENDO...
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div style={{ padding: '20px', paddingBottom: '100px', display: 'flex', gap: '10px' }}>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Escribe un mensaje..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    style={{ flex: 1, background: 'rgba(255, 255, 255, 0.08)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}
                />
                <button onClick={sendMessage} className="premium-btn" style={{ padding: '0 25px', background: '#fff', color: '#000', margin: 0 }}>
                    {isLoading ? '...' : 'ENVIAR'}
                </button>
            </div>
        </motion.div>
    );
}

export default AIChat;
