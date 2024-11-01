import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursosForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cursosForm = this.fb.group({
      nombre: [''],
      descripcion: [''],
      creditos: ['']
    });
  }

  ngOnInit(): void {}

  guardarCurso() {
    if (this.cursosForm.valid) {
      console.log(this.cursosForm.value);
    }
  }
}
