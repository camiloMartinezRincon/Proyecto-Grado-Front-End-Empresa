import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MisEntregasPageRoutingModule } from './mis-entregas-routing.module';
import { MisEntregasPage } from './mis-entregas.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisEntregasPageRoutingModule,
    PipesModule
  ],
  declarations: [MisEntregasPage]
})
export class MisEntregasPageModule {}
