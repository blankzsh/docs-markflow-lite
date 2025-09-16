# Instalación

MarkFlow Lite está diseñado para funcionar completamente en el navegador, sin necesidad de instalación. Sin embargo, aquí están las diferentes formas de acceder y usar la aplicación.

## 🌐 Uso en Navegador (Recomendado)

### Acceso Directo
1. Visita la aplicación web en tu navegador
2. ¡Comienza a escribir inmediatamente!
3. Sin descargas, sin configuración

### Navegadores Compatibles
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## 📱 Instalación como PWA

MarkFlow Lite funciona como una Progressive Web App (PWA), permitiéndote instalarla como una aplicación nativa.

### En Chrome/Edge
1. Visita la aplicación web
2. Busca el ícono "Instalar" en la barra de direcciones
3. Haz clic en "Instalar"
4. La aplicación aparecerá en tu escritorio

### En Firefox
1. Visita la aplicación web
2. Haz clic en el menú (tres líneas)
3. Selecciona "Instalar esta aplicación"

### En Safari (iOS)
1. Visita la aplicación web
2. Toca el botón de compartir
3. Selecciona "Añadir a pantalla de inicio"

## 💻 Instalación Local (Desarrollo)

Si quieres ejecutar MarkFlow Lite localmente o contribuir al desarrollo:

### Prerrequisitos
- Node.js 18+
- npm o yarn

### Pasos
```bash
# Clonar el repositorio
git clone https://github.com/usuario/markflow-lite.git
cd markflow-lite

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build
```

## 🔧 Configuración Inicial

### Preferencias del Editor
1. **Tema**: Claro/Oscuro/Automático
2. **Fuente**: Tamaño y familia de fuente
3. **División de pantalla**: Horizontal/Vertical
4. **Autoguardado**: Intervalo y configuración

### Configuración de Vista Previa
1. **Estilo de Markdown**: Selecciona tu estilo preferido
2. **Matemáticas**: Habilitar/deshabilitar KaTeX
3. **Diagramas**: Configurar Mermaid
4. **Resaltado de código**: Seleccionar tema

## 📁 Gestión de Archivos

### Almacenamiento Local
- Los archivos se guardan automáticamente en el navegador
- Usa IndexedDB para almacenamiento persistente
- Capacidad prácticamente ilimitada

### Almacenamiento en la Nube
MarkFlow Lite soporta varios servicios de almacenamiento:

#### WebDAV
- Compatible con Nextcloud, ownCloud
- Configuración simple con URL, usuario y contraseña

#### Amazon S3
- Acceso directo a buckets S3
- Configurar con claves de acceso AWS

#### Dropbox (Próximamente)
#### Google Drive (Próximamente)

## 🔒 Seguridad y Privacidad

- **Sin seguimiento**: No recopilamos datos personales
- **Cifrado local**: Los archivos se cifran localmente
- **Sin servidor**: Todo el procesamiento ocurre en tu navegador
- **Código abierto**: Código transparente y auditable

## 🚨 Solución de Problemas

### Problemas Comunes

#### La aplicación no carga
1. Verifica tu conexión a internet
2. Limpia la caché del navegador
3. Prueba en modo incógnito

#### Los archivos no se guardan
1. Verifica el espacio de almacenamiento del navegador
2. Permite almacenamiento persistente en configuración
3. Verifica permisos de la aplicación

#### Rendimiento lento
1. Cierra otras pestañas del navegador
2. Reduce el tamaño de los documentos
3. Desactiva extensiones innecesarias

### Registro de Depuración
Para obtener ayuda con problemas:
1. Abre las herramientas de desarrollador (F12)
2. Ve a la pestaña "Console"
3. Reproduce el problema
4. Envía los mensajes de error al soporte

## 🆕 Actualizaciones

MarkFlow Lite se actualiza automáticamente:
- **Actualizaciones automáticas**: Las nuevas versiones se cargan automáticamente
- **Sin interrupciones**: Las actualizaciones no afectan tu trabajo
- **Notificaciones**: Se te notifica sobre nuevas características

¿Listo para comenzar? Continúa con la [Guía de Uso Básico](./basic-usage).
