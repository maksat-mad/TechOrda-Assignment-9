import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-hero-big-title',
  templateUrl: './hero-big-title.component.html',
  styleUrls: ['./hero-big-title.component.scss']
})
export class HeroBigTitleComponent {
  @Input() title! : string;
}
