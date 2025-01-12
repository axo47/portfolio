import { Component, OnInit } from '@angular/core';
import { RevealDirective } from '../../reveal/reveal.directive';

@Component({
  selector: 'app-hero-en',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './hero-en.component.html',
  styleUrls: ['./hero-en.component.css'],
})
export class HeroComponentEn implements OnInit {
  private greetings = [
    'Bonjour',
    'Hello',
    'مرحبا',
    'Hola',
    'Ciao',
    'こんにちは',
    'Olá',
    'Привет',
    '안녕하세요',
    'Hallo'
  ];
  private currentIndex = 0;
  private isAnimating = false;

  ngOnInit() {
    this.startGreetingCycle();
  }

  private startGreetingCycle() {
    const welcomeElement = document.getElementById('welcome');
    if (!welcomeElement) return;


    const updateGreeting = () => {
      if (this.isAnimating) return;
      this.isAnimating = true;

      // Mettre à jour le texte
      welcomeElement.textContent = this.greetings[this.currentIndex];
    
      // Réinitialiser l'animation en supprimant et réajoutant la classe
      welcomeElement.style.animation = 'none';


      // Préparer le prochain mot après la fin de l'animation
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.greetings.length;
        this.isAnimating = false;
        updateGreeting();
      }, 3000); // Exactement 3 secondes comme dans votre CSS
    };

    // Démarrer le cycle
    welcomeElement.textContent = this.greetings[0];
    updateGreeting();
  }

  ngOnDestroy() {
    // La gestion de la destruction est automatique car nous utilisons setTimeout
  }
}