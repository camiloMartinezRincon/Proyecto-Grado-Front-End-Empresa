import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearCatalogoServiciosPageRoutingModule } from './crear-catalogo-servicios-routing.module';

import { CrearCatalogoServiciosPage } from './crear-catalogo-servicios.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CrearCatalogoServiciosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CrearCatalogoServiciosPage]
})
export class CrearCatalogoServiciosPageModule {}
