import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer ){ }
  // value: codigo video de youtube, y un parametro url segura que solicito
  transform( value: string, url: string): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  }

}
