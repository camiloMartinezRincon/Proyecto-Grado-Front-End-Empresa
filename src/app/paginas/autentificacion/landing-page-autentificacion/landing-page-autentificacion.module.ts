import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPageAutentificacionPageRoutingModule } from './landing-page-autentificacion-routing.module';

import { LandingPageAutentificacionPage } from './landing-page-autentificacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingPageAutentificacionPageRoutingModule
  ],
  declarations: [LandingPageAutentificacionPage]
})
export class LandingPageAutentificacionPageModule {}
