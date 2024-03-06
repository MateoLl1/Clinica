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

  validarNombreApellido(texto: string): boolean {
    // Dividir el texto en palabras
    const palabras = texto.trim().split(/\s+/);

    // Verificar si hay al menos dos palabras (nombre y apellido)
    if (palabras.length < 2) {
      return false;
    }

    // Verificar si la primera palabra comienza con una letra mayúscula
    if (!/^[A-Z][a-z]*$/.test(palabras[0])) {
      return false;
    }

    // Verificar si la segunda palabra comienza con una letra mayúscula
    if (!/^[A-Z][a-z]*$/.test(palabras[1])) {
      return false;
    }

    // Si pasa todas las validaciones, entonces el texto contiene un nombre y un apellido
    return true;
  }

  validarCorreoElectronico(correo: string): boolean {
    // Expresión regular para validar una dirección de correo electrónico
    const expresionRegular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Verificar si el correo coincide con la expresión regular
    return expresionRegular.test(correo);
  }
}
