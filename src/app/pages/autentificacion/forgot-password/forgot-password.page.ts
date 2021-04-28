import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  forgPasswordForm: FormGroup;
  isSubmited = false;

  constructor(private formBuilder: FormBuilder, private alertController: AlertController, private forgPasswordRouter: Router) { }

  ngOnInit() {
    this.forgPasswordForm = this.formBuilder.group({
      forgPasswordEmail: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      forgPasswordNewPass: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(8)]],
      forgPasswordRePass: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(8)]]
    });
  }

  async submitForgPasswordForm() {
    this.isSubmited = true;
    if (!this.forgPasswordForm.valid) {
      let forgPasswordAlert = await this.alertController.create({
        backdropDismiss: false,
        header: 'Debes llenar todos los campos.',
        buttons: ['Ok']
      });
      await forgPasswordAlert.present();
      return false;
    } else {
      this.forgPasswordRouter.navigate(['/iniciar-sesion']);
      console.log(this.forgPasswordForm.value);
      console.log("Esta bien")
    }    
  }

}
