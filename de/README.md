<div align="center">

# MarkFlow Lite Dokumentation

[![License](https://img.shields.io/github/license/blankzsh/markflow-lite)](https://github.com/blankzsh/markflow-lite/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/blankzsh/markflow-lite)](https://github.com/blankzsh/markflow-lite/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/blankzsh/markflow-lite)](https://github.com/blankzsh/markflow-lite/issues)
[![VitePress](https://img.shields.io/badge/VitePress-1.6.4-brightgreen)](https://vitepress.dev/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/blankzsh/markflow-lite/pulls)

Dokumentation des reinen Frontend-Online-Markdown-Editors

[中文](../README.md) | [English](../en/README.md) | [Español](../es/README.md) | [Português](../pt/README.md) | [日本語](../ja/README.md)

</div>

## Einführung

MarkFlow Lite ist ein reiner Frontend-Online-Markdown-Editor, der keinen Server benötigt und sofort einsatzbereit ist. Es unterstützt Echtzeit-Bearbeitung, duale Vorschau, lokales Speichern und Inhaltsfreigabe.

## Hauptmerkmale

- ✍️ **Echtzeit-Bearbeitung** - Unterstützt Standard-Markdown-Syntax (einschließlich Tabellen, Codeblöcke, Listen usw.) mit WYSIWYG-Bearbeitungserfahrung
- 👁️ **Echtzeit-Vorschau** - Schreiben mit sofortiger Anzeige, unterstützt Rendering von mathematischen Formeln und Flussdiagrammen, Echtzeit-synchronisierte Vorschau
- 💾 **Lokaler Speicher** - Speichert automatisch Entwürfe im lokalen Browserspeicher, keine Sorge um Datenverlust
- 📄 **Dateiexport** - Unterstützt Export in PDF-, HTML-, Markdown- und andere Formate für einfaches Teilen und Archivieren
- 📂 **Dateiverwaltung** - Unterstützt das Erstellen neuer Dokumente, Öffnen lokaler Markdown-Dateien und Cloud-Speicher-Integration
- 🔗 **Inhaltsfreigabe** - Generiert eindeutige Links, Inhalte können über URL-Parameter geteilt werden, was die Zusammenarbeit erleichtert
- 🎨 **Theme-Wechsel** - Bietet helle/dunkle Themen, angepasst an verschiedene Lesenumgebungen, Augenschutz
- ⌨️ **Tastenkürzel** - Unterstützt gängige Tastenkürzel (Fett, Kursiv, Titel einfügen usw.), verbessert die Bearbeitungseffizienz
- 📱 **Responsives Design** - Unterstützt den Zugriff von Desktop, Tablet und Handy, Dokumente jederzeit und überall bearbeiten

## Schnellstart

### Online-Nutzung

Besuchen Sie [MarkFlow Lite](https://editor.currso.com) direkt, um mit der Nutzung zu beginnen.

### Lokale Entwicklung

```bash
# Projekt klonen
git clone https://github.com/blankzsh/markflow-lite.git

# In das Projektverzeichnis wechseln
cd markflow-lite

# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

## Technologie-Stack

- **Entwicklungsframework**: React + TypeScript + Vite
- **Markdown-Parsing**: markdown-it
- **Code-Highlighting**: Highlight.js
- **Stilgestaltung**: Tailwind CSS + @tailwindcss/typography
- **Mathematische Formeln**: MathJax (über markdown-it-mathjax3)
- **Flussdiagramm-Unterstützung**: Mermaid
- **Build-Tool**: Vite
- **Bereitstellungsplattform**: GitHub Pages / Vercel / Netlify

## Dokumentationsstruktur

```
docs/
├── .vitepress/          # VitePress-Konfiguration
├── guide/               # Benutzerhandbuch
├── features/            # Funktionsvorstellung
├── en/                  # Englische Dokumentation
├── es/                  # Spanische Dokumentation
├── pt/                  # Portugiesische Dokumentation
├── ja/                  # Japanische Dokumentation
├── de/                  # Deutsche Dokumentation
├── public/              # Statische Ressourcen
└── index.md             # Startseite
```

## Mitwirkung

Beiträge jeglicher Art sind willkommen! Wenn Sie eine der folgenden Ideen haben, beteiligen Sie sich gerne:

- 🐛 Fehler melden
- 💡 Neue Funktionen vorschlagen
- 📝 Dokumentation verbessern
- 🎨 UI/UX-Design optimieren
- 🔧 Codeprobleme beheben

Weitere Informationen finden Sie in unseren [Beitragsrichtlinien](../CONTRIBUTING.md).

## Kontakt

Wenn Sie Probleme haben, Funktionsvorschläge haben oder Feedback geben möchten, während Sie die Anwendung verwenden, wenden Sie sich bitte über folgende Wege an uns:

- **E-Mail-Feedback**: [shell7@petalmail.com](mailto:shell7@petalmail.com)
- **GitHub Issues**: [Probleme oder Vorschläge einreichen](https://github.com/blankzsh/markflow-lite/issues)
- **Projekt-Repository**: [https://github.com/blankzsh/markflow-lite](https://github.com/blankzsh/markflow-lite)

Wir schätzen das Feedback jedes Benutzers, und Ihre Vorschläge helfen uns dabei, MarkFlow Lite kontinuierlich zu verbessern!

## Lizenz

Dieses Projekt ist unter der [MIT](https://github.com/blankzsh/markflow-lite/blob/main/LICENSE)-Lizenz lizenziert.