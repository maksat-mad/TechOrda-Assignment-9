import {Component, Input} from '@angular/core';
import {FooterLink} from "../../../models/footer-link";

@Component({
  selector: 'app-footer-link',
  templateUrl: './footer-link.component.html',
  styleUrls: ['./footer-link.component.scss']
})
export class FooterLinkComponent {
  @Input() footerLink!: FooterLink;
}
