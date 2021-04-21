import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})

export class IniciarSesionPage implements OnInit {
  logForm: FormGroup;
  isSubmited = false;

  constructor(private formBuilder: FormBuilder, private alertLogInController: AlertController, private logRouter: Router) { }

  ngOnInit() {
    this.logForm = this.formBuilder.group({
      logEmail: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      logPassword: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(8)]]
    });
  }

  async submitLogForm() {
    this.isSubmited = true;
    if (!this.logForm.valid) {
      let logInAlert = await this.alertLogInController.create({
        header: 'Tu usuario o contraseña son incorrectos',
        buttons: ['Ok']
      });
      await logInAlert.present();
      return false;
    } else {
      this.logRouter.navigate(['/proyectos']);
      console.log(this.logForm.value);
      console.log("Esta bien")
    }    
  }
}
