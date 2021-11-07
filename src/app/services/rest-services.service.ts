import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MenuComponents } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class RestServicesService {

  constructor(  private http: HttpClient) { }

  getMenuOpts() {
    return this.http.get<MenuComponents[]>('/assets/data/menu-opts.json');
  }
  
  //Don't Delete those are the options for those dropdowns.
  getRequerimeintosOpts() {
    return this.http.get('/assets/data/issue-options.json');
  }
  getPrioridad() {
    return this.http.get('/assets/data/prioridad.json');
  }
}
