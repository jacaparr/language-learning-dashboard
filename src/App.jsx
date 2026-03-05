import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';
import Quiz from './Quiz';
import Flashcards from './Flashcards';
import GrammarGame from './GrammarGame';
import LanguageSelector from './LanguageSelector';
import GrammarSummary from './GrammarSummary';
import WordMatchGame from './WordMatchGame';
import FillBlankGame from './FillBlankGame';
import StatsPanel from './StatsPanel';
import { languages, levels, defaultContent } from './content';

// Variantes de animación profesional
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
};

function ProfileView({ user, xp, streak, onExit, onChangeProfile, onChangeSettings }) {
  return (
    <>
      <div className="mesh-container">
        <div className="orb orb-3"></div>
      </div>
      <div className="dashboard-container reveal">
        <header className="header" style={{ marginBottom: '40px' }}>
          <button onClick={onExit} className="glass-card" style={{ padding: '12px 24px', borderRadius: '16px', margin: 0 }}>← ATRÁS</button>
          <div className="badge-pill">MI PERFIL</div>
        </header>

        <div className="glass-card reveal" style={{ textAlign: 'center', padding: '40px' }}>
          <div style={{ width: '100px', height: '100px', background: user.color || 'linear-gradient(135deg, #00d2ff, #9d50bb)', borderRadius: '50%', margin: '0 auto 20px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', border: '4px solid rgba(255,255,255,0.2)' }}>{user.avatar || '👤'}</div>
          <h2 style={{ fontSize: '28px', fontWeight: '900', margin: 0 }}>{user.name}</h2>
          <p style={{ opacity: 0.8, color: '#fff' }}>Estudiante de Idiomas</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '30px' }}>
            <div className="glass-card" style={{ padding: '15px', background: 'rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '11px', fontWeight: '900', opacity: 0.5 }}>XP TOTAL</div>
              <div style={{ fontSize: '24px', fontWeight: '900' }}>{xp}</div>
            </div>
            <div className="glass-card" style={{ padding: '15px', background: 'rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '11px', fontWeight: '900', opacity: 0.5 }}>RACHA</div>
              <div style={{ fontSize: '24px', fontWeight: '900' }}>{streak}</div>
            </div>
          </div>

          <button onClick={onChangeSettings} className="premium-btn" style={{ marginTop: '25px', width: '100%', padding: '15px', background: 'linear-gradient(135deg, #00d2ff22, #9d50bb22)', color: '#00e5ff', border: '1px solid rgba(0,229,255,0.3)' }}>
            🌐 CAMBIAR IDIOMA / NIVEL
          </button>
          <button onClick={onChangeProfile} className="premium-btn" style={{ marginTop: '12px', width: '100%', padding: '15px', background: 'rgba(255,255,255,0.08)', color: '#fff', border: '1px solid rgba(255,255,255,0.15)' }}>
            CAMBIAR PERFIL
          </button>
        </div>

        <div className="glass-card reveal" style={{ marginTop: '20px', padding: '20px' }}>
          <div style={{ fontSize: '14px', fontWeight: '800', marginBottom: '15px' }}>LOGROS OBTENIDOS</div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div title="Flashcard Master" style={{ fontSize: '30px', opacity: 1 }}>🎖️</div>
            <div title="Grammar King" style={{ fontSize: '30px', opacity: 1 }}>👑</div>
            <div title="Early Bird" style={{ fontSize: '30px', opacity: 0.3 }}>🌅</div>
          </div>
        </div>
      </div>
    </>
  );
}



function UserSelector({ users, onSelect, onAdd }) {
  const [isAdding, setIsAdding] = useState(false);
  const [newName, setNewName] = useState('');

  const colors = [
    'linear-gradient(135deg, #00d2ff, #9d50bb)',
    'linear-gradient(135deg, #ff9a9e, #fecfef)',
    'linear-gradient(135deg, #a1c4fd, #c2e9fb)',
    'linear-gradient(135deg, #84fab0, #8fd3f4)',
    'linear-gradient(135deg, #fccb90, #d57eeb)'
  ];
  const avatars = ['👤', '🐱', '🦊', '🦁', '🐼', '🐨', '🐙', '🚀'];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div className="mesh-container"><div className="orb orb-1"></div><div className="orb orb-2"></div></div>
      <div className="dashboard-container reveal" style={{ maxWidth: '500px', width: '100%' }}>
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: '900', margin: 0 }}>¿Quién va a estudiar?</h1>
          <p style={{ opacity: 0.7 }}>Elige un perfil para continuar</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
          {users.map(u => (
            <motion.div
              key={u.id}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => onSelect(u.id)}
              className="glass-card"
              style={{ padding: '30px', textAlign: 'center', cursor: 'pointer', background: 'rgba(255,255,255,0.08)' }}
            >
              <div style={{ fontSize: '50px', marginBottom: '15px', background: u.color, borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px auto' }}>{u.avatar || '👤'}</div>
              <div style={{ fontWeight: '900', fontSize: '18px' }}>{u.name}</div>
            </motion.div>
          ))}

          <motion.div
            whileHover={{ y: -5 }}
            onClick={() => setIsAdding(true)}
            className="glass-card"
            style={{ padding: '30px', textAlign: 'center', cursor: 'pointer', background: 'rgba(255,255,255,0.03)', borderStyle: 'dashed' }}
          >
            <div style={{ fontSize: '50px', marginBottom: '15px' }}>➕</div>
            <div style={{ fontWeight: '900', fontSize: '18px' }}>Nuevo Perfil</div>
          </motion.div>
        </div>

        <AnimatePresence>
          {isAdding && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="glass-card" style={{ padding: '30px', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(20px)', position: 'fixed', inset: '20px', zIndex: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Crear Nuevo Perfil</h2>
              <input
                className="search-input"
                placeholder="Nombre del usuario..."
                value={newName}
                onChange={e => setNewName(e.target.value)}
                style={{ marginBottom: '30px' }}
              />
              <div style={{ display: 'flex', gap: '15px' }}>
                <button className="glass-card" style={{ flex: 1, padding: '15px' }} onClick={() => setIsAdding(false)}>CANCELAR</button>
                <button className="premium-btn" style={{ flex: 1, padding: '15px' }} onClick={() => {
                  if (newName) {
                    const color = colors[Math.floor(Math.random() * colors.length)];
                    const avatar = avatars[Math.floor(Math.random() * avatars.length)];
                    onAdd({ id: Date.now(), name: newName, color, avatar });
                    setIsAdding(false);
                    setNewName('');
                  }
                }}>CREAR</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function WelcomeScreen({ onStart }) {
  const [selLang, setSelLang] = useState('en');
  const [selLevel, setSelLevel] = useState('B2');

  return (
    <>
      <div className="mesh-container">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>
      <div className="dashboard-container reveal" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '90vh' }}>
        <header style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ fontSize: '60px', marginBottom: '10px' }}>🌍</div>
          <h1 style={{ fontSize: '42px', fontWeight: '900', margin: 0, letterSpacing: '-2px', textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>Bienvenido</h1>
          <p style={{ opacity: 0.9, fontSize: '18px', color: '#fff' }}>Configura tu experiencia de aprendizaje</p>
        </header>

        <section className="glass-card reveal" style={{ padding: '30px', marginBottom: '20px', background: 'rgba(255,255,255,0.1)' }}>
          <div style={{ fontSize: '12px', fontWeight: '900', opacity: 0.6, letterSpacing: '2px', marginBottom: '20px', color: '#fff' }}>ELIGE EL IDIOMA QUE QUIERES APRENDER</div>
          <div style={{ display: 'flex', gap: '15px' }}>
            {languages.map(l => (
              <div
                key={l.id}
                onClick={() => setSelLang(l.id)}
                className={`glass-card ${selLang === l.id ? 'active' : ''}`}
                style={{
                  flex: 1,
                  textAlign: 'center',
                  padding: '20px',
                  cursor: 'pointer',
                  border: selLang === l.id ? '2px solid #00e5ff' : '1px solid rgba(255,255,255,0.1)',
                  background: selLang === l.id ? 'rgba(0, 229, 255, 0.15)' : 'rgba(255,255,255,0.02)'
                }}
              >
                <div style={{ fontSize: '30px', marginBottom: '5px' }}>{l.flag}</div>
                <div style={{ fontWeight: '800', fontSize: '14px', color: '#fff' }}>{l.name === 'English' ? 'Inglés' : 'Alemán'}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card reveal" style={{ padding: '30px', marginBottom: '40px', background: 'rgba(255,255,255,0.1)', animationDelay: '0.1s' }}>
          <div style={{ fontSize: '12px', fontWeight: '900', opacity: 0.6, letterSpacing: '2px', marginBottom: '20px', color: '#fff' }}>ELIGE TU NIVEL ACTUAL</div>
          <div style={{ display: 'flex', gap: '10px' }}>
            {levels.map(lvl => (
              <div
                key={lvl}
                onClick={() => setSelLevel(lvl)}
                className={`glass-card ${selLevel === lvl ? 'active' : ''}`}
                style={{
                  flex: 1,
                  textAlign: 'center',
                  padding: '15px',
                  cursor: 'pointer',
                  fontWeight: '900',
                  border: selLevel === lvl ? '2px solid #b056e0' : '1px solid rgba(255,255,255,0.1)',
                  background: selLevel === lvl ? 'rgba(176, 86, 224, 0.2)' : 'rgba(255,255,255,0.02)',
                  color: '#fff'
                }}
              >
                {lvl}
              </div>
            ))}
          </div>
        </section>

        <button className="premium-btn reveal" style={{ animationDelay: '0.2s', background: '#fff', color: '#000' }} onClick={() => onStart(selLang, selLevel)}>
          EMPEZAR AHORA
        </button>
      </div>
    </>
  );
}

function SuggestModal({ onCancel, onSuggest }) {
  const [text, setText] = useState('');
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 10000, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(30px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div className="glass-card reveal" style={{ width: '100%', maxWidth: '400px', padding: '30px', border: '1px solid rgba(255,255,255,0.3)', background: 'rgba(20,20,20,0.7)', boxShadow: '0 50px 100px rgba(0,0,0,0.8)' }}>
        <h2 style={{ margin: '0 0 10px 0', fontSize: '24px', fontWeight: '900' }}>Proponer nuevo tema</h2>
        <p style={{ opacity: 0.7, fontSize: '14px', marginBottom: '20px' }}>¿Qué te gustaría aprender? Generaremos el contenido con IA.</p>
        <input
          autoFocus
          className="search-input"
          placeholder="Ej: Viajes al espacio..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ marginBottom: '20px', background: 'rgba(255,255,255,0.1)', color: '#fff' }}
        />
        <div style={{ display: 'flex', gap: '15px' }}>
          <button onClick={onCancel} className="glass-card" style={{ flex: 1, padding: '15px', margin: 0, fontSize: '14px' }}>CANCELAR</button>
          <button onClick={() => onSuggest(text)} className="premium-btn" style={{ flex: 1, padding: '15px', fontSize: '14px' }}>ENVIAR</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('users');
    if (saved) return JSON.parse(saved);
    // Usuario por defecto si no hay perfiles (migración)
    return [{ id: 1, name: 'Jose Antonio Caparros', avatar: '👤', color: 'linear-gradient(135deg, #00d2ff, #9d50bb)' }];
  });

  const [activeUserId, setActiveUserId] = useState(() => {
    return parseInt(localStorage.getItem('activeUserId')) || 1;
  });

  const activeUser = users.find(u => u.id === activeUserId) || users[0];
  const uKey = `user_${activeUser.id}_`;

  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem(uKey + 'language') || 'en';
    return saved === 'dt' ? 'de' : saved;
  });
  const [level, setLevel] = useState(() => localStorage.getItem(uKey + 'level') || 'B1');
  const [xp, setXp] = useState(() => parseInt(localStorage.getItem(uKey + 'xp')) || 0);
  const [streak, setStreak] = useState(() => parseInt(localStorage.getItem(uKey + 'streak')) || 0);
  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState(() => {
    const saved = localStorage.getItem('view') || 'user-selector';
    const stableViews = ['user-selector', 'welcome', 'dashboard'];
    return stableViews.includes(saved) ? saved : 'dashboard';
  });
  const [selectedWords, setSelectedWords] = useState(() => {
    const saved = localStorage.getItem(uKey + 'selectedWords');
    return saved ? JSON.parse(saved) : [];
  });
  const [isSuggesting, setIsSuggesting] = useState(false);
  const [customTopics, setCustomTopics] = useState(() => {
    const saved = localStorage.getItem(uKey + 'customTopics');
    return saved ? JSON.parse(saved) : [];
  });
  const [generatingTopicName, setGeneratingTopicName] = useState('');

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('activeUserId', activeUserId);
    localStorage.setItem(uKey + 'customTopics', JSON.stringify(customTopics));
    localStorage.setItem(uKey + 'xp', xp);
    localStorage.setItem(uKey + 'streak', streak);
    localStorage.setItem(uKey + 'language', language);
    localStorage.setItem(uKey + 'level', level);
    localStorage.setItem('view', view);
    localStorage.setItem(uKey + 'selectedWords', JSON.stringify(selectedWords));
  }, [users, activeUserId, uKey, customTopics, xp, streak, language, level, view, selectedWords]);

  const addXP = (earned) => {
    setXp(prev => Math.min(prev + earned, 500));
    const today = new Date().toISOString().slice(0, 10);
    const dailyXPKey = uKey + 'dailyXP';
    const dailyXP = JSON.parse(localStorage.getItem(dailyXPKey) || '{}');
    dailyXP[today] = (dailyXP[today] || 0) + earned;
    localStorage.setItem(dailyXPKey, JSON.stringify(dailyXP));
  };
  const startTopic = (topic) => { setSelectedWords(topic.words); setView('flashcards'); };
  const startMatchGame = (topic) => { setSelectedWords(topic.words); setView('match'); };
  const startFillBlank = (topic) => { setSelectedWords(topic.words); setView('fillblank'); };
  const currentFlag = languages.find(l => l.id === language)?.flag || '🇬🇧';

  const handleStart = (lang, lvl) => {
    setLanguage(lang);
    setLevel(lvl);
    setView('dashboard');
  };

  const handleSuggest = async (topicName) => {
    if (!topicName) return;
    setIsSuggesting(false);
    setGeneratingTopicName(topicName);
    setView('generating');

    try {
      const resp = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: topicName,
          language: language,
          level: level
        })
      });

      if (!resp.ok) {
        const errorData = await resp.json().catch(() => ({}));
        throw new Error(errorData.error || errorData.details || 'Error al generar contenido');
      }

      const data = await resp.json();
      console.log('Datos recibidos de IA:', data);

      // Sanitización profunda para evitar "term 1", "trimestre 1", "1.", etc.
      const sanitizedWords = data.map(item => {
        // Asegurarnos de que word sea string
        const rawWord = String(item.word || '');
        const cleanedWord = rawWord
          .replace(/^\d+[\.\)]\s*/, '') // Remove "1. " or "1) "
          .replace(/\s*(term|trimestre|nivel|level|part|parte|word|palabra|sección)\s*\d+/i, '') // Remove meta labels
          .replace(/\s*[\d]+$/g, '') // Remove trailing numbers
          .trim();

        return {
          ...item,
          word: cleanedWord || rawWord, // Fallback al original si la limpieza lo borra todo
          translation: String(item.translation || '').trim(),
          example: String(item.example || '').trim()
        };
      }).filter(item => item.word.length >= 2);

      console.log('Palabras sanitizadas final:', sanitizedWords);

      if (sanitizedWords.length === 0) {
        throw new Error('La IA no generó palabras válidas para este tema.');
      }

      const newTopic = {
        id: Date.now(),
        title: topicName,
        words: sanitizedWords,
        isCustom: true,
        createdDate: new Date().toISOString()
      };

      const updatedTopics = [...customTopics, newTopic];
      setCustomTopics(updatedTopics);
      localStorage.setItem('customTopics', JSON.stringify(updatedTopics));

      setView('dashboard');
    } catch (error) {
      console.error(error);
      alert('Error de IA: ' + error.message);
      setView('dashboard');
    } finally {
      setGeneratingTopicName('');
    }
  };

  const [genMessageIdx, setGenMessageIdx] = useState(0);
  const genMessages = [
    "Analizando tema central...",
    "Generando vocabulario específico...",
    "Traduciendo frases de ejemplo...",
    "Optimizando para nivel " + level,
    "Finalizando tarjetas de estudio..."
  ];

  useEffect(() => {
    let interval;
    if (view === 'generating') {
      setGenMessageIdx(0);
      interval = setInterval(() => {
        setGenMessageIdx(prev => (prev + 1) % genMessages.length);
      }, 700);
    }
    return () => clearInterval(interval);
  }, [view]);

  // Contenido dinámico para las vistas
  const renderContent = () => {
    switch (view) {
      case 'user-selector':
        return <UserSelector
          users={users}
          onSelect={(id) => {
            setActiveUserId(id);
            // Forzar recarga de estado para el nuevo usuario
            window.location.reload();
          }}
          onAdd={(u) => {
            setUsers([...users, u]);
            setActiveUserId(u.id);
            setView('welcome');
          }}
        />;
      case 'welcome': return <WelcomeScreen onStart={handleStart} />;
      case 'quiz':
        const allWords = [...(defaultContent[language]?.[level]?.topics?.[0]?.words || []), ...customTopics.flatMap(t => t.words)];
        return (
          <div style={{ position: 'relative' }}>
            <Quiz words={allWords} language={language} onComplete={(earned) => { addXP(earned); setView('dashboard'); }} onCancel={() => setView('dashboard')} />
            <nav className="tab-bar">
              <button className="tab-btn" onClick={() => setView('dashboard')} style={{ border: 'none', cursor: 'pointer' }}>🏠</button>
              <button className="tab-btn active" style={{ border: 'none', cursor: 'pointer' }}>🎯</button>
              <button className="tab-btn" onClick={() => setView('grammar')} style={{ border: 'none', cursor: 'pointer' }}>🧩</button>
              <button className="tab-btn" onClick={() => setView('stats')} style={{ border: 'none', cursor: 'pointer' }}>📊</button>
              <button className="tab-btn" onClick={() => setView('profile')} style={{ border: 'none', cursor: 'pointer' }}>👤</button>
            </nav>
          </div>
        );
      case 'flashcards': return <Flashcards key="flash" words={selectedWords} language={language} onExit={() => setView('dashboard')} />;
      case 'match': return <WordMatchGame words={selectedWords} language={language} onExit={() => setView('dashboard')} onAddXP={addXP} />;
      case 'fillblank': return <FillBlankGame words={selectedWords} language={language} onExit={() => setView('dashboard')} onAddXP={addXP} />;
      case 'stats':
        return (
          <div style={{ position: 'relative' }}>
            <StatsPanel onExit={() => setView('dashboard')} streak={streak} userId={activeUser.id} />
            <nav className="tab-bar">
              <button className="tab-btn" onClick={() => setView('dashboard')} style={{ border: 'none', cursor: 'pointer' }}>🏠</button>
              <button className="tab-btn" onClick={() => setView('quiz')} style={{ border: 'none', cursor: 'pointer' }}>🎯</button>
              <button className="tab-btn" onClick={() => setView('grammar')} style={{ border: 'none', cursor: 'pointer' }}>🧩</button>
              <button className="tab-btn active" style={{ border: 'none', cursor: 'pointer' }}>📊</button>
              <button className="tab-btn" onClick={() => setView('profile')} style={{ border: 'none', cursor: 'pointer' }}>👤</button>
            </nav>
          </div>
        );
      case 'grammar':
        return (
          <div style={{ position: 'relative' }}>
            <GrammarGame language={language} level={level} onExit={() => setView('dashboard')} onAddXP={addXP} />
            <nav className="tab-bar">
              <button className="tab-btn" onClick={() => setView('dashboard')} style={{ border: 'none', cursor: 'pointer' }}>🏠</button>
              <button className="tab-btn" onClick={() => setView('quiz')} style={{ border: 'none', cursor: 'pointer' }}>🎯</button>
              <button className="tab-btn active" style={{ border: 'none', cursor: 'pointer' }}>🧩</button>
              <button className="tab-btn" onClick={() => setView('stats')} style={{ border: 'none', cursor: 'pointer' }}>📊</button>
              <button className="tab-btn" onClick={() => setView('profile')} style={{ border: 'none', cursor: 'pointer' }}>👤</button>
            </nav>
          </div>
        );
      case 'grammar-summary': return <GrammarSummary language={language} level={level} onExit={() => setView('dashboard')} onPractice={() => setView('grammar')} />;
      case 'profile':
        return (
          <div style={{ position: 'relative' }}>
            <ProfileView
              user={activeUser}
              xp={xp}
              streak={streak}
              onExit={() => setView('dashboard')}
              onChangeProfile={() => setView('user-selector')}
              onChangeSettings={() => setView('welcome')}
            />
            <nav className="tab-bar">
              <button className="tab-btn" onClick={() => setView('dashboard')} style={{ border: 'none', cursor: 'pointer' }}>🏠</button>
              <button className="tab-btn" onClick={() => setView('quiz')} style={{ border: 'none', cursor: 'pointer' }}>🎯</button>
              <button className="tab-btn" onClick={() => setView('grammar')} style={{ border: 'none', cursor: 'pointer' }}>🧩</button>
              <button className="tab-btn" onClick={() => setView('stats')} style={{ border: 'none', cursor: 'pointer' }}>📊</button>
              <button className="tab-btn active" style={{ border: 'none', cursor: 'pointer' }}>👤</button>
            </nav>
          </div>
        );
      case 'generating': return (
        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
          <div className="mesh-container"><div className="orb orb-1"></div><div className="orb orb-2"></div><div className="orb orb-3"></div></div>
          <div className="dashboard-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh', textAlign: 'center' }}>
            <div className="glass-card" style={{ padding: '50px', borderRadius: '40px', border: '2px solid rgba(0,242,255,0.3)', background: 'rgba(0,0,0,0.4)' }}>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} style={{ fontSize: '80px', marginBottom: '30px' }}>🧠</motion.div>
              <h2 style={{ fontSize: '32px', fontWeight: '900', margin: '0 0 10px 0', color: '#fff' }}>IA Generando...</h2>
              <p style={{ opacity: 0.9, color: '#00f2ff', fontSize: '18px', fontWeight: '800', height: '24px' }}>{genMessages[genMessageIdx]}</p>
              <p style={{ opacity: 0.6, color: '#fff', fontSize: '14px', marginTop: '10px' }}>Tema: "{generatingTopicName}"</p>
              <div className="progress-track" style={{ marginTop: '30px', width: '240px', height: '6px' }}>
                <motion.div className="progress-fill" style={{ width: `${(genMessageIdx + 1) * 20}%` }} transition={{ duration: 0.5 }}></motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      );
      case 'dashboard':
      default:
        const filteredTopics = [...(defaultContent[language]?.[level]?.topics || []), ...customTopics]
          .filter(t => t.title.toLowerCase().includes(searchTerm.toLowerCase()));

        return (
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <div className="mesh-container"><div className="orb orb-1"></div><div className="orb orb-2"></div><div className="orb orb-3"></div></div>
            <div className="dashboard-container">
              <header className="header">
                <h1 className="user-name">{activeUser.name}</h1>
                <div className="badge-pill" style={{ background: 'rgba(0, 242, 255, 0.15)', color: '#00f2ff' }}>{level} • {currentFlag}</div>
              </header>

              <motion.div whileHover={{ scale: 1.05 }} className="streak-pill" style={{ background: 'rgba(255, 255, 255, 0.08)' }}>
                <span style={{ fontSize: '24px' }}>🔥</span>
                <span style={{ fontWeight: '800', fontSize: '18px', color: '#fff' }}>{streak} DÍAS DE RACHA</span>
              </motion.div>

              <motion.section whileHover={{ y: -5 }} className="glass-card masterclass-hero" onClick={() => setView('grammar-summary')} style={{ background: 'rgba(255,255,255,0.08)', cursor: 'pointer' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontSize: '10px', fontWeight: '900', letterSpacing: '2px', color: '#00f2ff', marginBottom: '8px' }}>CURSO MAGISTRAL</div>
                    <h2 style={{ fontSize: '28px', fontWeight: '900', margin: 0, lineHeight: 1.1, textShadow: '0 2px 10px rgba(0,0,0,0.4)', color: '#fff' }}>Gramática<br />Pro Nivel {level}</h2>
                  </div>
                  <div style={{ fontSize: '50px' }}>💎</div>
                </div>
                <p style={{ fontSize: '14px', opacity: 0.9, marginTop: '15px', fontWeight: '500', color: '#fff' }}>Domina el idioma con lecciones bilingües diseñadas para expertos.</p>
              </motion.section>

              <section className="progress-container">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontWeight: '800', fontSize: '14px', color: '#fff' }}>OBJETIVO DIARIO</span>
                  <span style={{ opacity: 0.8, fontSize: '14px', fontWeight: '800', color: '#fff' }}>{xp} / 500 XP</span>
                </div>
                <div className="progress-track" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                  <motion.div initial={{ width: 0 }} animate={{ width: `${(xp / 500) * 100}%` }} className="progress-fill"></motion.div>
                </div>
              </section>

              <div className="search-container">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Buscar por tema..."
                  value={searchTerm}
                  style={{ background: 'rgba(255, 255, 255, 0.08)', color: '#fff' }}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="luxury-grid">
                {filteredTopics.map((topic, i) => (
                  <motion.div
                    key={topic.id}
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="glass-card luxury-card"
                    onClick={() => startTopic(topic)}
                    style={{ background: 'rgba(255,255,255,0.08)', cursor: 'pointer' }}
                  >
                    <div className="icon">
                      {topic.title.match(/Work|Arbeit/i) ? '💼' :
                        topic.title.match(/Env|Umw/i) ? '🌍' :
                          topic.title.match(/Phi/i) ? '⚖️' : '📚'}
                    </div>
                    <h3 style={{ color: '#fff', textShadow: '0 2px 5px rgba(0,0,0,0.3)', fontWeight: '900' }}>
                      {topic.title === 'Work' ? 'Trabajo' : topic.title === 'Environment' ? 'Medio Ambiente' : topic.title === 'Philosophy & Ethics' ? 'Filosofía' : topic.title}
                    </h3>
                    <div style={{ display: 'flex', gap: '6px', marginTop: 'auto', flexWrap: 'wrap' }}>
                      <button
                        onClick={(e) => { e.stopPropagation(); startTopic(topic); }}
                        className="glass-card"
                        style={{ flex: 1, padding: '8px 6px', fontSize: '10px', margin: 0, background: 'rgba(255,255,255,0.1)' }}
                      >📇 REPASAR</button>
                      <button
                        onClick={(e) => { e.stopPropagation(); startMatchGame(topic); }}
                        className="glass-card"
                        style={{ flex: 1, padding: '8px 6px', fontSize: '10px', margin: 0, background: 'rgba(0,229,255,0.12)', color: '#00e5ff', border: '1px solid rgba(0,229,255,0.3)' }}
                      >🎮 PAREJAS</button>
                      <button
                        onClick={(e) => { e.stopPropagation(); startFillBlank(topic); }}
                        className="premium-btn"
                        style={{ flex: 1, padding: '8px 6px', fontSize: '10px', margin: 0, background: '#fff', color: '#000' }}
                      >✍️ FRASES</button>
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card luxury-card"
                  onClick={() => setIsSuggesting(true)}
                  style={{ opacity: 0.7, borderStyle: 'dashed', cursor: 'pointer', background: 'rgba(255,255,255,0.03)' }}
                >
                  <div className="icon">➕</div>
                  <h3 style={{ color: '#fff', fontWeight: '900' }}>Proponer Tema</h3>
                </motion.div>
              </div>

              <div style={{ height: '140px' }}></div>

              <nav className="tab-bar">
                <button className={`tab-btn ${view === 'dashboard' ? 'active' : ''}`} onClick={() => setView('dashboard')} style={{ border: 'none', cursor: 'pointer' }}>🏠</button>
                <button className={`tab-btn ${view === 'quiz' ? 'active' : ''}`} onClick={() => setView('quiz')} style={{ border: 'none', cursor: 'pointer' }}>🎯</button>
                <button className={`tab-btn ${view === 'grammar' ? 'active' : ''}`} onClick={() => setView('grammar')} style={{ border: 'none', cursor: 'pointer' }}>🧩</button>
                <button className={`tab-btn ${view === 'stats' ? 'active' : ''}`} onClick={() => setView('stats')} style={{ border: 'none', cursor: 'pointer' }}>📊</button>
                <button className={`tab-btn ${view === 'profile' ? 'active' : ''}`} onClick={() => setView('profile')} style={{ border: 'none', cursor: 'pointer' }}>👤</button>
              </nav>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isSuggesting && <SuggestModal key="suggest" onCancel={() => setIsSuggesting(false)} onSuggest={handleSuggest} />}
      {renderContent()}
    </AnimatePresence>
  );
}

export default App;