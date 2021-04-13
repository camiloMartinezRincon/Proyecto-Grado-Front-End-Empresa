import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage implements OnInit {
  logForm: FormGroup;
  isSubmited = false;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.logForm = this.formBuilder.group({
      logEmail: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      logPassword: ['', [Validators.required,]]
    });
  }

  submitLogForm() {
    this.isSubmited = true;
    if (!this.logForm.valid) {
      console.log("Por favor llenar todos los campos");
      return false;
    } else {
      console.log(this.logForm.value);
    }
    
  }
}
