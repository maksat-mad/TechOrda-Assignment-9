import { Component } from '@angular/core';
import {Text} from '../../models/text';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent {
  texts: Text[] = [
    {
      title: 'Some count that matters',
      content: 'Our achievement in the journey depicted in numbers'
    },
    {
      title: '30',
      content: 'Clients'
    },
    {
      title: '300+',
      content: 'Taken business legalities'
    },
    {
      title: '8',
      content: 'Years of Journey'
    }
  ];
}
