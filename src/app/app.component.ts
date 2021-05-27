import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MenuComponents } from './interfaces/interfaces';
import { RestServicesService } from './services/rest-services.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  menuOpts: Observable<MenuComponents[]>;

  constructor(private restService: RestServicesService) { }

  ngOnInit() { 
    this.menuOpts = this.restService.getMenuOpts();
  }
}
