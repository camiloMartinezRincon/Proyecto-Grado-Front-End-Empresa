import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectDelivery } from 'src/app/models/project-delivery';
import { RestServicesService } from 'src/app/services/rest-services.service';
import { ProjectService } from 'src/app/services/project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mis-entregas',
  templateUrl: './mis-entregas.page.html',
  styleUrls: ['./mis-entregas.page.scss'],
})
export class MisEntregasPage implements OnInit {
  entregas: ProjectDelivery[] = [];
  filtrarEntregas = '';

  constructor(private restService: ProjectService) { 
    this.restService.getDeliveries().subscribe((resp: any) => {
      const projects = resp;
      const email = localStorage.getItem('userEmail');
      console.log('user', email);
      this.entregas = projects.filter(p => p.clientEmail == email);
      if(this.entregas.length == 0){
        Swal.fire({
          title: 'Sin entregas',
          text: 'No tienes entregas programadas',
          icon: 'warning',
          showConfirmButton: true,
          confirmButtonText: 'Cerrar',
        })
      }
    });
  }

  ngOnInit() { }

  btnDelete(entrega: any) {
    Swal.fire({
      title: '¿Estas seguro?',
      text: '¿Seguro que deseas la entrega del proyecto:' + entrega.ProyectoUser + 'del cliente' + entrega.clientEmail + '?',
      icon: 'question',
      showConfirmButton: true,
      confirmButtonText: 'Si, eliminar',
      showCancelButton: true,
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      console.log('nUm', entrega.projectId)
      this.restService.deleteProjectDelivery(entrega.projectDeliveryId).subscribe((data: any) => {
        console.log('Procesado');
        this.ngOnInit();
      });


    });
  }

  onSearchChange( event ) {
    const texto = event.target.value;
    this.filtrarEntregas = texto;
  }
}
