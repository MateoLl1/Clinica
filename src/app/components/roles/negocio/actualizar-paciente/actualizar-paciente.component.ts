import { Component } from '@angular/core';
import { CedulaEcService } from 'src/app/services/cedula-ec.service';
import { ClinicaService } from 'src/app/services/clinica.service';
import { HelperService } from 'src/app/services/helper.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-paciente',
  templateUrl: './actualizar-paciente.component.html',
  styleUrls: ['./actualizar-paciente.component.css'],
})
export class ActualizarPacienteComponent {
  mostrarFormulario = false;

  idPaciente: number | null = null;
  paciente: any = {};
  fechaHoy: string = '';

  srcImagen = null;

  //! FORMULARIO
  errorForm: boolean = false;
  txtId: string = '';
  txtNombre: string = '';
  txtCedula: string = '';
  txtEmail: string = '';
  txtFecha: string = '';
  txtSexo: string = '';
  linkImage: string | null = null;

  constructor(private clinicaSe: ClinicaService, private help: HelperService) {
    this.fechaHoy = help.cargarFechadeHoy();
  }

  validar(): boolean {
    if (this.txtId === '') return false;
    if (this.txtNombre === '') return false;
    if (this.txtCedula === '') return false;
    if (this.txtEmail === '') return false;
    if (this.txtFecha === '') return false;
    if (this.txtSexo === '0') return false;
    if (this.srcImagen === null) return false;
    if (!this.help.validarCedula(this.txtCedula)) return false;
    if (!this.help.validarNombreApellido(this.txtNombre)) return false;
    if (!this.help.validarCorreoElectronico(this.txtEmail)) return false;
    return true;
  }

  eliminarPaciente() {
    if (this.txtId === '') {
      this.errorForm = true;
    } else {
      this.errorForm = false;
      this.clinicaSe
        .eliminarEmpleado({ id: this.txtId })
        .subscribe((data: any) => {
          data
            ? (Swal.fire('Eliminado', '', 'success'),
              setTimeout(() => {
                location.reload();
              }, 1000))
            : Swal.fire('Eliminado', '', 'success');
        });
    }
  }

  actualizarPaciente() {
    if (!this.validar()) {
      this.errorForm = true;
    } else {
      this.errorForm = false;
      const objData = {
        id: this.txtId,
        email: this.txtEmail,
        cedula: this.txtCedula,
        nombres: this.txtNombre,
        fechaNa: this.txtFecha,
        imagen: this.linkImage ?? this.srcImagen,
        sexo: this.txtSexo,
        tp_em_id: '4',
      };
      this.clinicaSe.updateEmpleado(objData).subscribe((data: any) => {
        data
          ? Swal.fire('Actualizado', '', 'success')
          : Swal.fire('Error al actualizar', '', 'error');
      });
    }
  }

  imagenOutput(image: any) {
    if (image == null) return;
    this.linkImage = image[1];
  }

  informacionPaciente() {
    this.txtId = this.paciente.em_id;
    this.txtNombre = this.paciente.em_nombres;
    this.txtCedula = this.paciente.em_cedula;
    this.txtEmail = this.paciente.em_email;
    this.txtFecha = this.paciente.em_fecha_na;
    this.txtSexo = this.paciente.em_sexo;
    this.srcImagen = this.paciente.em_imagen;
  }

  cerrarFormulario() {
    this.mostrarFormulario = false;
    this.paciente = null;
  }

  cargandoPaciente(item: any) {
    this.idPaciente = item;
    if (this.idPaciente) {
      const objData = {
        id: this.idPaciente,
        tpId: 4,
      };
      this.clinicaSe.cargarUsuariosById(objData).subscribe((data: any) => {
        if (data) {
          this.paciente = data[0];
          this.informacionPaciente();
          console.log(this.paciente);
          this.mostrarFormulario = true;
        }
      });
    }
  }
}
