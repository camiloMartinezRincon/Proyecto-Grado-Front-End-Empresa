import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { RestServicesService } from 'src/app/services/rest-services.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.page.html',
  styleUrls: ['./proyectos.page.scss'],
})
export class ProyectosPage implements OnInit {
  projects: Observable <any>;

  constructor( private restService: RestServicesService, private navCtrl: NavController ) { }

  ngOnInit() {
    this.projects = this.restService.getProjects();
  }

  btnDelete(project: any) {
    console.log('Delete', project.project_name);
  }

  dataFilter() {
    console.log("filtroooo");
  }
}
