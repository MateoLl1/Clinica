import { Component } from '@angular/core';
import { ClinicaService } from 'src/app/services/clinica.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  noticias: any[] = [];

  constructor(private clinicaSe: ClinicaService) {
    clinicaSe.getNoticias().subscribe((data: any) => {
      this.noticias = data;
    });
  }
}
