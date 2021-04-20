import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPageContenidoPageRoutingModule } from './landing-page-contenido-routing.module';

import { LandingPageContenidoPage } from './landing-page-contenido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingPageContenidoPageRoutingModule
  ],
  declarations: [LandingPageContenidoPage]
})
export class LandingPageContenidoPageModule {}
