import { Component, OnInit } from '@angular/core';


import { Requirement } from 'src/app/models/requirement';
import { RestServicesService } from 'src/app/services/rest-services.service';

@Component({
  selector: 'app-mis-requerimientos',
  templateUrl: './mis-requerimientos.page.html',
  styleUrls: ['./mis-requerimientos.page.scss'],
})
export class MisRequerimientosPage implements OnInit {
  requerimientos: Requirement[] = [];
  filtrarRequerimientos = '';

  constructor( private restService: RestServicesService ) { }

  ngOnInit() {}

  btnDelete(requerimiento: any) {
    console.log('borrarr', requerimiento);
  }

  onSearchChange( event ) {
    const texto = event.target.value;
    this.filtrarRequerimientos = texto;
  }

}
