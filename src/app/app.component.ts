import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre = 'Miguel';
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;

  persona = {
    nombre: "Miguel",
    apellido: "Fuentes",
    edad: 27,
    direccion:{
      calle: "Sotomayor",
      casa: "525"
    }
  };

  valorDePromesa = new Promise(  ( resolve, reject ) => {

      setTimeout( () => resolve('LLegó la info!'), 3500 );

    });

    fecha = new Date();
    nombre2 = "jOrgE ANtoniO Perez domingueZ";
    video = "1JLUn2DFW4w";

    activar:boolean = true;

}
