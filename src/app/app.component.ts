import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { MenuComponents } from './models/menu.model';
import { RestServicesService } from './services/rest-services.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  menuOpts: MenuComponents[] = [];

  constructor(private restService: RestServicesService, private router: Router) { }

  ngOnInit() {
    this.restService.getMenuOpts().subscribe(resp => this.menuOpts = resp);
  }
  closeSession(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
