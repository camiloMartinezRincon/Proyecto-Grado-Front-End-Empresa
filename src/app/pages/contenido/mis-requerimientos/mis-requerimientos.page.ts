import { Component, OnInit } from '@angular/core';

import { Requerimientos } from 'src/app/models/requerimientos.model';
import { RestServicesService } from 'src/app/services/rest-services.service';

@Component({
  selector: 'app-mis-requerimientos',
  templateUrl: './mis-requerimientos.page.html',
  styleUrls: ['./mis-requerimientos.page.scss'],
})
export class MisRequerimientosPage implements OnInit {
  requerimientos: Requerimientos[] = [];
  filtrarRequerimientos = '';

  constructor( private restService: RestServicesService ) { }

  ngOnInit() {
    this.restService.getRequerimientos().subscribe( resp => this.requerimientos = resp );
  }

  btnDelete(requerimiento: any) {
    console.log('borrarr', requerimiento);
  }

  onSearchChange( event ) {
    const texto = event.target.value;
    this.filtrarRequerimientos = texto;
  }

}
