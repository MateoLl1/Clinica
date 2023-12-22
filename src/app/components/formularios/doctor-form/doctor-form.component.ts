import { Component } from '@angular/core';
import { ClinicaService } from 'src/app/services/clinica.service';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.css'],
})
export class DoctorFormComponent {
  doctores: any[] = [];
  espMedicas: any[] = [];

  mostrarFormulario: boolean = false;

  txtId: number | null = null;
  txtNombre: string | null = null;
  txtCedula: string | null = null;
  txtEmail: string | null = null;
  linkImage: string | null = null;

  susEspecialidades = [];

  constructor(private clinicaSe: ClinicaService) {
    clinicaSe.getMedicos().subscribe((data: any) => {
      this.doctores = data;
    });
    clinicaSe.getEspecialidadesMedicas().subscribe((data: any) => {
      this.espMedicas = data;
      this.espMedicas = this.espMedicas.map((item) => {
        return { ...item, check: false };
      });
      console.log(this.espMedicas);
    });
  }

  seleccionarDoctor(data: any) {
    if (data) {
      this.mostrarFormulario = true;
      this.txtId = data.em_id;
      this.txtNombre = data.em_nombres;
      this.txtCedula = data.em_cedula;
      this.txtEmail = data.em_email;
      this.linkImage = data.em_imagen;
    }
  }

  seleccionarEsp(data: any, action: boolean) {
    console.log(action);
  }
}
