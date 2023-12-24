// navbar.component.ts
import { Component, numberAttribute } from '@angular/core';
import { Router } from '@angular/router';
import { ClinicaService } from 'src/app/services/clinica.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  especialidadesMed: any[] = [];
  constructor(private clinicaSe: ClinicaService, private router: Router) {
    clinicaSe.getEspecialidadesMedicas().subscribe((data: any) => {
      this.especialidadesMed = data;
    });
  }

  navegarEspecialidad(id: number) {
    console.log(id);
    this.router.navigate([`/especialidad/${id}`]);
  }
}
