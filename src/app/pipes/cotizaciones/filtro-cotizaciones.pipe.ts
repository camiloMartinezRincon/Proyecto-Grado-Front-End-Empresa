import { Pipe, PipeTransform } from '@angular/core';

import { Cotizaciones } from 'src/app/models/cotizaciones.model';

@Pipe({
  name: 'filtroCotizaciones'
})
export class FiltroCotizacionesPipe implements PipeTransform {

  transform( cotizaciones: Cotizaciones[], texto: string): Cotizaciones[] {

    if(texto.length === 0) {
      return cotizaciones;
    }

    texto = texto.toLocaleLowerCase();

    return cotizaciones.filter( cotizacion => {
      return cotizacion.tipoServicio.toLocaleLowerCase().includes(texto);
    });

  }

}
