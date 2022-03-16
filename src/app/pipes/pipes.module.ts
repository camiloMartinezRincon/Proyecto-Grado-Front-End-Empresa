import { NgModule } from '@angular/core';
import { FiltroCotizacionesPipe } from './cotizaciones/filtro-cotizaciones.pipe';

import { FiltroEntregasPipe } from './entregas/filtro-entregas.pipe';
import { FiltroProyectosPipe } from './proyectos/filtro-proyectos.pipe';
import { FiltroRequerimientosPipe } from './requerimientos/filtro-requerimientos.pipe';



@NgModule({
  declarations: [
    FiltroEntregasPipe,
    FiltroProyectosPipe,
    FiltroRequerimientosPipe,
    FiltroCotizacionesPipe
  ],
  exports: [
    FiltroEntregasPipe,
    FiltroProyectosPipe,
    FiltroRequerimientosPipe,
    FiltroCotizacionesPipe
  ]
})
export class PipesModule { }
