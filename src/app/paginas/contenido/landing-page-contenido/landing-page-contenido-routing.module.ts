import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageContenidoPage } from './landing-page-contenido.page';

const routes: Routes = [
  {
    path: '',
    component: LandingPageContenidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageContenidoPageRoutingModule {}
