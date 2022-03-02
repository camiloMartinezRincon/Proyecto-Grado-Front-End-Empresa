import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { ProjectService } from 'src/app/services/project.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nueva-entrega',
  templateUrl: './nueva-entrega.page.html',
  styleUrls: ['./nueva-entrega.page.scss'],
})
export class NuevaEntregaPage implements OnInit {
  nuevaEntregaForm: FormGroup;
  emailDefault = localStorage.getItem('userEmail');
  projects:[];

  constructor(private formBuilder: FormBuilder, public projectService: ProjectService, public router: Router) { }

  ngOnInit() {
    this.projectService.getAllProjects().subscribe((resp: any) => {
      const projects = resp;
      const email = localStorage.getItem('userEmail');
      console.log('user', email);
      this.projects = projects.filter(p => p.clientEmail == email);
    });



    this.nuevaEntregaForm = this.formBuilder.group({
      cliNombreApellidoEntrega: ['', [Validators.required]],
      clientEntregaEmail: [this.emailDefault, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      nombreProyectoEntrega: ['', [Validators.required]],
      dateEntrega: ['', [Validators.required]],
      horaEntrega: ['', [Validators.required]],
      lugarEntrega: ['', [Validators.required]]
    });
  }

  programarNuevaEntrega() {
    let projectDelivery = {
      clientFullName: this.nuevaEntregaForm.controls['cliNombreApellidoEntrega'].value,
      clientEmail: this.nuevaEntregaForm.controls['clientEntregaEmail'].value,
      projectName: this.nuevaEntregaForm.controls['nombreProyectoEntrega'].value,
      deliveryDate: this.nuevaEntregaForm.controls['dateEntrega'].value,
      deliveryHour: this.nuevaEntregaForm.controls['horaEntrega'].value,
      deliveryPlace: this.nuevaEntregaForm.controls['lugarEntrega'].value
    };

    this.projectService.createProjectDelivery(projectDelivery).subscribe((data: any) => {
      if (data = ! null) {
        Swal.fire({
          title: 'Entrega Creada',
          text: ' En el correo registrado podrás consultar los detalles de la entrega! :) ',
          icon: 'success',
          showConfirmButton: true,
          confirmButtonText: 'Cerrar',
        })

        this.nuevaEntregaForm.reset();
        this.router.navigate(['/mis-entregas']);

      }
    });
  }

}
