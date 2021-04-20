import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registerForm: FormGroup;
  isSubmited = false;

  constructor(private formBuilder: FormBuilder, private alertRegisterController: AlertController, private regRouter: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      regName: ['', [Validators.required]],
      regLastName: ['', [Validators.required]],
      regEmail: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      regPassword: ['', [Validators.required, Validators.maxLength(15)]],
      regRePassword: ['', [Validators.required, Validators.maxLength(15)]],
      regTypeUser: ['', [Validators.required]]
    });
  }
  async submitRegisterForm() {
    this.isSubmited = true;
    if (!this.registerForm.valid) {
      let logInAlert = await this.alertRegisterController.create({
        header: 'Debes llenar todos los campos',
        buttons: ['Ok']
      });
      await logInAlert.present();
      return false;
    }else {
      this.regRouter.navigate(['/iniciar-sesion'])
      console.log(this.registerForm.value);
    }
  }
  confirmPassword() {

  }
}
