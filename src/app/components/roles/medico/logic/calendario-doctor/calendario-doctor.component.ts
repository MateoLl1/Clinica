import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClinicaService } from 'src/app/services/clinica.service';
import { HelperService } from 'src/app/services/helper.service';


interface Cita {
  id: number;
  atendido: boolean;
}

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

  constructor(
    private clinica: ClinicaService,
    private router: Router,
    private help :HelperService) {
    this.obtenerTokenData();
    this.cargarCitasPorEspecialidad();
    this.fechaHoy =help.cargarFechadeHoy();
  }

  

  navegarConsulta(item : any){
    console.log(item);
    const espID = item.sp_id;
    const drID = item.dr_id;
    const paID = item.pa_id;
    const agID = item.ag_id;
    this.router.navigate([`/consulta-paciente/${espID}/${drID}/${paID}/${agID}`]);
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
        this.citas = data.map((cita: any) => ({ ...cita, atendido: false })) as Cita[];
        this.citasFiltradas = this.citas
        this.validarCitas()
        console.log(this.citasFiltradas);
      });
  }
  
  validarCitas() {
    this.citas.forEach((cita: Cita) => {
      this.clinica.validarConsultaYaAtendida(cita).subscribe((data: any) => {
        cita.atendido = data;
      });
    });
  }
  
  
  

  obtenerTokenData() {
    this.doctor = localStorage.getItem('infoUserToken');
    this.doctor = JSON.parse(this.doctor);
  }
}
