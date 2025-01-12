import { Component } from '@angular/core';
import {RevealDirective} from '../../reveal/reveal.directive'


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
