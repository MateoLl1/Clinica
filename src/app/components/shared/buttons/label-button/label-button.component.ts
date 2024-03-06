import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label-button',
  templateUrl: './label-button.component.html',
  styleUrls: ['./label-button.component.css'],
})
export class LabelButtonComponent {
  @Input() label: String = '';
}
