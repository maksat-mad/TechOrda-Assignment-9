import {Component, Input} from '@angular/core';
import {Text} from "../../../models/text";

@Component({
  selector: 'app-cta-text',
  templateUrl: './cta-text.component.html',
  styleUrls: ['./cta-text.component.scss']
})
export class CtaTextComponent {
  @Input() text!: Text;
}
