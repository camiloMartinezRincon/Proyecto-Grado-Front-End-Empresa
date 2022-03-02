import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProjectService } from 'src/app/services/project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})

export class IniciarSesionPage implements OnInit {
  logForm: FormGroup;
  isSubmited = false;

  constructor(private formBuilder: FormBuilder, private alertLogInController: AlertController, private logRouter: Router, private authenticationService: ProjectService) { }

  ngOnInit() {
    this.logForm = this.formBuilder.group({
      logEmail: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      logPassword: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(8)]]
    });
  }

  submitLogForm() {

    let projectInfo = {
      corpUserEmail: this.logForm.controls['logEmail'].value,
      userPassword: this.logForm.controls['logPassword'].value,
    };

    this.authenticationService.authentication(projectInfo).subscribe((data: any) => {
      if (data == "ACCEPTED") {
        localStorage.setItem('userEmail', projectInfo.corpUserEmail);
        console.log('Procesado');
        this.logRouter.navigate(['/proyectos']);
      } else {
        Swal.fire({
          title: 'Credenciales Erroneas',
          text: 'Confirma tus datos',
          icon: 'error',
          showConfirmButton: true,
          confirmButtonText: 'Cerrar',
        })
      }
    });
  }
}
