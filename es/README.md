<div align="center">

# Documentación de MarkFlow Lite

[![License](https://img.shields.io/github/license/blankzsh/markflow-lite)](https://github.com/blankzsh/markflow-lite/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/blankzsh/markflow-lite)](https://github.com/blankzsh/markflow-lite/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/blankzsh/markflow-lite)](https://github.com/blankzsh/markflow-lite/issues)
[![VitePress](https://img.shields.io/badge/VitePress-1.6.4-brightgreen)](https://vitepress.dev/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/blankzsh/markflow-lite/pulls)

Documentación del Editor de Markdown Online Frontend Puro

[中文](../README.md) | [English](../en/README.md) | [Português](../pt/README.md) | [日本語](../ja/README.md) | [Deutsch](../de/README.md)

</div>

## Introducción

MarkFlow Lite es un editor de Markdown online de frontend puro que no requiere servidor y está listo para usar directamente. Soporta edición en tiempo real, vista previa bidireccional, guardado local y compartición de contenido.

## Características Principales

- ✍️ **Edición en Tiempo Real** - Soporta sintaxis estándar de Markdown (incluyendo tablas, bloques de código, listas, etc.) con experiencia de edición WYSIWYG
- 👁️ **Vista Previa en Tiempo Real** - Ve mientras escribes, soporta renderizado de fórmulas matemáticas y diagramas de flujo, vista previa sincronizada en tiempo real
- 💾 **Almacenamiento Local** - Guarda automáticamente borradores en el almacenamiento local del navegador, sin preocuparse por la pérdida de datos
- 📄 **Exportación de Archivos** - Soporta exportación a formatos PDF, HTML, Markdown y otros, facilitando el compartir y archivar
- 📂 **Gestión de Archivos** - Soporta crear nuevos documentos, abrir archivos Markdown locales e integración con almacenamiento en la nube
- 🔗 **Compartición de Contenido** - Genera enlaces únicos, el contenido puede compartirse mediante parámetros URL, facilitando la colaboración
- 🎨 **Cambio de Tema** - Proporciona temas claros/oscuros, adaptados a diferentes entornos de lectura, protección ocular
- ⌨️ **Operaciones de Atajo** - Soporta atajos comunes (negrita, cursiva, inserción de títulos, etc.), mejorando la eficiencia de edición
- 📱 **Diseño Responsivo** - Soporta acceso desde escritorio, tableta y móvil, edita documentos en cualquier momento y lugar

## Inicio Rápido

### Uso Online

Visita [MarkFlow Lite](https://editor.currso.com) directamente para comenzar a usarlo.

### Desarrollo Local

```bash
# Clonar el proyecto
git clone https://github.com/blankzsh/markflow-lite.git

# Entrar al directorio del proyecto
cd markflow-lite

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

## Stack Tecnológico

- **Framework de Desarrollo**: React + TypeScript + Vite
- **Parseo de Markdown**: markdown-it
- **Resaltado de Código**: Highlight.js
- **Diseño de Estilos**: Tailwind CSS + @tailwindcss/typography
- **Fórmulas Matemáticas**: MathJax (mediante markdown-it-mathjax3)
- **Soporte de Diagramas de Flujo**: Mermaid
- **Herramienta de Construcción**: Vite
- **Plataforma de Despliegue**: GitHub Pages / Vercel / Netlify

## Estructura de la Documentación

```
docs/
├── .vitepress/          # Configuración de VitePress
├── guide/               # Guía de usuario
├── features/            # Introducción de características
├── en/                  # Documentación en inglés
├── es/                  # Documentación en español
├── pt/                  # Documentación en portugués
├── ja/                  # Documentación en japonés
├── de/                  # Documentación en alemán
├── public/              # Recursos estáticos
└── index.md             # Página de inicio
```

## Contribuciones

¡Las contribuciones de cualquier tipo son bienvenidas! Si tienes alguna de las siguientes ideas, por favor siéntete libre de participar:

- 🐛 Reportar errores
- 💡 Sugerir nuevas características
- 📝 Mejorar la documentación
- 🎨 Optimizar el diseño UI/UX
- 🔧 Corregir problemas de código

Por favor consulta nuestras [Guías de Contribución](../CONTRIBUTING.md) para más información.

## Contáctanos

Si encuentras algún problema, tienes sugerencias de características o deseas proporcionar comentarios mientras usas la aplicación, por favor contáctanos a través de:

- **Comentarios por Email**: [shell7@petalmail.com](mailto:shell7@petalmail.com)
- **GitHub Issues**: [Enviar Problemas o Sugerencias](https://github.com/blankzsh/markflow-lite/issues)
- **Repositorio del Proyecto**: [https://github.com/blankzsh/markflow-lite](https://github.com/blankzsh/markflow-lite)

¡Valoramos los comentarios de cada usuario, y tus sugerencias nos ayudarán a mejorar continuamente MarkFlow Lite!

## Licencia

Este proyecto está licenciado bajo la Licencia [MIT](https://github.com/blankzsh/markflow-lite/blob/main/LICENSE).