import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-facultad',
  templateUrl: './facultad.component.html',
  styleUrls: ['./facultad.component.css']
})
export class FacultadComponent implements OnInit {
  facultadForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.facultadForm = this.fb.group({
      nombre: [''],
      ubicacion: ['']
    });
  }

  ngOnInit(): void {}

  guardarFacultad() {
    if (this.facultadForm.valid) {
      console.log(this.facultadForm.value);
    }
  }
}
