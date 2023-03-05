import {Component, Input} from '@angular/core';
import {Card} from "../../../models/card";

@Component({
  selector: 'app-why-card',
  templateUrl: './why-card.component.html',
  styleUrls: ['./why-card.component.scss']
})
export class WhyCardComponent {
  @Input() card! : Card;
}
