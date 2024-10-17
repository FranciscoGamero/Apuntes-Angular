import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  // 1. Property binding (Pasar del componente al html) (One way)
  valorancion = 5;
  imgUrl = 'https://edicom.mx/dam/jcr:1d5f0f0a-a59b-46a0-88e9-3f653ba3fc3c/mercadona_integration.png';

  //2. Event binding (Pasar del html al componente) (One way)
showUserInfo() {
  alert(`Usuario: ${this.nombre}`);
  }

  // 3. Two way data binding

  nombre = 'Miguel';
}
