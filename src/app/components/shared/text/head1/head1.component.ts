import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-head1',
  templateUrl: './head1.component.html',
  styleUrls: ['./head1.component.css']
})
export class Head1Component {
  @Input() label : String = '';
}
