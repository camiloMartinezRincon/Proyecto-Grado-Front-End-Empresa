import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private endPoint = "http://localhost:8080/api/company";
  httpOptions = {
    headers: new HttpHeaders({
      "Content.Type": "application/json",
      Accept: "application/json",
    }),
  };

  constructor(private http: HttpClient) { }

  // to see errors in a cute way
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  //Authentication Service
  authentication(credentials: any): Observable<any> {
    return this.http.post<any>(this.endPoint + "/authentication/user", credentials, this.httpOptions);
  }

  newUser(userInf: any): Observable<any> {
    return this.http.post<any>(this.endPoint + "/new/user", userInf, this.httpOptions);
  }

  getAllProjects() {
    return this.http.get<any>(this.endPoint + '/projects/info', this.httpOptions);
  }

  getRequerimeintosOpts() {
    return this.http.get<any>(this.endPoint + '/requirements/info', this.httpOptions);
  }

  deleteProject(id: number): Observable<void> {
    return this.http.delete<any>(`${this.endPoint}/project/delete/`+id);
  }

  createNewProject(project: any): Observable<Project> {
    return this.http.post<any>(`${this.endPoint}/new/project`, project);
  }

  createNewRequirement(requirement: any): Observable<Project> {
    return this.http.post<any>(`${this.endPoint}/new/requirement`, requirement);
  }
}
