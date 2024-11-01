import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-catedraticos',
  templateUrl: './catedraticos.component.html',
  styleUrls: ['./catedraticos.component.css']
})
export class CatedraticosComponent implements OnInit {
  catedraticosForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.catedraticosForm = this.fb.group({
      nombre: [''],
      apellido: [''],
      email: ['']
    });
  }

  ngOnInit(): void {}

  guardarCatedratico() {
    if (this.catedraticosForm.valid) {
      console.log(this.catedraticosForm.value);
    }
  }
}
