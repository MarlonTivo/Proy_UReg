// src/main.server.ts

import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import express from 'express';
import { join } from 'path';

// Importa el módulo del servidor
import { AppServerModule } from './app.server.module';

const app = express();
const PORT = process.env['PORT'] || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/browser');

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModule,
}));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

// Servir archivos estáticos
app.get('*.*', express.static(DIST_FOLDER));

// Ruta para manejar todas las demás solicitudes
app.get('*', (req, res) => {
  res.render('index', { req });
});

app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});

if (process.env['NODE_ENV'] === 'production') {
  enableProdMode();
}
export { AppServerModule };

