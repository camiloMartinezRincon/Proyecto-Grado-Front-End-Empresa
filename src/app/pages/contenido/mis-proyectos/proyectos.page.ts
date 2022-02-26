import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.page.html',
  styleUrls: ['./proyectos.page.scss'],
})
export class ProyectosPage implements OnInit {
  projects: Project;
  filtrarProyectos = '';

  constructor( private projectService: ProjectService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.projectService.getAllProjects().subscribe( (resp: any) => {
      this.projects = resp;
    },
    (error) => {
      console.log(error);
    }
    );
  }



  btnDelete(project: any): void {
    Swal.fire({
      title: '¿Estas seguro?',
      text: '¿Seguro que deseas eliminar el proyecto:' + project.projectName + 'del cliente' + project.clientName+'?',
      icon: 'question',
      showConfirmButton: true,
      confirmButtonText: 'Si, eliminar',
      showCancelButton: true,
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      console.log('nUm',project.projectId)
        this.projectService.deleteProject(project.projectId).subscribe((data: any) => {
            console.log('Procesado');
            this.ngOnInit();
        });


    });
  }

  onSearchChange( event ) {
    const texto = event.target.value;
    this.filtrarProyectos = texto;
  }
}
