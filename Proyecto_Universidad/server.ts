import 'zone.js/node';
import { enableProdMode } from '@angular/core';
import express, { Request, Response } from 'express';
import { join } from 'path';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';

import { AppServerModule } from './src/main.server';

enableProdMode();

const app = express();
const PORT = process.env['PORT'] || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/browser');

// Configura el motor de renderizado ngExpressEngine con los tipos correctos
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModule,
}) as any); // Asegura la compatibilidad de tipos con 'as any'

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

// Servir archivos estáticos desde el directorio 'browser'
app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

// Ruta para manejar todas las demás solicitudes y renderizar la aplicación Angular
app.get('*', (req: Request, res: Response) => {
  res.render('index', {
    req,
    res,
    providers: [
      { provide: APP_BASE_HREF, useValue: req.baseUrl }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
