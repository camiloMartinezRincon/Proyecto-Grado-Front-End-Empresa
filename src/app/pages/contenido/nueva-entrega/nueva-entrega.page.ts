import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

@Component({
  selector: 'app-nueva-entrega',
  templateUrl: './nueva-entrega.page.html',
  styleUrls: ['./nueva-entrega.page.scss'],
})
export class NuevaEntregaPage implements OnInit {
  nuevaEntregaForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.nuevaEntregaForm = this.formBuilder.group({
      cliNombreApellidoEntrega: ['', [Validators.required]],
      clientEntregaEmail: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      nombreProyectoEntrega: ['', [Validators.required]],
      dateEntrega: ['', [Validators.required]],
      horaEntrega: ['', [Validators.required]],
      lugarEntrega: ['', [Validators.required]]
    });
  }

  programarNuevaEntrega() {
    console.log('programado!!!');
  }

}
