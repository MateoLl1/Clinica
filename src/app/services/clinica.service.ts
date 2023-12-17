import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClinicaService {
  localApi: string = 'http://localhost:1410';
  clinicaApi: string = `${this.localApi}`;
  constructor(private http: HttpClient) {}

  getTipoEmpleados() {
    return this.http.get(`${this.clinicaApi}/admin/tipo-empleado`);
  }

  registrarTipoEmpleado(data: any) {
    return this.http.post(
      `${this.clinicaApi}/admin/tipo-empleado/insert`,
      data
    );
  }

  eliminarTipoEmpleado(data: any) {
    return this.http.post(
      `${this.clinicaApi}/admin/tipo-empleado/delete`,
      data
    );
  }
  updateTipoEmpleado(data: any) {
    return this.http.post(
      `${this.clinicaApi}/admin/tipo-empleado/update`,
      data
    );
  }

  getEspecialidadesMedicas() {
    return this.http.get(`${this.clinicaApi}/admin/esp-med`);
  }

  registrarEspecialidadesMedicas(data: any) {
    return this.http.post(`${this.clinicaApi}/admin/esp-med/insert`, data);
  }

  updateEspecialidadesMedicas(data: any) {
    return this.http.post(`${this.clinicaApi}/admin/esp-med/update`, data);
  }

  eliminarEspecialidadesMedicas(data: any) {
    return this.http.post(`${this.clinicaApi}/admin/esp-med/delete`, data);
  }
}
