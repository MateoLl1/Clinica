import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-data',
  templateUrl: './usuario-data.component.html',
  styleUrls: ['./usuario-data.component.css'],
})
export class UsuarioDataComponent {
  usuario: any = null;
  constructor(private router: Router) {
    this.obtenerUsuario();
  }
  obtenerUsuario() {
    this.usuario = localStorage.getItem('infoUserToken');
    this.usuario = JSON.parse(this.usuario);
    console.log(this.usuario);
  }

  cerrarSession() {
    localStorage.removeItem('infoUserToken');
    localStorage.removeItem('tokenAccess');
    this.router.navigate(['home']);
  }
}
