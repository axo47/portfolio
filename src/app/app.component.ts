import {
  Component,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
  Inject,
  PLATFORM_ID,
} from '@angular/core';

import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ContactComponent } from './sections/contact/contact.component';



import { HeroComponentEn } from './sections/hero-en/hero-en.component';
import { AboutComponentEn } from './sections/about-en/about-en.component';
import { SkillsComponentEn } from './sections/skills-en/skills-en.component';
import { ProjectsComponentEn } from './sections/projects-en/projects-en.component';
import { ContactComponentEn } from './sections/contact-en/contact-en.component';


import { CommonModule } from '@angular/common'; // Import CommonModule



import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,

    HeroComponentEn,
    AboutComponentEn,
    SkillsComponentEn,
    ProjectsComponentEn,
    ContactComponentEn,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements AfterViewInit {
  title = 'portfolio';
  language: string = 'fr'; // Default language set to French

  // Function to switch languages
  switchLanguage(lang: string): void {
    this.language = lang;
  }

  // Reference for sections to track visibility
  @ViewChildren('sectionRef') sections!: QueryList<ElementRef>;

  // Store the active section ID
  activeSection: string | null = null;

  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId); // Check if running in a browser
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) {
      console.warn('IntersectionObserver is not available in a server environment.');
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      console.warn('IntersectionObserver is not supported by this browser.');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      },
      { threshold: 0.3 } // Sensitivity: 30% visibility
    );

    this.sections.forEach((section) => {
      observer.observe(section.nativeElement);
    });
  }

  scrollToSection(sectionId: string): void {
    if (!this.isBrowser) {
      console.warn('scrollToSection is not available in a server environment.');
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}