import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { format } from 'date-fns';

@Component({
  selector: 'app-formulario-estudiante',
  templateUrl: './formulario-estudiante.component.html',
  styleUrls: ['./formulario-estudiante.component.css']
})
export class FormularioEstudianteComponent implements OnInit {
  fechaActual!: string;
  fecha!: Date;
  anio!: number;
  hora!: string;
  minuto: string = '';
  segundos: number = 0;
  segundosFormat: string = '';
  estudiantesForm!: FormGroup;
  opcionesGenero: string[] = ['Masculino', 'Femenino', 'Otro'];
  opcionesEstadoCivil: string[] = ['Soltero', 'Viudo', 'Casado', 'Divorciado'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.estudiantesForm = this.fb.group({
      carnet: new FormControl(''),
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      CUI: new FormControl(''),
      telefono: new FormControl(''),
      email: new FormControl(''),
      genero: new FormControl(''),
      estado_civil: new FormControl(''),
      fecha_nacimiento: new FormControl('')
    });

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
      this.hora = now.getHours() < 10 ? "0" + this.hora : this.hora;
      this.segundosFormat = this.segundos < 10 ? "0" + this.segundos : this.segundos.toString();
      this.minuto = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes().toString();
    };
    setInterval(tick, 1000);
  }

  insertarEstudiante() {
    if (this.estudiantesForm.valid) {
      const bodyPost = {
        carnet: this.estudiantesForm.get('carnet')!.value,
        nombre: this.estudiantesForm.get('nombre')!.value,
        apellido: this.estudiantesForm.get('apellido')!.value,
        cui: this.estudiantesForm.get('CUI')!.value,
        telefono: this.estudiantesForm.get('telefono')!.value,
        email: this.estudiantesForm.get('email')!.value,
        genero: this.estudiantesForm.get('genero')!.value,
        estado_civil: this.estudiantesForm.get('estado_civil')!.value,
        fecha_nacimiento: this.estudiantesForm.get('fecha_nacimiento')!.value
      };
      console.log('Revisar datos', bodyPost);
      alert('Datos guardados correctamente'); // Alerta de guardado exitoso
    }
  }

  LimpiarCampos() {
    this.estudiantesForm.reset();
    alert('Formulario limpiado'); // Alerta de formulario limpiado
  }
}
