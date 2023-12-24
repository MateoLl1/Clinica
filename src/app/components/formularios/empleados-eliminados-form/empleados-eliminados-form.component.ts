import { Component } from '@angular/core';
import { ClinicaService } from 'src/app/services/clinica.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleados-eliminados-form',
  templateUrl: './empleados-eliminados-form.component.html',
  styleUrls: ['./empleados-eliminados-form.component.css'],
})
export class EmpleadosEliminadosFormComponent {
  empleadosEliminados: any[] = [];
  tipoEmpleado: any[] = [];

  constructor(private clinicaSe: ClinicaService) {
    clinicaSe.getTipoEmpleados().subscribe((data: any) => {
      this.tipoEmpleado = data;
    });

    clinicaSe.getEmpleadosEliminados().subscribe((data: any) => {
      this.empleadosEliminados = data;
    });
  }

  mapearTipoEmpleado(idTipoEmpleado: number): string {
    const tipoDescr = this.tipoEmpleado.find((item) => {
      if (item.tp_em_id === idTipoEmpleado) {
        return item;
      }
    });

    return tipoDescr.tp_em_desc ?? 'Indefinido';
  }

  eliminarEmpleado(data: any) {
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'Este registro se eliminara permanentemente!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.clinicaSe.eliminarEmpleadoPerma(data).subscribe((data: any) => {
          data
            ? (Swal.fire(
                'Eliminado!',
                'Registro eliminado correctamente.',
                'success'
              ),
              setTimeout(() => {
                location.reload();
              }, 1000))
            : Swal.fire('Error!', 'no se que paso pa', 'error');
        });
      }
    });
  }

  recuperarEmpleado(data: any) {
    Swal.fire({
      title: 'Recuperar registro?',
      text: '',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.clinicaSe.recuperarEmpleado(data).subscribe((data: any) => {
          data
            ? (Swal.fire('Recuperado!', '', 'success'),
              setTimeout(() => {
                location.reload();
              }, 1000))
            : Swal.fire('Error!', '', 'error');
        });
      }
    });
  }
}
