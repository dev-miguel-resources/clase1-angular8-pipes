import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas:boolean = true ): string {

    value = value.toLowerCase();

    let nombres = value.split(" ");

    if ( todas ) {
      for( let i in nombres ){
        // la primera palabra i y la primera letra de esa palabra 0
        nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
      }
    }else{
      // para la primera posición o palabra de la primera letra
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }



    return nombres.join(" ");
  }

}
