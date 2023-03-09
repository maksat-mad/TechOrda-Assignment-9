import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-footer',
  templateUrl: './sub-footer.component.html',
  styleUrls: ['./sub-footer.component.scss']
})
export class SubFooterComponent {
  text = '© 2021 Lawliet. All rights reserved';

  socialIconsPaths = [
    './assets/footer/sub-footer/instagram.png',
    './assets/footer/sub-footer/basket.png',
    './assets/footer/sub-footer/twitter.png',
    './assets/footer/sub-footer/youtube.png'
  ];
}
