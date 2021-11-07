import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

import { RestServicesService } from 'src/app/services/rest-services.service';

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
      projCode: ['', [Validators.required]],
      proyecto: ['', [Validators.required]],
      prioridadRequerimiento: ['', [Validators.required]],
      ResumenRequerimiento: ['', [Validators.required]],
      descripcionRequerimiento: ['', [Validators.required]]
    });

    this.projectService.getAllProjects().subscribe( (resp: any) => {
      this.projects = resp;
    },
    (error) => {
      console.log(error);
    } 
    );

    this.requerimientosOpts = this.restService.getRequerimeintosOpts();
    this.prioridadesOpts = this.restService.getPrioridad();
  }

  nuevoRequerimiento() {
    console.log('Requerimiento');
  }

}
