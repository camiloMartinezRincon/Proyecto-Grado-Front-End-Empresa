import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProjectService } from 'src/app/services/project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  forgPasswordForm: FormGroup;
  isSubmited = false;

  constructor(private formBuilder: FormBuilder, private alertController: AlertController, private forgPasswordRouter: Router, private loginService: ProjectService) { }

  ngOnInit() {
    this.forgPasswordForm = this.formBuilder.group({
      forgPasswordEmail: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      forgPasswordNewPass: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(8)]],
      forgPasswordRePass: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(8)]]
    });
  }

 public submitForgPasswordForm() {
    let updatePassword = {
      corpUserEmail: this.forgPasswordForm.controls['forgPasswordEmail'].value,
      userPassword: this.forgPasswordForm.controls['forgPasswordNewPass'].value
    };

    this.loginService.updatePassword(updatePassword).subscribe((data: any) => {
      if (data =! null) {
        this.forgPasswordForm.reset();
        Swal.fire({
          title: 'Contraseña actualizada con éxito',
          icon: 'success',
          showConfirmButton: true,
          confirmButtonText: 'Cerrar',
        })
        this.forgPasswordRouter.navigate(['/iniciar-sesion'])
      }
    });
  }

}
