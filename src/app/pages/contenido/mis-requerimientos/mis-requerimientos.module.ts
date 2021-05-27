import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MisRequerimientosPageRoutingModule } from './mis-requerimientos-routing.module';
import { MisRequerimientosPage } from './mis-requerimientos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisRequerimientosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MisRequerimientosPage]
})
export class MisRequerimientosPageModule {}
