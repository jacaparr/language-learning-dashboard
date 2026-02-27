import React from 'react';

const languages = [
    { id: 'en', name: 'English', flag: '🇬🇧' },
    { id: 'de', name: 'Deutsch', flag: '🇩🇪' }
];

const levels = ['B1', 'B2', 'C1'];

function LanguageSelector({ currentLang, currentLevel, onSelectLang, onSelectLevel, onStart }) {
    return (
        <div className="dashboard-container settings-view">
            <header className="header" style={{ textAlign: 'center', marginTop: '40px' }}>
                <div className="user-name" style={{ fontSize: '28px' }}>Language & Level</div>
                <div className="welcome">Design your learning path</div>
            </header>

            <section className="glass-card" style={{ marginTop: '30px' }}>
                <h3 className="section-title" style={{ marginTop: 0 }}>Select Language</h3>
                <div className="selection-grid">
                    {languages.map(l => (
                        <div
                            key={l.id}
                            className={`selection-item ${currentLang === l.id ? 'active' : ''}`}
                            onClick={() => onSelectLang(l.id)}
                        >
                            <span style={{ fontSize: '32px' }}>{l.flag}</span>
                            <span style={{ fontWeight: '600' }}>{l.name}</span>
                        </div>
                    ))}
                </div>

                <h3 className="section-title" style={{ marginTop: '40px' }}>Select Your Level</h3>
                <div className="selection-grid levels">
                    {levels.map(lv => (
                        <div
                            key={lv}
                            className={`selection-item ${currentLevel === lv ? 'active' : ''}`}
                            onClick={() => onSelectLevel(lv)}
                        >
                            <span style={{ fontSize: '20px', fontWeight: '700' }}>{lv}</span>
                        </div>
                    ))}
                </div>

                <button
                    className="action-button primary"
                    style={{ marginTop: '50px', boxShadow: '0 10px 20px rgba(39, 154, 231, 0.3)' }}
                    onClick={onStart}
                >
                    Start Learning
                </button>
            </section>

            <p style={{ textAlign: 'center', fontSize: '10px', opacity: 0.4, marginTop: '20px' }}>
                Premium B1-C1 Curriculum • AI Powered
            </p>
        </div>
    );
}

export default LanguageSelector;
