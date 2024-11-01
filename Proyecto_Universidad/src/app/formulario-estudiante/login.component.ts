import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
goBack() {
throw new Error('Method not implemented.');
}
  loginForm: FormGroup;
  usuarios: { username: string, password: string }[] = [];

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Verificar si estamos en un entorno del navegador antes de usar localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      const usuariosGuardados = localStorage.getItem('usuarios');
      if (usuariosGuardados) {
        this.usuarios = JSON.parse(usuariosGuardados);
      }
    }
  }

  login() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      const usuarioEncontrado = this.usuarios.find(user => user.username === username && user.password === password);

      if (usuarioEncontrado) {
        alert('Inicio de sesión exitoso');
        this.router.navigate(['/dashboard']);
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }
}
