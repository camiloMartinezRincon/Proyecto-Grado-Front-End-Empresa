import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisRequerimientosPage } from './mis-requerimientos.page';

const routes: Routes = [
  {
    path: '',
    component: MisRequerimientosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisRequerimientosPageRoutingModule {}
