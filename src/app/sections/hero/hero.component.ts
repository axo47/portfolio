// import { Component, OnInit } from '@angular/core';
// import { RevealDirective } from '../../reveal/reveal.directive';

// @Component({
//   selector: 'app-hero',
//   standalone: true,
//   imports: [RevealDirective],
//   templateUrl: './hero.component.html',
//   styleUrls: ['./hero.component.css'],
// })
// export class HeroComponent implements OnInit {
//   private greetings = [
//     'Bonjour',
//     'Hello',
//     'مرحبا',
//     'Hola',
//     'Ciao',
//     'こんにちは',
//     'Olá',
//     'Привет',
//     '안녕하세요',
//     'Hallo'
//   ];
//   private currentIndex = 0;
//   private intervalId: any;

//   ngOnInit() {
//     this.startGreetingAnimation();
//   }

//   ngOnDestroy() {
//     if (this.intervalId) {
//       clearInterval(this.intervalId);
//     }
//   }

//   private startGreetingAnimation() {
//     const welcomeElement = document.getElementById('welcome');
//     if (!welcomeElement) return;

//     const updateGreeting = () => {
//       welcomeElement.style.opacity = '0';
      
//       setTimeout(() => {
//         welcomeElement.textContent = this.greetings[this.currentIndex];
//         welcomeElement.style.opacity = '1';
        
//         this.currentIndex = (this.currentIndex + 1) % this.greetings.length;
//       }, 500); // Attendre que le fade out soit terminé
//     };

//     // Initial greeting
//     updateGreeting();
    
//     // Update greeting every 3 seconds
//     this.intervalId = setInterval(updateGreeting, 3000);
//   }
// }


import { Component, OnInit } from '@angular/core';
import { RevealDirective } from '../../reveal/reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
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