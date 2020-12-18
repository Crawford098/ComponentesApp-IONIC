import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string = '', data:string = ''): any[] {
    
    if(texto === ''){
      return arreglo;
    }
      
    if(!arreglo){
      return arreglo;
    }

    texto = texto.toLocaleLowerCase();

    if(texto === 'todos'){
      return arreglo;
    }


    return arreglo.filter(
      item => item[data].toLowerCase().includes(texto)
    );

  }

}
