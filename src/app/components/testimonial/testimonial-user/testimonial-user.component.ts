import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-testimonial-user',
  templateUrl: './testimonial-user.component.html',
  styleUrls: ['./testimonial-user.component.scss']
})
export class TestimonialUserComponent {
  @Input() name!: string;
  @Input() occupation!: string;
  @Input() imgPath!: string;
}
