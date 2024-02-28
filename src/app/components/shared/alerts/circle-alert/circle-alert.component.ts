import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circle-alert',
  templateUrl: './circle-alert.component.html',
  styleUrls: ['./circle-alert.component.css'],
})
export class CircleAlertComponent {
  @Input() selectColor: number = 0;
}
