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
    });
  }

  seleccionarDoctor(data: any) {
    if (data) {
      this.espMedicas = this.espMedicas.map((item) => {
        return { ...item, check: false };
      });

      this.mostrarFormulario = true;
      this.txtId = data.em_id;
      this.txtNombre = data.em_nombres;
      this.txtCedula = data.em_cedula;
      this.txtEmail = data.em_email;
      this.linkImage = data.em_imagen;

      const objData = {
        id: this.txtId,
      };
      this.clinicaSe.getEspecilidadMedico(objData).subscribe((data: any) => {
        this.espMedicas = this.espMedicas.map((item) => {
          for (let index = 0; index < data.length; index++) {
            const element = data[index];
            if (item.sp_me_id === element.sp_me_id) {
              item.check = true;
            }
          }
          return item;
        });
      });
    }
  }

  seleccionarEsp(data: any, action: boolean) {
    this.espMedicas.map((item) => {
      if (item.sp_me_id === data.sp_me_id) {
        item.check = !action;
      }
      return item;
    });
    const objData = {
      empId: this.txtId,
      spId: data.sp_me_id,
    };
    console.log(objData);
    if (!action) {
      this.clinicaSe.insertMedicoEspecialidad(objData).subscribe();
    } else {
      this.clinicaSe.deleteMedicoEspecialidad(objData).subscribe();
    }
  }
}
