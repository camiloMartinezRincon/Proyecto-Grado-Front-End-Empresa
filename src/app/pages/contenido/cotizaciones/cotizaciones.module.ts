import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CotizacionesPageRoutingModule } from './cotizaciones-routing.module';

import { CotizacionesPage } from './cotizaciones.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CotizacionesPageRoutingModule,
    PipesModule,
    ComponentsModule
  ],
  declarations: [CotizacionesPage]
})
export class CotizacionesPageModule {}
