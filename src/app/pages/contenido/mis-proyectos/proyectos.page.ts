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

  /*
  btnDelete(project: Project): void {
    Swal.fire({
      title: '¿Estas seguro?',
      text: '¿Seguro que deseas eliminar el proyecto: ${project_name} del cliente ${client_name}?',
      icon: 'question',
      showConfirmButton: true,
      confirmButtonText: 'Si, eliminar',
      showCancelButton: true,
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if(result.value) {
        this.projectService.deleteProject(project.id).subscribe(
          () => {
            this.projects = this.projects.filter(pro => pro !== project)
            Swal.fire(
              'Proyecto Eliminado!',
              'Proyecto ${project_name} eliminado con exito',
              'success'
            )
          }
        )
      }
    });
  }
*/
  onSearchChange( event ) {
    const texto = event.target.value;
    this.filtrarProyectos = texto;
  }
}
