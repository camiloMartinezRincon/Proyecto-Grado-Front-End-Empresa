import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import Swal from 'sweetalert2';
import { RestServicesService } from 'src/app/services/rest-services.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nuevo-requerimiento',
  templateUrl: './nuevo-requerimiento.page.html',
  styleUrls: ['./nuevo-requerimiento.page.scss'],
})
export class NuevoRequerimientoPage implements OnInit {
  requerimientosOpts: Observable<any>;
  prioridadesOpts: Observable<any>;
  projects: Project[] = [];
  nuevoRequerimientoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private restService: RestServicesService, private projectService: ProjectService) { }

  ngOnInit() {
    this.nuevoRequerimientoForm = this.formBuilder.group({
      tipoRequerimiento: ['', [Validators.required]],
      requerimientoCode: ['', [Validators.required, Validators.maxLength(8)]],
      proyecto: ['', [Validators.required]],
      prioridadRequerimiento: ['', [Validators.required]],
      ResumenRequerimiento: ['', [Validators.required]],
      descripcionRequerimiento: ['', [Validators.required]]
    });

    this.projectService.getAllProjects().subscribe( (resp: any) => {
      this.projects = resp;
    }
    );

    this.requerimientosOpts = this.restService.getRequerimeintosOpts();
    this.prioridadesOpts = this.restService.getPrioridad();
  }

  nuevoRequerimiento() {

    let requirementInf = {
      requirementCode: this.nuevoRequerimientoForm.controls['requerimientoCode'].value,
      requirementType: this.nuevoRequerimientoForm.controls['tipoRequerimiento'].value,
      projectName:this.nuevoRequerimientoForm.controls['proyecto'].value,
      requirementTitle:this.nuevoRequerimientoForm.controls['ResumenRequerimiento'].value,
      requirementPriority:this.nuevoRequerimientoForm.controls['prioridadRequerimiento'].value,
      requirementDescription:this.nuevoRequerimientoForm.controls['descripcionRequerimiento'].value,
      requerement_usermail:localStorage.getItem('userEmail')
    };

    this.projectService.createNewRequirement(requirementInf).subscribe((data: any) => {
      if (data =! null) {
        console.log('Procesado');
        RouterLink['/mis-requerimientos'];
      }else{
        Swal.fire({
          title: 'Error creación',
          icon: 'error',
          showConfirmButton: true,
          confirmButtonText: 'Cerrar',
        })
      }
    });

  }

}
