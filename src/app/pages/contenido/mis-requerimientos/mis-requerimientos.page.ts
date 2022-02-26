import { Component, OnInit } from '@angular/core';


import { Requirement } from 'src/app/models/requirement';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-mis-requerimientos',
  templateUrl: './mis-requerimientos.page.html',
  styleUrls: ['./mis-requerimientos.page.scss'],
})
export class MisRequerimientosPage implements OnInit {
  private requerimientos: any;
  filtrarRequerimientos = '';

  constructor( private restService: ProjectService ) { }

  ngOnInit() {
    this.requerimientos = this.restService.getRequerimeintosOpts();
  }

  btnDelete(requerimiento: any) {
    console.log('borrarr', requerimiento);
  }

  onSearchChange( event ) {
    const texto = event.target.value;
    this.filtrarRequerimientos = texto;
  }

}
