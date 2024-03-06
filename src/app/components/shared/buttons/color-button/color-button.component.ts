import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-button',
  templateUrl: './color-button.component.html',
  styleUrls: ['./color-button.component.css'],
})
export class ColorButtonComponent {
  @Input() selectedColor: number = 0;
  @Input() label: String = '';
}
