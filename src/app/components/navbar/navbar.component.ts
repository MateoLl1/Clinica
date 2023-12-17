// navbar.component.ts
import { Component } from '@angular/core';
import { ClinicaService } from 'src/app/services/clinica.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  especialidadesMed: any[] = [];
  constructor(private clinicaSe: ClinicaService) {
    clinicaSe.getEspecialidadesMedicas().subscribe((data: any) => {
      this.especialidadesMed = data;
    });
  }
}
