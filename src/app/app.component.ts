import { Component, OnInit } from '@angular/core';

import { MenuComponents } from './models/menu.model';
import { RestServicesService } from './services/rest-services.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  menuOpts: MenuComponents[] = [];

  constructor(private restService: RestServicesService) { }

  ngOnInit() {
    this.restService.getMenuOpts().subscribe(resp => this.menuOpts = resp);
  }
}
