import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//* Rutas
import { APP_ROUTING } from './app.routes';

//* Pipes

// * Componenets
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PublicidadComponent } from './components/shared/publicidad/publicidad.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { SliderComponent } from './components/slider/slider.component';
import { AccessComponent } from './components/access/access.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImageFileComponent } from './components/shared/image-file/image-file.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/roles/admin/admin.component';
import { TpEmpleadosFormComponent } from './components/formularios/tp-empleados-form/tp-empleados-form.component';
import { EspmedFormComponent } from './components/formularios/espmed-form/espmed-form.component';

//* Service
import { HttpClientModule } from '@angular/common/http';
import { ImagenService } from './services/imagen.service';
import { FormsModule } from '@angular/forms';
import { AppThemeService } from './services/app-theme.service';
import { EmpleadoFormComponent } from './components/formularios/empleado-form/empleado-form.component';
import { DoctorFormComponent } from './components/formularios/doctor-form/doctor-form.component';
import { EmpleadosEliminadosFormComponent } from './components/formularios/empleados-eliminados-form/empleados-eliminados-form.component';
import { EspecialidadComponent } from './components/shared/especialidad/especialidad.component';
import { MedicoComponent } from './components/roles/medico/medico.component';
import { RecepcionComponent } from './components/roles/recepcion/recepcion.component';
import { UsuarioComponent } from './components/roles/usuario/usuario.component';
import { IconFileComponent } from './components/shared/icon-file/icon-file.component';
import { NoticiasFormComponent } from './components/formularios/noticias-form/noticias-form.component';
import { UsuarioDataComponent } from './components/shared/usuario-data/usuario-data.component';
import { GenerarCitaMedicaComponent } from './components/roles/negocio/generar-cita-medica/generar-cita-medica.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { CitasAsignadasDoctoresComponent } from './components/roles/negocio/citas-asignadas-doctores/citas-asignadas-doctores.component';
import { RedAlertComponent } from './components/shared/alerts/red-alert/red-alert.component';
import { CircleAlertComponent } from './components/shared/alerts/circle-alert/circle-alert.component';
import { UsuarioByIdComponent } from './components/roles/widgets/usuario-by-id/usuario-by-id.component';
import { CitasAsignadasPacientesComponent } from './components/roles/negocio/citas-asignadas-pacientes/citas-asignadas-pacientes.component';
import { ActualizarPacienteComponent } from './components/roles/negocio/actualizar-paciente/actualizar-paciente.component';
import { LabelButtonComponent } from './components/shared/buttons/label-button/label-button.component';
import { ColorButtonComponent } from './components/shared/buttons/color-button/color-button.component';
import { CalendarioDoctorComponent } from './components/roles/medico/logic/calendario-doctor/calendario-doctor.component';
import { ConsultaPacienteComponent } from './components/roles/medico/logic/consulta-paciente/consulta-paciente.component';
import { Head1Component } from './components/shared/text/head1/head1.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PublicidadComponent,
    NosotrosComponent,
    SliderComponent,
    AccessComponent,
    ImageFileComponent,
    LoginComponent,
    AdminComponent,
    TpEmpleadosFormComponent,
    EspmedFormComponent,
    EmpleadoFormComponent,
    DoctorFormComponent,
    EmpleadosEliminadosFormComponent,
    EspecialidadComponent,
    MedicoComponent,
    RecepcionComponent,
    UsuarioComponent,
    IconFileComponent,
    NoticiasFormComponent,
    UsuarioDataComponent,
    GenerarCitaMedicaComponent,
    LoadingComponent,
    CitasAsignadasDoctoresComponent,
    RedAlertComponent,
    CircleAlertComponent,
    UsuarioByIdComponent,
    CitasAsignadasPacientesComponent,
    ActualizarPacienteComponent,
    LabelButtonComponent,
    ColorButtonComponent,
    CalendarioDoctorComponent,
    ConsultaPacienteComponent,
    Head1Component,
  ],
  imports: [APP_ROUTING, BrowserModule, FormsModule, HttpClientModule],
  providers: [ImagenService, AppThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
