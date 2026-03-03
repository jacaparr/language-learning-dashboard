export const languages = [
    { id: 'en', name: 'English', flag: '🇬🇧' },
    { id: 'de', name: 'Deutsch', flag: '🇩🇪' }
];

export const levels = ['B1', 'B2', 'C1'];

// --- ENGLISH CONTENT ---
const enB1Words = [
    { word: 'Appointment', translation: 'Cita', example: 'I have an appointment at 3 PM.' },
    { word: 'Deadline', translation: 'Fecha límite', example: 'The deadline for the project is tomorrow.' },
    { word: 'Colleague', translation: 'Colega', example: 'My colleague is very helpful.' },
    { word: 'Feedback', translation: 'Comentarios', example: 'I need feedback on my presentation.' },
    { word: 'Schedule', translation: 'Horario', example: 'Let me check my schedule.' },
    { word: 'Promotion', translation: 'Ascenso', example: 'She got a promotion last month.' },
    { word: 'Client', translation: 'Cliente', example: 'The client is coming at noon.' },
    { word: 'Meeting', translation: 'Reunión', example: 'The meeting lasted two hours.' },
    { word: 'Salary', translation: 'Salario', example: 'The salary is paid monthly.' },
    { word: 'Training', translation: 'Entrenamiento', example: 'We have a training session today.' },
    { word: 'Contract', translation: 'Contrato', example: 'Sign the contract here.' },
    { word: 'Department', translation: 'Departamento', example: 'Which department do you work in?' },
    { word: 'Manager', translation: 'Gerente', example: 'Talk to the manager about it.' },
    { word: 'Commute', translation: 'Desplazamiento al trabajo', example: 'My daily commute takes 40 minutes.' },
    { word: 'Reliable', translation: 'Confiable', example: 'She is a very reliable employee.' },
    { word: 'Efficient', translation: 'Eficiente', example: 'We need to find a more efficient way to work.' },
    { word: 'Requirement', translation: 'Requisito', example: 'Fluency in English is a requirement for this job.' },
    { word: 'Vacancy', translation: 'Vacante', example: 'There is a vacancy in the sales department.' },
    { word: 'Knowledge', translation: 'Conocimiento', example: 'He has extensive knowledge of the industry.' },
    { word: 'Agreement', translation: 'Acuerdo', example: 'We finally reached an agreement.' }
];

const enB2Words = [
    { word: 'Sustainability', translation: 'Sostenibilidad', example: 'Focus on environmental sustainability.' },
    { word: 'Pollution', translation: 'Contaminación', example: 'Air pollution is a major problem.' },
    { word: 'Renewable', translation: 'Renovable', example: 'Solar energy is renewable.' },
    { word: 'Biodiversity', translation: 'Biodiversidad', example: 'Protecting biodiversity is crucial.' },
    { word: 'Conservation', translation: 'Conservación', example: 'Wildlife conservation is vital.' },
    { word: 'Climate change', translation: 'Cambio climático', example: 'Climate change affects everyone.' },
    { word: 'Ecosystem', translation: 'Ecosistema', example: 'Don\'t disrupt the ecosystem.' },
    { word: 'Recycling', translation: 'Reciclaje', example: 'Recycling reduces waste.' },
    { word: 'Infrastructure', translation: 'Infraestructura', example: 'The city needs better infrastructure.' },
    { word: 'Regulation', translation: 'Regulación', example: 'New environmental regulations are in place.' },
    { word: 'Impact', translation: 'Impacto', example: 'The impact on the environment is severe.' },
    { word: 'Resource', translation: 'Recurso', example: 'Water is a precious resource.' },
    { word: 'Hazardous', translation: 'Peligroso', example: 'Properly dispose of hazardous waste.' },
    { word: 'Alternative', translation: 'Alternativa', example: 'Wind power is an alternative energy source.' },
    { word: 'Consumption', translation: 'Consumo', example: 'Energy consumption is at its peak.' },
    { word: 'Organic', translation: 'Orgánico', example: 'I prefer buying organic produce.' },
    { word: 'Greenhouse', translation: 'Invernadero', example: 'The greenhouse effect warms the planet.' },
    { word: 'Solar power', translation: 'Energía solar', example: 'Solar power is becoming cheaper.' },
    { word: 'Wildlife', translation: 'Vida silvestre', example: 'The park is home to diverse wildlife.' },
    { word: 'Negotiate', translation: 'Negociar', example: 'We need to negotiate a better deal.' },
    { word: 'Outsource', translation: 'Subcontratar', example: 'Many companies outsource their customer service.' },
    { word: 'Innovation', translation: 'Innovación', example: 'Innovation is the key to success.' },
    { word: 'Productivity', translation: 'Productividad', example: 'We aim to increase productivity by 20%.' },
    { word: 'Implementation', translation: 'Implementación', example: 'The implementation of the new system was smooth.' },
    { word: 'Feasibility', translation: 'Viabilidad', example: 'We are conducting a feasibility study.' }
];

const enC1Words = [
    { word: 'Furthermore', translation: 'Además', example: 'Furthermore, the evidence is clear.' },
    { word: 'Ambiguous', translation: 'Ambiguo', example: 'The results are quite ambiguous.' },
    { word: 'Pragmatic', translation: 'Pragmático', example: 'Take a pragmatic approach to the issue.' },
    { word: 'Hypothesize', translation: 'Hipotetizar', example: 'Researchers hypothesize a link.' },
    { word: 'Synthesize', translation: 'Sintetizar', example: 'Synthesize the findings into a report.' },
    { word: 'Nuance', translation: 'Matiz', example: 'Pay attention to the nuance in his speech.' },
    { word: 'Paradigm', translation: 'Paradigma', example: 'We need a new paradigm for solving this.' },
    { word: 'Altruism', translation: 'Altruismo', example: 'Pure altruism is rare in humans.' },
    { word: 'Epistemology', translation: 'Epistemología', example: 'Epistemology studies the nature of knowledge.' },
    { word: 'Intrinsic', translation: 'Intrínseco', example: 'Kindness has an intrinsic value.' },
    { word: 'Subjective', translation: 'Subjetivo', example: 'Art is purely subjective.' },
    { word: 'Exacerbate', translation: 'Exacerbar', example: 'The new laws might exacerbate the problem.' },
    { word: 'Sustainability', translation: 'Sostenibilidad', example: 'Economic sustainability is a priority.' },
    { word: 'Autonomy', translation: 'Autonomía', example: 'Students need autonomy in their learning.' },
    { word: 'Benevolence', translation: 'Benevolencia', example: 'He was known for his benevolence.' },
    { word: 'Conundrum', translation: 'Dilema', example: 'It is a complex ethical conundrum.' },
    { word: 'Ephemeral', translation: 'Efímero', example: 'Fame is often ephemeral.' },
    { word: 'Meticulous', translation: 'Meticuloso', example: 'She is meticulous about her work.' },
    { word: 'Ubiquitous', translation: 'Ubicuidad', example: 'Smartphones are ubiquitous nowadays.' },
    { word: 'Voracious', translation: 'Voraz', example: 'He is a voracious reader.' },
    { word: 'Zealous', translation: 'Ferviente', example: 'She is a zealous advocate for reform.' },
    { word: 'Belligerent', translation: 'Beligerante', example: 'The country took a belligerent stance.' },
    { word: 'Ineffable', translation: 'Inefable', example: 'The beauty of the sunset was ineffable.' },
    { word: 'Quintessential', translation: 'Quintiesencial', example: 'This is a quintessential example of modern art.' },
    { word: 'Surreptitious', translation: 'Subrepticio', example: 'They had a surreptitious meeting in the park.' }
];

// --- GERMAN CONTENT ---
const deB1Words = [
    { word: 'Termin', translation: 'Cita', example: 'Ich habe einen Termin um 14 Uhr.' },
    { word: 'Kollege', translation: 'Colega', example: 'Mein Kollege ist sehr nett.' },
    { word: 'Besprechung', translation: 'Reunión', example: 'Die Besprechung dauert eine Stunde.' },
    { word: 'Beruf', translation: 'Profesión', example: 'Was ist dein Beruf?' },
    { word: 'Erfahrung', translation: 'Experiencia', example: 'Er hat viel Erfahrung im Job.' },
    { word: 'Gehalt', translation: 'Salario', example: 'Das Gehalt wird pünktlich gezahlt.' },
    { word: 'Vertrag', translation: 'Contrato', example: 'Unterschreiben Sie den Vertrag.' },
    { word: 'Bewerbung', translation: 'Solicitud', example: 'Ich schreibe eine Bewerbung.' },
    { word: 'Abteilung', translation: 'Departamento', example: 'In welcher Abteilung arbeitest du?' },
    { word: 'Überstunden', translation: 'Horas extras', example: 'Ich mache heute Überstunden.' },
    { word: 'Verantwortung', translation: 'Responsabilidad', example: 'Tragen Sie Verantwortung.' },
    { word: 'Zusammenarbeit', translation: 'Colaboración', example: 'Gute Zusammenarbeit ist wichtig.' },
    { word: 'Erfolg', translation: 'Éxito', example: 'Wir wünschen Ihnen viel Erfolg.' },
    { word: 'Unternehmen', translation: 'Empresa', example: 'Das Unternehmen ist sehr modern.' },
    { word: 'Pünktlichkeit', translation: 'Puntualidad', example: 'Pünktlichkeit ist in Deutschland wichtig.' },
    { word: 'Leidenschaft', translation: 'Pasión', example: 'Kochen ist meine Leidenschaft.' },
    { word: 'Möglichkeit', translation: 'Posibilidad', example: 'Es gibt viele Möglichkeiten.' },
    { word: 'Entscheidung', translation: 'Decisión', example: 'Das ist eine schwere Entscheidung.' },
    { word: 'Vorbereitung', translation: 'Preparación', example: 'Die Vorbereitung dauert lange.' },
    { word: 'Unterschied', translation: 'Diferencia', example: 'Es gibt keinen großen Unterschied.' }
];

const deB2Words = [
    { word: 'Nachhaltigkeit', translation: 'Sostenibilidad', example: 'Nachhaltigkeit ist ein wichtiges Thema.' },
    { word: 'Umweltschutz', translation: 'Protecc. ambiental', example: 'Umweltschutz geht uns alle an.' },
    { word: 'Klimawandel', translation: 'Cambio climático', example: 'Der Klimawandel ist sichtbar.' },
    { word: 'Erneuerbar', translation: 'Renovable', example: 'Windkraft ist erneuerbar.' },
    { word: 'Ressourcen', translation: 'Recursos', example: 'Schonen wir unsere Ressourcen.' },
    { word: 'Verschmutzung', translation: 'Contaminación', example: 'Die Meeresverschmutzung nimmt zu.' },
    { word: 'Ökosystem', translation: 'Ecosistema', example: 'Das Ökosystem ist empfindlich.' },
    { word: 'Recycling', translation: 'Reciclaje', example: 'Recycling spart Energie.' },
    { word: 'Biodiversität', translation: 'Biodiversidad', example: 'Vielfalt fördert Biodiversität.' },
    { word: 'Emissionen', translation: 'Emisiones', example: 'Wir müssen Emissionen senken.' },
    { word: 'Effizienz', translation: 'Eficiencia', example: 'Energieeffizienz ist der Schlüssel.' },
    { word: 'Solarenergie', translation: 'Energía solar', example: 'Solarenergie ist sauber.' },
    { word: 'Gleichgewicht', translation: 'Equilibrio', example: 'Das biologische Gleichgewicht.' },
    { word: 'Verhandlungen', translation: 'Negociaciones', example: 'Die Verhandlungen waren schwierig.' },
    { word: 'Marktforschung', translation: 'Investigación de mercado', example: 'Marktforschung ist unerlässlich.' },
    { word: 'Dienstleistung', translation: 'Servicio', example: 'Kundenzufriedenheit ist die beste Dienstleistung.' },
    { word: 'Wettbewerb', translation: 'Competencia', example: 'Der Wettbewerb auf dem Markt ist groß.' },
    { word: 'Fachkraft', translation: 'Especialista', example: 'Wir suchen eine qualifizierte Fachkraft.' },
    { word: 'Herausforderung', translation: 'Desafío', example: 'Wir lieben neue Herausforderungen.' },
    { word: 'Überzeugung', translation: 'Convicción', example: 'Er sprach mit großer Überzeugung.' },
    { word: 'Wachstum', translation: 'Crecimiento', example: 'Das wirtschaftliche Wachstum ist stabil.' },
    { word: 'Voraussetzung', translation: 'Requisito', example: 'Das ist eine notwendige Voraussetzung.' },
    { word: 'Zukunftsperspektive', translation: 'Perspectiva de futuro', example: 'Gute Noten bieten bessere Zukunftsperspektiven.' },
    { word: 'Arbeitsmarkt', translation: 'Mercado laboral', example: 'Der Arbeitsmarkt verändert sich ständig.' },
    { word: 'Zuständigkeit', translation: 'Competencia/Responsabilidad', example: 'Das liegt nicht in meiner Zuständigkeit.' }
];

const deC1Words = [
    { word: 'Erkenntnis', translation: 'Hallazgo/Conocimiento', example: 'Wissenschaftliche Erkenntnisse sind neu.' },
    { word: 'Wahrnehmung', translation: 'Percepción', example: 'Die Wahrnehmung der Welt ist subjektiv.' },
    { word: 'Zusammenhang', translation: 'Relación/Contexto', example: 'Der Zusammenhang ist komplex.' },
    { word: 'Bedeutung', translation: 'Significado', example: 'Was ist die tiefere Bedeutung?' },
    { word: 'Auswirkung', translation: 'Impacto/Efecto', example: 'Die Auswirkungen sind gravierend.' },
    { word: 'Gerechtigkeit', translation: 'Justicia', example: 'Soziale Gerechtigkeit ist ein Ziel.' },
    { word: 'Vielfalt', translation: 'Diversidad', example: 'Kulturelle Vielfalt bereichert uns.' },
    { word: 'Komplexität', translation: 'Complejidad', example: 'Die Komplexität der modernen Welt.' },
    { word: 'Methodik', translation: 'Metodología', example: 'Die wissenschaftliche Methodik ist streng.' },
    { word: 'Hypothese', translation: 'Hipótesis', example: 'Stellen Sie eine fundierte Hypothese auf.' },
    { word: 'Konsens', translation: 'Consenso', example: 'Wir brauchen einen gesellschaftlichen Konsens.' },
    { word: 'Integrität', translation: 'Integridad', example: 'Handeln Sie stets mit Integrität.' },
    { word: 'Authentizität', translation: 'Autenticidad', example: 'Die Authentizität des Zeugen.' },
    { word: 'Souveränität', translation: 'Soberanía', example: 'Er bewahrt seine Souveränität.' },
    { word: 'Transparenz', translation: 'Transparencia', example: 'Sorgen wir für mehr Transparenz.' },
    { word: 'Solidarität', translation: 'Solidaridad', example: 'Zeigen Sie Solidarität mit anderen.' },
    { word: 'Innovation', translation: 'Innovación', example: 'Innovation treibt uns an.' },
    { word: 'Auseinandersetzung', translation: 'Discusión/Conflicto', example: 'Eine ernsthafte Auseinandersetzung mit dem Thema.' },
    { word: 'Beeinträchtigung', translation: 'Deterioro/Afectación', example: 'Eine starke Beeinträchtigung der Lebensqualität.' },
    { word: 'Gewährleistung', translation: 'Garantía', example: 'Die Gewährleistung der Sicherheit ist wichtig.' },
    { word: 'Hintergrund', translation: 'Antecedentes/Trasfondo', example: 'Vor dem Hintergrund der Krise.' },
    { word: 'Massnahme', translation: 'Medida', example: 'Wir müssen sofortige Maßnahmen ergreifen.' },
    { word: 'Nachhaltigkeit', translation: 'Sostenibilidad', example: 'Nachhaltigkeit erfordert Umdenken.' },
    { word: 'Verfälschung', translation: 'Falsificación', example: 'Die Verfälschung der Ergebnisse ist illegal.' },
    { word: 'Widerspruch', translation: 'Contradicción', example: 'Das steht im klaren Widerspruch dazu.' }
];

export const defaultContent = {
    en: {
        B1: { topics: [{ id: 'en-b1-t1', title: 'Life & Work', words: enB1Words }] },
        B2: { topics: [{ id: 'en-b2-t1', title: 'Environment & Tech', words: enB2Words }] },
        C1: { topics: [{ id: 'en-c1-t1', title: 'Ethics & Concepts', words: enC1Words }] }
    },
    de: {
        B1: { topics: [{ id: 'de-b1-t1', title: 'Arbeit & Leben', words: deB1Words }] },
        B2: { topics: [{ id: 'de-b2-t1', title: 'Umwelt & Wirtschaft', words: deB2Words }] },
        C1: { topics: [{ id: 'de-c1-t1', title: 'Philosophie & Gesellschaft', words: deC1Words }] }
    }
};
