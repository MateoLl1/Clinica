import { Component } from '@angular/core';
import { ClinicaService } from 'src/app/services/clinica.service';

@Component({
  selector: 'app-calendario-doctor',
  templateUrl: './calendario-doctor.component.html',
  styleUrls: ['./calendario-doctor.component.css'],
})
export class CalendarioDoctorComponent {
  doctor: any = null;

  constructor(private clinica: ClinicaService) {
    this.obtenerTokenData();
  }
  obtenerTokenData() {
    this.doctor = localStorage.getItem('infoUserToken');
    this.doctor = JSON.parse(this.doctor);
    console.log(this.doctor);
  }
}
