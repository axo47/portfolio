import { Component } from '@angular/core';
import {RevealDirective} from '../../reveal/reveal.directive'


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
