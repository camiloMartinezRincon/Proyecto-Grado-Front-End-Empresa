import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/models/proyectos.model';

import { RestServicesService } from 'src/app/services/rest-services.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.page.html',
  styleUrls: ['./proyectos.page.scss'],
})
export class ProyectosPage implements OnInit {
  projects: Proyectos[] = [];
  filtrarProyectos = '';

  constructor( private restService: RestServicesService ) { }

  ngOnInit() {
    this.restService.getProjects().subscribe( resp => this.projects = resp);
  }

  btnDelete(project: any) {
    console.log('Delete', project.project_name);
  }

  onSearchChange( event ) {
    const texto = event.target.value;
    this.filtrarProyectos = texto;
  }
}
