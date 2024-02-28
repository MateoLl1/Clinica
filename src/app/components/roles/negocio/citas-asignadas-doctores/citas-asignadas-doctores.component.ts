import { Component } from '@angular/core';
import { ClinicaService } from '../../../../services/clinica.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-citas-asignadas-doctores',
  templateUrl: './citas-asignadas-doctores.component.html',
  styleUrls: ['./citas-asignadas-doctores.component.css'],
})
export class CitasAsignadasDoctoresComponent {
  fechaActual: string = '';
  especilidades: any[] = [];
  doctores: any[] = [];
  citas: any[] = [];

  especialidad: any = {};
  doctor: any = {};

  constructor(private clinicaSe: ClinicaService) {
    this.cargarFecha();
    this.cargarEspecialidades();
  }

  eliminarCita(item: any) {
    console.log(item);
    const objData = {
      id: item.ag_id,
    };
    this.clinicaSe.eliminarCitaMedica(objData).subscribe((data: any) => {
      data
        ? (Swal.fire('Cita eliminada', '', 'success'),
          setTimeout(() => {
            location.reload();
          }, 1000))
        : Swal.fire('Error al eliminar', '', 'error');
    });
  }

  cargarFecha() {
    const fechaHoy: Date = new Date();
    const año: number = fechaHoy.getFullYear();
    const mes: string = (fechaHoy.getMonth() + 1).toString().padStart(2, '0');
    const dia: string = fechaHoy.getDate().toString().padStart(2, '0');

    const fechaFormateada: string = `${año}-${mes}-${dia}`;
    this.fechaActual = fechaFormateada;
  }

  cargandoCitasDelDoctor(item: any) {
    this.doctor = item;
    const objData = {
      dr_id: this.doctor.em_id,
      sp_id: this.especialidad.sp_me_id,
    };
    this.clinicaSe.cargarCitasPorDoctor(objData).subscribe((data: any) => {
      console.log(data);
      this.citas = data;
    });
  }

  cargarEspecialidades() {
    this.clinicaSe.getEspecialidadesMedicas().subscribe((data: any) => {
      this.especilidades = data;
    });
  }

  cargarDoctores(item: any) {
    this.especialidad = item;
    const objData = {
      id: item.sp_me_id,
    };
    this.clinicaSe
      .buscarMedicosPorEspecialidad(objData)
      .subscribe((data: any) => {
        this.doctores = data;
      });
  }
}
