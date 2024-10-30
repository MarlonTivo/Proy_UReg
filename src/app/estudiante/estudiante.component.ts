import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { format } from 'date-fns';

@Component({
  selector: 'app-estudiante',
  standalone: true,
  templateUrl: './estudiante.component.html',
  imports:  [RouterOutlet, ReactiveFormsModule, JsonPipe],
  styleUrls: ['./estudiante.component.css']
})



export class EstudianteComponent implements OnInit {
  fechaActual!: String;
  fecha!: Date;
  anio!: number;
  hora!: string;
  minuto: string = '';
  segundos: number = 0;
  segundosFormat: string = '';  
  estudiantesForm!: FormGroup;
  opcionesGenero: string[] = ['Masculino', 'Femenino', 'Otro'];
  opcionesEstadoCivil: string[] =['Soltero','Viudo', 'Casado', 'Divorciado'];
 
  constructor(public fb: FormBuilder) {this.estudiantesForm = new FormGroup({
    Carnet: new FormControl('',[Validators.required,Validators.minLength(7)]),
    Nombre: new FormControl(''),
    Apellido: new FormControl(''),
    CUI: new FormControl('',Validators.minLength(13)),
    Telefono: new FormControl('',Validators.minLength(8)),
    Correo: new FormControl(''),
    Genero: new FormControl(''),
    Estado_civil: new FormControl(''),
    Fecha_nacimiento: new FormControl('')
 });}

  ngOnInit(): void {
    this.fecha = new Date();
    this.fechaActual = format(this.fecha, 'dd-MM-yyyy');
    this.anio = this.fecha.getFullYear();
    this.reloj();
  }
  public reloj() {
    const tick = () => {
      const now = new Date();
      this.hora = now.getHours().toString();
      this.segundos = now.getSeconds();
      if (now.getHours() < 10) {
        this.hora = "0" + this.hora
      } else {
        this.hora = this.hora
      }
      if (this.segundos < 10) {
        this.segundosFormat = "0" + this.segundos
      } else {
        this.segundosFormat = this.segundos.toString()
      }
      if (now.getMinutes() < 10) {
        this.minuto = "0" + now.getMinutes();
      } else {
        this.minuto = now.getMinutes().toString();
      }
      // console.log(this.hora,this.minuto, this.segundos);
    };
    setInterval(tick, 1000);
  }

insertarEstudiante(){ if (this.estudiantesForm.valid) {
    const bodyPost = {
    "Carnet": this.estudiantesForm.get('carnet')!.value,
    "Nombre": this.estudiantesForm.get('nombre')!.value,
    "Apellido": this.estudiantesForm.get('apellido')!.value,
    "Cui": this.estudiantesForm.get('CUI')!.value,
    "Telefono": this.estudiantesForm.get('telefono')!.value,
    "Correo": this.estudiantesForm.get('email')!.value,
    "Genero": this.estudiantesForm.get('genero')!.value,
    "Estado_civil": this.estudiantesForm.get('estado_civil')!.value,
    "Fecha_nacimiento": this.estudiantesForm.get('fecha_nacimiento')!.value
    }
    console.log('Revisar datos', bodyPost)

}
}
LimpiarCampos(){
  this.estudiantesForm.reset();
}
}



