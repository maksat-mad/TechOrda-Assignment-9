import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { WhyComponent } from './components/why/why.component';
import { AchievementComponent } from './components/achievement/achievement.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubFooterComponent } from './components/footer/sub-footer/sub-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    WhyComponent,
    AchievementComponent,
    TestimonialComponent,
    CtaComponent,
    FooterComponent,
    SubFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
