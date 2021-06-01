import { Pipe, PipeTransform } from '@angular/core';
import { Proyectos } from 'src/app/models/proyectos.model';

@Pipe({
  name: 'filtroProyectos'
})
export class FiltroProyectosPipe implements PipeTransform {

  transform( proyectos: Proyectos[], texto: string): Proyectos[] {

    if(texto.length === 0) {
      return proyectos;
    }

    texto = texto.toLocaleLowerCase();

    return proyectos.filter( proyecto => {
      return proyecto.project_name.toLocaleLowerCase().includes(texto) || proyecto.client_name.toLocaleLowerCase().includes(texto);
    });

  }

}
