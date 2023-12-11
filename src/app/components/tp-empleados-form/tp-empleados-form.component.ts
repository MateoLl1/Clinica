import { Component } from '@angular/core';
import { ClinicaService } from 'src/app/services/clinica.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tp-empleados-form',
  templateUrl: './tp-empleados-form.component.html',
  styleUrls: ['./tp-empleados-form.component.css'],
})
export class TpEmpleadosFormComponent {
  //? DATA
  tipoEmpleados: any[] = [];

  //? FORMULARIO
  labelError: string | null = null;
  error: boolean | null = null;
  txtId: string = '';
  txtTipoNombre: string = '';

  constructor(private clinicaSe: ClinicaService) {
    clinicaSe.getTipoEmpleados().subscribe((data: any) => {
      // console.log(data);
      this.tipoEmpleados = data;
    });
  }

  tipoSeleccionado(id: number, nombre: string) {
    this.txtId = id.toString();
    this.txtTipoNombre = nombre;
  }

  registrarTipo() {
    if (this.txtTipoNombre.trim() === '') {
      this.error = true;
      this.labelError = 'Campo requerido';
      return;
    }
    if (this.txtTipoNombre.length <= 3) {
      this.error = true;
      this.labelError = 'Al menos 4 letras';
      return;
    }
    this.error = false;
    const objData = {
      descr: this.txtTipoNombre,
    };
    this.clinicaSe.registrarTipoEmpleado(objData).subscribe((data: any) => {
      if (data) {
        Swal.fire('Registrado', '', 'success');
        setTimeout(() => {
          location.reload();
        }, 2000);
      } else {
        Swal.fire('No registrado', '', 'error');
      }
    });
  }
  eliminarTipo(id: string) {
    if (this.txtId.trim() === '') {
      this.error = true;
      this.labelError = 'Seleccione un item';
      return;
    }
    if (this.txtId.length <= 0) {
      this.error = true;
      this.labelError = 'Seleccione un item';
      return;
    }
    this.error = false;
    const objData = {
      id: this.txtId,
    };
    this.clinicaSe.eliminarTipoEmpleado(objData).subscribe((data: any) => {
      console.log(data);
      data
        ? (Swal.fire('Eliminado', '', 'success'),
          setTimeout(() => {
            location.reload();
          }, 2000))
        : Swal.fire(
            'Error al eliminar',
            'Antes tiene que eliminar a los empleados vinculados a este registro',
            'error'
          );
    });
  }
  actualizarTipo(id: string) {
    if (this.txtId.trim() === '') {
      this.error = true;
      this.labelError = 'Seleccione un item';
      return;
    }
    if (this.txtTipoNombre.length <= 0 || this.txtId.length <= 0) {
      this.error = true;
      this.labelError = 'Campos requeridos';
      return;
    }
    if (this.txtTipoNombre.length <= 3) {
      this.error = true;
      this.labelError = 'Al menos 4 letras';
      return;
    }
    this.error = false;
    const objData = {
      id: this.txtId,
      descr: this.txtTipoNombre,
    };
    this.clinicaSe.updateTipoEmpleado(objData).subscribe((data: any) => {
      console.log(data);
      data
        ? (Swal.fire('Actualizado', '', 'success'),
          setTimeout(() => {
            location.reload();
          }, 1000))
        : Swal.fire(
            'Error al actualizar',
            'Antes tiene que eliminar a los empleados vinculados a este registro',
            'error'
          );
    });
  }

  limpiar() {
    this.txtId = '';
    this.txtTipoNombre = '';
  }
}
