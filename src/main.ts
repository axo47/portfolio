import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import 'intersection-observer'; // Import du polyfill

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
