import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClinicaService } from 'src/app/services/clinica.service';

@Component({
  selector: 'app-historial-paciente',
  templateUrl: './historial-paciente.component.html',
  styleUrls: ['./historial-paciente.component.css']
})
export class HistorialPacienteComponent {

  paciente : any = {}
  historial : any[] = []
  
  idPaciente : number = 0

  //! FORMULARIO

  constructor(private clinicaSe:ClinicaService,private roter: Router) { }

  navegarHistoria(item : any){
    const json = JSON.stringify(item)
    localStorage.setItem('historia-data', json)
    this.roter.navigate(['/historia-info'])
  }

  cargarHistorial() {
    this.clinicaSe.cargarHistorialPacienteById({id: this.idPaciente}).subscribe((data:any)=>{
      this.historial = data;
      console.log(this.historial);
    })
  }

  usuarioID(item: any) {
      if( item == null) return ;
      this.idPaciente  = item
      this.cargarHistorial()
   }
}
