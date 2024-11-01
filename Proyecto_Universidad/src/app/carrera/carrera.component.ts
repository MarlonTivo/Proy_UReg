import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css']
})
export class CarreraComponent implements OnInit {
  carreraForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.carreraForm = this.fb.group({
      nombre: [''],
      descripcion: ['']
    });
  }

  ngOnInit(): void {}

  guardarCarrera() {
    if (this.carreraForm.valid) {
      console.log(this.carreraForm.value);
    }
  }
}
