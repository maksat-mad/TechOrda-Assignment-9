import { Component } from '@angular/core';
import {Review} from "../../models/review";

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {
  userAva = '../../../../assets/testimonial/Photo.png';
  reviews: Review[] = [
    {
      name: 'Anya Tailor Joy',
      occupation: 'CEO, SF Industires',
      imgPath: this.userAva,
      reviewTitle: 'Incredible Experience',
      reviewContent: 'We had an incredible experience working with Landify' +
        ' and were impressed they made such a big difference in only three weeks. ' +
        'Our team is so grateful for the wonderful improvements they made and their ' +
        'ability to get familiar with the concept so quickly.'
    },
    {
      name: 'Sri Alam',
      occupation: 'CEO, Membagongkan GROUP',
      imgPath: this.userAva,
      reviewTitle: 'Dependable, Responsive, Professional Partner',
      reviewContent: 'Fermin Apps has collaborated with Landify team for several' +
        ' projects such as Photo Sharing Apps and Custom Social Networking Apps. ' +
        'The experience has been pleasant, professional and exceeding our expectations.'
    }
  ];
}
