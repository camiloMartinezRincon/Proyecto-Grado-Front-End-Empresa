import { Pipe, PipeTransform } from '@angular/core';
import { Project } from 'src/app/models/project';

@Pipe({
  name: 'filtroProyectos'
})
export class FiltroProyectosPipe implements PipeTransform {

  transform( proyectos: Project[], texto: string): Project[] {

    if(texto.length === 0) {
      return proyectos;
    }

    texto = texto.toLocaleLowerCase();

    return proyectos.filter( proyecto => {
      return proyecto.projectName.toLocaleLowerCase().includes(texto) || proyecto.clientName.toLocaleLowerCase().includes(texto);
    });

  }

}
