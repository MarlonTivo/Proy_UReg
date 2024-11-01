import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registroForm: FormGroup;
  usuarios: { username: string, password: string }[] = [];

  constructor(private fb: FormBuilder, private router: Router) {
    this.registroForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });

    // Verificar si estamos en un entorno del navegador antes de usar localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      const usuariosGuardados = localStorage.getItem('usuarios');
      if (usuariosGuardados) {
        this.usuarios = JSON.parse(usuariosGuardados);
      }
    }
  }

  registrar() {
    if (this.registroForm.valid) {
      const { username, password, confirmPassword } = this.registroForm.value;
      if (password === confirmPassword) {
        // Lógica predeterminada para registrar al usuario en una lista local
        this.usuarios.push({ username, password });
        // Guardar usuarios en localStorage
        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
        }
        alert('Usuario registrado exitosamente. Por favor, inicie sesión.');
        this.router.navigate(['/login']); // Redirigir al usuario a la página de inicio de sesión
      } else {
        alert('Las contraseñas no coinciden');
      }
    } else {
      // Verificar individualmente cada campo para mensajes específicos
      if (this.registroForm.get('username')?.invalid) {
        alert('El campo de usuario es obligatorio.');
      } else if (this.registroForm.get('password')?.invalid) {
        alert('El campo de contraseña es obligatorio.');
      } else if (this.registroForm.get('confirmPassword')?.invalid) {
        alert('El campo de confirmación de contraseña es obligatorio.');
      } else {
        alert('Por favor, complete todos los campos.');
      }
    }
  }

  goBack() {
    this.router.navigate(['/login']); // Cambia '/login' por la ruta a la que deseas regresar
  }
}
