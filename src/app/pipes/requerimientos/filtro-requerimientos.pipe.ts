import { Pipe, PipeTransform } from '@angular/core';
import { Requerimientos } from 'src/app/models/requerimientos.model';

@Pipe({
  name: 'filtroRequerimientos'
})
export class FiltroRequerimientosPipe implements PipeTransform {

  transform( requerimientos: Requerimientos[], texto: string): Requerimientos[] {

    if(texto.length === 0) {
      return requerimientos;
    }

    texto = texto.toLocaleLowerCase();

    return requerimientos.filter( requerimiento => {
      return requerimiento.proyecto.toLocaleLowerCase().includes(texto) || requerimiento.tipo_requerimiento.toLocaleLowerCase().includes(texto);
    });

  }

}
