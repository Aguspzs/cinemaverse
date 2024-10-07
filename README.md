# Proyecto Angular con Firebase

Este proyecto es una aplicación mobile construida con **Ionic 8** y **Angular 18**. La aplicación incluye funcionalidades básicas como autenticación, gestión de datos en tiempo real y operaciones CRUD a través de la integración con Firebase.

## Tecnologías Utilizadas

- **Angular**: Framework frontend para la creación de aplicaciones web SPA.
- **Firebase**: Plataforma de desarrollo de aplicaciones con servicios como Firestore, autenticación y hosting.
- **TypeScript**: Lenguaje de programación que se usa para desarrollar la aplicación.
- **HTML y CSS**: Para la estructura y el diseño de la interfaz de usuario.
- **cross-env**: Paquete para manejar variables de entorno de manera multiplataforma.
- **Angular CLI**: Herramienta para desarrollar, construir y probar aplicaciones Angular.

## Características de la Aplicación

- **Autenticación con Firebase**
- **Gestión de Datos**
- **Componentes Modulares**

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes elementos:

- **Node.js** (versión 14 o superior)
- **npm** (versión 6 o superior)
- **Angular CLI** (versión 13 o superior)
- **Firebase CLI** (opcional, para implementar en Firebase Hosting)

## Instalación

1. **Clona el repositorio:**

   ```bash
   git clone <URL-del-repositorio>
   cd nombre-del-proyecto

   ```

2. **Instala las dependencias del proyecto:**

   ```bash
   npm install

   ```

## Configuración

Para mantener segura la API_KEY de Firebase y no incluirla en el código fuente, se utiliza un script para generar el archivo de entorno environment.ts en el directorio src/environments de Angular.

**Configuración de la API Key**

- Definir manualmente la variable de entorno en **Windows**:

  ```bash
  set FIREBASE_API_KEY="tu-api-key-de-firebase" && npm start

  ```

- Definir manualmente la variable de entorno en **Linux/Mac**:
  ```bash
  export FIREBASE_API_KEY="tu-api-key-de-firebase" && npm start


  ```

El comando anterior se encargará de generar un archivo **environment.ts** dinámicamente con la clave de Firebase proporcionada.

## Levantar la aplicación

1. **Levanta el proyecto en modo de desarrollo con el siguiente comando:**

   ```bash
    npm start

   ```

Esto generará el archivo environment.ts y abrirá la aplicación en http://localhost:4200.
