import { Component } from '@angular/core';
import {RevealDirective} from '../../reveal/reveal.directive'


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
