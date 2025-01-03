import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ContactComponent } from './sections/contact/contact.component';
import {RevealDirective} from "./reveal/reveal.directive"

@Component({
  selector: 'app-root',
  imports: [
    HeroComponent, 
    AboutComponent, 
    SkillsComponent, 
    ProjectsComponent, 
    ContactComponent,
    RevealDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
