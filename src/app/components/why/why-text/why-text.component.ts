import {Component, Input} from '@angular/core';
import {Text} from '../../../models/text';

@Component({
  selector: 'app-why-text',
  templateUrl: './why-text.component.html',
  styleUrls: ['./why-text.component.scss']
})
export class WhyTextComponent {
 @Input() text! : Text;
}
