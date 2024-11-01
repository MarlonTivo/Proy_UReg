import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pensum',
  templateUrl: './pensum.component.html',
  styleUrls: ['./pensum.component.css']
})
export class PensumComponent implements OnInit {
  pensumForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.pensumForm = this.fb.group({
      nombre: [''],
      descripcion: ['']
    });
  }

  ngOnInit(): void {}

  guardarPensum() {
    if (this.pensumForm.valid) {
      console.log(this.pensumForm.value);
    }
  }
}
