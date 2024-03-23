import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { PersonasService } from './personas.service';
import { LoggingService } from './LoggingService.service';
import { DataServices } from './data.services';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { LoginService } from './login/login.service';
import { LoginGuardian } from './login/login-guardian.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), 
  PersonasService, 
  LoggingService, 
  DataServices, 
  provideHttpClient(withFetch()), 
  LoginService,
  LoginGuardian
]
};
