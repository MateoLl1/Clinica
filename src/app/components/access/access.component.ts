import { Component } from '@angular/core';
import { AppThemeService } from 'src/app/services/app-theme.service';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent {

  constructor(private appTheme:AppThemeService) {}

  cambiarTema(){
    this.appTheme.cambiarColores();
  }
    
}
