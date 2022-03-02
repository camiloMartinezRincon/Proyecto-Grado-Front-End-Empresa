import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { Requirement } from 'src/app/models/requirement';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-mis-requerimientos',
  templateUrl: './mis-requerimientos.page.html',
  styleUrls: ['./mis-requerimientos.page.scss'],
})
export class MisRequerimientosPage implements OnInit {
  public requerimientos: any;
  filtrarRequerimientos = '';

  constructor( private restService: ProjectService ) { }

  ngOnInit() {
    this.restService.getRequerimeintosOpts().subscribe((resp: any) => {
      const projects = resp;
      const email = localStorage.getItem('userEmail');
      console.log('user', email);
      this.requerimientos = projects.filter(p => p.requerement_usermail == email);
      if(this.requerimientos.length == 0){
        Swal.fire({
          title: 'Sin requerimientos',
          text: 'No has realizado ningún requerimientos',
          icon: 'warning',
          showConfirmButton: true,
          confirmButtonText: 'Cerrar',
        })
      }
    });
  }

  btnDelete(requerimiento: any) {
    Swal.fire({
      title: '¿Estas seguro?',
      text: '¿Seguro que deseas eliminar el requerimiento:' + requerimiento.requirementTitle + 'del cliente' + requerimiento.requerement_usermail + '?',
      icon: 'question',
      showConfirmButton: true,
      confirmButtonText: 'Si, eliminar',
      showCancelButton: true,
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      console.log('nUm', requerimiento.projectId)
      this.restService.deleteRequirement(requerimiento.requirementId).subscribe((data: any) => {
        console.log('Procesado');
        this.ngOnInit();
      });


    });
  }

}
