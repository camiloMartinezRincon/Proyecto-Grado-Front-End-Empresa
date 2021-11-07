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
    if (newProjForm.valid) {
      this.projectService.createNewProject(this.project).subscribe( (resp: any) => {
        this.project = resp;
        this.router.navigate(['/proyectos']);
      },
      (error) => {
        console.log(error);
      } 
      );
    }
  }

}
