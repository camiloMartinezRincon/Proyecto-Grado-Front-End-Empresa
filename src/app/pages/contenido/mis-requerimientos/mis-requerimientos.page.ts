import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RestServicesService } from 'src/app/services/rest-services.service';

@Component({
  selector: 'app-mis-requerimientos',
  templateUrl: './mis-requerimientos.page.html',
  styleUrls: ['./mis-requerimientos.page.scss'],
})
export class MisRequerimientosPage implements OnInit {
  requerimientos: Observable<any>;

  constructor( private restService: RestServicesService ) { }

  ngOnInit() {
    this.requerimientos = this.restService.getRequerimientos();
  }

  btnDelete(requerimiento: any) {
    console.log('borrarr', requerimiento);
  }

}
