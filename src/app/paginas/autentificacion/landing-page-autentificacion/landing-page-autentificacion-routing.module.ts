import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageAutentificacionPage } from './landing-page-autentificacion.page';

const routes: Routes = [
  {
    path: '',
    component: LandingPageAutentificacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageAutentificacionPageRoutingModule {}
