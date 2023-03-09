import { Component } from '@angular/core';
import {FooterLink} from "../../models/footer-link";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  links: FooterLink[] = [
    {
      title: 'Product',
      links: ['Overview', 'Features', 'Tutorials', 'Pricing', 'Releases']
    },
    {
      title: 'Company',
      links: ['About', 'Press', 'Careers', 'Contact', 'Partners']
    },
    {
      title: 'Support',
      links: ['Help Center', 'Terms of service', 'Legal', 'Privacy Policy', 'Status']
    }
  ];
}
