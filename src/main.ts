import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { SquareComponent } from './app/app.component';

bootstrapApplication(SquareComponent, appConfig)
  .catch((err) => console.error(err));
