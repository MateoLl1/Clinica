import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-image-file',
  templateUrl: './image-file.component.html',
  styleUrls: ['./image-file.component.css'],
})
export class ImageFileComponent {
  constructor(private servidor: ImagenService) {}

  @Output() linkImage = new EventEmitter<any[]>();
  @Input() idTarjeta: number | null = null;

  //Data del hosting de imagenes
  selectedFile: File | null = null;
  imageBase64: string | null = null;
  imagen: string | null = null;
  hostImages: string = '';
  llego: boolean = false;
  sinImagen = '../../../assets/img/no-image.jpeg';

  //Servidor de imagenes
  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.imageBase64 = e.target.result as string;
        this.imagen = this.imageBase64.replace(
          /^data:image\/(png|jpg|jpeg);base64,/,
          ''
        );
        this.subirImagen();
      };
      reader.readAsDataURL(this.selectedFile!);
    }
  }

  async subirImagen() {
    if (this.imagen) {
      this.servidor.subirImagenes(this.imagen).subscribe((data: any) => {
        this.hostImages = data.data.url;
        // console.log(data.data.url);
        this.llego = true;
        this.linkImage.emit([this.idTarjeta, this.hostImages]);
      });
    } else {
      console.log('No hay imagen');
    }
  }
}
