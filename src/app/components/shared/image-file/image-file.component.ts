import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-image-file',
  templateUrl: './image-file.component.html',
  styleUrls: ['./image-file.component.css'],
})
export class ImageFileComponent implements OnChanges {
  constructor(private servidor: ImagenService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['imagenInp'] && changes['imagenInp'].currentValue) {
      this.srcImagen = changes['imagenInp'].currentValue;
    } else {
      this.srcImagen = this.sinImagen;
    }
    if (!(this.srcImagen === this.sinImagen)) {
      this.linkImage.emit([this.idTarjeta, this.srcImagen]);
    }
  }

  @Input() ocultarTitle: boolean = false;
  @Output() linkImage = new EventEmitter<any[]>();
  @Input() idTarjeta: number | null = null;
  @Input() imagenInp: string | null = null;

  //Data del hosting de imagenes
  selectedFile: File | null = null;
  imageBase64: string | null = null;
  imagen: string | null = null;
  hostImages: string = '';
  llego: boolean = false;
  sinImagen = '../../../assets/img/no-image.jpeg';
  srcImagen: string = '';

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
        this.srcImagen = this.hostImages;
        // console.log(data.data.url);
        this.llego = true;
        this.linkImage.emit([this.idTarjeta, this.hostImages]);
      });
    } else {
      console.log('No hay imagen');
    }
  }
}
