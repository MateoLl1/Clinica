import { Component } from '@angular/core';

@Component({
  selector: 'app-espmed-form',
  templateUrl: './espmed-form.component.html',
  styleUrls: ['./espmed-form.component.css'],
})
export class EspmedFormComponent {
  linkImagen1: string | null = null;
  linkImagen2: string | null = null;

  constructor() {}

  imagenesPadre(link: any) {
    if (link[0] == 1) {
      this.linkImagen1 = link[1];
    }
    if (link[0] == 2) {
      this.linkImagen2 = link[1];
    }
    if ((this.linkImagen1, this.linkImagen2 != null)) {
      console.log(this.linkImagen1);
      console.table(this.linkImagen2);
    } else {
      console.log('sin data');
    }
  }
}
