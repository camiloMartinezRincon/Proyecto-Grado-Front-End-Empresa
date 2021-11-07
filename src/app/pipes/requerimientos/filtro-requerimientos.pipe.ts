import { Pipe, PipeTransform } from '@angular/core';
import { Requirement } from 'src/app/models/requirement';

@Pipe({
  name: 'filtroRequerimientos'
})
export class FiltroRequerimientosPipe implements PipeTransform {

  transform( requerimientos: Requirement[], texto: string): Requirement[] {

    if(texto.length === 0) {
      return requerimientos;
    }

    texto = texto.toLocaleLowerCase();

    return requerimientos.filter( requerimiento => {
      return requerimiento.projectName.toLocaleLowerCase().includes(texto) || requerimiento.type.toLocaleLowerCase().includes(texto);
    });

  }

}
