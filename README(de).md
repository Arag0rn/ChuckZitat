# Chuck Norris Jokes Projekt Dokumentation

## Inhaltsverzeichnis
1. [Beschreibung](#beschreibung)
2. [Anforderungen](#anforderungen)
3. [Installation](#installation)
4. [Verwendung](#verwendung)
5. [Projektstruktur](#projektstruktur)
6. [Beitragen](#beitragen)
7. [Hinweise](#hinweise)

## Beschreibung
Das **Chuck Norris Jokes** Projekt ist eine Webanwendung, die zufällige Witze über Chuck Norris generiert. Die Anwendung verfügt über ein Hintergrundvideo von YouTube und ermöglicht es den Benutzern, neue Witze durch Klicken auf eine Schaltfläche zu erhalten.

## Anforderungen
- **Node.js** (Version 14 und höher)
- **npm** (Version 6 und höher)
- **MongoDB** (lokale Installation oder Atlas)

## Installation
1. Klonen Sie das Repository:
   ```bash
   git clone https://github.com/username/chuck-norris-jokes.git
   cd chuck-norris-jokes

   Abhängigkeiten installieren:

bash
2. Copy code
npm install
Konfigurieren Sie die Datenbankverbindung:

3. Ändern Sie die MongoDB-Verbindungsparameter in der .env-Datei.
4. Führen Sie die Anwendung aus:

bash
Copy code
npm run dev
5. Öffnen Sie Ihren Browser und navigieren Sie zu http://localhost:3000.

## Verwendung
Startseite: Nach dem Start der Anwendung sehen Sie die Startseite mit einem Hintergrundvideo und einem Titel.
Witz bekommen: Klicken Sie auf die Schaltfläche "Get a New Joke", um einen neuen Witz über Chuck Norris zu generieren.
Fußzeile: In der Fußzeile wird ein Besucher-Widget angezeigt, das die Anzahl der Besuche anzeigt.

## Projektstruktur
plaintext
Copy code
chuck-norris-jokes/
│
├── src/
│   ├── api/
│   │   ├── joke/
│   │   │   └── jokeService.js   # Dienst zum Abrufen von Witzen
│   ├── components/
│   │   ├── Footer.js              # Fußzeilenkomponente
│   │   ├── Main.js                # Hauptkomponente der Anwendung
│   │   └── VisitorWidget.js       # Besucher-Widget
│   ├── pages/
│   │   └── index.js               # Startseite
│   ├── styles/
│   │   └── styles.css             # CSS-Stile für die Anwendung
│   └── ...
│
├── .env                           # Konfigurationsdatei für die Umgebung
├── package.json                   # Abhängigkeitsdatei
└── prisma/                        # Falls nicht verwendet, kann entfernt werden
    ├── schema.prisma             # Datenbankschema (nicht erforderlich für MongoDB)
    └── migrations/                # Datenbankmigrationen (nicht erforderlich für MongoDB)
    
## Beitragen
Wenn Sie Änderungen am Projekt vornehmen möchten, folgen Sie bitte diesen Schritten:

Erstellen Sie einen Branch für Ihre Funktion:

bash
Copy code
git checkout -b feature/your-feature-name
Nehmen Sie Änderungen vor und committen Sie sie:

bash
Copy code
git commit -m "Add some feature"
Pushen Sie die Änderungen in das Repository:

bash
Copy code
git push origin feature/your-feature-name
Erstellen Sie einen Pull Request.