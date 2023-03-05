import {Component, Input} from '@angular/core';
import {Text} from '../../../models/text';

@Component({
  selector: 'app-achievement-text',
  templateUrl: './achievement-text.component.html',
  styleUrls: ['./achievement-text.component.scss']
})
export class AchievementTextComponent {
  @Input() text!: Text;
}
