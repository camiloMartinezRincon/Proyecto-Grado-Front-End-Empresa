import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProjectService } from 'src/app/services/project.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registerForm: FormGroup;
  isSubmited = false;

  constructor(private formBuilder: FormBuilder, private alertRegisterController: AlertController, private regRouter: Router, private loginService: ProjectService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      regName: ['', [Validators.required]],
      regLastName: ['', [Validators.required]],
      regEmail: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      regPassword: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(8)]],
      regRePassword: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(8)]]
    });
  }
   submitRegisterForm() {
    let register = {
      userName: this.registerForm.controls['regName'].value,
      userLastname: this.registerForm.controls['regLastName'].value,
      corpUserEmail: this.registerForm.controls['regEmail'].value,
      userPassword: this.registerForm.controls['regPassword'].value,
    };

    this.loginService.newUser(register).subscribe((data: any) => {
      if (data =! null) {
        this.registerForm.reset();
        Swal.fire({
          title: 'Usuario creado con éxito',
          icon: 'success',
          showConfirmButton: true,
          confirmButtonText: 'Cerrar',
        })
        this.regRouter.navigate(['/iniciar-sesion'])
      }
    });
  }
  confirmPassword() {

  }
}
