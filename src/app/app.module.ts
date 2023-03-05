import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LinkComponent } from './components/navbar/link/link.component';
import { LogoComponent } from './components/navbar/logo/logo.component';
import { SearchComponent } from './components/navbar/search/search.component';
import { HeroComponent } from './components/hero/hero.component';
import { BigTitleComponent } from './components/hero/big-title/big-title.component';
import { SmallTitleComponent } from './components/hero/small-title/small-title.component';
import { ButtonComponent } from './components/hero/button/button.component';
import { ImageComponent } from './components/hero/image/image.component';
import { WhyComponent } from './components/why/why.component';
import { WhyTextComponent } from './components/why/why-text/why-text.component';
import { WhyCardComponent } from './components/why/why-card/why-card.component';
import { AchievementComponent } from './components/achievement/achievement.component';
import { AchievementTextComponent } from './components/achievement/achievement-text/achievement-text.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { TestimonialReviewComponent } from './components/testimonial/testimonial-review/testimonial-review.component';
import { TestimonialReviewCardComponent } from './components/testimonial/testimonial-review/testimonial-review-card/testimonial-review-card.component';
import { TestimonialReviewUserComponent } from './components/testimonial/testimonial-review/testimonial-review-user/testimonial-review-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LinkComponent,
    LogoComponent,
    SearchComponent,
    HeroComponent,
    BigTitleComponent,
    SmallTitleComponent,
    ButtonComponent,
    ImageComponent,
    WhyComponent,
    WhyTextComponent,
    WhyCardComponent,
    AchievementComponent,
    AchievementTextComponent,
    TestimonialComponent,
    TestimonialReviewComponent,
    TestimonialReviewCardComponent,
    TestimonialReviewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
