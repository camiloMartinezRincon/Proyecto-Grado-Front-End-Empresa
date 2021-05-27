import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisEntregasPage } from './mis-entregas.page';

const routes: Routes = [
  {
    path: '',
    component: MisEntregasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisEntregasPageRoutingModule {}
