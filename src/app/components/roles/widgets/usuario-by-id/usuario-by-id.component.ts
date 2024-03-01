import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClinicaService } from 'src/app/services/clinica.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-usuario-by-id',
  templateUrl: './usuario-by-id.component.html',
  styleUrls: ['./usuario-by-id.component.css'],
})
export class UsuarioByIdComponent {
  @Input() tipoUsuario: number = 0;
  usuarioBuscados: any[] = [];

  citasDelUsuario: any[] = [];

  @Output() usuarioId = new EventEmitter<number>();

  constructor(private clinicaSe: ClinicaService) {}

  buscarCitasPaciente(termino: string) {
    this.clinicaSe.buscarPaciente({ id: termino }).subscribe((data: any) => {
      this.usuarioBuscados = data;
    });
  }

  cargarUsuario(item: any) {
    this.usuarioId.emit(item.em_id);
    this.citasDelUsuario = item;
  }
}
