import { Component } from '@angular/core';
import {RevealDirective} from '../../reveal/reveal.directive'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
