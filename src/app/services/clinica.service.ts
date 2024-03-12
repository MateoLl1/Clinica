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

  getEmpleados() {
    return this.http.get(`${this.clinicaApi}/admin/empleados`);
  }

  registrarEmpleado(data: any) {
    return this.http.post(`${this.clinicaApi}/admin/empleado/insert`, data);
  }

  updateEmpleado(data: any) {
    return this.http.post(`${this.clinicaApi}/admin/empleado/update`, data);
  }

  eliminarEmpleado(data: any) {
    return this.http.post(`${this.clinicaApi}/admin/empleado/delete`, data);
  }

  getMedicos() {
    return this.http.get(`${this.clinicaApi}/admin/empleado/medico/activos`);
  }

  getEmpleadosEliminados() {
    return this.http.get(`${this.clinicaApi}/admin/empleado/papelera`);
  }

  getEspecilidadMedico(data: any) {
    return this.http.post(`${this.clinicaApi}/admin/empleado/doctor/esp`, data);
  }

  getEspecilidadMedicoCargado(data: any) {
    return this.http.post(
      `${this.clinicaApi}/admin/empleado/doctorID/esp`,
      data
    );
  }

  insertMedicoEspecialidad(data: any) {
    return this.http.post(
      `${this.clinicaApi}/admin/empleado/medico/espM/insert`,
      data
    );
  }

  deleteMedicoEspecialidad(data: any) {
    return this.http.post(
      `${this.clinicaApi}/admin/empleado/medico/espM/delete`,
      data
    );
  }

  recuperarEmpleado(data: any) {
    return this.http.post(`${this.clinicaApi}/admin/empleado/recuperar`, data);
  }

  eliminarEmpleadoPerma(data: any) {
    return this.http.post(
      `${this.clinicaApi}/admin/empleado/delete/permanente`,
      data
    );
  }

  getEspecialidadMedicaById(data: any) {
    return this.http.post(`${this.clinicaApi}/admin/esp-med/byId`, data);
  }

  validarLogin(data: any) {
    return this.http.post(`${this.clinicaApi}/auth/login`, data);
  }

  getNoticias() {
    return this.http.get(`${this.clinicaApi}/admin/news`);
  }
  getNoticiasById(data: any) {
    return this.http.post(`${this.clinicaApi}/admin/news/byId`, data);
  }
  insertNoticia(data: any) {
    return this.http.post(`${this.clinicaApi}/admin/news/insert`, data);
  }

  eliminarNoticia(data: any) {
    return this.http.post(`${this.clinicaApi}/admin/news/delete`, data);
  }
  actualizarNoticia(data: any) {
    return this.http.post(`${this.clinicaApi}/admin/news/update`, data);
  }

  buscarPaciente(data: any) {
    return this.http.post(`${this.clinicaApi}/buscar/paciente`, data);
  }

  buscarMedicosPorEspecialidad(data: any) {
    return this.http.post(
      `${this.clinicaApi}/buscar/medicoPorEspecialidad`,
      data
    );
  }
  agendarCitaMedica(data: any) {
    return this.http.post(`${this.clinicaApi}/agendar-citas`, data);
  }

  cargarCitasPorDoctor(data: any) {
    return this.http.post(`${this.clinicaApi}/medico/citas`, data);
  }
  eliminarCitaMedica(data: any) {
    return this.http.post(`${this.clinicaApi}/medico/citas/eliminar`, data);
  }
  cargarCitasPorPaciente(data: any) {
    return this.http.post(`${this.clinicaApi}/paciente/citas`, data);
  }
  cargarUsuariosById(data: any) {
    return this.http.post(`${this.clinicaApi}/admin/empleado/byId`, data);
  }

  caledarioCitasDoctor(data: any) {
    return this.http.post(`${this.clinicaApi}/medico/citas/calendario`, data);
  }

  insertConsultayDiagnostico(data: any) {
    return this.http.post(`${this.clinicaApi}/consulta/medica/diagnostico`, data);
  }

  validarConsultaYaAtendida(data: any) {
    return this.http.post(`${this.clinicaApi}/medico/consulta/yaAtendida`, data);
  }
}
