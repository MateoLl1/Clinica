import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClinicaService } from 'src/app/services/clinica.service';

@Component({
  selector: 'app-consulta-paciente',
  templateUrl: './consulta-paciente.component.html',
  styleUrls: ['./consulta-paciente.component.css']
})
export class ConsultaPacienteComponent {
  //! PARAMETROS
  espId: number = 0;
  drID: number = 0;
  paId: number = 0;
  agID: number = 0;
  //!DATOS
  especiliadad: any = {};
  paciente: any = {};
  doctor: any = {};

  //!FORMULARIO
  error : boolean = false;
  txtAsistenecia : boolean = false;
  txtMotivo : string = ''
  txtDiagnostico : string = ''
  txtTratamiento : string = ''
  txtIndicaciones : string = ''

  constructor(private activeLink:ActivatedRoute,private clinicaSe:ClinicaService) {
    activeLink.params.subscribe((id)=>{
      this.espId = id['espID'];
      this.drID = id['dcID'];
      this.paId = id['paID'];  
      this.agID = id['agID'];  
    })
    this.cargarDatos()
  }

  validar():boolean{
    this.error = true
    if( this.txtMotivo === '' || this.txtMotivo.length < 10) return false;
    if( this.txtDiagnostico === '' || this.txtDiagnostico.length < 10) return false;
    if( this.txtTratamiento === '' || this.txtTratamiento.length < 10) return false;
    if( this.txtIndicaciones === '' || this.txtIndicaciones.length < 10) return false;
    this.error = false
    return true 
  }

  terminarConsulta(){
    if (this.txtAsistenecia) {
      if (!this.validar()) return
    }
    const objData = {
      motivo : this.txtMotivo,
      diagnostico : this.txtDiagnostico,
      tratamiento : this.txtTratamiento,
      indicaciones : this.txtIndicaciones,
      asitencia : this.txtAsistenecia,
      agId : this.agID,
    }
    
    this.clinicaSe.insertConsultayDiagnostico(objData).subscribe((data:any)=>{
      console.log(data);
      
    })
    
  }


  asistencia(){
    this.txtAsistenecia = !this.txtAsistenecia
  }

  cargarDatos(){
    this.clinicaSe.cargarUsuariosById({id : this.paId, tpId : 4}).subscribe((data:any)=>{
      this.paciente = data[0]
      
    })
    this.clinicaSe.getEspecialidadMedicaById({id : this.espId}).subscribe((data:any)=>{
      this.especiliadad = data[0]
    })
    this.clinicaSe.cargarUsuariosById({id : this.drID  , tpId : 2}).subscribe((data:any)=>{
      this.doctor = data[0]
    })
  }


}
