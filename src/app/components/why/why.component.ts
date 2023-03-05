import { Component } from '@angular/core';
import {Text} from '../../models/text';
import {Card} from "../../models/card";

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.scss']
})
export class WhyComponent {
  text: Text = {
    title: 'Why do we help with legalization?',
    content: 'We are here for UMKM in Indonesia to carry out the legalization process, which is sometimes complicated.'
  };

  cards: Card[] = [
    {
      path: '../../../../assets/why/circle.png',
      title: 'Enviromental Law',
      content: 'Environmental legal issues might occur since the planned business activities are designed'
    },
    {
      path: '../../../../assets/why/bag.png',
      title: 'Corporate and Commercial',
      content: 'We provide a complete range of services for the continuity of your business activities.'
    },
    {
      path: '../../../../assets/why/rocket.png',
      title: 'Information and Technology',
      content: 'IT not followed by the existing regulation which might cause legal uncertainty and business uncertainty.'
    },
    {
      path: '../../../../assets/why/user-arrows.png',
      title: 'Other Services',
      content: 'In dealing with disruptive economic and legal challenge, our firm also provide various legal services.'
    }
  ];
}
