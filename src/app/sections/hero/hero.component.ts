import { Component } from '@angular/core';
import {RevealDirective} from '../../reveal/reveal.directive'


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
