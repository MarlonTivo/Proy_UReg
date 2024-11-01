import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto_Universidad';
  menuOpen = false; // Añadir esta línea

  constructor(public router: Router) {} // Cambiar la accesibilidad a pública

  toggleMenu() { // Añadir esta función
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    // Implementa tu lógica de cierre de sesión aquí
    this.router.navigate(['/login']);
  }
}
