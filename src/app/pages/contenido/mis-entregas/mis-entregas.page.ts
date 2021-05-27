import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RestServicesService } from 'src/app/services/rest-services.service';

@Component({
  selector: 'app-mis-entregas',
  templateUrl: './mis-entregas.page.html',
  styleUrls: ['./mis-entregas.page.scss'],
})
export class MisEntregasPage implements OnInit {
  entregas: Observable<any>;

  constructor(private restService: RestServicesService) { }

  ngOnInit() {
    this.entregas = this.restService.getProgEntregas();
  }

}
