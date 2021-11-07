import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectDelivery } from 'src/app/models/project-delivery';
import { RestServicesService } from 'src/app/services/rest-services.service';

@Component({
  selector: 'app-mis-entregas',
  templateUrl: './mis-entregas.page.html',
  styleUrls: ['./mis-entregas.page.scss'],
})
export class MisEntregasPage implements OnInit {
  entregas: ProjectDelivery[] = [];
  filtrarEntregas = '';

  constructor(private restService: RestServicesService) { }

  ngOnInit() {}

  btnDelete(entrega: any) {
    console.log('Delete', entrega);
  }

  onSearchChange( event ) {
    const texto = event.target.value;
    this.filtrarEntregas = texto;
  }
}
