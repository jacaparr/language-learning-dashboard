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
import AIChat from './AIChat';
import { languages, levels, defaultContent } from './content';

// Variantes de animación profesional
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
};

const ACHIEVEMENTS_LIST = [
  { id: 'first_steps', title: 'Primeros Pasos', icon: '👣', desc: 'Gana tus primeros 50 XP', goal: 50, type: 'xp' },
  { id: 'xp_master', title: 'Maestro de XP', icon: '⚡', desc: 'Llega a 300 XP totales', goal: 300, type: 'xp' },
  { id: 'streak_3', title: 'Racha de Bronce', icon: '🔥', desc: 'Mantén una racha de 3 días', goal: 3, type: 'streak' },
  { id: 'streak_7', title: 'Racha de Oro', icon: '🏆', desc: 'Mantén una racha de 7 días', goal: 7, type: 'streak' },
  { id: 'chat_addict', title: 'Charlatán', icon: '💬', desc: 'Usa el Chat IA', goal: 1, type: 'chat' }
];

function ProfileView({ user, xp, streak, achievements = [], onExit, onChangeProfile, onChangeSettings }) {
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
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            {ACHIEVEMENTS_LIST.map(lib => {
              const isUnlocked = achievements.includes(lib.id);
              return (
                <div key={lib.id} title={lib.desc} style={{ textAlign: 'center', opacity: isUnlocked ? 1 : 0.2, filter: isUnlocked ? 'none' : 'grayscale(1)', transition: '0.3s' }}>
                  <div style={{ fontSize: '32px' }}>{lib.icon}</div>
                  <div style={{ fontSize: '10px', fontWeight: '900', marginTop: '5px' }}>{lib.title}</div>
                </div>
              );
            })}
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

function TabBar({ activeView, setView }) {
  const tabs = [
    { id: 'dashboard', icon: '🏠' },
    { id: 'chat', icon: '💬' },
    { id: 'quiz', icon: '🎯' },
    { id: 'grammar', icon: '🧩' },
    { id: 'stats', icon: '📊' },
    { id: 'profile', icon: '👤' }
  ];

  return (
    <nav className="tab-bar">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`tab-btn ${activeView === tab.id ? 'active' : ''}`}
          onClick={() => setView(tab.id)}
          style={{ border: 'none', cursor: 'pointer' }}
        >
          {tab.icon}
        </button>
      ))}
    </nav>
  );
}

function App() {
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('users');
    let parsed = saved ? JSON.parse(saved) : [{ id: 1, name: 'Jose Antonio Caparros', avatar: '👤', color: 'linear-gradient(135deg, #00d2ff, #9d50bb)' }];

    // Migración forzosa: si el usuario es Alex Rivers, cambiarlo a Jose Antonio
    parsed = parsed.map(u => (u.name === 'Alex Rivers' || u.name === 'Alex') ? { ...u, name: 'Jose Antonio Caparros' } : u);
    return parsed;
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
    const stableViews = ['user-selector', 'welcome', 'dashboard', 'chat', 'stats', 'profile'];
    return stableViews.includes(saved) ? saved : 'dashboard';
  });
  const [selectedWords, setSelectedWords] = useState(() => {
    const saved = localStorage.getItem(uKey + 'selectedWords');
    return saved ? JSON.parse(saved) : [];
  });
  const [isSuggesting, setIsSuggesting] = useState(false);
  const [achievements, setAchievements] = useState(() => {
    const saved = localStorage.getItem(uKey + 'achievements');
    return saved ? JSON.parse(saved) : [];
  });
  const [notification, setNotification] = useState(null);
  const [missedWords, setMissedWords] = useState(() => {
    const saved = localStorage.getItem(uKey + 'missedWords');
    return saved ? JSON.parse(saved) : [];
  });
  const [customTopics, setCustomTopics] = useState(() => {
    const saved = localStorage.getItem(uKey + 'customTopics');
    return saved ? JSON.parse(saved) : [];
  });
  const [generatingTopicName, setGeneratingTopicName] = useState('');

  // Sincronizar tema de idioma con el body
  useEffect(() => {
    document.body.className = `lang-${language}`;
  }, [language]);

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
    localStorage.setItem(uKey + 'achievements', JSON.stringify(achievements));
    localStorage.setItem(uKey + 'missedWords', JSON.stringify(missedWords));
  }, [users, activeUserId, uKey, customTopics, xp, streak, language, level, view, selectedWords, achievements, missedWords]);

  useEffect(() => {
    window.onMissedWord = (word) => {
      setMissedWords(prev => {
        if (prev.find(w => w.word === word.word)) return prev;
        return [...prev, word];
      });
    };
    return () => delete window.onMissedWord;
  }, []);

  const addXP = (earned) => {
    const newXP = Math.min(xp + earned, 1000000); // XP ya no tiene límite bajo
    setXp(newXP);

    // Verificar logros de XP
    ACHIEVEMENTS_LIST.forEach(lib => {
      if (lib.type === 'xp' && newXP >= lib.goal && !achievements.includes(lib.id)) {
        unlockAchievement(lib);
      }
    });

    const today = new Date().toISOString().slice(0, 10);
    const dailyXPKey = uKey + 'dailyXP';
    const dailyXP = JSON.parse(localStorage.getItem(dailyXPKey) || '{}');
    dailyXP[today] = (dailyXP[today] || 0) + earned;
    localStorage.setItem(dailyXPKey, JSON.stringify(dailyXP));
  };

  const unlockAchievement = (ach) => {
    if (achievements.includes(ach.id)) return;
    setAchievements(prev => [...prev, ach.id]);
    setNotification(ach);
    setTimeout(() => setNotification(null), 5000);
  };

  useEffect(() => {
    // Verificar logros de racha
    ACHIEVEMENTS_LIST.forEach(lib => {
      if (lib.type === 'streak' && streak >= lib.goal && !achievements.includes(lib.id)) {
        unlockAchievement(lib);
      }
    });
  }, [streak, achievements]);

  useEffect(() => {
    if (view === 'chat' && !achievements.includes('chat_addict')) {
      const ach = ACHIEVEMENTS_LIST.find(a => a.id === 'chat_addict');
      if (ach) unlockAchievement(ach);
    }
  }, [view, achievements]);

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
        const fullMsg = errorData.details ? `${errorData.error}: ${errorData.details}` : (errorData.error || 'Error al generar contenido');
        throw new Error(fullMsg);
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
            localStorage.setItem('activeUserId', id);
            localStorage.setItem('view', 'dashboard');
            window.location.reload();
          }}
          onAdd={(u) => {
            const nl = [...users, u];
            setUsers(nl);
            localStorage.setItem('users', JSON.stringify(nl));
            setActiveUserId(u.id);
            localStorage.setItem('activeUserId', u.id);
            setView('welcome');
          }}
        />;
      case 'welcome': return <WelcomeScreen onStart={handleStart} />;
      case 'chat':
        return (
          <div style={{ position: 'relative' }}>
            <AIChat language={language} level={level} onExit={() => setView('dashboard')} />
            <TabBar activeView={view} setView={setView} />
          </div>
        );
      case 'quiz':
        const allWords = [...(defaultContent[language]?.[level]?.topics?.[0]?.words || []), ...customTopics.flatMap(t => t.words)];
        return (
          <div style={{ position: 'relative' }}>
            <Quiz words={allWords} language={language} onComplete={(earned) => { addXP(earned); setView('dashboard'); }} onCancel={() => setView('dashboard')} />
            <TabBar activeView={view} setView={setView} />
          </div>
        );
      case 'repaso':
        return (
          <div style={{ position: 'relative' }}>
            <Flashcards words={missedWords} language={language} onExit={() => {
              // Limpiar palabras repasadas (opcional, o mantener algunas)
              setMissedWords([]);
              setView('dashboard');
            }} />
            <TabBar activeView={view} setView={setView} />
          </div>
        );
      case 'flashcards': return <Flashcards key="flash" words={selectedWords} language={language} onExit={() => setView('dashboard')} />;
      case 'match': return <WordMatchGame words={selectedWords} language={language} onExit={() => setView('dashboard')} onAddXP={addXP} />;
      case 'fillblank': return <FillBlankGame words={selectedWords} language={language} onExit={() => setView('dashboard')} onAddXP={addXP} />;
      case 'stats':
        return (
          <div style={{ position: 'relative' }}>
            <StatsPanel onExit={() => setView('dashboard')} streak={streak} userId={activeUser.id} />
            <TabBar activeView={view} setView={setView} />
          </div>
        );
      case 'grammar':
        return (
          <div style={{ position: 'relative' }}>
            <GrammarGame language={language} level={level} onExit={() => setView('dashboard')} onAddXP={addXP} />
            <TabBar activeView={view} setView={setView} />
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
            <TabBar activeView={view} setView={setView} />
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
            <AnimatePresence>
              {notification && (
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  style={{ position: 'fixed', top: '20px', left: '50%', x: '-50%', zIndex: 20000, pointerEvents: 'none' }}
                >
                  <div className="glass-card" style={{ background: 'rgba(0,0,0,0.8)', border: '2px solid var(--primary)', padding: '15px 30px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
                    <div style={{ fontSize: '40px' }}>{notification.icon}</div>
                    <div>
                      <div style={{ color: 'var(--primary)', fontWeight: '900', fontSize: '12px' }}>NUEVO LOGRO</div>
                      <div style={{ fontWeight: '900', fontSize: '18px' }}>{notification.title}</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="mesh-container"><div className="orb orb-1"></div><div className="orb orb-2"></div><div className="orb orb-3"></div></div>
            <div className="dashboard-container">
              <header className="header">
                <h1 className="user-name">Dashboard</h1>
                <div className="badge-pill" style={{ background: 'var(--primary)', color: '#000' }}>🔥 {streak} DÍAS</div>
              </header>

              {missedWords.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="glass-card"
                  style={{ marginBottom: '25px', padding: '25px', background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,0,0,0.05))', border: '1px solid rgba(255,0,0,0.2)' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ color: '#ff4b4b', fontWeight: '900', fontSize: '11px', letterSpacing: '2px', marginBottom: '5px' }}>REPASO URGENTE</div>
                      <div style={{ fontSize: '20px', fontWeight: '900' }}>Tienes {missedWords.length} palabras falladas</div>
                    </div>
                    <button onClick={() => setView('repaso')} className="premium-btn" style={{ margin: 0, width: 'auto', padding: '10px 20px', background: '#ff4b4b', color: '#fff' }}>ESTUDIAR YA</button>
                  </div>
                </motion.div>
              )}

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
              <TabBar activeView={view} setView={setView} />
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