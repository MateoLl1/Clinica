import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  errorLabel: string | null = null;
  error: boolean = false;

  email: string = '';
  password: string = '';

  validarFormulario() {
    this.router.navigate(['/admin']);
    if (this.email.trim() === '' || this.password.trim() === '') {
      this.error = true;
      this.errorLabel = 'Campos requeridos';
    } else {
      this.error = false;
      this.errorLabel = null;
    }
  }
}
