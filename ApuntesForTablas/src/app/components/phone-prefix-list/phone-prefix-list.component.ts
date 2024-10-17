import { Component } from '@angular/core';

export interface CountryPhone {
  nombrePais: string;
  bandera: string;
  prefijo: number[];
}
const PREFIJOS_PAISES: CountryPhone[] = [
 {nombrePais: 'España', bandera: "spain/spain_640.png", prefijo: [34]},
 {nombrePais: 'Republica Dominicana', bandera: "dominican_republic/dominican_republic_640.png", prefijo: [809, 829, 849]}
];
@Component({
  selector: 'app-phone-prefix-list',
  templateUrl: './phone-prefix-list.component.html',
  styleUrl: './phone-prefix-list.component.css'
})
export class PhonePrefixListComponent {
  listaTelefonosPaises = PREFIJOS_PAISES
  getImagenBandera(bandera: string){
    return '´https://img.freeflagicons.com/thumb/round_icon/${bandera}´';
  }
}
