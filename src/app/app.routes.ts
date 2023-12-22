import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PublicidadComponent } from './components/shared/publicidad/publicidad.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { TpEmpleadosFormComponent } from './components/formularios/tp-empleados-form/tp-empleados-form.component';
import { EspmedFormComponent } from './components/formularios/espmed-form/espmed-form.component';
import { EmpleadoFormComponent } from './components/formularios/empleado-form/empleado-form.component';
import { DoctorFormComponent } from './components/formularios/doctor-form/doctor-form.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'publicidad', component: PublicidadComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  //? FORMULARIOS
  { path: 'tpEmpleadoForm', component: TpEmpleadosFormComponent },
  { path: 'espmedForm', component: EspmedFormComponent },
  { path: 'empleadosForm', component: EmpleadoFormComponent },
  { path: 'doctorForm', component: DoctorFormComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
