import { Pipe, PipeTransform } from '@angular/core';

import { Entregas } from 'src/app/models/entregas.model';

@Pipe({
  name: 'filtroEntregas'
})
export class FiltroEntregasPipe implements PipeTransform {

  transform( entregas: Entregas[], texto: string): Entregas[] {

    if(texto.length === 0) {
      return entregas;
    }

    texto = texto.toLocaleLowerCase();

    return entregas.filter( entrega => {
      return entrega.nombre_proyecto.toLocaleLowerCase().includes(texto);
    });

  }

}
