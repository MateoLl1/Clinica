import { Component } from '@angular/core';
import { ImagenService } from '../../services/imagen.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private imagenService:ImagenService){
    
  }

    
}
