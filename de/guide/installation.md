# Installation

MarkFlow Lite ist darauf ausgelegt, vollständig im Browser zu funktionieren, ohne Installation erforderlich zu sein. Hier sind jedoch die verschiedenen Möglichkeiten, auf die Anwendung zuzugreifen und sie zu verwenden.

## 🌐 Browser-Nutzung (Empfohlen)

### Direkter Zugriff
1. Besuchen Sie die Webanwendung in Ihrem Browser
2. Beginnen Sie sofort zu schreiben!
3. Keine Downloads, keine Konfiguration

### Unterstützte Browser
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## 📱 Installation als PWA

MarkFlow Lite funktioniert als Progressive Web App (PWA) und ermöglicht es Ihnen, es wie eine native Anwendung zu installieren.

### In Chrome/Edge
1. Besuchen Sie die Webanwendung
2. Suchen Sie das "Installieren"-Symbol in der Adressleiste
3. Klicken Sie auf "Installieren"
4. Die Anwendung erscheint auf Ihrem Desktop

### In Firefox
1. Besuchen Sie die Webanwendung
2. Klicken Sie auf das Menü (drei Linien)
3. Wählen Sie "Diese App installieren"

### In Safari (iOS)
1. Besuchen Sie die Webanwendung
2. Tippen Sie auf die Teilen-Schaltfläche
3. Wählen Sie "Zum Home-Bildschirm hinzufügen"

## 💻 Lokale Installation (Entwicklung)

Wenn Sie MarkFlow Lite lokal ausführen oder zur Entwicklung beitragen möchten:

### Voraussetzungen
- Node.js 18+
- npm oder yarn

### Schritte
```bash
# Repository klonen
git clone https://github.com/usuario/markflow-lite.git
cd markflow-lite

# Abhängigkeiten installieren
npm install

# Im Entwicklungsmodus ausführen
npm run dev

# Für Produktion bauen
npm run build
```

## 🔧 Erste Konfiguration

### Editor-Einstellungen
1. **Theme**: Hell/Dunkel/Automatisch
2. **Schriftart**: Schriftgröße und -familie
3. **Bildschirmteilung**: Horizontal/Vertikal
4. **Automatisches Speichern**: Intervall und Konfiguration

### Vorschau-Konfiguration
1. **Markdown-Stil**: Wählen Sie Ihren bevorzugten Stil
2. **Mathematik**: KaTeX aktivieren/deaktivieren
3. **Diagramme**: Mermaid konfigurieren
4. **Code-Hervorhebung**: Theme auswählen

## 📁 Dateiverwaltung

### Lokaler Speicher
- Dateien werden automatisch im Browser gespeichert
- Verwendet IndexedDB für persistenten Speicher
- Praktisch unbegrenzte Kapazität

### Cloud-Speicher
MarkFlow Lite unterstützt verschiedene Speicherdienste:

#### WebDAV
- Kompatibel mit Nextcloud, ownCloud
- Einfache Konfiguration mit URL, Benutzer und Passwort

#### Amazon S3
- Direkter Zugriff auf S3-Buckets
- Konfiguration mit AWS-Zugriffsschlüsseln

#### Dropbox (Demnächst)
#### Google Drive (Demnächst)

## 🔒 Sicherheit und Datenschutz

- **Kein Tracking**: Wir sammeln keine persönlichen Daten
- **Lokale Verschlüsselung**: Dateien werden lokal verschlüsselt
- **Serverlos**: Alle Verarbeitung erfolgt in Ihrem Browser
- **Open Source**: Transparenter und prüfbarer Code

## 🚨 Fehlerbehebung

### Häufige Probleme

#### Anwendung lädt nicht
1. Überprüfen Sie Ihre Internetverbindung
2. Löschen Sie den Browser-Cache
3. Versuchen Sie es im Inkognito-Modus

#### Dateien werden nicht gespeichert
1. Überprüfen Sie den Browser-Speicherplatz
2. Erlauben Sie persistenten Speicher in den Einstellungen
3. Überprüfen Sie Anwendungsberechtigungen

#### Langsame Leistung
1. Schließen Sie andere Browser-Tabs
2. Reduzieren Sie die Dokumentgröße
3. Deaktivieren Sie unnötige Erweiterungen

### Debug-Protokoll
Für Hilfe bei Problemen:
1. Öffnen Sie die Entwicklertools (F12)
2. Gehen Sie zum "Console"-Tab
3. Reproduzieren Sie das Problem
4. Senden Sie Fehlermeldungen an den Support

## 🆕 Updates

MarkFlow Lite aktualisiert sich automatisch:
- **Automatische Updates**: Neue Versionen laden automatisch
- **Keine Unterbrechungen**: Updates beeinträchtigen Ihre Arbeit nicht
- **Benachrichtigungen**: Sie werden über neue Funktionen informiert

Bereit zu beginnen? Fahren Sie mit dem [Grundlagen-Nutzungsführer](./basic-usage) fort.
