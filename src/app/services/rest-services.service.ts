import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Entregas } from '../models/entregas.model';
import { MenuComponents } from '../models/menu.model';
import { Proyectos } from '../models/proyectos.model';
import { Requerimientos } from '../models/requerimientos.model';

@Injectable({
  providedIn: 'root'
})
export class RestServicesService {

  constructor(  private http: HttpClient) { }

  getProjects() {
    return this.http.get<Proyectos[]>('http://localhost:3000/projects');
  }

  getProgEntregas() {
    return this.http.get<Entregas[]>('http://localhost:3000/entregas');
  }

  getRequerimientos() {
    return this.http.get<Requerimientos[]>('http://localhost:3000/requerimientos');
  }

  getUsuarios() {
    return this.http.get('http://localhost:3000/usuarios')
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
