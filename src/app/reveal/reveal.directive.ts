import {
  Directive,
  ElementRef,
  Renderer2,
  Inject,
  PLATFORM_ID,
  OnInit
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appReveal]',
})
export class RevealDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    // Vérifie si l’environnement est un navigateur
    if (!isPlatformBrowser(this.platformId)) {
      console.warn('appReveal directive is not exécutée sur le serveur.');
      return;
    }

    // Vérifie la compatibilité IntersectionObserver
    if (typeof IntersectionObserver === 'undefined') {
      console.warn('IntersectionObserver non supporté par ce navigateur.');
      return;
    }

    // On ajoute d’abord la classe hidden (état avant animation)
    this.renderer.addClass(this.el.nativeElement, 'reveal-hidden');

    // On crée l’observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // L’élément entre dans le viewport => on ajoute l’animation
            this.renderer.removeClass(this.el.nativeElement, 'reveal-hidden');
            this.renderer.addClass(this.el.nativeElement, 'reveal-active');
          } else {
            // L’élément sort du viewport => on réinitialise
            this.renderer.removeClass(this.el.nativeElement, 'reveal-active');
            this.renderer.addClass(this.el.nativeElement, 'reveal-hidden');
          }
        });
      },
      {
        // threshold = 0.1 : l’Observer déclenchera “isIntersecting = true”
        // si au moins 10% de l'élément est visible.
        threshold: 0.1,
        
        // Optionnel : ajustez le rootMargin si nécessaire
        // Par exemple : rootMargin: '-50px 0px -50px 0px'
      }
    );

    // On lance l’observation de l’élément
    observer.observe(this.el.nativeElement);
  }
}