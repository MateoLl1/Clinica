import { Component } from '@angular/core';
import { ClinicaService } from 'src/app/services/clinica.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-noticias-form',
  templateUrl: './noticias-form.component.html',
  styleUrls: ['./noticias-form.component.css'],
})
export class NoticiasFormComponent {
  noticias: any[] = [];
  srcImagen: string | null = null;

  //? FORMULARIOS
  error: boolean = false;
  errorLabel: string = '';
  txtID: string = '';
  txtTitle: string = '';
  txtContent: string = '';
  linkImage: string | null = null;

  constructor(private clinacaSe: ClinicaService) {
    clinacaSe.getNoticias().subscribe((data: any) => {
      this.noticias = data;
      console.log(this.noticias);
    });
  }

  validaciones(): boolean {
    this.error = true;
    this.errorLabel = 'Campos requeridos';
    this.srcImagen = this.linkImage;
    if (this.txtTitle.trim() === '') return false;
    if (this.txtContent.trim() === '') return false;
    if (this.txtContent.length < 50) {
      this.errorLabel = 'Agrega mas contenido';
      return false;
    }
    if (this.linkImage === null) {
      this.errorLabel = 'Ingrese la imagen';
      return false;
    }

    this.error = false;
    return true;
  }

  actulizarNoticia() {
    this.error = true;
    this.errorLabel = 'Escoja un item';
    if (this.txtID === null || this.txtID === '') return;
    if (!this.validaciones()) return;

    this.error = false;
    const objData = {
      id: this.txtID,
      titulo: this.txtTitle,
      content: this.txtContent,
      image: this.srcImagen,
    };
    this.clinacaSe.actualizarNoticia(objData).subscribe((data: any) => {
      data
        ? (Swal.fire('Actualizado', '', 'success'),
          setTimeout(() => {
            location.reload();
          }, 1000))
        : Swal.fire('Error al actulizar', '', 'error');
    });
  }

  eliminarNoticia(noticia: any) {
    this.txtID = noticia.new_id;
    const objData = {
      id: this.txtID,
    };
    this.clinacaSe.eliminarNoticia(objData).subscribe((data: any) => {
      data
        ? (Swal.fire('Eliminado', '', 'success'),
          setTimeout(() => {
            location.reload();
          }, 1000))
        : Swal.fire('Error al eliminar', '', 'error');
    });
  }

  seleccionarNoticia(noticia: any) {
    this.txtID = noticia.new_id;
    this.txtTitle = noticia.new_titulo;
    this.txtContent = noticia.new_content;
    this.linkImage = noticia.new_image;
    this.validaciones();
  }

  insertarNoticia() {
    if (!this.validaciones()) return;
    const objData = {
      titulo: this.txtTitle,
      content: this.txtContent,
      image: this.linkImage,
    };
    this.clinacaSe.insertNoticia(objData).subscribe((data: any) => {
      console.log(data);

      data
        ? (Swal.fire('Ingresado', '', 'success'),
          setTimeout(() => {
            location.reload();
          }, 1000))
        : Swal.fire('Error al ingresar', '', 'error');
    });
  }

  cargarImagen(data: any) {
    if (data[1]) {
      this.linkImage = data[1];
    }
  }
}
