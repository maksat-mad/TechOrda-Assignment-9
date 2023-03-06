import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-hero-small-title',
  templateUrl: './hero-small-title.component.html',
  styleUrls: ['./hero-small-title.component.scss']
})
export class HeroSmallTitleComponent {
  @Input() title! : string;
}
