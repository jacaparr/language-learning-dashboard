/**
 * Converts any language code variant to a proper BCP-47 locale tag for TTS.
 * Handles: 'en', 'de', 'dt' (old typo), 'en-US', 'de-DE', etc.
 */
export function getLangCode(language) {
    const lang = String(language || 'en').toLowerCase().trim();
    if (lang.startsWith('de') || lang === 'dt') return 'de-DE';
    return 'en-US'; // default to English
}

/**
 * Speaks the given text using the browser's SpeechSynthesis API.
 * @param {string} text - The text to speak.
 * @param {string} language - The language code ('en', 'de', 'dt', etc.)
 * @param {number} rate - Speech rate (default 0.85)
 */
export function speak(text, language, rate = 0.85) {
    if (!text || !window.speechSynthesis) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = getLangCode(language);
    utterance.rate = rate;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
}
