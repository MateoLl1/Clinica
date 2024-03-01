import { Component } from '@angular/core';
import { ClinicaService } from 'src/app/services/clinica.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-citas-asignadas-pacientes',
  templateUrl: './citas-asignadas-pacientes.component.html',
  styleUrls: ['./citas-asignadas-pacientes.component.css'],
})
export class CitasAsignadasPacientesComponent {
  idPaciente: number | null = null;
  citasPaciente: any[] = [];
  fechaDeHoy: String = '';
  constructor(
    private clinicaSe: ClinicaService,
    private helper: HelperService
  ) {
    this.fechaDeHoy = helper.cargarFechadeHoy();
  }
  obtenerId(id: number) {
    this.idPaciente = id;
    this.cargarCitas();
  }

  cargarCitas() {
    if (!this.idPaciente === null) return;
    this.clinicaSe
      .cargarCitasPorPaciente({ id: this.idPaciente })
      .subscribe((data: any) => {
        console.log(data);
        this.citasPaciente = data;
      });
  }
}
