import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { RestServicesService } from 'src/app/services/rest-services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  usuarios: Observable<any>;

  name:string = localStorage.getItem('userName');
  lastname:string = localStorage.getItem('userLastname');
  email:string = localStorage.getItem('userEmail');

  constructor( private restService: RestServicesService ) { }

  ngOnInit() {

  }
}
