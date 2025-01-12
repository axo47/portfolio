import { Component } from '@angular/core';
import {RevealDirective} from '../../reveal/reveal.directive'


@Component({
  selector: 'app-about-en',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './about-en.component.html',
  styleUrl: './about-en.component.css'
})
export class AboutComponentEn {

}
