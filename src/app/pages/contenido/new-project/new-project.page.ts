import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.page.html',
  styleUrls: ['./new-project.page.scss'],
})
export class NewProjectPage implements OnInit {
  newProjForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.newProjForm = this.formBuilder.group({
      projID: ['', [Validators.required, Validators.maxLength(8)]],
      projName: ['', [Validators.required]],
      servicio: ['', [Validators.required]],
      clientName: ['', [Validators.required]],
      clientMail: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      txtAreaDescription: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]]
    }); 
  }

  crearNuevoProyecto() {
    console.log("Evento!");
  }

}
