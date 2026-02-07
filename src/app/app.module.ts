import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteNavComponent } from './components/site-nav/site-nav.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { WritingSectionComponent } from './components/writing-section/writing-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteNavComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    ExperienceSectionComponent,
    WritingSectionComponent,
    ContactSectionComponent,
    SiteFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
