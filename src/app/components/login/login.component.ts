import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {
    localStorage.setItem('tokenAccess', this.tokenAccess[0]);
  }
  tokenAccess: string[] = ['axAdmin', 'axMedico', 'axRecepcion', 'axUsuario'];

  errorLabel: string | null = null;
  error: boolean = false;

  email: string = '';
  password: string = '';

  validarFormulario() {
    this.router.navigate(['/admin']);
  }
}
