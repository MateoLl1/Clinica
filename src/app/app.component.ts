import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Integrador';

  lista : any[] = [
    {
      nombre: 'Carlos',
      apellido: 'Cevallos',
      edad: 20,
    },
    {
      nombre: 'Juan',
      apellido: 'Cevallos',
      edad: 20,
    },
    {
      nombre: 'David',
      apellido: 'Cevallos',
      edad: 20,
    },
    {
      nombre: 'Fari',
      apellido: 'Cevallos',
      edad: 20,
    },
  ];
}
