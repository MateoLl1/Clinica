import { Component } from '@angular/core';
import { ClinicaService } from 'src/app/services/clinica.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-generar-cita-medica',
  templateUrl: './generar-cita-medica.component.html',
  styleUrls: ['./generar-cita-medica.component.css'],
})
export class GenerarCitaMedicaComponent {
  fechaActual: string = '';

  //? NEGOCIO USUARIO
  usuarioBuscados: any[] = [];
  especilidadesMed: any[] = [];
  doctores: any[] = [];

  //? FORMULARIO
  especialidad: any = {};
  doctor: any = {};
  paciente: any = {};
  txtFecha: string = '';
  txtHora: string = '';

  seccionBusqueda = true;
  seccionTurno = false;

  constructor(private clinicaSe: ClinicaService) {
    this.cargarEspecialidades();
    this.cargarFecha();
  }

  cargarFecha() {
    const fechaHoy: Date = new Date();
    const año: number = fechaHoy.getFullYear();
    const mes: string = (fechaHoy.getMonth() + 1).toString().padStart(2, '0');
    const dia: string = fechaHoy.getDate().toString().padStart(2, '0');

    const fechaFormateada: string = `${año}-${mes}-${dia}`;
    this.fechaActual = fechaFormateada;
  }

  objetoNoVacio(obj: any): boolean {
    if (obj === null || obj === undefined) {
      return false;
    }
    return Object.keys(obj).length !== 0;
  }

  validaciones(): boolean {
    if (!this.objetoNoVacio(this.paciente)) {
      console.log('Sin paciente');
      return false;
    }
    if (!this.objetoNoVacio(this.especialidad)) {
      console.log('Sin especialidad');
      return false;
    }
    if (!this.objetoNoVacio(this.doctor)) {
      console.log('Sin doctor');
      return false;
    }

    if (this.txtFecha === null || this.txtFecha === '') {
      return false;
    }

    if (this.txtHora) {
      const horaParts = this.txtHora.split(':');
      const hora = parseInt(horaParts[0]);

      if (hora >= 9 && hora <= 18) {
        console.log('La hora está dentro del rango permitido.');
        return true;
      } else {
        console.log('La hora está fuera del rango permitido.');
      }
    }
    return false;
  }

  crearCita() {
    if (!this.validaciones()) {
      Swal.fire(
        'Formulario incorrecto',
        'Llene todos los campos y registre la hora entre las 9 AM hasta las 16 PM',
        'error'
      );
    } else {
      const objData = {
        hora: this.txtHora,
        fecha: this.txtFecha,
        paId: this.paciente.em_id,
        drId: this.doctor.em_id,
        espId: this.especialidad.sp_me_id,
      };
      console.log(objData);
      this.clinicaSe.agendarCitaMedica(objData).subscribe((data: any) => {
        data
          ? Swal.fire('Registrado', 'Su se registro correctamente', 'success')
          : Swal.fire(
              'Error',
              'Estos datos coinciden con una cita ya exitente',
              'error'
            );
      });
    }
  }

  cargarMedicoPorEspecialidad(item: any) {
    this.doctor = null;
    this.especialidad = item;
    const objdata = {
      id: item.sp_me_id,
    };
    this.clinicaSe
      .buscarMedicosPorEspecialidad(objdata)
      .subscribe((data: any) => {
        console.log('Cargando doctores');
        console.log(data);
        this.doctores = data;
      });
  }

  cargarEspecialidades() {
    this.clinicaSe.getEspecialidadesMedicas().subscribe((data: any) => {
      this.especilidadesMed = data;
      console.log(this.especilidadesMed);
    });
  }

  seleccionarDoctor(item: any) {
    this.doctor = item;
    console.log('Cargando especialidad');
    console.log(this.especialidad);
    console.log('Cargando doctor');
    console.log(this.doctor);
  }

  selecionarPaciente(item: any) {
    this.paciente = item;
    this.seccionBusqueda = false;
    this.seccionTurno = true;
  }

  buscarPaciente(id: string) {
    const objData = {
      id: id,
    };
    this.clinicaSe.buscarPaciente(objData).subscribe((data: any) => {
      this.usuarioBuscados = data;
    });
  }

  cerrarBoton() {
    this.seccionBusqueda = true;
    this.seccionTurno = false;
    this.paciente = null;
    this.doctor = null;
    this.especialidad = null;
  }
}
