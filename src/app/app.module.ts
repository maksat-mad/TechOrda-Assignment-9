import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarLinkComponent } from './components/navbar/navbar-link/navbar-link.component';
import { NavbarLogoComponent } from './components/navbar/navbar-logo/navbar-logo.component';
import { NavbarSearchComponent } from './components/navbar/navbar-search/navbar-search.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroBigTitleComponent } from './components/hero/hero-big-title/hero-big-title.component';
import { HeroSmallTitleComponent } from './components/hero/hero-small-title/hero-small-title.component';
import { HeroButtonComponent } from './components/hero/hero-button/hero-button.component';
import { HeroImageComponent } from './components/hero/hero-image/hero-image.component';
import { WhyComponent } from './components/why/why.component';
import { WhyTextComponent } from './components/why/why-text/why-text.component';
import { WhyCardComponent } from './components/why/why-card/why-card.component';
import { AchievementComponent } from './components/achievement/achievement.component';
import { AchievementTextComponent } from './components/achievement/achievement-text/achievement-text.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { TestimonialCardComponent } from './components/testimonial/testimonial-card/testimonial-card.component';
import { TestimonialUserComponent } from './components/testimonial/testimonial-user/testimonial-user.component';
import { CtaComponent } from './components/cta/cta.component';
import { CtaTextComponent } from './components/cta/cta-text/cta-text.component';
import { CtaButtonComponent } from './components/cta/cta-button/cta-button.component';
import { CtaImageComponent } from './components/cta/cta-image/cta-image.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarLinkComponent,
    NavbarLogoComponent,
    NavbarSearchComponent,
    HeroComponent,
    HeroBigTitleComponent,
    HeroSmallTitleComponent,
    HeroButtonComponent,
    HeroImageComponent,
    WhyComponent,
    WhyTextComponent,
    WhyCardComponent,
    AchievementComponent,
    AchievementTextComponent,
    TestimonialComponent,
    TestimonialCardComponent,
    TestimonialUserComponent,
    CtaComponent,
    CtaTextComponent,
    CtaButtonComponent,
    CtaImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
