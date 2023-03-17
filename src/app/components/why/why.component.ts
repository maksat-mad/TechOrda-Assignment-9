import { Component } from '@angular/core';
import {Card} from "../../models/card";

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.scss']
})
export class WhyComponent {
  circleImg = '../../../../assets/why/circle.png';
  bagImg = '../../../../assets/why/bag.png';
  rocketImg = '../../../../assets/why/rocket.png';
  userArrowsImg = '../../../../assets/why/user-arrows.png';

  cards: Card[] = [
    {
      path: this.circleImg,
      title: 'Enviromental Law',
      content: 'Environmental legal issues might occur since the planned business activities are designed'
    },
    {
      path: this.bagImg,
      title: 'Corporate and Commercial',
      content: 'We provide a complete range of services for the continuity of your business activities.'
    },
    {
      path: this.rocketImg,
      title: 'Information and Technology',
      content: 'IT not followed by the existing regulation which might cause legal uncertainty and business uncertainty.'
    },
    {
      path: this.userArrowsImg,
      title: 'Other Services',
      content: 'In dealing with disruptive economic and legal challenge, our firm also provide various legal services.'
    }
  ];
}
