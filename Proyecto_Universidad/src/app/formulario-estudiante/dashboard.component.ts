import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  menuOpen = false;

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'dashboard');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'dashboard');
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    // Implementa tu lógica de cierre de sesión aquí
    this.router.navigate(['/login']);
  }
}
