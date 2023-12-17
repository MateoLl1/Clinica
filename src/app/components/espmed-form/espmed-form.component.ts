import { Component } from '@angular/core';
import { ClinicaService } from 'src/app/services/clinica.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-espmed-form',
  templateUrl: './espmed-form.component.html',
  styleUrls: ['./espmed-form.component.css'],
})
export class EspmedFormComponent {
  ///
  constructor(private clinicaSe: ClinicaService) {
    clinicaSe.getEspecialidadesMedicas().subscribe((data: any) => {
      // console.log(data);
      this.espMedicas = data;
    });
  }

  espMedicas: any[] = [];

  //? FORMULARIO
  txtId: number | null = null;
  txtNombreEsp: string | null = null;
  txtDesc: string | null = null;
  txtSubtitle: string | null = null;
  txtParrafo: string | null = null;

  linkImagen1: string | null = null;
  linkImagen2: string | null = null;

  cargarImagen1: string | null = null;
  cargarImagen2: string | null = null;

  errorLabel: string | null = null;
  error: boolean = false;

  espMedicaSeleccionada(espMed: any) {
    this.txtId = espMed.sp_me_id;
    this.txtNombreEsp = espMed.sp_me_nombre;
    this.txtDesc = espMed.sp_me_descr;
    this.txtSubtitle = espMed.sp_me_sub_ti;
    this.txtParrafo = espMed.sp_me_parrafo;
    this.cargarImagen1 = espMed.sp_me_imagen;
    this.cargarImagen2 = espMed.sp_me_imagen2;
  }

  insertarEspMedica() {
    this.errorLabel = 'Campos requeridos';
    this.error = true;
    if (
      this.txtNombreEsp === null ||
      this.txtDesc === null ||
      this.txtSubtitle === null ||
      this.txtParrafo === null
    ) {
      return;
    }
    if (
      this.txtNombreEsp.trim() === '' ||
      this.txtDesc.trim() === '' ||
      this.txtSubtitle.trim() === '' ||
      this.txtParrafo.trim() === ''
    ) {
      return;
    }
    if (this.txtDesc.length < 10) {
      this.errorLabel = 'Descripcion muy corta, al menos 10 caracteres';
      return;
    }
    if (this.txtParrafo.length < 10) {
      this.errorLabel = 'Parrafo muy corto, al menos 10 caracteres';
      return;
    }

    if (this.linkImagen1 === null || this.linkImagen2 === null) {
      this.errorLabel = 'Ingrese las imagenes';
      return;
    }

    const objData = {
      nombre: this.txtNombreEsp,
      imagen: this.linkImagen1,
      descr: this.txtDesc,
      subtitle: this.txtSubtitle,
      imagen2: this.linkImagen2,
      parrafo: this.txtParrafo,
    };
    this.clinicaSe
      .registrarEspecialidadesMedicas(objData)
      .subscribe((data: any) => {
        data
          ? (Swal.fire(
              'Registrado',
              'Su especilidad medica a sido ingresada',
              'success'
            ),
            setTimeout(() => {
              location.reload();
            }, 1000))
          : Swal.fire('Error al registrar', '', 'error');

        this.limpiar();
      });

    this.error = false;
  }

  updateEspMedica() {
    this.error = true;
    this.errorLabel = 'Campos requeridos';
    if (this.txtId === null) {
      this.errorLabel = 'Escoja una opcion';
      return;
    }
    if (
      this.txtNombreEsp === null ||
      this.txtDesc === null ||
      this.txtSubtitle === null ||
      this.txtParrafo === null
    ) {
      return;
    }
    if (
      this.txtNombreEsp.trim() === '' ||
      this.txtDesc.trim() === '' ||
      this.txtSubtitle.trim() === '' ||
      this.txtParrafo.trim() === ''
    ) {
      return;
    }
    if (this.txtDesc.length < 10) {
      this.errorLabel = 'Descripcion muy corta, al menos 10 caracteres';
      return;
    }
    if (this.txtParrafo.length < 10) {
      this.errorLabel = 'Parrafo muy corto, al menos 10 caracteres';
      return;
    }

    if (this.linkImagen1 === null || this.linkImagen2 === null) {
      this.errorLabel = 'Ingrese las imagenes';
      return;
    }

    const objData = {
      id: this.txtId,
      nombre: this.txtNombreEsp,
      imagen: this.linkImagen1,
      descr: this.txtDesc,
      subtitle: this.txtSubtitle,
      imagen2: this.linkImagen2,
      parrafo: this.txtParrafo,
    };

    this.clinicaSe
      .updateEspecialidadesMedicas(objData)
      .subscribe((data: any) => {
        data
          ? (Swal.fire(
              'Actualizado',
              'Especialidad medica actualizada',
              'success'
            ),
            setTimeout(() => {
              location.reload();
            }, 1000))
          : Swal.fire('Error', '', 'error');
      });
    this.error = false;
  }

  delelteEspMedica() {
    this.error = true;
    this.errorLabel = 'Escoja una opcion';
    if (this.txtId === null) {
      return;
    }

    const objData = {
      id: this.txtId,
    };

    this.clinicaSe
      .eliminarEspecialidadesMedicas(objData)
      .subscribe((data: any) => {
        data
          ? (Swal.fire('Eliminado', 'Especialidad medica eliminada', 'success'),
            setTimeout(() => {
              location.reload();
            }, 1000))
          : Swal.fire('Error al eliminar', '', 'error');
      });
    this.error = false;
  }

  limpiar() {
    this.txtId = null;
    this.txtNombreEsp = '';
    this.txtDesc = '';
    this.txtSubtitle = '';
    this.txtParrafo = '';
    this.cargarImagen1 = null;
    this.cargarImagen2 = null;
  }

  imagenesPadre(link: any) {
    if (link[0] == 1) {
      this.linkImagen1 = link[1];
    }
    if (link[0] == 2) {
      this.linkImagen2 = link[1];
    }
    // if ((this.linkImagen1, this.linkImagen2 != null)) {
    //   console.log(this.linkImagen1);
    //   console.table(this.linkImagen2);
    // } else {
    //   console.log('sin data');
    // }
  }
}
