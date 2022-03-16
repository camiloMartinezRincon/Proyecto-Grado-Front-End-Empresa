import { Component, OnInit } from '@angular/core';
import { Cotizaciones } from 'src/app/models/cotizaciones.model';
import { ProjectService } from 'src/app/services/project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.page.html',
  styleUrls: ['./cotizaciones.page.scss'],
})
export class CotizacionesPage implements OnInit {
  cotizaciones: Cotizaciones[] = [];
  filtrarCotizaciones = '';

  constructor(private restService: ProjectService) { 
    this.restService.getCotizaciones().subscribe((resp: any) => {
      this.cotizaciones = resp;
      if (this.cotizaciones.length == 0) {
        Swal.fire({
          title: 'Sin cotizaciones',
          text: 'No has creado ninguna cotizacion',
          icon: 'warning',
          showConfirmButton: true,
          confirmButtonText: 'Cerrar',
        })
      }

    },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() { }

    btnDelete(cotizacion: any): void {
    Swal.fire({
      title: '¿Estas seguro?',
      text: '¿Seguro que deseas eliminar la cotizacion:' + cotizacion.cotizacionId + '?',
      icon: 'question',
      showConfirmButton: true,
      confirmButtonText: 'Si, eliminar',
      showCancelButton: true,
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      console.log('nUm', cotizacion.cotizacionId)
      this.restService.deleteCotizacion(cotizacion.cotizacionId).subscribe((data: any) => {
        console.log('Procesado');
        this.ngOnInit();
      });


    });
  }

  onSearchChange( event ) {
    const texto = event.target.value;
    this.filtrarCotizaciones = texto;
  }

}
