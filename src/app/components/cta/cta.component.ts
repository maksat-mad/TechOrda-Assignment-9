import { Component } from '@angular/core';
import {Text} from '../../models/text';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent {
  text: Text = {
    title: 'Complex Questions?',
    content: 'Request for a personalized budget for your legal problem. ' +
      'We will send you a coupe options in 24 hours. ' +
      'You can have free consult , if a our first customer'
  };
}
