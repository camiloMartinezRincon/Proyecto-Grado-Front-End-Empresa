import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MenuComponents } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RestServicesService {

  constructor(  private http: HttpClient) { }

  getProjects() {
    return this.http.get('http://localhost:3000/projects');
  }

  getCotizaciones() {
    return this.http.get('http://localhost:3000/cotizaciones')
  }

  getProgEntregas() {
    return this.http.get('http://localhost:3000/entregas');
  }

  getRequerimientos() {
    return this.http.get('http://localhost:3000/requerimientos');
  }

  getMenuOpts() {
    return this.http.get<MenuComponents[]>('/assets/data/menu-opts.json');
  }

  getRequerimeintosOpts() {
    return this.http.get('/assets/data/issue-options.json');
  }
  getPrioridad() {
    return this.http.get('/assets/data/prioridad.json');
  }
}
