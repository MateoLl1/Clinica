import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CedulaEcService {
  constructor() {}

  private cedulaRegex: RegExp = /^([0-9]{10})$/;

  validarCedula(cedula: string): boolean {
    if (!this.cedulaRegex.test(cedula)) {
      return false;
    }

    const provincia = Number(cedula.substring(0, 2));
    const tercerDigito = Number(cedula.charAt(2));

    // Verificar si la provincia y el tercer dígito son válidos
    if (
      provincia >= 1 &&
      provincia <= 24 &&
      tercerDigito >= 0 &&
      tercerDigito <= 5
    ) {
      // Realizar la validación del dígito verificador según el algoritmo establecido
      const digitos = cedula.split('').map(Number);
      const digitoVerificador = digitos.pop();
      const sumatoria = digitos.reduce((acc, value, index) => {
        const factor = index % 2 === 0 ? 2 : 1;
        let resultado = value * factor;
        resultado = resultado > 9 ? resultado - 9 : resultado;
        return acc + resultado;
      }, 0);

      const digitoCalculado = sumatoria % 10 === 0 ? 0 : 10 - (sumatoria % 10);

      return digitoVerificador === digitoCalculado;
    }

    return false;
  }
}
