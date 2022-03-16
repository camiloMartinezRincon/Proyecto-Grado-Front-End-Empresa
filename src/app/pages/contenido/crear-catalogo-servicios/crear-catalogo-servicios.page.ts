import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CatalogoServicios } from 'src/app/models/catalogo-servicios.model';
import { ProjectService } from 'src/app/services/project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-catalogo-servicios',
  templateUrl: './crear-catalogo-servicios.page.html',
  styleUrls: ['./crear-catalogo-servicios.page.scss'],
})
export class CrearCatalogoServiciosPage implements OnInit {
  catalogoServiciosForm : FormGroup;

  constructor(private formBuilder: FormBuilder, private projectService: ProjectService, private router: Router) { }

  ngOnInit() { 
    this.catalogoServiciosForm = this.formBuilder.group({
      servicio: ['', [Validators.required]],
      precioServicio: ['', [Validators.required]],
      recurso: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  crearNuevoCatalogo(): void {
    let catalogoInf = {
      nombreServicio: this.catalogoServiciosForm.controls['servicio'].value,
      precioServicio: this.catalogoServiciosForm.controls['precioServicio'].value,
      descripcionServicio: this.catalogoServiciosForm.controls['recurso'].value,
      direccionRecurso: this.catalogoServiciosForm.controls['description'].value
    };
    this.projectService.createCatalogoServicios(catalogoInf).subscribe((data: any) => {
      if (data != null) {
        console.log('Procesado');
        Swal.fire({
          title: 'Catalogo Creado',
          icon: 'info',
          showConfirmButton: true,
          confirmButtonText: 'Ok',
        });
      }else{
        Swal.fire({
          title: 'Error en la  creación',
          icon: 'error',
          showConfirmButton: true,
          confirmButtonText: 'Cerrar',
        });
      }
    });

 }
}
