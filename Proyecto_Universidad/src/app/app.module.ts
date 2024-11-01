// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { AppRoutingModule } from './app-routing.module'; // Asegúrate de que este archivo existe
import { AppComponent } from './app.component';
import { LoginComponent } from './formulario-estudiante/login.component';
import { DashboardComponent } from './formulario-estudiante/dashboard.component';
import { RegistroComponent } from './registro/registro.component';
import { FormularioEstudianteComponent } from './formulario-estudiante/formulario-estudiante.component';
import { CarreraComponent } from './carrera/carrera.component';
import { CatedraticosComponent } from './catedraticos/catedraticos.component';
import { CursosComponent } from './cursos/cursos.component';
import { FacultadComponent } from './facultad/facultad.component';
import { PensumComponent } from './pensum/pensum.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegistroComponent,
    FormularioEstudianteComponent,
    CarreraComponent,
    CatedraticosComponent,
    CursosComponent,
    FacultadComponent,
    PensumComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }), // Agrega esto si usas Angular Universal
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule, // RouterModule es necesario para la navegación
    AppRoutingModule // Asegúrate de que este archivo existe
  ],
  providers: [], // Aquí puedes agregar servicios si los necesitas
  bootstrap: [AppComponent]
})
export class AppModule { }
