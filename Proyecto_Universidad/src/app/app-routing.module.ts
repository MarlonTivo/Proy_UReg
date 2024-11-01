import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './formulario-estudiante/login.component';
import { DashboardComponent } from './formulario-estudiante/dashboard.component';
import { RegistroComponent } from './registro/registro.component';
import { FormularioEstudianteComponent } from './formulario-estudiante/formulario-estudiante.component';
import { CarreraComponent } from './carrera/carrera.component';
import { CatedraticosComponent } from './catedraticos/catedraticos.component';
import { CursosComponent } from './cursos/cursos.component';
import { FacultadComponent } from './facultad/facultad.component';
import { PensumComponent } from './pensum/pensum.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'formulario-estudiante', component: FormularioEstudianteComponent },
  { path: 'carrera', component: CarreraComponent },
  { path: 'catedraticos', component: CatedraticosComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'facultad', component: FacultadComponent },
  { path: 'pensum', component: PensumComponent },
  { path: 'estudiante', component: FormularioEstudianteComponent }, // Asegúrate de que esta ruta esté correcta
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
