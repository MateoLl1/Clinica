import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  constructor(
    private imageService:ImagenService,
    private router:Router
  ) {
    
  }

  navegacionNavbar(id : number){
    switch (id) {
      case 0:
        this.router.navigate(['home']);
        break;
      case 1:
        this.router.navigate(['publicidad']);
        break;
      default:
        this.router.navigate(['home']);
        break;
    }
  }

  cambiarTema(){
    this.imageService.cambiarColores();
  }
}
