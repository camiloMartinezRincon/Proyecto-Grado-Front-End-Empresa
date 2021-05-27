import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoRequerimientoPage } from './nuevo-requerimiento.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoRequerimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoRequerimientoPageRoutingModule {}
