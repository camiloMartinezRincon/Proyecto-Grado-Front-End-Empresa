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
  startDate = new Date();
  endDate = new Date();

  constructor(private formBuilder: FormBuilder, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.newProjForm = this.formBuilder.group({
      projID: ['', [Validators.required, Validators.maxLength(4)]],
      clientName: ['', [Validators.required]],
      clientMail: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      txtAreaDescription: ['', [Validators.required]],
      startDate: [this.startDate.toISOString(), [Validators.required]],
      endDate: [this.endDate.toISOString(), [Validators.required]]
    }); 
  }

  crearNuevoProyecto() {
    console.log("Evento!");
  }

}
