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
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';

  // Récupère toutes les sections marquées avec une référence
  @ViewChildren('sectionRef') sections!: QueryList<ElementRef>;

  // Stocke l'ID de la section visible
  activeSection: string | null = null;

  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Vérifie si l'application s'exécute dans un navigateur
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    // Vérifie si le code s'exécute dans un navigateur
    if (!this.isBrowser) {
      console.warn('IntersectionObserver n’est pas disponible dans un environnement serveur.');
      return;
    }

    // Vérifie si l'API IntersectionObserver est disponible dans le navigateur
    if (typeof IntersectionObserver === 'undefined') {
      console.warn('IntersectionObserver n’est pas pris en charge par ce navigateur.');
      return;
    }

    // Crée un IntersectionObserver pour observer les sections visibles
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      },
      { threshold: 0.3 } // Sensibilité : 30% de la section visible
    );

    // Observe chaque section référencée
    this.sections.forEach((section) => {
      observer.observe(section.nativeElement);
    });
  }

  scrollToSection(sectionId: string): void {
    // Défilement fluide vers une section spécifique
    if (!this.isBrowser) {
      console.warn('scrollToSection n’est pas disponible dans un environnement serveur.');
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}