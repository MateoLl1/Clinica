import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  constructor() {
  }

  cambiarColores() {
    const temaActual = getComputedStyle(document.documentElement).getPropertyValue('--fondo-primary');
    const fondo = '#f4f9f9';
    const fuente = '#1c1c1c';
    const fondoInverse = '#1c1c1c';
    const fuenteInverse = '#f4f9f9';
    console.log(temaActual);
    if (temaActual === '#f4f9f9') {
      document.documentElement.style.setProperty('--fondo-primary', fondoInverse);
      document.documentElement.style.setProperty('--color-fuente', fuenteInverse);
      return;
    }
    document.documentElement.style.setProperty('--fondo-primary', fondo);
    document.documentElement.style.setProperty('--color-fuente', fuente);
  }
}
