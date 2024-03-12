import { Component } from '@angular/core';

@Component({
  selector: 'app-historia-info',
  templateUrl: './historia-info.component.html',
  styleUrls: ['./historia-info.component.css']
})
export class HistoriaInfoComponent {
  historia: any = {}

  constructor() {
    const json = localStorage.getItem('historia-data')
    if(json == null) return;
    this.historia = JSON.parse(json);
    console.log(this.historia);
  }
}
