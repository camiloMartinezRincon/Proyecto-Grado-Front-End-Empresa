import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.page.html',
  styleUrls: ['./new-project.page.scss'],
})
export class NewProjectPage implements OnInit {
  newProjForm: FormGroup;
  project = new Project();

  constructor(private formBuilder: FormBuilder,
              private alertCtrl: AlertController,
              private projectService: ProjectService,
              private router: Router) { }

  ngOnInit() {
    this.newProjForm = this.formBuilder.group({
      projCode: ['', [Validators.required, Validators.maxLength(8)]],
      projName: ['', [Validators.required]],
      servicio: ['', [Validators.required]],
      clientName: ['', [Validators.required]],
      clientMail: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      txtAreaDescription: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]]
    });
  }

  crearNuevoProyecto(newProjForm): void {
    let projectInfo = {
      projectCode: this.newProjForm.controls['projCode'].value,
      projectName: this.newProjForm.controls['projName'].value,
      serviceType: this.newProjForm.controls['servicio'].value,
      clientName: this.newProjForm.controls['clientName'].value,
      clientEmail: this.newProjForm.controls['clientMail'].value,
      projectDescription: this.newProjForm.controls['txtAreaDescription'].value,
      startDate: this.newProjForm.controls['startDate'].value,
      endDate: this.newProjForm.controls['endDate'].value,
      //localStorage.setItem('userEmail', projectInfo.corpUserEmail);
    };

    this.projectService.createNewProject(projectInfo).subscribe((data: any) => {
      if (data != null) {
        console.log('Procesado');
        this.router.navigate(['/proyectos']);
      }
    });
  }

}
