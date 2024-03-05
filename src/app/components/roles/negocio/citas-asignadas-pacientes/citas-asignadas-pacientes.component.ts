import { Component } from '@angular/core';
import { ClinicaService } from 'src/app/services/clinica.service';
import { HelperService } from 'src/app/services/helper.service';
import Swal from 'sweetalert2';

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

  eliminarCita(item: any) {
    console.log(item);
    this.clinicaSe
      .eliminarCitaMedica({ id: item.ag_id })
      .subscribe((data: any) => {
        data
          ? (Swal.fire('Eliminado', 'Cita eliminada correctamente', 'success'),
            setTimeout(() => {
              location.reload();
            }, 1000))
          : Swal.fire('Error al eliminar', '', 'error');
      });
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
