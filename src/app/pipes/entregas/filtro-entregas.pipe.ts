import { Pipe, PipeTransform } from '@angular/core';


import { ProjectDelivery } from 'src/app/models/project-delivery';

@Pipe({
  name: 'filtroEntregas'
})
export class FiltroEntregasPipe implements PipeTransform {

  transform( entregas: ProjectDelivery[], texto: string): ProjectDelivery[] {

    if(texto.length === 0) {
      return entregas;
    }

    texto = texto.toLocaleLowerCase();

    return entregas.filter( entrega => {
      return entrega.projectName.toLocaleLowerCase().includes(texto);
    });

  }

}
