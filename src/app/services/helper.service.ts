import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  cargarFechadeHoy(): string {
    const fechaHoy: Date = new Date();
    const año: number = fechaHoy.getFullYear();
    const mes: string = (fechaHoy.getMonth() + 1).toString().padStart(2, '0');
    const dia: string = fechaHoy.getDate().toString().padStart(2, '0');

    const fechaFormateada: string = `${año}-${mes}-${dia}`;
    return fechaFormateada;
  }
}
