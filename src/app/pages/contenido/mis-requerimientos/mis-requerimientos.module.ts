import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MisRequerimientosPageRoutingModule } from './mis-requerimientos-routing.module';
import { MisRequerimientosPage } from './mis-requerimientos.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisRequerimientosPageRoutingModule,
    PipesModule
  ],
  declarations: [MisRequerimientosPage]
})
export class MisRequerimientosPageModule {}
