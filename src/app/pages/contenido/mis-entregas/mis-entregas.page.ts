import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Entregas } from 'src/app/models/entregas.model';
import { RestServicesService } from 'src/app/services/rest-services.service';

@Component({
  selector: 'app-mis-entregas',
  templateUrl: './mis-entregas.page.html',
  styleUrls: ['./mis-entregas.page.scss'],
})
export class MisEntregasPage implements OnInit {
  entregas: Entregas[] = [];
  filtrarEntregas = '';

  constructor(private restService: RestServicesService) { }

  ngOnInit() {
    this.restService.getProgEntregas().subscribe(resp => this.entregas = resp);
  }

  btnDelete(entrega: any) {
    console.log('Delete', entrega);
  }

  onSearchChange( event ) {
    const texto = event.target.value;
    this.filtrarEntregas = texto;
  }
}
