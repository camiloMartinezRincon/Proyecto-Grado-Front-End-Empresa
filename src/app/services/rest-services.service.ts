import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestServicesService {

  constructor(  private http: HttpClient) { }

  getProjects() {
    return this.http.get('http://localhost:3000/projects');
  }
}
