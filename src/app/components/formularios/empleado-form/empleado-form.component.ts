import { Component } from '@angular/core';
import { CedulaEcService } from 'src/app/services/cedula-ec.service';
import { ClinicaService } from 'src/app/services/clinica.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css'],
})
export class EmpleadoFormComponent {
  tipoEmpleados: any[] = [];
  misEmpledos: any[] = [];
  constructor(
    private clinicaSe: ClinicaService,
    private validarCed: CedulaEcService
  ) {
    clinicaSe.getTipoEmpleados().subscribe((data: any) => {
      this.tipoEmpleados = data;
    });

    clinicaSe.getEmpleados().subscribe((data: any) => {
      this.misEmpledos = data;
    });
  }

  error: boolean = false;
  labelError: string = '';
  emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  nombreApellidoRegex: RegExp =
    /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+\s+[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/;

  //?  FORMULARIO
  txtID: number | null = null;
  txtEmail: string = '';
  txtCedula: string = '';
  txtNombres: string = '';
  txtSexo: string = '0';
  txtTpEmpledo: string = '0';
  txtFechaN: string = '';

  inputImagen: string | null = null;
  linkImagen: string | null = null;
  dateInput: string | null = null;

  registrarEmpleado() {
    this.error = true;
    this.labelError = 'Campos requeridos';
    if (this.txtEmail.trim() === null || this.txtEmail.trim() === '') {
      return;
    }
    if (!this.emailRegex.test(this.txtEmail.trim())) {
      this.labelError = 'Email invalido';
      return;
    }
    if (!this.validarCed.validarCedula(this.txtCedula.trim())) {
      this.labelError = 'Cedula invalida';
      return;
    }
    if (!this.nombreApellidoRegex.test(this.txtNombres.trim())) {
      this.labelError = 'Al menos ingrese un nombre y un apellido';
      return;
    }

    if (this.txtSexo === '0' || this.txtTpEmpledo === '0') {
      this.labelError = 'Seleccione alguna opcion';
      return;
    }

    if (this.txtFechaN === null || this.txtFechaN === '') {
      this.labelError = 'Ingrese una fecha';
      return;
    }

    if (this.linkImagen === null) {
      this.labelError = 'Suba una imagen';
      return;
    }

    const objData = {
      email: this.txtEmail,
      cedula: this.txtCedula,
      nombres: this.txtNombres,
      fechaNa: this.txtFechaN,
      imagen: this.linkImagen,
      sexo: this.txtSexo === '1' ? 'M' : 'A',
      tp_em_id: this.txtTpEmpledo,
    };

    this.clinicaSe.registrarEmpleado(objData).subscribe((data: any) => {
      data
        ? (Swal.fire('Empleado registrado', '', 'success'),
          setTimeout(() => {
            location.reload();
          }, 1000))
        : Swal.fire('Error al registrar', '', 'error');
    });
    this.error = false;
  }

  updateEmpleado() {
    this.error = true;
    this.labelError = 'Campos requeridos';

    if (this.txtID === null) {
      this.labelError = 'Escoja una opcion';
      return;
    }
    if (this.txtEmail.trim() === null || this.txtEmail.trim() === '') {
      return;
    }
    if (!this.emailRegex.test(this.txtEmail.trim())) {
      this.labelError = 'Email invalido';
      return;
    }
    if (!this.validarCed.validarCedula(this.txtCedula.trim())) {
      this.labelError = 'Cedula invalida';
      return;
    }
    if (!this.nombreApellidoRegex.test(this.txtNombres.trim())) {
      this.labelError = 'Al menos ingrese un nombre y un apellido';
      return;
    }

    if (this.txtSexo === '0' || this.txtTpEmpledo === '0') {
      this.labelError = 'Seleccione alguna opcion';
      return;
    }

    if (this.txtFechaN === null || this.txtFechaN === '') {
      this.labelError = 'Ingrese una fecha';
      return;
    }

    if (this.linkImagen === null) {
      this.labelError = 'Suba una imagen';
      return;
    }

    const objData = {
      id: this.txtID,
      email: this.txtEmail,
      cedula: this.txtCedula,
      nombres: this.txtNombres,
      fechaNa: this.txtFechaN,
      imagen: this.linkImagen,
      sexo: this.txtSexo === '1' ? 'M' : 'A',
      tp_em_id: this.txtTpEmpledo,
    };

    this.clinicaSe.updateEmpleado(objData).subscribe((data: any) => {
      data
        ? (Swal.fire('Empleado actualizado', '', 'success'),
          setTimeout(() => {
            location.reload();
          }, 1000))
        : Swal.fire('Error al actualizar', '', 'error');
    });

    this.error = false;
  }

  empleadoSeleccionado(data: any) {
    console.log(data);
    this.txtID = data.em_id;
    this.txtNombres = data.em_nombres;
    this.txtEmail = data.em_email;
    this.txtCedula = data.em_cedula;
    this.txtSexo = data.em_sexo === 'M' ? '1' : '2';
    this.txtTpEmpledo = data.tp_em_id;
    this.dateInput = data.em_fecha_na;
    this.txtFechaN = data.em_fecha_na;
    this.inputImagen = data.em_imagen;
  }

  eliminarEmpleado() {
    this.error = true;
    this.labelError = 'Escoja una opcion';
    if (this.txtID === null) return;

    this.error = false;

    const objData = {
      id: this.txtID,
    };
    this.clinicaSe.eliminarEmpleado(objData).subscribe((data: any) => {
      data
        ? (Swal.fire('Empleado eliminado', '', 'success'),
          setTimeout(() => {
            location.reload();
          }, 1000))
        : Swal.fire('Error al eliminar', '', 'error');
    });
  }
  limpiar() {
    location.reload();
  }
  obtenerImagen(url: any) {
    if (url[1] != null) {
      this.linkImagen = url[1];
    }
    console.log(url);
  }
}
