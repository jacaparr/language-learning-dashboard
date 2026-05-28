// Predefined high-quality vocabulary catalogs for English and German.
// Used when Gemini API is rate-limited, key is leaked/blocked, or offline.

const CATALOG = {
  en: {
    sports: [
      { word: "Championship", translation: "Campeonato", example: "They won the national championship." },
      { word: "Athlete", translation: "Atleta", example: "She is a professional track and field athlete." },
      { word: "Tournament", translation: "Torneo", example: "Our team was invited to the summer tournament." },
      { word: "Endurance", translation: "Resistencia", example: "Long-distance runners need incredible endurance." },
      { word: "Coach", translation: "Entrenador", example: "The coach explained the strategy on the board." },
      { word: "Referee", translation: "Árbitro", example: "The referee blew the whistle to stop the play." },
      { word: "Spectator", translation: "Espectador", example: "Thousands of spectators filled the stadium." },
      { word: "Victory", translation: "Victoria", example: "The team celebrated their hard-earned victory." },
      { word: "Opponent", translation: "Oponente", example: "He shook hands with his opponent after the match." },
      { word: "Teammate", translation: "Compañero de equipo", example: "Support your teammates during the game." },
      { word: "Trophy", translation: "Trofeo", example: "The captain lifted the gold trophy." },
      { word: "Warm-up", translation: "Calentamiento", example: "A proper warm-up prevents muscle injuries." },
      { word: "Training session", translation: "Sesión de entrenamiento", example: "We have a strict training session every morning." },
      { word: "Record-breaking", translation: "Récord histórico", example: "He set a record-breaking time in the race." },
      { word: "Performance", translation: "Rendimiento", example: "The athlete's performance was outstanding." },
      { word: "Stretching", translation: "Estiramiento", example: "Stretching after workouts improves flexibility." },
      { word: "Scoreboard", translation: "Marcador", example: "Look at the scoreboard to see the remaining time." },
      { word: "Playoff", translation: "Eliminatoria", example: "The playoffs start next week." },
      { word: "Dedication", translation: "Dedicación", example: "Success in sports requires absolute dedication." },
      { word: "Defense", translation: "Defensa", example: "Their defense was solid during the entire match." },
      { word: "Motivation", translation: "Motivación", example: "High motivation is key to winning." },
      { word: "Tactics", translation: "Tácticas", example: "The manager changed the tactics in the second half." },
      { word: "League", translation: "Liga", example: "They are currently top of the premier league." },
      { word: "Gymnasium", translation: "Gimnasio", example: "The school gymnasium is fully equipped." },
      { word: "Medal", translation: "Medalla", example: "She won a gold medal at the Olympic games." }
    ],
    space: [
      { word: "Astronaut", translation: "Astronauta", example: "The astronaut floated outside the space station." },
      { word: "Galaxy", translation: "Galaxia", example: "The Milky Way is our home galaxy." },
      { word: "Orbit", translation: "Órbita", example: "The satellite is in orbit around the Earth." },
      { word: "Telescope", translation: "Telescopio", example: "We observed distant stars through a telescope." },
      { word: "Gravity", translation: "Gravedad", example: "Gravity keeps the planets orbiting the Sun." },
      { word: "Cosmos", translation: "Cosmos", example: "The cosmos contains billions of stars." },
      { word: "Spacecraft", translation: "Nave espacial", example: "The spacecraft landed safely on the planet." },
      { word: "Eclipse", translation: "Eclipse", example: "We watched a total solar eclipse yesterday." },
      { word: "Meteorite", translation: "Meteorito", example: "A meteorite crashed in the desert." },
      { word: "Constellation", translation: "Constelación", example: "Orion is a famous winter constellation." },
      { word: "Black hole", translation: "Agujero negro", example: "Nothing, not even light, can escape a black hole." },
      { word: "Atmosphere", translation: "Atmósfera", example: "Mars has a very thin atmosphere." },
      { word: "Nebula", translation: "Nebulosa", example: "A nebula is a giant cloud of dust and gas in space." },
      { word: "Universe", translation: "Universo", example: "The universe is constantly expanding." },
      { word: "Spacesuit", translation: "Traje espacial", example: "A spacesuit protects astronauts from extreme cold." },
      { word: "Launchpad", translation: "Plataforma de lanzamiento", example: "The rocket is standing on the launchpad." },
      { word: "Asteroid", translation: "Asteroide", example: "Scientists track asteroids close to Earth." },
      { word: "Exoplanet", translation: "Exoplaneta", example: "They discovered a new habitability-zone exoplanet." },
      { word: "Mission control", translation: "Centro de control", example: "Mission control monitored the landing coordinates." },
      { word: "Solar system", translation: "Sistema solar", example: "There are eight planets in our solar system." },
      { word: "Light-year", translation: "Año luz", example: "The nearest star is four light-years away." },
      { word: "Stargazing", translation: "Observación de estrellas", example: "Summer nights are perfect for stargazing." },
      { word: "Supernova", translation: "Supernova", example: "A supernova is the explosion of a dying star." },
      { word: "Rover", translation: "Vehículo explorador", example: "The Mars rover sent back high-resolution photos." },
      { word: "Alien", translation: "Extraterrestre", example: "Astrobiologists search for signs of alien life." }
    ],
    tech: [
      { word: "Algorithm", translation: "Algoritmo", example: "The algorithm suggests videos based on your history." },
      { word: "Software development", translation: "Desarrollo de software", example: "He works in professional software development." },
      { word: "Database", translation: "Base de datos", example: "The database stores all user account details." },
      { word: "Cybersecurity", translation: "Ciberseguridad", example: "Cybersecurity is essential for modern businesses." },
      { word: "Cloud computing", translation: "Informática en la nube", example: "Cloud computing allows remote data access." },
      { word: "Hardware", translation: "Hardware", example: "The computer hardware needs an urgent upgrade." },
      { word: "Artificial Intelligence", translation: "Inteligencia Artificial", example: "Artificial Intelligence is transforming industries." },
      { word: "Programming language", translation: "Lenguaje de programación", example: "Python is a popular programming language." },
      { word: "Encryption", translation: "Cifrado", example: "End-to-end encryption keeps messages private." },
      { word: "Interface", translation: "Interfaz", example: "The user interface is clean and modern." },
      { word: "Server", translation: "Servidor", example: "The local web server is currently offline." },
      { word: "Network", translation: "Red", example: "We connected our computers to the secure office network." },
      { word: "Framework", translation: "Entorno de trabajo / Framework", example: "React is a powerful frontend framework." },
      { word: "Application", translation: "Aplicación", example: "Download our official application from the store." },
      { word: "Bug", translation: "Error de software / Bug", example: "The developer fixed the bug in the code." },
      { word: "Deployment", translation: "Despliegue", example: "The continuous deployment process was automated." },
      { word: "Browser", translation: "Navegador", example: "Open the web page in your preferred browser." },
      { word: "Processor", translation: "Procesador", example: "This laptop has a high-speed multi-core processor." },
      { word: "Storage", translation: "Almacenamiento", example: "I need more storage space on my hard drive." },
      { word: "Virtual Reality", translation: "Realidad Virtual", example: "They created a virtual reality training simulation." },
      { word: "Repository", translation: "Repositorio", example: "Push the latest code changes to the remote repository." },
      { word: "Device", translation: "Dispositivo", example: "Smart home devices are connected to the Wi-Fi." },
      { word: "Update", translation: "Actualización", example: "Install the latest security update immediately." },
      { word: "Bandwidth", translation: "Ancho de banda", example: "Streaming video requires high network bandwidth." },
      { word: "Backup", translation: "Copia de seguridad", example: "Always make a backup of your important files." }
    ],
    history: [
      { word: "Archaeology", translation: "Arqueología", example: "Archaeology helps us understand ancient societies." },
      { word: "Empire", translation: "Imperio", example: "The Roman Empire stretched across Europe." },
      { word: "Revolution", translation: "Revolución", example: "The industrial revolution changed the economy." },
      { word: "Century", translation: "Siglo", example: "This historic castle was built in the 12th century." },
      { word: "Civilization", translation: "Civilización", example: "The Maya civilization had advanced calendar systems." },
      { word: "Heritage", translation: "Patrimonio", example: "We must preserve our national cultural heritage." },
      { word: "Monarchy", translation: "Monarquía", example: "The country transition from a monarchy to democracy." },
      { word: "Artifact", translation: "Artefacto", example: "Ancient artifacts are exhibited in the museum." },
      { word: "Treaty", translation: "Tratado", example: "The peace treaty was signed by both nations." },
      { word: "Chronology", translation: "Cronología", example: "He studied the precise chronology of the event." },
      { word: "Dynasty", translation: "Dinastía", example: "The Ming dynasty ruled China for centuries." },
      { word: "Settlement", translation: "Asentamiento", example: "Archaeologists discovered an early Viking settlement." },
      { word: "Ancestor", translation: "Ancestro", example: "Our ancestors lived a very different lifestyle." },
      { word: "Manuscript", translation: "Manuscrito", example: "The library preserves rare medieval manuscripts." },
      { word: "Colony", translation: "Colonia", example: "The island became a British colony in 1800." },
      { word: "Historian", translation: "Historiador", example: "The historian wrote a biography of the emperor." },
      { word: "Feudalism", translation: "Feudalismo", example: "Feudalism was the dominant system in medieval Europe." },
      { word: "Conquest", translation: "Conquista", example: "The Spanish conquest altered American history." },
      { word: "Independence", translation: "Independencia", example: "They celebrated their day of national independence." },
      { word: "Prehistoric", translation: "Prehistórico", example: "Prehistoric cave paintings were found in France." },
      { word: "Declaration", translation: "Declaración", example: "The historic declaration was read aloud in public." },
      { word: "Reign", translation: "Reinado", example: "Her long reign was marked by peace and stability." },
      { word: "Legacy", translation: "Legado", example: "Ancient Greece left a rich philosophical legacy." },
      { word: "Alliance", translation: "Alianza", example: "A military alliance was formed between the empires." },
      { word: "Slavery", translation: "Esclavitud", example: "Slavery was officially abolished in the 19th century." }
    ],
    travel: [
      { word: "Luggage", translation: "Equipaje", example: "Keep your luggage with you at all times." },
      { word: "Itinerary", translation: "Itinerario", example: "Our travel itinerary includes four major cities." },
      { word: "Destination", translation: "Destino", example: "Paris is a very popular tourist destination." },
      { word: "Accommodation", translation: "Alojamiento", example: "Book your accommodation well in advance." },
      { word: "Passenger", translation: "Pasajero", example: "All passengers must fasten their seat belts." },
      { word: "Sightseeing", translation: "Turismo / Visita turística", example: "We spent the whole day sightseeing in Rome." },
      { word: "Souvenir", translation: "Recuerdo / Souvenir", example: "She bought a handmade souvenir from the market." },
      { word: "Reservation", translation: "Reserva", example: "I have a reservation under the name Lopez." },
      { word: "Departure", translation: "Salida", example: "Please check the departure board for your gate." },
      { word: "Arrival", translation: "Llegada", example: "The flight arrival was delayed by rain." },
      { word: "Foreigner", translation: "Extranjero", example: "As a foreigner, you might need a travel visa." },
      { word: "Excursion", translation: "Excursión", example: "We took a guided excursion to the ancient ruins." },
      { word: "Passport", translation: "Pasaporte", example: "Make sure your passport is valid before traveling." },
      { word: "Adventure", translation: "Aventura", example: "Backpacking through Asia was a great adventure." },
      { word: "Border", translation: "Frontera", example: "They crossed the national border by train." },
      { word: "Landscape", translation: "Paisaje", example: "The mountain landscape was absolutely breathtaking." },
      { word: "Backpack", translation: "Mochila", example: "He packed his backpack with essential gear." },
      { word: "Check-in", translation: "Registro", example: "The hotel check-in starts at 2 PM." },
      { word: "Guidebook", translation: "Guía de viaje", example: "The guidebook lists the best local restaurants." },
      { word: "Delayed", translation: "Retrasado", example: "Our train was delayed by over an hour." }
    ],
    food: [
      { word: "Ingredient", translation: "Ingrediente", example: "Fresh herbs are a key ingredient in this dish." },
      { word: "Recipe", translation: "Receta", example: "Follow the recipe step-by-step for best results." },
      { word: "Delicious", translation: "Delicioso", example: "The chocolate dessert was absolutely delicious." },
      { word: "Restaurant", translation: "Restaurante", example: "We had dinner at a traditional Italian restaurant." },
      { word: "Chef", translation: "Chef / Cocinero", example: "The chef prepared a special menu for the guests." },
      { word: "Flavor", translation: "Sabor", example: "Spices add rich flavor to the soup." },
      { word: "Nutrition", translation: "Nutrición", example: "A balanced diet provides essential nutrition." },
      { word: "Appetizer", translation: "Aperitivo / Entrada", example: "We ordered garlic bread as an appetizer." },
      { word: "Beverage", translation: "Bebida", example: "Coffee is a popular breakfast beverage." },
      { word: "Cuisine", translation: "Cocina / Estilo culinario", example: "I love exploring Asian cuisine." },
      { word: "Bake", translation: "Hornear", example: "She loves to bake fresh bread on Sundays." },
      { word: "Spicy", translation: "Picante", example: "This curry is very hot and spicy." },
      { word: "Vegetarian", translation: "Vegetariano", example: "They offer many vegetarian options on the menu." },
      { word: "Gourmet", translation: "Gourmet", example: "They opened a gourmet cheese shop downtown." },
      { word: "Dessert", translation: "Postre", example: "Would you like some ice cream for dessert?" }
    ]
  },
  de: {
    sports: [
      { word: "Meisterschaft", translation: "Campeonato", example: "Sie haben die nationale Meisterschaft gewonnen." },
      { word: "Sportler", translation: "Deportista", example: "Sie ist eine professionelle Leichtathletin." },
      { word: "Turnier", translation: "Torneo", example: "Unser Team wurde zum Sommerturnier eingeladen." },
      { word: "Ausdauer", translation: "Resistencia", example: "Langstreckenläufer brauchen eine unglaubliche Ausdauer." },
      { word: "Trainer", translation: "Entrenador", example: "Der Trainer erklärte die Strategie an der Tafel." },
      { word: "Schiedsrichter", translation: "Árbitro", example: "Der Schiedsrichter pfiff das Spiel ab." },
      { word: "Zuschauer", translation: "Espectador", example: "Tausende Zuschauer füllten das Stadion." },
      { word: "Sieg", translation: "Victoria", example: "Die Mannschaft feierte ihren verdienten Sieg." },
      { word: "Gegner", translation: "Oponente", example: "Er gab seinem Gegner nach dem Spiel die Hand." },
      { word: "Mitspieler", translation: "Compañero de equipo", example: "Unterstütze deine Mitspieler während des Spiels." },
      { word: "Pokal", translation: "Trofeo / Copa", example: "Der Kapitän hob den goldenen Pokal hoch." },
      { word: "Aufwärmen", translation: "Calentamiento", example: "Ein gutes Aufwärmen verhindert Muskelverletzungen." },
      { word: "Training", translation: "Entrenamiento", example: "Wir haben jeden Morgen ein hartes Training." },
      { word: "Rekord", translation: "Récord", example: "Er hat einen neuen Weltrekord aufgestellt." },
      { word: "Leistung", translation: "Rendimiento", example: "Die Leistung des Athleten war hervorragend." },
      { word: "Dehnen", translation: "Estiramiento", example: "Dehnen nach dem Sport verbessert die Flexibilität." },
      { word: "Anzeigetafel", translation: "Marcador", example: "Schau auf die Anzeigetafel für die verbleibende Zeit." },
      { word: "Entscheidungsspiel", translation: "Eliminatoria", example: "Die Entscheidungsspiele beginnen nächste Woche." },
      { word: "Hingabe", translation: "Dedicación", example: "Erfolg im Sport erfordert absolute Hingabe." },
      { word: "Verteidigung", translation: "Defensa", example: "Ihre Verteidigung stand das ganze Spiel über stabil." },
      { word: "Motivation", translation: "Motivación", example: "Hohe Motivation ist der Schlüssel zum Erfolg." },
      { word: "Taktik", translation: "Táctica", example: "Der Trainer änderte die Taktik in der zweiten Hälfte." },
      { word: "Liga", translation: "Liga", example: "Sie stehen derzeit an der Spitze der Bundesliga." },
      { word: "Turnhalle", translation: "Gimnasio", example: "Die Turnhalle der Schule ist komplett ausgestattet." },
      { word: "Medaille", translation: "Medalla", example: "Sie hat eine Goldmedaille bei den Olympischen Spielen gewonnen." }
    ],
    space: [
      { word: "Astronaut", translation: "Astronauta", example: "Der Astronaut schwebte außerhalb der Raumstation." },
      { word: "Galaxie", translation: "Galaxia", example: "Die Milchstraße ist unsere Heimatgalaxie." },
      { word: "Umlaufbahn", translation: "Órbita", example: "Der Satellit befindet sich in einer Umlaufbahn um die Erde." },
      { word: "Teleskop", translation: "Telescopio", example: "Wir haben ferne Sterne durch ein Teleskop beobachtet." },
      { word: "Schwerkraft", translation: "Gravedad", example: "Die Schwerkraft hält die Planeten auf ihrer Bahn um die Sonne." },
      { word: "Kosmos", translation: "Cosmos", example: "Der Kosmos enthält Milliarden von Sternen." },
      { word: "Raumschiff", translation: "Nave espacial", example: "Das Raumschiff landete sicher auf dem Planeten." },
      { word: "Finsternis", translation: "Eclipse", example: "Wir haben gestern eine totale Sonnenfinsternis beobachtet." },
      { word: "Meteorit", translation: "Meteorito", example: "Ein Meteorit schlug in der Wüste ein." },
      { word: "Sternbild", translation: "Constelación", example: "Orion ist ein bekanntes winterliches Sternbild." },
      { word: "Schwarzes Loch", translation: "Agujero negro", example: "Nichts, nicht einmal Licht, kann einem Schwarzen Loch entkommen." },
      { word: "Atmosphäre", translation: "Atmósfera", example: "Der Mars hat eine sehr dünne Atmosphäre." },
      { word: "Nebel", translation: "Nebulosa", example: "Ein Nebel ist eine riesige Wolke aus Staub und Gas im All." },
      { word: "Universum", translation: "Universo", example: "Das Universum dehnt sich ständig aus." },
      { word: "Raumanzug", translation: "Traje espacial", example: "Ein Raumanzug schützt Astronauten vor extremer Kälte." },
      { word: "Startrampe", translation: "Plataforma de lanzamiento", example: "Die Rakete steht auf der Startrampe bereit." },
      { word: "Asteroid", translation: "Asteroide", example: "Wissenschaftler verfolgen Asteroiden in der Nähe der Erde." },
      { word: "Exoplanet", translation: "Exoplaneta", example: "Sie haben einen neuen bewohnbaren Exoplaneten entdeckt." },
      { word: "Kontrollzentrum", translation: "Centro de control", example: "Das Kontrollzentrum überwachte die Landung." },
      { word: "Sonnensystem", translation: "Sistema solar", example: "Es gibt acht Planeten in unserem Sonnensystem." },
      { word: "Lichtjahr", translation: "Año luz", example: "Der nächste Stern ist vier Lichtjahre entfernt." },
      { word: "Sterne beobachten", translation: "Observación de estrellas", example: "Sommernächte sind ideal, um Sterne zu beobachten." },
      { word: "Supernova", translation: "Supernova", example: "Eine Supernova ist die Explosion eines sterbenden Sterns." },
      { word: "Rover", translation: "Vehículo explorador", example: "Der Mars-Rover sendete hochauflösende Fotos zurück." },
      { word: "Außerirdischer", translation: "Extraterrestre", example: "Astrobiologen suchen nach außerirdischem Leben." }
    ],
    tech: [
      { word: "Algorithmus", translation: "Algoritmo", example: "Der Algorithmus empfiehlt Videos basierend auf dem Verlauf." },
      { word: "Softwareentwicklung", translation: "Desarrollo de software", example: "Er arbeitet in der professionellen Softwareentwicklung." },
      { word: "Datenbank", translation: "Base de datos", example: "Die Datenbank speichert alle Benutzerdaten." },
      { word: "Cybersicherheit", translation: "Ciberseguridad", example: "Cybersicherheit ist essenziell für moderne Unternehmen." },
      { word: "Cloud-Computing", translation: "Informática en la nube", example: "Cloud-Computing ermöglicht den Fernzugriff auf Daten." },
      { word: "Hardware", translation: "Hardware", example: "Die Computer-Hardware benötigt ein dringendes Upgrade." },
      { word: "Künstliche Intelligenz", translation: "Inteligencia Artificial", example: "Künstliche Intelligenz verändert ganze Branchen." },
      { word: "Programmiersprache", translation: "Lenguaje de programación", example: "Python ist eine beliebte Programmiersprache." },
      { word: "Verschlüsselung", translation: "Cifrado", example: "Ende-zu-Ende-Verschlüsselung hält Nachrichten privat." },
      { word: "Benutzeroberfläche", translation: "Interfaz", example: "Die Benutzeroberfläche ist sauber und modern." },
      { word: "Server", translation: "Servidor", example: "Der lokale Webserver ist derzeit offline." },
      { word: "Netzwerk", translation: "Red", example: "Wir haben unsere Computer mit dem Büronetzwerk verbunden." },
      { word: "Framework", translation: "Entorno de trabajo / Framework", example: "React ist ein mächtiges Frontend-Framework." },
      { word: "Anwendung", translation: "Aplicación", example: "Laden Sie unsere offizielle Anwendung im Store herunter." },
      { word: "Fehler / Bug", translation: "Error de software / Bug", example: "Der Entwickler hat den Fehler im Code behoben." },
      { word: "Deployment", translation: "Despliegue", example: "Der kontinuierliche Deployment-Prozess wurde automatisiert." },
      { word: "Browser", translation: "Navegador", example: "Öffnen Sie die Webseite in Ihrem bevorzugten Browser." },
      { word: "Prozessor", translation: "Procesador", example: "Dieser Laptop hat einen schnellen Mehrkernprozessor." },
      { word: "Speicherplatz", translation: "Almacenamiento", example: "Ich brauche mehr Speicherplatz auf meiner Festplatte." },
      { word: "Virtuelle Realität", translation: "Realidad Virtual", example: "Sie haben eine virtuelle Trainingssimulation erstellt." },
      { word: "Repository", translation: "Repositorio", example: "Pushen Sie die Codeänderungen in das Remote-Repository." },
      { word: "Gerät", translation: "Dispositivo", example: "Smart-Home-Geräte sind mit dem WLAN verbunden." },
      { word: "Update", translation: "Actualización", example: "Installieren Sie das neueste Sicherheits-Update sofort." },
      { word: "Bandbreite", translation: "Ancho de banda", example: "Video-Streaming erfordert eine hohe Bandbreite." },
      { word: "Datensicherung", translation: "Copia de seguridad", example: "Machen Sie immer eine Datensicherung Ihrer Dateien." }
    ],
    history: [
      { word: "Archäologie", translation: "Arqueología", example: "Archäologie hilft uns, alte Kulturen zu verstehen." },
      { word: "Kaiserreich", translation: "Imperio", example: "Das Römische Kaiserreich erstreckte sich über Europa." },
      { word: "Revolution", translation: "Revolución", example: "Die industrielle Revolution veränderte die Wirtschaft." },
      { word: "Jahrhundert", translation: "Siglo", example: "Dieses historische Schloss wurde im 12. Jahrhundert gebaut." },
      { word: "Zivilisation", translation: "Civilización", example: "Die Maya-Zivilisation hatte fortgeschrittene Kalender." },
      { word: "Kulturerbe", translation: "Patrimonio", example: "Wir müssen unser nationales Kulturerbe schützen." },
      { word: "Monarchie", translation: "Monarquía", example: "Das Land entwickelte sich von einer Monarchie zur Demokratie." },
      { word: "Artefakt", translation: "Artefacto", example: "Alte Artefakte werden im Museum ausgestellt." },
      { word: "Friedensvertrag", translation: "Tratado de paz", example: "Der Friedensvertrag wurde von beiden Ländern unterzeichnet." },
      { word: "Chronologie", translation: "Cronología", example: "Er untersuchte die genaue Chronologie der Ereignisse." },
      { word: "Dynastie", translation: "Dinastía", example: "Die Ming-Dynastie regierte China für Jahrhunderte." },
      { word: "Siedlung", translation: "Asentamiento", example: "Archäologen entdeckten eine frühe Wikinger-Siedlung." },
      { word: "Vorfahren", translation: "Ancestros", example: "Unsere Vorfahren lebten ein völlig anderes Leben." },
      { word: "Manuskript", translation: "Manuscrito", example: "Die Bibliothek bewahrt seltene mittelalterliche Manuskripte." },
      { word: "Kolonie", translation: "Colonia", example: "Die Insel wurde im Jahr 1800 zu einer britischen Kolonie." },
      { word: "Historiker", translation: "Historiador", example: "Der Historiker schrieb eine Biografie des Kaisers." },
      { word: "Feudalismus", translation: "Feudalismo", example: "Feudalismus war das dominierende System im Mittelalter." },
      { word: "Eroberung", translation: "Conquista", example: "Die spanische Eroberung veränderte die amerikanische Geschichte." },
      { word: "Unabhängigkeit", translation: "Independencia", example: "Sie feierten den Tag ihrer nationalen Unabhängigkeit." },
      { word: "Prähistorisch", translation: "Prehistórico", example: "Prähistorische Höhlenmalereien wurden in Frankreich gefunden." },
      { word: "Erklärung", translation: "Declaración", example: "Die historische Erklärung wurde öffentlich verlesen." },
      { word: "Regierungszeit", translation: "Reinado", example: "Ihre lange Regierungszeit war geprägt von Frieden." },
      { word: "Vermächtnis", translation: "Legado", example: "Das antike Griechenland hinterließ ein reiches Vermächtnis." },
      { word: "Bündnis", translation: "Alianza", example: "Ein Militärbündnis wurde zwischen den Reichen geschlossen." },
      { word: "Sklaverei", translation: "Esclavitud", example: "Die Sklaverei wurde offiziell im 19. Jahrhundert abgeschafft." }
    ],
    travel: [
      { word: "Gepäck", translation: "Equipaje", example: "Behalten Sie Ihr Gepäck immer im Auge." },
      { word: "Reiseplan", translation: "Itinerario", example: "Unser Reiseplan umfasst vier große Städte." },
      { word: "Reiseziel", translation: "Destino", example: "Paris ist ein sehr beliebtes Reiseziel." },
      { word: "Unterkunft", translation: "Alojamiento", example: "Buchen Sie Ihre Unterkunft rechtzeitig im Voraus." },
      { word: "Fahrgast", translation: "Pasajero", example: "Alle Fahrgäste müssen ihre Sicherheitsgurte anlegen." },
      { word: "Sehenswürdigkeiten", translation: "Atracciones turísticas", example: "Wir haben Sehenswürdigkeiten in Rom besichtigt." },
      { word: "Mitbringsel / Souvenir", translation: "Recuerdo", example: "Sie kaufte ein handgemachtes Souvenir auf dem Markt." },
      { word: "Reservierung", translation: "Reserva", example: "Ich habe eine Reservierung auf den Namen Lopez." },
      { word: "Abflug / Abreise", translation: "Salida", example: "Bitte prüfen Sie die Anzeigetafel für Ihren Flug." },
      { word: "Ankunft", translation: "Llegada", example: "Die Ankunft des Fluges war durch Regen verspätet." },
      { word: "Ausländer", translation: "Extranjero", example: "Als Ausländer benötigen Sie möglicherweise ein Visum." },
      { word: "Ausflug", translation: "Excursión", example: "Wir machten einen geführten Ausflug zu den Ruinen." },
      { word: "Reisepass", translation: "Pasaporte", example: "Prüfen Sie vor der Reise die Gültigkeit Ihres Passes." },
      { word: "Abenteuer", translation: "Aventura", example: "Das Backpacking in Asien war ein großes Abenteuer." },
      { word: "Grenze", translation: "Frontera", example: "Sie überquerten die Grenze mit dem Zug." },
      { word: "Landschaft", translation: "Paisaje", example: "Die Berglandschaft war absolut atemberaubend." },
      { word: "Rucksack", translation: "Mochila", example: "Er packte seinen Rucksack mit nützlichen Dingen." },
      { word: "Check-in", translation: "Registro", example: "Der Check-in im Hotel beginnt um 14 Uhr." },
      { word: "Reiseführer", translation: "Guía de viaje", example: "Der Reiseführer nennt die besten Restaurants." },
      { word: "Verspätet", translation: "Retrasado", example: "Unser Zug war um über eine Stunde verspätet." }
    ],
    food: [
      { word: "Zutat", translation: "Ingrediente", example: "Frische Kräuter sind eine wichtige Zutat für dieses Gericht." },
      { word: "Rezept", translation: "Receta", example: "Folgen Sie dem Rezept Schritt für Schritt." },
      { word: "Köstlich", translation: "Delicioso", example: "Das Schokoladendessert war absolut köstlich." },
      { word: "Restaurant", translation: "Restaurante", example: "Wir aßen in einem italienischen Restaurant." },
      { word: "Küchenchef", translation: "Chef / Cocinero", example: "Der Küchenchef kreierte ein spezielles Menü." },
      { word: "Geschmack", translation: "Sabor", example: "Gewürze verleihen der Suppe einen reichen Geschmack." },
      { word: "Ernährung", translation: "Nutrición", example: "Eine ausgewogene Ernährung ist extrem wichtig." },
      { word: "Vorspeise", translation: "Aperitivo / Entrada", example: "Wir bestellten Knoblauchbrot als Vorspeise." },
      { word: "Getränk", translation: "Bebida", example: "Kaffee ist ein beliebtes Frühstücksgetränk." },
      { word: "Küche", translation: "Cocina / Estilo culinario", example: "Ich liebe die asiatische Küche." },
      { word: "Backen", translation: "Hornear", example: "Sie backt sonntags gerne frisches Brot." },
      { word: "Scharf / Würzig", translation: "Picante", example: "Dieses Currygericht ist sehr scharf." },
      { word: "Vegetarisch", translation: "Vegetariano", example: "Sie bieten viele vegetarische Gerichte an." },
      { word: "Feinschmecker / Gourmet", translation: "Gourmet", example: "Sie haben einen Laden für Feinschmecker eröffnet." },
      { word: "Nachtisch / Dessert", translation: "Postre", example: "Möchten Sie ein Eis als Nachtisch?" }
    ]
  }
};

export function getFallbackVocabulary(topic, language, level) {
  const cleanTopic = String(topic || '').toLowerCase().trim();
  const lang = String(language || 'en').toLowerCase().trim();
  
  let key = 'sports'; // default
  
  if (cleanTopic.includes('deport') || cleanTopic.includes('sport') || cleanTopic.includes('fútbol') || cleanTopic.includes('tenis') || cleanTopic.includes('carrera') || cleanTopic.includes('baloncesto') || cleanTopic.includes('ejercic')) {
    key = 'sports';
  } else if (cleanTopic.includes('espac') || cleanTopic.includes('space') || cleanTopic.includes('astron') || cleanTopic.includes('planet') || cleanTopic.includes('estre') || cleanTopic.includes('univ') || cleanTopic.includes('nasa')) {
    key = 'space';
  } else if (cleanTopic.includes('tecn') || cleanTopic.includes('tech') || cleanTopic.includes('comput') || cleanTopic.includes('program') || cleanTopic.includes('soft') || cleanTopic.includes('hard') || cleanTopic.includes('web') || cleanTopic.includes('code') || cleanTopic.includes('codig')) {
    key = 'tech';
  } else if (cleanTopic.includes('hist') || cleanTopic.includes('pasad') || cleanTopic.includes('arqu') || cleanTopic.includes('imper') || cleanTopic.includes('guerr') || cleanTopic.includes('revol')) {
    key = 'history';
  } else if (cleanTopic.includes('viaj') || cleanTopic.includes('travel') || cleanTopic.includes('turis') || cleanTopic.includes('vacac') || cleanTopic.includes('hotel') || cleanTopic.includes('vuel') || cleanTopic.includes('avió')) {
    key = 'travel';
  } else if (cleanTopic.includes('comi') || cleanTopic.includes('aliment') || cleanTopic.includes('food') || cleanTopic.includes('cocin') || cleanTopic.includes('restaur') || cleanTopic.includes('chef') || cleanTopic.includes('recet')) {
    key = 'food';
  } else {
    // If not found in catalog, dynamically generate generic beautiful items matching the keyword!
    return generateProceduralVocabulary(topic, lang, level);
  }

  const catalogLang = CATALOG[lang] || CATALOG['en'];
  const words = catalogLang[key] || catalogLang['sports'];
  
  // Return tailored slice according to level CEFR requirements
  const count = level === 'B1' ? 15 : level === 'B2' ? 20 : 25;
  return words.slice(0, count);
}

function generateProceduralVocabulary(topic, language, level) {
  const cleanTopic = String(topic || '').trim();
  const count = level === 'B1' ? 15 : level === 'B2' ? 20 : 25;
  
  const result = [];
  
  if (language === 'de') {
    const templates = [
      { word: `Forschung über ${cleanTopic}`, translation: `Investigación sobre ${cleanTopic}`, example: `Die Forschung über ${cleanTopic} macht heute schnelle Fortschritte.` },
      { word: `Experte für ${cleanTopic}`, translation: `Experto en ${cleanTopic}`, example: `Er ist ein anerkannter Experte für ${cleanTopic}.` },
      { word: `Fortgeschrittenes ${cleanTopic}`, translation: `${cleanTopic} avanzado`, example: `Wir besuchen morgen ein Seminar für fortgeschrittenes ${cleanTopic}.` },
      { word: `Einführung in ${cleanTopic}`, translation: `Introducción a ${cleanTopic}`, example: `Das Buch bietet eine klare Einführung in ${cleanTopic}.` },
      { word: `${cleanTopic} praktizieren`, translation: `Practicar ${cleanTopic}`, example: `Es ist ratsam, ${cleanTopic} täglich zu praktizieren.` },
      { word: `Leidenschaft für ${cleanTopic}`, translation: `Pasión por ${cleanTopic}`, example: `Ihre Leidenschaft für ${cleanTopic} ist wirklich inspirierend.` },
      { word: `Grundlage von ${cleanTopic}`, translation: `Base / Fundamento de ${cleanTopic}`, example: `Das ist die theoretische Grundlage von ${cleanTopic}.` },
      { word: `Wichtigkeit von ${cleanTopic}`, translation: `Importancia de ${cleanTopic}`, example: `Die Wichtigkeit von ${cleanTopic} wird oft unterschätzt.` },
      { word: `Verständnis von ${cleanTopic}`, translation: `Comprensión de ${cleanTopic}`, example: `Ein tiefes Verständnis von ${cleanTopic} ist notwendig.` },
      { word: `Herausforderung bei ${cleanTopic}`, translation: `Desafío en ${cleanTopic}`, example: `Die größte Herausforderung bei ${cleanTopic} ist die Zeit.` },
      { word: `Erfolg mit ${cleanTopic}`, translation: `Éxito con ${cleanTopic}`, example: `Er hatte großen Erfolg mit ${cleanTopic} im Beruf.` },
      { word: `Methode für ${cleanTopic}`, translation: `Método para ${cleanTopic}`, example: `Wir nutzen eine neue Methode für ${cleanTopic}.` },
      { word: `Zukunft von ${cleanTopic}`, translation: `Futuro de ${cleanTopic}`, example: `Die Zukunft von ${cleanTopic} sieht sehr vielversprechend aus.` },
      { word: `Konzept von ${cleanTopic}`, translation: `Concepto de ${cleanTopic}`, example: `Er erklärte das innovative Konzept von ${cleanTopic}.` },
      { word: `Einfluss von ${cleanTopic}`, translation: `Einfluss von ${cleanTopic}`, example: `Der Einfluss von ${cleanTopic} ist weltweit spürbar.` },
      { word: `Diskussion über ${cleanTopic}`, translation: `Discusión sobre ${cleanTopic}`, example: `Es gibt eine lebhafte Diskussion über ${cleanTopic}.` },
      { word: `Entwicklung bei ${cleanTopic}`, translation: `Desarrollo en ${cleanTopic}`, example: `Die Entwicklung bei ${cleanTopic} verläuft rasant.` },
      { word: `Erfahrung mit ${cleanTopic}`, translation: `Experiencia con ${cleanTopic}`, example: `Sie hat jahrelange Erfahrung mit ${cleanTopic}.` },
      { word: `Analyse von ${cleanTopic}`, translation: `Análisis de ${cleanTopic}`, example: `Die präzise Analyse von ${cleanTopic} liefert klare Daten.` },
      { word: `Wissen über ${cleanTopic}`, translation: `Conocimiento sobre ${cleanTopic}`, example: `Sein Wissen über ${cleanTopic} ist absolut beeindruckend.` },
      { word: `Fokus auf ${cleanTopic}`, translation: `Enfoque en ${cleanTopic}`, example: `Wir legen einen starken Fokus auf ${cleanTopic}.` },
      { word: `Interesse an ${cleanTopic}`, translation: `Interés en ${cleanTopic}`, example: `Sie hat ein großes Interesse an ${cleanTopic} gezeigt.` },
      { word: `Spezialist für ${cleanTopic}`, translation: `Especialista en ${cleanTopic}`, example: `Er arbeitet als Spezialist für ${cleanTopic} in Berlin.` },
      { word: `Projekt zu ${cleanTopic}`, translation: `Proyecto sobre ${cleanTopic}`, example: `Wir starten ein neues Projekt zu ${cleanTopic}.` },
      { word: `Theorie von ${cleanTopic}`, translation: `Teoría de ${cleanTopic}`, example: `Die Theorie von ${cleanTopic} ist schwer zu lernen.` }
    ];
    for (let i = 0; i < Math.min(count, templates.length); i++) {
      result.push(templates[i]);
    }
  } else {
    const templates = [
      { word: `Research on ${cleanTopic}`, translation: `Investigación sobre ${cleanTopic}`, example: `Scientific research on ${cleanTopic} has increased rapidly.` },
      { word: `Expert in ${cleanTopic}`, translation: `Experto en ${cleanTopic}`, example: `He became a recognized expert in ${cleanTopic}.` },
      { word: `Advanced ${cleanTopic}`, translation: `${cleanTopic} avanzado`, example: `We are taking an advanced course in ${cleanTopic} next semester.` },
      { word: `Introduction to ${cleanTopic}`, translation: `Introducción a ${cleanTopic}`, example: `This book is a great introduction to ${cleanTopic} for beginners.` },
      { word: `To practice ${cleanTopic}`, translation: `Practicar ${cleanTopic}`, example: `It is essential to practice ${cleanTopic} every single day.` },
      { word: `Passion for ${cleanTopic}`, translation: `Pasión por ${cleanTopic}`, example: `Her lifelong passion for ${cleanTopic} is truly inspiring.` },
      { word: `Foundation of ${cleanTopic}`, translation: `Base / Fundamento de ${cleanTopic}`, example: `This theory is the foundation of modern ${cleanTopic}.` },
      { word: `Importance of ${cleanTopic}`, translation: `Importancia de ${cleanTopic}`, example: `The importance of ${cleanTopic} is often underestimated.` },
      { word: `Understanding of ${cleanTopic}`, translation: `Comprensión de ${cleanTopic}`, example: `A deep understanding of ${cleanTopic} is required for this job.` },
      { word: `Challenge of ${cleanTopic}`, translation: `Desafío de ${cleanTopic}`, example: `The main challenge of ${cleanTopic} is maintaining high quality.` },
      { word: `Success in ${cleanTopic}`, translation: `Éxito en ${cleanTopic}`, example: `She achieved remarkable success in ${cleanTopic} last year.` },
      { word: `Method for ${cleanTopic}`, translation: `Método para ${cleanTopic}`, example: `We need to develop a new method for ${cleanTopic}.` },
      { word: `Future of ${cleanTopic}`, translation: `Futuro de ${cleanTopic}`, example: `The future of ${cleanTopic} looks exceptionally bright.` },
      { word: `Concept of ${cleanTopic}`, translation: `Concepto de ${cleanTopic}`, example: `The professor explained the basic concept of ${cleanTopic}.` },
      { word: `Influence of ${cleanTopic}`, translation: `Influencia de ${cleanTopic}`, example: `The historical influence of ${cleanTopic} remains strong.` },
      { word: `Discussion on ${cleanTopic}`, translation: `Discusión sobre ${cleanTopic}`, example: `They participated in a lively discussion on ${cleanTopic}.` },
      { word: `Development in ${cleanTopic}`, translation: `Desarrollo en ${cleanTopic}`, example: `Recent developments in ${cleanTopic} have shocked the industry.` },
      { word: `Experience with ${cleanTopic}`, translation: `Experiencia con ${cleanTopic}`, example: `He has extensive professional experience with ${cleanTopic}.` },
      { word: `Analysis of ${cleanTopic}`, translation: `Análisis de ${cleanTopic}`, example: `The detailed analysis of ${cleanTopic} revealed crucial facts.` },
      { word: `Knowledge of ${cleanTopic}`, translation: `Conocimiento de ${cleanTopic}`, example: `She has valuable knowledge of ${cleanTopic}.` },
      { word: `Focus on ${cleanTopic}`, translation: `Enfoque en ${cleanTopic}`, example: `Our project will focus on ${cleanTopic} next month.` },
      { word: `Interest in ${cleanTopic}`, translation: `Interés en ${cleanTopic}`, example: `There is a growing global interest in ${cleanTopic}.` },
      { word: `Specialist in ${cleanTopic}`, translation: `Especialista en ${cleanTopic}`, example: `She works as a leading specialist in ${cleanTopic}.` },
      { word: `Project on ${cleanTopic}`, translation: `Proyecto sobre ${cleanTopic}`, example: `They are funding a new research project on ${cleanTopic}.` },
      { word: `Theory of ${cleanTopic}`, translation: `Teoría de ${cleanTopic}`, example: `The general theory of ${cleanTopic} is widely accepted.` }
    ];
    for (let i = 0; i < Math.min(count, templates.length); i++) {
      result.push(templates[i]);
    }
  }

  return result;
}
