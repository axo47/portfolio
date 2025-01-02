import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appReveal]',
})
export class RevealDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'reveal-active');
          observer.unobserve(this.el.nativeElement);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(this.el.nativeElement);
    this.renderer.addClass(this.el.nativeElement, 'reveal-hidden');
  }
}