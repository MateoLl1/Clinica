import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClinicaService } from 'src/app/services/clinica.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  tokenAccess: string[] = ['axAdmin', 'axMedico', 'axRecepcion', 'axUsuario'];

  constructor(private router: Router, private clinicaSe: ClinicaService) {}

  errorLabel: string | null = null;
  error: boolean = false;

  emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  email: string = 'mateollerena40@gmail.com';
  password: string = '1755136510';

  validarFormulario(): boolean {
    this.error = true;
    this.errorLabel = 'Campos requeridos';
    if (this.email.trim() === '' || this.password.trim() === '') {
      return true;
    }
    if (!this.emailRegex.test(this.email)) {
      this.errorLabel = 'Email invalido';
      return true;
    }

    this.error = false;
    return false;
  }

  verificarCredenciales() {
    if (!this.validarFormulario()) {
      const objData = {
        email: this.email,
        password: this.password,
      };
      this.clinicaSe.validarLogin(objData).subscribe((data: any) => {
        const usuario = data[0];
        console.log(data);
        if (data.length > 0) {
          Swal.fire('Credenciales correctas', '', 'success');
          if (usuario.tp_em_id === 1) {
            console.log('admin');
            localStorage.setItem('tokenAccess', this.tokenAccess[0]);
            this.router.navigate(['/admin']);
          } else if (usuario.tp_em_id === 2) {
            console.log('medico');
            localStorage.setItem('tokenAccess', this.tokenAccess[1]);
            this.router.navigate(['/medico']);
          } else if (usuario.tp_em_id === 3) {
            console.log('recepcion');
            localStorage.setItem('tokenAccess', this.tokenAccess[2]);
            this.router.navigate(['/recepcion']);
          } else if (usuario.tp_em_id === 4) {
            console.log('usuario');
            localStorage.setItem('tokenAccess', this.tokenAccess[3]);
            this.router.navigate(['/usuario']);
          }
        } else {
          Swal.fire('Credenciales Incorrectas', '', 'error');
        }
      });
    }
  }
}
