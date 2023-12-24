import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClinicaService } from 'src/app/services/clinica.service';

@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.css'],
})
export class EspecialidadComponent {
  idEspecialidad: number | null = null;
  especialidad: any[] = [];
  constructor(
    private active: ActivatedRoute,
    private clinicaSe: ClinicaService
  ) {
    active.params.subscribe((data: any) => {
      this.idEspecialidad = data.id;

      clinicaSe.getEspecialidadMedicaById(data).subscribe((data: any) => {
        this.especialidad = data;
      });
    });
  }
}
