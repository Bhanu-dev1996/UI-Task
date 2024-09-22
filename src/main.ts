import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { MessageService } from 'primeng/api';

const appConfig = {
  providers: [MessageService],
};

bootstrapApplication(AppComponent, appConfig,).catch(err => console.error(err));
