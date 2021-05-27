import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { RestServicesService } from 'src/app/services/rest-services.service';

@Component({
  selector: 'app-nuevo-requerimiento',
  templateUrl: './nuevo-requerimiento.page.html',
  styleUrls: ['./nuevo-requerimiento.page.scss'],
})
export class NuevoRequerimientoPage implements OnInit {
  requerimientosOpts: Observable<any>;
  prioridadesOpts: Observable<any>;
  proyectos: Observable<any>;
  nuevoRequerimientoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private restService: RestServicesService) { }

  ngOnInit() {
    this.nuevoRequerimientoForm = this.formBuilder.group({
      tipoRequerimiento: ['', [Validators.required]],
      requerimientoID: ['', [Validators.required, Validators.maxLength(8)]],
      idProyecto: ['', [Validators.required]],
      proyecto: ['', [Validators.required]],
      prioridadRequerimiento: ['', [Validators.required]],
      ResumenRequerimiento: ['', [Validators.required]],
      descripcionRequerimiento: ['', [Validators.required]]
    });

    this.requerimientosOpts = this.restService.getRequerimeintosOpts();
    this.prioridadesOpts = this.restService.getPrioridad();
    this.proyectos = this.restService.getProjects();
  }

  nuevoRequerimiento() {
    console.log('Requerimiento');
  }

}
