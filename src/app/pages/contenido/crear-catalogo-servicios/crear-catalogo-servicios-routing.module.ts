import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearCatalogoServiciosPage } from './crear-catalogo-servicios.page';

const routes: Routes = [
  {
    path: '',
    component: CrearCatalogoServiciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearCatalogoServiciosPageRoutingModule {}
