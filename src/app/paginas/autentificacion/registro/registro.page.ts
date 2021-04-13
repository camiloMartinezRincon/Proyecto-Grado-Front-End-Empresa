import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registerForm: FormGroup;
  isSubmited = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      regName: ['', [Validators.required]],
      regLastName: ['', [Validators.required]],
      regEmail: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      logPassword: ['', [Validators.required, Validators.minLength(8)]],
      logRePassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  submitRegisterForm() {
    this.isSubmited = true;
    if (!this.registerForm.valid) {
      console.log("Por favor llenar todos los campor requeridos");
    } else {
      console.log(this.registerForm.value);
    }
  }

  confirmPassword() {

  }
}
