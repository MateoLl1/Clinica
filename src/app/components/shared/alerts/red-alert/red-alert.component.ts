import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-red-alert',
  templateUrl: './red-alert.component.html',
  styleUrls: ['./red-alert.component.css'],
})
export class RedAlertComponent {
  @Input() label: String = '';
}
