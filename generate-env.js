const { writeFile } = require('fs');
const { join } = require('path');

// Cargar la variable de entorno pasada con cross-env
const firebaseApiKey = process.env.FIREBASE_API_KEY || '';

if (!firebaseApiKey) {
  console.error('Error: FIREBASE_API_KEY no está definida. Asegúrate de pasarla como variable de entorno.');
  process.exit(1); // Salir con un error si no se encuentra la clave
}

// Definir el contenido del archivo environment.ts
const envConfigFile = `
  export const environment = {
    production: false,
    firebaseConfig: {
      apiKey: ${firebaseApiKey},
      authDomain: "cinemaverse-app-mobile.firebaseapp.com",
      projectId: "cinemaverse-app-mobile",
      storageBucket: "cinemaverse-app-mobile.appspot.com",
      messagingSenderId: "787665442121",
      appId: "1:787665442121:web:a5eff9fac3253fb2847698"
    }
  };
`;

// Crear el archivo en la carpeta de environments
const targetPath = join(__dirname, 'src/environments/environment.ts');
writeFile(targetPath, envConfigFile, (err) => {
  if (err) {
    console.log('Error al escribir el archivo de entorno:', err);
  } else {
    console.log('Archivo de entorno generado correctamente!');
  }
});
