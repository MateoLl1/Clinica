import { Component } from '@angular/core';
import { ClinicaService } from 'src/app/services/clinica.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-calendario-doctor',
  templateUrl: './calendario-doctor.component.html',
  styleUrls: ['./calendario-doctor.component.css'],
})
export class CalendarioDoctorComponent {
  fechaHoy : string = ''
  doctor: any = null;
  especialidades: any[] = [];
  citas: any[] = [];
  citasFiltradas: any[] = [];
  txtFiltroValor: number = 0;

  

  constructor(private clinica: ClinicaService,private help :HelperService) {
    this.obtenerTokenData();
    this.cargarCitasPorEspecialidad();
    this.fechaHoy =help.cargarFechadeHoy();
  }

  filtrarCitas() {
    if (this.txtFiltroValor != 0) {
      const newData = this.citas.filter(citas => citas.sp_id == this.txtFiltroValor);
      this.citasFiltradas = newData;
      const name = this.especialidades.find(esp => esp.sp_me_id[0] == this.txtFiltroValor);
      
      for (let i = 0; i < this.citasFiltradas.length; i++) {
        this.citasFiltradas[i].sp_me_nombre = name.sp_me_nombre;
      }
    }else{
      this.citasFiltradas = this.citas;
    }
  }

  cargarEspecialidades() {
    this.clinica
      .getEspecilidadMedicoCargado({ id: this.doctor.em_id })
      .subscribe((data: any) => {
        this.especialidades = data;
      });
  }

  cargarCitasPorEspecialidad() {
    this.cargarEspecialidades();
    this.clinica
      .caledarioCitasDoctor({ id: this.doctor.em_id })
      .subscribe((data: any) => {
        this.citas = data;
        this.citasFiltradas = this.citas;
      });
  }

  obtenerTokenData() {
    this.doctor = localStorage.getItem('infoUserToken');
    this.doctor = JSON.parse(this.doctor);
  }
}
