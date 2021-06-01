import { NgModule } from '@angular/core';

import { FiltroEntregasPipe } from './entregas/filtro-entregas.pipe';
import { FiltroProyectosPipe } from './proyectos/filtro-proyectos.pipe';
import { FiltroRequerimientosPipe } from './requerimientos/filtro-requerimientos.pipe';



@NgModule({
  declarations: [
    FiltroEntregasPipe,
    FiltroProyectosPipe,
    FiltroRequerimientosPipe
  ],
  exports: [
    FiltroEntregasPipe,
    FiltroProyectosPipe,
    FiltroRequerimientosPipe
  ]
})
export class PipesModule { }
