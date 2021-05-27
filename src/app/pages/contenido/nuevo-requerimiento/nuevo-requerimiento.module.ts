import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NuevoRequerimientoPageRoutingModule } from './nuevo-requerimiento-routing.module';
import { NuevoRequerimientoPage } from './nuevo-requerimiento.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NuevoRequerimientoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NuevoRequerimientoPage]
})
export class NuevoRequerimientoPageModule {}
